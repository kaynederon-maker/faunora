/* The cast: pets and people sculpted in Blender (tools/make_characters.py), loaded from one GLB.
   Each figure's head, eyes, ears, tail and arms are separate nodes pivoted at the joint; `enliven` gives
   them idle behaviour so no two characters move in step. */
import * as THREE from 'three';
import { GLTFLoader } from '../../vendor/GLTFLoader.js';

const BLINK = 0.13;        // seconds an eye stays shut
let library = null;        // model name -> Object3D
let seed = 0;

export async function loadCast(url) {
  const gltf = await new GLTFLoader().loadAsync(url);
  library = new Map(gltf.scene.children.map(node => [node.name, node]));
  gltf.scene.traverse(o => {
    if (!o.isMesh) return;
    o.castShadow = true;
    o.receiveShadow = !o.name.includes('eyes');
  });
  return library;
}

/** A fresh copy of a model with its animated parts by name: { root, body, head, eyes, tail, earL, earR, armL, armR }. */
export function spawn(name) {
  const source = library?.get(name);
  if (!source) return null;
  const root = source.clone(true);
  const parts = { root };
  root.traverse(o => { const key = o.name.split('__')[1]; if (key) parts[key.replace(/_\d+$/, '')] = o; });
  return parts;
}

const wave = (t, speed, phase = 0) => Math.sin(t * speed + phase);
/** 0 most of the time, a short 0→1→0 pulse once every `every` seconds. */
function pulse(t, every, length, phase) {
  const x = (t + phase) % every;
  return x < length ? Math.sin((x / length) * Math.PI) : 0;
}

const TAIL = {
  dog: (tail, t, p, o) => { tail.rotation[o.low ? 'y' : 'z'] = wave(t, o.calm ? 2.2 : 9, p) * (o.calm ? 0.18 : 0.5); },
  cat: (tail, t, p) => { tail.rotation.y = wave(t, 1.4, p) * 0.22; tail.rotation.x = wave(t, 0.9, p) * 0.06; },
  pig: (tail, t, p) => { tail.rotation.z = wave(t, 11, p) * 0.3 * pulse(t, 3.2, 1.2, p); },
  deer: (tail, t, p) => { tail.rotation.y = pulse(t, 4.5, 0.5, p) * wave(t, 26) * 0.5; },
};

const ARMS = {
  // Typing: quick, small, the two hands out of step.
  type: (a, t, p) => { a.armL.rotation.x = wave(t, 15, p) * 0.05; a.armR.rotation.x = wave(t, 13, p + 2) * 0.05; },
  stir: (a, t, p) => {
    a.armR.rotation.y = wave(t, 3.4, p) * 0.22; a.armR.rotation.x = Math.cos(t * 3.4 + p) * 0.14;
    a.armL.rotation.x = wave(t, 1.1, p) * 0.05;
  },
  wave: (a, t, p) => { a.armR.rotation.z = wave(t, 7, p) * 0.28 * (0.35 + pulse(t, 5, 2.4, p)); },
  dig: (a, t, p) => { const k = wave(t, 2.2, p) * 0.22; a.armL.rotation.x = k; a.armR.rotation.x = k; },
  rest: (a, t, p) => { a.armL.rotation.x = wave(t, 0.9, p) * 0.03; a.armR.rotation.x = wave(t, 0.8, p + 1) * 0.03; },
};

/**
 * Register idle motion for one spawned figure. `act`:
 *   kind: 'dog' | 'cat' | 'pig' | 'deer' | 'chicken' | 'person'
 *   arms: 'type' | 'stir' | 'wave' | 'dig' | 'rest'   (people)
 *   low: tail lies on the floor (sitting or lying dogs), calm: asleep-ish, look: how far the head turns
 *   path: [[x, z], [x, z]] to trot back and forth between, hop: bounce in place now and then
 */
export function enliven(parts, act, tickers) {
  const p = (seed += 2.399);            // golden-angle phase: nobody blinks or wags in unison
  const { root, body, head, eyes, tail, earL, earR } = parts;
  const kind = act.kind || 'person';
  const look = act.look ?? (kind === 'person' ? 0.22 : 0.3);
  const home = root.position.clone(), baseTurn = root.rotation.y;
  const blinkEvery = 3.2 + (p % 2.5);

  tickers.push(t => {
    if (body) body.scale.y = 1 + wave(t, act.calm ? 1.1 : 1.9, p) * 0.012;      // breathing
    if (eyes) eyes.scale.y = act.calm ? 0.14 : ((t + p) % blinkEvery < BLINK ? 0.12 : 1);
    if (head) {
      if (kind === 'chicken') {
        head.rotation.x = Math.pow(Math.max(0, wave(t, 2.6, p)), 8) * 1.1;        // peck
      } else {
        head.rotation.y = (wave(t, 0.45, p) + wave(t, 0.19, p * 2) * 0.5) * look;
        head.rotation.x = wave(t, 0.6, p + 1) * 0.05 + (act.nod ? pulse(t, 6, 1.2, p) * 0.18 : 0);
        head.rotation.z = kind === 'person' ? 0 : pulse(t, 7.5, 1.6, p) * 0.26;   // the curious head tilt
      }
    }
    if (tail && TAIL[kind]) TAIL[kind](tail, t, p, act);
    if (earL && earR) {
      const flick = kind === 'dog' ? wave(t, 2.1, p) * 0.06 : pulse(t, 5.3, 0.35, p) * 0.5;
      earL.rotation.z = -flick; earR.rotation.z = flick * (kind === 'dog' ? 1 : 0.4);
    }
    if (parts.armL && parts.armR) ARMS[act.arms || 'rest'](parts, t, p);

    if (act.path) {                       // trot there and back, turning at each end
      const [a, b] = act.path, lap = act.lap || 9;
      const u = ((t + p) % lap) / lap, forward = u < 0.5, k = forward ? u * 2 : 2 - u * 2;
      const ease = k * k * (3 - 2 * k);
      root.position.x = a[0] + (b[0] - a[0]) * ease;
      root.position.z = a[1] + (b[1] - a[1]) * ease;
      root.position.y = home.y + Math.abs(wave(t, 9, p)) * 0.035 * Math.sin(k * Math.PI);
      const heading = Math.atan2(b[0] - a[0], b[1] - a[1]);
      root.rotation.y = forward ? heading : heading + Math.PI;
    } else if (act.hop) {
      root.position.y = home.y + Math.abs(wave(t, 7, p)) * 0.09 * pulse(t, act.hop, 1.3, p);
      root.rotation.y = baseTurn + wave(t, 0.7, p) * 0.05;
    }
  });
}

/** A small floating symbol (heart, note, zzz) that drifts up and fades above a character, on a loop. */
export function emote(symbol, color = '#6F8366') {
  const size = 128, canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(252, 250, 244, 0.95)';
  ctx.beginPath(); ctx.arc(size / 2, size / 2, size * 0.44, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = color;
  ctx.font = `${size * 0.52}px Georgia, serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(symbol, size / 2, size * 0.54);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false }));
  sprite.userData.live = true;
  return sprite;
}

export function floatEmote(sprite, base, tickers, { every = 6, size = 0.34 } = {}) {
  const p = (seed += 2.399);
  tickers.push(t => {
    const x = ((t + p) % every) / 2.2;                 // visible for the first 2.2 s of each cycle
    const on = x < 1;
    sprite.visible = on;
    if (!on) return;
    sprite.position.set(base[0] + Math.sin(x * 5) * 0.04, base[1] + x * 0.35, base[2]);
    sprite.scale.setScalar(size * Math.min(1, x * 6) * (1 - Math.max(0, x - 0.75) * 2));
    sprite.material.opacity = Math.min(1, (1 - x) * 3);
  });
}
