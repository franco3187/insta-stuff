// Downscale 2x renders to 1080x1350 delivery PNGs + build Canva-import HTML per carousel.
import { mkdirSync, writeFileSync, readdirSync } from "node:fs";
import sharp from "sharp";
import { CAROUSELS, BRAND } from "../src/content.mjs";

const ROOT = "/home/user/insta-stuff";
const REPO = "franco3187/insta-stuff";
const BRANCH = "claude/instagram-carousel-design-kqdxs9";
const RAW = `https://raw.githubusercontent.com/${REPO}/${BRANCH}/deliver`;

mkdirSync(`${ROOT}/deliver/canva`, { recursive: true });

for (const c of CAROUSELS) {
  const srcDir = `${ROOT}/out/${c.id}`;
  const outDir = `${ROOT}/deliver/${c.id}`;
  mkdirSync(outDir, { recursive: true });
  const slides = readdirSync(srcDir).filter(f => /^slide-\d+\.png$/.test(f)).sort();
  for (const f of slides) {
    await sharp(`${srcDir}/${f}`).resize(1080, 1350).png({ compressionLevel: 9 }).toFile(`${outDir}/${f}`);
  }
  // Canva import HTML: one page per slide, image-backed (faithful artwork, editable as Canva pages)
  const pages = slides.map((f, i) => {
    const label = i === 0 ? `Cover` : i === slides.length-1 ? `CTA` : `Slide ${i+1}`;
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
console.log("done.");
