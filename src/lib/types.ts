export interface Listing {
  id: string;
  slug: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  type: "venta" | "alquiler";
  price: number;
  currency: "USD";
  municipality: string;
  neighborhood: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  lotSqft?: number;
  yearBuilt?: number;
  amenities: string[];
  images: { src: string; alt: { es: string; en: string } }[];
  videoPlaceholder?: string;
  coords: { lat: number; lng: number };
  featured: boolean;
}

export type Lang = "es" | "en";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredDate?: string;
  preferredTime?: string;
}
