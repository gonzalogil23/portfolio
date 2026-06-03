"use client";

import { useLang } from "@/lib/LangContext";
import { skillsData } from "@/lib/data";
import styles from "./Skills.module.css";

const dotColor: Record<string, string> = {
  frontend: "#60a5fa",
  backend: "#00c896",
  databases: "#a899f5",
  devops: "#f59e0b",
  ai: "#f97316",
};

export default function Skills() {
  const { t } = useLang();

  const categories = [
    { key: "frontend", label: t.skills.frontend, items: skillsData.frontend },
    { key: "backend", label: t.skills.backend, items: skillsData.backend },
    {
      key: "databases",
      label: t.skills.databases,
      items: skillsData.databases,
    },
    { key: "devops", label: t.skills.devops, items: skillsData.devops },
    { key: "ai", label: t.skills.ai, items: skillsData.ai },
  ];

  return (
    <section id="stack" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.label}>{t.skills.sectionLabel}</p>
        <h2 className={styles.title}>{t.skills.sectionTitle}</h2>
        {categories.map(({ key, label, items }) => (
          <div key={key}>
            <p className={styles.category}>{label}</p>
            <div className={styles.grid}>
              {items.map((skill) => (
                <div key={skill} className={styles.pill}>
                  <span
                    className={styles.dot}
                    style={{ background: dotColor[key] }}
                  />
                  <span className={styles.skillName}>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
