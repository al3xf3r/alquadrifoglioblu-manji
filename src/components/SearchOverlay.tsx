"use client";

import { useState, useEffect, useRef } from "react";
import { MenuCategory, Lang } from "@/data/menu";

interface SearchResult {
  itemName: string;
  description?: string;
  price?: number | null;
  categorySlug: string;
  categoryName: string;
}

interface SearchOverlayProps {
  lang: Lang;
  categories: MenuCategory[];
  onClose: () => void;
  onSelectCategory: (slug: string) => void;
}

function highlight(text: string, query: string) {
  if (!query.trim()) return <>{text}</>;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} style={{ background: "rgba(11,92,173,0.18)", color: "#082B4F", borderRadius: 3, padding: "0 1px" }}>
            {part}
          </mark>
        ) : part
      )}
    </>
  );
}

function fmtPrice(p: number) { return p.toFixed(2).replace(".", ",") + " €"; }

export default function SearchOverlay({ lang, categories, onClose, onSelectCategory }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setTimeout(() => inputRef.current?.focus(), 100); }, []);

  const results: SearchResult[] = [];
  if (query.trim().length >= 2) {
    const q = query.toLowerCase();
    categories.forEach((cat) => {
      const catName = lang === "it" ? cat.nameIT : cat.nameEN;
      cat.groups.forEach((group) => {
        group.items.forEach((item) => {
          const name = lang === "it" ? item.name : (item.nameEN || item.name);
          const desc = lang === "it" ? item.description : (item.descriptionEN || item.description);
          if (name.toLowerCase().includes(q) || (desc && desc.toLowerCase().includes(q))) {
            results.push({ itemName: name, description: desc, price: item.price, categorySlug: cat.slug, categoryName: catName });
          }
        });
      });
    });
  }

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 40, background: "rgba(238,247,255,0.97)", backdropFilter: "blur(16px)", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 16px", borderBottom: "1px solid rgba(8,43,79,0.1)", maxWidth: 480, margin: "0 auto", width: "100%" }}>
        <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 10, background: "rgba(8,43,79,0.06)", borderRadius: 12, padding: "8px 14px" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7C8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === "it" ? "Cerca nel menu..." : "Search the menu..."}
            style={{ flex: 1, background: "none", border: "none", outline: "none", fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", color: "#082B4F" }}
          />
        </div>
        <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: "#0B5CAD", fontWeight: 500, padding: "4px 8px" }}>
          {lang === "it" ? "Chiudi" : "Close"}
        </button>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "12px 16px" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          {query.trim().length >= 2 && results.length === 0 && (
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", color: "#6B7C8F", textAlign: "center", marginTop: 40 }}>
              {lang === "it" ? "Nessun risultato trovato." : "No results found."}
            </p>
          )}
          {results.map((r, i) => (
            <button key={i} onClick={() => { onSelectCategory(r.categorySlug); onClose(); }}
              style={{ width: "100%", background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: "12px 0", borderBottom: "1px solid rgba(8,43,79,0.07)", display: "block" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontWeight: 600, color: "#082B4F", marginBottom: 2 }}>
                    {highlight(r.itemName, query)}
                  </p>
                  {r.description && (
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "#6B7C8F", fontWeight: 300, marginBottom: 4 }}>
                      {highlight(r.description, query)}
                    </p>
                  )}
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", color: "#0B5CAD", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    {r.categoryName}
                  </span>
                </div>
                {r.price != null && (
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#0B5CAD", whiteSpace: "nowrap" }}>
                    {fmtPrice(r.price)}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}