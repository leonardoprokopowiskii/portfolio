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

export const cliProjects: CliProject[] = [
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
