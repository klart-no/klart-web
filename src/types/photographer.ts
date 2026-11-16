// Datatyper for fotografer. Bygger på de felles leverandørtypene.
import type { VenueImage } from "./venue";
import type { VendorBase } from "./vendor";

export type PhotoService = "foto" | "video" | "begge";

export type PhotoPackage = {
  name: string;
  includes: string;
  priceFrom: number; // NOK
};

export type Album = VenueImage & {
  title: string;
  meta: string; // f.eks. "312 bilder · hel dag"
};

export type PhotographerCv = {
  education: string[];
  awards: string[];
  published: string[];
  memberships: string[];
};

export type Photographer = VendorBase & {
  service: PhotoService;
  styles: string[];
  languages: string[];
  yearsExperience: number;
  weddingsShot: number;
  deliveryTime: string; // f.eks. "4–6 uker"
  photosDelivered: string; // f.eks. "400–700"
  instagram: { handle: string; followers: number };
  website?: string;
  equipment: string;
  secondShooter: boolean;
  cv: PhotographerCv;
  packages: PhotoPackage[];
  albums: Album[];
};

export type PhotographerSearch = {
  service?: PhotoService;
  style?: string;
};
