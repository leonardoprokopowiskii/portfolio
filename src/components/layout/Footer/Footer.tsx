import { useLanguage } from '../../../i18n/LanguageContext';
import styles from './Footer.module.css';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`wrap ${styles.inner}`}>
        <p className={styles.text}>{t.footer.text}</p>
      </div>
    </footer>
  );
}
