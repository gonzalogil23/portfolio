"use client";

import { useLang } from "@/lib/LangContext";
import styles from "./Contact.module.css";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.label}>{t.contact.sectionLabel}</p>
          <h2 className={styles.title}>{t.contact.title}</h2>
          <p className={styles.sub}>{t.contact.sub}</p>

          <div className={styles.links}>
            <a className={styles.link} href="mailto:gonzalogil007@gmail.com">
              <span className={styles.linkIcon}>📧</span>
              gonzalogil007@gmail.com
            </a>
            <a
              className={styles.link}
              href="https://github.com/gonzalogil23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.linkIcon}>🐙</span>
              github.com/gonzalogil23
            </a>
            <a
              className={styles.link}
              href="https://linkedin.com/in/gonzalogil23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.linkIcon}>💼</span>
              linkedin.com/in/gonzalogil23
            </a>
            <a className={styles.link} href="tel:+543513549555">
              <span className={styles.linkIcon}>📱</span>
              +54 351 354 9555
            </a>
          </div>
        </div>

        <div>
          <p className={styles.availLabel}>{t.contact.availLabel}</p>

          <div className={styles.availCard}>
            <div className={styles.availHeader}>
              <span className={styles.dot} />
              <span className={styles.availStatus}>
                {t.contact.availStatus}
              </span>
            </div>
            <p className={styles.availDesc}>{t.contact.availDesc}</p>
          </div>

          <div className={styles.langCard}>
            <p className={styles.langLabel}>{t.contact.langLabel}</p>
            <div className={styles.langRow}>
              <span className={styles.langName}>{t.contact.lang1}</span>
              <span className={styles.langValGreen}>{t.contact.lang1val}</span>
            </div>
            <div className={styles.langRow}>
              <span className={styles.langName}>{t.contact.lang2}</span>
              <span className={styles.langValPurple}>{t.contact.lang2val}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
