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

export interface TerminalLine {
  prefix?: string;
  prefixType?: 'prompt' | 'number' | 'comment';
  text: string;
}

export interface CliProject {
  id: string;
  tag: string;
  title: string;
  description: Record<Language, string>;
  filename: string;
  lines: TerminalLine[];
  repoUrl: string;
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
        pt: 'interface web integrada de capacitação com trilhas de aprendizado, vídeos e materiais técnicos da operação.',
        en: 'integrated web training platform with learning paths, videos and technical material from the operation.',
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

export const cliProjects: CliProject[] = [
  {
    id: 'tech-news-page',
    tag: 'Frontend · Web UI',
    title: 'Tech News Portal',
    description: {
      pt: 'Portal de notícias de tecnologia com layout editorial moderno em CSS Grid, hierarquia visual e seções categorizadas.',
      en: 'Technology news portal featuring a modern CSS Grid editorial layout, visual hierarchy and categorized sections.',
    },
    filename: 'index.html',
    lines: [
      { prefixType: 'comment', text: '<!-- Tech News Portal Layout -->' },
      { prefix: '1.', prefixType: 'number', text: ' <header class="navbar-grid">' },
      { prefix: '2.', prefixType: 'number', text: ' <main class="featured-highlights">' },
      { prefix: '3.', prefixType: 'number', text: ' <section class="most-read-weekly">' },
      { prefix: '4.', prefixType: 'number', text: ' <section class="ai-highlights">' },
      { prefix: '5.', prefixType: 'number', text: ' <aside class="ads-and-more">' },
    ],
    repoUrl: 'https://github.com/leonardoprokopowiskii/tech-news-page',
  },
  {
    id: 'enrollment-form',
    tag: 'Frontend · Forms & UI',
    title: 'School Enrollment Form',
    description: {
      pt: 'Aplicação web de formulário de matrícula com foco em usabilidade, estados de foco/validação, upload customizado e seleção interativa.',
      en: 'School enrollment web form built with a focus on usability, validation/focus states, custom file upload and interactive selection.',
    },
    filename: 'enrollment.html',
    lines: [
      { prefixType: 'comment', text: '<!-- Interactive Form Architecture -->' },
      { prefix: '1.', prefixType: 'number', text: ' Child Information & Birth Certificate Dropzone' },
      { prefix: '2.', prefixType: 'number', text: ' Residential Address & Automatic Fields' },
      { prefix: '3.', prefixType: 'number', text: ' Guardian Contact & Validation States' },
      { prefix: '4.', prefixType: 'number', text: ' Shift & Extracurricular Sports Radio Cards' },
    ],
    repoUrl: 'https://github.com/leonardoprokopowiskii/enrollment-form',
    delay: '.12s',
  },
  {
    id: 'task-manager',
    tag: 'Backend · Python',
    title: 'Task Manager',
    description: {
      pt: 'Gerenciador de tarefas em Python com operações completas de CRUD, controle de status e arquitetura modular no terminal.',
      en: 'Task manager in Python featuring full CRUD operations, status tracking and modular CLI architecture.',
    },
    filename: 'task_manager.py',
    lines: [
      { prefix: '$', prefixType: 'prompt', text: ' python task_manager.py' },
      { prefix: '1.', prefixType: 'number', text: ' Add a new task' },
      { prefix: '2.', prefixType: 'number', text: ' View all tasks' },
      { prefix: '3.', prefixType: 'number', text: ' Update a task' },
      { prefix: '4.', prefixType: 'number', text: ' Mark a task as closed' },
      { prefix: '5.', prefixType: 'number', text: ' Remove closed tasks' },
      { prefix: '6.', prefixType: 'number', text: ' Exit' },
    ],
    repoUrl: 'https://github.com/leonardoprokopowiskii/task-manager',
  },
  {
    id: 'contact-manager',
    tag: 'Backend · Python',
    title: 'Contact Manager',
    description: {
      pt: 'Sistema de gerenciamento de contatos com operações de CRUD, marcação de favoritos e filtragem dedicada.',
      en: 'Contact management system featuring CRUD operations, favorite toggling and dedicated filtering.',
    },
    filename: 'contact_manager.py',
    lines: [
      { prefix: '$', prefixType: 'prompt', text: ' python contact_manager.py' },
      { prefixType: 'comment', text: '---- Contacts manager -----' },
      { prefix: '1.', prefixType: 'number', text: ' Add a contact' },
      { prefix: '2.', prefixType: 'number', text: ' View contacts' },
      { prefix: '3.', prefixType: 'number', text: ' Edit a contact' },
      { prefix: '4.', prefixType: 'number', text: ' Mark or unmark contact as favorite' },
      { prefixType: 'comment', text: '...' },
    ],
    repoUrl: 'https://github.com/leonardoprokopowiskii/contact-manager',
    delay: '.12s',
  },
];
