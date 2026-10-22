import { CSSProperties } from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { socialLinks } from '../../../data/stack';
import { Button } from '../../ui/Button/Button';
import { CodeWindow } from '../../ui/CodeWindow/CodeWindow';
import { TechMarquee } from '../../ui/TechMarquee/TechMarquee';
import styles from './Hero.module.css';

export function Hero() {
  const { t } = useLanguage();

  const lineStyle = (i: number): CSSProperties => ({ '--i': i } as CSSProperties);
  const titleLineStyle = (n: number): CSSProperties => ({ '--n': n } as CSSProperties);

  return (
    <div className={styles.heroWrap} id="top">
      <div className={styles.gridbg} />
      <div className={`${styles.blob} ${styles.b1}`} />
      <div className={`${styles.blob} ${styles.b2}`} />
      <div className={`${styles.blob} ${styles.b3}`} />

      <div className={`wrap ${styles.hero}`}>
        <div>
          <div className={styles.pill}>
            <span className={styles.dot} />
            {t.hero.pill}
          </div>

          <h1 className={styles.title}>
            <span style={titleLineStyle(0)}>
              <i>{t.hero.h1Line1}</i>
            </span>
            <span className={styles.gradLine} style={titleLineStyle(1)}>
              <i>{t.hero.h1Line2}</i>
            </span>
            <span style={titleLineStyle(2)}>
              <i>{t.hero.h1Line3}</i>
            </span>
          </h1>

          <p className={styles.lead}>{t.hero.lead}</p>

          <div className={styles.btns}>
            <Button variant="primary" href="#projects">
              {t.hero.seeProjects}
            </Button>
            <Button variant="secondary" href="#contact">
              {t.hero.getInTouch}
            </Button>
            <Button
              variant="secondary"
              href={socialLinks.resumePath}
              download="Curriculo_Leonardo_Prokopowiski.pdf"
            >
              {t.hero.downloadResume}
            </Button>
          </div>
        </div>

        <div className={styles.stage}>
          <CodeWindow filename="developer.ts" ariaLabel={t.hero.codeAria} heroPadding>
            <div className={styles.line} style={lineStyle(0)}>
              <span className={styles.k}>export const</span> <span className={styles.f}>developer</span> = {'{'}
            </div>
            <div className={styles.line} style={lineStyle(1)}>
              {'  '}name: <span className={styles.s}>"Leonardo Prokopowiski"</span>,
            </div>
            <div className={styles.line} style={lineStyle(2)}>
              {'  '}role: <span className={styles.s}>"Full-Stack Developer"</span>,
            </div>
            <div className={styles.line} style={lineStyle(3)}>
              {'  '}company: <span className={styles.s}>"SPRO, an NTT DATA company"</span>,
            </div>
            <div className={styles.line} style={lineStyle(4)}>
              {'  '}frontend: [<span className={styles.s}>"React"</span>, <span className={styles.s}>"Node.js"</span>, <span className={styles.s}>"TypeScript"</span>],
            </div>
            <div className={styles.line} style={lineStyle(5)}>
              {'  '}backend: [<span className={styles.s}>"Node.js"</span>, <span className={styles.s}>"Python"</span>, <span className={styles.s}>"Flask"</span>],
            </div>
            <div className={styles.line} style={lineStyle(6)}>
              {'  '}databases: [<span className={styles.s}>"PostgreSQL"</span>, <span className={styles.s}>"MySQL"</span>, <span className={styles.s}>"SQLite"</span>],
            </div>
            <div className={styles.line} style={lineStyle(7)}>
              {'  '}devops: [<span className={styles.s}>"Azure DevOps"</span>, <span className={styles.s}>"Docker"</span>, <span className={styles.s}>"Git"</span>],
            </div>
            <div className={styles.line} style={lineStyle(8)}>
              {'}'} <span className={styles.k}>as const</span>;
            </div>
            <div className={styles.line} style={lineStyle(9)}>
              {' '}
            </div>
            <div className={styles.line} style={lineStyle(10)}>
              <span className={styles.c}>// always learning, always building</span>
              <span className={styles.caret} />
            </div>
          </CodeWindow>

          <div className={`${styles.fb} ${styles.f1}`}>React &amp; TS</div>
          <div className={`${styles.fb} ${styles.f2}`}>Node.js</div>
          <div className={`${styles.fb} ${styles.f3}`}>Python &amp; Flask</div>
        </div>
      </div>

      <TechMarquee />
    </div>
  );
}
