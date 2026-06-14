"use client";
import { useEffect, useState } from "react";

export default function IntroLoader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"pre" | "enter" | "hold" | "exit">("pre");

  useEffect(() => {
    const seen = sessionStorage.getItem("quadrifoglio_seen");
    if (seen) {
      onDone();
      return;
    }
    sessionStorage.setItem("quadrifoglio_seen", "1");

    const t0 = setTimeout(() => setPhase("enter"), 80);
    const t1 = setTimeout(() => setPhase("hold"), 1000);
    const t2 = setTimeout(() => setPhase("exit"), 2600);
    const t3 = setTimeout(() => onDone(), 3350);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  const isExit = phase === "exit";
  const isActive = phase === "enter" || phase === "hold";

  return (
    <>
      <style>{`
        @keyframes clover-arrive {
          0%   { transform: scale(0) rotate(-270deg); opacity: 0; filter: blur(8px) drop-shadow(0 0 0px rgba(11,92,173,0)); }
          55%  { transform: scale(1.18) rotate(12deg); opacity: 1; filter: blur(0px) drop-shadow(0 0 32px rgba(11,92,173,0.5)); }
          75%  { transform: scale(0.93) rotate(-5deg); filter: blur(0px) drop-shadow(0 0 18px rgba(11,92,173,0.35)); }
          90%  { transform: scale(1.03) rotate(2deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; filter: blur(0px) drop-shadow(0 8px 24px rgba(11,92,173,0.25)); }
        }
        @keyframes clover-float {
          0%, 100% { transform: scale(1) translateY(0px); }
          50%       { transform: scale(1.03) translateY(-5px); }
        }
        @keyframes clover-exit {
          0%   { transform: scale(1) rotate(0deg); opacity: 1; }
          100% { transform: scale(0) rotate(180deg); opacity: 0; }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50%       { opacity: 0.9; transform: scale(1.12); }
        }
        @keyframes ring-expand {
          0%   { transform: scale(0.6); opacity: 0.6; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        @keyframes text-rise {
          0%   { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        @keyframes line-expand {
          0%   { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        @keyframes dot-fade {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50%       { opacity: 1;   transform: scale(1.2); }
        }
        @keyframes bg-breathe {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }
        @keyframes shimmer-sweep {
          0%   { transform: translateX(-100%) rotate(25deg); }
          100% { transform: translateX(300%) rotate(25deg); }
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "linear-gradient(135deg, #EEF7FF 0%, #D6ECFF 50%, #EEF7FF 100%)",
          backgroundSize: "200% 200%",
          animation: "bg-breathe 4s ease infinite",
          opacity: isExit ? 0 : 1,
          transition: isExit ? "opacity 0.75s cubic-bezier(0.4,0,0.2,1)" : "none",
          pointerEvents: isExit ? "none" : "all",
        }}
      >
        {/* Cerchi concentrici pulsanti */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: i * 180,
              height: i * 180,
              borderRadius: "50%",
              border: "1px solid rgba(11,92,173,0.12)",
              animation: isActive ? `ring-expand ${2.5 + i * 0.4}s ease-out ${i * 0.3}s infinite` : "none",
              opacity: 0,
            }}
          />
        ))}

        {/* Glow radiale */}
        <div
          style={{
            position: "absolute",
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(11,92,173,0.12) 0%, transparent 70%)",
            animation: isActive ? "glow-pulse 2.2s ease-in-out infinite" : "none",
          }}
        />

        {/* Logo */}
        <div style={{ position: "relative", width: 120, height: 120 }}>
          {isActive && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                overflow: "hidden",
                zIndex: 3,
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-50%",
                  left: 0,
                  width: "40%",
                  height: "200%",
                  background: "linear-gradient(to right, transparent, rgba(255,255,255,0.45), transparent)",
                  animation: "shimmer-sweep 2.8s ease-in-out 1.2s infinite",
                }}
              />
            </div>
          )}
          <img
            src="/logo.png"
            alt="Al Quadrifoglio Blu"
            style={{
              width: 120,
              height: 120,
              objectFit: "contain",
              position: "relative",
              zIndex: 2,
              animation: isActive
                ? "clover-arrive 0.9s cubic-bezier(0.34,1.4,0.64,1) forwards, clover-float 3s ease-in-out 1.2s infinite"
                : isExit
                ? "clover-exit 0.6s cubic-bezier(0.4,0,0.2,1) forwards"
                : "none",
              opacity: phase === "pre" ? 0 : undefined,
            }}
          />
        </div>

        {/* Testo */}
        <div
          style={{
            marginTop: 28,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            animation: isActive ? "text-rise 0.6s cubic-bezier(0.34,1.2,0.64,1) 0.75s both" : "none",
            opacity: phase === "pre" || phase === "enter" ? 0 : undefined,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <div
              style={{
                height: 1,
                width: 48,
                background: "linear-gradient(to right, transparent, rgba(8,43,79,0.3))",
                transformOrigin: "right",
                animation: isActive ? "line-expand 0.5s ease 1s both" : "none",
              }}
            />
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#0B5CAD",
                animation: isActive ? "dot-fade 2s ease-in-out 1.2s infinite" : "none",
              }}
            />
            <div
              style={{
                height: 1,
                width: 48,
                background: "linear-gradient(to left, transparent, rgba(8,43,79,0.3))",
                transformOrigin: "left",
                animation: isActive ? "line-expand 0.5s ease 1s both" : "none",
              }}
            />
          </div>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.7rem",
              fontWeight: 600,
              color: "#082B4F",
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
              lineHeight: 1,
            }}
          >
            Al Quadrifoglio Blu
          </h1>

          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              color: "#6B7C8F",
              letterSpacing: "0.22em",
              fontSize: "0.6rem",
              textTransform: "uppercase",
              fontWeight: 400,
              animation: isActive ? "text-rise 0.5s ease 1.05s both" : "none",
              opacity: phase === "pre" || phase === "enter" ? 0 : undefined,
            }}
          >
            Ristorante · Pizzeria
          </p>
        </div>
      </div>
    </>
  );
}