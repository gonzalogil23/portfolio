"use client";

import { useLang } from "@/lib/LangContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useLang();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <span className={styles.copy}>{t.footer.copy}</span>
        <button className={styles.back} onClick={scrollTop}>
          {t.footer.back}
        </button>
      </div>
    </footer>
  );
}
