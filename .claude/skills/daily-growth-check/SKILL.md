---
name: daily-growth-check
description: Daily SEO + AI-visibility + Instagram growth check for The Happy Hunting Grounds (thehappyhuntinggrounds.org, @thehappyhuntinggrounds). Checks how the site and Instagram show up across search engines (Google, Bing, DuckDuckGo, Yahoo, Brave, Apple, Yandex) and AI platforms (ChatGPT, Google AI Overviews/Gemini, Perplexity, Claude, Copilot, Meta AI, Grok), compares with yesterday, and writes a short prioritized to-do list. Use when the scheduled daily run fires, or when the user asks for a growth check, SEO check, "how do I get more eyes on my site/Instagram", or today's SEO report.
---

# Daily Growth Check

## Goal

Every day, answer one question: **what are the 3 highest-impact things to do today to get more people to thehappyhuntinggrounds.org and @thehappyhuntinggrounds?** Research broadly, recommend narrowly. A report that lists 40 issues gets ignored; one that says "do these 3 things, here's why, here's the exact copy" gets done.

Settings live in `seo/config.json` (brand, domains, Instagram handle, seed keywords, competitors, `dailySpendCapUsd`). Read it first. If `competitors` is empty, fill it in step 4 and save it.

## Ground rules

- **Never spend money above `dailySpendCapUsd`.** At 0, use only free sources. Paid OpenSEO tools (AI-visibility checks, `explore_prompt`, large keyword pulls) need an estimate first, and the estimate must fit the cap.
- **Evidence over guesses.** Every recommendation cites what you observed today: a check result, a search result, an AI answer, a SERP. If a source was unreachable, say "not checked" rather than "fine."
- **Don't repeat yourself.** Read the last 7 reports in `seo/reports/`. Don't re-recommend an item that's still open. Carry it forward in the "Still open" list and pick the next-best new action.
- **Content is foster-dog advice.** The voice is calm and assertive. Suggested copy should match `src/content.mjs` and `strategy/audience-analysis.md`.

## Workflow

### 1. Technical health (free, every day)

Run `node scripts/seo-check.mjs`. It checks, per domain:
- DNS, HTTPS, the redirect between the two domains (one should 301 to the other, never two copies of the site)
- title, meta description, canonical, H1, `noindex`, Open Graph, and JSON-LD types (want `Organization` or `NGO` with `sameAs` → Instagram)
- whether the site links to Instagram, and images missing alt text
- `robots.txt` per crawler: search engines plus every AI bot, labeled "live" (affects answers today) vs "training"
- sitemap and `llms.txt`
- Google PageSpeed (mobile and desktop): performance, SEO, accessibility, LCP/CLS, and failed SEO audits

If the script reports network errors (`ENOTFOUND`, `fetch failed`, or a 403 from the proxy), retry the home page, `robots.txt` and `sitemap.xml` with WebFetch. If those fail too, record **"site unreachable from this run's network: not checked"** and move on. Don't call the site down. Only call it down when a working network gets an error from the site itself.

What matters most, in order: the site isn't resolving or loading → `noindex` or a robots block on a search or live AI bot → both domains serving duplicate copies → missing title or description → no sitemap → slow mobile LCP (>2.5s) → missing schema or `sameAs` → missing `llms.txt`.

### 2. Search engine presence (free)

Use WebSearch (and Bing/DuckDuckGo result pages via WebFetch when reachable):
- `site:thehappyhuntinggrounds.org`: roughly how many pages are indexed? Zero means indexing is fix #1. Recommend Google Search Console and Bing Webmaster Tools verification and sitemap submission. Bing covers DuckDuckGo, Yahoo, Copilot and much of ChatGPT search, so it's worth the 5 minutes.
- Branded query `"The Happy Hunting Grounds" dog` and `thehappyhuntinggrounds`: does the site or Instagram rank on page 1? Note who outranks them. "Happy hunting grounds" is a common phrase, so a branded result set full of unrelated pages means the site needs stronger entity signals (schema, consistent name, location, `sameAs`).
- Rotate through 3 `seedKeywords` per day (pick the 3 least recently checked; the reports say which). Who ranks top 5? Is there a page on the site that answers it? Are there "People also ask" / forum results the brand could answer?

With OpenSEO connected (the `openseo` MCP tools), also use `get_ranked_keywords`, `get_serp_results`, and keyword research for search volume and difficulty. Follow the installed `openseo:seo-audit` and `openseo:keyword-research` skills when going deep. Prefer keywords with real volume and low difficulty that match a carousel topic.

### 3. AI platform visibility

Goal: when someone asks an AI "how do I help my new foster dog decompress?" or "best foster dog training advice," the brand gets named or cited.

- **Free, every day:** pick 2 prompts from the seed topics (rotate) and use WebSearch to see which pages AI answers would likely cite: top results, Reddit threads, list articles. Check whether `robots.txt` lets every live AI bot in (step 1).
- **Paid, only within cap:** if OpenSEO is connected and `dailySpendCapUsd` > 0, read the existing AI-visibility tracker (`get_ai_visibility_tracker`, `get_ai_visibility_results`, `get_ai_visibility_sources`, `get_ai_visibility_trend`). It covers ChatGPT, Google AI Overviews/AI Mode, Gemini and Perplexity. Don't buy new answers if a recent run exists. If no tracker exists, propose one in the report with the cost from `estimate_ai_visibility_cost`, and don't create it. The user approves spend. For a full audit, follow the `openseo:ai-visibility-audit` skill.
- Platforms with no tool access (Claude, Copilot, Meta AI, Grok) are covered by proxy: Claude and Copilot lean on Brave/Bing results, Meta AI leans on Instagram/Facebook and Bing. Say "covered by proxy" in the report, never "checked."

The levers that move AI visibility: being on the third-party pages AI cites (list articles, Reddit, rescue directories like Petfinder), an owned page that answers the exact question in the first paragraph, clear entity data (schema, consistent name everywhere), and crawler access.

### 4. Competitors (weekly; on the day after the last check, or when `competitors` is empty)

Find 3–5 accounts or sites winning the same queries: foster-dog and rescue-training creators, rescue orgs, trainers. Save them to `seo/config.json`. Note one thing each does that the brand doesn't (a page, a format, a list they're on).

### 5. Instagram discoverability (free)

Instagram search is keyword-based now, and public IG posts can appear in Google. Check what's checkable:
- Profile (WebFetch `https://www.instagram.com/thehappyhuntinggrounds/` if reachable; IG often walls it, so note "not checked" if so). The **Name** field should contain a keyword (e.g. "Foster Dog Training | Happy Hunting Grounds"), the bio should say who it helps and where, and the link should go to the site.
- Planned posts in this repo (`src/content.mjs`, `deliver/`): does each carousel have a keyword-led caption, alt text, and 3–5 specific hashtags? Is there a carousel for today's best-opportunity keyword from step 2? If not, propose the next carousel: topic, hook, and the search query it targets.
- Cross-linking: site → IG (link plus `sameAs`), IG → site (bio link), and blog/page versions of top carousels so Google and AI can cite them. Carousels alone are mostly invisible to search engines and AI.
- Collabs and features: rescue orgs, shelters, and foster accounts to tag or collab with (from step 4).

### 6. Write the report

Write `seo/reports/YYYY-MM-DD.md`:

```
# Growth check — YYYY-MM-DD
**Today's 3 moves** (do these first)
1. <action> — why (evidence) — exact steps / copy — effort (5 min / 1 hr / half day) — expected impact
2. …
3. …

## Scoreboard  (vs yesterday)
| Metric | Today | Δ |  — indexed pages, branded rank, PageSpeed mobile perf/SEO, AI bots allowed (n/total), schema present, keywords on page 1, AI mentions (if tracked), spend today

## What I checked
Search engines: … | AI platforms: … (checked / covered by proxy / not checked) | Instagram: … | Keywords rotated today: …

## Still open (from earlier days)
- [ ] item — first raised YYYY-MM-DD

## Next carousel idea
Topic · hook · target query · why now
```

Keep it under ~80 lines. Then append one line to `seo/log.md`: `YYYY-MM-DD | indexed=… | branded=… | psi_mobile=… | ai_bots_ok=… | top_move=…`.

### 7. Ship it

Commit the report, the log line, and any `seo/config.json` updates to the current branch. Push, and open (or update) a draft PR titled `Daily growth check YYYY-MM-DD` so the report is easy to read on a phone. Don't edit site code or Instagram content. This skill recommends and drafts; the user decides.
