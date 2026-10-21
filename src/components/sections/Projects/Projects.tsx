import { useLanguage } from '../../../i18n/LanguageContext';
import { featuredProject, cliProjects } from '../../../data/projects';
import { Card } from '../../ui/Card/Card';
import { CodeWindow } from '../../ui/CodeWindow/CodeWindow';
import styles from './Projects.module.css';

export function Projects() {
  const { lang, t } = useLanguage();

  return (
    <section id="projects">
      <h2 className="rv">{t.projects.title}</h2>
      <p className="sub rv">{t.projects.subtitle}</p>

      <div className="grid">
        <Card className={styles.fullSpan}>
          <span className={styles.tag}>{t.projects.workTag}</span>
          <h3 className={styles.cardTitle}>{featuredProject.title}</h3>
          <p className={styles.cardDesc}>{featuredProject.description[lang]}</p>

          <ul className={styles.feat}>
            {featuredProject.features.map((feat) => (
              <li key={feat.bold.en}>
                <span>
                  <b>{feat.bold[lang]}</b> {feat.text[lang]}
                </span>
              </li>
            ))}
          </ul>

          <div className={styles.chips}>
            {featuredProject.chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>

          <small className={styles.note}>{t.projects.internalNote}</small>
        </Card>

        {cliProjects.map((project) => (
          <Card key={project.id} delay={project.delay}>
            <span className={styles.tag}>{project.tag}</span>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDesc}>{project.description[lang]}</p>

            <CodeWindow filename={project.filename} flat>
              {project.lines.map((line, idx) => (
                <div key={idx}>
                  {line.prefixType === 'prompt' && (
                    <>
                      <span className={styles.prompt}>{line.prefix}</span>
                      {line.text}
                    </>
                  )}
                  {line.prefixType === 'number' && (
                    <>
                      <span className={styles.num}>{line.prefix}</span>
                      {line.text}
                    </>
                  )}
                  {line.prefixType === 'comment' && (
                    <span className={styles.comment}>{line.text}</span>
                  )}
                </div>
              ))}
            </CodeWindow>

            <a
              className={styles.go}
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.projects.viewOnGithub}
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
