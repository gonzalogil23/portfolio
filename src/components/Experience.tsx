"use client";

import { useLang } from "@/lib/LangContext";
import { experienceData } from "@/lib/data";
import styles from "./Experience.module.css";

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.label}>{t.experience.sectionLabel}</p>
        <h2 className={styles.title}>{t.experience.sectionTitle}</h2>

        {experienceData.map((exp) => (
          <div key={exp.company + exp.period} className={styles.item}>
            <div className={styles.meta}>
              <p className={styles.period}>{exp.period}</p>
              <p className={styles.company}>{exp.company}</p>
              <p className={styles.type}>{t.experience[exp.typeKey]}</p>
            </div>
            <div className={styles.content}>
              <p className={styles.role}>{t.experience[exp.roleKey]}</p>
              <div className={styles.tags}>
                {exp.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
