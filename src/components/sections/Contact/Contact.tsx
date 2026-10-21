import { CSSProperties, FormEvent, useState } from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { socialLinks } from '../../../data/stack';
import { sendContactMessage } from '../../../services/contactService';
import { Button } from '../../ui/Button/Button';
import styles from './Contact.module.css';

export function Contact() {
  const { t } = useLanguage();
  const [statusMessage, setStatusMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    setSubmitting(true);
    try {
      const result = await sendContactMessage({
        name: String(data.get('name') || ''),
        email: String(data.get('email') || ''),
        subject: String(data.get('subject') || ''),
        message: String(data.get('message') || ''),
      });

      if (result.mode === 'api') {
        setStatusMessage(t.contact.statusSent);
        form.reset();
      } else {
        setStatusMessage(`${t.contact.statusMailto}${result.recipient}`);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className={styles.cwrap}>
        <div className={`${styles.cta} rv`}>
          <h2>{t.contact.ctaTitle}</h2>
          <p className={styles.ctaSub}>{t.contact.ctaSub}</p>

          <div className={styles.btns}>
            <Button
              variant="white"
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
            <Button
              variant="outlineLight"
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
            <Button
              variant="outlineLight"
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Button>
            <Button
              variant="outlineLight"
              href={socialLinks.resumePath}
              download="Curriculo_Leonardo_Prokopowiski.pdf"
            >
              {t.contact.downloadResume}
            </Button>
          </div>
        </div>

        <form
          className={`${styles.form} rv`}
          style={{ '--d': '.12s' } as CSSProperties}
          onSubmit={handleSubmit}
        >
          <h3 className={styles.formTitle}>{t.contact.formTitle}</h3>

          <div className={styles.row2}>
            <div className={styles.fld}>
              <label htmlFor="f-n">{t.contact.nameLabel}</label>
              <input id="f-n" name="name" autoComplete="name" required />
            </div>
            <div className={styles.fld}>
              <label htmlFor="f-e">{t.contact.emailLabel}</label>
              <input id="f-e" name="email" type="email" autoComplete="email" required />
            </div>
          </div>

          <div className={styles.fld}>
            <label htmlFor="f-s">{t.contact.subjectLabel}</label>
            <input id="f-s" name="subject" required />
          </div>

          <div className={styles.fld}>
            <label htmlFor="f-m">{t.contact.messageLabel}</label>
            <textarea id="f-m" name="message" required />
          </div>

          <Button
            variant="primary"
            type="submit"
            className={styles.send}
            disabled={submitting}
          >
            {submitting ? t.contact.sending : t.contact.sendButton}
          </Button>

          <p className={styles.msg} role="status">
            {statusMessage}
          </p>
        </form>
      </div>
    </section>
  );
}
