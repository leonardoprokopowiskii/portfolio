import { useLanguage } from '../../../i18n/LanguageContext';
import { experienceItems } from '../../../data/experience';
import { Card } from '../../ui/Card/Card';
import { Dual, tBoth } from '../../ui/Dual/Dual';
import styles from './Experience.module.css';

export function Experience() {
  const { lang } = useLanguage();

  return (
    <section id="experience">
      <h2 className="rv">
        <Dual values={tBoth((x) => x.experience.title)} />
      </h2>
      <p className="sub rv">
        <Dual values={tBoth((x) => x.experience.subtitle)} />
      </p>

      <div className="grid">
        {experienceItems.map((item) => (
          <Card key={item.id} delay={item.delay}>
            <span className={styles.tag}>{item.period[lang]}</span>
            <h3 className={styles.cardTitle}>
              <Dual values={item.title} />
            </h3>
            <p className={styles.cardDesc}>
              <Dual values={item.subtitle} />
            </p>

            <ul className={styles.feat}>
              {item.bullets.en.map((bullet, idx) => (
                <li key={bullet}>
                  <Dual values={{ pt: item.bullets.pt[idx], en: bullet }} />
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
