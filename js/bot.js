/* Simulated nutritionist. No network and no model: keyword intents, a few remembered facts about the pet,
   and real feeding maths (resting energy = 70 x kg^0.75). Understands English and common Indonesian words,
   answers in English. Pure functions, so `node js/bot.test.mjs` can check it. */

const KCAL_PER_GRAM = 1.3;      // average for Faunora's fresh-cooked meals
const TREAT_SHARE = 0.1;        // treats stay under 10% of daily calories
const WEIGHT_RANGE = [0.3, 90]; // kg; anything outside is treated as a typo

// Energy multipliers on resting energy (standard clinical starting points).
const FACTOR = {
  Dog: { young: 2.5, adult: 1.6, senior: 1.4, loss: 1.0 },
  Cat: { young: 2.5, adult: 1.2, senior: 1.1, loss: 0.8 },
};

const FOODS = [
  { keys: ['chocolate', 'cokelat', 'coklat', 'cocoa'], name: 'chocolate', verdict: 'toxic', note: 'It contains theobromine, which dogs and cats cannot break down; dark chocolate is the most dangerous.' },
  { keys: ['grape', 'raisin', 'anggur', 'kismis'], name: 'grapes and raisins', verdict: 'toxic', note: 'Even a few can cause sudden kidney failure.' },
  { keys: ['onion', 'bawang', 'garlic', 'leek', 'chive'], name: 'onion and garlic', verdict: 'toxic', note: 'They damage red blood cells, cooked or raw, and the effect builds up over days.' },
  { keys: ['xylitol', 'sugar-free', 'sugar free', 'permen karet', 'chewing gum'], name: 'xylitol (sugar-free sweetener)', verdict: 'toxic', note: 'It drops blood sugar within minutes and can damage the liver.' },
  { keys: ['macadamia'], name: 'macadamia nuts', verdict: 'toxic', note: 'They cause weakness, tremors and vomiting in dogs.' },
  { keys: ['alcohol', 'alkohol', 'beer', 'wine', ' bir '], name: 'alcohol', verdict: 'toxic', note: 'Pets are far more sensitive to it than people.' },
  { keys: ['coffee', 'kopi', 'caffeine', 'kafein', ' tea ', ' teh '], name: 'coffee and tea', verdict: 'toxic', note: 'Caffeine over-stimulates the heart and nervous system.' },
  { keys: ['cooked bone', 'chicken bone', 'tulang'], name: 'cooked bones', verdict: 'toxic', note: 'They splinter and can pierce the gut or block it.' },
  { keys: ['avocado', 'alpukat'], name: 'avocado', verdict: 'caution', note: 'The flesh is fatty and can upset the stomach, and the pit is a choking risk. Best skipped.' },
  { keys: ['milk', 'susu', 'cheese', 'keju', 'yoghurt', 'yogurt', 'dairy', 'ice cream', 'es krim'], name: 'dairy', verdict: 'caution', note: 'Most adult dogs and cats are lactose intolerant. A teaspoon of plain yoghurt is usually fine; a bowl of milk often means diarrhoea.' },
  { keys: ['tuna'], name: 'tuna', verdict: 'caution', note: 'Fine as an occasional meal in water, not brine. Every day it is too high in mercury and too low in other nutrients, especially for cats.' },
  { keys: ['liver', 'hati ayam', 'hati sapi'], name: 'liver', verdict: 'caution', note: 'Very nutritious but rich in vitamin A: keep it under 5% of the diet.' },
  { keys: ['raw egg', 'telur mentah'], name: 'raw egg', verdict: 'caution', note: 'Cook it instead: raw egg carries salmonella and blocks biotin absorption.' },
  { keys: ['bread', 'roti', 'noodle', ' mie '], name: 'bread and noodles', verdict: 'caution', note: 'Not harmful plain, but mostly empty calories and often salty.' },
  { keys: ['peanut butter', 'selai kacang'], name: 'peanut butter', verdict: 'caution', note: 'Only a xylitol-free one, and only a lick: it is calorie-dense.' },
  { keys: ['durian'], name: 'durian', verdict: 'caution', note: 'A small piece of flesh is not toxic, but it is very sugary and the seeds are dangerous if swallowed.' },
  { keys: ['egg', 'telur'], name: 'cooked egg', verdict: 'safe', note: 'boiled or scrambled without oil or salt' },
  { keys: ['rice', 'nasi'], name: 'plain rice', verdict: 'safe', note: 'cooked soft, as a small part of the meal' },
  { keys: ['carrot', 'wortel'], name: 'carrot', verdict: 'safe', note: 'raw as a crunchy chew or steamed' },
  { keys: ['pumpkin', 'labu'], name: 'pumpkin', verdict: 'safe', note: 'steamed and plain; a spoonful also helps firm up loose stools' },
  { keys: ['sweet potato', ' ubi '], name: 'sweet potato', verdict: 'safe', note: 'cooked and plain' },
  { keys: ['banana', 'pisang'], name: 'banana', verdict: 'safe', note: 'a few slices; it is sugary' },
  { keys: ['apple', 'apel'], name: 'apple', verdict: 'safe', note: 'sliced, with the seeds and core removed' },
  { keys: ['watermelon', 'semangka'], name: 'watermelon', verdict: 'safe', note: 'seedless and without the rind' },
  { keys: ['papaya', 'pepaya', 'mango', 'mangga'], name: 'papaya and mango', verdict: 'safe', note: 'peeled, with no seed or pit, in small pieces' },
  { keys: ['chicken', 'ayam'], name: 'cooked chicken', verdict: 'safe', note: 'boneless, skinless and unseasoned' },
  { keys: ['salmon', 'fish', 'ikan'], name: 'cooked fish', verdict: 'safe', note: 'fully cooked and deboned' },
  { keys: ['tofu', 'tahu', 'tempe'], name: 'tofu and tempeh', verdict: 'safe', note: 'plain and steamed, as an occasional extra rather than the main protein' },
  { keys: ['broccoli', 'brokoli', 'spinach', 'bayam', 'green bean', 'buncis'], name: 'green vegetables', verdict: 'safe', note: 'steamed and chopped small' },
];

const round = (n, step = 5) => Math.round(n / step) * step;
const num = s => parseFloat(s.replace(',', '.'));

export function dailyCalories({ kg, species = 'Dog', stage = 'adult', goal }) {
  const rer = 70 * Math.pow(kg, 0.75);
  const factor = FACTOR[species][goal === 'loss' ? 'loss' : stage];
  return { rer: Math.round(rer), factor, kcal: round(rer * factor) };
}

function readFacts(text, state) {
  const t = text.toLowerCase();
  const learned = {};
  const kg = t.match(/(\d+(?:[.,]\d+)?)\s*(kg|kgs|kilo|kilos|kilogram|kilograms)\b/);
  const lb = t.match(/(\d+(?:[.,]\d+)?)\s*(lb|lbs|pound|pounds)\b/);
  const bare = state.pending === 'weight' && t.match(/^\D*(\d+(?:[.,]\d+)?)\D*$/);
  const raw = kg ? num(kg[1]) : lb ? num(lb[1]) * 0.4536 : bare ? num(bare[1]) : null;
  if (raw !== null && raw >= WEIGHT_RANGE[0] && raw <= WEIGHT_RANGE[1]) learned.kg = Math.round(raw * 10) / 10;

  if (/\b(dog|dogs|doggo|puppy|puppies|anjing)\b/.test(t)) learned.species = 'Dog';
  else if (/\b(cat|cats|kitten|kittens|kitty|kucing)\b/.test(t)) learned.species = 'Cat';

  const years = t.match(/(\d+(?:[.,]\d+)?)\s*(years?|yrs?|yo|y\/o|tahun|thn)\b/);
  const months = t.match(/(\d+)\s*(months?|mos?|bulan|bln)\b/);
  const species = learned.species || state.species;
  if (months && !years) learned.stage = Number(months[1]) < 12 ? 'young' : 'adult';
  else if (years) {
    const y = num(years[1]);
    learned.stage = y < 1 ? 'young' : y >= (species === 'Cat' ? 11 : 8) ? 'senior' : 'adult';
  } else if (/\b(puppy|kitten|anak anjing|anak kucing)\b/.test(t)) learned.stage = 'young';
  else if (/\b(senior|elderly|old dog|old cat|getting old|sudah tua)\b/.test(t)) learned.stage = 'senior';
  return learned;
}

function findFood(text) {
  const t = ` ${text.toLowerCase().replace(/[?!.,]/g, ' ')} `;
  return FOODS.find(f => f.keys.some(k => t.includes(k)));
}

/** Which Faunora product fits a situation. Ids match the shop data in data.js. */
function pick(state, topic) {
  const dog = state.species !== 'Cat';
  const table = {
    weight: dog ? 'm3' : 'm2', senior: dog ? 'm7' : 'm4', young: dog ? 'm5' : 'm6', sensitive: dog ? 'm7' : 'm6',
    allergy: dog ? 's1' : 'm2', hydration: dog ? 'm5' : 'm8', treats: dog ? 's1' : 's5', skin: 's4', gut: dog ? 's6' : 'm6',
    picky: 's2', bored: dog ? 't6' : 't5', general: dog ? 'm1' : 'm2',
  };
  return table[topic] || table.general;
}

function portionReply(state) {
  const { pet, kg, species } = state;
  const goal = state.lastTopic === 'weight' || /weight/i.test(state.concern) ? 'loss' : undefined;
  const { rer, kcal } = dailyCalories({ kg, species, stage: state.stage || 'adult', goal });
  const grams = round(kcal / KCAL_PER_GRAM, 10);
  const meals = state.stage === 'young' ? 3 : 2;
  const why = goal ? 'a gentle weight-loss target' : state.stage === 'young' ? 'a growing youngster' : state.stage === 'senior' ? 'a senior' : 'a neutered adult';
  return {
    topic: goal ? 'weight' : 'portion',
    text: `For ${pet} at ${kg} kg, resting energy is about ${rer} kcal a day. For ${why} that works out to roughly ${kcal} kcal a day.\n\n`
      + `In Faunora fresh meals (about ${KCAL_PER_GRAM} kcal per gram) that is around ${grams} g a day, split into ${meals} meals of ${round(grams / meals, 5)} g. `
      + `Treats can use up to ${round(kcal * TREAT_SHARE)} kcal of that.\n\nThis is a starting point: we weigh ${pet} every two weeks and adjust by 10% at a time.`,
    chips: ['Which meal do you suggest?', 'How many treats is that?', 'How do I switch foods?'],
    product: pick(state, goal ? 'weight' : state.stage === 'senior' ? 'senior' : state.stage === 'young' ? 'young' : 'general'),
  };
}

const askWeight = s => ({
  topic: 'portion', pending: 'weight',
  text: `Happy to work that out. How much does ${s.pet} weigh, in kg? A rough number is fine, or weigh yourself holding ${s.pet} and subtract.`,
  chips: ['About 5 kg', 'About 12 kg', 'About 25 kg'],
});

const isQuestionAboutFood = t => /\b(can|could|may|boleh|bisa|apakah|aman|safe|okay|ok to|allowed)\b/i.test(t)
  || (t.includes('?') && /\b(eat|makan|give|kasih|feed)\b/i.test(t));

/* Ordered by priority: the first matching intent answers. `re` matches the message; `test` is for intents
   that also depend on a recognised food. */
const INTENTS = [
  { id: 'emergency',
    re: /\b(seizure|kejang|collaps\w*|pingsan|can'?t breathe|cannot breathe|sesak|not breathing|blood in (the |his |her )?(vomit|stool|urine|poop)|muntah darah|berdarah|bloat|swollen belly|poison\w*|keracunan|unconscious|won'?t wake|hit by|tertabrak)\b/i,
    reply: s => ({ text: `This cannot wait for a diet plan. Please take ${s.pet} to your nearest vet or 24-hour clinic now, and call ahead so they are ready.\n\nIf ${s.pet} may have eaten something toxic, bring the packaging and note the time. I will be here afterwards to help with feeding during recovery.`, chips: ['Where is a 24-hour vet?', 'What can I feed after?'] }) },
  { id: 'ate-toxic',
    test: (t, s, food) => !!food && food.verdict === 'toxic' && /\b(ate|eaten|swallow\w*|memakan|termakan|licked|stole|got into)\b/i.test(t) && !isQuestionAboutFood(t),
    reply: (s, food) => ({ text: `${food.name[0].toUpperCase()}${food.name.slice(1)} is toxic for pets. ${food.note}\n\nPlease call your vet now and tell them roughly how much ${s.pet} ate, when, and ${s.pet}'s weight. Do not try to make ${s.pet} vomit unless the vet tells you to.`, chips: ['What signs should I watch for?', 'Where is a 24-hour vet?'] }) },
  { id: 'food-check',
    test: (t, s, food) => !!food && isQuestionAboutFood(t),
    reply: (s, food) => {
      if (food.verdict === 'toxic') return { text: `No, please keep ${food.name} away from ${s.pet}. ${food.note}\n\nIf ${s.pet} has already eaten some, call your vet right away and tell them how much and when.`, chips: ['What treats are safe?', 'Which fruits are okay?'] };
      if (food.verdict === 'caution') return { text: `Only with care. ${food.note}`, chips: ['What treats are safe?', 'How many treats a day?'] };
      return { topic: 'treats', text: `Yes, ${food.name} is fine for ${s.pet}: ${food.note}. Introduce it in a small amount first and keep extras under ${TREAT_SHARE * 100}% of the day's calories.`, chips: ['How many treats a day?', 'How much should I feed?'] };
    } },
  { id: 'signs',
    re: /\b(signs?|symptoms?|gejala|watch for|look out for)\b/i,
    reply: s => ({ text: `Call the vet straight away if ${s.pet} shows any of these: repeated vomiting, tremors or wobbling, very pale or yellow gums, a racing heart, heavy drooling, a hard swollen belly, or unusual sleepiness. Some poisons, grapes for example, show nothing for a day while the damage is being done, so do not wait for signs if you know ${s.pet} ate something toxic.`, chips: ['Where is a 24-hour vet?'] }) },
  { id: 'vet',
    re: /\b(24.?hour|emergency vet|nearest vet|closest vet|klinik|clinic|dokter hewan|animal hospital)\b/i,
    reply: () => ({ text: `I cannot see your location in this prototype. Search "dokter hewan 24 jam" with your area in Google Maps and phone before you leave, because not every clinic has a vet on site overnight. Keep that number saved in your phone for next time.`, chips: ['What signs should I watch for?'] }) },
  { id: 'recovery',
    re: /\b(after (surgery|the surgery|illness|being sick|the vet|treatment)|recover\w*|pemulihan|feed after|habis sakit|post.?op)\b/i,
    reply: s => ({ topic: 'sensitive', text: `After an illness or surgery, follow the vet's instructions first. In general: small bland meals four times a day (boiled chicken with soft rice, or plain pumpkin), a third of the usual amount on day one, building back over three to four days. Appetite returning is the best sign.\n\nFor longer recoveries I write a plan with extra protein and calories together with your vet.`, chips: ['How do I switch foods?', 'Which meal do you suggest?'], product: pick(s, 'sensitive') }) },
  { id: 'price',
    re: /\b(price|prices|harga|cost|costs|biaya|how much (is|are|does|for)|berapa harga|bayar|rupiah|subscription|langganan|discount|diskon|promo|monthly care|single session)\b/i,
    reply: () => ({ text: `A single session is Rp 149.000: a 30-minute video call and a written diet plan. Monthly Care is Rp 399.000 and adds two follow-ups plus 10% off every meal plan.\n\nMeals start at Rp 32.000 a pack for cats and Rp 68.000 for dogs. Most owners on Monthly Care find the meal discount covers the difference.`, chips: ['Where do you deliver?', 'Which meal do you suggest?'] }) },
  { id: 'portion',
    re: /\b(how much|how many (grams?|cups?)|portions?|porsi|calories?|kalori|kcal|grams?|berapa (banyak|gram)|takaran|amount)\b/i,
    reply: s => (s.kg ? portionReply(s) : askWeight(s)) },
  { id: 'frequency',
    re: /\b(how often|how many times|times a day|kali sehari|berapa kali|meal times?|feeding schedule|jadwal makan|once a day|twice a day|free.?feed\w*)\b/i,
    reply: s => ({ topic: 'portion', text: `${s.stage === 'young' ? `While ${s.pet} is still growing, three to four small meals a day work best` : `Two meals a day, about 10 to 12 hours apart, suit most adult ${s.species === 'Cat' ? 'cats' : 'dogs'}`}. Fixed meal times beat a bowl left out all day: you notice appetite changes sooner and weight is easier to control.${s.species === 'Cat' ? ' Cats often do well with a small third meal late in the evening.' : ''}`, chips: ['How much should I feed?', 'My pet begs between meals'] }) },
  { id: 'begging',
    re: /\b(begs?|begging|minta makan|always hungry|hungry all|lapar terus|still hungry|steals? food)\b/i,
    reply: s => ({ topic: 'weight', text: `Begging is usually habit, not hunger. What helps: split the same daily amount into three meals, add volume with steamed green beans or pumpkin, feed from a snuffle mat or slow bowl so the meal lasts, and ask everyone at home to stop table scraps for two weeks. If ${s.pet} is truly ravenous and losing weight, that needs a vet check for worms, diabetes or thyroid trouble.`, chips: ['How much should I feed?', 'What treats are safe?'], product: pick(s, 'bored') }) },
  { id: 'weight',
    re: /\b(overweight|obes\w*|gemuk|gendut|fat|chubby|lose weight|weight loss|slim down|kurus|underweight|too thin|gain weight|berat badan)\b/i,
    reply: s => {
      if (/\b(kurus|underweight|too thin|gain weight)\b/i.test(s.lastText)) return { topic: 'general', text: `For a pet that needs to gain, we raise calories by 10 to 20% with an extra small meal rather than bigger ones, and choose denser food. First rule out worms, dental pain and thyroid or kidney trouble with your vet, because thinness is often a symptom.`, chips: ['How much should I feed?', 'Which meal do you suggest?'] };
      return { topic: 'weight', pending: s.kg ? undefined : 'weight', product: pick(s, 'weight'),
        text: `Slow is safe: aim for ${s.pet} to lose 1 to 2% of body weight a week${s.species === 'Cat' ? ', and never crash-diet a cat, because it can cause liver disease' : ''}. Three things do most of the work:\n\n1. Weigh the food on a kitchen scale instead of using a scoop.\n2. Count every treat inside the daily calories.\n3. Add low-calorie volume such as steamed green beans or pumpkin.\n\n${s.kg ? `At ${s.kg} kg I can give you a calorie target now.` : `Tell me ${s.pet}'s weight and I will work out a calorie target.`}`,
        chips: s.kg ? ['How much should I feed?', 'Which meal do you suggest?'] : ['About 5 kg', 'About 12 kg', 'About 25 kg'] };
    } },
  { id: 'timeline',
    re: /\b(how long (until|till|before|will it take)|when will (it|he|she)|improv\w*|kapan sembuh|berapa lama)\b/i,
    reply: s => ({ text: `It depends on what we are fixing. Stomach upsets usually settle within one to two weeks of a diet change. Skin and coat need six to eight weeks, because that is how long skin takes to renew. Weight changes safely at 1 to 2% a week. If ${s.pet} is no better by then, we change the plan rather than wait.`, chips: ['How do I switch foods?', 'Which meal do you suggest?'] }) },
  { id: 'allergy',
    re: /\b(allerg\w*|alergi|itch\w*|gatal|scratch\w*|garuk|rash|ruam|hot ?spots?|ear infections?|paw licking|licking (his|her|its) paws|hives)\b/i,
    reply: s => ({ topic: 'allergy', text: `Itchy skin, ear trouble and paw licking are the classic signs of a food reaction, though fleas and dust mites look the same, so ask your vet to rule those out.\n\nThe reliable test is an elimination diet: one new protein and one carbohydrate that ${s.pet} has never eaten, nothing else, for 8 weeks. No table scraps and no flavoured chews, or the trial has to start again. Beef, chicken and dairy are the most common culprits.\n\nUntil our session, keep a daily note of food, treats and itch level from 1 to 10.`, chips: ['Which meal do you suggest?', 'What treats are safe?', 'How long until it improves?'], product: pick(s, 'allergy') }) },
  { id: 'stomach',
    re: /\b(diarr?hoea|diarr?hea|diare|mencret|vomit\w*|muntah|throw(ing|s)? up|upset stomach|sensitive stomach|loose stools?|soft stools?|gas|kembung|constipat\w*|sembelit)\b/i,
    reply: s => ({ topic: 'sensitive', text: `For a mild upset in an otherwise bright adult pet: skip rich treats, offer small bland meals (boiled chicken and soft rice, or plain pumpkin) for 2 to 3 days, and keep fresh water available. Then move back to the normal food over 3 days.\n\nSee a vet the same day if there is blood, repeated vomiting, a swollen belly, no water staying down, or if ${s.pet} is very young, a senior, or seems weak. Diarrhoea for more than 48 hours also needs a check.`, chips: ['How do I switch foods?', 'Which meal do you suggest?', 'Can my pet eat pumpkin?'], product: pick(s, 'sensitive') }) },
  { id: 'picky',
    re: /\b(picky|fussy|pilih.?pilih|won'?t eat|not eating|refus\w*|gak mau makan|tidak mau makan|susah makan|skip(s|ping)? meals?|no appetite|lost (his |her |its )?appetite|bored of (his|her|the) food)\b/i,
    reply: s => ({ topic: 'picky', text: `First the safety check: ${s.species === 'Cat' ? `a cat that eats nothing for 24 hours needs a vet, because fasting can damage a cat's liver` : `a dog that refuses all food for 48 hours, or seems unwell, needs a vet`}.\n\nIf ${s.pet} is simply choosy: serve the meal slightly warm, put it down for 20 minutes and then take it away until the next meal, and stop treats between meals for a week. Fresh food usually wins picky eaters over, and a crumbled single-ingredient topper helps.`, chips: ['Which meal do you suggest?', 'How do I switch foods?'], product: pick(s, 'picky') }) },
  { id: 'treats',
    re: /\b(treats?|snacks?|camilan|cemilan|biscuits?|biskuit|rewards?|chews?)\b/i,
    reply: s => {
      const budget = s.kg ? ` For ${s.pet} that is about ${round(dailyCalories({ kg: s.kg, species: s.species, stage: s.stage || 'adult' }).kcal * TREAT_SHARE)} kcal a day.` : '';
      return { topic: 'treats', text: `Treats should stay under ${TREAT_SHARE * 100}% of daily calories, with the main meals reduced to match.${budget}\n\nGood choices are single-ingredient ones: dried meat, a slice of carrot or apple, a spoon of plain pumpkin. Avoid anything with added sugar, salt, onion powder or xylitol. For training, break treats into pea-sized pieces: the reward is the moment, not the size.`, chips: ['Which fruits are okay?', 'Can my pet eat cheese?', 'How much should I feed?'], product: pick(s, 'treats') };
    } },
  { id: 'fruits',
    re: /\b(fruits?|buah|vegetables?|sayur|sayuran|veg|veggies)\b/i,
    reply: s => ({ topic: 'treats', text: `Safe in small pieces: apple without seeds, banana, seedless watermelon, papaya, mango without the pit, carrot, pumpkin, green beans and steamed broccoli.\n\nNever: grapes, raisins, onion, garlic, and anything with a pit or seeds left in. Fruit is sugary, so it counts as a treat for ${s.pet}.`, chips: ['How many treats a day?', 'Can my pet eat avocado?'] }) },
  { id: 'switch',
    re: /\b(switch\w*|transition\w*|change (his |her |the |their |my )?(food|diet)|ganti makanan|new food|pindah makanan|introduc\w*)\b/i,
    reply: s => ({ topic: 'switch', text: `Change over 7 days so ${s.pet}'s gut bacteria can keep up:\n\nDays 1-2: 25% new, 75% old\nDays 3-4: half and half\nDays 5-6: 75% new, 25% old\nDay 7: all new\n\nSlightly soft stools on days 3 to 5 are normal. If they turn watery, go back one step for two more days. Sensitive pets and seniors do better with a 10 to 14 day switch.`, chips: ['Which meal do you suggest?', 'How much should I feed?'] }) },
  { id: 'water',
    re: /\b(water|minum|drink\w*|hydrat\w*|dehydrat\w*|urinary|kencing|pee|struvite|crystals?|kidneys?|ginjal|renal)\b/i,
    reply: s => ({ topic: 'hydration', text: `${s.species === 'Cat' ? `Cats evolved to get water from food, so many live slightly dehydrated on dry kibble. That matters for kidneys and bladder crystals.` : `A healthy dog needs roughly 50 ml of water per kg a day, more in the heat.`}\n\nWet or fresh food is the easiest fix, since it is about 70% water. Also try several wide bowls away from the food, a fountain, or a spoon of unsalted broth in the water.\n\nIf ${s.pet} has diagnosed kidney or urinary disease, the diet needs controlled phosphorus and protein, which I plan from your vet's blood results rather than from a chat.`, chips: ['Which meal do you suggest?', 'How much should I feed?'], product: pick(s, 'hydration') }) },
  { id: 'senior',
    re: /\b(senior|old(er)? (dog|cat|pet)|aging|ageing|sudah tua|arthritis|joints?|sendi|stiff)\b/i,
    reply: s => ({ topic: 'senior', text: `Older pets need fewer calories but more high-quality protein, to keep muscle while staying lean. Softer textures help worn teeth, omega-3 from fish helps stiff joints, and two or three smaller meals are easier to digest.\n\nA yearly blood test tells us whether kidneys and liver need a gentler recipe. Bring the latest results to our session if you have them.`, chips: ['Which meal do you suggest?', 'How much should I feed?', 'Do supplements help?'], product: pick(s, 'senior') }) },
  { id: 'young',
    re: /\b(puppy|puppies|kittens?|anak anjing|anak kucing|growing|wean\w*|sapih)\b/i,
    reply: s => ({ topic: 'young', text: `Growing pets need about twice the calories per kg of an adult, in three to four meals a day, with calcium and phosphorus in the right ratio. That ratio is why home recipes meant for adults are risky for youngsters${s.species === 'Dog' ? ', especially large-breed puppies' : ''}.\n\nWeigh ${s.pet} weekly: steady gain along the growth curve matters more than a round belly.`, chips: ['How much should I feed?', 'How often should I feed?'], product: pick(s, 'young') }) },
  { id: 'raw',
    re: /\b(raw (food|diet|meat|feeding)|barf|daging mentah|mentah)\b/i,
    reply: s => ({ text: `I do not recommend raw feeding at home. Raw meat regularly carries salmonella, listeria and E. coli, which reach your family through the bowl, the floor and ${s.pet}'s kisses, and raw diets are often short of calcium.\n\nGently cooked food keeps almost all the benefit without the risk, which is why our kitchen steams and slow-cooks.`, chips: ['How is your food cooked?', 'Which meal do you suggest?'] }) },
  { id: 'supplements',
    re: /\b(supplements?|suplemen|vitamins?|probiotics?|probiotik|omega|fish oil|minyak ikan|glucosamine|calcium|kalsium)\b/i,
    reply: s => ({ topic: /probiot/i.test(s.lastText) ? 'gut' : 'skin', text: `A complete, balanced diet needs no multivitamin, and doubling up can overdose vitamins A and D. Two extras are well supported: omega-3 fish oil for skin, coat and joints, and a probiotic during or after tummy trouble or antibiotics.\n\nTell me what ${s.pet} currently takes and I will check it against the plan.`, chips: ['My pet has itchy skin', 'Which meal do you suggest?'], product: pick(s, /probiot/i.test(s.lastText) ? 'gut' : 'skin') }) },
  { id: 'teeth',
    re: /\b(teeth|tooth|dental|gigi|bad breath|bau mulut|tartar|plaque|karang gigi)\b/i,
    reply: s => ({ text: `Brushing is the only thing proven to work well: a soft brush and pet toothpaste (never human paste), three times a week or more. Chews and a rope toy help a little between brushings.\n\nBad breath with red gums or drooling means ${s.pet} needs a dental check, because sore teeth are a common hidden reason for eating less.`, chips: ['My pet is not eating', 'What treats are safe?'], product: s.species === 'Cat' ? undefined : 't1' }) },
  { id: 'bored',
    re: /\b(bored|bosan|destructive|chew(s|ing)? everything|hyper|enrichment|toys?|mainan)\b/i,
    reply: s => ({ topic: 'bored', text: `Feeding can be the day's best game. Scatter part of the meal in a snuffle mat or hide it around the room: ten minutes of sniffing tires ${s.pet} about as much as a walk, and slower eating is easier on the stomach.`, chips: ['How much should I feed?', 'What treats are safe?'], product: pick(s, 'bored') }) },
  { id: 'recommend',
    re: /\b(which (meal|food|product|one)|recommend\w*|suggest\w*|rekomendasi|saran|what should i (buy|get|order)|best (meal|food)|cocok)\b/i,
    reply: s => {
      const concern = /weight/i.test(s.concern) ? 'weight' : /allerg|stomach/i.test(s.concern) ? 'sensitive' : /senior/i.test(s.concern) ? 'senior' : null;
      const topic = (s.lastTopic && !['portion', 'switch'].includes(s.lastTopic) && s.lastTopic) || concern || s.stage || 'general';
      return { text: `From what you have told me about ${s.pet}, this is where I would start. In the session I will confirm the portion and check the ingredients against ${s.pet}'s history.`, product: pick(s, topic), chips: ['How much should I feed?', 'How do I switch foods?'] };
    } },
  { id: 'kitchen',
    re: /\b(how is (it|your food|the food) (cooked|made)|ingredients?|bahan|preservativ\w*|pengawet|where (do|does) .* come from|sourc\w*|sumber|farm\w*|organic|human.?grade|kitchen|dapur)\b/i,
    reply: () => ({ text: `Everything is cooked in our own kitchen in small batches: slow-cooked or gently steamed, with no preservatives, colouring or fillers. Vegetables come from Lembang, free-range chicken from Bogor and fish from the morning catch at Muara Angke, usually within a day of harvest.\n\nEach pack is weighed to your pet's calorie target and labelled with their name.`, chips: ['How long does it keep?', 'Where do you deliver?'] }) },
  { id: 'storage',
    re: /\b(keep|store|storage|simpan|fridge|kulkas|freez\w*|beku|shelf life|expir\w*|kadaluarsa|basi|how long does it last|tahan berapa)\b/i,
    reply: () => ({ text: `Meals arrive chilled at 4 °C. Keep them in the fridge and use within 4 days, or freeze on arrival for up to a month and thaw overnight in the fridge. Warm a portion to room temperature in a bowl of warm water, not the microwave, and throw away anything left in the bowl after 30 minutes.`, chips: ['Where do you deliver?', 'How do I switch foods?'] }) },
  { id: 'delivery',
    re: /\b(deliver\w*|kirim|pengiriman|antar|ongkir|shipping|jabodetabek|jakarta|bogor|depok|tangerang|bekasi|arrive|sampai)\b/i,
    reply: () => ({ text: `We deliver across Jabodetabek once a week, in insulated boxes, in the morning window you choose. Food is cooked the day before, so it reaches you within about 24 hours of leaving the stove. Outside Jabodetabek we cannot yet keep the cold chain, so we do not ship there.`, chips: ['How long does it keep?', 'What does it cost?'] }) },
  { id: 'session',
    re: /\b(what happens|how does (it|the session|this) work|what do i need|prepare|persiapan|what should i bring)\b/i,
    reply: s => ({ text: `The session is a 30-minute video call. We go through ${s.pet}'s weight, age, activity, current food and any health history, then you receive a written plan within a day: daily calories, portions in grams, foods to avoid and a switch-over schedule.\n\nIt helps to have a recent weight, photos of the current food label, and any vet results from the last year.`, chips: ['What does it cost?', 'How much should I feed?'] }) },
  { id: 'book',
    re: /\b(book\w*|reschedul\w*|appointment|janji|jadwal|session|sesi|consult\w*|konsultasi|cancel|batal)\b/i,
    reply: s => ({ action: s.booked ? undefined : 'book', text: s.booked ? `Your session is already in my calendar. To change the date, use "Book another session" in the consultation room and I will see the new time.` : `You can book in the consultation room: pick a date, tell us your pet's name and main concern, and a nutritionist is assigned straight away.`, chips: ['What does it cost?', 'What happens in a session?'] }) },
  { id: 'call',
    re: /\b(call|phone|telepon|telpon|video|voice|talk to (you|someone|a human)|speak)\b/i,
    reply: s => (s.booked
      ? { action: 'call', text: `Of course. Tap the phone icon at the top of this chat and we can talk it through.` }
      : { action: 'book', text: `Calls open once you have a session booked, so your nutritionist has ${s.pet === 'your pet' ? "your pet's" : `${s.pet}'s`} details in front of them.`, chips: ['What does it cost?'] }) },
  { id: 'identity',
    re: /\b(are you (a |an )?(bot|robot|real|human|ai|person)|who are you|siapa (kamu|anda)|chatgpt|artificial)\b/i,
    reply: s => ({ text: `Honest answer: in this prototype my replies are simulated from a nutrition knowledge base, so treat them as general guidance. In the real service you would be talking to ${s.personaName}, and nothing replaces an examination by your own vet.`, chips: ['How much should I feed?', 'What treats are safe?'] }) },
  { id: 'thanks',
    re: /\b(thanks?|thank you|thx|terima kasih|makasih|trims|appreciate)\b/i,
    reply: s => ({ text: `You are very welcome. Give ${s.pet} a scratch behind the ears from me.`, chips: ['How much should I feed?', 'What treats are safe?'] }) },
  { id: 'bye',
    re: /\b(bye|goodbye|see you|sampai jumpa|dadah|good ?night|selamat malam)\b/i,
    reply: s => ({ text: `Take care, and message me any time ${s.pet} has you wondering about something.` }) },
  { id: 'hello',
    re: /^\s*(hi|hello|hey|halo|hai|hallo|pagi|siang|sore|malam|good (morning|afternoon|evening)|selamat (pagi|siang|sore))\b/i,
    reply: s => ({ text: `Hello! What would you like to know about ${s.pet}'s food today?`, chips: ['How much should I feed?', 'What treats are safe?', 'My pet has itchy skin'] }) },
];

const FALLBACKS = [
  s => `I want to get this right for ${s.pet}. Could you tell me a bit more: is this about what to feed, how much, or a health worry?`,
  s => `Noted for ${s.pet}'s file. To give you something useful now, tell me ${s.pet}'s weight and age and what they eat today.`,
  s => `That one is better answered with ${s.pet} in front of me, so I have added it to our session notes. Meanwhile, I can help with portions, treats, safe foods or switching diets.`,
];
const DEFAULT_CHIPS = ['How much should I feed?', 'What treats are safe?', 'How do I switch foods?'];
const INDONESIAN = /\b(aku|saya|gimana|bagaimana|berapa|boleh|apakah|kucing|anjing|nggak|tidak|bisa|kenapa|makan|dong|sih|tolong)\b/i;
const stageWord = stage => (stage === 'young' ? 'a young' : stage === 'senior' ? 'a senior' : 'an adult');

/** `profile`: { pet, species, concern, personaName, booked }. Returns { reply(text), state }. */
export function createBot(profile = {}) {
  const state = {
    pet: profile.pet || 'your pet', species: profile.species || 'Dog', concern: profile.concern || '',
    personaName: profile.personaName || 'your Faunora nutritionist', booked: !!profile.booked,
    kg: null, stage: null, lastTopic: null, pending: null, lastText: '', fallbacks: 0, toldLanguage: false,
  };

  function reply(text) {
    const clean = String(text || '').trim().slice(0, 500);
    state.lastText = clean;
    const learned = readFacts(clean, state);
    Object.assign(state, learned);

    const food = findFood(clean);
    const intent = INTENTS.find(i => (i.test ? i.test(clean, state, food) : i.re.test(clean)));
    let out, id;
    if (learned.kg && (state.pending === 'weight' || !intent)) { out = portionReply(state); id = 'portion'; }
    else if (intent) { out = intent.reply(state, food); id = intent.id; }
    else if (learned.species || learned.stage) {
      id = 'facts';
      out = { text: `Thanks, noted: ${state.pet} is ${stageWord(state.stage)} ${state.species.toLowerCase()}. ${state.kg ? 'Ask me about portions whenever you like.' : `If you tell me ${state.pet}'s weight I can work out daily portions.`}`, chips: DEFAULT_CHIPS };
    } else {
      id = 'fallback';
      out = { text: FALLBACKS[state.fallbacks++ % FALLBACKS.length](state), chips: DEFAULT_CHIPS };
    }

    state.pending = out.pending || null;
    if (out.topic) state.lastTopic = out.topic;
    let message = out.text;
    if (!state.toldLanguage && INDONESIAN.test(clean)) {
      state.toldLanguage = true;
      message += '\n\n(Saya mengerti Bahasa Indonesia, tetapi untuk sementara saya menjawab dalam bahasa Inggris.)';
    }
    return { text: message, chips: out.chips || [], product: out.product, action: out.action, intent: id };
  }

  return { reply, state };
}
