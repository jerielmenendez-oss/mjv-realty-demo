import { Lang } from "./types";

const translations = {
  es: {
    nav: {
      home: "Inicio",
      listings: "Propiedades",
      contact: "Contacto",
      language: "English",
    },
    hero: {
      title: "Tu hogar soñado en Puerto Rico",
      subtitle:
        "Descubre propiedades exclusivas con atención personalizada las 24 horas",
      cta: "Ver Propiedades",
      ctaSecondary: "Hablar con un Asesor",
    },
    value: {
      title: "¿Por qué MJV Realty?",
      concierge: "Concierge 24/7",
      conciergeDesc:
        "Nuestro asistente de IA bilingüe está disponible en todo momento para responder tus preguntas y agendar visitas.",
      local: "Expertos Locales",
      localDesc:
        "Conocimiento profundo del mercado inmobiliario en cada municipio de Puerto Rico.",
      premium: "Servicio Premium",
      premiumDesc:
        "Experiencia de lujo desde la primera consulta hasta el cierre de la transacción.",
    },
    featured: {
      title: "Propiedades Destacadas",
      viewAll: "Ver Todas las Propiedades",
    },
    neighborhoods: {
      title: "Explora Puerto Rico",
      subtitle: "Descubre los vecindarios más cotizados de la isla",
    },
    concierge: {
      title: "Tu Concierge Inmobiliario 24/7",
      subtitle:
        "Conecta al instante con nuestro asistente bilingüe que conoce cada propiedad en detalle",
      step1: "Toca «Llámame ahora»",
      step1Desc: "Desde cualquier propiedad, inicia una consulta instantánea.",
      step2: "Habla con tu asesor IA",
      step2Desc:
        "Recibe información detallada sobre la propiedad en español o inglés.",
      step3: "Agenda tu visita",
      step3Desc:
        "Elige el día y hora que prefieras para conocer tu próximo hogar.",
    },
    agent: {
      title: "Maritza Vicente",
      subtitle: "MJV Realty",
      bio: "Con dedicación y pasión por el mercado inmobiliario de Puerto Rico, ofrezco un servicio personalizado que combina tecnología innovadora con atención humana excepcional.",
    },
    cta: {
      title: "¿Listo para encontrar tu propiedad ideal?",
      subtitle:
        "Agenda una consulta gratuita y comienza tu búsqueda con MJV Realty.",
      button: "Agendar Consulta",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      demo: "Demo conceptual — propiedades ficticias",
      privacy: "Privacidad",
      terms: "Términos",
    },
    listing: {
      bedrooms: "Habitaciones",
      bathrooms: "Baños",
      sqft: "Pies²",
      sale: "Venta",
      rent: "Alquiler",
      monthAbbr: "/mes",
      callNow: "Llámame ahora",
      details: "Ver Detalles",
      demoLabel: "Propiedad de demostración",
      amenities: "Amenidades",
      location: "Ubicación",
      videoTour: "Tour Virtual",
      videoPlaceholder: "Video tour disponible próximamente",
      specs: "Características",
      yearBuilt: "Año de construcción",
      lotSize: "Tamaño del terreno",
      back: "Volver",
      gallery: "Galería",
    },
    filter: {
      title: "Buscar Propiedades",
      type: "Tipo",
      all: "Todos",
      municipality: "Municipio",
      allMunicipalities: "Todos los municipios",
      bedrooms: "Habitaciones",
      any: "Cualquiera",
      bedsPlus: "+ hab.",
      priceRange: "Rango de precio",
      minPrice: "Precio mínimo",
      maxPrice: "Precio máximo",
      sort: "Ordenar",
      priceLow: "Precio: menor a mayor",
      priceHigh: "Precio: mayor a menor",
      newest: "Más recientes",
      results: "propiedades encontradas",
      noResults: "No se encontraron propiedades con estos filtros.",
      clearFilters: "Limpiar filtros",
    },
    contact: {
      title: "Contáctanos",
      subtitle:
        "Completa el formulario y un asesor se pondrá en contacto contigo.",
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono",
      message: "Mensaje",
      preferredDate: "Fecha preferida",
      preferredTime: "Hora preferida",
      submit: "Enviar Consulta",
      success:
        "¡Demo completada! El formulario validó tus datos localmente. En la versión final se enviaría al CRM y calendario.",
      required: "Este campo es obligatorio",
      invalidEmail: "Correo electrónico inválido",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      phonePlaceholder: "+1 (787) 000-0000",
      messagePlaceholder: "Cuéntanos qué tipo de propiedad buscas...",
    },
    call: {
      title: "Asistente MJV Realty",
      connecting: "Conectando...",
      connected: "Conectado",
      speaking: "Hablando...",
      ended: "Llamada finalizada",
      start: "Iniciar Llamada",
      end: "Finalizar",
      demoMode: "Modo Demo",
      demoNote:
        "Esta es una demostración interactiva del asistente de voz IA. En producción, se conectaría con un agente en vivo.",
      tourForm: "Solicitar Visita",
      tourName: "Tu nombre",
      tourDate: "Fecha preferida",
      tourTime: "Hora preferida",
      tourSubmit: "Enviar solicitud",
      tourSuccess: "¡Solicitud de visita registrada localmente!",
      tourDisclaimer:
        "Nota: En esta demo, no se crea un evento de calendario real.",
    },
  },
  en: {
    nav: {
      home: "Home",
      listings: "Properties",
      contact: "Contact",
      language: "Español",
    },
    hero: {
      title: "Your Dream Home in Puerto Rico",
      subtitle:
        "Discover exclusive properties with personalized 24/7 attention",
      cta: "View Properties",
      ctaSecondary: "Talk to an Advisor",
    },
    value: {
      title: "Why MJV Realty?",
      concierge: "24/7 Concierge",
      conciergeDesc:
        "Our bilingual AI assistant is available at all times to answer your questions and schedule tours.",
      local: "Local Experts",
      localDesc:
        "Deep knowledge of the real estate market in every municipality of Puerto Rico.",
      premium: "Premium Service",
      premiumDesc:
        "Luxury experience from the first consultation to closing the deal.",
    },
    featured: {
      title: "Featured Properties",
      viewAll: "View All Properties",
    },
    neighborhoods: {
      title: "Explore Puerto Rico",
      subtitle: "Discover the most sought-after neighborhoods on the island",
    },
    concierge: {
      title: "Your 24/7 Real Estate Concierge",
      subtitle:
        "Instantly connect with our bilingual assistant who knows every property in detail",
      step1: "Tap «Call me now»",
      step1Desc:
        "From any property, start an instant consultation.",
      step2: "Talk to your AI advisor",
      step2Desc:
        "Get detailed property information in Spanish or English.",
      step3: "Schedule your tour",
      step3Desc:
        "Choose the day and time you prefer to visit your next home.",
    },
    agent: {
      title: "Maritza Vicente",
      subtitle: "MJV Realty",
      bio: "With dedication and passion for Puerto Rico's real estate market, I offer personalized service that combines innovative technology with exceptional human attention.",
    },
    cta: {
      title: "Ready to find your ideal property?",
      subtitle:
        "Schedule a free consultation and start your search with MJV Realty.",
      button: "Schedule Consultation",
    },
    footer: {
      rights: "All rights reserved.",
      demo: "Conceptual demo — fictional properties",
      privacy: "Privacy",
      terms: "Terms",
    },
    listing: {
      bedrooms: "Bedrooms",
      bathrooms: "Bathrooms",
      sqft: "Sq Ft",
      sale: "Sale",
      rent: "Rent",
      monthAbbr: "/mo",
      callNow: "Call me now",
      details: "View Details",
      demoLabel: "Demo property",
      amenities: "Amenities",
      location: "Location",
      videoTour: "Virtual Tour",
      videoPlaceholder: "Video tour coming soon",
      specs: "Features",
      yearBuilt: "Year built",
      lotSize: "Lot size",
      back: "Back",
      gallery: "Gallery",
    },
    filter: {
      title: "Search Properties",
      type: "Type",
      all: "All",
      municipality: "Municipality",
      allMunicipalities: "All municipalities",
      bedrooms: "Bedrooms",
      any: "Any",
      bedsPlus: "+ beds",
      priceRange: "Price range",
      minPrice: "Min price",
      maxPrice: "Max price",
      sort: "Sort",
      priceLow: "Price: low to high",
      priceHigh: "Price: high to low",
      newest: "Newest",
      results: "properties found",
      noResults: "No properties found with these filters.",
      clearFilters: "Clear filters",
    },
    contact: {
      title: "Contact Us",
      subtitle:
        "Fill out the form and an advisor will get in touch with you.",
      name: "Full name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      preferredDate: "Preferred date",
      preferredTime: "Preferred time",
      submit: "Send Inquiry",
      success:
        "Demo complete! Your details were validated locally. The final version would send them to the CRM and calendar.",
      required: "This field is required",
      invalidEmail: "Invalid email address",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      phonePlaceholder: "+1 (787) 000-0000",
      messagePlaceholder: "Tell us what type of property you're looking for...",
    },
    call: {
      title: "MJV Realty Assistant",
      connecting: "Connecting...",
      connected: "Connected",
      speaking: "Speaking...",
      ended: "Call ended",
      start: "Start Call",
      end: "End Call",
      demoMode: "Demo Mode",
      demoNote:
        "This is an interactive demo of the AI voice assistant. In production, it would connect with a live agent.",
      tourForm: "Request Tour",
      tourName: "Your name",
      tourDate: "Preferred date",
      tourTime: "Preferred time",
      tourSubmit: "Submit request",
      tourSuccess: "Tour request saved locally!",
      tourDisclaimer:
        "Note: In this demo, no real calendar event is created.",
    },
  },
} as const;

export function t(lang: Lang) {
  return translations[lang];
}
