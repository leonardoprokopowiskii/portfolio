import { CSSProperties } from 'react';
import { marqueeTechs } from '../../../data/stack';
import styles from './TechMarquee.module.css';

const GROUPS = [0, 1, 2, 3, 4, 5];

export function TechMarquee() {
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.mrow}>
        <div className={styles.track}>
          {GROUPS.map((groupIndex) => (
            <div key={groupIndex} className={styles.grp}>
              {marqueeTechs.map((tech) => {
                const style = {
                  '--b': tech.bg,
                  '--f': tech.fg,
                  '--c': tech.accent || tech.bg,
                } as CSSProperties;

                return (
                  <span key={`${groupIndex}-${tech.name}`} className={styles.tech} style={style}>
                    <b>
                      {tech.strokePath ? (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d={tech.strokePath} />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d={tech.path} />
                        </svg>
                      )}
                    </b>
                    {tech.name}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
