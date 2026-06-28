import sharp from 'sharp';
const U = process.argv[2];
const map = {
  lick:   `${U}/792be8cc-IMG_5247.jpeg`,   // white pittie licking face, joyful
  nap:    `${U}/84150205-IMG_4763.jpeg`,    // napping with boxer on bed (landscape)
  podium: `${U}/a551b56f-IMG_1385.jpeg`,    // speaking at podium w/ bernese service dog
  adopt:  `${U}/b6fdf6d1-IMG_1917.jpeg`,     // brindle in AVAILABLE FOR ADOPTION vest
  couch:  `${U}/c2dcd471-temp_image_6D140727B98F4AED96963FAB7669B15D.webp`, // cuddling tan dog
};
for (const [name, src] of Object.entries(map)) {
  await sharp(src).rotate()
    .resize({ width:1600, height:1600, fit:'inside', withoutEnlargement:true })
    .modulate({ saturation:1.06 }).jpeg({ quality:90 })
    .toFile(`assets/photos/${name}_color.jpg`);
  await sharp(src).rotate()
    .resize({ width:1600, height:1600, fit:'inside', withoutEnlargement:true })
    .grayscale().linear(1.35,-28).gamma(1.05).jpeg({ quality:90 })
    .toFile(`assets/photos/${name}_bw.jpg`);
  console.log(name, 'done');
}
// ---- logo ----
const LOGO = `${U}/4f558ff1-Untitled_Website__1.jpeg`;
// full colour badge, trimmed of the white margin
await sharp(LOGO).trim({ threshold: 12 }).resize({ width:700 }).png()
  .toFile('assets/photos/logo_color.png');
// red rubber-stamp version: threshold the linework, tint red, on transparent
const { data, info } = await sharp(LOGO).trim({ threshold:12 }).resize({ width:700 })
  .grayscale().raw().toBuffer({ resolveWithObject:true });
const out = Buffer.alloc(info.width*info.height*4);
for (let i=0;i<info.width*info.height;i++){
  const v = data[i*info.channels];
  const ink = v < 120 ? 255 : 0;           // dark pixels -> stamp
  out[i*4]=225; out[i*4+1]=29; out[i*4+2]=35; out[i*4+3]=ink;
}
await sharp(out,{ raw:{ width:info.width, height:info.height, channels:4 }}).png()
  .toFile('assets/photos/logo_stamp.png');
console.log('logo done', info.width+'x'+info.height);
