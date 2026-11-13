/* Shop catalogue, the shopping bag and its drawer. Prototype: no checkout backend. */
import { $, $$, store, rupiah, reduceMotion, toast } from './util.js';
import { PRODUCTS, TINT, CATEGORIES, byId, photo } from './data.js';

const grid = $('#grid'), bagBtn = $('#bagBtn'), countEl = $('#bagCount');
const drawer = $('#drawer'), scrim = $('#scrim');
let bag = store.get('faunora-bag', {});   // { productId: qty }
Object.keys(bag).forEach(id => { if (!byId[id] || !(bag[id] > 0)) delete bag[id]; });

function renderTabs() {
  $('#tabs').innerHTML = CATEGORIES.map(([cat, label], i) => {
    const n = cat === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.cat === cat).length;
    return `<button role="tab" aria-selected="${i === 0}" data-cat="${cat}">${label}<span>${n}</span></button>`;
  }).join('');
}

function renderGrid(cat) {
  grid.innerHTML = PRODUCTS.filter(p => cat === 'all' || p.cat === cat).map((p, i) => `
    <article class="card" style="--d:${Math.min(i, 12) * 0.04}s">
      <div class="art" style="--tint:${TINT[p.cat]}"><img src="${photo(p)}" alt="${p.name}" width="640" height="640" loading="lazy"></div>
      <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="buy"><span class="price">${rupiah(p.price)}</span><button class="add" data-id="${p.id}">Add to bag</button></div>
    </article>`).join('');
}

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
  if (reduceMotion || !fromEl) return Promise.resolve();
  const a = fromEl.getBoundingClientRect(), b = bagBtn.getBoundingClientRect();
  const size = Math.min(a.width, 140);
  const fly = document.createElement('div');
  fly.className = 'flyer';
  fly.innerHTML = `<img src="${photo(p)}" alt="">`;
  Object.assign(fly.style, { width: size + 'px', height: size + 'px', left: a.left + (a.width - size) / 2 + 'px', top: a.top + (a.height - size) / 2 + 'px' });
  document.body.append(fly);
  const dx = b.left + b.width / 2 - (a.left + a.width / 2);
  const dy = b.top + b.height / 2 - (a.top + a.height / 2);
  // Arc: rise first, then glide into the bag while shrinking.
  const anim = fly.animate([
    { transform: 'translate(0,0) scale(1) rotate(0)', opacity: 1 },
    { transform: `translate(${dx * 0.35}px, ${dy * 0.35 - 90}px) scale(.7) rotate(-10deg)`, opacity: 1, offset: 0.4 },
    { transform: `translate(${dx}px, ${dy}px) scale(.12) rotate(8deg)`, opacity: 0.4 },
  ], { duration: 950, easing: 'cubic-bezier(.45,0,.2,1)' });
  // Don't let a throttled animation (background tab, power saving) hold up the bag update.
  return Promise.race([anim.finished, new Promise(r => setTimeout(r, 1100))]).then(() => fly.remove());
}

/** Add one of a product; `fromEl` is where the flying thumbnail starts. Used by the grid and by chat cards. */
export async function addToBag(id, fromEl) {
  const p = byId[id];
  if (!p) return;
  await flyToBag(fromEl, p);
  bag = { ...bag, [id]: (bag[id] || 0) + 1 };
  renderBag();
  bagBtn.classList.remove('bump'); countEl.classList.remove('pop');
  void bagBtn.offsetWidth;   // restart the CSS animations
  bagBtn.classList.add('bump'); countEl.classList.add('pop');
}

export const bagIsOpen = () => drawer.classList.contains('open');
export function setBag(open) {
  drawer.classList.toggle('open', open);
  drawer.setAttribute('aria-hidden', String(!open));
  if (open) { scrim.hidden = false; requestAnimationFrame(() => scrim.classList.add('open')); $('#closeBag').focus(); }
  else { scrim.classList.remove('open'); setTimeout(() => { scrim.hidden = true; }, 500); bagBtn.focus(); }
}

export function initShop() {
  renderTabs();
  renderGrid('all');
  renderBag();
  $('#tabs').addEventListener('click', e => {
    const tab = e.target.closest('button');
    if (!tab) return;
    $$('#tabs button').forEach(t => t.setAttribute('aria-selected', String(t === tab)));
    renderGrid(tab.dataset.cat);
  });
  grid.addEventListener('click', e => {
    const btn = e.target.closest('.add');
    if (!btn) return;
    btn.classList.add('done');
    btn.textContent = 'Added ✓';
    setTimeout(() => { btn.classList.remove('done'); btn.textContent = 'Add to bag'; }, 1600);
    addToBag(btn.dataset.id, btn.closest('.card').querySelector('.art'));
  });
  $('#bagList').addEventListener('click', e => {
    const { inc, dec } = e.target.dataset;
    if (!inc && !dec) return;
    const next = { ...bag };
    if (inc) next[inc] += 1;
    if (dec && --next[dec] <= 0) delete next[dec];
    bag = next;
    renderBag();
  });
  bagBtn.addEventListener('click', () => setBag(true));
  $('#closeBag').addEventListener('click', () => setBag(false));
  scrim.addEventListener('click', () => setBag(false));
  $('#checkout').addEventListener('click', () => toast('Prototype: checkout and delivery scheduling arrive in the next build.'));
}
