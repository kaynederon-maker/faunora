// Self-check for the simulated nutritionist. Run: node js/bot.test.mjs
import assert from 'node:assert/strict';
import { createBot, dailyCalories } from './bot.js';

const bot = () => createBot({ pet: 'Mochi', species: 'Dog', concern: 'Just want a healthier diet', booked: true });
const said = (b, text) => b.reply(text);

// Feeding maths: 10 kg neutered adult dog -> RER 394, x1.6 = 630 kcal.
assert.deepEqual(dailyCalories({ kg: 10, species: 'Dog', stage: 'adult' }), { rer: 394, factor: 1.6, kcal: 630 });
assert.equal(dailyCalories({ kg: 4, species: 'Cat', stage: 'adult', goal: 'loss' }).factor, 0.8);

// Asks for the weight, then answers from a bare number.
let b = bot();
let r = said(b, 'How much should I feed?');
assert.equal(r.intent, 'portion');
assert.match(r.text, /How much does Mochi weigh/);
r = said(b, 'about 12');
assert.equal(b.state.kg, 12);
assert.match(r.text, /kcal a day/);
assert.ok(r.product, 'portion answers suggest a meal');

// Weight given up front, in pounds and with a comma decimal.
assert.equal(said(bot(), 'She is 22 lbs, how much food?').intent, 'portion');
b = bot(); said(b, 'dia 4,5 kg'); assert.equal(b.state.kg, 4.5);

// Food safety, including Indonesian and "already ate it".
assert.match(said(bot(), 'Can my dog eat chocolate?').text, /^No, please keep chocolate away/);
assert.match(said(bot(), 'boleh makan anggur?').text, /grapes and raisins/);
assert.match(said(bot(), 'Is pumpkin okay?').text, /^Yes, pumpkin is fine/);
assert.equal(said(bot(), 'My dog ate onion from the table').intent, 'ate-toxic');
assert.match(said(bot(), 'can he have cheese').text, /^Only with care/);
// A food word alone must not hijack a symptom report.
assert.equal(said(bot(), 'He gets itchy after eating fish').intent, 'allergy');

// Emergencies win over everything else.
assert.equal(said(bot(), 'he had a seizure after his treats').intent, 'emergency');
assert.equal(said(bot(), 'there is blood in her stool').intent, 'emergency');

// Species and life stage are remembered and change the advice.
b = createBot({ pet: 'Luna' });
said(b, 'Luna is a 13 year old cat');
assert.equal(b.state.species, 'Cat');
assert.equal(b.state.stage, 'senior');
assert.equal(said(b, 'which meal do you recommend?').product, 'm4');

// Follow-ups use the last topic: itchy dog -> hypoallergenic biscuits.
b = bot(); said(b, 'Mochi keeps scratching');
assert.equal(said(b, 'Which meal do you suggest?').product, 's1');

// Every suggestion chip leads somewhere real, never to the fallback.
const chips = new Set();
for (const opener of ['hello', 'How much should I feed?', 'About 12 kg', 'treats?', 'itchy skin', 'diarrhea', 'not eating', 'senior dog', 'chocolate ate', 'seizure', 'price', 'switch food', 'water', 'raw diet', 'supplements', 'teeth', 'storage', 'delivery', 'book', 'bored', 'overweight', 'begging']) {
  const one = bot();
  said(one, opener).chips.forEach(c => chips.add(c));
}
for (const chip of chips) assert.notEqual(said(bot(), chip).intent, 'fallback', `chip "${chip}" fell through`);

// Unknown input falls back politely and rotates its wording.
b = bot();
const first = said(b, 'asdf qwerty'), second = said(b, 'zxcv');
assert.equal(first.intent, 'fallback');
assert.notEqual(first.text, second.text);

// Calls need a booking; pricing questions are not mistaken for portions.
assert.equal(said(createBot({}), 'can I call you?').action, 'book');
assert.equal(said(bot(), 'How much is a session?').intent, 'price');
assert.match(said(bot(), 'halo, berapa kali sehari makan?').text, /Bahasa Indonesia/);

console.log(`bot.test: all checks passed (${chips.size} chips verified)`);
