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
          <CodeWindow filename="developer.py" ariaLabel={t.hero.codeAria} heroPadding>
            <div className={styles.line} style={lineStyle(0)}>
              <span className={styles.k}>from</span> dataclasses <span className={styles.k}>import</span> dataclass
            </div>
            <div className={styles.line} style={lineStyle(1)}>
              {' '}
            </div>
            <div className={styles.line} style={lineStyle(2)}>
              <span className={styles.f}>@dataclass</span>
            </div>
            <div className={styles.line} style={lineStyle(3)}>
              <span className={styles.k}>class</span> <span className={styles.f}>Developer</span>:
            </div>
            <div className={styles.line} style={lineStyle(4)}>
              {'    '}name = <span className={styles.s}>"Leonardo Prokopowiski"</span>
            </div>
            <div className={styles.line} style={lineStyle(5)}>
              {'    '}role = <span className={styles.s}>"Backend developer"</span>
            </div>
            <div className={styles.line} style={lineStyle(6)}>
              {'    '}company = <span className={styles.s}>"SPRO, NTT DATA"</span>
            </div>
            <div className={styles.line} style={lineStyle(7)}>
              {'    '}stack = (<span className={styles.s}>"Python"</span>, <span className={styles.s}>"Flask"</span>, <span className={styles.s}>"FastAPI"</span>)
            </div>
            <div className={styles.line} style={lineStyle(8)}>
              {'    '}databases = (<span className={styles.s}>"PostgreSQL"</span>, <span className={styles.s}>"MongoDB"</span>)
            </div>
            <div className={styles.line} style={lineStyle(9)}>
              {'    '}learning = <span className={styles.s}>"Docker, REST APIs"</span>
            </div>
            <div className={styles.line} style={lineStyle(10)}>
              {' '}
            </div>
            <div className={styles.line} style={lineStyle(11)}>
              <span className={styles.c}># always learning, always building</span>
              <span className={styles.caret} />
            </div>
          </CodeWindow>

          <div className={`${styles.fb} ${styles.f1}`}>FastAPI</div>
          <div className={`${styles.fb} ${styles.f2}`}>Docker</div>
          <div className={`${styles.fb} ${styles.f3}`}>Flask</div>
        </div>
      </div>

      <TechMarquee />
    </div>
  );
}
