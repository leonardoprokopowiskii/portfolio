import { ReactNode } from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Language, Translations, translations } from '../../../i18n/translations';
import styles from './Dual.module.css';

interface DualProps {
  /** Content for each language. Both are laid out in the same grid cell, so the
   * block always reserves the height of the taller one and the page never
   * changes size when switching between PT and EN. */
  values: Record<Language, ReactNode>;
  className?: string;
}

export function Dual({ values, className }: DualProps) {
  const { lang } = useLanguage();
  const classes = className ? `${styles.dual} ${className}` : styles.dual;

  return (
    <span className={classes}>
      {(['pt', 'en'] as const).map((l) => (
        <span
          key={l}
          lang={l === 'pt' ? 'pt-BR' : 'en'}
          className={l === lang ? styles.on : styles.off}
          aria-hidden={l === lang ? undefined : true}
        >
          {values[l]}
        </span>
      ))}
    </span>
  );
}

/** Picks the same translation key from both languages. */
export function tBoth(get: (t: Translations) => string): Record<Language, string> {
  return { pt: get(translations.pt), en: get(translations.en) };
}
