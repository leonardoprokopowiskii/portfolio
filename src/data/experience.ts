import { Language } from '../i18n/translations';

export interface ExperienceItem {
  id: string;
  period: Record<Language, string>;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  bullets: Record<Language, string[]>;
  delay?: string;
}

export const experienceItems: ExperienceItem[] = [
  {
    id: 'spro',
    period: {
      pt: '09/2025 – Atual',
      en: '09/2025 – Present',
    },
    title: {
      pt: 'SPRO, an NTT DATA company',
      en: 'SPRO, an NTT DATA company',
    },
    subtitle: {
      pt: 'Aprendiz de Produtos, desenvolvimento de software',
      en: 'Products apprentice, software development',
    },
    bullets: {
      pt: [
        'Desenvolvo e evoluo aplicações internas: novas funcionalidades, automações e integrações.',
        'Trabalho com Python, Flask, JavaScript, TypeScript, React, Node.js, APIs REST e Docker.',
        'Fluxos de autenticação, relatórios, dashboards e automações de acompanhamento de projetos.',
        'Git e Azure DevOps: branches, pull requests e fluxo de entrega.',
      ],
      en: [
        'Build and evolve internal apps: new features, automations and integrations.',
        'Work with Python, Flask, JavaScript, TypeScript, React, Node.js, REST APIs and Docker.',
        'Authentication flows, reports, dashboards and project-tracking automations.',
        'Git and Azure DevOps: branches, pull requests and delivery workflow.',
      ],
    },
  },
  {
    id: 'education',
    period: {
      pt: '2026 – 2029',
      en: '2026 – 2029',
    },
    title: {
      pt: 'Engenharia de Software',
      en: 'Software Engineering',
    },
    subtitle: {
      pt: 'UniCesumar',
      en: 'UniCesumar',
    },
    bullets: {
      pt: [
        'Cursos na Rocketseat: Python, Git, Flask, HTML e CSS, JavaScript, TypeScript, Node.js e React.',
        'Foco atual em Python, Flask e FastAPI, e aprendendo Docker e APIs REST.',
      ],
      en: [
        'Rocketseat courses: Python, Git, Flask, HTML and CSS, JavaScript, TypeScript, Node.js and React.',
        'Now focused on Python, Flask and FastAPI, and learning Docker and REST APIs.',
      ],
    },
    delay: '.12s',
  },
];
