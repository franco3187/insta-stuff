// Free, deterministic technical checks for the daily growth run.
// Usage: node scripts/seo-check.mjs [seo/config.json]  → JSON on stdout.
// Every check records what it saw; a check that can't reach the site says so
// instead of guessing (the skill falls back to WebFetch for those).
import { readFile } from "node:fs/promises";
import { resolve4, resolveCname } from "node:dns/promises";

const cfg = JSON.parse(await readFile(process.argv[2] ?? "seo/config.json", "utf8"));
const domains = [cfg.primaryDomain, ...(cfg.otherDomains ?? [])];

// Crawlers that feed search engines and AI answers. Blocking a "live" bot keeps
// you out of that platform's answers; blocking a "training" bot only affects training.
const BOTS = {
  Googlebot: "Google Search", Bingbot: "Bing / DuckDuckGo / Yahoo / Copilot / ChatGPT search index",
  Applebot: "Apple / Siri / Spotlight", DuckDuckBot: "DuckDuckGo", YandexBot: "Yandex",
  "OAI-SearchBot": "ChatGPT search (live)", "ChatGPT-User": "ChatGPT browsing (live)", GPTBot: "OpenAI training",
  PerplexityBot: "Perplexity (live)", "Perplexity-User": "Perplexity browsing (live)",
  ClaudeBot: "Anthropic training", "Claude-SearchBot": "Claude search (live)", "Claude-User": "Claude browsing (live)",
  "Google-Extended": "Gemini training", "Meta-ExternalAgent": "Meta AI", "meta-externalfetcher": "Meta AI fetch",
  "Applebot-Extended": "Apple Intelligence training", CCBot: "Common Crawl (many LLMs)", Bytespider: "ByteDance",
};

async function get(url, ms = 20000) {
  try {
    const r = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(ms),
      headers: { "user-agent": "Mozilla/5.0 (compatible; HHG-growth-check/1.0)" } });
    return { ok: r.ok, status: r.status, url: r.url, headers: Object.fromEntries(r.headers), text: await r.text() };
  } catch (e) {
    return { ok: false, error: String(e.cause?.code ?? e.message) };
  }
}

// Minimal robots.txt reader: which groups disallow "/" for each bot.
function robotsBlocks(txt) {
  const groups = []; let cur = null;
  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.replace(/#.*/, "").trim(); if (!line) continue;
    const [k, ...v] = line.split(":"); const key = k.trim().toLowerCase(); const val = v.join(":").trim();
    if (key === "user-agent") { if (!cur || cur.rules.length) groups.push(cur = { agents: [], rules: [] }); cur.agents.push(val.toLowerCase()); }
    else if (cur && (key === "disallow" || key === "allow")) cur.rules.push([key, val]);
  }
  const out = {};
  for (const bot of Object.keys(BOTS)) {
    const g = groups.find(g => g.agents.includes(bot.toLowerCase())) ?? groups.find(g => g.agents.includes("*"));
    out[bot] = !!g?.rules.some(([k, v]) => k === "disallow" && v === "/") && !g.rules.some(([k, v]) => k === "allow" && v === "/");
  }
  return out;
}

const meta = (html, re) => html.match(re)?.[1]?.trim() ?? null;

async function checkDomain(d) {
  const r = { domain: d, dns: {}, https: null, robots: null, sitemap: null, llmsTxt: null, page: null };
  try { r.dns.a = await resolve4(d); } catch (e) { r.dns.error = e.code; }
  try { r.dns.www = await resolveCname("www." + d); } catch { try { r.dns.www = await resolve4("www." + d); } catch (e) { r.dns.wwwError = e.code; } }

  const home = await get(`https://${d}/`);
  r.https = { status: home.status ?? null, finalUrl: home.url ?? null, error: home.error ?? null,
    hsts: !!home.headers?.["strict-transport-security"] };
  if (!home.ok) return r;

  const h = home.text;
  const ld = [...h.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
  r.page = {
    title: meta(h, /<title[^>]*>([\s\S]*?)<\/title>/i),
    description: meta(h, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)/i),
    canonical: meta(h, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)/i),
    h1: [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, "").trim()),
    lang: meta(h, /<html[^>]+lang=["']([^"']*)/i),
    viewport: /name=["']viewport["']/i.test(h),
    noindex: /<meta[^>]+robots[^>]+noindex/i.test(h),
    ogTitle: meta(h, /property=["']og:title["'][^>]+content=["']([^"']*)/i),
    ogImage: meta(h, /property=["']og:image["'][^>]+content=["']([^"']*)/i),
    jsonLdTypes: ld.flatMap(s => [...s.matchAll(/"@type"\s*:\s*"([^"]+)"/g)].map(m => m[1])),
    sameAsInstagram: ld.some(s => /instagram\.com\//i.test(s)),
    linksToInstagram: new RegExp(`instagram\\.com/${cfg.instagram}`, "i").test(h),
    imgsMissingAlt: [...h.matchAll(/<img\b(?![^>]*\balt=)[^>]*>/gi)].length,
    words: h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>/gi, " ").split(/\s+/).filter(Boolean).length,
  };

  const robots = await get(`https://${d}/robots.txt`);
  r.robots = robots.ok ? { found: true, blocked: robotsBlocks(robots.text),
    sitemaps: [...robots.text.matchAll(/^sitemap:\s*(\S+)/gim)].map(m => m[1]) } : { found: false, status: robots.status ?? robots.error };

  const sm = await get(r.robots?.sitemaps?.[0] ?? `https://${d}/sitemap.xml`);
  r.sitemap = sm.ok ? { found: true, urls: (sm.text.match(/<loc>/g) ?? []).length } : { found: false, status: sm.status ?? sm.error };

  const llms = await get(`https://${d}/llms.txt`);
  r.llmsTxt = { found: !!llms.ok && !/<html/i.test(llms.text) };
  return r;
}

async function pageSpeed(url, strategy) {
  const r = await get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${strategy}&category=performance&category=seo&category=accessibility&category=best-practices`, 90000);
  if (!r.ok) return { error: r.status ?? r.error };
  const j = JSON.parse(r.text); const c = j.lighthouseResult?.categories ?? {}; const a = j.lighthouseResult?.audits ?? {};
  return {
    scores: Object.fromEntries(Object.entries(c).map(([k, v]) => [k, Math.round(v.score * 100)])),
    lcp: a["largest-contentful-paint"]?.displayValue, cls: a["cumulative-layout-shift"]?.displayValue, inp: j.loadingExperience?.metrics?.INTERACTION_TO_NEXT_PAINT_MS?.category ?? null,
    failedSeoAudits: Object.values(a).filter(x => x.score === 0 && c.seo?.auditRefs?.some(ref => ref.id === x.id)).map(x => x.title),
  };
}

const results = { date: new Date().toISOString().slice(0, 10), bots: BOTS, domains: [] };
for (const d of domains) results.domains.push(await checkDomain(d));
const live = results.domains.find(d => d.https?.status === 200);
if (live) results.pageSpeed = { mobile: await pageSpeed(live.https.finalUrl, "mobile"), desktop: await pageSpeed(live.https.finalUrl, "desktop") };
console.log(JSON.stringify(results, null, 2));
