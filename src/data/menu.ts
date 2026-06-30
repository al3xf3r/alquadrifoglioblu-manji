export type Lang = "it" | "en";

export type Allergen =
  | "glutine"
  | "latte"
  | "uova"
  | "pesce"
  | "molluschi"
  | "frutta_a_guscio"
  | "sedano"
  | "soia"
  | "senape"
  | "sesamo"
  | "lupini"
  | "arachidi"
  | "anidride_solforosa";

export const ALLERGEN_LABELS: Record<Allergen, { it: string; en: string; icon: string }> = {
  glutine:           { it: "Glutine",           en: "Gluten",          icon: "🌾" },
  latte:             { it: "Latte",              en: "Milk",            icon: "🥛" },
  uova:              { it: "Uova",               en: "Eggs",            icon: "🥚" },
  pesce:             { it: "Pesce",              en: "Fish",            icon: "🐟" },
  molluschi:         { it: "Molluschi",          en: "Molluscs",        icon: "🦑" },
  frutta_a_guscio:   { it: "Frutta a guscio",   en: "Tree nuts",       icon: "🥜" },
  sedano:            { it: "Sedano",             en: "Celery",          icon: "🌿" },
  soia:              { it: "Soia",               en: "Soy",             icon: "🫘" },
  senape:            { it: "Senape",             en: "Mustard",         icon: "🌱" },
  sesamo:            { it: "Sesamo",             en: "Sesame",          icon: "⚪" },
  lupini:            { it: "Lupini",             en: "Lupin",           icon: "🌼" },
  arachidi:          { it: "Arachidi",           en: "Peanuts",         icon: "🥜" },
  anidride_solforosa:{ it: "Solfiti",            en: "Sulphites",       icon: "🍷" },
};

export interface MenuItem {
  name: string;
  nameEN?: string;
  description?: string;
  descriptionEN?: string;
  price?: number;
  available?: boolean;
  featured?: boolean;
  image?: string;
  allergens?: Allergen[];
}

export interface MenuGroup {
  name: string;
  nameEN?: string;
  items: MenuItem[];
  supplements?: Supplement[];
}

export interface Supplement {
  name: string;
  nameEN?: string;
  price: number;
}

export interface MenuCategory {
  slug: string;
  nameIT: string;
  nameEN: string;
  image: string;
  unavailable?: boolean;
  groups: MenuGroup[];
}

const PIZZA_SUPPLEMENTS: Supplement[] = [
  { name: "Doppia Mozzarella", nameEN: "Double Mozzarella", price: 0.5 },
  { name: "Mozzarella di Bufala", nameEN: "Buffalo Mozzarella", price: 2.5 },
  { name: "Pesto di Pistacchio", nameEN: "Pistachio Pesto", price: 2.5 },
  { name: "Funghi Porcini", nameEN: "Porcini Mushrooms", price: 2.5 },
  { name: "Ingredienti Vari", nameEN: "Various Toppings", price: 1 },
  { name: "Patatine Fritte", nameEN: "French Fries", price: 2 },
  { name: "Salumi", nameEN: "Cured Meats", price: 1.5 },
  { name: "Funghi Trifolati", nameEN: "Sauteed Mushrooms", price: 1.5 },
  { name: "Tonno", nameEN: "Tuna", price: 1.5 },
  { name: "Acciughe", nameEN: "Anchovies", price: 1.5 },
];

// Base allergeni pizza: sempre glutine + latte
const PB: Allergen[] = ["glutine", "latte"];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    slug: "pizze-tradizionali",
    nameIT: "Pizze Tradizionali",
    nameEN: "Traditional Pizzas",
    image: "/pizze.webp",
    groups: [
      {
        name: "Pizze",
        nameEN: "Pizzas",
        supplements: PIZZA_SUPPLEMENTS,
        items: [
          { name: "Cuzzola", description: "Pasta di pizza, olio, origano.", descriptionEN: "Pizza dough, oil, oregano.", price: 4, allergens: ["glutine"] },
          { name: "Margherita", description: "Pomodoro, mozzarella.", descriptionEN: "Tomato, mozzarella.", price: 5, allergens: [...PB] },
          { name: "Olive", description: "Pomodoro, mozzarella, olive, origano.", descriptionEN: "Tomato, mozzarella, olives, oregano.", price: 6, allergens: [...PB] },
          { name: "Prosciutto", description: "Pomodoro, mozzarella, prosciutto cotto, olio, origano.", descriptionEN: "Tomato, mozzarella, cooked ham, oil, oregano.", price: 6.5, allergens: [...PB] },
          { name: "Salame", description: "Pomodoro, mozzarella, salame, olio, origano.", descriptionEN: "Tomato, mozzarella, salami, oil, oregano.", price: 6.5, allergens: [...PB] },
          { name: "Funghi", description: "Pomodoro, mozzarella, funghi trifolati, olio, origano.", descriptionEN: "Tomato, mozzarella, sauteed mushrooms, oil, oregano.", price: 6.5, allergens: [...PB] },
          { name: "Napoletana", description: "Pomodoro, mozzarella, acciughe, olio, origano.", descriptionEN: "Tomato, mozzarella, anchovies, oil, oregano.", price: 6.5, allergens: [...PB, "pesce"] },
          { name: "Wurstel", description: "Pomodoro, mozzarella, wurstel, olio, origano.", descriptionEN: "Tomato, mozzarella, frankfurter, oil, oregano.", price: 6.5, allergens: [...PB] },
          { name: "Tonnata", description: "Pomodoro, mozzarella, tonno, cipolla.", descriptionEN: "Tomato, mozzarella, tuna, onion.", price: 6.5, allergens: [...PB, "pesce"] },
          { name: "Norma", description: "Pomodoro, mozzarella, melanzane, ricotta, olio, origano.", descriptionEN: "Tomato, mozzarella, aubergine, ricotta, oil, oregano.", price: 6.5, allergens: [...PB] },
          { name: "Mais", description: "Pomodoro, mozzarella, tonno, mais, origano.", descriptionEN: "Tomato, mozzarella, tuna, corn, oregano.", price: 6.5, allergens: [...PB, "pesce"] },
          { name: "Boscaiola", description: "Pomodoro, mozzarella, funghi trifolati, olive, olio, origano.", descriptionEN: "Tomato, mozzarella, sauteed mushrooms, olives, oil, oregano.", price: 7, allergens: [...PB] },
          { name: "Patatine", description: "Pomodoro, mozzarella, patatine fritte, origano.", descriptionEN: "Tomato, mozzarella, french fries, oregano.", price: 7, allergens: [...PB] },
          { name: "Wurstel e patatine", description: "Pomodoro, mozzarella, wurstel, patatine fritte, origano.", descriptionEN: "Tomato, mozzarella, frankfurter, french fries, oregano.", price: 8, allergens: [...PB] },
          { name: "Primavera", description: "Pomodoro, mozzarella, prosciutto cotto, piselli, origano.", descriptionEN: "Tomato, mozzarella, cooked ham, peas, oregano.", price: 7, allergens: [...PB] },
          { name: "Siciliana", description: "Pomodoro, mozzarella, acciughe, olive, origano.", descriptionEN: "Tomato, mozzarella, anchovies, olives, oregano.", price: 7, allergens: [...PB, "pesce"] },
          { name: "Diavola", description: "Pomodoro, mozzarella, salame piccante, peperoncino, origano.", descriptionEN: "Tomato, mozzarella, spicy salami, chili, oregano.", price: 7, allergens: [...PB] },
          { name: "4 Stagioni", description: "Pomodoro, mozzarella, funghi, piselli, carciofi, olive, origano.", descriptionEN: "Tomato, mozzarella, mushrooms, peas, artichokes, olives, oregano.", price: 7.5, allergens: [...PB] },
          { name: "Parmigiana", description: "Pomodoro, mozzarella, melanzane, prosciutto cotto, uovo, scaglie di grana.", descriptionEN: "Tomato, mozzarella, aubergine, cooked ham, egg, parmesan flakes.", price: 7.5, allergens: [...PB, "uova"] },
          { name: "Calzone", description: "Pomodoro, mozzarella, prosciutto cotto, funghi, olive, origano.", descriptionEN: "Tomato, mozzarella, cooked ham, mushrooms, olives, oregano.", price: 7.5, allergens: [...PB] },
          { name: "Parma", description: "Pomodoro, mozzarella, prosciutto crudo, scaglie di parmigiano, origano.", descriptionEN: "Tomato, mozzarella, Parma ham, parmesan flakes, oregano.", price: 7.5, allergens: [...PB] },
          { name: "Parma Rucola", description: "Pomodoro, mozzarella, prosciutto crudo, scaglie di grana, rucola, origano.", descriptionEN: "Tomato, mozzarella, Parma ham, parmesan flakes, rocket, oregano.", price: 8, allergens: [...PB] },
          { name: "Capricciosa", description: "Pomodoro, mozzarella, funghi, piselli, uovo, prosciutto cotto, olive, origano.", descriptionEN: "Tomato, mozzarella, mushrooms, peas, egg, cooked ham, olives, oregano.", price: 8, allergens: [...PB, "uova"] },
        ],
      },
    ],
  },
  {
    slug: "pizze-bianche",
    nameIT: "Pizze Bianche",
    nameEN: "White Pizzas",
    image: "/bianche.webp",
    groups: [
      {
        name: "Pizze Bianche",
        nameEN: "White Pizzas",
        supplements: PIZZA_SUPPLEMENTS,
        items: [
          { name: "Biancaneve", description: "Mozzarella, olio, origano.", descriptionEN: "Mozzarella, oil, oregano.", price: 5, allergens: [...PB] },
          { name: "Biancaneve e Pistacchio", description: "Mozzarella, pesto di pistacchio, olio, origano.", descriptionEN: "Mozzarella, pistachio pesto, oil, oregano.", price: 7.5, allergens: [...PB, "frutta_a_guscio"] },
          { name: "Biancaneve e Funghi Porcini", description: "Mozzarella, funghi porcini, olio, origano.", descriptionEN: "Mozzarella, porcini mushrooms, oil, oregano.", price: 7.5, allergens: [...PB] },
          { name: "Quattro Formaggi", description: "Mozzarella, gorgonzola, mascarpone, scaglie di grana, olio, origano.", descriptionEN: "Mozzarella, gorgonzola, mascarpone, parmesan flakes, oil, oregano.", price: 8, allergens: [...PB] },
          { name: "Messinese", description: "Mozzarella, pomodorini, acciughe, olive, scarola, olio, origano.", descriptionEN: "Mozzarella, cherry tomatoes, anchovies, olives, escarole, oil, oregano.", price: 7.5, allergens: [...PB, "pesce"] },
          { name: "Bronte", description: "Mozzarella, pesto di pistacchio, speck, olio.", descriptionEN: "Mozzarella, pistachio pesto, speck, oil.", price: 9, allergens: [...PB, "frutta_a_guscio"] },
          { name: "Del Direttore", description: "Mozzarella, pesto di pistacchio, funghi porcini, scamorza affumicata.", descriptionEN: "Mozzarella, pistachio pesto, porcini mushrooms, smoked scamorza.", price: 11, allergens: [...PB, "frutta_a_guscio"] },
          { name: "Mortadella", description: "Mozzarella, mortadella, pesto di pistacchio, olio, origano.", descriptionEN: "Mozzarella, mortadella, pistachio pesto, oil, oregano.", price: 9, allergens: [...PB, "frutta_a_guscio"] },
          { name: "Burrata", description: "Mozzarella, burrata, granella di pistacchio, mortadella, olio, origano.", descriptionEN: "Mozzarella, burrata, pistachio crumble, mortadella, oil, oregano.", price: 10, allergens: [...PB, "frutta_a_guscio"] },
          { name: "Biancaneve Piccantina", description: "Mozzarella, salame piccante, funghi porcini, olio, origano.", descriptionEN: "Mozzarella, spicy salami, porcini mushrooms, oil, oregano.", price: 9, allergens: [...PB] },
          { name: "Bianca di Parma", description: "Mozzarella, pomodorini, prosciutto crudo, mascarpone, rucola, scaglie di grana, olio, origano.", descriptionEN: "Mozzarella, cherry tomatoes, Parma ham, mascarpone, rocket, parmesan flakes, oil, oregano.", price: 9, allergens: [...PB] },
        ],
      },
    ],
  },
  {
    slug: "pizze-speciali",
    nameIT: "Pizze Speciali",
    nameEN: "Special Pizzas",
    image: "/speciali.webp",
    groups: [
      {
        name: "Pizze Speciali",
        nameEN: "Special Pizzas",
        supplements: PIZZA_SUPPLEMENTS,
        items: [
          { name: "Vegetariana", description: "Mozzarella, pomodorini, melanzane grigliate, zucchine grigliate, funghi, scaglie di grana.", descriptionEN: "Mozzarella, cherry tomatoes, grilled aubergine, grilled courgette, mushrooms, parmesan flakes.", price: 8.5, allergens: [...PB] },
          { name: "Quadrifoglio Blu", description: "Pomodoro, mozzarella, funghi porcini, peperoncino, origano.", descriptionEN: "Tomato, mozzarella, porcini mushrooms, chili, oregano.", price: 8, allergens: [...PB] },
          { name: "Quattro Formaggi Rossa", description: "Pomodoro, mozzarella, gorgonzola, mascarpone, scaglie di grana, olio, origano.", descriptionEN: "Tomato, mozzarella, gorgonzola, mascarpone, parmesan flakes, oil, oregano.", price: 8, allergens: [...PB] },
          { name: "Peperonata", description: "Pomodoro, mozzarella, peperoni, melanzane, olio, origano.", descriptionEN: "Tomato, mozzarella, peppers, aubergine, oil, oregano.", price: 7.5, allergens: [...PB] },
          { name: "Bresaola", description: "Pomodoro, mozzarella, bresaola, scaglie di grana, rucola, olio, origano.", descriptionEN: "Tomato, mozzarella, bresaola, parmesan flakes, rocket, oil, oregano.", price: 8, allergens: [...PB] },
          { name: "Alla Grillo", description: "Pomodoro, mozzarella, gorgonzola, uovo, funghi, piselli, prosciutto cotto, olive, rucola, origano.", descriptionEN: "Tomato, mozzarella, gorgonzola, egg, mushrooms, peas, cooked ham, olives, rocket, oregano.", price: 9, allergens: [...PB, "uova"] },
          { name: "Salsiccia", description: "Pomodoro, mozzarella, salsiccia, olive, origano.", descriptionEN: "Tomato, mozzarella, sausage, olives, oregano.", price: 7, allergens: [...PB] },
          { name: "Salmone", description: "Pomodoro, mozzarella, salmone, olio, origano.", descriptionEN: "Tomato, mozzarella, salmon, oil, oregano.", price: 9, allergens: [...PB, "pesce"] },
          { name: "Speck e Mascarpone", description: "Pomodoro, mozzarella, speck, mascarpone, olio, origano.", descriptionEN: "Tomato, mozzarella, speck, mascarpone, oil, oregano.", price: 7.5, allergens: [...PB] },
          { name: "Al Pistacchio", description: "Pomodoro, mozzarella, pistacchio.", descriptionEN: "Tomato, mozzarella, pistachio.", price: 9, allergens: [...PB, "frutta_a_guscio"] },
          { name: "Bufalina", description: "Pomodoro, mozzarella di bufala, basilico, olio, origano.", descriptionEN: "Tomato, buffalo mozzarella, basil, oil, oregano.", price: 8.5, allergens: [...PB] },
          { name: "Pescatora", description: "Pomodoro, mozzarella, cozze, calamari, vongole, polipo, olio, origano.", descriptionEN: "Tomato, mozzarella, mussels, squid, clams, octopus, oil, oregano.", price: 9, allergens: [...PB, "molluschi"] },
          { name: "Salame e Uovo", description: "Pomodoro, mozzarella, salame piccante, uovo, olio, origano.", descriptionEN: "Tomato, mozzarella, spicy salami, egg, oil, oregano.", price: 7, allergens: [...PB, "uova"] },
        ],
      },
    ],
  },
  {
    slug: "panpizza-panini",
    nameIT: "Panpizza e Panini",
    nameEN: "Panpizza and Sandwiches",
    image: "/pan.webp",
    groups: [
      {
        name: "Panpizza",
        nameEN: "Panpizza",
        items: [
          { name: "Normale", description: "Pomodoro, mozzarella.", descriptionEN: "Tomato, mozzarella.", price: 5, allergens: [...PB] },
          { name: "Bufalino", description: "Pomodoro, mozzarella di bufala.", descriptionEN: "Tomato, buffalo mozzarella.", price: 8, allergens: [...PB] },
          { name: "Cotto", description: "Pomodoro, mozzarella, prosciutto cotto.", descriptionEN: "Tomato, mozzarella, cooked ham.", price: 6.5, allergens: [...PB] },
          { name: "Salame Piccantino", description: "Pomodoro, mozzarella, salame piccante, peperoncino.", descriptionEN: "Tomato, mozzarella, spicy salami, chili.", price: 6.5, allergens: [...PB] },
          { name: "Parma", description: "Pomodoro, mozzarella, prosciutto crudo, scaglie di grana.", descriptionEN: "Tomato, mozzarella, Parma ham, parmesan flakes.", price: 7.5, allergens: [...PB] },
          { name: "Salsiccia", description: "Pomodoro, mozzarella, salsiccia, peperoni, olive.", descriptionEN: "Tomato, mozzarella, sausage, peppers, olives.", price: 7, allergens: [...PB] },
          { name: "Vegetariano", description: "Pomodoro, mozzarella, melanzane grigliate, funghi, peperoni.", descriptionEN: "Tomato, mozzarella, grilled aubergine, mushrooms, peppers.", price: 7, allergens: [...PB] },
          { name: "Mortadella", description: "Mozzarella, mortadella, pesto di pistacchio.", descriptionEN: "Mozzarella, mortadella, pistachio pesto.", price: 8, allergens: [...PB, "frutta_a_guscio"] },
          { name: "Hot Dog", description: "Pomodoro, mozzarella, wurstel, patatine, ketchup, maionese.", descriptionEN: "Tomato, mozzarella, frankfurter, fries, ketchup, mayonnaise.", price: 7.5, allergens: [...PB, "uova"] },
          { name: "Hamburger", description: "Carne di bovino, mozzarella, pomodoro, lattuga, maionese.", descriptionEN: "Beef, mozzarella, tomato, lettuce, mayonnaise.", price: 7.5, allergens: [...PB, "uova"] },
        ],
      },
      {
        name: "Panini",
        nameEN: "Sandwiches",
        items: [
          { name: "Tonnato", description: "Pomodoro, mozzarella, tonno, cipolla, lattuga, maionese.", descriptionEN: "Tomato, mozzarella, tuna, onion, lettuce, mayonnaise.", price: 7, allergens: ["glutine", "latte", "pesce", "uova"] },
          { name: "Salmonato", description: "Mozzarella, salmone, maionese, lattuga.", descriptionEN: "Mozzarella, salmon, mayonnaise, lettuce.", price: 8.5, allergens: ["glutine", "latte", "pesce", "uova"] },
          { name: "Siciliano", description: "Pomodoro, mozzarella, acciughe, olive.", descriptionEN: "Tomato, mozzarella, anchovies, olives.", price: 7, allergens: ["glutine", "latte", "pesce"] },
        ],
      },
    ],
  },
  {
    slug: "insalatone",
    nameIT: "Insalatone",
    nameEN: "Salads",
    image: "/insalata.webp",
    groups: [
      {
        name: "Insalatone",
        nameEN: "Large Salads",
        items: [
          { name: "Insalata Caprese", description: "Pomodoro, mozzarella di bufala, basilico.", descriptionEN: "Tomato, buffalo mozzarella, basil.", price: 7, allergens: ["latte"] },
          { name: "Insalata Golosa", description: "Lattuga, patate, tonno, carote, olive, uovo, mais.", descriptionEN: "Lettuce, potatoes, tuna, carrots, olives, egg, corn.", price: 8, allergens: ["pesce", "uova"] },
          { name: "Insalata di Pollo", description: "Petto di pollo, rucola, olive, scaglie di grana, lattuga, mais.", descriptionEN: "Chicken breast, rocket, olives, parmesan flakes, lettuce, corn.", price: 8, allergens: ["latte"] },
          { name: "Insalata di Tonno", description: "Lattuga, tonno, pomodorini, olive, carote, mozzarelline.", descriptionEN: "Lettuce, tuna, cherry tomatoes, olives, carrots, mini mozzarella.", price: 8, allergens: ["pesce", "latte"] },
        ],
      },
    ],
  },
  {
    slug: "antipasti",
    nameIT: "Antipasti e Stuzzicheria",
    nameEN: "Starters and Snacks",
    image: "/antip.webp",
    groups: [
      {
        name: "Antipasti e Stuzzicheria",
        nameEN: "Starters and Snacks",
        items: [
          { name: "Antipasto Siciliano", description: "", descriptionEN: "", price: 8, allergens: [] },
          { name: "Bruschetta Pomodoro", description: "Pane tostato con pomodoro.", descriptionEN: "Toasted bread with tomato.", price: 5, allergens: ["glutine"] },
          { name: "Bruschetta Funghi Porcini", description: "Pane tostato con funghi porcini.", descriptionEN: "Toasted bread with porcini mushrooms.", price: 6, allergens: ["glutine"] },
          { name: "Patatine Fritte - Piatto Piccolo", description: "", descriptionEN: "", price: 3.5, allergens: [] },
          { name: "Patatine Fritte - Piatto Grande", description: "", descriptionEN: "", price: 5, allergens: [] },
          { name: "Patatine Fritte - Vassoio Piccolo", description: "", descriptionEN: "", price: 6, allergens: [] },
          { name: "Patatine Fritte - Vassoio Grande", description: "", descriptionEN: "", price: 12, allergens: [] },
        ],
      },
    ],
  },
  {
    slug: "primi-secondi",
    nameIT: "Primi, Secondi e Contorni",
    nameEN: "First, Second Courses and Sides",
    image: "/piatti.webp",
    groups: [
      {
        name: "Primi",
        nameEN: "First Courses",
        items: [
          { name: "Pennette alla Norma", description: "", descriptionEN: "", price: 7.5, allergens: ["glutine", "latte"] },
          { name: "Pennette al Pistacchio e Speck", description: "", descriptionEN: "", price: 7.5, allergens: ["glutine", "latte", "frutta_a_guscio"] },
          { name: "Pennette al Pomodoro", description: "", descriptionEN: "", price: 5.5, allergens: ["glutine"] },
          { name: "Pennette al Ragù", description: "", descriptionEN: "", price: 7, allergens: ["glutine"] },
          { name: "Spaghetti alla Carbonara", description: "", descriptionEN: "", price: 7, allergens: ["glutine", "latte", "uova"] },
          { name: "Maccheroni alla Norma", description: "", descriptionEN: "", price: 8, allergens: ["glutine", "latte"] },
        ],
      },
      {
        name: "Secondi e Grigliata",
        nameEN: "Second Courses and Grill",
        items: [
          { name: "Abbuffata del Blu", description: "Involtini misti, polpette, costoletta di maiale, salsiccia, bracioletta di vitello.", descriptionEN: "Mixed rolls, meatballs, pork chop, sausage, veal cutlet.", price: 15, allergens: ["glutine", "uova"] },
          { name: "Mix di Involtini", description: "Involtini alla Messinese, Philadelphia e pistacchio, prosciutto e mozzarella.", descriptionEN: "Messina-style rolls, Philadelphia and pistachio, ham and mozzarella.", price: 18, allergens: ["glutine", "latte", "uova", "frutta_a_guscio"] },
          { name: "Grigliata Mista", description: "Involtini misti, polpette, costoletta di maiale, salsiccia.", descriptionEN: "Mixed rolls, meatballs, pork chop, sausage.", price: 8, allergens: ["glutine", "uova"] },
        ],
      },
      {
        name: "Contorni",
        nameEN: "Side Dishes",
        items: [
          { name: "Insalata Verde", description: "", descriptionEN: "", price: 3.5, allergens: [] },
          { name: "Insalata di Pomodoro", description: "", descriptionEN: "", price: 3.5, allergens: [] },
          { name: "Insalata Mista", description: "", descriptionEN: "", price: 4.5, allergens: [] },
        ],
      },
    ],
  },
  {
    slug: "bevande",
    nameIT: "Bevande",
    nameEN: "Drinks",
    image: "/bevande.webp",
    groups: [
      {
        name: "Analcoliche",
        nameEN: "Non-Alcoholic",
        items: [
          { name: "Acqua Minerale 1 LT", price: 2, allergens: [] },
          { name: "Coca Cola 1 LT", price: 3.5, allergens: [] },
          { name: "Coca Cola 33 CL", price: 2, allergens: [] },
          { name: "Aranciata 33 CL", price: 2, allergens: [] },
          { name: "Sprite 33 CL", price: 2, allergens: [] },
        ],
      },
      {
        name: "Birre",
        nameEN: "Beers",
        items: [
          { name: "Birra Nazionale 33 CL", price: 2, allergens: ["glutine"] },
          { name: "Birra Nazionale 66 CL", price: 3.5, allergens: ["glutine"] },
          { name: "Birra Estera 33 CL", price: 2.5, allergens: ["glutine"] },
          { name: "Birra Estera 66 CL", price: 4.5, allergens: ["glutine"] },
        ],
      },
      {
        name: "Vini e Digestivi",
        nameEN: "Wines and Digestives",
        items: [
          { name: "Vino Locale 1 LT", price: 5, allergens: ["anidride_solforosa"] },
          { name: "Amaro - Grappa - Limoncello", nameEN: "Digestif", price: 2.5, allergens: [] },
        ],
      },
    ],
  },
];