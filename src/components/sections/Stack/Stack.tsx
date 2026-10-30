import { useLanguage } from '../../../i18n/LanguageContext';
import { stackCategories } from '../../../data/stack';
import { Card } from '../../ui/Card/Card';
import { Dual, tBoth } from '../../ui/Dual/Dual';
import styles from './Stack.module.css';

export function Stack() {
  const { t } = useLanguage();

  return (
    <section id="stack">
      <h2 className="rv">{t.stack.title}</h2>
      <p className="sub rv">
        <Dual values={tBoth((x) => x.stack.subtitle)} />
      </p>

      <div className={styles.grid4}>
        {stackCategories.map((category) => (
          <Card
            key={category.id}
            as="div"
            accentColor={category.color}
            delay={category.delay}
          >
            <h3 className={styles.catTitle}>
              <Dual values={tBoth((x) => x.stack[category.id])} />
            </h3>
            <div className={styles.chips}>
              {category.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
