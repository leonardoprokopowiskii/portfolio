import { useState } from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { socialLinks } from '../../../data/stack';
import styles from './Navbar.module.css';

interface NavbarProps {
  scrolled: boolean;
}

export function Navbar({ scrolled }: NavbarProps) {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navClasses = [
    styles.nav,
    scrolled ? styles.scrolled : '',
    menuOpen ? styles.open : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={navClasses} aria-label="Main">
      <a className={styles.brand} href="#top" onClick={closeMenu}>
        <span className={styles.logo}>LP</span>
        <span>Leonardo Prokopowiski</span>
      </a>

      <ul id="menu" className={styles.menu}>
        <li>
          <a href="#projects" onClick={closeMenu}>
            {t.nav.projects}
          </a>
        </li>
        <li>
          <a href="#experience" onClick={closeMenu}>
            {t.nav.experience}
          </a>
        </li>
        <li>
          <a href="#stack" onClick={closeMenu}>
            {t.nav.stack}
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            {t.nav.contact}
          </a>
        </li>
      </ul>

      <div className={styles.right}>
        <div className={styles.lang} role="group" aria-label="Language">
          <button
            type="button"
            aria-pressed={lang === 'pt'}
            onClick={() => setLang('pt')}
          >
            PT
          </button>
          <button
            type="button"
            aria-pressed={lang === 'en'}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>

        <a
          className={styles.gh}
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <button
          type="button"
          className={styles.burger}
          aria-label={t.nav.openMenu}
          aria-expanded={menuOpen}
          aria-controls="menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
        </button>
      </div>
    </nav>
  );
}
