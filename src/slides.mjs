// Slide-type → HTML renderers for THE FOSTER FILES.
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";
import { BRAND, CAROUSELS } from "./content.mjs";
const SERIES_TOTAL = String(CAROUSELS.length).padStart(2, "0");

// Repo root, derived from this file's location — no hard-coded absolute path.
const ROOT = pathToFileURL(resolve(dirname(fileURLToPath(import.meta.url)), "..")).href;
const photoURL = (key, treat) => `${ROOT}/assets/photos/${key}_${treat}.jpg`;
const LOGO_STAMP = `${ROOT}/assets/photos/logo_stamp.png`;
const LOGO_COLOR = `${ROOT}/assets/photos/logo_color.png`;

const esc = (s) => String(s)
  .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
  .replace(/"/g,"&quot;").replace(/'/g,"&#39;");

// ransom word array -> chips
function ransom(words, cls = "") {
  const map = { plain:"plain", box:"box", red:"red", out:"out", bone:"bone", under:"under" };
  return `<div class="ransom ${cls}">` +
    words.map(([t,v]) => `<span class="w ${map[v]||"plain"}">${esc(t)}</span>`).join("") +
    `</div>`;
}

function dots(total, i) {
  let s = '<div class="dots">';
  for (let k=0;k<total;k++) s += `<i class="${k===i?"on":""}"></i>`;
  return s + "</div>";
}

function furniture(c) {
  return `
    <span class="cropmark tl"></span><span class="cropmark tr"></span>
    <span class="cropmark bl"></span><span class="cropmark br"></span>
    <div class="halftone"></div>
    <div class="masthead">
      <div class="kicker">${esc(BRAND.series)}<span class="dot"> ●</span></div>
      <div class="tab">NO. ${c.no} / ${SERIES_TOTAL}</div>
    </div>`;
}

function footer(c, i, total, { minimal } = {}) {
  return `
    <div class="footer">
      <span class="wm"><img class="wm-logo" src="${LOGO_STAMP}" alt="">${minimal ? "" : esc(BRAND.wordmark)}</span>
      ${dots(total, i)}
      <span>${esc(BRAND.handle)}</span>
    </div>`;
}

const photoBox = (p, extra="") =>
  `<div class="photo ${p.treat==="bw"?"duo":""} ${extra}"><img src="${photoURL(p.key,p.treat)}" alt=""></div>`;

// ---- COVER ----
// The headline flows inside .frame-pad while the photo/sticker/logo below it sit
// at fixed offsets, so a taller title risks overlapping them. Size the ransom by
// BOTH total characters and chip count (each chip adds padding + a wrap point) and
// take the smaller — this never enlarges the tuned titles, only shrinks ones that
// would otherwise grow tall enough to collide.
function cover(c, i, total, s) {
  const chars = s.title.reduce((n,[t])=>n+t.length,0);
  const words = s.title.length;
  const byChars = chars<=14?118 : chars<=22?104 : chars<=30?92 : 80;
  const byWords = words<=4?118 : words<=6?104 : words<=8?92 : 80;
  const rs = Math.min(byChars, byWords);
  return `<section class="slide" style="--rs:${rs}px">
    <div class="frame-pad">
      ${furniture(c)}
      <div style="margin-top:30px" class="kicker">FILE NO.${c.no} · ${esc(s.topic)}</div>
      <div style="margin-top:26px">${ransom(s.title)}</div>
    </div>
    <div class="cover-photo polaroid" style="position:absolute;right:46px;bottom:120px;width:520px;height:560px;transform:rotate(-3deg);z-index:8">
      <span class="tape" style="top:-20px;left:170px;transform:rotate(4deg)"></span>
      <div class="photo" style="width:100%;height:430px"><img src="${photoURL(s.photo.key,s.photo.treat)}" style="object-position:${s.photo.pos||"center"}" alt=""></div>
      <div class="cap">${esc(s.photo.cap||"")}</div>
    </div>
    <img class="logo-badge" src="${LOGO_COLOR}" style="position:absolute;left:78px;top:740px;width:188px;transform:rotate(-6deg);z-index:11" alt="">
    <div style="position:absolute;left:54px;bottom:150px;width:430px;z-index:9">
      <div class="lede">${esc(s.sub)}</div>
    </div>
    <div class="sticker" style="left:430px;top:650px;font-size:34px;z-index:12">SWIPE<br><small>↓ READ THIS ↓</small></div>
    ${footer(c,i,total,{minimal:true})}
  </section>`;
}

// ---- TRUTH (big statement) ----
function truth(c, i, total, s) {
  const lines = s.lines.map(([t,v]) => {
    const cls = v==="red" ? "v-red" : v==="ink" ? "v-hl" : "v-plain";
    return `<span class="tline ${cls}">${esc(t)}</span>`;
  }).join("");
  return `<section class="slide ink">
    <div class="frame-pad">
      ${furniture(c)}
      <div style="flex:1;display:flex;flex-direction:column;justify-content:center">
        <div class="kicker" style="color:var(--red);margin-bottom:30px">${esc(s.kicker)}</div>
        <div class="stmt">${lines}</div>
        <div class="foot-note">${esc(s.foot)}</div>
      </div>
    </div>
    ${footer(c,i,total)}
  </section>`;
}

// ---- STEPS ----
function steps(c, i, total, s) {
  const items = s.steps.map(st => `
    <div class="step">
      <div class="num">${esc(st.n)}</div>
      <div><div class="h">${esc(st.h)}</div><div class="t">${esc(st.t)}</div></div>
    </div>`).join("");
  return `<section class="slide">
    <div class="frame-pad">
      ${furniture(c)}
      <div class="kicker" style="margin-top:30px;color:var(--red)">${esc(s.kicker)}</div>
      <div class="huge" style="font-size:74px;margin:12px 0 34px">${esc(s.title)}</div>
      <div class="steps">${items}</div>
    </div>
    ${footer(c,i,total)}
  </section>`;
}

// ---- MISTAKE (don't / do) ----
function mistake(c, i, total, s) {
  return `<section class="slide">
    <div class="frame-pad">
      ${furniture(c)}
      <div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:34px">
        <div class="kicker" style="color:var(--red)">${esc(s.kicker)}</div>
        <div class="twoup">
          <div class="card bad">
            <div class="tagx"><span class="mk">✗</span> STOP — DON’T</div>
            <p>${esc(s.wrong.t)}</p>
          </div>
          <div class="card good">
            <div class="tagx"><span class="mk">✓</span> INSTEAD — DO</div>
            <p>${esc(s.good.t)}</p>
          </div>
        </div>
      </div>
    </div>
    ${footer(c,i,total)}
  </section>`;
}

// ---- SAY THIS / NOT THAT ----
function saythis(c, i, total, s) {
  const rows = s.rows.map(r => `
    <div class="sayrow">
      <div class="not">${esc(r.not)}</div>
      <div class="yes">${esc(r.yes)}</div>
    </div>`).join("");
  return `<section class="slide ink">
    <div class="frame-pad">
      ${furniture(c)}
      <div class="kicker" style="margin-top:30px;color:var(--red)">${esc(s.kicker)}</div>
      <div class="huge" style="font-size:70px;margin:12px 0 30px">${esc(s.title)}</div>
      <div class="say">${rows}</div>
    </div>
    ${footer(c,i,total)}
  </section>`;
}

// ---- QUOTE (foster saying translated) ----
function quote(c, i, total, s) {
  return `<section class="slide">
    <div class="frame-pad">
      ${furniture(c)}
      <div style="flex:1;display:flex;flex-direction:column;justify-content:center">
        <div class="quotemark">“</div>
        <div class="kicker" style="color:var(--red);margin:8px 0 22px">${esc(s.kicker)}</div>
        <div class="said">${esc(s.said)}</div>
        <div class="means-tag label" style="margin:32px 0 16px">What it really means →</div>
        <div class="means">${esc(s.means)}</div>
      </div>
    </div>
    ${footer(c,i,total)}
  </section>`;
}

// ---- CLOSER ----
function closer(c, i, total, s) {
  const mantra = s.mantra.map(([t,v]) =>
    v==="red" ? `<span style="color:var(--red)">${esc(t)}</span>` : `<span>${esc(t)}</span>`
  ).join("<br>");
  return `<section class="slide ink">
    <div class="frame-pad">
      ${furniture(c)}
      <div style="flex:1;display:flex;flex-direction:column;justify-content:center">
        <div class="kicker" style="color:var(--red);margin-bottom:24px">${esc(s.kicker)}</div>
        <div class="huge" style="font-size:104px">${mantra}</div>
      </div>
      <div class="cta-box">
        <div class="cta-text">${esc(s.cta)}</div>
        <div class="cta-marks"><span>SAVE</span><span>SHARE</span><span>FOLLOW</span></div>
      </div>
    </div>
    <div class="photo duo closer-photo" style="position:absolute;right:46px;top:140px;width:300px;height:360px;transform:rotate(3deg);z-index:6;box-shadow:8px 9px 0 var(--red)">
      <img src="${photoURL(s.photo.key,s.photo.treat)}" style="object-position:${s.photo.pos||"center"}" alt="">
    </div>
    <img class="logo-badge" src="${LOGO_COLOR}" style="position:absolute;right:300px;top:96px;width:150px;transform:rotate(-9deg);z-index:8" alt="">
    ${footer(c,i,total)}
  </section>`;
}

const RENDERERS = { cover, truth, steps, mistake, saythis, quote, closer };

export function renderSlide(c, i, total, s) {
  const fn = RENDERERS[s.type];
  if (!fn) throw new Error("unknown slide type: " + s.type);
  return fn(c, i, total, s);
}
