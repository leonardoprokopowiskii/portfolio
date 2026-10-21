import { socialLinks } from '../data/stack';

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResult {
  mode: 'api' | 'mailto';
  recipient: string;
}

const DEFAULT_WEB3FORMS_KEY = '623c69bb-44e0-49fc-a26b-dbd24f352d1e';

export async function sendContactMessage(payload: ContactPayload): Promise<ContactResult> {
  const accessKey =
    (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined) || DEFAULT_WEB3FORMS_KEY;
  const recipient = socialLinks.email;

  if (accessKey && accessKey.trim().length > 0) {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey.trim(),
          name: payload.name,
          email: payload.email,
          subject: payload.subject,
          message: payload.message,
        }),
      });

      if (response.ok) {
        return { mode: 'api', recipient };
      }
    } catch {
      // fallback to mailto if network fails
    }
  }

  const body = `${payload.message}\n\n${payload.name} <${payload.email}>`;
  const link = document.createElement('a');
  link.href = `mailto:${recipient}?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(body)}`;
  document.body.appendChild(link);
  link.click();
  link.remove();

  return { mode: 'mailto', recipient };
}
