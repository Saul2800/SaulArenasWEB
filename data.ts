import { SectionData } from './types';
import { Assets } from './assets';

// Helper for type safety if needed, or simple object return
// We will export functions to get data based on language

export const getSkillsData = (lang: 'en' | 'es'): SectionData => {
  const isEn = lang === 'en';
  return {
    title: isEn ? "Skills Categories" : "Categorías de Habilidades",
    items: [
      {
        id: 201,
        title: isEn ? "IT Infrastructure" : "Infraestructura TI",
        subtitle: isEn ? "Support & Systems" : "Soporte y Sistemas",
        description: isEn
          ? "Comprehensive management of technological infrastructure including technical support, process digitalization, documentation, and system integration."
          : "Gestión integral de la infraestructura tecnológica incluyendo soporte técnico, digitalización de procesos, documentación e integración de sistemas.",
        tags: isEn ? ["Support", "Systems", "Integration"] : ["Soporte", "Sistemas", "Integración"],
        category: "skill",
        image: Assets.skills.infrastructure, 
        details: {
          role: isEn ? "IT Specialist" : "Especialista TI",
          techStack: isEn 
            ? ["Technical Support", "Process Digitalization", "Documentation", "System Integration"]
            : ["Soporte Técnico", "Digitalización de Procesos", "Documentación", "Integración de Sistemas"]
        }
      },
      {
        id: 202,
        title: isEn ? "Process Management" : "Gestión de Procesos",
        subtitle: isEn ? "Improvement" : "Mejora",
        description: isEn
          ? "Implementation of continuous improvement methodologies and quality standards to optimize operational workflows."
          : "Implementación de metodologías de mejora continua y estándares de calidad para optimizar flujos de trabajo operativos.",
        tags: ["Lean Six Sigma", "ISO 9001"],
        category: "skill",
        image: Assets.skills.process,
         details: {
          role: isEn ? "Process Engineer" : "Ingeniero de Procesos",
          techStack: ["Lean Six Sigma", "ISO 9001:2015"]
        }
      },
      {
        id: 203,
        title: isEn ? "Programming & DB" : "Programación y BD",
        subtitle: isEn ? "Full Stack" : "Full Stack",
        description: isEn
          ? "Full-stack software development and robust database management using modern languages and relational database systems."
          : "Desarrollo de software full-stack y gestión robusta de bases de datos utilizando lenguajes modernos y sistemas relacionales.",
        tags: isEn ? ["Coding", "Backend", "Frontend"] : ["Código", "Backend", "Frontend"],
        category: "skill",
        image: Assets.skills.programming,
        details: {
          role: isEn ? "Developer" : "Desarrollador",
          techStack: ["Python", "SQL", "C++", "Java", "PHP", "MySQL", "SQL Server"]
        }
      },
      {
        id: 204,
        title: isEn ? "IT Tools" : "Herramientas TI",
        subtitle: isEn ? "Software Suite" : "Suite de Software",
        description: isEn
          ? "Proficiency in essential software tools for development, collaboration, and server management."
          : "Dominio de herramientas de software esenciales para desarrollo, colaboración y gestión de servidores.",
        tags: isEn ? ["Productivity", "DevOps"] : ["Productividad", "DevOps"],
        category: "skill",
        image: Assets.skills.tools,
        details: {
          role: isEn ? "Admin" : "Admin",
          techStack: ["GitHub", "Google Workspace", "Microsoft Tools", "Xampp"]
        }
      },
      {
        id: 205,
        title: isEn ? "Agile Methodologies" : "Metodologías Ágiles",
        subtitle: isEn ? "Frameworks" : "Marcos de Trabajo",
        description: isEn
          ? "Application of agile frameworks to manage projects efficiently, ensuring adaptability and rapid delivery."
          : "Aplicación de marcos de trabajo ágiles para gestionar proyectos eficientemente, asegurando adaptabilidad y entrega rápida.",
        tags: ["Scrum", "Kanban"],
        category: "skill",
        image: Assets.skills.agile,
        details: {
          role: isEn ? "Scrum Master" : "Scrum Master",
          techStack: ["Scrum", "Kanban"]
        }
      },
    ]
  };
};

export const getExperienceData = (lang: 'en' | 'es'): SectionData => {
  const isEn = lang === 'en';
  return {
    title: isEn ? "Experience" : "Experiencia",
    items: [
      {
        id: 1,
        title: "Kaab Code Company",
        subtitle: isEn ? "Software Solutions" : "Soluciones de Software",
        description: isEn 
          ? "Led projects for database and internal system integration. Coordinated support and documentation tasks in administrative environments. Developed websites and IT support platforms for companies and organizations. Implemented digital tools that optimized information management." 
          : "Lideré proyectos de integración de bases de datos y sistemas internos. Coordiné tareas de soporte y documentación en entornos administrativos. Desarrollé sitios web y plataformas de soporte TI para empresas y organizaciones. Implementé herramientas digitales que optimizaron la gestión de la información.",
        tags: isEn ? ["Web Dev", "Integration", "Support"] : ["Desarrollo Web", "Integración", "Soporte"],
        category: "experience",
        image: Assets.experience.kaab,
        details: {
          role: isEn ? "Developer, Debugger and Lead" : "Developer, Debugger y Líder",
          duration: "06/2020 - 03/2023",
          techStack: ["Databases", "Web", "IT Support"],
          link: "https://www.kaabcode.com/"
        }
      },
      {
        id: 4, // Inserting with unique ID
        title: "LATASF",
        subtitle: isEn ? "Technical Support" : "Soporte Técnico",
        description: isEn
          ? "Org focused on the scholarships. Activities: As a technical support specialist for a website, I provide assistance to users. Additionally, I am responsible for collecting and analyzing user data for future use. My role requires a combination of technical expertise, problem-solving skills, and a keen understanding of user needs to deliver effective support and utilize data-driven strategies for continuous improvement."
          : "Organización enfocada en becas. Actividades: Como especialista en soporte técnico para un sitio web, brindo asistencia a los usuarios. Además, soy responsable de recopilar y analizar datos de los usuarios para su uso futuro. Mi rol requiere una combinación de experiencia técnica, habilidades de resolución de problemas y una profunda comprensión de las necesidades del usuario para brindar un soporte efectivo y utilizar estrategias basadas en datos para la mejora continua.",
        tags: isEn ? ["Tech Support", "Data Analysis", "User Assistance"] : ["Soporte Técnico", "Análisis de Datos", "Asistencia al Usuario"],
        category: "experience",
        image: Assets.experience.latasf,
        details: {
          role: isEn ? "Technical Support Specialist" : "Especialista en Soporte Técnico",
          duration: "06/2023- 01/2025",
          techStack: isEn ? ["Web Support", "Data Analysis", "Customer Service"] : ["Soporte Web", "Análisis de Datos", "Servicio al Cliente"],
          link: "https://latasf.org/"
        }
      },
      {
        id: 2,
        title: "Marchesi Company",
        subtitle: isEn ? "Industrial Quality" : "Calidad Industrial",
        description: isEn 
          ? "Digitalized and managed technical documentation for training and quality processes. Implemented verification flows under ISO 9001:2015, improving information traceability. Ensured process quality through the use of digital tools and metrics. Developed technical resource inventories with fast reporting for decision-making." 
          : "Digitalicé y gestioné documentación técnica para capacitación y procesos de calidad. Implementé flujos de verificación bajo ISO 9001:2015, mejorando la trazabilidad de la información. Aseguré la calidad de procesos mediante el uso de herramientas digitales y métricas. Desarrollé inventarios de recursos técnicos con reportes rápidos para la toma de decisiones.",
        tags: isEn ? ["ISO 9001", "Quality Control", "Documentation"] : ["ISO 9001", "Control de Calidad", "Documentación"],
        category: "experience",
        image: Assets.experience.marchesi,
        details: {
          role: isEn ? "CNC Technician" : "Técnico de CNC",
          duration: "08/2022 - 04/2023",
          techStack: isEn ? ["ISO 9001", "Digital Tools", "Reporting"] : ["ISO 9001", "Herramientas Digitales", "Reportes"],
          link: "https://marchesi.com/process/cnc-precision-machining/"
        }
      },
      {
        id: 3,
        title: "FreeLancer",
        subtitle: isEn ? "Independent" : "Independiente",
        description: isEn 
          ? "Data management and organization for personal projects." 
          : "Gestión y organización de datos para proyectos personales.",
        tags: isEn ? ["Data Management", "Organization"] : ["Gestión de Datos", "Organización"],
        category: "experience",
        image: Assets.experience.freelancer,
        details: {
          role: "Freelancer",
          duration: "2018 - Present",
          techStack: isEn ? ["Data", "Admin", "Software"] : ["Datos", "Admin", "Software"],
        }
      },
    ]
  };
};

export const getProjectsData = (lang: 'en' | 'es'): SectionData => {
  const isEn = lang === 'en';
  return {
    title: isEn ? "Projects" : "Proyectos",
    items: [
      {
        id: 101,
        title: "Help desk JNE",
        subtitle: isEn ? "Ticket System" : "Sistema de Tickets",
        description: isEn 
          ? "Ticket monitoring system for reporting errors, anomalies, accidents, and Technical Support assistance for the National Court of Peru." 
          : "Sistema para el monitoreo de tickets para el reporte de errores, anomalías, accidentes y apoyo en Soporte Técnico para el Juzgado Nacional de Perú.",
        tags: isEn ? ["Tickets", "Support", "Web System"] : ["Tickets", "Soporte", "Sistema Web"],
        category: "project",
        image: Assets.projects.helpDesk,
        details: {
          techStack: ["PHP", "MySQL", "Bootstrap"],
          link: "https://github.com/Saul2800/helpdesk"
        }
      },
      {
        id: 102,
        title: "GasValid 2.0",
        subtitle: isEn ? "Compliance" : "Cumplimiento",
        description: isEn 
          ? "Monitoring system for validating pumps and dispensers, recording the current state of gasoline portions dispensed to consumers. The system manages information and sends reports to PROFECO." 
          : "Sistema de monitoreo para la validación de las bombas y dispensarios, el cual registra el estado actual de las porciones de gasolinas que se despachan a los consumidores. El sistema tiene la finalidad de gestionar la información y posteriormente enviarla a PROFECO por medio de reportes.",
        tags: isEn ? ["Monitoring", "Reporting", "Validation"] : ["Monitoreo", "Reportes", "Validación"],
        category: "project",
        image: Assets.projects.gasValid,
        details: {
          techStack: ["Desktop App", "SQL", "PROFECO"],
          link: "https://github.com/Saul2800/GasValid2020"
        }
      },
      {
        id: 103,
        title: "Gas Valid WEB",
        subtitle: "Web Admin",
        description: isEn 
          ? "Web platform for managing Gas Valid 2.0 documentation. Connects client data with the software. Includes a Landing Page, Login, and relational database." 
          : "Página web destinada a la administración de documentos de Gas Valid 2.0. Haciendo conexión entre los datos del cliente y el software. Incluye una Landing Page, un LogIn, y una base de datos relacional.",
        tags: isEn ? ["Full Stack", "Database", "Admin"] : ["Full Stack", "Base de Datos", "Admin"],
        category: "project",
        image: Assets.projects.gasValidWeb,
        details: {
          techStack: ["Web", "Relational DB", "Login"],
          link: "https://github.com/Saul2800/web-gasvalid"
        }
      },
      {
        id: 104,
        title: "AdminCasa",
        subtitle: isEn ? "Real Estate" : "Inmobiliaria",
        description: isEn 
          ? "CRUD system for property and tenant administration. Manages active contract data using relational databases." 
          : "Sistema CRUD para la administración de inmuebles e inquilinos. Haciendo uso de bases de datos relacionales gestionando datos de contratos activos.",
        tags: ["CRUD", "Database", "Management"],
        category: "project",
        image: Assets.projects.adminCasa,
        details: {
          techStack: ["CRUD", "SQL", "Management"],
          link: "https://github.com/Saul2800/adminCasa"
        }
      },
    ]
  };
};

export const getEducationData = (lang: 'en' | 'es'): SectionData => {
  const isEn = lang === 'en';
  return {
    title: isEn ? "Education" : "Educación",
    items: [
      {
        id: 301,
        title: isEn ? "Mechatronic Engineering" : "Ingeniería Mecatrónica",
        subtitle: "Universidad De Guadalajara",
        description: isEn 
          ? "Bachelor's Degree focusing on robotics, control systems, and software development." 
          : "Licenciatura enfocada en robótica, sistemas de control y desarrollo de software.",
        tags: isEn ? ["Engineer", "Software"] : ["Ingeniero", "Software"],
        category: "education",
        image: Assets.education.udg,
        details: {
          role: isEn ? "Student" : "Estudiante",
          duration: "08/2018 - 06/2022",
          techStack: isEn ? ["Software", "Control", "Robotics"] : ["Software", "Control", "Robótica"]
        }
      },
      {
        id: 307, 
        title: isEn ? "Data Science" : "Ciencia de Datos",
        subtitle: "Tecnológico Nacional de Mexico",
        description: isEn
          ? "Diploma program covering R, Python, and Big Data analysis."
          : "Diplomado que cubre R, Python y análisis de Big Data.",
        tags: isEn ? ["Diploma", "Data"] : ["Diplomado", "Datos"],
        category: "education",
        image: Assets.education.tecnm,
        details: {
            role: isEn ? "Student" : "Estudiante",
            duration: "09/2023 – 02/2024",
            techStack: ["R", "Python", "Big Data"]
        }
      },
      {
        id: 302,
        title: isEn ? "Computer Technician" : "Técnico en Computación",
        subtitle: "MEDA",
        description: isEn 
          ? "Technical training in computer systems, maintenance, and basic programming." 
          : "Formación técnica en sistemas computacionales, mantenimiento y programación básica.",
        tags: isEn ? ["Technician", "Hardware", "Software"] : ["Técnico", "Hardware", "Software"],
        category: "education",
        image: Assets.education.meda,
        details: {
          role: isEn ? "Student" : "Estudiante",
          duration: "06/2017 - 07/2017",
          techStack: isEn ? ["IT", "Informatics", "Networks"] : ["TI", "Informática", "Redes"]
        }
      },
      {
        id: 303,
        title: "C++ Advanced",
        subtitle: "Udemy",
        description: isEn 
          ? "Advanced C++ programming concepts." 
          : "Conceptos avanzados de programación en C++.",
        tags: isEn ? ["C++", "Software", "Self-taught"] : ["C++", "Software", "Autodidacta"],
        category: "education",
        image: Assets.education.cpp,
        details: {
          role: isEn ? "Student" : "Estudiante",
          duration: "05/2023",
          techStack: isEn ? ["C++", "OOP", "Backend"] : ["C++", "POO", "Backend"]
        }
      },
      {
        id: 304,
        title: "Lean Six Sigma Yellow Belt",
        subtitle: "International Six Sigma Institute",
        description: isEn
            ? "Certification in process improvement methodologies."
            : "Certificación en metodologías de mejora de procesos.",
        tags: ["Lean", "Six Sigma"],
        category: "education",
        image: Assets.education.lean,
        details: {
            role: isEn ? "Student" : "Estudiante",
            duration: "2023",
            techStack: ["White Belt", "Kanban"]
        }
      },
      {
        id: 305,
        title: "Aerial Robotics",
        subtitle: "University of Pennsylvania (Coursera)",
        description: isEn
            ? "Mechanics and control of aerial vehicles."
            : "Mecánica y control de vehículos aéreos.",
        tags: isEn ? ["Robotics", "Drones"] : ["Robótica", "Drones"],
        category: "education",
        image: Assets.education.aerial,
        details: {
            role: isEn ? "Student" : "Estudiante",
            duration: "2022",
            techStack: isEn ? ["Control Theory", "Matlab", "Drones"] : ["Teoría de Control", "Matlab", "Drones"]
        }
      },
      {
        id: 306,
        title: "Java Programming",
        subtitle: "IEEE",
        description: isEn
            ? "Object-Oriented Programming with Java."
            : "Programación Orientada a Objetos con Java.",
        tags: isEn ? ["Workshop", "OOP"] : ["Taller", "POO"],
        category: "education",
        image: Assets.education.java,
        details: {
            role: isEn ? "Student" : "Estudiante",
            duration: "2022",
            techStack: isEn ? ["Java", "OOP"] : ["Java", "POO"]
        }
      }
    ]
  };
};

export const getLanguageData = (lang: 'en' | 'es'): SectionData => {
  const isEn = lang === 'en';
  return {
    title: isEn ? "Languages" : "Idiomas",
    items: [
      {
        id: 401,
        title: isEn ? "Spanish" : "Español",
        subtitle: isEn ? "Native" : "Nativo",
        description: isEn
          ? "Native language, proficient in technical and professional communication."
          : "Idioma nativo, dominio en comunicación técnica y profesional.",
        tags: isEn ? ["Native", "Fluent"] : ["Nativo", "Fluido"],
        category: "language",
        image: Assets.languages.es,
      },
      {
        id: 402,
        title: isEn ? "English" : "Inglés",
        subtitle: isEn ? "CEFR B2" : "MCER B2",
        description: isEn
          ? "Professional working proficiency. Able to communicate effectively in technical environments."
          : "Competencia profesional laboral. Capaz de comunicarse efectivamente en entornos técnicos.",
        tags: isEn ? ["B2", "Professional"] : ["B2", "Profesional"],
        category: "language",
        image: Assets.languages.en,
      }
    ]
  };
};