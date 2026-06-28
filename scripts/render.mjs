// Render every .slide element to a PNG via Chromium, and stitch a per-carousel contact sheet.
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import sharp from "sharp";
import { CAROUSELS } from "../src/content.mjs";

const ROOT = "/home/user/insta-stuff";
const SCALE = 2; // -> 2160x2700 output

const only = process.argv[2]; // optional carousel id filter

const browser = await chromium.launch({ args: ["--no-sandbox","--force-color-profile=srgb"] });
const ctx = await browser.newContext({ deviceScaleFactor: SCALE });
const page = await ctx.newPage();

for (const c of CAROUSELS) {
  if (only && c.id !== only) continue;
  const dir = `${ROOT}/out/${c.id}`;
  mkdirSync(dir, { recursive: true });
  await page.goto(`file://${ROOT}/out/html/${c.id}.html`);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(250);
  const slides = await page.$$(".slide");
  const files = [];
  for (let i=0;i<slides.length;i++){
    const f = `${dir}/slide-${String(i+1).padStart(2,"0")}.png`;
    await slides[i].screenshot({ path: f });
    files.push(f);
  }
  // contact sheet: thumbnails in a row
  const thumbW = 360, thumbH = Math.round(thumbW*1350/1080), gap = 18;
  const thumbs = await Promise.all(files.map(f =>
    sharp(f).resize(thumbW, thumbH).extend({ top:0,bottom:0,left:0,right:gap, background:"#2b2b2b" }).toBuffer()
  ));
  const sheetW = (thumbW+gap)*files.length - gap + 40;
  await sharp({ create:{ width:sheetW, height:thumbH+40, channels:3, background:"#2b2b2b" }})
    .composite(thumbs.map((b,idx)=>({ input:b, top:20, left:20+idx*(thumbW+gap) })))
    .png().toFile(`${dir}/_contact-sheet.png`);
  console.log(`✓ ${c.id}: ${files.length} slides`);
}

await browser.close();
console.log("done.");
