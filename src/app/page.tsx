import { createClient } from "@supabase/supabase-js";
import MenuApp from "@/components/MenuApp";
import { MenuCategory } from "@/data/menu";

export const revalidate = 60;

// Sostituisci con l'UUID da Supabase dopo INSERT
const CLIENT_ID = "1a4cdbc1-81a0-4953-8bda-115da092cbdf";

const STATIC_IMAGES: Record<string, string> = {
  "pizze-tradizionali": "/pizze.webp",
  "pizze-bianche": "/bianche.webp",
  "pizze-speciali": "/speciali.webp",
  "panpizza-panini": "/pan.webp",
  "insalatone": "/insalata.webp",
  "antipasti": "/antip.webp",
  "primi-secondi": "/piatti.webp",
  "bevande": "/bevande.webp",
};

async function getMenu(): Promise<MenuCategory[]> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase
    .from("manji_menus")
    .select("menu_data")
    .eq("client_id", CLIENT_ID)
    .single();

  if (error || !data?.menu_data?.categories) return [];

  const categories = data.menu_data.categories as any[];

  return categories.map((cat: any) => ({
    slug: cat.id ?? cat.slug,
    nameIT: cat.name?.it ?? cat.nameIT ?? cat.name ?? "",
    nameEN: cat.name?.en ?? cat.nameEN ?? "",
    image: STATIC_IMAGES[cat.id ?? cat.slug] ?? cat.image ?? "",
    groups: (cat.groups ?? [{ name: cat.name?.it ?? "", items: cat.items ?? [] }]).map((g: any) => ({
      name: g.name?.it ?? g.name ?? "",
      nameEN: g.name?.en ?? g.nameEN ?? "",
      supplements: g.supplements ?? [],
      items: (g.items ?? []).map((item: any) => ({
        name: item.name?.it ?? item.name ?? "",
        nameEN: item.name?.en ?? item.nameEN ?? "",
        description: item.desc?.it ?? item.description ?? "",
        descriptionEN: item.desc?.en ?? item.descriptionEN ?? "",
        price: item.price != null ? parseFloat(item.price) : null,
        available: item.available !== false,
        featured: item.featured ?? false,
        image: item.image ?? undefined,
        allergens: item.allergens ?? [],
      })),
    })),
  }));
}

export default async function Home() {
  const categories = await getMenu();
  return <MenuApp initialCategories={categories} />;
}