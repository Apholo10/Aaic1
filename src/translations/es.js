/*
 * ============================================================
 *  es.js — Todos los textos del sitio en español
 * ============================================================
 *
 *  IMPORTANTE: la estructura de claves debe ser IDÉNTICA a en.js.
 *  Si agregas una clave aquí, agrégala también en en.js
 *  (y viceversa). Solo cambia el texto traducido.
 */

const es = {
  navbar: {
    chiropractor: "Quiropráctica",
    services: "Servicios",
    benefits: "Beneficios",
    about: "Nosotros",
    cta: "Contáctanos",
    // Texto del toggle en el menú móvil (invita a cambiar al OTRO idioma)
    switchLanguage: "Switch to English",
  },

  hero: {
    badge: "Atención inmediata post-accidente",
    titleLine1: "Recupera tu vida",
    titleLine2: "después del accidente.",
    titleLine3: "Estamos aquí para ti.",
    subtitle:
      "Especialistas en lesiones por accidentes de auto. Te ayudamos desde el primer día.",
    button: "Agenda tu Consulta Gratis",
    imageAlt: "Clínica Auto Accident Injury Care",
  },

  quees: {
    badge: "Quiénes somos",
    title1: "Más que una clínica,",
    title2: "somos tu equipo.",
    p1: "En Auto Accident Injury Care llevamos más de 55 años ayudando a víctimas de accidentes de tráfico en Springdale, Arkansas a recuperarse física y legalmente. Entendemos el estrés que viene con un accidente — el dolor, los seguros, los abogados — y estamos aquí para simplificarlo todo.",
    p2: "Nuestro equipo de quiroprácticos certificados trabaja de la mano con abogados de lesiones personales para que tú solo te enfoques en sanar.",
    button: "Conoce al equipo",
    foundedLabel: "Fundada en",
    photoPlaceholder: "Tu foto aquí",
    // Estadísticas: value = número/dato, label = descripción
    stats: [
      { value: "+1K", label: "Pacientes recuperados" },
      { value: "70+", label: "Años de experiencia" },
      { value: "100%", label: "Tasa de satisfacción" },
      { value: "Sin costo", label: "Consulta inicial" },
    ],
  },

  features: {
    badge: "¿Por qué elegirnos?",
    title1: "Todo lo que necesitas",
    title2: "en un solo lugar",
    subtitle:
      "Desde el primer día después de tu accidente hasta tu recuperación completa, estamos contigo en cada paso.",
    learnMore: "Saber más",
    /*
     * items: cada objeto es una feature.
     * El ORDEN importa — los íconos viven en Features.jsx
     * y se emparejan por índice (posición en el array).
     */
    items: [
      {
        title: "Atención Inmediata Post-Accidente",
        description:
          "Sabemos que cada hora cuenta después de un accidente. Nuestro equipo está disponible para evaluarte el mismo día y comenzar tu tratamiento sin demoras.",
        stats: [
          { value: "Mismo día", label: "Primera consulta" },
          { value: "Horas de trabajo", label: "Línea de contacto" },
        ],
      },
      {
        title: "Tratamiento Quiropráctico Especializado",
        description:
          "Nos especializamos en lesiones de columna, cuello y espalda causadas por colisiones. Nuestros quiroprácticos certificados diseñan un plan de recuperación personalizado para ti.",
        stats: [
          { value: "+1k", label: "Pacientes recuperados" },
          { value: "100%", label: "Certificados" },
        ],
      },
      {
        title: "Documentación para tu Caso Legal",
        description:
          "Te ayudamos con toda la documentación médica necesaria para tu reclamación de seguro o caso legal. Trabajamos directamente con abogados de lesiones personales.",
        stats: [
          { value: "Sin costo", label: "Consulta inicial" },
          { value: "Directo", label: "Con la aseguranza o tu abogado" },
        ],
      },
    ],
  },

  benefits: {
    badge: "Nuestros servicios",
    title1: "Todo lo que necesitas",
    title2: "para recuperarte",
    subtitle:
      "Ofrecemos atención integral desde el día del accidente hasta tu recuperación completa.",
    banner: {
      title: "¿No ves tu lesión aquí?",
      subtitle: "Contáctanos — evaluamos cada caso de forma individual y sin costo.",
      button: "Consulta gratuita",
    },
    // El orden importa — los íconos se emparejan por índice en Benefits.jsx
    items: [
      {
        title: "Quiropráctica Post-Accidente",
        description:
          "Tratamiento especializado de columna, nervios y articulaciones dañadas por el impacto. Reducimos el dolor desde la primera sesión con técnicas no invasivas.",
      },
      {
        title: "Tratamiento de Whiplash",
        description:
          "El latigazo cervical es la lesión más común en accidentes traseros. Nuestro protocolo específico alivia el dolor de cuello, hombros y cabeza de forma efectiva.",
      },
      {
        title: "Rehabilitación",
        description:
          "Planes de rehabilitación personalizados para restaurar movilidad, fuerza y función después del accidente. Combinamos quiropráctica con ejercicios terapéuticos.",
      },
      {
        title: "Documentación Médico-Legal",
        description:
          "Generamos los reportes médicos detallados que tu abogado y aseguradora necesitan. Trabajamos directamente con tu representante legal para fortalecer tu caso.",
      },
    ],
  },

  ourFamily: {
    badge: "Nuestro equipo",
    title1: "Conoce a las personas",
    title2: "detrás de tu recuperación",
    subtitle:
      "Un equipo de profesionales certificados comprometidos con tu bienestar desde el primer día.",
    banner: {
      title: "¿Listo para conocernos en persona?",
      subtitle:
        "Agenda tu consulta inicial sin costo. Nuestro equipo estará listo para evaluarte el mismo día.",
      button: "Agendar consulta",
    },
    /*
     * team: los NOMBRES no se traducen (son nombres propios),
     * pero roles y bios sí. Mantener el mismo orden que en en.js.
     */
    team: [
      {
        name: "Gina Fowler",
        role: "Quiropráctica",
        bio: "Especialista en recuperación y cuidado post-trauma.",
        initials: "GF",
      },
      {
        name: "Kennsi Rosales",
        role: "Especialista en Facturación",
        bio: "Gestiona reclamaciones de seguros y facturación con precisión y cuidado.",
        initials: "KR",
      },
      {
        name: "Jasmine Araujo",
        role: "Directora de Oficina",
        bio: "Asegura operaciones clínicas fluidas y experiencias excepcionales para nuestros pacientes.",
        initials: "JA",
      },
      {
        name: "Belinda Castillo",
        role: "Administración",
        bio: "Maneja tareas administrativas para mantener nuestra clínica funcionando eficientemente.",
        initials: "BC",
      },
      {
        name: "Arely Benitez",
        role: "Marketing y Apoyo al Paciente",
        bio: "Conecta a los pacientes con la información y apoyo que necesitan para sanar.",
        initials: "AB",
      },
      {
        name: "Ceci Araujo",
        role: "Especialista en Cobranzas",
        bio: "Gestiona cuentas y pagos para respaldar las operaciones de nuestra clínica.",
        initials: "CA",
      },
    ],
  },

  testimonials: {
    badge: "Reseñas de Google",
    title1: "Lo que dicen",
    title2: "nuestros pacientes",
    verifiedReviews: "reseñas verificadas",
    viewAll: "Ver todas las reseñas en Google",
    loading: "Cargando reseñas...",
    error: "No se pudieron cargar las reseñas en tiempo real.",
  },

  finalCTA: {
    badge: "Atención inmediata disponible",
    title1: "¿Tuviste un accidente?",
    title2: "No esperes más.",
    subtitle:
      "Cada día que pasa sin tratamiento puede complicar tu recuperación. Contáctanos hoy — la consulta inicial es sin costo y sin compromiso.",
    callButton: "Llamar ahora",
    scheduleButton: "Agendar consulta gratis",
    // Tarjetas informativas: el orden se empareja con los íconos del componente
    cards: [
      { label: "Llámanos", value: "(479) 579-0204" },
      { label: "Horario", value: "Lun–Vie 9am–6pm • Cerrado fines de semana" },
      { label: "Ubicación", value: "2988 W. Huntsville Ave. Ste. C, Springdale, AR 72762" },
    ],
  },

  footer: {
    description:
      "Especialistas en recuperación de lesiones por accidentes de auto en Springdale, Arkansas.",
    /*
     * categories: objeto donde cada clave es el TÍTULO de la columna
     * y su valor es un array de links { label, href }.
     */
    categories: {
      Servicios: [
        { label: "Quiropráctica", href: "#Benefits" },
        { label: "Dolor de cuello", href: "#Benefits" },
        { label: "Dolor de espalda", href: "#Benefits" },
        { label: "Documentación legal", href: "#Benefits" },
      ],
      Compañía: [
        { label: "Quiénes somos", href: "#Quees" },
        { label: "Nuestro equipo", href: "#AboutUs" },
        { label: "Reseñas", href: "#Testimonials" },
        { label: "Contacto", href: "#contacto" },
      ],
      Legal: [
        { label: "Política de privacidad", href: "#" },
        { label: "Términos de uso", href: "#" },
        { label: "HIPAA", href: "#" },
      ],
    },
    rights: "Todos los derechos reservados.",
  },
};

export default es;
