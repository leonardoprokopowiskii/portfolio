import { Language } from '../i18n/translations';

export interface FeaturedBullet {
  bold: Record<Language, string>;
  text: Record<Language, string>;
}

export interface FeaturedProject {
  id: string;
  title: string;
  description: Record<Language, string>;
  features: FeaturedBullet[];
  chips: string[];
}

export interface ComingSoonProject {
  id: string;
  filename: string;
  tag: Record<Language, string>;
  title: Record<Language, string>;
  description: Record<Language, string>;
  /** Relative widths (%) of the placeholder code lines. */
  skeleton: number[];
  delay?: string;
}

export const featuredProject: FeaturedProject = {
  id: 'spro-sigap',
  title: 'SPRO SIGAP',
  description: {
    pt: 'Plataforma corporativa de governança e automação de produto integrada ao Azure DevOps. Backend em Python/Flask com APIs, integrações em tempo real e rotinas automatizadas para PMs, POs, Scrum Masters e diretoria.',
    en: 'Enterprise governance and product automation platform integrated with Azure DevOps. Python/Flask backend with APIs, real-time integrations and automated routines for PMs, POs, Scrum Masters and leadership.',
  },
  features: [
    {
      bold: {
        pt: 'Automação de Changelog & Releases:',
        en: 'Changelog & Release automation:',
      },
      text: {
        pt: 'validação de Work Items via Azure DevOps, hierarquia de versões (Full, Delta e Subversão) e publicação automatizada no SPRO Docs.',
        en: 'Work Item validation through Azure DevOps, version hierarchy (Full, Delta and Sub-version) and automated publishing to SPRO Docs.',
      },
    },
    {
      bold: {
        pt: 'APIs & Integrações:',
        en: 'APIs & Integrations:',
      },
      text: {
        pt: 'APIs REST em Python/Flask com integração em tempo real ao Azure DevOps, alimentando dashboards e relatórios de sprint.',
        en: 'Python/Flask REST APIs with real-time Azure DevOps integration, feeding sprint dashboards and reports.',
      },
    },
    {
      bold: {
        pt: 'Rotinas Automatizadas:',
        en: 'Automated Routines:',
      },
      text: {
        pt: 'reprogramação automática de demandas e disparos de reports semanais para acompanhamento das entregas.',
        en: 'automatic rescheduling of demands and weekly report dispatches to track deliveries.',
      },
    },
    {
      bold: {
        pt: 'Dados & Segurança:',
        en: 'Data & Security:',
      },
      text: {
        pt: 'banco PostgreSQL, autenticação SSO via Keycloak e interface em React consumindo as APIs.',
        en: 'PostgreSQL database, SSO authentication via Keycloak and a React interface consuming the APIs.',
      },
    },
  ],
  chips: ['Python', 'Flask', 'REST APIs', 'PostgreSQL', 'Azure DevOps API', 'Keycloak', 'Node.js', 'React'],
};

export const comingSoonProjects: ComingSoonProject[] = [
  {
    id: 'soon-api',
    filename: 'api.py',
    tag: { pt: 'Em breve · Backend', en: 'Coming soon · Backend' },
    title: { pt: 'API REST em Python', en: 'Python REST API' },
    description: {
      pt: 'Um novo projeto de backend está a caminho, com foco em APIs REST, banco de dados e boas práticas.',
      en: 'A new backend project is on the way, focused on REST APIs, databases and good practices.',
    },
    skeleton: [46, 72, 58, 80, 38, 64],
  },
  {
    id: 'soon-automation',
    filename: 'automation.py',
    tag: { pt: 'Em breve · Automação', en: 'Coming soon · Automation' },
    title: { pt: 'Automação com Python', en: 'Python Automation' },
    description: {
      pt: 'Mais um projeto em desenvolvimento, explorando automações, integrações e processamento de dados.',
      en: 'Another project in the works, exploring automations, integrations and data processing.',
    },
    skeleton: [52, 66, 40, 76, 60, 34],
    delay: '.12s',
  },
];
