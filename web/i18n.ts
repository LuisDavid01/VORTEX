import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        services: "Services",
        faq: "FAQ",
        features: "Features",
      },
      footer: {
        vortex: "© 2026 Vortex. All rights reserved.",
      },
      //Main Page
      landing: {
        title: "We develop your perfect website",
        description: "We design modern, functional, and fully customized websites to boost your online business.",
        professionalDesign:"Professional Design",
        responsive: "Fully Responsive",
        seo: "SEO Optimized",
        quote: "Get a quote for your digital dream!",
        featuresTitle: "Our Features",
		btnContact: "Interested? Email us",
		toastMessage: "Copied to clipboard!",
        modal:{
          title: "Calculate your Budget",
          webType: "Select a website type",
          landing: "Landing Page",
          ecomerce: "Online Store",
          corporative: "Corporate Website",
          featuresTitle: "Additional Features:",
          budget: "Calculate Budget",
          estimated: "Estimated Budget:",
          features: {
            responsiveDesign: "Responsive Design",
            paymentGateway: "Payment Gateway Integration",
            basicSEO: "Basic SEO",
            contactForm: "Contact Form",
          }
        },
        features: {
          responsive: {
            title: "Responsive Design",
            description: "Websites that adapt perfectly to any device.",
          },
          custom: {
            title: "Customizable",
            description: "Create your own custom digital space.",
          },
          cleanCode: {
            title: "Clean Code",
            description: "Development with best practices and modern technologies.",
          },
          fastDelivery: {
            title: "Fast deliveries",
            description: "Quality projects tailored to your business deadlines.",
          },
          highPerfomance: {
            title: "High Performance",
            description: "Fast and optimized websites for an excellent experience.",
          },
          dataBase: {
            title: "Database development and design",
            description: "We design SQL and NoSQL databases. MySQL, SQL Server, MongoDB, SQLite.",
          },
        }
      },
      //Services Page
      services: {
        section1:{
          titleLine1: "Software and application ",
          titleLine2: "development",
          description1: "At Vortex, we focus on offering secure, efficient, versatile, and scalable solutions. We work with small niche websites that require a simple page to create their funnel, growing businesses that require dashboards and human resources management, and even businesses with a large customer base that needs a fast and robust website.",
          description2: "We have powerful AI-based digital tools that cover the front-end, back-end, web applications, and content. We develop your application's infrastructure and architecture using modern industry standards, deploying your application entirely in the cloud at affordable prices for your business.",
        },
        section2:{
          title: "Why choose us?",
          description: "What sets us apart is our ability to deliver robust, scalable products using the latest technologies adapted to current design and architecture standards. Our services are focused on consuming the least amount of resources, making us an excellent choice for working with cloud services. We adapt to our clients' needs and strive to exceed their expectations.",
         },
         section3: {
          title: "Our Services",
          services: {
            landing: {
              title: "Landing Pages",
              description: "We build landing pages focused on generating leads for your company,\noptimized for high conversion rates."
            },
            comerce: {
              title: "E-commerce",
              description: "We offer services for entrepreneurs who want to modernize their commerce systems. We help you explore the nearly infinite growth opportunities the internet provides. We support modern payment methods and best practices to keep your business and customers safe online."
            },
            corporative: {
              title: "Corporate Pages",
              description: "We develop corporate applications mainly dedicated to dashboards, human resources, and data analysis."
            },
            micro: {
              title: "Microservices",
              description: "Are there parts of your application that need to be reused across multiple areas? Do you need to scale a specific part of your app but it's too expensive to modify the monolith? Do you have a legacy system that needs updating? What you need is to implement microservices."
            },
            database: {
              title: "Database Development",
              "description": "We design the layout and architecture of relational and non-relational databases using popular cloud technologies."
            },
            api: {
              "title": "Robust API Development for High User Load",
              "description": "We create APIs that keep your business logic secure while maintaining excellent performance under heavy workloads."
            }
          }
        }
      },
      //FAQ Page
      faqs: {
        title: "Frequently Asked Questions",
       items: [
      {
        "question": "How long does it take to create a website?",
        "answer": "The time depends on the complexity of the project, but we usually take between 2 to 6 weeks to deliver a functional and optimized website."
      },
      {
        "question": "Are the websites compatible with all devices?",
        "answer": "Yes, all of our websites are designed with a responsive approach, meaning they adapt perfectly to any device, whether mobile, tablet, or desktop."
      },
      {
        "question": "Do you offer maintenance services?",
        "answer": "Yes, we offer personalized maintenance plans to ensure your website is always up-to-date and running smoothly."
      },
      {
        "question": "What payment options do you offer?",
        "answer": "We accept payments via bank transfer, credit and debit cards. We also offer installment plans for larger projects."
      },
      {
        "question": "Can I customize my website after it's finished?",
        "answer": "Of course! We design websites that are easy to customize. Plus, we provide you with tools and support to make adjustments whenever needed."
      },
      {
        "question": "Is SEO optimization included?",
        "answer": "Yes, all our websites are SEO optimized, helping your page become more visible on search engines like Google."
      },
      {
        "question": "Can you integrate my site with social media?",
        "answer": "Absolutely, we can integrate your website with your social networks so you can easily share content and increase your online presence."
      },
      {
        "question": "Do you provide hosting and domain services?",
        "answer": "We do not directly provide hosting or domain, but we advise you on the best options and help with the setup."
      },
      {
        "question": "What technologies do you use to build websites?",
        "answer": "We use modern technologies like React, Tailwind CSS, and databases like MySQL and MongoDB, depending on project needs."
      },
      {
        "question": "Can I see the progress of my project during development?",
        "answer": "Yes, we provide regular updates and access to a development version so you can follow the progress and give us feedback."
      }
    ]
      },
      //Contact Page
      contact: {
        title: "Contact Us",
        nameLabel: "Name",
        emailLabel: "Email",
        messageLabel: "Message",
        submitButton: "Send Message",
        captchaError: "Please verify the captcha",
        submitError: "Error sending the message",
        successMessage: "Your email has been sent successfully",
      },
    },
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        services: "Servicios",
        faq: "FAQ",
        features: "Características",
      },
      footer: {
        vortex: "© 2026 Vortex. Todos los derechos reservados.",
      },
      //Main Page
      landing: {
        title: "Creamos tu Página Web Perfecta",
        description: "Diseñamos sitios web modernos, funcionales y totalmente personalizados para impulsar tu negocio online.",
        professionalDesign:"Diseño Profesional",
        responsive: "Totalmente Responsive",
        seo: "Optimizado para SEO",
        quote: "Cotiza tu sueño digital!",
        featuresTitle: "Nuestras Características",
		btnContact: "¿Interesado? Envíanos un correo",
		toastMessage: "¡Copiado al portapapeles!",
        modal:{
          title: "Calcula tu Presupuesto",
          webType: "Selecciona un tipo de web",
          landing: "Landing Page",
          ecomerce: "Tienda Online",
          corporative: "Web Corporativa",
          featuresTitle: "Características adicionales:",
          budget: "Calcular Presupuesto",
          estimated: "Presupuesto Estimado:",
          features: {
            responsiveDesign: "Diseño Responsivo",
            paymentGateway: "Integración Pasarela de Pago",
            basicSEO: "SEO Básico",
            contactForm: "Formulario de Contacto",
          },
        },
        features: {
          responsive: {
            title: "Diseño Responsivo",
            description: "Sitios web que se adaptan perfectamente a cualquier dispositivo.",
          },
          custom: {
            title: "Personalizable",
            description: "Crea tu propio espacio digital a medida.",
          },
          cleanCode: {
            title: "Código Limpio",
            description: "Desarrollo con las mejores prácticas y tecnologías modernas.",
          },
          fastDelivery: {
            title: "Entregas rápidas",
            description: "Proyectos de calidad adaptados a las fechas límite de su negocio.",
          },
          highPerfomance: {
            title: "Alto Rendimiento",
            description: "Páginas web rápidas y optimizadas para una excelente experiencia.",
          },
          dataBase: {
            title: "Desarrollo y diseño de bases de datos",
            description: "Diseñamos bases de datos SQL y NoSql. MySql, Sql Server, MongoDB, SQLite.",
          },
        }
      },
      //Services Page
      services: {
        section1: {
          titleLine1: "Desarrollo de software y",
          titleLine2: "aplicaciones",
          description1: "En Vortex, nos centramos en ofrecer soluciones seguras, eficientes, versátiles y escalables. Trabajamos con pequeñas páginas de nicho que requieren una página sencilla para crear su funnel, empresas en crecimiento que requieren dashboards y manejo de recursos humanos, hasta comercios con una base de clientes que necesita una página rápida y robusta.",
          description2: "Disponemos de poderosas herramientas digitales basadas en IA que cubren el front-end, back-end, aplicaciones web y el contenido. Nos encargamos de desarrollar la infraestructura y la arquitectura de su aplicación utilizando los nuevos y modernos estándares de la industria desplegando su aplicación totalmente en la nube con precios asequibles para su emprendimiento.",
        },
       section2:{
        title: "¿Por qué elegirnos a nosotros?",
        description: "Lo que nos diferencia es nuestra capacidad para entregar productos sólidos, escalables y utilizando las últimas tecnologías adaptadas a estándares actuales de diseño y arquitectura. Nuestros servicios están centrados en consumir la menor cantidad de recursos, haciéndonos una excelente opción para trabajar con servicios en la nube. Nos adaptamos a las necesidades de nuestros clientes y buscamos sobrepasar sus expectativas.",
       },
       section3:{
        title: "Nuestros servicios",
        services: {
          landing:{
            title: "Landing pages",
            description: "Construimos landing pages centrada en conseguir leads para su empresa,\n optimizada para altas tasas de conversion.",
          },
          comerce:{
            title: "Comercio electronico",
            description: "Ofrecemos servicios a emprendedores que quieran modernizar sus sitemas de comercio, te ayudamos a explorar la casi inifita posibilidad de crecimiento que ofrece internet. Soportamos metodos de pago modernos y buenas practicas para mantener a tu negocio y tus clientes seguros en linea.",
          },
          corporative:{
            title: "Paginas coorporativas",
            description: "Desarrollamos aplicaciones corporativas principalmente dedicadas a dashboards, recursos humanos y analisis de datos.",
          },
          micro:{
            title: "Microservicios",
            description: "¿Hay partes de su aplicación que requieren ser reutilizadas en varios sectores? ¿Necesita escalar una parte especifica de su aplicación pero resulta muy cara hacer cambios en el mismo monolito? ¿Tiene un sistema de legado que necesita actualizarce? Lo que necesita es implementar microservicios.",
          },
          database:{
            title: "Desarrollo de bases de datos",
            description: "Diseñamos el diseño y arquitectura de bases de datos relacionales y no relacionales utlizando tecnologias populares en la nube.",
          },
          api:{
            title: "Desarrollo de APIs robustas para alta carga de usuarios",
            description: "Creamos APIs que mantienen tu logica de negocio segura y mantiendo rendimiento excelente a altas cargas de trabajo.",
          },
        }
       }
      },
       //FAQ Page
       faqs: {
        title: "Preguntas Frecuentes",
        "items": [
          {
            "question": "¿Cuánto tiempo toma crear una página web?",
            "answer": "El tiempo depende de la complejidad del proyecto, pero generalmente tomamos entre 2 y 6 semanas para entregar un sitio web funcional y optimizado."
          },
          {
            "question": "¿Los sitios web son compatibles con todos los dispositivos?",
            "answer": "Sí, todos nuestros sitios web son diseñados con un enfoque responsivo, lo que significa que se adaptan perfectamente a cualquier dispositivo, ya sea móvil, tablet o escritorio."
          },
          {
            "question": "¿Ofrecen servicios de mantenimiento?",
            "answer": "Sí, ofrecemos planes de mantenimiento personalizados para asegurarnos de que tu sitio web esté siempre actualizado y funcionando sin problemas."
          },
          {
            "question": "¿Qué opciones de pago ofrecen?",
            "answer": "Aceptamos pagos mediante transferencia bancaria, tarjetas de crédito y débito. También ofrecemos planes de pago en cuotas para proyectos más grandes."
          },
          {
            "question": "¿Puedo personalizar mi sitio web después de que esté terminado?",
            "answer": "¡Claro! Diseñamos sitios web que son fáciles de personalizar. Además, te proporcionamos herramientas y soporte para que puedas hacer ajustes cuando lo necesites."
          },
          {
            "question": "¿Incluyen optimización para SEO?",
            "answer": "Sí, todos nuestros sitios web están optimizados para SEO, lo que ayuda a que tu página sea más visible en los motores de búsqueda como Google."
          },
          {
            "question": "¿Pueden integrar mi sitio con redes sociales?",
            "answer": "Por supuesto, podemos integrar tu sitio web con tus redes sociales para que puedas compartir contenido fácilmente y aumentar tu presencia online."
          },
          {
            "question": "¿Ofrecen hosting y dominio?",
            "answer": "No ofrecemos hosting ni dominio directamente, pero te asesoramos para elegir las mejores opciones y te ayudamos con la configuración."
          },
          {
            "question": "¿Qué tecnologías utilizan para desarrollar los sitios?",
            "answer": "Utilizamos tecnologías modernas como React, Tailwind CSS, y bases de datos como MySQL y MongoDB, dependiendo de las necesidades del proyecto."
          },
          {
            "question": "¿Puedo ver el progreso de mi proyecto durante el desarrollo?",
            "answer": "Sí, te proporcionamos actualizaciones regulares y acceso a una versión en desarrollo para que puedas seguir el progreso y darnos feedback."
          }
        ]
      },
      //Contact Page
      contact: {
        title: "Contáctanos",
        nameLabel: "Nombre",
        emailLabel: "Correo Electrónico",
        messageLabel: "Mensaje",
        submitButton: "Enviar Mensaje",
        captchaError: "Verifica el captcha",
        submitError: "Error al enviar el mensaje",
        successMessage: "Su correo ha sido enviado exitosamente",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // Default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
