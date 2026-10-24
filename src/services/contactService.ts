export interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
  botcheck?: boolean;
}

export interface ContactResult {
  ok: boolean;
  message?: string;
}

const DEFAULT_WEB3FORMS_KEY = '623c69bb-44e0-49fc-a26b-dbd24f352d1e';

export async function sendContactMessage(payload: ContactPayload): Promise<ContactResult> {
  // Honeypot spam defense: if bot filled this invisible field, return silently
  if (payload.botcheck) {
    return { ok: true };
  }

  const accessKey =
    (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined) || DEFAULT_WEB3FORMS_KEY;

  const subject =
    payload.subject && payload.subject.trim().length > 0
      ? payload.subject.trim()
      : `Contato via Portfólio - ${payload.name}`;

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
        subject,
        message: payload.message,
      }),
    });

    const data = await response.json();
    if (response.ok && data.success !== false) {
      return { ok: true };
    }
    return { ok: false, message: data.message || 'Erro ao enviar mensagem' };
  } catch {
    return { ok: false, message: 'Erro de conexão com o servidor' };
  }
}
