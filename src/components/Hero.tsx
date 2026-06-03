"use client";

import { useLang } from "@/lib/LangContext";
import { getYearsExp } from "@/lib/data";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.tag}>{t.hero.tag}</div>
        <h1 className={styles.h1}>
          {t.hero.h1line1}
          <br />
          <em className={styles.gradient}>{t.hero.h1line2}</em>
          <br />
          {t.hero.h1line3}
        </h1>
        <p className={styles.bio}>{t.hero.bio}</p>
        <div className={styles.actions}>
          <a
            className={styles.btnPrimary}
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t.hero.btn1}
          </a>
          <a
            className={styles.btnSecondary}
            href="mailto:gonzalogil007@gmail.com"
          >
            {t.hero.btn2}
          </a>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>{getYearsExp()}</span>
            <span className={styles.statLabel}>{t.hero.stat1}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>10+</span>
            <span className={styles.statLabel}>{t.hero.stat2}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>3</span>
            <span className={styles.statLabel}>{t.hero.stat3}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
