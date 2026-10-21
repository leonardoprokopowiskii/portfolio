import { useLanguage } from '../../../i18n/LanguageContext';
import styles from './Footer.module.css';

export function Footer() {
  const { t } = useLanguage();

  return <footer className={styles.footer}>{t.footer.text}</footer>;
}
