"use client";
import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [show, setShow] = useState<boolean | null>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("quadrifoglio_seen");
    if (seen) {
      setShow(false);
    } else {
      setShow(true);
      sessionStorage.setItem("quadrifoglio_seen", "1");
      const t1 = setTimeout(() => setFading(true), 1800);
      const t2 = setTimeout(() => setShow(false), 2400);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, []);

  if (show === null || !show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        background: "#EEF7FF",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.6s ease",
      }}
    >
      <img
        src="/logo.png"
        alt="Al Quadrifoglio Blu"
        style={{ width: 120, height: 120, objectFit: "contain" }}
      />
      <p
        className="mt-4 text-lg tracking-widest uppercase"
        style={{
          fontFamily: "'Jost', sans-serif",
          color: "#082B4F",
          letterSpacing: "0.25em",
          fontSize: "0.75rem",
        }}
      >
        Al Quadrifoglio Blu
      </p>
    </div>
  );
}
