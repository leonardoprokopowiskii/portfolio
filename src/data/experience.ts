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
      pt: 'Aprendiz de Produtos · Desenvolvimento de Software Full-Stack',
      en: 'Products Apprentice · Full-Stack Software Development',
    },
    bullets: {
      pt: [
        'Desenvolvo e evoluo aplicações web internas de ponta a ponta: interfaces modernas, APIs, automações e integrações.',
        'Atuação prática com React, TypeScript, JavaScript, Node.js, Python, Flask, APIs REST e Docker.',
        'Implementação de fluxos de autenticação (SSO/Keycloak), relatórios gerenciais, dashboards interativos e automações de acompanhamento de projetos.',
        'Vivência corporativa com Git e Azure DevOps: branches, pull requests, CI/CD e governança de entregas.',
      ],
      en: [
        'Build and evolve end-to-end internal web applications: modern interfaces, APIs, automations and integrations.',
        'Hands-on work with React, TypeScript, JavaScript, Node.js, Python, Flask, REST APIs and Docker.',
        'Implementation of authentication flows (SSO/Keycloak), executive reports, interactive dashboards and project-tracking automations.',
        'Enterprise workflow with Git and Azure DevOps: branches, pull requests, CI/CD and delivery governance.',
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
        'Formação complementar na Rocketseat: trilha Full-Stack com React, TypeScript, JavaScript, Node.js, HTML/CSS, Python, Flask e Git.',
        'Foco atual em arquitetura web Full-Stack: APIs RESTful, Prisma ORM, testes automatizados (Jest), autenticação JWT, bancos relacionais e Docker.',
      ],
      en: [
        'Complementary training at Rocketseat: Full-Stack track covering React, TypeScript, JavaScript, Node.js, HTML/CSS, Python, Flask and Git.',
        'Currently focused on Full-Stack web architecture: RESTful APIs, Prisma ORM, automated testing (Jest), JWT authentication, relational databases and Docker.',
      ],
    },
    delay: '.12s',
  },
];
