"use client";

import { MENU_CATEGORIES, Lang, Supplement } from "@/data/menu";

interface CategoryViewProps {
  slug: string;
  lang: Lang;
}

function fmtPrice(p: number) {
  return p.toFixed(2).replace(".", ",") + " €";
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
          fontSize: "1rem",
          fontWeight: 700,
          color: "#082B4F",
          marginBottom: 12,
          letterSpacing: "0.02em",
        }}
      >
        {lang === "it" ? "Supplementi" : "Extra Toppings"}
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 8px" }}>
        {supplements.map((s, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.78rem",
                color: "#082B4F",
                fontWeight: 400,
              }}
            >
              {lang === "it" ? s.name : (s.nameEN || s.name)}
            </span>
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.78rem",
                color: "#0B5CAD",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
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
      {/* Hero immagine categoria */}
      <div
        style={{
          borderRadius: 18,
          overflow: "hidden",
          position: "relative",
          height: 160,
          marginBottom: 24,
        }}
      >
        <img
          src={cat.image}
          alt={catName}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(8,43,79,0.7) 0%, rgba(8,43,79,0.2) 60%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 14,
            left: 16,
            right: 16,
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.6rem",
              fontWeight: 700,
              color: "#FFFFFF",
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              lineHeight: 1.15,
            }}
          >
            {catName}
          </h2>
        </div>
      </div>

      {/* Gruppi */}
      {cat.groups.map((group, gi) => (
        <div key={gi} style={{ marginBottom: 8 }}>
          {cat.groups.length > 1 && (
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#082B4F",
                marginBottom: 12,
                paddingBottom: 6,
                borderBottom: "1.5px solid rgba(8,43,79,0.1)",
              }}
            >
              {lang === "it" ? group.name : (group.nameEN || group.name)}
            </h3>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {group.items.map((item, ii) => {
              const name = lang === "it" ? item.name : (item.nameEN || item.name);
              const desc = lang === "it" ? item.description : (item.descriptionEN || item.description);
              return (
                <div
                  key={ii}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(8,43,79,0.07)",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        color: "#082B4F",
                        lineHeight: 1.25,
                        marginBottom: desc ? 3 : 0,
                      }}
                    >
                      {name}
                    </p>
                    {desc && (
                      <p
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontSize: "0.78rem",
                          color: "#6B7C8F",
                          lineHeight: 1.4,
                          fontWeight: 300,
                        }}
                      >
                        {desc}
                      </p>
                    )}
                  </div>
                  <span
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#0B5CAD",
                      whiteSpace: "nowrap",
                      paddingTop: 1,
                    }}
                  >
                    {fmtPrice(item.price)}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Supplementi sotto il gruppo, se presenti */}
          {group.supplements && group.supplements.length > 0 && (
            <SupplementsBox supplements={group.supplements} lang={lang} />
          )}
        </div>
      ))}
    </div>
  );
}
