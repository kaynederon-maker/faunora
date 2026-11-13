/* Furniture, plants and props, all modelled from kit primitives (the characters come from Blender: cast.js).
   Everything is built standing on y = 0 and facing +z; callers place and turn the returned group. */
import { C, box, cyl, ball, ring, G, mat } from './kit.js';

const PI = Math.PI;
/** Idle animations: each entry is called with the time in seconds. */
export const tickers = [];
/* ---------- Plants & sky ---------- */
export function plant(o = {}) {
  const { pot = C.white, leaf = C.leaf, h = 0.9, kind = 'bush' } = o;
  const g = G();
  cyl(0.15, 0.28, pot, { rt: 0.2, in: g });
  cyl(0.18, 0.02, C.woodDark, { at: [0, 0.27, 0], in: g, cast: false });
  if (kind === 'tall') {
    cyl(0.02, h - 0.3, C.woodDark, { at: [0, 0.28, 0], in: g, seg: 8 });
    for (let i = 0; i < 6; i++) {
      const a = i * 2.3, y = 0.45 + (i / 6) * (h - 0.45);
      ball(0.13, i % 2 ? leaf : C.sage, { at: [Math.cos(a) * 0.14, y, Math.sin(a) * 0.14], scale: [1.1, 0.5, 0.75], ry: -a, rz: 0.5, in: g });
    }
  } else {
    for (const [x, y, z, r] of [[0, 0.3, 0, 0.22], [0.14, 0.42, 0.05, 0.16], [-0.13, 0.44, -0.04, 0.17], [0.02, 0.56, -0.08, 0.15], [-0.03, 0.5, 0.13, 0.13]]) {
      ball(r, (x > 0) ? leaf : C.sage, { at: [x, y * (h / 0.9), z], in: g });
    }
  }
  return g;
}

export function tree(h = 3.2, o = {}) {
  const g = G();
  cyl(0.13, h * 0.5, C.woodDark, { rt: 0.09, in: g });
  const y = h * 0.42, k = h / 3.2;
  for (const [x, dy, z, r, c] of [[0, 0, 0, 0.85, C.sage], [0.5, 0.4, 0.2, 0.6, C.leaf], [-0.45, 0.5, -0.2, 0.62, C.sageLight], [0.05, 0.95, -0.05, 0.6, o.top ?? C.sage], [-0.2, 0.2, 0.5, 0.5, C.leaf]]) {
    ball(r * k, c, { at: [x * k, y + dy * k, z * k], in: g });
  }
  return g;
}

export function bush(r = 0.4, color = C.sage) {
  const g = G();
  ball(r, color, { at: [0, -r * 0.3, 0], in: g });
  ball(r * 0.7, C.leaf, { at: [r * 0.7, -r * 0.25, r * 0.15], in: g });
  ball(r * 0.6, C.sageLight, { at: [-r * 0.65, -r * 0.2, -r * 0.1], in: g });
  return g;
}

export function cloud(s = 1) {
  const g = G([0, 0, 0], [], { s, live: true });
  const m = mat(C.white, { glow: 0.22, rough: 1 });
  for (const [x, y, z, r] of [[0, 0, 0, 0.9], [0.95, -0.1, 0.1, 0.65], [-0.9, -0.12, -0.05, 0.6], [0.35, 0.4, -0.2, 0.62], [-0.4, 0.3, 0.25, 0.55], [1.5, -0.25, 0, 0.36]]) {
    ball(r, m, { at: [x, y, z], in: g, cast: false, receive: false });
  }
  return g;
}

/* ---------- Furniture ---------- */
export function desk(w = 1.6, d = 0.7, h = 0.75, top = C.wood, side = C.white) {
  const g = G();
  box(w, 0.07, d, top, { at: [0, h - 0.07, 0], r: 0.03, in: g });
  for (const s of [-1, 1]) box(0.07, h - 0.07, d - 0.1, side, { at: [s * (w / 2 - 0.1), 0, 0], r: 0.03, in: g });
  return g;
}

export function chair(color = C.sage, legs = C.wood) {
  const g = G();
  box(0.44, 0.08, 0.44, color, { at: [0, 0.42, 0], r: 0.04, in: g });
  box(0.44, 0.46, 0.07, color, { at: [0, 0.5, -0.2], r: 0.035, in: g });
  for (const x of [-0.17, 0.17]) for (const z of [-0.17, 0.17]) cyl(0.025, 0.42, legs, { at: [x, 0, z], in: g, seg: 8 });
  return g;
}

export function sofa(w = 2, color = C.sage, pillows = [C.cream, C.gold]) {
  const g = G();
  box(w, 0.3, 0.85, color, { at: [0, 0.1, 0], r: 0.1, in: g });
  box(w, 0.55, 0.24, color, { at: [0, 0.3, -0.33], r: 0.1, in: g });
  for (const s of [-1, 1]) {
    box(0.22, 0.5, 0.85, color, { at: [s * (w / 2 - 0.11), 0.1, 0], r: 0.1, in: g });
    for (const z of [-0.32, 0.32]) cyl(0.035, 0.1, C.woodDark, { at: [s * (w / 2 - 0.15), 0, z], in: g, seg: 8 });
  }
  const n = Math.max(2, Math.round((w - 0.44) / 0.75)), cw = (w - 0.48) / n;
  for (let i = 0; i < n; i++) box(cw - 0.03, 0.12, 0.6, color, { at: [-w / 2 + 0.24 + cw * (i + 0.5), 0.38, 0.08], r: 0.05, in: g });
  pillows.forEach((c, i) => box(0.36, 0.34, 0.12, c, { at: [(i ? 1 : -1) * (w / 2 - 0.45), 0.5, -0.12], r: 0.06, rx: -0.25, ry: (i ? -1 : 1) * 0.2, in: g }));
  return g;
}

export function roundTable(r = 0.45, h = 0.42, top = C.wood, leg = C.white) {
  const g = G();
  cyl(r, 0.05, top, { at: [0, h - 0.05, 0], in: g, seg: 32 });
  cyl(0.05, h - 0.05, leg, { in: g });
  cyl(r * 0.5, 0.03, leg, { in: g });
  return g;
}

export function shelfUnit(w = 1.6, h = 2, d = 0.34, rows = 4, color = C.white, back = C.oat) {
  const g = G();
  box(w, h, 0.04, back, { at: [0, 0, -d / 2 + 0.02], r: 0.02, in: g });
  for (const s of [-1, 1]) box(0.05, h, d, color, { at: [s * (w / 2 - 0.025), 0, 0], r: 0.02, in: g });
  for (let i = 0; i <= rows; i++) box(w, 0.05, d, color, { at: [0, (i * (h - 0.05)) / rows, 0], r: 0.02, in: g });
  g.userData.rowY = i => (i * (h - 0.05)) / rows + 0.05;
  return g;
}

export function wallShelf(w = 1.2, color = C.wood) {
  const g = G();
  box(w, 0.05, 0.26, color, { r: 0.02, in: g });
  for (const s of [-1, 1]) box(0.04, 0.14, 0.2, color, { at: [s * (w / 2 - 0.15), -0.14, -0.02], r: 0.015, in: g });
  return g;
}

export function counter(w = 2, d = 0.65, h = 0.9, base = C.white, top = C.wood, handle = C.gold) {
  const g = G();
  box(w, h - 0.06, d, base, { r: 0.04, in: g });
  box(w + 0.04, 0.07, d + 0.04, top, { at: [0, h - 0.07, 0], r: 0.03, in: g });
  const n = Math.max(1, Math.round(w / 0.6));
  for (let i = 0; i < n; i++) {
    const x = -w / 2 + (w / n) * (i + 0.5);
    box(0.16, 0.025, 0.03, handle, { at: [x, h * 0.66, d / 2 + 0.012], r: 0.01, in: g, metal: 0.3, rough: 0.5 });
    if (i) box(0.012, h - 0.2, 0.01, C.line, { at: [x - w / n / 2, 0.07, d / 2 + 0.002], r: 0.004, in: g, cast: false });
  }
  return g;
}

export function fridge(color = C.mist) {
  const g = G();
  box(0.78, 1.95, 0.7, color, { r: 0.08, in: g });
  box(0.74, 0.015, 0.01, C.line, { at: [0, 1.25, 0.352], r: 0.004, in: g, cast: false });
  for (const y of [0.85, 1.4]) box(0.03, 0.3, 0.035, C.white, { at: [-0.28, y, 0.365], r: 0.012, in: g });
  return g;
}

export function laptop(screen = C.mistLight) {
  const g = G();
  box(0.38, 0.025, 0.26, C.steel, { r: 0.01, in: g, metal: 0.3, rough: 0.5 });
  const lid = G([0, 0.02, -0.13], [], { rx: -0.22, in: g });
  box(0.38, 0.26, 0.02, C.steel, { r: 0.01, in: lid, metal: 0.3, rough: 0.5 });
  box(0.33, 0.2, 0.006, screen, { at: [0, 0.03, 0.012], r: 0.002, in: lid, glow: 0.55, cast: false });
  return g;
}

export function floorLamp(shade = C.goldLight) {
  const g = G();
  cyl(0.15, 0.03, C.inkSoft, { in: g });
  cyl(0.015, 1.45, C.inkSoft, { in: g, seg: 8 });
  cyl(0.22, 0.26, shade, { rt: 0.13, at: [0, 1.4, 0], in: g, glow: 0.5, cast: false });
  return g;
}

/** Ceiling lamp; the returned group's origin is the ceiling point it hangs from. */
export function pendant(drop = 0.7, shade = C.goldLight) {
  const g = G();
  cyl(0.008, drop, C.inkSoft, { at: [0, -drop, 0], in: g, seg: 6, cast: false });
  cyl(0.2, 0.18, shade, { rt: 0.06, at: [0, -drop - 0.18, 0], in: g, glow: 0.55, cast: false });
  return g;
}

export function rug(w = 2, d = 1.4, color = C.cream, round = false) {
  return round
    ? cyl(w / 2, 0.025, color, { seg: 40, cast: false })
    : box(w, 0.025, d, color, { r: 0.012, cast: false });
}

/** Picture frame, flat against a wall and facing +z. The group's origin is the frame centre. */
export function frame(w = 0.5, h = 0.6, art = C.sageLight, edge = C.wood, motif) {
  const g = G();
  box(w, h, 0.04, edge, { center: true, r: 0.015, in: g });
  box(w - 0.08, h - 0.08, 0.045, art, { center: true, r: 0.008, in: g, cast: false });
  if (motif) ball(Math.min(w, h) * 0.2, motif, { center: true, at: [0, -h * 0.04, 0.015], scale: [1, 1, 0.25], in: g, cast: false });
  return g;
}

export function roundWindow(r = 0.7, sky = 0xE6EEF0) {
  const g = G();
  cyl(r + 0.07, 0.07, C.white, { rx: PI / 2, center: true, seg: 40, in: g });
  cyl(r, 0.075, sky, { rx: PI / 2, center: true, seg: 40, in: g, glow: 0.6, cast: false });
  box(0.035, r * 2, 0.085, C.white, { center: true, r: 0.01, in: g, cast: false });
  box(r * 2, 0.035, 0.085, C.white, { center: true, r: 0.01, in: g, cast: false });
  return g;
}

export function windowPane(w = 1.2, h = 1.3, sky = 0xE6EEF0) {
  const g = G();
  box(w + 0.12, h + 0.12, 0.07, C.white, { center: true, r: 0.03, in: g });
  box(w, h, 0.075, sky, { center: true, r: 0.02, in: g, glow: 0.6, cast: false });
  box(0.035, h, 0.085, C.white, { center: true, r: 0.01, in: g, cast: false });
  box(w + 0.2, 0.05, 0.16, C.white, { center: true, at: [0, -h / 2 - 0.06, 0.05], r: 0.02, in: g });
  return g;
}

export function bowl(r = 0.14, color = C.sage, food) {
  const g = G();
  cyl(r * 0.6, r * 0.62, color, { rt: r, in: g });
  if (food) cyl(r * 0.86, 0.02, food, { at: [0, r * 0.56, 0], in: g, cast: false });
  return g;
}

export function jar(r = 0.08, h = 0.2, fill = C.gold, lid = C.woodDark) {
  const g = G();
  cyl(r, h, 0xEEF3EE, { in: g, opacity: 0.42, rough: 0.15 });
  cyl(r * 0.84, h * 0.62, fill, { at: [0, 0.012, 0], in: g, cast: false });
  cyl(r * 0.92, 0.035, lid, { at: [0, h, 0], in: g });
  return g;
}

export function books(n = 5, colors = [C.sage, C.blush, C.gold, C.mist, C.cream, C.teal]) {
  const g = G();
  let x = 0;
  for (let i = 0; i < n; i++) {
    const t = 0.04 + ((i * 7) % 3) * 0.012, h = 0.2 + ((i * 5) % 4) * 0.022;
    box(t, h, 0.16, colors[i % colors.length], { at: [x + t / 2, 0, 0], r: 0.008, in: g });
    x += t + 0.004;
  }
  g.userData.width = x;
  return g;
}

export function crate(w = 0.5, produce = [C.carrot, C.leaf, C.tomato, C.pumpkin]) {
  const g = G();
  box(w, 0.26, w * 0.72, C.wood, { r: 0.03, in: g });
  box(w - 0.06, 0.02, w * 0.72 - 0.06, C.woodDark, { at: [0, 0.245, 0], r: 0.008, in: g, cast: false });
  produce.forEach((c, i) => ball(0.075 + (i % 2) * 0.015, c, { at: [(-0.3 + (i % 3) * 0.3) * w, 0.22, ((i % 2) - 0.5) * 0.3 * w], in: g }));
  return g;
}

export function pot(o = {}) {
  const g = G();
  const m = { metal: 0.35, rough: 0.45 };
  cyl(0.18, 0.2, C.steel, { in: g, ...m });
  cyl(0.19, 0.025, C.steel, { at: [0, 0.2, 0], in: g, ...m });
  ball(0.03, C.ink, { at: [0, 0.22, 0], in: g });
  for (const s of [-1, 1]) box(0.08, 0.025, 0.05, C.ink, { at: [s * 0.21, 0.13, 0], r: 0.01, in: g });
  if (o.steam !== false) {
    const puffs = G([0, 0.3, 0], [], { live: true, in: g });
    const m2 = mat(C.white, { opacity: 0.55, rough: 1 });
    const balls = [0, 1, 2].map(i => ball(0.07, m2, { in: puffs, cast: false, receive: false, center: true, at: [(i - 1) * 0.07, 0, 0] }));
    tickers.push(t => balls.forEach((b, i) => {
      const k = (t * 0.35 + i / 3) % 1;
      b.position.y = k * 0.8;
      b.position.x = (i - 1) * 0.07 + Math.sin(k * 6 + i) * 0.05;
      b.scale.setScalar(Math.max(0.01, 0.5 + k * 0.9 - Math.max(0, k - 0.75) * 5.5));
    }));
  }
  return g;
}

/** Delivery scooter, length along x, nose toward +x. */
export function scooter(body = C.sage) {
  const g = G();
  for (const x of [-0.5, 0.5]) {
    ring(0.17, 0.065, C.ink, { upright: true, at: [x, 0, 0], in: g });
    cyl(0.09, 0.08, C.steel, { rx: PI / 2, center: true, at: [x, 0.235, 0], in: g });
  }
  box(0.7, 0.09, 0.3, body, { at: [0, 0.2, 0], r: 0.04, in: g });
  box(0.56, 0.32, 0.32, body, { at: [-0.34, 0.24, 0], r: 0.1, in: g });
  box(0.46, 0.09, 0.28, C.ink, { at: [-0.26, 0.56, 0], r: 0.04, in: g });
  box(0.12, 0.7, 0.26, body, { at: [0.42, 0.2, 0], r: 0.05, rz: -0.22, in: g });
  box(0.06, 0.05, 0.56, C.ink, { at: [0.34, 0.92, 0], r: 0.02, in: g });
  ball(0.06, C.goldLight, { at: [0.52, 0.66, 0], in: g, glow: 0.8 });
  box(0.48, 0.44, 0.46, C.cream, { at: [-0.52, 0.66, 0], r: 0.05, in: g });
  box(0.5, 0.07, 0.48, body, { at: [-0.52, 1.07, 0], r: 0.03, in: g });
  ball(0.09, C.gold, { center: true, at: [-0.52, 0.88, 0.235], scale: [1, 1, 0.15], in: g, cast: false });
  return g;
}

export function vegPatch(rows = 3, len = 2.4) {
  const g = G();
  for (let r = 0; r < rows; r++) {
    const z = (r - (rows - 1) / 2) * 0.62;
    box(len, 0.16, 0.44, 0xC2A27C, { at: [0, 0, z], r: 0.07, in: g });
    const n = Math.floor(len / 0.34);
    for (let i = 0; i < n; i++) {
      const x = -len / 2 + 0.24 + i * ((len - 0.48) / (n - 1));
      if (r % 3 === 0) {          // carrots: orange shoulder, feathery top
        cyl(0.045, 0.06, C.carrot, { at: [x, 0.13, z], in: g, seg: 10 });
        ball(0.09, C.leaf, { at: [x, 0.17, z], scale: [0.8, 1.5, 0.8], in: g });
      } else if (r % 3 === 1) {   // lettuces
        ball(0.12, C.sageLight, { at: [x, 0.1, z], scale: [1, 0.75, 1], in: g });
        ball(0.075, C.sage, { at: [x, 0.17, z], in: g });
      } else {                     // pumpkins
        ball(0.11, C.pumpkin, { at: [x, 0.12, z], scale: [1, 0.78, 1], in: g });
        cyl(0.012, 0.05, C.leaf, { at: [x, 0.28, z], in: g, seg: 6 });
      }
    }
  }
  return g;
}

export function catTree(color = C.oat) {
  const g = G();
  box(0.6, 0.07, 0.6, color, { r: 0.03, in: g });
  cyl(0.06, 0.8, C.wood, { at: [-0.14, 0.07, -0.1], in: g });
  box(0.5, 0.06, 0.5, color, { at: [-0.1, 0.87, -0.06], r: 0.03, in: g });
  cyl(0.06, 0.55, C.wood, { at: [0.08, 0.93, -0.12], in: g });
  box(0.42, 0.06, 0.42, color, { at: [0.1, 1.48, -0.1], r: 0.03, in: g });
  cyl(0.004, 0.24, C.inkSoft, { at: [0.12, 0.63, 0.14], in: g, seg: 5, cast: false });
  ball(0.045, C.blush, { at: [0.12, 0.56, 0.14], in: g });
  return g;
}

export function petBed(r = 0.42, color = C.blush, cushion = C.cream) {
  const g = G();
  ring(r - 0.09, 0.1, color, { in: g });
  cyl(r - 0.1, 0.09, cushion, { in: g });
  return g;
}

/** Wall clock facing +z; the group's origin is its centre. Hands sit at 11:55, five minutes to the deadline. */
export function clock(r = 0.3, rim = C.woodDark) {
  const g = G();
  cyl(r, 0.05, rim, { rx: PI / 2, center: true, seg: 36, in: g });
  cyl(r - 0.035, 0.055, C.white, { rx: PI / 2, center: true, seg: 36, in: g, cast: false });
  const hand = (len, w, a) => {
    const p = G([0, 0, 0.032], [], { rz: -a, in: g });
    box(w, len, 0.012, C.ink, { r: 0.004, in: p, cast: false });
  };
  hand(r * 0.5, 0.028, -0.03 * PI);
  hand(r * 0.74, 0.02, -PI / 6);
  ball(0.022, C.gold, { center: true, at: [0, 0, 0.04], in: g, cast: false });
  return g;
}

export function stickyNotes(cols = 4, rows = 3, colors = [C.gold, C.blush, C.sageLight, C.mist]) {
  const g = G();
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    if ((r * 5 + c * 3) % 7 === 0) continue;
    box(0.15, 0.15, 0.012, colors[(r * 3 + c) % colors.length], {
      center: true, at: [c * 0.2, -r * 0.2, 0], r: 0.004, rz: (((r + c) % 3) - 1) * 0.06, in: g, cast: false });
  }
  return g;
}

export function bench(w = 1.4, color = C.wood) {
  const g = G();
  box(w, 0.07, 0.4, color, { at: [0, 0.4, 0], r: 0.03, in: g });
  for (const s of [-1, 1]) box(0.07, 0.4, 0.36, C.white, { at: [s * (w / 2 - 0.16), 0, 0], r: 0.03, in: g });
  return g;
}

export function planter(w = 1.4, color = C.white, flowers = [C.blush, C.gold]) {
  const g = G();
  box(w, 0.36, 0.42, color, { r: 0.05, in: g });
  const n = Math.round(w / 0.36);
  for (let i = 0; i < n; i++) {
    const x = -w / 2 + (w / n) * (i + 0.5);
    ball(0.2, i % 2 ? C.sage : C.leaf, { at: [x, 0.24, 0], in: g });
    ball(0.045, flowers[i % flowers.length], { at: [x + 0.06, 0.6, 0.08], in: g });
    ball(0.04, flowers[(i + 1) % flowers.length], { at: [x - 0.09, 0.56, -0.04], in: g });
  }
  return g;
}

export function basket(r = 0.22, fill = [C.blush, C.sage, C.gold, C.mist]) {
  const g = G();
  cyl(r * 0.8, r * 1.1, 0xD9BF94, { rt: r, in: g });
  ring(r, 0.02, C.woodDark, { at: [0, r * 1.08, 0], in: g });
  fill.forEach((c, i) => ball(0.085, c, { at: [Math.cos(i * 1.7) * r * 0.45, r * 0.95 + (i % 2) * 0.05, Math.sin(i * 1.7) * r * 0.45], in: g }));
  return g;
}

export function shoppingBag(color = C.cream, mark = C.gold) {
  const g = G();
  box(0.3, 0.36, 0.14, color, { r: 0.02, in: g });
  ring(0.07, 0.01, C.woodDark, { upright: true, at: [0, 0.3, 0], in: g, cast: false });
  ball(0.06, mark, { center: true, at: [0, 0.18, 0.07], scale: [1, 1, 0.15], in: g, cast: false });
  return g;
}

export function clothesRack(colors = [C.sage, C.oat, C.mist, C.blush, C.gold]) {
  const g = G();
  for (const s of [-1, 1]) {
    cyl(0.025, 1.5, C.wood, { at: [s * 0.7, 0, 0], in: g, seg: 8 });
    box(0.08, 0.04, 0.5, C.wood, { at: [s * 0.7, 0, 0], r: 0.015, in: g });
  }
  cyl(0.02, 1.44, C.woodDark, { rz: PI / 2, center: true, at: [0, 1.46, 0], in: g, seg: 8 });
  colors.forEach((c, i) => {
    const x = -0.52 + i * (1.04 / (colors.length - 1));
    box(0.05, 0.34, 0.34, c, { at: [x, 1.02, 0], r: 0.02, in: g });
    box(0.05, 0.12, 0.5, c, { at: [x, 1.25, 0], r: 0.02, in: g });
    cyl(0.006, 0.09, C.inkSoft, { at: [x, 1.36, 0], in: g, seg: 5, cast: false });
  });
  return g;
}

/** Glowing bulbs sagging between two points. */
export function stringLights(a, b, n = 9, sag = 0.35) {
  const g = G();
  const m = mat(C.goldLight, { glow: 1.1 });
  tickers.push(time => { m.emissiveIntensity = 0.95 + Math.sin(time * 2.2) * 0.45; });   // the whole string breathes
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    ball(0.05, m, { center: true, cast: false, in: g, at: [
      a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t - Math.sin(t * PI) * sag, a[2] + (b[2] - a[2]) * t] });
  }
  return g;
}
