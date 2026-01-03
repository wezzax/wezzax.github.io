import localLogo from '../assets/wzx-logo.png';
import type {ImageMetadata} from "astro";

// Fix internal error response in local environment running preview
const imageMetadataLogo = (localLogo as ImageMetadata);
const localLogoFixed = {
  src: imageMetadataLogo.src.replace('@fs/', ''),
  width: imageMetadataLogo.width,
  height: imageMetadataLogo.height,
  format: imageMetadataLogo.format,
} as ImageMetadata;

export default {
  layout: {
    title: 'WEZZAX - Desarrollo de Aplicaciones Web SaaS',
    description: 'Desarrollamos aplicaciones web SaaS escalables y modernas',
  },
  header: {
    siteName: 'WEZZAX',
    logo: localLogoFixed,
    links: [
      {
        id: 'inicio',
        label: 'Inicio',
        class: 'active',
      },
      {
        id: 'servicios',
        label: 'Soluciones',
        class: '',
      },
      {
        id: 'casos',
        label: 'Casos de éxito',
        class: '',
      },
      {
        id: 'contacto',
        label: 'Contacto',
        class: '',
      },
      {
        id: 'start-project',
        label: 'Empezar ahora',
        class: 'btn-primary',
      },
    ]
  },
  footer: {
    copyright: 'WEZZAX. Todos los derechos reservados',
    links: [
      { id: 'politica-de-privacidad', label: 'Política de Privacidad'},
      { id: 'terminos-de-uso', label: 'Términos de Uso'},
      { id: 'contacto', label: 'Contacto'},
    ]
  },
  services: {
    title: 'Lo que hacemos',
    description: 'Soluciones tecnológicas que impulsan tu negocio al siguiente nivel',
    items: [
      {
        title: 'Desarrollo<br>Web SaaS',
        description: 'Creamos aplicaciones web escalables con las últimas tecnologías del mercado',
        features: [
          'React, Vue, Angular',
          'APIs REST & GraphQL',
          'Cloud Native',
        ]
      },
      {
        title: 'Plataformas SaaS',
        description: 'Soluciones completas listas para escalar',
        features: [
          'Multi-tenant',
          'Pagos integrados',
          'Analytics avanzado',
        ]
      },
      {
        title: 'Consultoría Tech',
        description: 'Optimiza tu arquitectura y procesos',
        features: [
          'Code Review',
          'DevOps & CI/CD',
          'Security Audit',
        ]
      },
    ]
  },
  stats: {
    title: 'Resultados que hablan por sí solos',
    items: [
      {
        number: '200+',
        label: 'Proyectos completados',
        color: '#3d5af1',
      },
      {
        number: '98%',
        label: 'Satisfacción del cliente',
        color: '#6b4ce6',
      },
      {
        number: '50+',
        label: 'Empresas confían en nosotros',
        color: '#3feaac',
      },
      {
        number: '24/7',
        label: 'Soporte técnico',
        color: '#3d5af1',
      }
    ]
  },
  cases: {
    title: 'Casos de éxito',
    description: 'Proyectos que transformaron negocios',
    items: [
      {
        title: 'FinanceHub Pro',
        description: 'Plataforma SaaS de gestión financiera que incrementó la eficiencia en un 300%',
        color: 'rgba(61, 90, 241, 0.1)',
      },
      {
        title: 'EduConnect',
        description: 'Plataforma educativa online que conecta a 50,000+ estudiantes',
        color: 'rgba(107, 76, 230, 0.1)',
      },
      {
        title: 'ShopFlow',
        description: 'E-commerce SaaS que procesó +$5M en su primer año',
        color: 'rgba(63, 234, 172, 0.15)',
      }
    ]
  },
  technologies: {
    title: 'Tecnologías que dominamos',
    items: [
      {
        label: 'React',
        color: '#3d5af1',
      },
      {
        label: 'Node',
        color: '#6b4ce6',
      },
      {
        label: 'Python',
        color: '#3feaac',
      },
      {
        label: 'AWS',
        color: '#3d5af1',
      },
      {
        label: 'Docker',
        color: '#6b4ce6',
      },
      {
        label: 'K8s',
        color: '#3feaac',
      },
      {
        label: 'TypeScript',
        color: '#3d5af1',
      },
    ]
  },
  testimonials: {
    title: 'Lo que dicen nuestros clientes',
    items: [
      {
        text: 'Wezzax transformó completamente nuestra forma de trabajar. La plataforma que desarrollaron superó todas nuestras expectativas.',
        author: 'María González',
        role: 'CEO, TechStart',
        color: 'rgba(61, 90, 241, 0.2)',
      },
      {
        text: 'Profesionales de primer nivel. El soporte continuo y la calidad del código son excepcionales. Totalmente recomendados.',
        author: 'Carlos Ruiz',
        role: 'CTO, InnovaSoft',
        color: 'rgba(107, 76, 230, 0.2)',
      },
      {
        text: 'La mejor decisión que tomamos fue trabajar con Wezzax. Entregaron a tiempo y el resultado fue impecable.',
        author: 'Ana Martínez',
        role: 'Founder, DataHub',
        color: 'rgba(63, 234, 172, 0.3)',
      },
    ],
  },
  startProjects: {
    title: '¿Listo para comenzar tu proyecto?',
    description: 'Hablemos sobre cómo podemos ayudarte a crear la solución perfecta',
    actions: [
      { id: 'contacto', class: 'btn-white', label: 'Agendar consulta' },
      { id: 'casos', class: 'btn-outline-white', label: 'Ver portfolio' },
    ]
  },
  contact: {
    title: 'Contáctanos',
    description: 'Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas',
    form: {
      nameLabel: 'Nombre completo',
      emailLabel: 'Email',
      companyLabel: 'Empresa',
      projectLabel: 'Cuéntanos sobre tu proyecto...',
      sendButtonLabel: 'Enviar',
      confirmationMessage: '¡Gracias por tu mensaje! Te contactaremos pronto.',
    }
  }
};
