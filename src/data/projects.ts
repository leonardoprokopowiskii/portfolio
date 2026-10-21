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
    pt: 'Ecossistema interno de governança, automação e engenharia de produto integrado ao Azure DevOps. Centraliza indicadores executivos, gestão de releases, capacitação interna e automações operacionais para PMs, POs, Scrum Masters e diretoria.',
    en: 'Internal ecosystem for governance, automation and product engineering, integrated with Azure DevOps. It centralizes executive indicators, release management, internal training and operational automations for PMs, POs, Scrum Masters and leadership.',
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
        pt: 'plataforma integrada de capacitação com trilhas de aprendizado, vídeos e materiais técnicos da operação.',
        en: 'integrated training platform with learning paths, videos and technical material from the operation.',
      },
    },
    {
      bold: {
        pt: 'Dashboards & Relatórios de Sprint:',
        en: 'Sprint Dashboards & Reports:',
      },
      text: {
        pt: 'visão tática de entregas, reprogramação automática de demandas e disparos de reports semanais.',
        en: 'tactical view of deliveries, automatic rescheduling of demands and weekly report dispatches.',
      },
    },
    {
      bold: {
        pt: 'Arquitetura & Segurança:',
        en: 'Architecture & Security:',
      },
      text: {
        pt: 'integração em tempo real com APIs do Azure DevOps, banco PostgreSQL e autenticação SSO via Keycloak.',
        en: 'real-time integration with Azure DevOps APIs, a PostgreSQL database and SSO authentication via Keycloak.',
      },
    },
  ],
  chips: ['Python', 'Flask', 'React', 'PostgreSQL', 'Azure DevOps API', 'Keycloak'],
};

export const cliProjects: CliProject[] = [
  {
    id: 'task-manager',
    tag: 'Python',
    title: 'Task Manager',
    description: {
      pt: 'Gerencie suas tarefas por um menu simples no terminal.',
      en: 'Manage your tasks from a simple menu in the terminal.',
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
    tag: 'Python',
    title: 'Contact Manager',
    description: {
      pt: 'Salve, edite e organize contatos, com favoritos e filtro de favoritos.',
      en: 'Save, edit and organize contacts, with favorites and a favorites filter.',
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
