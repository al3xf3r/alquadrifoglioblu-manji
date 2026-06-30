"use client";

import { useState, useEffect } from "react";
import { Lang, MenuCategory } from "@/data/menu";
import IntroLoader from "./IntroLoader";
import TopBar from "./TopBar";
import HomeView from "./HomeView";
import CategoryView from "./CategoryView";
import PasticceraView from "./PasticceraView";
import SearchOverlay from "./SearchOverlay";
import Footer from "./Footer";

const SESSION_KEY = "qb_intro_seen";
type View = "home" | "category" | "pasticceria";

interface MenuAppProps {
  initialCategories: MenuCategory[];
}

export default function MenuApp({ initialCategories }: MenuAppProps) {
  const [lang, setLang] = useState<Lang>("it");
  const [view, setView] = useState<View>("home");
  const [activeCat, setActiveCat] = useState<MenuCategory | null>(null);
  const [showIntro, setShowIntro] = useState<boolean | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(SESSION_KEY);
    setShowIntro(seen ? false : true);
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setShowIntro(false);
  };

  useEffect(() => {
    const onPop = () => {
      if (view !== "home") {
        setView("home");
        setActiveCat(null);
      }
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [view]);

  const openCategory = (slug: string) => {
    const cat = initialCategories.find((c) => c.slug === slug) ?? null;
    if (!cat) return;
    window.history.pushState({ slug }, "");
    setActiveCat(cat);
    setView("category");
    window.scrollTo(0, 0);
  };

  const openPasticceria = () => {
    window.history.pushState({ view: "pasticceria" }, "");
    setView("pasticceria");
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    setView("home");
    setActiveCat(null);
    window.scrollTo(0, 0);
  };

  const topBarTitle =
    view === "pasticceria"
      ? lang === "it" ? "Pasticceria" : "Pastry"
      : view === "category" && activeCat
      ? lang === "it" ? activeCat.nameIT : activeCat.nameEN
      : undefined;

  if (showIntro === null) {
    return <div style={{ position: "fixed", inset: 0, background: "#EEF7FF" }} />;
  }

  return (
    <>
      {showIntro === true && <IntroLoader onDone={handleIntroComplete} />}

      <div style={{
        opacity: showIntro === false ? 1 : 0,
        transition: showIntro === false ? "opacity 0.4s ease" : "none",
        pointerEvents: showIntro === false ? "auto" : "none",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
      }}>
        {searchOpen && (
          <SearchOverlay
            lang={lang}
            categories={initialCategories}
            onClose={() => setSearchOpen(false)}
            onSelectCategory={(slug) => { setSearchOpen(false); openCategory(slug); }}
          />
        )}

        <TopBar
          lang={lang}
          onLangToggle={() => setLang(lang === "it" ? "en" : "it")}
          onBack={view !== "home" ? goHome : undefined}
          onSearchOpen={() => setSearchOpen(true)}
          title={topBarTitle}
        />

        <main style={{ flex: 1 }}>
          {view === "home" && (
            <HomeView
              lang={lang}
              categories={initialCategories}
              onSelectCategory={openCategory}
              onSelectPasticceria={openPasticceria}
            />
          )}
          {view === "category" && activeCat && (
            <CategoryView category={activeCat} lang={lang} />
          )}
          {view === "pasticceria" && <PasticceraView lang={lang} />}
        </main>

        <Footer lang={lang} />
      </div>
    </>
  );
}