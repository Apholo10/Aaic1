/*
 * ============================================================
 *  en.js — All English texts for the site
 * ============================================================
 *
 *  Organización:
 *  - Un objeto por sección de la página (navbar, hero, quees...)
 *  - Las claves DEBEN ser idénticas a las de es.js
 *    (mismo nombre, misma estructura). Solo cambia el texto.
 *
 *  Para agregar un texto nuevo:
 *  1. Agrégalo aquí con su clave.
 *  2. Agrega la MISMA clave en es.js con la traducción.
 *  3. Úsalo en el componente: t("seccion.nuevaClave")
 */

const en = {
  navbar: {
    chiropractor: "Chiropractor",
    services: "Services",
    benefits: "Benefits",
    about: "About Us",
    cta: "Contact Us",
    // Texto del toggle en el menú móvil (invita a cambiar al OTRO idioma)
    switchLanguage: "Cambiar a Español",
  },

  hero: {
    badge: "Immediate post-accident care",
    titleLine1: "Recover your life",
    titleLine2: "after the accident.",
    titleLine3: "We're here for you.",
    subtitle:
      "Specialists in auto accident injuries. We help you from day one.",
    button: "Schedule Free Consultation",
    imageAlt: "Auto Accident Injury Care clinic",
  },

  quees: {
    badge: "Who we are",
    title1: "More than a clinic,",
    title2: "we are your team.",
    p1: "At Auto Accident Injury Care we have been helping auto accident victims in Springdale, Arkansas for over 55 years recover physically and legally. We understand the stress that comes with an accident — the pain, the insurance, the lawyers — and we are here to simplify it all.",
    p2: "Our team works hand in hand with the insurance or your attorney so you can focus on healing.",
    button: "Meet the team",
    foundedLabel: "Founded in",
    photoPlaceholder: "Your photo here",
    // Estadísticas: value = número/dato, label = descripción
    stats: [
      { value: "+1K", label: "Patients recovered" },
      { value: "70+", label: "Years of experience" },
      { value: "100%", label: "Satisfaction rate" },
      { value: "Free", label: "Initial consultation" },
    ],
  },

  features: {
    badge: "Why choose us?",
    title1: "Everything you need",
    title2: "in one place",
    subtitle:
      "From the first day after your accident to your full recovery, we are with you every step of the way.",
    learnMore: "Learn more",
    /*
     * items: cada objeto es una feature.
     * El ORDEN importa — los íconos viven en Features.jsx
     * y se emparejan por índice (posición en el array).
     */
    items: [
      {
        title: "Immediate Post-Accident Care",
        description:
          "We know every hour counts after an accident. Our team is available to evaluate you the same day and begin your treatment without delays.",
        stats: [
          { value: "Same day", label: "First consultation" },
          { value: "Labor hours", label: "Contact line" },
        ],
      },
      {
        title: "Specialized Chiropractic Treatment",
        description:
          "We specialize in spine, neck and back injuries caused by collisions. Our certified chiropractors design a personalized recovery plan for you.",
        stats: [
          { value: "+1k", label: "Patients recovered" },
          { value: "100%", label: "Certified" },
        ],
      },
      {
        title: "Legal Case Documentation",
        description:
          "We help with all the medical documentation needed for your insurance claim or legal case, and we work directly with personal injury lawyers if you’re represented.",
        stats: [
          { value: "Free", label: "Initial consultation" },
          { value: "Direct", label: "With the insurance or your attorney" },
        ],
      },
    ],
  },

  benefits: {
    badge: "Our services",
    title1: "Everything you need",
    title2: "to recover",
    subtitle:
      "We offer comprehensive care from the day of the accident to your full recovery.",
    banner: {
      title: "Don't see your injury here?",
      subtitle: "Contact us — we evaluate each case individually at no cost.",
      button: "Free Consultation",
    },
    // El orden importa — los íconos se emparejan por índice en Benefits.jsx
    items: [
      {
        title: "Post-Accident Chiropractic",
        description:
          "Specialized treatment of spine, nerves and joints damaged by the impact. We reduce pain from the first session with non-invasive techniques.",
      },
      {
        title: "Whiplash Treatment",
        description:
          "Whiplash is the most common injury in rear-end accidents. Our specific protocol relieves neck, shoulder and head pain effectively.",
      },
      {
        title: "Rehabilitation",
        description:
          "Personalized rehabilitation plans to restore mobility, strength and function after the accident. We combine chiropractic with therapeutic exercises.",
      },
      {
        title: "Medical-Legal Documentation",
        description:
          "We generate the detailed medical reports your attorney and insurance company need. We work directly with your legal representative to strengthen your case.",
      },
    ],
  },

  ourFamily: {
    badge: "Our team",
    title1: "Meet the people",
    title2: "behind your recovery",
    subtitle:
      "A team of certified professionals committed to your well-being from day one.",
    banner: {
      title: "Ready to meet us in person?",
      subtitle:
        "Schedule your free initial consultation. Our team will be ready to evaluate you the same day.",
      button: "Schedule Consultation",
    },
    /*
     * team: los NOMBRES no se traducen (son nombres propios),
     * pero roles y bios sí. Mantener el mismo orden en es.js.
     */
    team: [
      {
        name: "Gina Fowler",
        role: "Chiropractor",
        bio: "Specialist in recovery and post-trauma care.",
        initials: "GF",
      },
      {
        name: "Kennsi Rosales",
        role: "Billing Specialist",
        bio: "Manages insurance claims and billing with precision and care.",
        initials: "KR",
      },
      {
        name: "Jasmine Araujo",
        role: "Office Manager",
        bio: "Ensures smooth clinic operations and exceptional patient experiences.",
        initials: "JA",
      },
      {
        name: "Belinda Castillo",
        role: "Administration",
        bio: "Handles administrative tasks to keep our clinic running efficiently.",
        initials: "BC",
      },
      {
        name: "Arely Benitez",
        role: "Marketing & Patient Support",
        bio: "Connects patients with information and support they need to heal.",
        initials: "AB",
      },
      {
        name: "Ceci Araujo",
        role: "Collection Specialist",
        bio: "Manages accounts and payments to support clinic operations.",
        initials: "CA",
      },
    ],
  },

  testimonials: {
    badge: "Google Reviews",
    title1: "What our",
    title2: "patients say",
    verifiedReviews: "verified reviews",
    viewAll: "View all Google reviews",
    loading: "Loading reviews...",
    error: "Real-time reviews could not be loaded.",
  },

  finalCTA: {
    badge: "Immediate care available",
    title1: "Were you in an accident?",
    title2: "Don't wait any longer.",
    subtitle:
      "Every day without treatment can complicate your recovery. Contact us today — the initial consultation is free and no-obligation.",
    callButton: "Call Now",
    scheduleButton: "Schedule Free Consultation",
    // Tarjetas informativas: el orden se empareja con los íconos del componente
    cards: [
      { label: "Call us", value: "(479) 579-0204" },
      { label: "Hours", value: "Mon–Fri 9am–6pm • Closed weekends" },
      { label: "Location", value: "2988 W. Huntsville Ave. Ste. C, Springdale, AR 72762" },
    ],
  },

  footer: {
    description:
      "Specialists in auto accident injury recovery in Springdale, Arkansas.",
    /*
     * categories: objeto donde cada clave es el TÍTULO de la columna
     * y su valor es un array de links { label, href }.
     */
    categories: {
      Services: [
        { label: "Chiropractic", href: "#Benefits" },
        { label: "Neck Pain", href: "#Benefits" },
        { label: "Back Pain", href: "#Benefits" },
        { label: "Legal Documentation", href: "#Benefits" },
      ],
      Company: [
        { label: "About Us", href: "#Quees" },
        { label: "Our Team", href: "#AboutUs" },
        { label: "Reviews", href: "#Testimonials" },
        { label: "Contact", href: "#contacto" },
      ],
      
    },
    rights: "All rights reserved.",
  },
};

export default en;
