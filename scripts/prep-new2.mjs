import sharp from 'sharp';
const U = process.argv[2];
if (!U) { console.error('usage: node scripts/prep-new2.mjs <base-url>'); process.exit(1); }
const map = {
  mal:      `${U}/a0388379-IMG_6897.jpeg`,  // malinois service-dog-in-training, alert
  rott:     `${U}/3623968f-IMG_3393.jpeg`,   // rottweiler on leash walk (rotated)
  carrest:  `${U}/92f4a8cf-IMG_6899.jpeg`,   // dog resting head in car, being pet
  handhead: `${U}/f3a69c6c-IMG_6898.jpeg`,   // hand over head, wary dog
};
for (const [name, src] of Object.entries(map)) {
  const m = await sharp(src).metadata();
  await sharp(src).rotate()
    .resize({ width:1600, height:1600, fit:'inside', withoutEnlargement:true })
    .modulate({ saturation:1.06 }).jpeg({ quality:90 })
    .toFile(`assets/photos/${name}_color.jpg`);
  await sharp(src).rotate()
    .resize({ width:1600, height:1600, fit:'inside', withoutEnlargement:true })
    .grayscale().linear(1.35,-28).gamma(1.05).jpeg({ quality:90 })
    .toFile(`assets/photos/${name}_bw.jpg`);
  console.log(name, `${m.width}x${m.height} orient:${m.orientation} -> done`);
}
