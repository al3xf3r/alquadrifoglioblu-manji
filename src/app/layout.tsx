import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al Quadrifoglio Blu | Ristorante Pizzeria",
  description: "Ristorante Pizzeria a Francavilla di Sicilia. Scopri il nostro menu con pizze tradizionali, piatti siciliani e molto altro.",
  openGraph: {
    title: "Al Quadrifoglio Blu",
    description: "Ristorante Pizzeria a Francavilla di Sicilia (ME)",
    images: ["/og-quadrifoglio.jpg"],
  },
};

const CATEGORY_IMAGES = [
  "/pizze.webp",
  "/bianche.webp",
  "/speciali.webp",
  "/pan.webp",
  "/insalata.webp",
  "/antip.webp",
  "/piatti.webp",
  "/bevande.webp",
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Preload immagini categorie — partono prima di React */}
        {CATEGORY_IMAGES.map((src) => (
          <link key={src} rel="preload" as="image" href={src} />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}