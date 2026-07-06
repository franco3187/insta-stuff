// Downscale 2x renders to 1080x1350 delivery PNGs + build Canva-import HTML per carousel.
import { mkdirSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import sharp from "sharp";
import { CAROUSELS, BRAND } from "../src/content.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// Canva import HTML links images by raw.githubusercontent URL, so REPO/BRANCH
// must point at wherever these PNGs actually get pushed. Derive from git by
// default (current remote + branch); override with DELIVER_REPO / DELIVER_BRANCH.
const sh = (cmd, fallback) => {
  try { return execSync(cmd, { cwd: ROOT, stdio: ["ignore", "pipe", "ignore"] }).toString().trim(); }
  catch { return fallback; }
};
const remoteMatch = sh("git config --get remote.origin.url", "").match(/([^/:]+\/[^/]+?)(?:\.git)?$/);
const REPO = process.env.DELIVER_REPO || (remoteMatch ? remoteMatch[1] : "franco3187/insta-stuff");
const BRANCH = process.env.DELIVER_BRANCH || sh("git rev-parse --abbrev-ref HEAD", "main");
const RAW = `https://raw.githubusercontent.com/${REPO}/${BRANCH}/deliver`;

mkdirSync(`${ROOT}/deliver/canva`, { recursive: true });

const missing = [];
for (const c of CAROUSELS) {
  const srcDir = `${ROOT}/out/${c.id}`;
  const outDir = `${ROOT}/deliver/${c.id}`;
  if (!existsSync(srcDir)) { missing.push(c.id); continue; }
  mkdirSync(outDir, { recursive: true });
  const slides = readdirSync(srcDir).filter(f => /^slide-\d+\.png$/.test(f)).sort();
  if (slides.length === 0) { missing.push(c.id); continue; }
  for (const f of slides) {
    await sharp(`${srcDir}/${f}`).resize(1080, 1350).png({ compressionLevel: 9 }).toFile(`${outDir}/${f}`);
  }
  // Canva import HTML: one page per slide, image-backed (faithful artwork, editable as Canva pages)
  const pages = slides.map((f, i) => {
    const label = i === 0 ? `Cover` : i === slides.length-1 ? `CTA` : `Slide ${i}`;
    return `  <div class="page" data-document-role="page" data-label="${c.no}-${i+1} ${label}"><img src="${RAW}/${c.id}/${f}"></div>`;
  }).join("\n");
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${BRAND.series} No.${c.no} — ${c.slug}</title>
<style>*{margin:0;padding:0}.page{width:1080px;height:1350px;position:relative;overflow:hidden}.page img{width:1080px;height:1350px;display:block;object-fit:cover}</style>
</head><body>
${pages}
</body></html>`;
  writeFileSync(`${ROOT}/deliver/canva/${c.id}.html`, html);
  console.log(`deliver ${c.id}: ${slides.length} slides + canva html`);
}
if (missing.length) {
  console.warn(`\n⚠ skipped ${missing.length} carousel(s) with no renders in out/: ${missing.join(", ")}`);
  console.warn(`  run: node scripts/build.mjs && node scripts/render.mjs  (then re-run deliver)`);
}
console.log("done.");
