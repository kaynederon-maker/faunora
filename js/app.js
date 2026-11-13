/* Entry point. The page is one fixed stage: a 3D house behind, one "stop" (room) in focus at a time.
   Scrolling, swiping, arrow keys, the nav and the hotspots all move between stops; each stop's button opens
   a sheet with the full content for that part of Faunora. */
import { $, $$, store, reduceMotion } from './util.js';
import { STOPS } from './data.js';
import { createWorld, ANCHORS } from './world.js';
import { initShop, setBag, bagIsOpen } from './shop.js';
import { initCare, setChat, chatIsOpen, callIsOpen, endCall } from './care.js';

const WHEEL_THRESHOLD = 40;     // accumulated deltaY before a wheel gesture counts as "next room"
const STEP_COOLDOWN = 900;      // ms: one room per gesture, even on inertial trackpads
const SWIPE_DISTANCE = 48;      // px
const WIDE = 900;               // px: card beside the room (wide) or under it (narrow)
const SHORT = 520;              // px: a phone held sideways; the card goes beside the room again, smaller
const NARROW_ZOOM = 0.8;        // on phones a room fills more of its frame than on a desktop
const SWAP_WORDS = ['dogs', 'cats', 'picky eaters', 'seniors', 'sensitive tummies'];

const root = document.documentElement;
const stopEls = STOPS.map(s => $(`#${s.id}`));
const hotspotBox = $('#hotspots');
let index = 0, overview = false, sheetId = null, world = null, hotspots = [];

/* ---------- Where the room sits on screen ---------- */
function stageRect() {
  const W = innerWidth, H = innerHeight, wide = W >= WIDE;
  if (sheetId && wide) {
    const sheetW = $(`#sheet-${sheetId}`).offsetWidth;
    if (W - sheetW > 300) return { x: 0, y: 90, w: W - sheetW, h: H - 180 };   // room stays visible beside the sheet
  }
  const short = H < SHORT;
  if (overview) return short ? { x: W * 0.1, y: 50, w: W * 0.8, h: H - 60 } : { x: W * 0.04, y: 60, w: W * 0.92, h: H - 150 };
  if (index === 0) {
    if (short) return { x: W * 0.46, y: 30, w: W * 0.54, h: H * 1.05 };                 // headline left, house right
    return wide ? { x: 0, y: H * 0.45, w: W, h: H * 0.7 } : { x: 0, y: H * 0.44, w: W, h: H * 0.52 };   // the house runs off the bottom edge
  }
  if (short) { const left = $('.card-in', stopEls[index]).getBoundingClientRect().right + 12; return { x: left, y: 60, w: W - left - 8, h: H - 70 }; }
  if (!wide) return { x: 8, y: 76, w: W - 16, h: H * 0.4 };
  const left = $('.card-in', stopEls[index]).getBoundingClientRect().right + 24;
  return { x: left, y: 96, w: W - left - 32, h: H - 200 };
}

function frameScene(instant = false) {
  if (!world) return;
  const whole = overview || index === 0;
  const stop = STOPS[whole ? 0 : index];
  const narrow = innerWidth < WIDE;
  const fit = whole ? (narrow && !overview ? [15, 15.5] : stop.fit) : stop.fit.map(v => v * (narrow ? NARROW_ZOOM : 1));
  world.view({ target: ANCHORS[stop.id], az: stop.az, fit, rect: stageRect() }, instant);
}

/* ---------- Moving between stops ---------- */
function go(i, { instant = false, keepHash = false } = {}) {
  index = Math.max(0, Math.min(STOPS.length - 1, i));
  overview = false;
  const stop = STOPS[index];
  stopEls.forEach((el, n) => {
    el.classList.toggle('active', n === index);
    el.inert = n !== index;
  });
  $$('#links [data-go]').forEach(a => a.toggleAttribute('aria-current', a.dataset.go === stop.id));
  root.style.setProperty('--accent', stop.accent);
  document.body.dataset.stop = stop.id;
  document.body.classList.remove('overview');
  $('#overviewBtn').setAttribute('aria-pressed', 'false');
  if (index > 0) document.body.classList.add('moved');
  $('#stopCount').textContent = `${String(index + 1).padStart(2, '0')} / ${String(STOPS.length).padStart(2, '0')}`;
  $('#prevBtn').disabled = index === 0;
  $('#nextBtn').disabled = index === STOPS.length - 1;
  if (!keepHash) history.replaceState(null, '', `#${stop.id}`);
  frameScene(instant);
}
const step = d => go(index + d);
const indexOf = id => STOPS.findIndex(s => s.id === id);

function setOverview(on) {
  overview = on;
  document.body.classList.toggle('overview', on);
  $('#overviewBtn').setAttribute('aria-pressed', String(on));
  stopEls[index].inert = on;
  frameScene();
}

/* ---------- Sheets ---------- */
let sheetOpener = null;
function openSheet(id) {
  if (sheetId === id) return;
  if (sheetId) closeSheet(false);
  if (indexOf(id) !== index || overview) go(indexOf(id));
  const sheet = $(`#sheet-${id}`);
  sheetOpener = document.activeElement;
  sheetId = id;
  sheet.hidden = false;
  $('#veil').hidden = false;
  document.body.classList.add('sheet-open');
  requestAnimationFrame(() => { sheet.classList.add('open'); $('#veil').classList.add('open'); });
  $('.sheet-body', sheet).scrollTop = 0;
  $('[data-close]', sheet).focus({ preventScroll: true });
  frameScene();
}

function closeSheet(restoreFocus = true) {
  if (!sheetId) return;
  const sheet = $(`#sheet-${sheetId}`);
  sheetId = null;
  sheet.classList.remove('open');
  $('#veil').classList.remove('open');
  document.body.classList.remove('sheet-open');
  setTimeout(() => { if (!sheet.classList.contains('open')) sheet.hidden = true; if (!sheetId) $('#veil').hidden = true; }, 600);
  if (restoreFocus && sheetOpener && sheetOpener.isConnected) sheetOpener.focus({ preventScroll: true });
  frameScene();
}

/* ---------- Hotspots: DOM buttons pinned to rooms in the 3D scene ---------- */
function buildHotspots() {
  hotspots = STOPS.slice(1).map(stop => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'hotspot';
    b.dataset.id = stop.id;
    b.innerHTML = `<i></i><span>${stop.title}</span>`;
    b.setAttribute('aria-label', `Go to ${stop.title}`);
    b.addEventListener('click', () => go(indexOf(stop.id)));
    hotspotBox.append(b);
    return b;
  });
}

function placeHotspots() {
  const current = overview ? null : STOPS[index].id;
  for (const b of hotspots) {
    const p = world.project(ANCHORS[b.dataset.id]);
    b.style.transform = `translate(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px)`;
    b.classList.toggle('here', b.dataset.id === current);
  }
}

/* ---------- Input: wheel, touch, keys ---------- */
const inOverlay = el => !!el.closest?.('.sheet, .chat, .drawer, .call, #links.open');
const anyOverlay = () => sheetId || chatIsOpen() || bagIsOpen() || callIsOpen();

let wheelSum = 0, wheelLock = 0, wheelIdle;
addEventListener('wheel', e => {
  if (inOverlay(e.target) || sheetId || callIsOpen() || bagIsOpen()) return;
  clearTimeout(wheelIdle);
  wheelIdle = setTimeout(() => { wheelSum = 0; }, 180);
  if (performance.now() < wheelLock) return;
  wheelSum += e.deltaY;
  if (Math.abs(wheelSum) < WHEEL_THRESHOLD) return;
  wheelLock = performance.now() + STEP_COOLDOWN;
  if (overview) setOverview(false); else step(Math.sign(wheelSum));
  wheelSum = 0;
}, { passive: true });

let touchY = null;
addEventListener('touchstart', e => { touchY = inOverlay(e.target) || anyOverlay() ? null : e.touches[0].clientY; }, { passive: true });
addEventListener('touchend', e => {
  if (touchY === null) return;
  const dy = touchY - e.changedTouches[0].clientY;
  touchY = null;
  if (Math.abs(dy) >= SWIPE_DISTANCE) step(Math.sign(dy));
}, { passive: true });

addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (callIsOpen()) endCall();
    else if (chatIsOpen()) setChat(false);
    else if (bagIsOpen()) setBag(false);
    else if (sheetId) closeSheet();
    else if (overview) setOverview(false);
    setMenu(false);
    return;
  }
  if (anyOverlay() || e.target.closest('input, select, textarea')) return;
  const move = { ArrowDown: 1, ArrowRight: 1, PageDown: 1, ArrowUp: -1, ArrowLeft: -1, PageUp: -1 }[e.key];
  if (move) { e.preventDefault(); step(move); }
  else if (e.key === 'Home') go(0);
  else if (e.key === 'End') go(STOPS.length - 1);
});

document.addEventListener('click', e => {
  const goBtn = e.target.closest('[data-go]');
  const openBtn = e.target.closest('[data-open]');
  if (goBtn) { e.preventDefault(); closeSheet(false); setMenu(false); go(indexOf(goBtn.dataset.go)); }
  else if (openBtn) { setMenu(false); openSheet(openBtn.dataset.open); }
  else if (e.target.closest('[data-close]')) closeSheet();
});
$('#veil').addEventListener('click', () => closeSheet());
$('#prevBtn').addEventListener('click', () => step(-1));
$('#nextBtn').addEventListener('click', () => step(1));
$('#overviewBtn').addEventListener('click', () => setOverview(!overview));
addEventListener('hashchange', () => { const i = indexOf(location.hash.slice(1)); if (i >= 0 && i !== index) go(i, { keepHash: true }); });
addEventListener('resize', () => frameScene(true));

/* ---------- Menu (narrow screens) ---------- */
const links = $('#links'), menuBtn = $('#menuBtn');
function setMenu(open) {
  links.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
}
menuBtn.addEventListener('click', () => setMenu(!links.classList.contains('open')));

/* ---------- Background music ---------- */
const audio = $('#bgm'), soundBtn = $('#soundBtn');
audio.volume = 0.35;
let muted = store.get('faunora-muted', false);

function renderSound() {
  const playing = !audio.paused;
  soundBtn.classList.toggle('is-off', !playing);
  soundBtn.setAttribute('aria-pressed', String(playing));
  soundBtn.setAttribute('aria-label', playing ? 'Mute background music' : 'Play background music');
  if (playing) soundBtn.classList.remove('hint');
}
async function play() {
  try { await audio.play(); } catch { if (!muted) soundBtn.classList.add('hint'); }   // autoplay blocked: wait for a gesture
  renderSound();
}
soundBtn.addEventListener('click', () => {
  muted = !audio.paused;
  store.set('faunora-muted', muted);
  if (muted) audio.pause(); else play();
  renderSound();
});
// Browsers block sound until the visitor interacts; start on the first gesture unless they muted.
function firstGesture(e) {
  if (soundBtn.contains(e.target)) return;
  ['pointerdown', 'keydown'].forEach(t => removeEventListener(t, firstGesture));
  if (!muted && audio.paused) play();
}
['pointerdown', 'keydown'].forEach(t => addEventListener(t, firstGesture));
audio.addEventListener('play', renderSound);
audio.addEventListener('pause', renderSound);
if (!muted) play();

/* ---------- Small flourishes ---------- */
function typeHeadline() {
  const el = $('#typed'), plain = 'Nourish what ', accent = 'you love.';
  el.innerHTML = '<span></span><br><em></em>';
  const [a, , b] = el.childNodes;
  if (reduceMotion) { a.textContent = plain; b.textContent = accent; return; }
  let n = 0;
  const timer = setInterval(() => {
    n += 1;
    a.textContent = plain.slice(0, n);
    b.textContent = accent.slice(0, Math.max(0, n - plain.length));
    if (n >= plain.length + accent.length) { clearInterval(timer); el.parentElement.classList.add('typed-done'); }
  }, 70);
}

function swapWords() {
  const el = $('#swap');
  if (reduceMotion) return;
  let n = 0;
  setInterval(() => {
    el.classList.add('out');
    setTimeout(() => { n = (n + 1) % SWAP_WORDS.length; el.textContent = SWAP_WORDS[n]; el.classList.remove('out'); }, 350);
  }, 2600);
}

// Catering timeline: the line fills as the sheet scrolls and each step lights up as the line reaches it.
function initProcess() {
  const list = $('#process'), steps = $$('.step', list), scroller = list.closest('.sheet-body');
  const update = () => {
    const r = list.getBoundingClientRect();
    const start = innerHeight * 0.9, end = innerHeight * 0.5;
    const p = reduceMotion ? 1 : Math.min(1, Math.max(0, (start - r.top) / (start - end + r.height * 0.6)));
    list.style.setProperty('--p', p.toFixed(3));
    steps.forEach((s, i) => s.classList.toggle('lit', p > 0 && p >= i / (steps.length - 1) - 0.001));
  };
  scroller.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
  addEventListener('resize', update);
  update();
}

function initReveal() {
  const seen = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); seen.unobserve(e.target); } });
  }, { threshold: 0.12 });
  $$('.reveal').forEach(el => seen.observe(el));
}

// Two offset passes of the same drawing give the doubled pencil line of the logo.
$$('[data-sketch]').forEach(svg => {
  const id = svg.dataset.sketch;
  svg.innerHTML = `<use href="#${id}" filter="url(#pencil)"/><use href="#${id}" filter="url(#pencil2)" opacity=".35"/>`;
});

/* ---------- Start ---------- */
initShop();
initCare({ openSheet });
initProcess();
initReveal();
buildHotspots();

world = createWorld($('#world'), { logoUrl: 'assets/logo/mark-256.png', castUrl: 'assets/models/cast.glb', reduceMotion, onFrame: placeHotspots });
if (!world) document.body.classList.add('no-webgl');

window.faunora = { go, openSheet, world, stageRect };   // console handle for poking at the tour
const startAt = Math.max(0, indexOf(location.hash.slice(1)));
go(startAt, { instant: true, keepHash: true });
world?.start();

const LOAD_TIMEOUT = 9000;   // never hold the page hostage to a slow model download
const loaded = Promise.all([document.fonts.ready, world ? world.ready.catch(() => {}) : null]);
Promise.race([loaded, new Promise(r => setTimeout(r, LOAD_TIMEOUT))]).then(() => {
  frameScene(true);   // card widths settle once the fonts are in
  document.body.classList.add('ready');
  if (startAt === 0) typeHeadline(); else { $('#typed').innerHTML = 'Nourish what <br><em>you love.</em>'; $('#typed').parentElement.classList.add('typed-done'); }
  swapWords();
});
