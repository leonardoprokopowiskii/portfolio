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
    pill: string;
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
      pill: 'Aprendiz de desenvolvimento de software @ SPRO, an NTT DATA company',
      h1Line1: 'Olá, sou o Leonardo.',
      h1Line2: 'Backends, APIs e dados',
      h1Line3: 'movidos a Python.',
      lead: 'Estudante de Engenharia de Software em Curitiba, Brasil. Aprendo construindo, um projeto de cada vez, com foco em software para o mercado global.',
      seeProjects: 'Ver meus projetos',
      getInTouch: 'Fale comigo',
      downloadResume: 'Baixar currículo',
      codeAria: 'Código Python descrevendo Leonardo: desenvolvedor backend com Python, Flask e FastAPI',
    },
    projects: {
      title: 'Projetos',
      subtitle:
        'Aplicativos de terminal feitos em Python para praticar lógica de CRUD, menus e estrutura de programa. APIs com Flask e FastAPI são o próximo passo.',
      workTag: 'Projeto profissional',
      viewOnGithub: 'Ver no GitHub',
      internalNote: 'Projeto interno, sem repositório público.',
    },
    experience: {
      title: 'Experiência e formação',
      subtitle: 'Onde trabalho e o que estudo.',
    },
    stack: {
      title: 'Stack',
      subtitle: 'Ferramentas e tecnologias que uso no dia a dia.',
      backend: 'Backend',
      frontend: 'Frontend',
      databases: 'Bancos de dados',
      tools: 'Ferramentas',
    },
    contact: {
      ctaTitle: 'Vamos construir algo juntos.',
      ctaSub:
        'Sou estudante e estou crescendo em desenvolvimento backend. Feedback, oportunidades ou um simples oi são sempre bem-vindos.',
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
      pill: 'Software development apprentice @ SPRO, an NTT DATA company',
      h1Line1: 'Hi, I’m Leonardo.',
      h1Line2: 'Backends, APIs and data',
      h1Line3: 'powered by Python.',
      lead: 'Software engineering student in Curitiba, Brazil. I’m learning by building, one project at a time, and aiming at software for a global market.',
      seeProjects: 'See my projects',
      getInTouch: 'Get in touch',
      downloadResume: 'Download resume',
      codeAria: 'Python code describing Leonardo: backend developer working with Python, Flask and FastAPI',
    },
    projects: {
      title: 'Projects',
      subtitle:
        'Terminal apps built in Python to practice CRUD logic, menus and program structure. APIs with Flask and FastAPI come next.',
      workTag: 'Work project',
      viewOnGithub: 'View on GitHub',
      internalNote: 'Internal project, no public repository.',
    },
    experience: {
      title: 'Experience and education',
      subtitle: 'Where I work and what I’m studying.',
    },
    stack: {
      title: 'Stack',
      subtitle: 'Tools and technologies I use day to day.',
      backend: 'Backend',
      frontend: 'Frontend',
      databases: 'Databases',
      tools: 'Tools',
    },
    contact: {
      ctaTitle: 'Let’s build something.',
      ctaSub:
        'I’m a student growing in backend development. Feedback, opportunities or a simple hello are all welcome.',
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
