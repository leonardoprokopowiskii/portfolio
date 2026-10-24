import { useEffect, useState } from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { socialLinks } from '../../../data/stack';
import styles from './Navbar.module.css';

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isScrolled = (window.scrollY || 0) > 16;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        <span className={styles.brandName}>Leonardo Prokopowiski</span>
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
            aria-pressed={lang === 'en'}
            onClick={() => setLang('en')}
          >
            EN
          </button>
          <button
            type="button"
            aria-pressed={lang === 'pt'}
            onClick={() => setLang('pt')}
          >
            PT
          </button>
        </div>

        <a
          className={styles.gh}
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>

        <button
          type="button"
          className={styles.burger}
          aria-expanded={menuOpen}
          aria-controls="menu"
          aria-label={t.nav.openMenu}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
        </button>
      </div>
    </nav>
  );
}
