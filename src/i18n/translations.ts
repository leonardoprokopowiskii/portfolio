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
      pillRole: 'Desenvolvedor Backend Python',
      pillCompany: 'SPRO, an NTT DATA company',
      h1Line1: 'Olá, sou o Leonardo.',
      h1Line2: 'APIs, automações e',
      h1Line3: 'backends em Python.',
      lead: 'Estudante de Engenharia de Software em Curitiba. Construo APIs REST, automações e sistemas backend com Python e Flask, além de interfaces com React.',
      seeProjects: 'Ver meus projetos',
      getInTouch: 'Fale comigo',
      downloadResume: 'Baixar currículo',
      codeAria: 'Código Python descrevendo Leonardo: desenvolvedor backend com Python, Flask, Node.js e PostgreSQL',
    },
    projects: {
      title: 'Projetos',
      subtitle:
        'Da plataforma corporativa integrada ao Azure DevOps aos novos projetos em desenvolvimento.',
      workTag: 'Projeto profissional · Backend & APIs',
      viewOnGithub: 'Ver no GitHub',
      internalNote: 'Projeto corporativo interno, sem repositório público.',
    },
    experience: {
      title: 'Experiência e formação',
      subtitle: 'Onde atuo no desenvolvimento backend e o que estudo.',
    },
    stack: {
      title: 'Stack',
      subtitle: 'Tecnologias e ferramentas que uso para construir backends, APIs e automações.',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Bancos de dados',
      tools: 'Ferramentas & DevOps',
    },
    contact: {
      ctaTitle: 'Vamos construir algo juntos.',
      ctaSub:
        'Sou estudante de Engenharia de Software focado em backend com Python. Feedback, oportunidades ou um simples oi são sempre bem-vindos.',
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
      pillRole: 'Python Backend Developer',
      pillCompany: 'SPRO, an NTT DATA company',
      h1Line1: 'Hi, I’m Leonardo.',
      h1Line2: 'APIs, automations and',
      h1Line3: 'Python backends.',
      lead: 'Software Engineering student in Curitiba. I build REST APIs, automations and backend systems with Python and Flask, plus interfaces with React.',
      seeProjects: 'See my projects',
      getInTouch: 'Get in touch',
      downloadResume: 'Download resume',
      codeAria: 'Python code describing Leonardo: backend developer working with Python, Flask, Node.js and PostgreSQL',
    },
    projects: {
      title: 'Projects',
      subtitle:
        'From the enterprise platform integrated with Azure DevOps to upcoming projects in development.',
      workTag: 'Work project · Backend & APIs',
      viewOnGithub: 'View on GitHub',
      internalNote: 'Internal enterprise project, no public repository.',
    },
    experience: {
      title: 'Experience and education',
      subtitle: 'Where I build backend software and what I’m studying.',
    },
    stack: {
      title: 'Stack',
      subtitle: 'Technologies and tools I use to build backends, APIs and automations.',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Databases',
      tools: 'Tools & DevOps',
    },
    contact: {
      ctaTitle: 'Let’s build something.',
      ctaSub:
        'I’m a Software Engineering student focused on Python backend. Feedback, opportunities or a simple hello are all welcome.',
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
