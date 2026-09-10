import { Listing } from "./types";

export const listings: Listing[] = [
  {
    id: "1",
    slug: "penthouse-condado",
    title: {
      es: "Penthouse de Lujo en Condado",
      en: "Luxury Penthouse in Condado",
    },
    description: {
      es: "Espectacular penthouse con vistas panorámicas al océano Atlántico. Acabados de primera, cocina gourmet, terraza privada y acceso directo a la playa. Edificio con amenidades de resort.",
      en: "Spectacular penthouse with panoramic Atlantic Ocean views. Premium finishes, gourmet kitchen, private terrace, and direct beach access. Resort-style building amenities.",
    },
    type: "venta",
    price: 1850000,
    currency: "USD",
    municipality: "San Juan",
    neighborhood: "Condado",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    yearBuilt: 2019,
    amenities: [
      "Piscina",
      "Gimnasio",
      "Seguridad 24/7",
      "Estacionamiento",
      "Terraza",
      "Vista al Mar",
      "Acceso a Playa",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
        alt: { es: "Exterior del penthouse de lujo", en: "Luxury penthouse exterior" },
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
        alt: { es: "Sala de estar moderna", en: "Modern living room" },
      },
      {
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
        alt: { es: "Cocina gourmet", en: "Gourmet kitchen" },
      },
    ],
    coords: { lat: 18.4574, lng: -66.0713 },
    featured: true,
  },
  {
    id: "2",
    slug: "villa-dorado",
    title: {
      es: "Villa Frente al Mar en Dorado",
      en: "Beachfront Villa in Dorado",
    },
    description: {
      es: "Impresionante villa frente al mar en la exclusiva comunidad de Dorado Beach. Piscina infinita, jardines tropicales, y acceso a campos de golf de clase mundial.",
      en: "Stunning beachfront villa in the exclusive Dorado Beach community. Infinity pool, tropical gardens, and access to world-class golf courses.",
    },
    type: "venta",
    price: 3200000,
    currency: "USD",
    municipality: "Dorado",
    neighborhood: "Dorado Beach",
    bedrooms: 5,
    bathrooms: 5,
    sqft: 5500,
    lotSqft: 12000,
    yearBuilt: 2021,
    amenities: [
      "Piscina Infinita",
      "Jardín Tropical",
      "Golf",
      "Seguridad 24/7",
      "Playa Privada",
      "Spa",
      "Casa de Huéspedes",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop",
        alt: { es: "Villa de lujo con piscina", en: "Luxury villa with pool" },
      },
      {
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
        alt: { es: "Vista exterior de la villa", en: "Villa exterior view" },
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
        alt: { es: "Interior elegante", en: "Elegant interior" },
      },
    ],
    coords: { lat: 18.4589, lng: -66.2678 },
    featured: true,
  },
  {
    id: "3",
    slug: "apartamento-old-san-juan",
    title: {
      es: "Apartamento Colonial en Viejo San Juan",
      en: "Colonial Apartment in Old San Juan",
    },
    description: {
      es: "Encantador apartamento renovado en un edificio histórico del Viejo San Juan. Techos altos, balcón con vista a la bahía, pisos de mosaico originales restaurados.",
      en: "Charming renovated apartment in a historic Old San Juan building. High ceilings, balcony with bay views, restored original mosaic floors.",
    },
    type: "alquiler",
    price: 3500,
    currency: "USD",
    municipality: "San Juan",
    neighborhood: "Viejo San Juan",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    yearBuilt: 1920,
    amenities: [
      "Balcón",
      "Vista a la Bahía",
      "Pisos Históricos",
      "A/C Central",
      "Lavandería",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=1200&h=800&fit=crop",
        alt: { es: "Fachada colonial colorida", en: "Colorful colonial facade" },
      },
      {
        src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop",
        alt: { es: "Interior del apartamento", en: "Apartment interior" },
      },
      {
        src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&h=800&fit=crop",
        alt: { es: "Balcón con vista", en: "Balcony with view" },
      },
    ],
    coords: { lat: 18.4663, lng: -66.1179 },
    featured: true,
  },
  {
    id: "4",
    slug: "casa-rincon",
    title: {
      es: "Casa de Playa en Rincón",
      en: "Beach House in Rincón",
    },
    description: {
      es: "Moderna casa de playa con diseño abierto ideal para el estilo de vida surfista. Amplia terraza con vista al atardecer, a minutos de las mejores playas de surf.",
      en: "Modern beach house with open design ideal for the surf lifestyle. Spacious terrace with sunset views, minutes from the best surf beaches.",
    },
    type: "venta",
    price: 675000,
    currency: "USD",
    municipality: "Rincón",
    neighborhood: "Puntas",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    lotSqft: 5000,
    yearBuilt: 2017,
    amenities: [
      "Terraza",
      "Vista al Atardecer",
      "Cerca de Playa",
      "Estacionamiento",
      "Jardín",
      "Parrilla",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&h=800&fit=crop",
        alt: { es: "Casa de playa tropical", en: "Tropical beach house" },
      },
      {
        src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop",
        alt: { es: "Interior abierto y luminoso", en: "Open and bright interior" },
      },
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop",
        alt: { es: "Playa cercana", en: "Nearby beach" },
      },
    ],
    coords: { lat: 18.3403, lng: -67.2519 },
    featured: false,
  },
  {
    id: "5",
    slug: "condo-isla-verde",
    title: {
      es: "Condominio Moderno en Isla Verde",
      en: "Modern Condo in Isla Verde",
    },
    description: {
      es: "Elegante condominio recién renovado en Isla Verde con acceso directo a la playa. Perfecto para inversión de alquiler a corto plazo o residencia personal.",
      en: "Elegant newly renovated condo in Isla Verde with direct beach access. Perfect for short-term rental investment or personal residence.",
    },
    type: "venta",
    price: 485000,
    currency: "USD",
    municipality: "Carolina",
    neighborhood: "Isla Verde",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    yearBuilt: 2015,
    amenities: [
      "Piscina",
      "Gimnasio",
      "Acceso a Playa",
      "Seguridad 24/7",
      "Lobby",
      "A/C Central",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1200&h=800&fit=crop",
        alt: { es: "Sala moderna del condominio", en: "Modern condo living room" },
      },
      {
        src: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1200&h=800&fit=crop",
        alt: { es: "Dormitorio principal", en: "Master bedroom" },
      },
      {
        src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&h=800&fit=crop",
        alt: { es: "Vista de la playa desde el balcón", en: "Beach view from balcony" },
      },
    ],
    coords: { lat: 18.4398, lng: -65.9927 },
    featured: false,
  },
  {
    id: "6",
    slug: "finca-utuado",
    title: {
      es: "Finca Cafetalera en Utuado",
      en: "Coffee Estate in Utuado",
    },
    description: {
      es: "Hermosa finca en las montañas de Utuado con plantación de café activa. Casa principal renovada, casa de huéspedes, y vistas espectaculares a la cordillera central.",
      en: "Beautiful estate in the mountains of Utuado with active coffee plantation. Renovated main house, guest house, and spectacular views of the central mountain range.",
    },
    type: "venta",
    price: 550000,
    currency: "USD",
    municipality: "Utuado",
    neighborhood: "Caguana",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    lotSqft: 45000,
    yearBuilt: 1965,
    amenities: [
      "Plantación de Café",
      "Casa de Huéspedes",
      "Vista a Montañas",
      "Río Cercano",
      "Huerto",
      "Terraza Panorámica",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
        alt: { es: "Casa de finca con jardín", en: "Estate house with garden" },
      },
      {
        src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop",
        alt: { es: "Interior rústico elegante", en: "Elegant rustic interior" },
      },
      {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop",
        alt: { es: "Vista panorámica de montañas", en: "Panoramic mountain view" },
      },
    ],
    coords: { lat: 18.2654, lng: -66.7006 },
    featured: false,
  },
  {
    id: "7",
    slug: "studio-miramar",
    title: {
      es: "Estudio Ejecutivo en Miramar",
      en: "Executive Studio in Miramar",
    },
    description: {
      es: "Moderno estudio ejecutivo en el corazón de Miramar, ideal para profesionales. Edificio con rooftop lounge, coworking, y acceso a restaurantes y vida nocturna.",
      en: "Modern executive studio in the heart of Miramar, ideal for professionals. Building with rooftop lounge, coworking, and access to restaurants and nightlife.",
    },
    type: "alquiler",
    price: 1800,
    currency: "USD",
    municipality: "San Juan",
    neighborhood: "Miramar",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 650,
    yearBuilt: 2022,
    amenities: [
      "Rooftop",
      "Coworking",
      "Gimnasio",
      "Seguridad 24/7",
      "A/C Central",
      "Amueblado",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop",
        alt: { es: "Estudio moderno amueblado", en: "Modern furnished studio" },
      },
      {
        src: "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=1200&h=800&fit=crop",
        alt: { es: "Cocina integrada", en: "Integrated kitchen" },
      },
      {
        src: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200&h=800&fit=crop",
        alt: { es: "Baño moderno", en: "Modern bathroom" },
      },
    ],
    coords: { lat: 18.4505, lng: -66.0753 },
    featured: false,
  },
  {
    id: "8",
    slug: "casa-humacao",
    title: {
      es: "Residencia con Marina en Humacao",
      en: "Marina Residence in Humacao",
    },
    description: {
      es: "Espaciosa residencia en comunidad cerrada con acceso a marina privada. Ideal para amantes del mar con muelle propio y vistas a la costa este.",
      en: "Spacious residence in a gated community with access to private marina. Ideal for sea lovers with private dock and east coast views.",
    },
    type: "venta",
    price: 920000,
    currency: "USD",
    municipality: "Humacao",
    neighborhood: "Palmas del Mar",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3000,
    lotSqft: 8000,
    yearBuilt: 2010,
    amenities: [
      "Marina",
      "Muelle Privado",
      "Comunidad Cerrada",
      "Piscina",
      "Tennis",
      "Golf",
      "Seguridad 24/7",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop&q=80",
        alt: { es: "Residencia con vista al mar", en: "Residence with ocean view" },
      },
      {
        src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop",
        alt: { es: "Sala amplia", en: "Spacious living room" },
      },
      {
        src: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=1200&h=800&fit=crop",
        alt: { es: "Marina y muelle", en: "Marina and dock" },
      },
    ],
    coords: { lat: 18.1496, lng: -65.7932 },
    featured: true,
  },
];

export const municipalities = [
  ...new Set(listings.map((l) => l.municipality)),
].sort();

export const neighborhoods = [
  {
    name: "Condado",
    municipality: "San Juan",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    description: {
      es: "El distrito más cosmopolita de San Juan",
      en: "San Juan's most cosmopolitan district",
    },
  },
  {
    name: "Dorado Beach",
    municipality: "Dorado",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    description: {
      es: "Lujo y exclusividad frente al mar",
      en: "Luxury and exclusivity by the sea",
    },
  },
  {
    name: "Viejo San Juan",
    municipality: "San Juan",
    image:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&h=600&fit=crop",
    description: {
      es: "Historia y encanto colonial",
      en: "History and colonial charm",
    },
  },
  {
    name: "Rincón",
    municipality: "Rincón",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    description: {
      es: "Paraíso del surf y atardeceres",
      en: "Surf and sunset paradise",
    },
  },
];
