"use client";

import { useLang } from "@/lib/LangContext";
import { projectsData } from "@/lib/data";
import styles from "./Projects.module.css";

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.label}>{t.projects.sectionLabel}</p>
        <h2 className={styles.title}>{t.projects.sectionTitle}</h2>

        <div className={styles.grid}>
          {projectsData.map((project) => (
            <div key={project.name} className={styles.card}>
              <p className={styles.name}>{project.name}</p>
              <span className={styles.badge}>
                {t.projects[project.roleKey]}
              </span>
              <p className={styles.desc}>{t.projects[project.descKey]}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
