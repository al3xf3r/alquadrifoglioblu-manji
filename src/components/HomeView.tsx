"use client";

import { MENU_CATEGORIES, Lang } from "@/data/menu";

interface HomeViewProps {
  lang: Lang;
  onSelectCategory: (slug: string) => void;
}

export default function HomeView({ lang, onSelectCategory }: HomeViewProps) {
  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: "20px 16px 100px" }}>
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "2.4rem",
            fontWeight: 700,
            color: "#082B4F",
            lineHeight: 1.15,
            marginBottom: 6,
          }}
        >
          Il nostro Menu
        </h1>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.98rem",
            color: "#6B7C8F",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 400,
          }}
        >
          Ristorante · Pizzeria
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
        }}
      >
        {MENU_CATEGORIES.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => onSelectCategory(cat.slug)}
            style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              aspectRatio: "1 / 1",
              border: "none",
              cursor: "pointer",
              background: "#C8DCEF",
              padding: 0,
            }}
          >
            {/* Immagine diretta senza FadeImage — evita bug onLoad con cache */}
            <img
              src={cat.image}
              alt={lang === "it" ? cat.nameIT : cat.nameEN}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Overlay gradiente dal basso */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(8,43,79,0.78) 0%, rgba(8,43,79,0.35) 55%, transparent 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Testo */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "12px 10px",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  textShadow: "0 1px 8px rgba(0,0,0,0.55)",
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                {lang === "it" ? cat.nameIT : cat.nameEN}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
