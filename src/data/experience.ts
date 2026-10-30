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
      pt: 'Aprendiz de Produtos · Desenvolvimento Backend',
      en: 'Products Apprentice · Backend Development',
    },
    bullets: {
      pt: [
        'Desenvolvo e mantenho APIs, automações e integrações em Python e Flask para aplicações web internas.',
        'Atuação prática com Python, Flask, Node.js, APIs REST, PostgreSQL, Docker e React no frontend.',
        'Implementação de autenticação (SSO/Keycloak), relatórios gerenciais e automações de acompanhamento de projetos.',
        'Vivência corporativa com Git e Azure DevOps: branches, pull requests, CI/CD e governança de entregas.',
      ],
      en: [
        'I build and maintain APIs, automations and integrations in Python and Flask for internal web applications.',
        'Hands-on work with Python, Flask, Node.js, REST APIs, PostgreSQL, Docker and React on the frontend.',
        'Implementation of authentication (SSO/Keycloak), executive reports and project-tracking automations.',
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
        'Formação complementar na Rocketseat: trilha com Python, Flask, Node.js, JavaScript, TypeScript, React, HTML/CSS e Git.',
        'Foco atual em backend: APIs RESTful, Prisma ORM, testes automatizados (Jest), autenticação JWT, bancos relacionais e Docker.',
      ],
      en: [
        'Complementary training at Rocketseat: track covering Python, Flask, Node.js, JavaScript, TypeScript, React, HTML/CSS and Git.',
        'Currently focused on backend: RESTful APIs, Prisma ORM, automated testing (Jest), JWT authentication, relational databases and Docker.',
      ],
    },
    delay: '.12s',
  },
];
