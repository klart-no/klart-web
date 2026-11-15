// Datatyper for selskapslokaler. Endres her, brukes overalt.

export type VenueImage = {
  src?: string; // tom = plassholder vises
  alt: string;
  tone: string; // farge på plassholderen (Tailwind-klasser)
};

export type Review = {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string; // ÅÅÅÅ-MM-DD
  text: string;
};

export type VenueOwner = {
  name: string;
  about: string;
  email: string;
  phone: string;
};

export type Venue = {
  slug: string; // brukes i nettadressen
  name: string;
  region: string;
  place: string;
  capacity: number; // maks antall gjester
  priceMin: number; // NOK, prisestimat satt av eier
  priceMax: number;
  eventTypes: string[];
  shortDescription: string;
  description: string;
  facilities: string[];
  images: VenueImage[];
  bookedDates: string[]; // ÅÅÅÅ-MM-DD – kobles til eiers kalender senere
  reviews: Review[];
  owner: VenueOwner;
};

export type VenueSearch = {
  region?: string;
  date?: string;
  guests?: number;
};
