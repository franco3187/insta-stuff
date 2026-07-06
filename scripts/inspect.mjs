import sharp from 'sharp';
const files = process.argv.slice(2);
if (!files.length) { console.error('usage: node scripts/inspect.mjs <file...>'); process.exit(1); }
for (const f of files) {
  const m = await sharp(f).metadata();
  console.log(f.split('/').pop(), `${m.width}x${m.height}`, 'orient:', m.orientation);
}
