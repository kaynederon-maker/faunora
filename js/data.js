/* Site content that more than one module needs: the tour stops, the catalogue and the nutritionists. */

/* One stop per room of the 3D house. `az` is the camera's compass angle (radians), `fit` the world-space
   box (width, height) that has to stay in view, `accent` the colour the UI picks up while you are there. */
export const STOPS = [
  { id: 'home', label: 'Home', title: 'The Faunora house', az: 0.7, fit: [23, 17.5], accent: '#A9B79A' },
  { id: 'consult', label: 'Consult', title: 'Consultation room', az: 0.62, fit: [9.6, 6.4], accent: '#A9C4C4' },
  { id: 'kitchen', label: 'Catering', title: 'The kitchen', az: 0.8, fit: [10.2, 6.6], accent: '#D9C87F' },
  { id: 'shop', label: 'Shop', title: 'The shop', az: 0.6, fit: [9.6, 6.4], accent: '#E5C4B5' },
  { id: 'reviews', label: 'Reviews', title: 'The lounge', az: 0.82, fit: [9.6, 6.4], accent: '#B5C4A6' },
  { id: 'story', label: 'Story', title: 'The study', az: 0.6, fit: [9.6, 6.6], accent: '#DCC6A2' },
  { id: 'team', label: 'Team', title: 'The rooftop', az: 0.8, fit: [9.4, 6.2], accent: '#A9B79A' },
];

export const TINT = { meals: 'rgba(169,183,154,.28)', snacks: 'rgba(205,187,116,.25)', toys: 'rgba(229,196,181,.35)', fashion: 'rgba(201,212,212,.4)' };
export const CATEGORIES = [['all', 'All'], ['meals', 'Meals'], ['snacks', 'Snacks'], ['toys', 'Toys'], ['fashion', 'Fashion']];

export const PRODUCTS = [
  { id: 'm1', cat: 'meals', name: 'Garden Lamb Bowl', desc: 'Lamb, brown rice, pumpkin and peas. Cooked fresh, portioned per meal.', tags: ['Dog', 'Adult'], price: 68000 },
  { id: 'm2', cat: 'meals', name: 'Ocean Tuna Pâté', desc: 'Grain-free tuna and sardine pâté with taurine for indoor cats.', tags: ['Cat', 'Grain-free'], price: 32000 },
  { id: 'm3', cat: 'meals', name: 'Slim & Sage Chicken', desc: 'Lean chicken, zucchini and oats. Built for weight-management plans.', tags: ['Dog', 'Low-fat'], price: 72000 },
  { id: 'm4', cat: 'meals', name: 'Senior Soft Salmon', desc: 'Gently baked salmon with mashed sweet potato, soft on older teeth and kidneys.', tags: ['Cat', 'Senior'], price: 38000 },
  { id: 'm5', cat: 'meals', name: 'Farmhouse Beef Stew', desc: 'Slow-cooked beef with carrot, potato and green beans, with extra calcium for growing dogs.', tags: ['Dog', 'Puppy'], price: 74000 },
  { id: 'm6', cat: 'meals', name: 'Chicken & Pumpkin Mousse', desc: 'Silky chicken and pumpkin mousse, easy on small or sensitive tummies.', tags: ['Cat', 'Kitten'], price: 34000 },
  { id: 'm7', cat: 'meals', name: 'Turkey Quinoa Bowl', desc: 'Lean turkey, quinoa, spinach and sweet potato. One protein, gentle on digestion.', tags: ['Dog', 'Sensitive'], price: 76000 },
  { id: 'm8', cat: 'meals', name: 'Mackerel Rice Congee', desc: 'Soft rice congee with flaked mackerel: a high-moisture meal for cats who rarely drink.', tags: ['Cat', 'Hydration'], price: 36000 },
  { id: 's1', cat: 'snacks', name: 'Pumpkin Paw Biscuits', desc: 'Oven-baked, three ingredients, no added salt or sugar.', tags: ['Dog', 'Hypoallergenic'], price: 45000 },
  { id: 's2', cat: 'snacks', name: 'Freeze-Dried Chicken Hearts', desc: 'Single-ingredient training treats. One jar, many good boys.', tags: ['Dog & Cat', 'Single protein'], price: 59000 },
  { id: 's3', cat: 'snacks', name: 'Sweet Potato Chews', desc: 'Slow-dried sweet potato slices. One ingredient and a long, quiet chew.', tags: ['Dog', 'Vegan'], price: 42000 },
  { id: 's4', cat: 'snacks', name: 'Salmon Skin Crisps', desc: 'Air-dried salmon skin, rich in omega-3 for skin and coat.', tags: ['Dog & Cat', 'Omega-3'], price: 62000 },
  { id: 's5', cat: 'snacks', name: 'Catnip Tuna Bites', desc: 'Crunchy baked tuna bites with a pinch of dried catnip.', tags: ['Cat', 'Crunchy'], price: 39000 },
  { id: 's6', cat: 'snacks', name: 'Coconut Yoghurt Drops', desc: 'Freeze-dried yoghurt drops with live cultures, for after tummy trouble.', tags: ['Dog', 'Probiotic'], price: 48000 },
  { id: 't1', cat: 'toys', name: 'Linen Knot Rope', desc: 'Undyed cotton-linen rope for tugging and teeth cleaning.', tags: ['Dog'], price: 55000 },
  { id: 't2', cat: 'toys', name: 'Felt Kitty Trio', desc: 'Hand-stitched wool felt kitties in sage, blush and oat, lightly scented with catnip.', tags: ['Cat'], price: 49000 },
  { id: 't3', cat: 'toys', name: 'Wool Felt Balls', desc: 'Five hand-felted wool balls in Faunora colours. Quiet on the floor at 3 am.', tags: ['Cat'], price: 39000 },
  { id: 't4', cat: 'toys', name: 'Canvas Pup Plush', desc: 'A double-stitched cotton canvas pup, stuffed with recycled fibre. Built to be carried everywhere.', tags: ['Dog'], price: 59000 },
  { id: 't5', cat: 'toys', name: 'Feather Wand', desc: 'Beech handle, jute cord and soft feathers for ten good minutes of hunting.', tags: ['Cat'], price: 45000 },
  { id: 't6', cat: 'toys', name: 'Snuffle Mat', desc: 'Felt strips that hide a meal and turn dinner into a sniffing game.', tags: ['Dog', 'Enrichment'], price: 119000 },
  { id: 'f1', cat: 'fashion', name: 'Sage Knit Sweater', desc: 'Soft knit for air-conditioned rooms and rainy evenings. Sizes XS–L.', tags: ['Dog & Cat'], price: 129000 },
  { id: 'f2', cat: 'fashion', name: 'Canvas Bandana', desc: 'Washed canvas in Faunora gold, with an adjustable tie.', tags: ['Dog & Cat'], price: 65000 },
  { id: 'f3', cat: 'fashion', name: 'Linen Collar', desc: 'Washed linen over strong webbing, with a brass buckle. Sizes XS–L.', tags: ['Dog & Cat'], price: 79000 },
  { id: 'f4', cat: 'fashion', name: 'Oat Raincoat', desc: 'Lightweight, water-repellent and hooded, for sudden afternoon rain.', tags: ['Dog'], price: 149000 },
  { id: 'f5', cat: 'fashion', name: 'Rope Leash', desc: 'Hand-braided cotton rope in sage with a brass clasp. 1.5 m.', tags: ['Dog'], price: 99000 },
  { id: 'f6', cat: 'fashion', name: 'Quilted Vest', desc: 'Padded cotton vest for cool rooms and night walks. Sizes XS–M.', tags: ['Dog & Cat'], price: 139000 },
];
export const byId = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));
export const photo = p => `assets/img/${p.id}.webp`;

/* The care desk answers before a session is booked; after that the assigned nutritionist takes over. */
export const DESK = 'Faunora care desk';
export const EXPERTS = {
  'drh. Bima Adiwangsa': { first: 'Bima', role: 'Feline diets & food allergies', photo: 'assets/img/expert-bima.webp' },
  'drh. Laras Pertiwi, M.Sc': { first: 'Laras', role: 'Clinical pet nutrition', photo: 'assets/img/expert-laras.webp' },
  'Nadia Halim, PgDip': { first: 'Nadia', role: 'Canine weight management', photo: 'assets/img/expert-nadia.webp' },
  [DESK]: { first: 'the care desk', role: 'Questions before you book', photo: 'assets/logo/mark-160.png' },
};
// "First available" goes to the specialist who matches the owner's main concern.
export const BY_CONCERN = {
  'Weight management': 'Nadia Halim, PgDip',
  'Food allergy / sensitive stomach': 'drh. Bima Adiwangsa',
  'Senior pet': 'drh. Laras Pertiwi, M.Sc',
  'Recovery after illness': 'drh. Laras Pertiwi, M.Sc',
};
export const DEFAULT_EXPERT = 'drh. Laras Pertiwi, M.Sc';
