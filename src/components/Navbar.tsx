"use client";

import { useState } from "react";
import { useLang } from "@/lib/LangContext";
import { Lang } from "@/lib/translations";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={`container ${styles.navInner}`}>
          <div className={styles.logo}>
            gonzalo.gil<span className={styles.cursor}>_</span>
          </div>

          <ul className={styles.links}>
            <li>
              <button onClick={() => scrollTo("stack")}>{t.nav.stack}</button>
            </li>
            <li>
              <button onClick={() => scrollTo("experience")}>
                {t.nav.experience}
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("projects")}>
                {t.nav.projects}
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("cta")}>{t.nav.cta}</button>
            </li>
          </ul>

          <div className={styles.right}>
            {/* Language strip */}
            <div className={`container ${styles.langStripInner}`}>
              <div className={styles.langToggle}>
                {(["es", "en"] as Lang[]).map((l) => (
                  <button
                    key={l}
                    className={`${styles.langBtn} ${
                      lang === l ? styles.langActive : ""
                    }`}
                    onClick={() => setLang(l)}
                  >
                    <span>{l === "es" ? "🇦🇷" : "🇺🇸"}</span>
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}
      >
        <button onClick={() => scrollTo("stack")}>{t.nav.stack}</button>
        <button onClick={() => scrollTo("experience")}>
          {t.nav.experience}
        </button>
        <button onClick={() => scrollTo("projects")}>{t.nav.projects}</button>
        <button onClick={() => scrollTo("cta")}>{t.nav.cta}</button>
      </div>
    </>
  );
}
