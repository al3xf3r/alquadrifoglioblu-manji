import { Allergen } from "./menu";

export interface PasticceraItem {
  id: string;
  name: string;
  nameEN: string;
  description: string;
  descriptionEN: string;
  ingredients: string;
  ingredientsEN: string;
  image: string;
  allergens: Allergen[];
}

export const PASTICCERIA_ITEMS: PasticceraItem[] = [
  {
    id: "man1",
    name: "Classica",
    nameEN: "Classic Almond Pastry",
    description: "La tradizionale specialità siciliana, morbida e profumata.",
    descriptionEN: "Traditional Sicilian almond pastry, soft and fragrant.",
    ingredients: "Zucchero, mandorle, miele, albume d'uovo, aromi naturali. Peso netto circa 30g.",
    ingredientsEN: "Sugar, almonds, honey, egg white, natural flavourings. Net weight approx. 30g.",
    image: "/man1.webp",
    allergens: ["frutta_a_guscio", "uova"],
  },
  {
    id: "man2",
    name: "Ciliegina",
    nameEN: "Cherry Almond Pastry",
    description: "Decorata con una ciliegia candita e dal gusto delicato.",
    descriptionEN: "Decorated with a candied cherry and delicate flavour.",
    ingredients: "Zucchero, mandorle, miele, albume d'uovo, aromi naturali, ciliegina. Peso netto circa 30g.",
    ingredientsEN: "Sugar, almonds, honey, egg white, natural flavourings, candied cherry. Net weight approx. 30g.",
    image: "/man2.webp",
    allergens: ["frutta_a_guscio", "uova"],
  },
  {
    id: "man3",
    name: "Mandorla Intera",
    nameEN: "Whole Almond Pastry",
    description: "Guarnita con una mandorla intera e leggermente tostata.",
    descriptionEN: "Finished with a whole lightly toasted almond.",
    ingredients: "Zucchero, mandorle, miele, albume d'uovo, aromi naturali. Peso netto circa 30g.",
    ingredientsEN: "Sugar, almonds, honey, egg white, natural flavourings. Net weight approx. 30g.",
    image: "/man3.webp",
    allergens: ["frutta_a_guscio", "uova"],
  },
  {
    id: "man4",
    name: "Pistacchio",
    nameEN: "Pistachio Almond Pastry",
    description: "Ricoperta da croccante granella di pistacchio.",
    descriptionEN: "Coated with crunchy pistachio crumble.",
    ingredients: "Zucchero, mandorle, pistacchio, miele, albume d'uovo, aromi naturali. Peso netto circa 30g.",
    ingredientsEN: "Sugar, almonds, pistachio, honey, egg white, natural flavourings. Net weight approx. 30g.",
    image: "/man4.webp",
    allergens: ["frutta_a_guscio", "uova"],
  },
  {
    id: "man5",
    name: "Croccante",
    nameEN: "Crunchy Almond Pastry",
    description: "Avvolta da una golosa granella di mandorle tostate.",
    descriptionEN: "Covered with toasted almond crumble for extra crunch.",
    ingredients: "Zucchero, mandorle, miele, albume d'uovo, aromi naturali. Peso netto circa 30g.",
    ingredientsEN: "Sugar, almonds, honey, egg white, natural flavourings. Net weight approx. 30g.",
    image: "/man5.webp",
    allergens: ["frutta_a_guscio", "uova"],
  },
];