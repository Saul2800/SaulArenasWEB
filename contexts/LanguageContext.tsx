import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface Translations {
  hero: {
    role1: string;
    role2: string;
    contactMe: string;
    moreInfo: string;
  };
  navbar: {
    home: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    languages: string;
    downloadCv: string;
  };
  row: {
    exploreAll: string;
  };
  modal: {
    viewCode: string;
    readMore: string;
    myList: string;
    role: string;
    tags: string;
    techStack: string;
    mostLiked: string;
  };
  contact: {
    title: string;
    emailLabel: string;
    phoneLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    copied: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  };
  footer: {
    audioDesc: string;
    investor: string;
    legal: string;
    service: string;
    disclaimer: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    hero: {
      role1: "Mechatronics Engineer",
      role2: "Software Developer",
      contactMe: "Contact Me",
      moreInfo: "More Info",
    },
    navbar: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      languages: "Languages",
      downloadCv: "Download CV",
    },
    row: {
      exploreAll: "Explore All >",
    },
    modal: {
      viewCode: "View Code",
      readMore: "Read More",
      myList: "My List",
      role: "Role",
      tags: "Tags:",
      techStack: "Tech Stack:",
      mostLiked: "Most Liked this week",
    },
    contact: {
      title: "Contact Me",
      emailLabel: "Email",
      phoneLabel: "Phone",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      copied: "Copied!",
    },
    about: {
      title: "About Me",
      p1: "In 2017 I faced a dilemma, I didn't know whether to study art or engineering, typical of a young dreamer. Searching through all engineering fields I found one that caught my attention: Mechatronics... that was when I discovered that art and engineering can be combined.",
      p2: "Hi, I'm Saúl, a mechatronics engineer focused on software development and a great lover of art and science. I have always been a curious and creative person. At 17, I opted to study engineering to learn a bit of everything, and software was my choice of specialization.",
      p3: "During my journey, I had the opportunity to work with friends and even family on projects in this field. Driven by family, I began exploring Python and continued my path with a diploma in data science. I have worked on projects ranging from small businesses to international organizations. I also collaborated with non-profit foundations to support the education of migrant students.",
      p4: "I am a person eager to grow and support a community. Do you have a project in mind?",
    },
    footer: {
      audioDesc: "Audio Description",
      investor: "Investor Relations",
      legal: "Legal Notices",
      service: "Service Code",
      disclaimer: "© 2026 Saúl Arenas Portfolio.",
    }
  },
  es: {
    hero: {
      role1: "Ingeniero Mecatrónico",
      role2: "Desarrollador de Software",
      contactMe: "Contáctame",
      moreInfo: "Más Info",
    },
    navbar: {
      home: "Inicio",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      education: "Educación",
      languages: "Idiomas",
      downloadCv: "Descargar CV",
    },
    row: {
      exploreAll: "Explorar Todo >",
    },
    modal: {
      viewCode: "Ver Código",
      readMore: "Leer Más",
      myList: "Mi Lista",
      role: "Rol",
      tags: "Etiquetas:",
      techStack: "Tecnologías:",
      mostLiked: "Más gustado esta semana",
    },
    contact: {
      title: "Contáctame",
      emailLabel: "Correo",
      phoneLabel: "Teléfono",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      copied: "¡Copiado!",
    },
    about: {
      title: "Acerca de mí",
      p1: "En 2017 me encontraba en un dilema, no sabía si estudiar arte o ingeniería, típico de un joven soñador. Buscando entre todas las ingenierías encontré una que me llamó la atención: Mecatrónica… fue ahí cuando descubrí que el arte y la ingeniería se pueden combinar.",
      p2: "Hola soy Saúl, un ingeniero mecatrónico enfocado en el desarrollo de software y un gran amante del arte y la ciencia. Siempre he sido una persona curiosa y creativa. A mis 17 años opté por estudiar una ingeniería que me enseñara algo de todo y fue el software mi elección de especialización.",
      p3: "Durante mi trayecto tuve la oportunidad de trabajar con amigos e incluso familiares en proyectos de este giro. Impulsado por familiares comencé a explorar el lenguaje Python y continué mi trayectoria con un diplomado en ciencia de datos. He trabajado para proyectos desde pequeñas empresas hasta organizaciones internacionales. También estuve colaborando con fundaciones sin fines de lucro para apoyar la educación de alumnos migrantes.",
      p4: "Soy una persona con ganas de crecer y apoyar a una comunidad. ¿Tienes un proyecto en mente?",
    },
    footer: {
      audioDesc: "Descripción de Audio",
      investor: "Relaciones con Inversionistas",
      legal: "Avisos Legales",
      service: "Código de Servicio",
      disclaimer: "© 2026 Portafolio Saúl Arenas.",
    }
  },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es'); // Default to Spanish as requested by latest prompt context implied

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};