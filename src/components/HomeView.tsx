"use client";

import { Lang, MenuCategory } from "@/data/menu";

interface HomeViewProps {
  lang: Lang;
  categories: MenuCategory[];
  onSelectCategory: (slug: string) => void;
  onSelectPasticceria: () => void;
}

export default function HomeView({ lang, categories, onSelectCategory, onSelectPasticceria }: HomeViewProps) {
  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: "20px 16px 100px" }}>
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "2.4rem", fontWeight: 700,
          color: "#082B4F", lineHeight: 1.15, marginBottom: 6,
        }}>
          Il nostro Menu
        </h1>
        <p style={{
          fontFamily: "'Jost', sans-serif", fontSize: "0.98rem",
          color: "#6B7C8F", letterSpacing: "0.12em",
          textTransform: "uppercase", fontWeight: 400,
        }}>
          Ristorante · Pizzeria
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => { if (!cat.unavailable) onSelectCategory(cat.slug); }}
            disabled={cat.unavailable}
            style={{
              position: "relative", borderRadius: 16,
              overflow: "hidden", aspectRatio: "1 / 1",
              border: "none", cursor: cat.unavailable ? "default" : "pointer",
              background: "#C8DCEF", padding: 0,
              opacity: cat.unavailable ? 0.55 : 1,
            }}
          >
            <img
              src={cat.image}
              alt={lang === "it" ? cat.nameIT : cat.nameEN}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(8,43,79,0.78) 0%, rgba(8,43,79,0.35) 55%, transparent 100%)",
              pointerEvents: "none",
            }} />
            {cat.unavailable && (
              <div style={{
                position: "absolute", top: 8, right: 8,
                background: "rgba(8,43,79,0.85)", borderRadius: 6,
                padding: "3px 8px",
              }}>
                <span style={{
                  fontFamily: "'Jost', sans-serif", fontSize: "0.62rem",
                  fontWeight: 600, color: "#FFFFFF",
                  letterSpacing: "0.05em", textTransform: "uppercase",
                }}>
                  {lang === "it" ? "Non disponibile" : "Unavailable"}
                </span>
              </div>
            )}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "12px 10px", display: "flex",
              alignItems: "flex-end", justifyContent: "center",
            }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.2rem", fontWeight: 700,
                color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,0.55)",
                textAlign: "center", lineHeight: 1.2,
              }}>
                {lang === "it" ? cat.nameIT : cat.nameEN}
              </span>
            </div>
          </button>
        ))}

        {/* Card pasticceria - occupa 2 colonne */}
        <button
          onClick={onSelectPasticceria}
          style={{
            gridColumn: "1 / -1", position: "relative",
            borderRadius: 16, overflow: "hidden",
            aspectRatio: "2 / 1", border: "none",
            cursor: "pointer", background: "#C8DCEF", padding: 0,
          }}
        >
          <img
            src="/pasticceria.jpg"
            alt={lang === "it" ? "Pasticceria" : "Pastry"}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(8,43,79,0.82) 0%, rgba(8,43,79,0.4) 50%, transparent 100%)",
            pointerEvents: "none",
          }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "18px 20px" }}>
            <p style={{
              fontFamily: "'Jost', sans-serif", fontSize: "0.72rem",
              color: "rgba(255,255,255,0.75)", letterSpacing: "0.2em",
              textTransform: "uppercase", marginBottom: 4,
            }}>
              {lang === "it" ? "Scopri" : "Discover"}
            </p>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.7rem", fontWeight: 700,
              color: "#FFFFFF", textShadow: "0 2px 12px rgba(0,0,0,0.5)",
              display: "block", lineHeight: 1.15,
            }}>
              {lang === "it" ? "La nostra Pasticceria" : "Our Pastry Shop"}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}