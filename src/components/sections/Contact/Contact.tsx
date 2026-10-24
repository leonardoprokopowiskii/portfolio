import { CSSProperties, FormEvent, useState } from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { socialLinks } from '../../../data/stack';
import { sendContactMessage } from '../../../services/contactService';
import { Button } from '../../ui/Button/Button';
import { triggerConfetti } from '../../../utils/confetti';
import styles from './Contact.module.css';

export function Contact() {
  const { lang, t } = useLanguage();
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [msgLength, setMsgLength] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socialLinks.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitBtn = (form.querySelector('button[type="submit"]') as HTMLElement) || form;
    const data = new FormData(form);
    setSubmitting(true);
    setIsError(false);
    setStatusMessage('');

    try {
      const result = await sendContactMessage({
        name: String(data.get('name') || ''),
        email: String(data.get('email') || ''),
        subject: String(data.get('subject') || ''),
        message: String(data.get('message') || ''),
        botcheck: Boolean(data.get('botcheck')),
      });

      if (result.ok) {
        setIsError(false);
        setStatusMessage(t.contact.statusSent);
        triggerConfetti(submitBtn);
        form.reset();
        setMsgLength(0);
      } else {
        setIsError(true);
        setStatusMessage(
          lang === 'pt'
            ? 'Não foi possível enviar a mensagem automaticamente.'
            : 'Could not send the message automatically.'
        );
      }
    } catch {
      setIsError(true);
      setStatusMessage(
        lang === 'pt'
          ? 'Erro de conexão ao enviar a mensagem.'
          : 'Connection error while sending message.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const resumeHref = lang === 'pt' ? socialLinks.resumePathPt : socialLinks.resumePathEn;
  const resumeDownloadName =
    lang === 'pt' ? 'Curriculo_Leonardo_Prokopowiski.pdf' : 'Resume_Leonardo_Prokopowiski.pdf';

  return (
    <section id="contact">
      <div className={styles.cwrap}>
        <div className={`${styles.cta} rv`}>
          <h2>{t.contact.ctaTitle}</h2>
          <p className={styles.ctaSub}>{t.contact.ctaSub}</p>

          <div className={styles.actions}>
            <div className={styles.socials} role="group" aria-label="Social links">
              <a
                className={styles.iconBtn}
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                className={styles.iconBtn}
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

              <a
                className={styles.iconBtn}
                href={`mailto:${socialLinks.email}`}
                aria-label="E-mail"
                title="E-mail"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>

            <div className={styles.divider} aria-hidden="true" />

            <a
              className={styles.resumeBtn}
              href={resumeHref}
              download={resumeDownloadName}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>{t.contact.downloadResume}</span>
            </a>
          </div>
        </div>

        <form className={`${styles.form} rv`} style={{ '--d': '0.12s' } as CSSProperties} onSubmit={handleSubmit} noValidate>
          {/* Honeypot Spam Protection */}
          <input
            type="checkbox"
            name="botcheck"
            className={styles.botcheck}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <h3 className={styles.formTitle}>{t.contact.formTitle}</h3>

          <div className={styles.row2}>
            <div className={styles.fld}>
              <label htmlFor="f-n">{t.contact.nameLabel}</label>
              <input id="f-n" name="name" type="text" required autoComplete="name" />
            </div>

            <div className={styles.fld}>
              <label htmlFor="f-e">{t.contact.emailLabel}</label>
              <input id="f-e" name="email" type="email" required autoComplete="email" />
            </div>
          </div>

          <div className={styles.fld}>
            <div className={styles.fldHeader}>
              <label htmlFor="f-s">{t.contact.subjectLabel}</label>
              <span className={styles.optional}>({lang === 'pt' ? 'opcional' : 'optional'})</span>
            </div>
            <input id="f-s" name="subject" type="text" />
          </div>

          <div className={styles.fld}>
            <div className={styles.fldHeader}>
              <label htmlFor="f-m">{t.contact.messageLabel}</label>
              <span className={styles.charCount}>{msgLength}/1500</span>
            </div>
            <textarea
              id="f-m"
              name="message"
              required
              maxLength={1500}
              onChange={(e) => setMsgLength(e.target.value.length)}
            />
          </div>

          <Button
            variant="primary"
            type="submit"
            className={styles.send}
            disabled={submitting}
          >
            {submitting ? t.contact.sending : t.contact.sendButton}
          </Button>

          {statusMessage && !isError && (
            <p className={styles.msg} role="status">
              {statusMessage}
            </p>
          )}

          {isError && (
            <div className={styles.errorBox} role="alert">
              <span>
                {statusMessage}{' '}
                {lang === 'pt'
                  ? 'Você pode copiar o e-mail abaixo e entrar em contato direto:'
                  : 'You can copy the email below to reach out directly:'}
              </span>
              <button
                type="button"
                className={styles.copyEmailBtn}
                onClick={handleCopyEmail}
              >
                {copied
                  ? (lang === 'pt' ? 'E-mail copiado! ✓' : 'Email copied! ✓')
                  : (lang === 'pt' ? `Copiar ${socialLinks.email}` : `Copy ${socialLinks.email}`)}
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
