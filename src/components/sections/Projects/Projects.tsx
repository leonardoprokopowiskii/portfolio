import { useLanguage } from '../../../i18n/LanguageContext';
import { featuredProject, comingSoonProjects } from '../../../data/projects';
import { Card } from '../../ui/Card/Card';
import { CodeWindow } from '../../ui/CodeWindow/CodeWindow';
import { Dual, tBoth } from '../../ui/Dual/Dual';
import styles from './Projects.module.css';

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects">
      <h2 className="rv">{t.projects.title}</h2>
      <p className="sub rv">
        <Dual values={tBoth((x) => x.projects.subtitle)} />
      </p>

      <div className={`grid ${styles.projectGrid}`}>
        <Card className={styles.fullSpan}>
          <span className={styles.tag}>
            <Dual values={tBoth((x) => x.projects.workTag)} />
          </span>
          <h3 className={styles.cardTitle}>{featuredProject.title}</h3>
          <p className={styles.cardDesc}>
            <Dual values={featuredProject.description} />
          </p>

          <ul className={styles.feat}>
            {featuredProject.features.map((feat) => (
              <li key={feat.bold.en}>
                <span className={styles.featText}>
                  <Dual
                    values={{
                      pt: (
                        <>
                          <b>{feat.bold.pt}</b> {feat.text.pt}
                        </>
                      ),
                      en: (
                        <>
                          <b>{feat.bold.en}</b> {feat.text.en}
                        </>
                      ),
                    }}
                  />
                </span>
              </li>
            ))}
          </ul>

          <div className={styles.chips}>
            {featuredProject.chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>

          <small className={styles.note}>
            <Dual values={tBoth((x) => x.projects.internalNote)} />
          </small>
        </Card>

        {comingSoonProjects.map((project) => (
          <Card
            key={project.id}
            interactive={false}
            className={`${styles.projectCard} ${styles.soonCard}`}
            delay={project.delay}
          >
            <span className={`${styles.tag} ${styles.soonTag}`}>
              <i className={styles.soonDot} aria-hidden="true" />
              <Dual values={project.tag} />
            </span>
            <h3 className={styles.cardTitle}>
              <Dual values={project.title} />
            </h3>
            <p className={styles.cardDesc}>
              <Dual values={project.description} />
            </p>

            <div className={styles.skelWrap} aria-hidden="true">
              <CodeWindow filename={project.filename} flat>
                {project.skeleton.map((width, idx) => (
                  <div key={idx} className={styles.skelLine}>
                    <span className={styles.skelBar} style={{ width: `${width}%`, animationDelay: `${idx * 0.18}s` }} />
                  </div>
                ))}
              </CodeWindow>
            </div>

            <span className={styles.soonPill}>
              <i className={styles.soonDot} aria-hidden="true" />
              <Dual values={{ pt: 'Em breve', en: 'Coming soon' }} />
            </span>
          </Card>
        ))}
      </div>
    </section>
  );
}
