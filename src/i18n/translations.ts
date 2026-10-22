export type Language = 'pt' | 'en';

export interface Translations {
  nav: {
    projects: string;
    experience: string;
    stack: string;
    contact: string;
    openMenu: string;
  };
  hero: {
    pillRole: string;
    pillCompany: string;
    h1Line1: string;
    h1Line2: string;
    h1Line3: string;
    lead: string;
    seeProjects: string;
    getInTouch: string;
    downloadResume: string;
    codeAria: string;
  };
  projects: {
    title: string;
    subtitle: string;
    workTag: string;
    viewOnGithub: string;
    internalNote: string;
  };
  experience: {
    title: string;
    subtitle: string;
  };
  stack: {
    title: string;
    subtitle: string;
    backend: string;
    frontend: string;
    databases: string;
    tools: string;
  };
  contact: {
    ctaTitle: string;
    ctaSub: string;
    downloadResume: string;
    formTitle: string;
    nameLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    sendButton: string;
    sending: string;
    statusMailto: string;
    statusSent: string;
  };
  footer: {
    text: string;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      projects: 'Projetos',
      experience: 'Experiência',
      stack: 'Stack',
      contact: 'Contato',
      openMenu: 'Abrir menu',
    },
    hero: {
      pillRole: 'Desenvolvedor Full-Stack',
      pillCompany: 'SPRO, an NTT DATA company',
      h1Line1: 'Olá, sou o Leonardo.',
      h1Line2: 'Aplicações web, APIs e',
      h1Line3: 'soluções Full-Stack.',
      lead: 'Estudante de Engenharia de Software em Curitiba, Brasil. Construo aplicações web modernas, APIs RESTful e automações escaláveis com React, TypeScript, Node.js e Python.',
      seeProjects: 'Ver meus projetos',
      getInTouch: 'Fale comigo',
      downloadResume: 'Baixar currículo',
      codeAria: 'Código TypeScript descrevendo Leonardo: desenvolvedor full-stack com React, TypeScript, Node.js e Python',
    },
    projects: {
      title: 'Projetos',
      subtitle:
        'De plataformas corporativas full-stack e interfaces web modernas a automações e aplicações de linha de comando.',
      workTag: 'Projeto profissional · Full-Stack',
      viewOnGithub: 'Ver no GitHub',
      internalNote: 'Projeto corporativo interno, sem repositório público.',
    },
    experience: {
      title: 'Experiência e formação',
      subtitle: 'Onde atuo no desenvolvimento de software e o que estudo.',
    },
    stack: {
      title: 'Stack',
      subtitle: 'Tecnologias e ferramentas que utilizo para construir do frontend ao backend.',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Bancos de dados',
      tools: 'Ferramentas & DevOps',
    },
    contact: {
      ctaTitle: 'Vamos construir algo juntos.',
      ctaSub:
        'Sou estudante de Engenharia de Software focado em desenvolvimento Full-Stack. Feedback, oportunidades ou um simples oi são sempre bem-vindos.',
      downloadResume: 'Baixar currículo',
      formTitle: 'Envie uma mensagem',
      nameLabel: 'Nome',
      emailLabel: 'E-mail',
      subjectLabel: 'Assunto',
      messageLabel: 'Mensagem',
      sendButton: 'Enviar mensagem',
      sending: 'Enviando...',
      statusMailto: 'Abrindo seu app de e-mail… Se nada abrir, escreva para ',
      statusSent: 'Mensagem enviada com sucesso! Responderei em breve.',
    },
    footer: {
      text: 'Leonardo Prokopowiski, Curitiba, Brasil.',
    },
  },
  en: {
    nav: {
      projects: 'Projects',
      experience: 'Experience',
      stack: 'Stack',
      contact: 'Contact',
      openMenu: 'Open menu',
    },
    hero: {
      pillRole: 'Full-Stack Developer',
      pillCompany: 'SPRO, an NTT DATA company',
      h1Line1: 'Hi, I’m Leonardo.',
      h1Line2: 'Web apps, APIs and',
      h1Line3: 'Full-Stack solutions.',
      lead: 'Software Engineering student in Curitiba, Brazil. Building modern, scalable web applications, RESTful APIs and automations with React, TypeScript, Node.js and Python.',
      seeProjects: 'See my projects',
      getInTouch: 'Get in touch',
      downloadResume: 'Download resume',
      codeAria: 'TypeScript code describing Leonardo: full-stack developer working with React, TypeScript, Node.js and Python',
    },
    projects: {
      title: 'Projects',
      subtitle:
        'From enterprise full-stack platforms and modern web interfaces to backend automations and CLI applications.',
      workTag: 'Work project · Full-Stack',
      viewOnGithub: 'View on GitHub',
      internalNote: 'Internal enterprise project, no public repository.',
    },
    experience: {
      title: 'Experience and education',
      subtitle: 'Where I build software and what I’m studying.',
    },
    stack: {
      title: 'Stack',
      subtitle: 'Technologies and tools I use day to day across frontend and backend.',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Databases',
      tools: 'Tools & DevOps',
    },
    contact: {
      ctaTitle: 'Let’s build something.',
      ctaSub:
        'I’m a Software Engineering student focused on Full-Stack development. Feedback, opportunities or a simple hello are all welcome.',
      downloadResume: 'Download resume',
      formTitle: 'Send me a message',
      nameLabel: 'Name',
      emailLabel: 'Email',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      sendButton: 'Send message',
      sending: 'Sending...',
      statusMailto: 'Opening your email app… If nothing opens, write to ',
      statusSent: 'Message sent! I will get back to you soon.',
    },
    footer: {
      text: 'Leonardo Prokopowiski, Curitiba, Brazil.',
    },
  },
};
