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
    pt: 'Plataforma web full-stack corporativa de governança, automação e engenharia de produto integrada ao Azure DevOps. Centraliza interfaces interativas, indicadores executivos, gestão de releases, capacitação interna e automações operacionais para PMs, POs, Scrum Masters e diretoria.',
    en: 'Enterprise full-stack web platform for governance, automation and product engineering, integrated with Azure DevOps. It centralizes interactive interfaces, executive indicators, release management, internal training and operational automations for PMs, POs, Scrum Masters and leadership.',
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
        pt: 'SIGAP Academy:',
        en: 'SIGAP Academy:',
      },
      text: {
        pt: 'ambiente integrado de capacitação para aprendizado do framework de trabalho da nossa área, com trilhas e materiais técnicos da operação.',
        en: 'integrated training environment for learning our area’s work framework, featuring structured paths and technical materials.',
      },
    },
    {
      bold: {
        pt: 'Dashboards & Relatórios de Sprint:',
        en: 'Sprint Dashboards & Reports:',
      },
      text: {
        pt: 'visão tática interativa de entregas, reprogramação automática de demandas e disparos de reports semanais.',
        en: 'interactive tactical view of deliveries, automatic rescheduling of demands and weekly report dispatches.',
      },
    },
    {
      bold: {
        pt: 'Arquitetura Full-Stack & Segurança:',
        en: 'Full-Stack Architecture & Security:',
      },
      text: {
        pt: 'frontend moderno em React, APIs e integrações em tempo real com Azure DevOps, banco PostgreSQL e autenticação SSO via Keycloak.',
        en: 'modern React frontend, real-time APIs and integrations with Azure DevOps, PostgreSQL database and SSO authentication via Keycloak.',
      },
    },
  ],
  chips: ['React', 'TypeScript', 'Node.js', 'Python', 'Flask', 'PostgreSQL', 'Azure DevOps API', 'Keycloak'],
};

export const comingSoonProjects: ComingSoonProject[] = [
  {
    id: 'soon-fullstack',
    filename: 'app.ts',
    tag: { pt: 'Em breve · Full-Stack', en: 'Coming soon · Full-Stack' },
    title: { pt: 'Aplicação Full-Stack', en: 'Full-Stack Application' },
    description: {
      pt: 'Um novo projeto full-stack está a caminho, com interface em React, API em Node.js e banco de dados.',
      en: 'A new full-stack project is on the way, with a React interface, a Node.js API and a database.',
    },
    skeleton: [46, 72, 58, 80, 38, 64],
  },
  {
    id: 'soon-web',
    filename: 'platform.ts',
    tag: { pt: 'Em breve · Web', en: 'Coming soon · Web' },
    title: { pt: 'Plataforma Web', en: 'Web Platform' },
    description: {
      pt: 'Mais um projeto em desenvolvimento, explorando interfaces modernas, APIs RESTful e integrações.',
      en: 'Another project in the works, exploring modern interfaces, RESTful APIs and integrations.',
    },
    skeleton: [52, 66, 40, 76, 60, 34],
    delay: '.12s',
  },
];
