"use client";

import { MENU_CATEGORIES, Lang, Supplement, Allergen, ALLERGEN_LABELS } from "@/data/menu";

interface CategoryViewProps {
  slug: string;
  lang: Lang;
}

function fmtPrice(p: number) {
  return p.toFixed(2).replace(".", ",") + " €";
}

// SVG per ogni allergene
const ALLERGEN_SVG: Record<string, React.ReactNode> = {
  glutine: (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 00-3 19.5M12 2a10 10 0 013 19.5M12 2v20M2 12h20" />
    </svg>
  ),
  latte: (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2h8l2 6v12a1 1 0 01-1 1H7a1 1 0 01-1-1V8L8 2z" />
    </svg>
  ),
  uova: (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="13" rx="7" ry="9" />
    </svg>
  ),
  pesce: (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  molluschi: (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C7 2 3 7 3 12s4 10 9 10 9-5 9-10S17 2 12 2z" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  ),
  frutta_a_guscio: (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
    </svg>
  ),
  anidride_solforosa: (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-3" />
      <path d="M18 2l4 4-10 10H8v-4L18 2z" />
    </svg>
  ),
};

function AllergenBadge({ allergen, lang }: { allergen: Allergen; lang: Lang }) {
  const label = ALLERGEN_LABELS[allergen];
  if (!label) return null;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 3,
        background: "rgba(11,92,173,0.08)",
        border: "1px solid rgba(11,92,173,0.18)",
        borderRadius: 5,
        padding: "2px 6px",
        fontSize: "0.7rem",
        fontFamily: "'Jost', sans-serif",
        fontWeight: 500,
        color: "#0B5CAD",
        whiteSpace: "nowrap",
      }}
    >
      {ALLERGEN_SVG[allergen] ?? null}
      {lang === "it" ? label.it : label.en}
    </span>
  );
}

function SupplementsBox({ supplements, lang }: { supplements: Supplement[]; lang: Lang }) {
  return (
    <div
      style={{
        margin: "24px 0 0",
        borderRadius: 14,
        border: "1.5px solid rgba(11,92,173,0.2)",
        background: "rgba(11,92,173,0.04)",
        padding: "16px 14px",
      }}
    >
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.2rem",
          fontWeight: 700,
          color: "#082B4F",
          marginBottom: 12,
          letterSpacing: "0.02em",
        }}
      >
        {lang === "it" ? "Supplementi" : "Extra Toppings"}
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 10px" }}>
        {supplements.map((s, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 4 }}>
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.94rem", color: "#082B4F", fontWeight: 400 }}>
              {lang === "it" ? s.name : (s.nameEN || s.name)}
            </span>
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.94rem", color: "#0B5CAD", fontWeight: 600, whiteSpace: "nowrap" }}>
              +{fmtPrice(s.price)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CategoryView({ slug, lang }: CategoryViewProps) {
  const cat = MENU_CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return null;

  const catName = lang === "it" ? cat.nameIT : cat.nameEN;

  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: "20px 16px 100px" }}>
      {/* Hero */}
      <div style={{ borderRadius: 18, overflow: "hidden", position: "relative", height: 160, marginBottom: 24 }}>
        <img src={cat.image} alt={catName} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,43,79,0.7) 0%, rgba(8,43,79,0.2) 60%, transparent 100%)" }} />
        <div style={{ position: "absolute", bottom: 14, left: 16, right: 16 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.9rem", fontWeight: 700, color: "#FFFFFF", textShadow: "0 2px 10px rgba(0,0,0,0.5)", lineHeight: 1.15 }}>
            {catName}
          </h2>
        </div>
      </div>

      {/* Gruppi */}
      {cat.groups.map((group, gi) => (
        <div key={gi} style={{ marginBottom: 8 }}>
          {cat.groups.length > 1 && (
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.45rem", fontWeight: 700, color: "#082B4F", marginBottom: 12, paddingBottom: 6, borderBottom: "1.5px solid rgba(8,43,79,0.1)" }}>
              {lang === "it" ? group.name : (group.nameEN || group.name)}
            </h3>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {group.items.map((item, ii) => {
              const name = lang === "it" ? item.name : (item.nameEN || item.name);
              const desc = lang === "it" ? item.description : (item.descriptionEN || item.description);
              const allergens = item.allergens ?? [];
              return (
                <div key={ii} style={{ padding: "14px 0", borderBottom: "1px solid rgba(8,43,79,0.07)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 600, color: "#082B4F", lineHeight: 1.25, marginBottom: desc ? 4 : 0 }}>
                        {name}
                      </p>
                      {desc && (
                        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.92rem", color: "#6B7C8F", lineHeight: 1.45, fontWeight: 300, marginBottom: allergens.length > 0 ? 8 : 0 }}>
                          {desc}
                        </p>
                      )}
                      {allergens.length > 0 && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: desc ? 0 : 6 }}>
                          {allergens.map((a) => (
                            <AllergenBadge key={a} allergen={a} lang={lang} />
                          ))}
                        </div>
                      )}
                    </div>
                    {item.price !== undefined && (
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.1rem", fontWeight: 600, color: "#0B5CAD", whiteSpace: "nowrap", paddingTop: 1 }}>
                        {fmtPrice(item.price)}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {group.supplements && group.supplements.length > 0 && (
            <SupplementsBox supplements={group.supplements} lang={lang} />
          )}
        </div>
      ))}

      {/* Nota legale allergeni */}
      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", color: "#6B7C8F", marginTop: 32, lineHeight: 1.5, fontWeight: 300 }}>
        {lang === "it"
          ? "Gli allergeni indicati sono basati sugli ingredienti dichiarati. Per allergie gravi o intolleranze, si prega di informare il personale prima di ordinare."
          : "Allergens listed are based on declared ingredients. For severe allergies or intolerances, please inform staff before ordering."}
      </p>
    </div>
  );
}
