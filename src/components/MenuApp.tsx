"use client";

import { useState } from "react";
import { Lang, MENU_CATEGORIES } from "@/data/menu";
import IntroLoader from "./IntroLoader";
import TopBar from "./TopBar";
import HomeView from "./HomeView";
import CategoryView from "./CategoryView";
import SearchOverlay from "./SearchOverlay";
import Footer from "./Footer";

export default function MenuApp() {
  const [lang, setLang] = useState<Lang>("it");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const activeCat = activeCategory
    ? (lang === "it"
        ? MENU_CATEGORIES.find((c) => c.slug === activeCategory)?.nameIT
        : MENU_CATEGORIES.find((c) => c.slug === activeCategory)?.nameEN)
    : undefined;

  return (
    <>
      <IntroLoader />

      {searchOpen && (
        <SearchOverlay
          lang={lang}
          onClose={() => setSearchOpen(false)}
          onSelectCategory={(slug) => {
            setActiveCategory(slug);
            setSearchOpen(false);
          }}
        />
      )}

      <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
        <TopBar
          lang={lang}
          onLangToggle={() => setLang(lang === "it" ? "en" : "it")}
          onBack={activeCategory ? () => setActiveCategory(null) : undefined}
          onSearchOpen={() => setSearchOpen(true)}
          title={activeCat}
        />

        <main style={{ flex: 1 }}>
          {activeCategory ? (
            <CategoryView slug={activeCategory} lang={lang} />
          ) : (
            <HomeView lang={lang} onSelectCategory={setActiveCategory} />
          )}
        </main>

        <Footer lang={lang} />
      </div>
    </>
  );
}
