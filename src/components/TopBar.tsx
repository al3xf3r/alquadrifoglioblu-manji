"use client";

import { Lang } from "@/data/menu";

interface TopBarProps {
  lang: Lang;
  onLangToggle: () => void;
  onBack?: () => void;
  onSearchOpen: () => void;
  title?: string;
}

export default function TopBar({ lang, onLangToggle, onBack, onSearchOpen, title }: TopBarProps) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        background: "rgba(238,247,255,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(8,43,79,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          maxWidth: 480,
          margin: "0 auto",
        }}
      >
        {/* Left: back or logo */}
        <div style={{ width: 40, display: "flex", alignItems: "center" }}>
          {onBack ? (
            <button
              onClick={onBack}
              aria-label="Indietro"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 4,
                color: "#082B4F",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#082B4F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>
          ) : (
            <img src="/logo.png" alt="Logo" style={{ width: 36, height: 36, objectFit: "contain" }} />
          )}
        </div>

        {/* Center */}
        <div style={{ flex: 1, textAlign: "center" }}>
          {title ? (
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.15rem",
                fontWeight: 600,
                color: "#082B4F",
                letterSpacing: "0.02em",
              }}
            >
              {title}
            </span>
          ) : (
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#082B4F",
                letterSpacing: "0.03em",
              }}
            >
              Al Quadrifoglio Blu
            </span>
          )}
        </div>

        {/* Right: search + lang */}
        <div style={{ width: 40, display: "flex", alignItems: "center", gap: 10, justifyContent: "flex-end" }}>
          <button
            onClick={onSearchOpen}
            aria-label="Cerca"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#082B4F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          <button
            onClick={onLangToggle}
            style={{
              background: "none",
              border: "1.5px solid #0B5CAD",
              borderRadius: 6,
              padding: "2px 7px",
              fontSize: "0.7rem",
              fontFamily: "'Jost', sans-serif",
              fontWeight: 600,
              color: "#0B5CAD",
              cursor: "pointer",
              letterSpacing: "0.05em",
            }}
          >
            {lang === "it" ? "EN" : "IT"}
          </button>
        </div>
      </div>
    </header>
  );
}
