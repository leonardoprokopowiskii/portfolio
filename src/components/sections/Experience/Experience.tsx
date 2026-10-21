import { useLanguage } from '../../../i18n/LanguageContext';
import { experienceItems } from '../../../data/experience';
import { Card } from '../../ui/Card/Card';
import styles from './Experience.module.css';

export function Experience() {
  const { lang, t } = useLanguage();

  return (
    <section id="experience">
      <h2 className="rv">{t.experience.title}</h2>
      <p className="sub rv">{t.experience.subtitle}</p>

      <div className="grid">
        {experienceItems.map((item) => (
          <Card key={item.id} delay={item.delay}>
            <span className={styles.tag}>{item.period[lang]}</span>
            <h3 className={styles.cardTitle}>{item.title[lang]}</h3>
            <p className={styles.cardDesc}>{item.subtitle[lang]}</p>

            <ul className={styles.feat}>
              {item.bullets[lang].map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
