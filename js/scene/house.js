/* The Faunora house: a three-storey cutaway, one room per part of the business.
   Rooms are built in local coordinates (floor at y = 0, x in [-3, 3], z in [-2, 2]) and open toward +x / +z,
   which is where the camera sits. Upper floors step back so the room below keeps its back wall in view. */
import * as THREE from 'three';
import { C, box, cyl, ball, G, bake, mat } from './kit.js';
import * as P from './props.js';
import { loadCast, spawn, enliven, emote, floatEmote } from './cast.js';

const PI = Math.PI;
const W = 6, D = 4, PITCH = 4.1, SLAB = 0.3, STEP_BACK = 0.8, BASE = 0.3;
const floorY = f => BASE + f * PITCH;
const floorZ = f => -f * STEP_BACK;
const BACK = -D / 2 + 0.2;        // inner face of the back wall
const LEFT = -W / 2 + 0.2;        // inner face of the left wall
const WALL_Z = BACK + 0.03;       // where wall-mounted things sit
const CEILING = PITCH - SLAB;

/** Where each stop's hotspot and camera target sit, in world coordinates. */
export const ANCHORS = {
  home: [0, 5.6, -0.6],
  consult: [-3, floorY(1) + 1.25, floorZ(1)],
  kitchen: [3, floorY(0) + 1.25, floorZ(0)],
  shop: [-3, floorY(0) + 1.25, floorZ(0)],
  reviews: [3, floorY(1) + 1.25, floorZ(1)],
  story: [-3, floorY(2) + 1.25, floorZ(2)],
  team: [3, floorY(2) + 1.1, floorZ(2)],
};

function add(parent, obj, at = [0, 0, 0], ry = 0, s = 1) {
  obj.position.set(obj.position.x + at[0], obj.position.y + at[1], obj.position.z + at[2]);
  if (ry) obj.rotation.y = ry;
  if (s !== 1) obj.scale.multiplyScalar(s);
  parent.add(obj);
  return obj;
}

/* Characters are sculpted in Blender and arrive asynchronously, so rooms only reserve a slot for each. */
const HUMAN = 1.2;          // the cast is modelled chibi-small; this brings people up to furniture scale
const SEATED = -0.1;        // drops a scaled, seated figure onto a 0.5 m chair
const slots = [];
function cast(parent, model, at, ry = 0, s = 1, act = {}) {
  const g = G(at, [], { ry, s, live: true, in: parent });
  slots.push({ g, model, act });
  return g;
}

function populate(tickers) {
  for (const { g, model, act } of slots) {
    const parts = spawn(model);
    if (!parts) continue;
    g.add(parts.root);
    if (act.still) continue;        // signage: no idle motion
    enliven(parts, act, tickers);
    if (act.emote) {
      const sprite = emote(...act.emote);
      g.add(sprite);
      floatEmote(sprite, [0, act.emoteY ?? 1.15, 0], tickers, { every: act.emoteEvery ?? 6, size: 0.36 / g.scale.x });
    }
  }
}

function room(root, col, f, floor, wall, o = {}) {
  const g = G([col ? W / 2 : -W / 2, floorY(f), floorZ(f)], [], { in: root });
  const h = o.wallH ?? CEILING - 0.02;
  box(W - 0.02, 0.04, D - 0.02, floor, { at: [0, -0.04, 0], r: 0.015, in: g, cast: false });
  if (o.walls === false) return g;
  box(W, h, 0.2, wall, { at: [0, 0, -D / 2 + 0.1], r: 0.03, in: g });
  box(W - 0.4, 0.1, 0.03, C.white, { at: [0.1, 0, BACK + 0.012], r: 0.01, in: g, cast: false });
  if (o.left) box(0.2, h, D, wall, { at: [-W / 2 + 0.1, 0, 0], r: 0.03, in: g });
  else box(0.2, h, 1.3, wall, { at: [-W / 2, 0, -D / 2 + 0.65], r: 0.03, in: g });
  if (o.cap) {
    box(W + 0.08, 0.1, 0.3, C.white, { at: [0, h, -D / 2 + 0.1], r: 0.04, in: g, cast: false });
    if (o.left) box(0.3, 0.1, D + 0.08, C.white, { at: [-W / 2 + 0.1, h, 0], r: 0.04, in: g, cast: false });
  }
  return g;
}

/** Put `[x, object, scale?]` items on a shelf row. */
function stock(shelf, row, items) {
  items.forEach(([x, obj, s = 1]) => add(shelf, obj, [x, shelf.userData.rowY(row), 0], 0, s));
}

const fold = c => box(0.3, 0.1, 0.24, c, { r: 0.04 });
const pack = (c, h = 0.28) => box(0.2, h, 0.12, c, { r: 0.04 });

/* ---------- Rooms ---------- */
function shop(root) {
  const g = room(root, 0, 0, 0xEFD2C4, 0xF7E9E0, { left: true });
  const a = add(g, P.shelfUnit(2.3, 1.9, 0.36, 4), [-1.45, 0, BACK + 0.19]);
  stock(a, 0, [[-0.8, pack(C.sage, 0.34)], [-0.52, pack(C.oat, 0.34)], [-0.2, pack(C.sage, 0.34)], [0.25, P.basket(0.16)], [0.75, pack(C.gold, 0.3)]]);
  stock(a, 1, [[-0.85, P.bowl(0.13, C.sage, C.pumpkin)], [-0.5, P.bowl(0.13, C.cream, C.salmon)], [-0.15, P.bowl(0.13, C.mist, C.leaf)], [0.3, P.jar(0.085, 0.24, C.gold)], [0.56, P.jar(0.085, 0.24, C.carrot)], [0.84, P.jar(0.085, 0.24, C.leaf)]]);
  stock(a, 2, [[-0.8, P.jar(0.09, 0.26, C.woodDark)], [-0.52, P.jar(0.09, 0.26, C.blush)], [-0.1, pack(C.mist)], [0.14, pack(C.blush)], [0.38, pack(C.cream)], [0.8, P.bowl(0.14, C.gold, C.tomato)]]);
  stock(a, 3, [[-0.7, ball(0.1, C.blush)], [-0.42, ball(0.1, C.sage)], [-0.14, ball(0.1, C.gold)], [0.4, pack(C.teal, 0.24)], [0.66, pack(C.sage, 0.24)]]);
  const b = add(g, P.shelfUnit(1.5, 1.9, 0.36, 4), [0.75, 0, BACK + 0.19]);
  stock(b, 0, [[-0.35, fold(C.sage)], [0.35, fold(C.oat)]]);
  add(b, fold(C.mist), [-0.35, b.userData.rowY(0) + 0.1, 0]);
  stock(b, 1, [[-0.35, fold(C.blush)], [0.35, fold(C.gold)]]);
  add(b, fold(C.cream), [0.35, b.userData.rowY(1) + 0.1, 0]);
  stock(b, 2, [[-0.4, P.shoppingBag(C.cream, C.gold)], [0.05, P.shoppingBag(C.sage, C.cream)], [0.45, ball(0.11, C.mist)]]);
  stock(b, 3, [[-0.3, P.basket(0.17, [C.cream, C.gold, C.blush])], [0.35, pack(C.gold)]]);

  add(g, P.clothesRack(), [LEFT + 0.45, 0, 0.55], PI / 2);
  add(g, P.rug(2.1, 0, C.cream, true), [-0.5, 0, 0.75]);
  add(g, P.counter(1.7, 0.62, 0.95, C.white, C.wood), [1.75, 0, 0.75]);
  add(g, G([1.35, 0.95, 0.75], [box(0.34, 0.2, 0.28, C.cream, { r: 0.04 }), box(0.26, 0.16, 0.02, C.mistLight, { at: [0, 0.2, -0.08], rx: -0.3, glow: 0.5 })]));
  add(g, P.shoppingBag(C.cream, C.sage), [2.05, 0.95, 0.72], -0.2);
  add(g, P.jar(0.09, 0.22, C.gold), [2.42, 0.95, 0.85]);
  cast(g, 'shopkeeper', [1.75, 0, 0.12], 0.15, HUMAN, { arms: 'wave', emote: ['♥', '#C98B7A'], emoteY: 1.5, emoteEvery: 9 });
  add(g, P.basket(0.26), [-1.3, 0, 1.3]);
  cast(g, 'dog_white_sit', [0.2, 0, 1.25], 0.9, 0.78, { kind: 'dog', low: true });
  add(g, P.shoppingBag(C.sage, C.cream), [0.95, 0, 1.55], 0.4);
  add(g, P.plant({ kind: 'tall', h: 1.5, pot: C.white }), [2.6, 0, BACK + 0.3]);
  add(g, P.pendant(0.9), [-0.3, CEILING, -0.7]);
  add(g, P.pendant(0.9), [2.2, CEILING, -0.7]);
}

function kitchen(root) {
  const g = room(root, 1, 0, 0xEBDCA2, 0xF7F0D8);
  const steel = { metal: 0.4, rough: 0.4 };
  add(g, P.counter(3.7, 0.65, 0.9, C.white, C.wood), [-0.75, 0, BACK + 0.34]);
  for (const [x, z] of [[-2.2, -0.12], [-1.75, -0.12], [-2.2, 0.16], [-1.75, 0.16]]) {
    cyl(0.12, 0.014, C.ink, { at: [x, 0.9, BACK + 0.34 + z], in: g, cast: false });
  }
  add(g, P.pot(), [-2.2, 0.91, BACK + 0.22]);
  add(g, G([-1.75, 0.91, BACK + 0.5], [cyl(0.16, 0.05, C.ink), box(0.26, 0.03, 0.05, C.woodDark, { at: [0.3, 0.02, 0], r: 0.01 })]));
  box(0.7, 0.03, 0.42, C.steel, { at: [-0.5, 0.895, BACK + 0.34], r: 0.012, in: g, cast: false, ...steel });
  cyl(0.02, 0.26, C.steel, { at: [-0.5, 0.9, BACK + 0.12], in: g, seg: 8, ...steel });
  box(0.04, 0.03, 0.16, C.steel, { at: [-0.5, 1.14, BACK + 0.2], r: 0.012, in: g, ...steel });
  add(g, P.jar(0.08, 0.2, C.gold), [0.3, 0.9, BACK + 0.3]);
  add(g, P.jar(0.08, 0.26, C.leaf), [0.52, 0.9, BACK + 0.26]);
  add(g, P.jar(0.08, 0.16, C.carrot), [0.75, 0.9, BACK + 0.34]);
  const shelf = add(g, P.wallShelf(2.4), [-1.2, 1.5, BACK + 0.13]);
  [[-0.95, P.bowl(0.12, C.sage)], [-0.65, P.bowl(0.12, C.cream)], [-0.35, P.bowl(0.12, C.mist)], [0.1, P.jar(0.07, 0.2, C.woodDark)],
    [0.32, P.jar(0.07, 0.2, C.blush)], [0.75, P.plant({ h: 0.5, pot: C.terracotta }), 0.6]]
    .forEach(([x, obj, s = 1]) => add(shelf, obj, [x, 0.05, 0], 0, s));
  add(g, P.fridge(), [2.3, 0, BACK + 0.36]);

  add(g, P.counter(2.0, 0.8, 0.9, C.sage, C.wood, C.cream), [0, 0, 0.75]);
  box(0.5, 0.03, 0.34, C.woodDark, { at: [-0.6, 0.9, 0.72], r: 0.012, in: g });
  cyl(0.035, 0.26, C.carrot, { rt: 0.012, at: [-0.66, 0.955, 0.7], rz: PI / 2, ry: 0.4, center: true, in: g, seg: 10 });
  cyl(0.035, 0.24, C.carrot, { rt: 0.012, at: [-0.52, 0.955, 0.8], rz: PI / 2, ry: -0.2, center: true, in: g, seg: 10 });
  ball(0.07, C.leaf, { at: [-0.84, 0.92, 0.66], in: g });
  [[-0.05, C.pumpkin], [0.28, C.salmon], [0.61, C.leaf]].forEach(([x, food]) => add(g, P.bowl(0.14, C.cream, food), [x, 0.9, 0.95]));
  add(g, G([0.6, 0.9, 0.55], [box(0.3, 0.05, 0.24, C.white, { r: 0.02 }), cyl(0.11, 0.015, C.steel, { at: [0, 0.05, 0], ...steel }), ball(0.08, C.tomato, { at: [0, 0.06, 0] })]));
  cast(g, 'cook', [-0.15, 0, 0.12], 0, HUMAN, { arms: 'stir', emote: ['♪', '#6F8366'], emoteY: 1.75, emoteEvery: 7 });
  add(g, P.crate(0.55), [-2.3, 0, 1.25], 0.2);
  add(g, P.crate(0.5, [C.leaf, C.sageLight, C.leaf, C.carrot]), [-2.25, 0.27, 1.2], -0.15);
  add(g, P.crate(0.5, [C.pumpkin, C.pumpkin, C.tomato]), [-1.6, 0, 1.5], -0.3);
  add(g, P.rug(1.5, 0.8, C.cream), [1.75, 0, 1.3], -0.3);
  cast(g, 'dog_gold_sit', [1.9, 0, 1.2], -0.9, 0.82, { kind: 'dog', low: true, look: 0.15 });
  add(g, P.bowl(0.14, C.sage, C.pumpkin), [1.45, 0, 1.5]);
  add(g, P.pendant(0.9), [-1.3, CEILING, -0.6]);
  add(g, P.pendant(0.9), [1.2, CEILING, -0.6]);
}

function consult(root) {
  const g = room(root, 0, 1, 0xC6D6D6, 0xE6EEEC, { left: true });
  add(g, P.rug(3.2, 2.2, C.white), [0.4, 0, 0.5]);
  add(g, P.roundWindow(0.62), [-1.35, 1.15, WALL_Z]);
  [C.gold, C.sage, C.teal].forEach((c, i) => add(g, P.frame(0.42, 0.52, C.cream, C.wood, c), [0.75 + i * 0.55, 1.42, WALL_Z]));

  add(g, P.desk(1.8, 0.78, 0.76), [1.3, 0, -0.35]);
  add(g, P.chair(C.teal), [1.3, 0, -1.05]);
  cast(g, 'nutritionist', [1.3, SEATED, -1.02], 0, HUMAN, { arms: 'type', nod: true });
  add(g, P.laptop(), [1.05, 0.76, -0.38], 0.25);
  add(g, G([1.85, 0.76, -0.3], [box(0.3, 0.02, 0.4, C.white, { r: 0.008 }), box(0.22, 0.008, 0.02, C.line, { at: [0, 0.02, 0.1], cast: false }), box(0.22, 0.008, 0.02, C.line, { at: [0, 0.02, 0.02], cast: false })]));
  add(g, P.bowl(0.1, C.sage, C.pumpkin), [0.62, 0.76, -0.12]);
  add(g, P.chair(C.sageLight), [0.7, 0, 0.75], PI + 0.3);
  add(g, P.chair(C.sageLight), [1.75, 0, 0.8], PI - 0.2);
  cast(g, 'client', [1.75, SEATED, 0.83], PI - 0.2, HUMAN, { nod: true });

  const table = add(g, G([0, 0, 0], [box(1.4, 0.09, 0.75, C.mist, { at: [0, 0.78, 0], r: 0.04 }), box(1.25, 0.72, 0.6, C.white, { at: [0, 0.06, 0], r: 0.05 }), box(1.3, 0.06, 0.66, C.white, { r: 0.02 })]), [-1.3, 0, 0.35]);
  cast(table, 'cat_orange_sit', [0.1, 0.87, 0], 0.7, 0.9, { kind: 'cat' });
  add(g, G([0, 0, 0], [box(0.9, 0.08, 0.6, C.white, { r: 0.03 }), box(0.3, 0.14, 0.04, C.mist, { at: [0, 0.08, -0.34], rx: -0.3, r: 0.015, glow: 0.3 })]), [-0.5, 0, 1.45], 0.3);
  cast(g, 'dog_white_stand', [-0.5, 0.08, 1.45], 1.1, 0.68, { kind: 'dog' });

  const lib = add(g, P.shelfUnit(1.3, 1.1, 0.34, 2, C.white, C.mist), [LEFT + 0.19, 0, -0.9], PI / 2);
  stock(lib, 0, [[-0.5, P.books(6)], [0.2, P.jar(0.08, 0.2, C.gold)]]);
  stock(lib, 1, [[-0.5, P.books(4, [C.teal, C.cream, C.sage, C.gold])], [0.1, P.books(3, [C.blush, C.mist, C.sage])]]);
  add(lib, P.plant({ h: 0.6, pot: C.terracotta }), [0.35, 1.1, 0], 0, 0.7);
  add(g, P.plant({ kind: 'tall', h: 1.5 }), [2.6, 0, BACK + 0.3]);
  add(g, P.floorLamp(), [0.1, 0, BACK + 0.3]);
}

function reviews(root) {
  const g = room(root, 1, 1, 0xBDCBAE, 0xE8EDDC);
  add(g, P.rug(2.6, 0, C.cream, true), [-0.5, 0, 0.55]);
  add(g, P.sofa(2.4, C.blush, [C.cream, C.sage]), [-0.6, 0, BACK + 0.5]);
  cast(g, 'cat_grey_loaf', [-1.25, 0.5, BACK + 0.62], 0.4, 0.95, { kind: 'cat', emote: ['♥', '#C98B7A'], emoteY: 0.6, emoteEvery: 11 });
  cast(g, 'guest', [-0.1, SEATED, BACK + 0.62], 0.15, HUMAN, { look: 0.3 });
  add(g, P.roundTable(0.5, 0.4), [-0.5, 0, 0.7]);
  add(g, G([-0.62, 0.4, 0.62], [cyl(0.05, 0.09, C.white), cyl(0.04, 0.005, C.woodDark, { at: [0, 0.085, 0], cast: false })]));
  add(g, P.books(3, [C.sage, C.gold, C.cream]), [-0.5, 0.4, 0.86], PI / 2 + 0.3);
  const art = [C.cream, C.goldLight, C.cream, C.blushLight], motif = [C.gold, C.sage, C.blush, C.gold];
  art.forEach((c, i) => add(g, P.frame(0.44, 0.54, c, C.wood, motif[i]), [-1.5 + i * 0.55, 1.5, WALL_Z]));
  add(g, P.windowPane(1.1, 1.2), [1.55, 1.25, WALL_Z]);
  add(g, P.floorLamp(), [-2.3, 0, BACK + 0.3]);
  add(g, P.petBed(0.5, C.gold), [1.5, 0, 1.15]);
  cast(g, 'dog_gold_lie', [1.5, 0.08, 1.1], 0.9, 0.85, { kind: 'dog', low: true, calm: true, look: 0.04, emote: ['z', '#7D786C'], emoteY: 0.6, emoteEvery: 4 });
  cast(g, 'cat_black_stand', [-2.0, 0, 1.6], 0, 0.95, { kind: 'cat', path: [[-2.2, 1.62], [0.7, 1.68]], lap: 13 });
  const tower = add(g, P.catTree(), [2.45, 0, BACK + 0.45]);
  cast(tower, 'cat_orange_sit', [-0.1, 0.93, -0.04], 0.7, 0.85, { kind: 'cat' });
  add(g, P.plant({ h: 1.0, pot: C.terracotta }), [0.85, 0, BACK + 0.32]);
  add(g, P.basket(0.2, [C.blush, C.cream, C.sage]), [-2.3, 0, 1.2]);
  ball(0.09, C.gold, { at: [0.3, 0, 1.6], in: g });
  ball(0.07, C.blush, { at: [-1.5, 0, 1.6], in: g });
}

function story(root) {
  const g = room(root, 0, 2, 0xE3D2AF, 0xF4EBD8, { left: true, wallH: 2.7, cap: true });
  const cx = 0.45, cz = 0.35;
  add(g, P.rug(3.0, 0, C.cream, true), [cx, 0, cz]);
  add(g, P.roundTable(0.95, 0.74, C.wood, C.white), [cx, 0, cz]);
  const screens = [C.mistLight, C.goldLight, C.sageLight, C.blushLight];
  screens.forEach((screen, i) => {
    const a = PI / 4 + i * (PI / 2), sx = Math.sin(a), sz = Math.cos(a);
    add(g, P.chair(C.white), [cx + sx * 1.25, 0, cz + sz * 1.25], a + PI);
    cast(g, `student_${'abcd'[i]}`, [cx + sx * 1.22, SEATED, cz + sz * 1.22], a + PI, HUMAN, { arms: 'type', look: 0.28, nod: i % 2 === 0 });
    add(g, P.laptop(screen), [cx + sx * 0.55, 0.74, cz + sz * 0.55], a + PI);
  });
  add(g, G([cx, 0.74, cz], [cyl(0.05, 0.09, C.white), ball(0.045, C.white, { at: [0.2, 0, 0.1] }), ball(0.04, C.white, { at: [-0.14, 0, 0.16] })]));

  add(g, G([0, 0, 0], [box(2.0, 1.15, 0.05, C.wood, { center: true, r: 0.02 }), box(1.9, 1.05, 0.055, C.white, { center: true, r: 0.01, cast: false })]), [0.5, 1.55, WALL_Z]);
  add(g, P.stickyNotes(5, 3), [-0.15, 1.85, WALL_Z + 0.035]);
  box(0.5, 0.012, 0.01, C.tomato, { center: true, at: [1.05, 1.7, WALL_Z + 0.035], rz: 0.12, in: g, cast: false });
  box(0.42, 0.012, 0.01, C.ink, { center: true, at: [1.05, 1.45, WALL_Z + 0.035], in: g, cast: false });
  add(g, P.clock(0.34), [2.25, 1.75, WALL_Z]);
  add(g, P.frame(0.5, 0.4, C.sageLight, C.wood, C.gold), [-1.45, 1.75, WALL_Z]);

  const lib = add(g, P.shelfUnit(1.5, 2.0, 0.34, 4, C.white, C.oat), [LEFT + 0.19, 0, -0.5], PI / 2);
  stock(lib, 0, [[-0.6, P.books(7)], [0.25, pack(C.sage, 0.3)]]);
  stock(lib, 1, [[-0.6, P.books(5, [C.gold, C.cream, C.teal, C.blush])], [0.2, P.books(4)]]);
  stock(lib, 2, [[-0.55, P.jar(0.08, 0.2, C.gold)], [-0.2, P.books(6, [C.mist, C.sage, C.cream])]]);
  stock(lib, 3, [[-0.5, P.plant({ h: 0.5, pot: C.terracotta }), 0.6], [0.1, P.books(4, [C.blush, C.gold])]]);
  add(g, G([-1.9, 0, 1.35], [cyl(0.16, 0.34, C.white, { rt: 0.2 }), ball(0.06, C.white, { at: [0.02, 0.3, 0] }), ball(0.055, C.white, { at: [0.3, 0, 0.12] }), ball(0.05, C.white, { at: [0.42, 0, -0.1] })]));
  add(g, P.plant({ kind: 'tall', h: 1.6 }), [2.55, 0, BACK + 0.3]);
  add(g, P.floorLamp(), [-2.2, 0, BACK + 0.3]);
  cast(g, 'cat_grey_loaf', [2.2, 0, 1.4], -0.6, 0.95, { kind: 'cat' });
}

function team(root) {
  const g = room(root, 1, 2, 0xE2CFAE, C.cream, { walls: false });
  for (let i = 0; i < 9; i++) box(0.012, 0.01, D - 0.1, C.woodDark, { at: [-W / 2 + 0.6 + i * 0.6, 0, 0], in: g, cast: false });
  box(W, 0.9, 0.2, C.cream, { at: [0, 0, -D / 2 + 0.1], r: 0.05, in: g });
  box(W + 0.06, 0.08, 0.3, C.white, { at: [0, 0.9, -D / 2 + 0.1], r: 0.035, in: g, cast: false });
  cast(g, 'sign_faunora', [-1.05, 0.98, -D / 2 + 0.12], 0.3, 1.2, { still: true });   // the wordmark stands on the parapet
  add(g, P.planter(2.2), [-1.7, 0, BACK + 0.26]);
  add(g, P.planter(1.5, C.white, [C.gold, C.blush]), [0.5, 0, BACK + 0.26]);
  add(g, P.bench(1.3), [2.45, 0, -0.5], -PI / 2 + 0.2);
  add(g, P.rug(4.6, 1.7, C.cream), [-0.3, 0, 0.85]);
  for (const x of [-2.8, 1.2]) cyl(0.03, 2.2, C.wood, { at: [x, 0, BACK + 0.6], in: g, seg: 8 });
  add(g, P.stringLights([-2.8, 2.2, BACK + 0.6], [1.2, 2.2, BACK + 0.6], 10, 0.4));
  const facing = 0.62;   // toward the camera
  cast(g, 'pig', [-2.0, 0, 0.8], facing, 1.3, { kind: 'pig', hop: 6.2 });
  cast(g, 'dog_gold_stand', [-0.75, 0, 0.9], facing, 1.15, { kind: 'dog', hop: 4.6 });
  cast(g, 'cat_grey_sit', [0.4, 0, 0.95], facing, 1.45, { kind: 'cat' });
  cast(g, 'deer', [1.45, 0, 0.75], facing, 1.1, { kind: 'deer', hop: 8.3 });
  add(g, P.bowl(0.16, C.sage, C.pumpkin), [-1.35, 0, 1.55]);
  add(g, P.bowl(0.14, C.gold, C.salmon), [0.95, 0, 1.6]);
}

/* ---------- Shell & surroundings ---------- */
function shell(root) {
  box(12.7, BASE, D + 0.9, C.slab, { at: [0, 0, 0.2], r: 0.1, in: root });
  for (const x of [-3, 3]) box(2.2, 0.15, 0.6, C.slab, { at: [x, 0, D / 2 + 0.75], r: 0.06, in: root, cast: false });
  for (const f of [1, 2]) {
    box(12.5, SLAB, D + 0.35, C.slab, { at: [0, floorY(f) - SLAB - 0.02, floorZ(f) + 0.1], r: 0.12, in: root });
  }
  // Solid mass behind the rooms: carries the stepped-back upper floors.
  box(12.2, floorY(1) - 0.02, STEP_BACK * 2, C.cream, { at: [0, 0, -D / 2 - STEP_BACK], r: 0.1, in: root });
  box(12.2, PITCH, STEP_BACK, C.cream, { at: [0, floorY(1) - 0.02, -D / 2 - STEP_BACK * 1.5], r: 0.1, in: root });
}

function garden(root) {
  const y = 0.22;
  box(5.4, y, 7.2, C.sageLight, { at: [9.3, 0, 0.2], r: 0.1, in: root, cast: false });
  add(root, P.vegPatch(3, 2.8), [9.4, y, -1.3]);
  add(root, P.tree(3.6), [10.9, y, -2.6]);
  add(root, P.bush(0.42), [7.4, y + 0.12, -2.7]);
  add(root, P.crate(0.55), [7.55, y, 0.2], 0.3);
  add(root, P.crate(0.5, [C.leaf, C.sageLight, C.carrot]), [8.25, y, 0.55], -0.2);
  cast(root, 'farmer', [8.5, y, -0.5], 0.9, HUMAN, { arms: 'dig' });
  cast(root, 'dog_brown_stand', [7.3, y, 1.5], 0, 0.8, { kind: 'dog', path: [[7.3, 1.45], [11.3, 1.55]], lap: 11 });
  for (const [x, z, ry] of [[10.7, 0.45, 0.4], [11.35, -0.05, -0.9], [10.15, 0.85, 1.6]]) cast(root, 'chicken', [x, y, z], ry, 1.15, { kind: 'chicken' });
  add(root, P.scooter(), [9.6, y, 2.45], -0.45);
  add(root, P.bush(0.36, C.leaf), [11.4, y + 0.1, 1.2]);
  for (const [x, z] of [[7.2, 2.6], [7.9, 3.2], [8.5, 3.7]]) cyl(0.3, 0.04, C.slab, { at: [x, y, z], in: root, cast: false });

  box(4.2, 0.16, 6.2, C.sageLight, { at: [-8.7, 0, 0], r: 0.08, in: root, cast: false });
  add(root, P.tree(4.2, { top: C.sageLight }), [-9.4, 0.16, -1.8]);
  add(root, P.tree(2.6), [-7.6, 0.16, -2.6]);
  add(root, P.bush(0.5), [-9.9, 0.3, 0.9]);
  add(root, P.bush(0.34, C.leaf), [-7.3, 0.26, 2.2]);
  add(root, P.bench(1.3), [-8.6, 0.16, 1.2], 0.6);
  cast(root, 'cat_orange_loaf', [-8.6, 0.63, 1.2], 0.6, 0.95, { kind: 'cat' });
  for (const [x, z] of [[-3.0, 3.5], [-2.2, 4.1], [-1.2, 4.5], [3.0, 3.5], [3.9, 4.0]]) cyl(0.32, 0.04, C.slab, { at: [x, 0, z], in: root, cast: false });
  add(root, P.bush(0.38), [-0.3, 0.12, 2.75]);
  add(root, P.bush(0.3, C.leaf), [0.5, 0.1, 2.85]);
  add(root, P.bush(0.34), [6.0, 0.1, 2.8]);
}

function sign(root, logoUrl) {
  const g = G([-6.2, 0, 3.1], [], { ry: 0.62, live: true, in: root });
  cyl(0.05, 1.5, C.wood, { in: g, seg: 10 });
  cyl(0.2, 0.05, C.white, { in: g });
  const tex = new THREE.TextureLoader().load(logoUrl);
  tex.colorSpace = THREE.SRGBColorSpace;
  const face = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9 });
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.08, 48), [mat(C.white), face, mat(C.white)]);
  tex.center.set(0.5, 0.5);
  tex.rotation = PI / 2;
  disc.rotation.x = PI / 2;   // textured cap toward +z
  disc.position.set(0, 1.9, 0);
  disc.castShadow = true;
  g.add(disc);
  cyl(0.66, 0.06, C.gold, { rx: PI / 2, center: true, at: [0, 1.9, -0.02], in: g, seg: 48 });
}

/** A hot-air balloon beside the house, with a cat along for the ride. */
function balloon(root) {
  const g = G([0, 0, 0], [], { live: true, in: root });
  ball(1.5, C.cream, { center: true, scale: [1, 1.12, 1], in: g, cast: false });
  for (const [y, r, c] of [[0.55, 1.36, C.sage], [0, 1.515, C.gold], [-0.55, 1.36, C.sage]]) {
    cyl(r, 0.26, c, { center: true, at: [0, y, 0], in: g, cast: false, seg: 32 });
  }
  cyl(0.5, 0.5, C.cream, { rt: 0.95, center: true, at: [0, -1.5, 0], in: g, cast: false });
  for (const [x, z] of [[-0.3, -0.3], [0.3, -0.3], [-0.3, 0.3], [0.3, 0.3]]) cyl(0.012, 0.9, C.woodDark, { at: [x, -2.6, z], in: g, seg: 5, cast: false });
  box(0.75, 0.45, 0.75, C.wood, { at: [0, -3.0, 0], r: 0.08, in: g, cast: false });
  box(0.8, 0.07, 0.8, C.woodDark, { at: [0, -2.6, 0], r: 0.03, in: g, cast: false });
  cast(g, 'cat_orange_sit', [0, -2.72, 0.05], 0.4, 1.0, { kind: 'cat' });
  // Hovers to the right of the house, clear of the headline, drifting a little.
  P.tickers.push(t => {
    g.position.set(15.5 + Math.sin(t * 0.11) * 1.6, 13.2 + Math.sin(t * 0.35) * 0.5, -7);
    g.rotation.z = Math.sin(t * 0.5) * 0.03;
  });
}

/** Butterflies looping over the vegetable patch. */
function butterflies(root) {
  [[C.blush, 9.6, -1.0], [C.goldLight, 10.4, -0.2], [C.white, 8.9, 0.4]].forEach(([color, x, z], i) => {
    const g = G([x, 1, z], [], { live: true, in: root });
    const wings = [-1, 1].map(s => {
      const hinge = G([0, 0, 0], [], { in: g });
      box(0.11, 0.008, 0.1, color, { at: [s * 0.058, 0, 0], r: 0.003, in: hinge, cast: false });
      return hinge;
    });
    P.tickers.push(t => {
      const a = t * (0.5 + i * 0.13) + i * 2.1;
      g.position.set(x + Math.sin(a) * 0.9, 0.9 + Math.sin(a * 2.3) * 0.25 + i * 0.15, z + Math.sin(a * 1.7) * 0.7);
      g.rotation.y = a;
      const flap = Math.sin(t * 16 + i) * 0.9;
      wings[0].rotation.z = -flap; wings[1].rotation.z = flap;
    });
  });
}

function sky(root) {
  const spots = [[-11, 11.5, -5, 1.1], [9.5, 14.5, -6, 1.3], [14, 7.5, -1, 0.8], [-14.5, 5.5, 2, 0.9], [1.5, 16.5, -5, 0.9], [-5, 15, -7, 0.7]];
  spots.forEach(([x, y, z, s], i) => {
    const c = add(root, P.cloud(s), [x, y, z]);
    P.tickers.push(t => {
      c.position.x = x + Math.sin(t * 0.07 + i * 2.1) * 1.4;
      c.position.y = y + Math.sin(t * 0.23 + i) * 0.18;
    });
  });
}

/** Builds the house at once; `ready` resolves when the Blender cast has loaded and moved in. */
export function buildHouse({ logoUrl, castUrl }) {
  const root = new THREE.Group();
  shell(root);
  shop(root); kitchen(root); consult(root); reviews(root); story(root); team(root);
  garden(root);
  butterflies(root);
  sky(root);
  balloon(root);
  bake(root);
  sign(root, logoUrl);   // textured, so added after the bake
  const ready = loadCast(castUrl).then(() => populate(P.tickers));
  return { root, tickers: P.tickers, ready };
}
