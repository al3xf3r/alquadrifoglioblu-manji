"use client";

import { useState } from "react";
import { Lang } from "@/data/menu";

const DAYS_IT = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
const DAYS_EN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const HOURS: { day: number; closed?: boolean; slots?: string[] }[] = [
  { day: 0, slots: ["12:30 - 15:00", "19:30 - 22:00"] },
  { day: 1, slots: ["12:30 - 15:00", "19:30 - 22:00"] },
  { day: 2, slots: ["12:30 - 15:00", "19:30 - 22:00"] },
  { day: 3, slots: ["12:30 - 15:00", "19:30 - 22:00"] },
  { day: 4, closed: true },
  { day: 5, slots: ["12:30 - 15:00", "19:30 - 22:00"] },
  { day: 6, slots: ["12:30 - 15:00", "19:30 - 22:00"] },
];

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const [hoursOpen, setHoursOpen] = useState(false);
  const today = new Date().getDay();

  return (
    <footer
      style={{
        background: "#0B3F7A",
        color: "#FFFFFF",
        padding: "40px 20px 32px",
        marginTop: 0,
      }}
    >
      <div style={{ maxWidth: 480, margin: "0 auto" }}>
        {/* Nome grande */}
        <div style={{ textAlign: "center", marginBottom: 6 }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2.2rem",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "0.01em",
            }}
          >
            Al Quadrifoglio Blu
          </h2>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.65)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginTop: 6,
            }}
          >
            {lang === "it" ? "Ristorante · Pizzeria" : "Restaurant · Pizzeria"}
          </p>
        </div>

        {/* Separatore */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", margin: "20px 0" }} />

        {/* Indirizzo */}
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
            Via Regina Margherita, 26
            <br />
            Francavilla di Sicilia (ME)
          </p>
        </div>

        {/* CTA bottoni */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 24 }}>
          <a
            href="tel:0942982047"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "#FFFFFF",
              color: "#082B4F",
              borderRadius: 10,
              padding: "10px 18px",
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#082B4F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            {lang === "it" ? "Chiama" : "Call"}
          </a>
          <a
            href="https://maps.app.goo.gl/EA1GJx34LowjWKn98?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "#FFFFFF",
              color: "#082B4F",
              borderRadius: 10,
              padding: "10px 18px",
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#082B4F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {lang === "it" ? "Indicazioni" : "Directions"}
          </a>
        </div>

        {/* Social */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 24 }}>
          <a
            href="https://www.instagram.com/quadrifoglio.blu?igsh=MXdja2N5Z3Jvdmt3Yw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{ color: "rgba(255,255,255,0.75)", display: "flex" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/share/18qmngthB2/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            style={{ color: "rgba(255,255,255,0.75)", display: "flex" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
        </div>

        {/* Orari a tendina */}
        <div style={{ marginBottom: 24 }}>
          <button
            onClick={() => setHoursOpen(!hoursOpen)}
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 10,
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              color: "#FFFFFF",
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 500,
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {lang === "it" ? "Orari di apertura" : "Opening hours"}
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transform: hoursOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s" }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {hoursOpen && (
            <div
              style={{
                marginTop: 6,
                background: "rgba(255,255,255,0.06)",
                borderRadius: 10,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {HOURS.map((h) => {
                const isToday = h.day === today;
                const dayNames = lang === "it" ? DAYS_IT : DAYS_EN;
                return (
                  <div
                    key={h.day}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 16px",
                      background: isToday ? "rgba(255,255,255,0.1)" : "transparent",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "0.82rem",
                        color: isToday ? "#FFFFFF" : "rgba(255,255,255,0.7)",
                        fontWeight: isToday ? 600 : 400,
                      }}
                    >
                      {dayNames[h.day]}
                      {isToday && (
                        <span
                          style={{
                            marginLeft: 6,
                            fontSize: "0.65rem",
                            background: "rgba(255,255,255,0.2)",
                            borderRadius: 4,
                            padding: "1px 5px",
                            verticalAlign: "middle",
                            fontWeight: 600,
                          }}
                        >
                          {lang === "it" ? "oggi" : "today"}
                        </span>
                      )}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "0.82rem",
                        color: h.closed ? "rgba(255,255,255,0.4)" : (isToday ? "#FFFFFF" : "rgba(255,255,255,0.7)"),
                        fontWeight: isToday ? 600 : 400,
                      }}
                    >
                      {h.closed
                        ? (lang === "it" ? "Chiuso" : "Closed")
                        : h.slots?.join(" · ")}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* CTA menu digitale */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>
            {lang === "it" ? "Vuoi un menu digitale per il tuo locale?" : "Want a digital menu for your venue?"}
          </p>
          <a
            href="https://manji.hash42.xyz"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#FFFFFF",
              borderRadius: 10,
              padding: "9px 20px",
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
          >
            {lang === "it" ? "Crea il tuo menu digitale" : "Create your digital menu"}
          </a>
        </div>

        {/* Credit */}
        <div style={{ textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 16 }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)" }}>
            {lang === "it" ? "Sviluppato da" : "Developed by"}{" "}
            <a
              href="https://hash42.xyz"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none", fontWeight: 500 }}
            >
              Hash42
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}