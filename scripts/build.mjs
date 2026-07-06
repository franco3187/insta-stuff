// Assemble standalone HTML pages (one per carousel) + a contact-sheet index.
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { CAROUSELS } from "../src/content.mjs";
import { renderSlide } from "../src/slides.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
mkdirSync(`${ROOT}/out/html`, { recursive: true });

const head = `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="file://${ROOT}/src/zine.css">
<style>
  body{ display:flex; flex-wrap:wrap; gap:40px; padding:40px; background:#2b2b2b; }
  .slide{ flex:0 0 auto; }
</style></head><body>`;

for (const c of CAROUSELS) {
  const total = c.slides.length;
  const slides = c.slides.map((s, i) => renderSlide(c, i, total, s)).join("\n");
  writeFileSync(`${ROOT}/out/html/${c.id}.html`, head + slides + "</body></html>");
}
console.log("built", CAROUSELS.length, "carousel HTML files");
