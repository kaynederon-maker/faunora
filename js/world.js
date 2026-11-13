/* Renders the Faunora house and flies an isometric camera between rooms.
   The page decides where a room should sit on screen (`rect`); this module only frames it. */
import * as THREE from 'three';
import { buildHouse, ANCHORS } from './scene/house.js';

const ELEVATION = 24 * Math.PI / 180;
const DISTANCE = 90;          // orthographic: only has to clear the scene
const EASE = 3.0;             // camera damping, higher = snappier
const PARALLAX = { az: 0.06, el: 0.025 };

export { ANCHORS };

/** Returns null when WebGL is unavailable, so the page can fall back to a flat background. */
export function createWorld(canvas, { logoUrl, castUrl, reduceMotion = false, onFrame } = {}) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch {
    return null;
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, innerWidth < 900 ? 1.5 : 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.02;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xFFFBF2, 0xD8CFBB, 1.5));
  const sun = new THREE.DirectionalLight(0xFFF3DF, 2.1);
  sun.position.set(9, 20, 30);   // low and frontal: light pours in through the open side of every room
  sun.target.position.set(0, 4, 0);
  sun.castShadow = true;
  const phone = Math.min(innerWidth, innerHeight) < 600;
  sun.shadow.mapSize.setScalar(phone ? 1024 : 2048);   // phones: a quarter of the shadow texels
  Object.assign(sun.shadow.camera, { left: -20, right: 20, top: 16, bottom: -16, near: 1, far: 90 });
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.03;
  sun.shadow.radius = 5;
  scene.add(sun, sun.target);

  const house = buildHouse({ logoUrl, castUrl });
  scene.add(house.root);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), new THREE.ShadowMaterial({ opacity: 0.09 }));
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = 0.002;
  ground.receiveShadow = true;
  scene.add(ground);

  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 400);
  const cur = { x: 0, y: 5, z: 0, az: 0.7, size: 30, offX: 0, offY: 0 };
  const goal = { ...cur };
  const pointer = { x: 0, y: 0, sx: 0, sy: 0 };
  let width = 1, height = 1, started = false;

  function resize() {
    width = canvas.clientWidth || innerWidth;
    height = canvas.clientHeight || innerHeight;
    renderer.setSize(width, height, false);
  }

  /** Frame `target` (world point) so a box of `fit` = [w, h] world units fills `rect` (CSS px). */
  function view({ target, az, fit, rect }, instant = false) {
    const [x, y, z] = target;
    const size = Math.max(fit[1] / rect.h, fit[0] / rect.w) * height;
    Object.assign(goal, {
      x, y, z, az, size,
      offX: (rect.x + rect.w / 2 - width / 2) * size / height,
      offY: (rect.y + rect.h / 2 - height / 2) * size / height,
    });
    if (instant || !started) Object.assign(cur, goal);
  }

  const dir = new THREE.Vector3(), right = new THREE.Vector3(), up = new THREE.Vector3(), tgt = new THREE.Vector3();
  function applyCamera() {
    const az = cur.az + pointer.sx * PARALLAX.az, el = ELEVATION - pointer.sy * PARALLAX.el;
    dir.set(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el));
    right.set(Math.cos(az), 0, -Math.sin(az));
    up.crossVectors(dir, right);   // screen-up for this view
    tgt.set(cur.x, cur.y, cur.z).addScaledVector(right, -cur.offX).addScaledVector(up, cur.offY);
    camera.position.copy(tgt).addScaledVector(dir, DISTANCE);
    camera.lookAt(tgt);
    const halfH = cur.size / 2, halfW = halfH * width / height;
    Object.assign(camera, { left: -halfW, right: halfW, top: halfH, bottom: -halfH });
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();
  }

  const v = new THREE.Vector3();
  /** World point -> CSS pixel position in the canvas. */
  function project(point) {
    v.set(...point).project(camera);
    return { x: (v.x + 1) / 2 * width, y: (1 - v.y) / 2 * height };
  }

  let last = 0, raf = 0;
  function frame(ms) {
    raf = requestAnimationFrame(frame);
    const t = ms / 1000, dt = Math.min(0.1, t - last || 0.016);
    last = t;
    const k = reduceMotion ? 1 : 1 - Math.exp(-dt * EASE);
    for (const key in goal) cur[key] += (goal[key] - cur[key]) * k;
    pointer.sx += (pointer.x - pointer.sx) * Math.min(1, dt * 4);
    pointer.sy += (pointer.y - pointer.sy) * Math.min(1, dt * 4);
    if (!reduceMotion) house.tickers.forEach(fn => fn(t));
    applyCamera();
    renderer.render(scene, camera);
    onFrame?.();
  }

  addEventListener('resize', resize);
  if (!reduceMotion) {
    addEventListener('pointermove', e => {
      if (e.pointerType === 'touch') return;
      pointer.x = (e.clientX / innerWidth) * 2 - 1;
      pointer.y = (e.clientY / innerHeight) * 2 - 1;
    }, { passive: true });
  }
  resize();

  return {
    view, project, resize,
    ready: house.ready,   // resolves when the characters have moved in
    start() { if (!started) { started = true; Object.assign(cur, goal); raf = requestAnimationFrame(frame); } },
    stop() { cancelAnimationFrame(raf); started = false; },
    get size() { return { width, height }; },
    stats: () => renderer.info.render,
    debug: () => ({ cur: { ...cur }, goal: { ...goal }, width, height }),
  };
}
