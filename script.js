const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const rupiah = n => 'Rp ' + n.toLocaleString('id-ID');

const store = {
  get(k, fallback) { try { const v = localStorage.getItem(k); return v === null ? fallback : JSON.parse(v); } catch { return fallback; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

// Two offset passes of the same drawing give the doubled pencil line.
const sketch = id => `<use href="#${id}" filter="url(#pencil)"/><use href="#${id}" filter="url(#pencil2)" opacity=".35"/>`;
$$('[data-sketch]').forEach(svg => { svg.innerHTML = sketch(svg.dataset.sketch); });

/* ---------- Background music ---------- */
const audio = $('#bgm');
const soundBtn = $('#soundBtn');
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
  try { await audio.play(); }
  catch { if (!muted) soundBtn.classList.add('hint'); } // autoplay blocked: wait for a gesture
  renderSound();
}

soundBtn.addEventListener('click', () => {
  muted = !audio.paused;
  store.set('faunora-muted', muted);
  muted ? audio.pause() : play();
  renderSound();
});

// Browsers block sound until the visitor interacts; start on the first gesture unless they muted.
function firstGesture(e) {
  if (soundBtn.contains(e.target)) return; // the button handles itself
  ['pointerdown', 'keydown'].forEach(t => removeEventListener(t, firstGesture));
  if (!muted && audio.paused) play();
}
['pointerdown', 'keydown'].forEach(t => addEventListener(t, firstGesture));
audio.addEventListener('play', renderSound);
audio.addEventListener('pause', renderSound);
if (!muted) play();

/* ---------- Header, menu, reveal ---------- */
const nav = $('.nav');
const onScroll = () => nav.classList.toggle('scrolled', scrollY > 30);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

const links = $('#links');
const menuBtn = $('#menuBtn');
function setMenu(open) {
  links.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
}
menuBtn.addEventListener('click', () => setMenu(!links.classList.contains('open')));
links.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });

const revealer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealer.unobserve(e.target); } });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
$$('.reveal').forEach(el => revealer.observe(el));

const navLinks = $$('.links a');
const spy = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) navLinks.forEach(a => a.classList.toggle('active', a.hash === '#' + e.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach(s => spy.observe(s));

/* ---------- Catering timeline: line fills with scroll, steps light up as it reaches them ---------- */
const processEl = $('#process');
const steps = $$('.step', processEl);
let processTicking = false;
function updateProcess() {
  processTicking = false;
  const r = processEl.getBoundingClientRect();
  const start = innerHeight * 0.85, end = innerHeight * 0.45; // fill while the list travels up the viewport
  const p = reduceMotion ? 1 : Math.min(1, Math.max(0, (start - r.top) / (start - end + r.height * 0.6)));
  processEl.style.setProperty('--p', p.toFixed(3));
  steps.forEach((s, i) => s.classList.toggle('lit', p > 0 && p >= i / (steps.length - 1) - 0.001));
}
addEventListener('scroll', () => { if (!processTicking) { processTicking = true; requestAnimationFrame(updateProcess); } }, { passive: true });
addEventListener('resize', updateProcess);
updateProcess();

/* ---------- Toast ---------- */
const toastEl = $('#toast');
let toastTimer;
function toast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 3400);
}

/* ---------- Consultation booking (prototype: no backend) ---------- */
const form = $('#bookForm');
form.date.min = new Date().toISOString().slice(0, 10);
$$('[data-expert]').forEach(btn => btn.addEventListener('click', () => {
  $('#expertSel').value = btn.dataset.expert;
  form.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
  form.classList.remove('flash'); void form.offsetWidth; form.classList.add('flash');
  setTimeout(() => form.pet.focus({ preventScroll: true }), 600);
}));
form.addEventListener('submit', e => {
  e.preventDefault();
  const pet = form.pet.value.trim();
  if (!pet) return form.pet.focus();
  // care.js takes over from here: assigned nutritionist card, chat and mock call.
  dispatchEvent(new CustomEvent('faunora:booked', { detail: {
    pet: pet.slice(0, 40), species: form.species.value, date: form.date.value,
    expert: form.expert.value, concern: form.concern.value,
  } }));
  form.reset();
});

/* ---------- Shop ---------- */
const TINT = { meals: 'rgba(169,183,154,.28)', snacks: 'rgba(205,187,116,.25)', toys: 'rgba(229,196,181,.35)', fashion: 'rgba(201,212,212,.4)' };
const PRODUCTS = [
  { id: 'm1', cat: 'meals', name: 'Garden Lamb Bowl', desc: 'Lamb, brown rice, pumpkin and peas. Cooked fresh, portioned per meal.', tags: ['Dog', 'Adult'], price: 68000 },
  { id: 'm2', cat: 'meals', name: 'Ocean Tuna Pâté', desc: 'Grain-free tuna and sardine pâté with taurine for indoor cats.', tags: ['Cat', 'Grain-free'], price: 32000 },
  { id: 'm3', cat: 'meals', name: 'Slim & Sage Chicken', desc: 'Lean chicken, zucchini and oats. Built for weight-management plans.', tags: ['Dog', 'Low-fat'], price: 72000 },
  { id: 'm4', cat: 'meals', name: 'Senior Soft Salmon', desc: 'Gently baked salmon with mashed sweet potato, soft on older teeth and kidneys.', tags: ['Cat', 'Senior'], price: 38000 },
  { id: 's1', cat: 'snacks', name: 'Pumpkin Paw Biscuits', desc: 'Oven-baked, three ingredients, no added salt or sugar.', tags: ['Dog', 'Hypoallergenic'], price: 45000 },
  { id: 's2', cat: 'snacks', name: 'Freeze-Dried Chicken Hearts', desc: 'Single-ingredient training treats. One jar, many good boys.', tags: ['Dog & Cat', 'Single protein'], price: 59000 },
  { id: 't1', cat: 'toys', name: 'Linen Knot Rope', desc: 'Undyed cotton-linen rope for tugging and teeth cleaning.', tags: ['Dog'], price: 55000 },
  { id: 't2', cat: 'toys', name: 'Felt Kitty Trio', desc: 'Hand-stitched wool felt kitties in sage, blush and oat, lightly scented with catnip.', tags: ['Cat'], price: 49000 },
  { id: 'f1', cat: 'fashion', name: 'Sage Knit Sweater', desc: 'Soft knit for air-conditioned rooms and rainy evenings. Sizes XS–L.', tags: ['Dog & Cat'], price: 129000 },
  { id: 'f2', cat: 'fashion', name: 'Canvas Bandana', desc: 'Washed canvas in Faunora gold, with an adjustable tie.', tags: ['Dog & Cat'], price: 65000 },
];
const byId = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));
const photo = p => `assets/img/${p.id}.webp`;

const grid = $('#grid');
function renderGrid(cat) {
  grid.innerHTML = PRODUCTS.filter(p => cat === 'all' || p.cat === cat).map((p, i) => `
    <article class="card" style="--d:${i * 0.06}s">
      <div class="art" style="--tint:${TINT[p.cat]}"><img src="${photo(p)}" alt="${p.name}" width="640" height="640" loading="lazy"></div>
      <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="buy"><span class="price">${rupiah(p.price)}</span><button class="add" data-id="${p.id}">Add to bag</button></div>
    </article>`).join('');
}
$$('.tabs button').forEach(tab => tab.addEventListener('click', () => {
  $$('.tabs button').forEach(t => t.setAttribute('aria-selected', String(t === tab)));
  renderGrid(tab.dataset.cat);
}));
renderGrid('all');

/* ---------- Bag ---------- */
let bag = store.get('faunora-bag', {}); // { productId: qty }
Object.keys(bag).forEach(id => { if (!byId[id] || !(bag[id] > 0)) delete bag[id]; });

const bagBtn = $('#bagBtn'), countEl = $('#bagCount');
function renderBag() {
  const ids = Object.keys(bag);
  const count = ids.reduce((n, id) => n + bag[id], 0);
  countEl.textContent = count;
  countEl.classList.toggle('has', count > 0);
  $('#bagEmpty').hidden = count > 0;
  $('#checkout').disabled = count === 0;
  $('#bagTotal').textContent = rupiah(ids.reduce((s, id) => s + byId[id].price * bag[id], 0));
  $('#bagList').innerHTML = ids.map(id => {
    const p = byId[id];
    return `<li>
      <div class="thumb" style="--tint:${TINT[p.cat]}"><img src="${photo(p)}" alt="" width="64" height="64"></div>
      <div><h3>${p.name}</h3><span class="sub">${rupiah(p.price)}</span></div>
      <div class="qty"><button data-dec="${id}" aria-label="Remove one ${p.name}">−</button><span>${bag[id]}</span><button data-inc="${id}" aria-label="Add one ${p.name}">+</button></div>
    </li>`;
  }).join('');
  store.set('faunora-bag', bag);
}

function flyToBag(fromEl, p) {
  if (reduceMotion) return Promise.resolve();
  const a = fromEl.getBoundingClientRect(), b = bagBtn.getBoundingClientRect();
  const size = Math.min(a.width, 140);
  const fly = document.createElement('div');
  fly.className = 'flyer';
  fly.innerHTML = `<img src="${photo(p)}" alt="">`;
  Object.assign(fly.style, { width: size + 'px', height: size + 'px', left: a.left + (a.width - size) / 2 + 'px', top: a.top + (a.height - size) / 2 + 'px' });
  document.body.append(fly);
  const dx = b.left + b.width / 2 - (a.left + a.width / 2);
  const dy = b.top + b.height / 2 - (a.top + a.height / 2);
  // Arc: rise first, then glide down into the bag while shrinking.
  const anim = fly.animate([
    { transform: 'translate(0,0) scale(1) rotate(0)', opacity: 1 },
    { transform: `translate(${dx * 0.35}px, ${dy * 0.35 - 90}px) scale(.7) rotate(-10deg)`, opacity: 1, offset: 0.4 },
    { transform: `translate(${dx}px, ${dy}px) scale(.12) rotate(8deg)`, opacity: 0.4 },
  ], { duration: 950, easing: 'cubic-bezier(.45,0,.2,1)' });
  // Don't let a throttled animation (background tab, power saving) hold up the bag update.
  const landed = Promise.race([anim.finished, new Promise(r => setTimeout(r, 1100))]);
  return landed.then(() => fly.remove());
}

grid.addEventListener('click', async e => {
  const btn = e.target.closest('.add');
  if (!btn) return;
  const p = byId[btn.dataset.id];
  btn.classList.add('done');
  btn.textContent = 'Added ✓';
  setTimeout(() => { btn.classList.remove('done'); btn.textContent = 'Add to bag'; }, 1600);
  await flyToBag(btn.closest('.card').querySelector('.art'), p);
  bag[p.id] = (bag[p.id] || 0) + 1;
  renderBag();
  bagBtn.classList.remove('bump'); countEl.classList.remove('pop');
  void bagBtn.offsetWidth;
  bagBtn.classList.add('bump'); countEl.classList.add('pop');
});

$('#bagList').addEventListener('click', e => {
  const inc = e.target.dataset.inc, dec = e.target.dataset.dec;
  if (inc) bag[inc]++;
  if (dec && --bag[dec] <= 0) delete bag[dec];
  if (inc || dec) renderBag();
});

const drawer = $('#drawer'), scrim = $('#scrim');
function setBag(open) {
  drawer.classList.toggle('open', open);
  drawer.setAttribute('aria-hidden', String(!open));
  if (open) { scrim.hidden = false; requestAnimationFrame(() => scrim.classList.add('open')); $('#closeBag').focus(); }
  else { scrim.classList.remove('open'); setTimeout(() => { scrim.hidden = true; }, 500); bagBtn.focus(); }
}
bagBtn.addEventListener('click', () => setBag(true));
$('#closeBag').addEventListener('click', () => setBag(false));
scrim.addEventListener('click', () => setBag(false));
addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (drawer.classList.contains('open')) setBag(false);
  setMenu(false);
});
$('#checkout').addEventListener('click', () => {
  toast('Prototype: checkout and delivery scheduling arrive in the next build.');
});
renderBag();
