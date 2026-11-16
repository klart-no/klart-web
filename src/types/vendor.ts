// Felles datatyper for leverandører som legger inn profil selv (DJ nå, fotograf senere).
import type { Review, VenueImage } from "./venue";

export type MediaItem = VenueImage & {
  kind: "image" | "video";
};

export type VendorBase = {
  slug: string; // brukes i nettadressen
  name: string; // artistnavn / firmanavn
  region: string; // hjemsted
  travel: string; // hvor langt de reiser, f.eks. "hele Østlandet"
  priceMin: number; // NOK, prisestimat satt av leverandøren
  priceMax: number;
  eventTypes: string[];
  about: string;
  media: MediaItem[]; // første bilde = profilbilde
  bookedDates: string[]; // ÅÅÅÅ-MM-DD – hentes fra egen kalender senere
  reviews: Review[];
  contactEmail: string; // hvor forespørsler sendes
};

export type Dj = VendorBase & {
  genres: string[];
  included: string[]; // utstyr og tjenester inkludert i prisen
  maxHours: number; // spilletid per kveld
};

export type VendorSearch = {
  region?: string;
  maxPrice?: number;
  date?: string;
};
