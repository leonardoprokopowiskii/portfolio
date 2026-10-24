import { CSSProperties, useEffect, useState } from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { socialLinks } from '../../../data/stack';
import { Button } from '../../ui/Button/Button';
import { CodeWindow } from '../../ui/CodeWindow/CodeWindow';
import { TechMarquee } from '../../ui/TechMarquee/TechMarquee';
import styles from './Hero.module.css';

interface CodeToken {
  text: string;
  className?: string;
}

type CodeLine = CodeToken[];

const CODE_LINES: CodeLine[] = [
  [
    { text: 'export const ', className: styles.k },
    { text: 'developer', className: styles.f },
    { text: ' = {' },
  ],
  [
    { text: '  name: ' },
    { text: '"Leonardo Prokopowiski"', className: styles.s },
    { text: ',' },
  ],
  [
    { text: '  role: ' },
    { text: '"Full-Stack Developer"', className: styles.s },
    { text: ',' },
  ],
  [
    { text: '  company: ' },
    { text: '"SPRO, an NTT DATA company"', className: styles.s },
    { text: ',' },
  ],
  [
    { text: '  frontend: [' },
    { text: '"React"', className: styles.s },
    { text: ', ' },
    { text: '"JavaScript"', className: styles.s },
    { text: ', ' },
    { text: '"TypeScript"', className: styles.s },
    { text: '],' },
  ],
  [
    { text: '  backend: [' },
    { text: '"Node.js"', className: styles.s },
    { text: ', ' },
    { text: '"Python"', className: styles.s },
    { text: ', ' },
    { text: '"Flask"', className: styles.s },
    { text: '],' },
  ],
  [
    { text: '  databases: [' },
    { text: '"PostgreSQL"', className: styles.s },
    { text: ', ' },
    { text: '"MySQL"', className: styles.s },
    { text: ', ' },
    { text: '"SQLite"', className: styles.s },
    { text: '],' },
  ],
  [
    { text: '  devops: [' },
    { text: '"Azure DevOps"', className: styles.s },
    { text: ', ' },
    { text: '"Docker"', className: styles.s },
    { text: ', ' },
    { text: '"Git"', className: styles.s },
    { text: '],' },
  ],
  [
    { text: '} ' },
    { text: 'as const', className: styles.k },
    { text: ';' },
  ],
  [
    { text: ' ' },
  ],
  [
    { text: '// always learning, always building', className: styles.c },
  ],
];

const TOTAL_CHARS = CODE_LINES.reduce(
  (sum, line) => sum + line.reduce((lSum, token) => lSum + token.text.length, 0),
  0
);

export function Hero() {
  const { lang, t } = useLanguage();
  const [typedChars, setTypedChars] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedChars(TOTAL_CHARS);
      return;
    }

    let timer: number | undefined;

    const startTimer = window.setTimeout(() => {
      let current = 0;

      function typeNext() {
        if (current >= TOTAL_CHARS) return;

        current += 1;
        setTypedChars(current);

        const progress = current / TOTAL_CHARS;
        // Starts snappy at ~13ms and gently decelerates up to ~22ms (subtle, natural slowdown without dragging)
        const delay = 24 + Math.pow(progress, 1.2) * 12;

        timer = window.setTimeout(typeNext, delay);
      }

      typeNext();
    }, 350);

    return () => {
      window.clearTimeout(startTimer);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  const titleLineStyle = (n: number): CSSProperties => ({ '--n': n } as CSSProperties);

  let globalOffset = 0;

  return (
    <div className={styles.heroWrap} id="top">
      <div className={styles.gridbg} />
      <div className={`${styles.blob} ${styles.b1}`} />
      <div className={`${styles.blob} ${styles.b2}`} />
      <div className={`${styles.blob} ${styles.b3}`} />

      <div className={`wrap ${styles.hero}`}>
        <div>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowRole}>{t.hero.pillRole}</span>
            <span className={styles.eyebrowSep} aria-hidden="true">·</span>
            <span className={styles.eyebrowCompany}>{t.hero.pillCompany}</span>
          </p>

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
              href={lang === 'pt' ? socialLinks.resumePathPt : socialLinks.resumePathEn}
              download={lang === 'pt' ? 'Curriculo_Leonardo_Prokopowiski.pdf' : 'Resume_Leonardo_Prokopowiski.pdf'}
            >
              {t.hero.downloadResume}
            </Button>
          </div>
        </div>

        <div className={styles.stage}>
          <CodeWindow filename="developer.ts" ariaLabel={t.hero.codeAria} heroPadding>
            {CODE_LINES.map((lineTokens, lineIdx) => {
              const lineTotal = lineTokens.reduce((acc, t) => acc + t.text.length, 0);
              const lineStart = globalOffset;
              const lineEnd = lineStart + lineTotal;
              globalOffset = lineEnd;

              const hasStarted = typedChars > lineStart;
              const isFinished = typedChars >= lineEnd;
              const isCurrentlyTyping = hasStarted && !isFinished;
              const isLastLineAndAllDone =
                typedChars >= TOTAL_CHARS && lineIdx === CODE_LINES.length - 1;

              let tokenOffset = lineStart;

              return (
                <div key={lineIdx} className={styles.line}>
                  {hasStarted ? (
                    <>
                      {lineTokens.map((token, tIdx) => {
                        const start = tokenOffset;
                        const end = start + token.text.length;
                        tokenOffset = end;

                        if (typedChars <= start) return null;

                        const visibleText =
                          typedChars >= end ? token.text : token.text.slice(0, typedChars - start);

                        return token.className ? (
                          <span key={tIdx} className={token.className}>
                            {visibleText}
                          </span>
                        ) : (
                          <span key={tIdx}>{visibleText}</span>
                        );
                      })}
                      {(isCurrentlyTyping || isLastLineAndAllDone) && (
                        <span className={styles.caret} />
                      )}
                    </>
                  ) : (
                    <span style={{ opacity: 0 }} aria-hidden="true">
                      {'\u00A0'}
                    </span>
                  )}
                </div>
              );
            })}
          </CodeWindow>

          {/* Floating tech icons with deep ambient floating animations */}
          <div className={`${styles.fb} ${styles.f1}`} title="React" aria-label="React">
            <svg viewBox="-11.5 -10.23 23 20.46" className={styles.techSvg}>
              <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
              <g stroke="#00D8FF" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
          </div>

          <div className={`${styles.fb} ${styles.f2}`} title="Node.js" aria-label="Node.js">
            <svg viewBox="0 0 24 24" className={styles.techSvg}>
              <path
                fill="#539E43"
                d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.085.049-.139.145-.139.241v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.945-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.078c-.353.204-.672.288-.998.288zm7.101-10.007c0-1.9-1.284-2.406-3.987-2.763-2.731-.361-3.009-.548-3.009-1.187 0-.528.235-1.233 2.258-1.233 1.807 0 2.473.389 2.747 1.607.024.115.129.199.247.199h1.141c.071 0 .138-.031.186-.081.048-.054.074-.123.067-.196-.177-2.098-1.571-3.076-4.388-3.076-2.508 0-4.004 1.058-4.004 2.833 0 1.925 1.488 2.457 3.895 2.695 2.88.282 3.103.703 3.103 1.269 0 .983-.789 1.402-2.642 1.402-2.327 0-2.839-.584-3.011-1.742-.02-.124-.126-.215-.253-.215h-1.137c-.141 0-.254.112-.254.253 0 1.482.806 3.248 4.655 3.248 2.853 0 4.451-1.097 4.451-3.014z"
              />
            </svg>
          </div>

          <div className={`${styles.fb} ${styles.f3}`} title="Python" aria-label="Python">
            <svg viewBox="0 0 110 110" className={styles.techSvg}>
              <defs>
                <linearGradient id="pyBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#387EB8" />
                  <stop offset="100%" stopColor="#366994" />
                </linearGradient>
                <linearGradient id="pyYellow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFE873" />
                  <stop offset="100%" stopColor="#FFD43B" />
                </linearGradient>
              </defs>
              <path fill="url(#pyBlue)" d="M54.2 1.5c-24.8 0-23.3 10.7-23.3 10.7l.1 11.1h23.7v3.4H21.2C9.4 26.7 0 35.8 0 54.4c0 18.7 9.8 18.2 9.8 18.2h5.8v-8.2c0-9.4 8.2-17.7 17.7-17.7h23.5c7.8 0 14.1-6.5 14.1-14.3V9.6s1.8-8.1-16.7-8.1zm-13.4 7.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6z" />
              <path fill="url(#pyYellow)" d="M55.8 108.5c24.8 0 23.3-10.7 23.3-10.7l-.1-11.1H55.3v-3.4h33.5c11.8 0 21.2-9.1 21.2-27.7 0-18.7-9.8-18.2-9.8-18.2h-5.8v8.2c0 9.4-8.2 17.7-17.7 17.7H53.2c-7.8 0-14.1 6.5-14.1 14.3v22.8s-1.8 8.1 16.7 8.1zm13.4-7.2a3.8 3.8 0 1 1 0-7.6 3.8 3.8 0 0 1 0 7.6z" />
            </svg>
          </div>
        </div>
      </div>

      <TechMarquee />
    </div>
  );
}
