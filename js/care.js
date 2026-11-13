/* Consultation booking, the nutritionist chat and a mock call screen.
   Front-end prototype: replies come from bot.js and the call has no audio or backend.
   Before a session is booked the chat is answered by the care desk; afterwards by the assigned nutritionist. */
import { $, $$, store, rupiah, reduceMotion, toast } from './util.js';
import { EXPERTS, BY_CONCERN, DEFAULT_EXPERT, DESK, byId, photo } from './data.js';
import { createBot } from './bot.js';
import { addToBag } from './shop.js';

const MAX_MESSAGE = 500;
const MAX_HISTORY = 80;
const TYPING_MS = { base: 700, perChar: 9, max: 2400 };
const RING_MS = 3200;
const START_CHIPS = ['How much should I feed?', 'What treats are safe?', 'My pet has itchy skin', 'What does it cost?'];

const care = $('#care'), chat = $('#chat'), call = $('#call'), chatBtn = $('#chatBtn');
const chatLog = $('#chatLog'), chatForm = $('#chatForm'), chatInput = $('#chatMessage'), quick = $('#quick');
const form = $('#bookForm');
let hooks = { openSheet() {} };
let booking = store.get('faunora-booking', null);
if (booking && (!Object.hasOwn(EXPERTS, booking.expert) || booking.expert === DESK)) booking = null;   // stale or tampered storage
let bot;

const persona = () => (booking ? booking.expert : DESK);
const historyKey = () => `faunora-chat-${persona()}`;

function assignExpert(chosen, concern) {
  if (Object.hasOwn(EXPERTS, chosen) && chosen !== DESK) return chosen;
  return BY_CONCERN[concern] || DEFAULT_EXPERT;
}

function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return isNaN(d) ? iso : d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
}

function fillExpert(root, name) {
  const e = EXPERTS[name];
  $$('[data-care-name]', root).forEach(el => { el.textContent = name; });
  $$('[data-care-first]', root).forEach(el => { el.textContent = e.first; });
  $$('[data-care-role]', root).forEach(el => { el.textContent = e.role; });
  $$('[data-care-photo]', root).forEach(img => { img.src = e.photo; img.alt = name === DESK ? '' : `Portrait of ${name}`; });
}

/* ---------- Chat history ---------- */
function history(key = historyKey()) {
  const h = store.get(key, []);
  return Array.isArray(h) ? h.filter(m => m && typeof m.text === 'string') : [];
}
const saveHistory = (msgs, key = historyKey()) => store.set(key, msgs.slice(-MAX_HISTORY));

function greeting() {
  if (!booking) {
    return `Hi! This is the Faunora care desk. Ask me anything about feeding your dog or cat: portions, safe foods, treats or switching diets. When you are ready, I can help you book a session with a nutritionist.`;
  }
  const first = EXPERTS[booking.expert].first;
  return `Hi! I'm ${first}, ${booking.pet}'s nutritionist. Thanks for booking. Tell me a little about ${booking.pet}'s current food and routine, and ask me anything before our session.`;
}

// Every conversation opens with a greeting, and the bot re-reads what the owner already said so it
// still knows the pet's weight and age after a page reload.
function startConversation() {
  bot = createBot(booking
    ? { pet: booking.pet, species: booking.species, concern: booking.concern, personaName: booking.expert, booked: true }
    : { personaName: 'a Faunora nutritionist' });
  const past = history();
  if (!past.length) saveHistory([{ from: 'them', at: Date.now(), text: greeting() }]);
  past.filter(m => m.from === 'me').forEach(m => bot.reply(m.text));
}

/* ---------- Booking card ---------- */
function showCare() {
  form.hidden = !!booking;
  care.hidden = !booking;
  fillExpert(chatBtn, persona());
  chatBtn.setAttribute('aria-label', booking ? `Chat with ${EXPERTS[booking.expert].first}` : 'Chat with the Faunora care desk');
  chatBtn.classList.toggle('has-expert', !!booking);
  $('#chatCall').hidden = !booking;
  if (!booking) return;
  fillExpert(care, booking.expert);
  $('#careMeta').textContent = `${booking.pet} · ${booking.species} · ${booking.concern} · ${formatDate(booking.date)}`;
}

function resetBooking() {
  clearTimeout(typingTimer);
  $('#typing').hidden = true;
  if (!chat.hidden) setChat(false);
  booking = null;
  store.set('faunora-booking', null);
  startConversation();
  showCare();
}

/* ---------- Chat ---------- */
function productCard(id) {
  const p = byId[id];
  const card = document.createElement('div');
  card.className = 'msg-product';
  card.innerHTML = `<img src="${photo(p)}" alt="" width="56" height="56"><div><strong>${p.name}</strong><span>${rupiah(p.price)}</span></div>`;
  const add = document.createElement('button');
  add.type = 'button';
  add.textContent = 'Add to bag';
  add.addEventListener('click', () => {
    add.textContent = 'Added ✓';
    add.disabled = true;
    addToBag(id, card.querySelector('img'));
  });
  card.append(add);
  return card;
}

function bubble(msg) {
  const li = document.createElement('li');
  li.className = `msg ${msg.from === 'me' ? 'me' : 'them'}`;
  const p = document.createElement('p');
  p.textContent = msg.text;                 // textContent: owner text is never parsed as HTML
  li.append(p);
  if (msg.product && byId[msg.product]) li.append(productCard(msg.product));
  if (msg.action === 'book') {
    const go = document.createElement('button');
    go.type = 'button';
    go.className = 'msg-action';
    go.textContent = 'Open the booking form →';
    go.addEventListener('click', () => { setChat(false); hooks.openSheet('consult'); });
    li.append(go);
  }
  const time = document.createElement('time');
  time.textContent = new Date(msg.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  li.append(time);
  return li;
}

function renderChips(chips) {
  quick.replaceChildren(...chips.map(text => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = text;
    return b;
  }));
}

function renderChat() {
  chatLog.replaceChildren(...history().map(bubble));
  chatLog.scrollTop = chatLog.scrollHeight;
}
// Append only the new message so screen readers announce just that one.
function addBubble(msg) {
  chatLog.append(bubble(msg));
  chatLog.scrollTop = chatLog.scrollHeight;
}

let chatOpener = null;
export const chatIsOpen = () => !chat.hidden;
export function setChat(open) {
  chat.hidden = !open;
  chatBtn.classList.toggle('is-open', open);
  requestAnimationFrame(() => chat.classList.toggle('open', open));
  if (open) {
    chatOpener = document.activeElement;
    fillExpert(chat, persona());
    $('#chatStatus').textContent = booking ? 'Online · usually replies in minutes' : 'Online · ask before you book';
    renderChat();
    if (!quick.children.length) renderChips(START_CHIPS);
    chatInput.focus({ preventScroll: true });
    return;
  }
  const back = chatOpener && chatOpener.isConnected && chatOpener !== document.body ? chatOpener : chatBtn;
  back.focus({ preventScroll: true });
}

let typingTimer;
function send(text) {
  const clean = String(text).trim().slice(0, MAX_MESSAGE);
  if (!clean) return;
  const key = historyKey();   // the reply must land in this thread even if the booking changes meanwhile
  const mine = { from: 'me', text: clean, at: Date.now() };
  saveHistory([...history(key), mine], key);
  addBubble(mine);
  const answer = bot.reply(clean);
  const typing = $('#typing');
  typing.hidden = false;
  clearTimeout(typingTimer);
  const delay = reduceMotion ? 0 : Math.min(TYPING_MS.max, TYPING_MS.base + answer.text.length * TYPING_MS.perChar);
  typingTimer = setTimeout(() => {
    typing.hidden = true;
    const reply = { from: 'them', text: answer.text, at: Date.now(), product: answer.product, action: answer.action };
    saveHistory([...history(key), reply], key);
    if (key !== historyKey() || chat.hidden) return;
    addBubble(reply);
    renderChips(answer.chips);
  }, delay);
}

/* ---------- Mock call (no audio, no backend) ---------- */
let callTimer, ringTimer, callStart = null, callOpener = null;
const callStatus = $('#callStatus'), callTime = $('#callTime');
const clock = sec => `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}`;

function startCall() {
  if (!booking || !call.hidden) return;
  fillExpert(call, booking.expert);
  call.hidden = false;
  call.classList.remove('connected', 'ended');
  requestAnimationFrame(() => call.classList.add('open'));
  $$('.call-toggle', call).forEach(b => b.setAttribute('aria-pressed', 'false'));
  callStatus.textContent = 'Calling…';
  callTime.textContent = '';
  callOpener = document.activeElement;
  $('#endCall').focus();
  ringTimer = setTimeout(() => {
    call.classList.add('connected');
    callStart = Date.now();
    callStatus.textContent = 'Connected';
    callTime.textContent = '· 00:00';
    callTimer = setInterval(() => {
      callTime.textContent = `· ${clock(Math.floor((Date.now() - callStart) / 1000))}`;
    }, 1000);
  }, RING_MS);
}

export const callIsOpen = () => !call.hidden;
export function endCall() {
  if (call.hidden || call.classList.contains('ended')) return;
  clearTimeout(ringTimer);
  clearInterval(callTimer);
  const dur = callStart ? clock(Math.floor((Date.now() - callStart) / 1000)) : null;
  callStart = null;
  call.classList.add('ended');
  callStatus.textContent = dur ? 'Call ended' : 'Call cancelled';
  callTime.textContent = dur ? `· ${dur}` : '';
  setTimeout(() => {
    call.classList.remove('open');
    setTimeout(() => {
      call.hidden = true;
      if (callOpener && callOpener.isConnected) callOpener.focus();
    }, 400);
  }, 1100);
}

/** `openSheet(id)` lets chat messages send the visitor to the booking form. */
export function initCare(appHooks) {
  hooks = appHooks;
  form.date.min = new Date().toISOString().slice(0, 10);

  // "Book with X" preselects that nutritionist; if a session exists, start a fresh request first.
  $$('[data-expert]').forEach(btn => btn.addEventListener('click', () => {
    if (booking) resetBooking();
    $('#expertSel').value = btn.dataset.expert;
    form.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    form.classList.remove('flash'); void form.offsetWidth; form.classList.add('flash');
    setTimeout(() => form.pet.focus({ preventScroll: true }), 600);
  }));

  form.addEventListener('submit', e => {
    e.preventDefault();
    const pet = form.pet.value.trim();
    if (!pet) return form.pet.focus();
    booking = {
      pet: pet.slice(0, 40), species: form.species.value, date: form.date.value, concern: form.concern.value,
      expert: assignExpert(form.expert.value, form.concern.value),
    };
    store.set('faunora-booking', booking);
    form.reset();
    quick.replaceChildren();
    startConversation();
    showCare();
    care.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    toast(`You're booked with ${EXPERTS[booking.expert].first}. You can message or call anytime.`);
  });

  $('#newBooking').addEventListener('click', () => { resetBooking(); form.pet.focus(); });
  chatForm.addEventListener('submit', e => { e.preventDefault(); send(chatInput.value); chatInput.value = ''; });
  quick.addEventListener('click', e => { if (e.target.closest('button')) send(e.target.closest('button').textContent); });
  $('#openChat').addEventListener('click', () => setChat(true));
  chatBtn.addEventListener('click', () => setChat(chat.hidden));
  $('#closeChat').addEventListener('click', () => setChat(false));
  $$('.call-toggle', call).forEach(b => b.addEventListener('click', () => {
    b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
  }));
  $('#startCall').addEventListener('click', startCall);
  $('#chatCall').addEventListener('click', startCall);
  $('#endCall').addEventListener('click', endCall);

  startConversation();
  showCare();
}
