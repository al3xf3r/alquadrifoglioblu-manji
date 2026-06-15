"use client";

import { PASTICCERIA_ITEMS } from "@/data/pasticceria";
import { Lang, ALLERGEN_LABELS, Allergen } from "@/data/menu";

interface PasticceraViewProps {
  lang: Lang;
}

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
        padding: "2px 7px",
        fontSize: "0.72rem",
        fontFamily: "'Jost', sans-serif",
        fontWeight: 500,
        color: "#0B5CAD",
        whiteSpace: "nowrap",
      }}
    >
      {lang === "it" ? label.it : label.en}
    </span>
  );
}

export default function PasticceraView({ lang }: PasticceraViewProps) {
  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: "20px 16px 100px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "2.4rem",
            fontWeight: 700,
            color: "#082B4F",
            lineHeight: 1.1,
            marginBottom: 8,
          }}
        >
          {lang === "it" ? "Pasticceria" : "Pastry"}
        </h1>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.85rem",
            color: "#6B7C8F",
            lineHeight: 1.5,
            fontWeight: 300,
          }}
        >
          {lang === "it"
            ? "Dolci artigianali della tradizione siciliana"
            : "Artisan sweets from the Sicilian tradition"}
        </p>
      </div>

      {/* Card grandi una per prodotto */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {PASTICCERIA_ITEMS.map((item) => {
          const name = lang === "it" ? item.name : item.nameEN;
          const desc = lang === "it" ? item.description : item.descriptionEN;
          const ingredients = lang === "it" ? item.ingredients : item.ingredientsEN;

          return (
            <div
              key={item.id}
              style={{
                borderRadius: 20,
                overflow: "hidden",
                background: "#FFFFFF",
                boxShadow: "0 2px 20px rgba(8,43,79,0.08)",
                border: "1px solid rgba(8,43,79,0.06)",
              }}
            >
              {/* Immagine prodotto */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#C8DCEF" }}>
                <img
                  src={item.image}
                  alt={name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* Contenuto */}
              <div style={{ padding: "18px 18px 20px" }}>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.45rem",
                    fontWeight: 700,
                    color: "#082B4F",
                    lineHeight: 1.2,
                    marginBottom: 6,
                  }}
                >
                  {name}
                </h2>

                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.88rem",
                    color: "#6B7C8F",
                    lineHeight: 1.5,
                    fontWeight: 300,
                    marginBottom: 10,
                  }}
                >
                  {desc}
                </p>

                {/* Ingredienti */}
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.78rem",
                    color: "#9BAAB8",
                    lineHeight: 1.5,
                    fontWeight: 300,
                    fontStyle: "italic",
                    marginBottom: 12,
                  }}
                >
                  {ingredients}
                </p>

                {/* Allergeni */}
                {item.allergens.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {item.allergens.map((a) => (
                      <AllergenBadge key={a} allergen={a} lang={lang} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Nota allergeni */}
      <p
        style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "0.72rem",
          color: "#6B7C8F",
          marginTop: 32,
          lineHeight: 1.5,
          fontWeight: 300,
        }}
      >
        {lang === "it"
          ? "Gli allergeni indicati sono basati sugli ingredienti dichiarati. Per allergie gravi o intolleranze, si prega di informare il personale prima di ordinare."
          : "Allergens listed are based on declared ingredients. For severe allergies or intolerances, please inform staff before ordering."}
      </p>
    </div>
  );
}