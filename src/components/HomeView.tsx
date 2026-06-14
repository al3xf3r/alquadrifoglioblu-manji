"use client";

import { MENU_CATEGORIES, Lang } from "@/data/menu";
import FadeImage from "./FadeImage";

interface HomeViewProps {
  lang: Lang;
  onSelectCategory: (slug: string) => void;
}

export default function HomeView({ lang, onSelectCategory }: HomeViewProps) {
  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: "20px 16px 100px" }}>
      {/* Header intro */}
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "2rem",
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
            fontSize: "0.82rem",
            color: "#6B7C8F",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 400,
          }}
        >
          Ristorante · Pizzeria · Pub
        </p>
      </div>

      {/* Grid 2x2 */}
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
              background: "#082B4F",
              padding: 0,
            }}
          >
            <FadeImage
              src={cat.image}
              alt={lang === "it" ? cat.nameIT : cat.nameEN}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay gradiente dal basso */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(8,43,79,0.75) 0%, rgba(8,43,79,0.35) 55%, transparent 100%)",
              }}
            />
            {/* Testo centrato */}
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
                  fontSize: "1rem",
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
