/* Post-consultation care: assigned nutritionist card, text chat and a mock call screen.
   Front-end prototype only: replies are simulated and the call has no audio or backend.
   Loaded after script.js and reuses its helpers ($, $$, store, toast, reduceMotion). */

const EXPERTS = {
  'drh. Bima Adiwangsa': { first: 'Bima', role: 'Feline diets & food allergies', photo: 'assets/img/expert-bima.webp' },
  'drh. Laras Pertiwi, M.Sc': { first: 'Laras', role: 'Clinical pet nutrition', photo: 'assets/img/expert-laras.webp' },
  'Nadia Halim, PgDip': { first: 'Nadia', role: 'Canine weight management', photo: 'assets/img/expert-nadia.webp' },
};
// "First available" goes to the specialist who matches the owner's main concern.
const BY_CONCERN = {
  'Weight management': 'Nadia Halim, PgDip',
  'Food allergy / sensitive stomach': 'drh. Bima Adiwangsa',
  'Senior pet': 'drh. Laras Pertiwi, M.Sc',
  'Recovery after illness': 'drh. Laras Pertiwi, M.Sc',
};
const DEFAULT_EXPERT = 'drh. Laras Pertiwi, M.Sc';
const MAX_MESSAGE = 500;
const TYPING_MS = [900, 1800];
const RING_MS = 3200;

const care = $('#care'), chat = $('#chat'), call = $('#call');
const chatLog = $('#chatLog'), chatForm = $('#chatForm'), chatInput = chatForm.message;
let booking = store.get('faunora-booking', null);
if (booking && !Object.hasOwn(EXPERTS, booking.expert)) booking = null;   // ignore stale or tampered storage

function assignExpert(chosen, concern) {
  if (Object.hasOwn(EXPERTS, chosen)) return chosen;
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
  $$('[data-care-photo]', root).forEach(img => { img.src = e.photo; img.alt = `Portrait of ${name}`; });
}

/* ---------- Booking confirmation card ---------- */
function showCare() {
  $('#bookForm').hidden = !!booking;
  care.hidden = !booking;
  if (!booking) return;
  fillExpert(care, booking.expert);
  $('#careMeta').textContent = `${booking.pet} · ${booking.species} · ${booking.concern} · ${formatDate(booking.date)}`;
}

addEventListener('faunora:booked', e => {
  const b = e.detail;
  booking = { ...b, expert: assignExpert(b.expert, b.concern) };
  store.set('faunora-booking', booking);
  ensureGreeting();
  showCare();
  care.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
  toast(`You're booked with ${EXPERTS[booking.expert].first}. You can message or call anytime.`);
});

function resetBooking() {
  clearTimeout(typingTimer);
  $('#typing').hidden = true;
  if (!chat.hidden) setChat(false);
  booking = null;
  store.set('faunora-booking', null);
  showCare();
}
$('#newBooking').addEventListener('click', () => { resetBooking(); $('#bookForm').pet.focus(); });
// "Book with X" on the experts section must reopen the form first (capture runs before script.js's handler).
$$('[data-expert]').forEach(btn => btn.addEventListener('click', () => { if (booking) resetBooking(); }, true));

/* ---------- Chat ---------- */
const historyKey = () => `faunora-chat-${booking ? booking.expert : 'none'}`;
const history = (key = historyKey()) => {
  const h = store.get(key, []);
  return Array.isArray(h) ? h.filter(m => m && typeof m.text === 'string') : [];
};
const saveHistory = (msgs, key = historyKey()) => store.set(key, msgs);

// Every conversation opens with the nutritionist introducing themself.
function ensureGreeting() {
  if (!booking || history().length) return;
  const first = EXPERTS[booking.expert].first;
  saveHistory([{ from: 'them', at: Date.now(),
    text: `Hi! I'm ${first}, ${booking.pet}'s nutritionist. Thanks for booking. Tell me a little about ${booking.pet}'s current food and routine, and ask me anything before our session.` }]);
}

function bubble(msg) {
  const li = document.createElement('li');
  li.className = `msg ${msg.from === 'me' ? 'me' : 'them'}`;
  const p = document.createElement('p');
  p.textContent = msg.text;                 // textContent: user text is never parsed as HTML
  const time = document.createElement('time');
  time.textContent = new Date(msg.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  li.append(p, time);
  return li;
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

function setChat(open) {
  if (open && !booking) return;
  chat.hidden = !open;
  requestAnimationFrame(() => chat.classList.toggle('open', open));
  if (open) { ensureGreeting(); fillExpert(chat, booking.expert); renderChat(); chatInput.focus(); }
  else $('#openChat').focus();
}

// Simulated nutritionist replies, matched on a few keywords from the owner's message.
const REPLIES = [
  [/allerg|itch|scratch|rash|sensitive/i, p => `Itching and tummy trouble are often food-related. Until our session, keep ${p} on one protein and no new treats, and note any reactions. I'll plan an elimination diet with you.`],
  [/weight|fat|heavy|overweight|diet/i, p => `Gradual weight loss works best. Please weigh ${p} this week if you can. I'll calculate the right daily calories and our kitchen will portion every meal to match.`],
  [/portion|how much|gram|feed|meal/i, p => `Portions depend on ${p}'s weight, age and activity. After our session you'll get a plan with exact grams per meal, and our meals arrive already portioned.`],
  [/treat|snack|biscuit/i, p => `Treats should stay under 10% of ${p}'s daily calories. Our pumpkin biscuits and single-protein treats are good choices; I'll tell you how many fit the plan.`],
  [/price|cost|pay|rp\b|plan/i, () => `A single session is Rp 149.000. Monthly Care is Rp 399.000 with two follow-ups and 10% off every meal plan.`],
  [/call|phone|talk|video/i, () => `Happy to talk. Tap the phone icon at the top of this chat to call me.`],
  [/thank|terima kasih/i, p => `You're very welcome. Give ${p} a scratch behind the ears from me!`],
];
const fallbackReply = p => `Thanks, that helps. I've added it to ${p}'s notes and we'll go through it together in our session.`;

function replyTo(text) {
  const pet = booking ? booking.pet : 'your pet';
  const hit = REPLIES.find(([re]) => re.test(text));
  return hit ? hit[1](pet) : fallbackReply(pet);
}

let typingTimer;
function send(text) {
  const clean = String(text).trim().slice(0, MAX_MESSAGE);
  if (!clean || !booking) return;
  const key = historyKey();   // the reply below must land in this thread even if the booking changes
  const mine = { from: 'me', text: clean, at: Date.now() };
  saveHistory([...history(key), mine], key);
  addBubble(mine);
  const typing = $('#typing');
  typing.hidden = false;
  clearTimeout(typingTimer);
  const delay = TYPING_MS[0] + Math.random() * (TYPING_MS[1] - TYPING_MS[0]);
  typingTimer = setTimeout(() => {
    typing.hidden = true;
    const reply = { from: 'them', text: replyTo(clean), at: Date.now() };
    saveHistory([...history(key), reply], key);
    if (key === historyKey() && !chat.hidden) addBubble(reply);
  }, delay);
}

chatForm.addEventListener('submit', e => {
  e.preventDefault();
  send(chatInput.value);
  chatInput.value = '';
});
$$('[data-quick]', chat).forEach(btn => btn.addEventListener('click', () => send(btn.textContent)));
$('#openChat').addEventListener('click', () => setChat(true));
$('#closeChat').addEventListener('click', () => setChat(false));

/* ---------- Mock call (no audio, no backend) ---------- */
let callTimer, ringTimer, callStart = null, callOpener = null;
const callStatus = $('#callStatus'), callTime = $('#callTime');

function fmt(sec) {
  return `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}`;
}

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
      callTime.textContent = `· ${fmt(Math.floor((Date.now() - callStart) / 1000))}`;
    }, 1000);
  }, RING_MS);
}

function endCall() {
  if (call.hidden || call.classList.contains('ended')) return;
  clearTimeout(ringTimer);
  clearInterval(callTimer);
  const dur = callStart ? fmt(Math.floor((Date.now() - callStart) / 1000)) : null;
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

$$('.call-toggle', call).forEach(b => b.addEventListener('click', () => {
  b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
}));
$('#startCall').addEventListener('click', startCall);
$('#chatCall').addEventListener('click', startCall);
$('#endCall').addEventListener('click', endCall);

addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (!call.hidden) endCall();
  else if (!chat.hidden) setChat(false);
});

showCare();
