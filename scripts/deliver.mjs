// Downscale 2x renders to 1080x1350 delivery PNGs + build Canva-import HTML per carousel.
import { mkdirSync, writeFileSync, readdirSync, existsSync, copyFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import sharp from "sharp";
import { CAROUSELS, BRAND } from "../src/content.mjs";

// Repo root, derived from this file's location — no hard-coded absolute path.
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// Where the Canva HTML looks for its slide images. Default is a path relative to
// deliver/canva/ that resolves to the sibling deliver/<id>/ folders, so the files
// work offline with no dependence on a repo being public or a branch surviving.
// Override with e.g. CANVA_IMAGE_BASE="https://raw.githubusercontent.com/<owner>/<repo>/<branch>/deliver"
// when you need absolute, hosted URLs for Canva's import-from-URL flow.
const IMAGE_BASE = process.env.CANVA_IMAGE_BASE || "..";

const only = process.argv[2]; // optional carousel id filter (matches render.mjs)

mkdirSync(`${ROOT}/deliver/canva`, { recursive: true });
mkdirSync(`${ROOT}/deliver/00-previews`, { recursive: true });

for (const c of CAROUSELS) {
  if (only && c.id !== only) continue;
  const srcDir = `${ROOT}/out/${c.id}`;
  if (!existsSync(srcDir)) {
    console.error(`✗ ${c.id}: ${srcDir} not found — run "node scripts/render.mjs" first.`);
    continue;
  }
  const outDir = `${ROOT}/deliver/${c.id}`;
  mkdirSync(outDir, { recursive: true });
  const slides = readdirSync(srcDir).filter(f => /^slide-\d+\.png$/.test(f)).sort();
  for (const f of slides) {
    await sharp(`${srcDir}/${f}`).resize(1080, 1350).png({ compressionLevel: 9 }).toFile(`${outDir}/${f}`);
  }
  // Carry the contact sheet through as the carousel's preview, so 00-previews/ is
  // reproducible from the pipeline instead of assembled by hand.
  const sheet = `${srcDir}/_contact-sheet.png`;
  if (existsSync(sheet)) copyFileSync(sheet, `${ROOT}/deliver/00-previews/${c.id}.png`);
  // Canva import HTML: one page per slide, image-backed (faithful artwork, editable as Canva pages)
  const pages = slides.map((f, i) => {
    const label = i === 0 ? `Cover` : i === slides.length-1 ? `CTA` : `Slide ${i+1}`;
    return `  <div class="page" data-document-role="page" data-label="${c.no}-${i+1} ${label}"><img src="${IMAGE_BASE}/${c.id}/${f}"></div>`;
  }).join("\n");
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${BRAND.series} No.${c.no} — ${c.slug}</title>
<style>*{margin:0;padding:0}.page{width:1080px;height:1350px;position:relative;overflow:hidden}.page img{width:1080px;height:1350px;display:block;object-fit:cover}</style>
</head><body>
${pages}
</body></html>`;
  writeFileSync(`${ROOT}/deliver/canva/${c.id}.html`, html);
  console.log(`deliver ${c.id}: ${slides.length} slides + canva html`);
}
console.log("done.");
