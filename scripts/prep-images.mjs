import sharp from 'sharp';
const U = process.argv[2];
if (!U) {
  console.error('usage: node scripts/prep-images.mjs <source-image-dir>');
  process.exit(1);
}
const map = {
  hero:   `${U}/f0c0c3cb-IMG_5248.jpeg`,           // smiling, hugging brown/white pittie
  merch:  `${U}/06ae9ab3-IMG_3443.jpeg`,           // REAL MEN RESCUE DOGS, carrying dog, petsmart
  girls:  `${U}/b6fbb820-2FE8C927D0F54C01BBF7D1C1283B4091.png`, // HOT GIRLS RESCUE DOGS
  kiss:   `${U}/37cde517-IMG_1661.jpeg`,           // kissing gray pittie in red vest (rotated)
};
for (const [name, src] of Object.entries(map)) {
  const meta = await sharp(src).metadata(); // source dimensions, for logging
  // color, normalized
  await sharp(src).rotate()
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .modulate({ saturation: 1.06 })
    .jpeg({ quality: 90 })
    .toFile(`assets/photos/${name}_color.jpg`);
  // high-contrast B&W for duotone
  await sharp(src).rotate()
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .grayscale()
    .linear(1.35, -28)        // punch contrast
    .gamma(1.05)
    .jpeg({ quality: 90 })
    .toFile(`assets/photos/${name}_bw.jpg`);
  console.log(name, 'src', `${meta.width}x${meta.height}`, '-> color+bw done');
}
