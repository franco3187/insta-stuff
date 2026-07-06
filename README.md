# THE FOSTER FILES — Instagram carousels

A punk-zine / ransom-note carousel series for **The Happy Hunting Grounds**
(`@thehappyhuntinggrounds`) — calm-assertive foster-dog advice, built as a
distinctive, repeatable design system (not generic AI-slop templates).

**Look & feel:** ink black · bone paper · blood red. Cut-out ransom headlines,
halftones, tape, crop marks, typewriter labels, and the brand badge stamped on
every slide. Rendered from HTML/CSS → PNG via headless Chromium, so the whole
series is reproducible and easy to restyle.

## The 15 carousels (top issues, ranked by what people care about most)

| No. | Topic | Hook |
|-----|-------|------|
| 01 | The first 72 hours | "He wasn't perfect — he was shut down" |
| 02 | House training | "It's not spite. It's a broken routine." |
| 03 | Crate & sleep | "Don't open the door mid-cry." |
| 04 | Separation anxiety | "'Only when I'm gone' isn't spite." |
| 05 | Leash & reactivity | "The leash is a phone line." |
| 06 | The fearful dog | "Don't soothe the fear." |
| 07 | Won't eat | "Stop hovering over the bowl." |
| 08 | Household manners | "Bad manners are energy with no job." |
| 09 | Dog introductions | "Never nose to nose first." |
| 10 | The goodbye | "A hard goodbye means you did the job." |
| 11 | Resource guarding | "Don't test the bowl." |
| 12 | Energy mismatch | "You didn't get a bad dog. Just a bored one." |
| 13 | Pain, not behavior | "Some 'behavior' is really a vet visit." |
| 14 | Setbacks | "Perfect for a week, then it fell apart?" |
| 15 | Marking | "Marking isn't potty training." |

## Layout

```
src/zine.css        # the design system (colours, type, ransom chips, photo treatments)
src/content.mjs     # all carousel copy + photo direction
src/slides.mjs      # slide-type → HTML renderers (cover, truth, steps, mistake, saythis, quote, closer)
scripts/build.mjs   # assemble standalone HTML per carousel
scripts/render.mjs  # HTML → PNG (2x) via Playwright + contact sheets
scripts/deliver.mjs # downscale to 1080x1350 + build Canva-import HTML
assets/photos/      # treated photos (colour + duotone B&W) and logo (colour + red stamp)
assets/fonts/       # self-hosted display fonts
deliver/<id>/       # final 1080x1350 PNGs, ready for Instagram
deliver/canva/      # one HTML per carousel for importing into Canva (image-backed pages)
```

## Reproduce

```bash
npm install
node scripts/build.mjs && node scripts/render.mjs    # render all slides
node scripts/deliver.mjs                              # 1080x1350 + Canva HTML + previews
```

All paths are derived from each script's own location, so the repo works from any
checkout directory — no hard-coded absolute path.

`scripts/deliver.mjs` writes Canva HTML whose `<img>` paths default to the sibling
`deliver/<id>/` folders (works offline, no hosting needed). For Canva's
import-from-URL flow, point them at hosted images instead:

```bash
CANVA_IMAGE_BASE="https://raw.githubusercontent.com/<owner>/<repo>/<branch>/deliver" node scripts/deliver.mjs
```

Both scripts take an optional carousel-id argument to process just one
(e.g. `node scripts/render.mjs 05-leash-pulling`).

Sizing is 1080 × 1350 (4:5), the highest-real-estate Instagram portrait format.
