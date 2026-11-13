/* Clay-style building blocks for the Faunora house. Every helper returns a mesh whose `at` is its
   base (bottom centre), so furniture stacks without centre-offset maths. */
import * as THREE from 'three';
import { RoundedBoxGeometry } from '../../vendor/RoundedBoxGeometry.js';
import { mergeGeometries } from '../../vendor/BufferGeometryUtils.js';

export const C = {
  paper: 0xF1EDE0, cream: 0xF7F2E6, slab: 0xEDE5D2, white: 0xFCFAF4,
  ink: 0x4F4B43, inkSoft: 0x7D786C, line: 0xB9B3A3,
  sage: 0xA9B79A, sageDeep: 0x6F8366, sageLight: 0xCFD8C2, leaf: 0x8FA382,
  gold: 0xCDBB74, goldLight: 0xEFE5BE, mist: 0xC9D4D4, mistLight: 0xDCE4E3, teal: 0x6E9696,
  blush: 0xE5C4B5, blushLight: 0xF0DCD0, oat: 0xE4D8BF,
  wood: 0xDCC6A2, woodDark: 0xB89C76, terracotta: 0xD49A7A,
  carrot: 0xE39A52, pumpkin: 0xE2A657, tomato: 0xD9705C, salmon: 0xEFA98C,
  skin: 0xEBC9A8, skinDeep: 0xC99A76, hair: 0x4A3B30, steel: 0xC9CCC8,
};

const mats = new Map();
const geos = new Map();

export function mat(color, o = {}) {
  if (color && color.isMaterial) return color;
  const key = [color, o.rough, o.metal, o.glow, o.opacity].join('|');
  if (!mats.has(key)) {
    mats.set(key, new THREE.MeshStandardMaterial({
      color, roughness: o.rough ?? 0.86, metalness: o.metal ?? 0,
      emissive: o.glow ? color : 0x000000, emissiveIntensity: o.glow ?? 0,
      transparent: o.opacity !== undefined, opacity: o.opacity ?? 1,
    }));
  }
  return mats.get(key);
}

function geo(key, make) {
  if (!geos.has(key)) geos.set(key, make());
  return geos.get(key);
}

function place(mesh, height, o) {
  const [x = 0, y = 0, z = 0] = o.at || [];
  mesh.position.set(x, y + (o.center ? 0 : height / 2), z);   // `center`: `at` is the middle (wall-mounted parts)
  mesh.rotation.set(mesh.rotation.x + (o.rx || 0), o.ry || 0, mesh.rotation.z + (o.rz || 0));
  if (o.scale) mesh.scale.set(...o.scale);
  mesh.castShadow = o.cast !== false;
  mesh.receiveShadow = o.receive !== false;
  if (o.in) o.in.add(mesh);
  return mesh;
}

/** Rounded box. `r` is the corner radius (defaults to a soft clay edge). */
export function box(w, h, d, color, o = {}) {
  const r = Math.min(o.r ?? 0.06, Math.min(w, h, d) / 2 - 0.001);
  const g = geo(`b${w},${h},${d},${r}`, () => new RoundedBoxGeometry(w, h, d, 2, r));
  return place(new THREE.Mesh(g, mat(color, o)), h, o);
}

/** Cylinder; `rt` sets a different top radius (cones, tapered pots). */
export function cyl(r, h, color, o = {}) {
  const rt = o.rt ?? r, seg = o.seg ?? 24;
  const g = geo(`c${r},${rt},${h},${seg}`, () => new THREE.CylinderGeometry(rt, r, h, seg));
  return place(new THREE.Mesh(g, mat(color, o)), h, o);
}

export function ball(r, color, o = {}) {
  const g = geo(`s${r}`, () => new THREE.SphereGeometry(r, 20, 14));
  return place(new THREE.Mesh(g, mat(color, o)), 2 * r * (o.scale ? o.scale[1] : 1), o);
}

/** Ring lying flat (pet beds), or standing when `upright` (wheels, wreaths). */
export function ring(R, tube, color, o = {}) {
  const g = geo(`t${R},${tube}`, () => new THREE.TorusGeometry(R, tube, 10, 28));
  const mesh = new THREE.Mesh(g, mat(color, o));
  if (!o.upright) mesh.rotation.x = Math.PI / 2;
  return place(mesh, o.upright ? 2 * (R + tube) : 2 * tube, o);
}

export function G(at = [0, 0, 0], kids = [], o = {}) {
  const g = new THREE.Group();
  g.position.set(...at);
  kids.forEach(k => k && g.add(k));
  if (o.ry) g.rotation.y = o.ry;
  if (o.rx) g.rotation.x = o.rx;
  if (o.rz) g.rotation.z = o.rz;
  if (o.s) g.scale.setScalar(o.s);
  if (o.live) g.userData.live = true;   // animated: left out of bake()
  if (o.in) o.in.add(g);
  return g;
}

/** Merge every static mesh under `root` into one mesh per material, so ~1500 clay parts cost ~60 draw calls.
    Groups flagged `live` (animated) and textured meshes are left alone. `root` must sit at the origin. */
export function bake(root) {
  root.updateMatrixWorld(true);
  const buckets = new Map();
  const done = [];
  (function walk(node, live) {
    live = live || node.userData.live;
    if (node.isMesh && !live && !node.material.map) {
      const key = `${node.material.uuid}|${node.castShadow}|${node.receiveShadow}`;
      if (!buckets.has(key)) buckets.set(key, { mesh: node, parts: [] });
      const g = node.geometry.index ? node.geometry.toNonIndexed() : node.geometry.clone();
      g.deleteAttribute('uv');
      g.applyMatrix4(node.matrixWorld);
      buckets.get(key).parts.push(g);
      done.push(node);
    }
    node.children.forEach(c => walk(c, live));
  })(root, false);
  done.forEach(m => m.parent.remove(m));
  for (const { mesh, parts } of buckets.values()) {
    const merged = new THREE.Mesh(mergeGeometries(parts), mesh.material);
    merged.castShadow = mesh.castShadow;
    merged.receiveShadow = mesh.receiveShadow;
    root.add(merged);
    parts.forEach(p => p.dispose());
  }
  return root;
}
