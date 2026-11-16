// Henting og fotograf-spesifikke filtre (tjeneste og stil). Sted, pris og dato ligger i lib/vendors.ts.
import { photographers } from "@/data/photographers";
import type {
  Photographer,
  PhotographerSearch,
  PhotoService,
} from "@/types/photographer";

export const STYLES = [
  "Dokumentarisk",
  "Editorial",
  "Fine art",
  "Klassisk",
  "Lys og luftig",
  "Mørk og stemningsfull",
];

export const SERVICE_LABELS: Record<PhotoService, string> = {
  foto: "Foto",
  video: "Video",
  begge: "Foto og video",
};

export const PHOTO_PRICE_OPTIONS = [
  { value: "", label: "Alle priser" },
  { value: "15000", label: "Opptil 15 000 kr" },
  { value: "25000", label: "Opptil 25 000 kr" },
  { value: "40000", label: "Opptil 40 000 kr" },
];

export function getAllPhotographers(): Photographer[] {
  return photographers;
}

export function getPhotographer(slug: string): Photographer | undefined {
  return photographers.find((p) => p.slug === slug);
}

export function filterPhotographers(
  list: Photographer[],
  search: PhotographerSearch,
): Photographer[] {
  return list.filter(
    (p) =>
      (!search.service ||
        p.service === search.service ||
        p.service === "begge") &&
      (!search.style || p.styles.includes(search.style)),
  );
}

export function parsePhotographerSearch(
  params: Record<string, string | string[] | undefined>,
): PhotographerSearch {
  const first = (k: string) => {
    const v = params[k];
    return (Array.isArray(v) ? v[0] : v) || undefined;
  };
  const service = first("service");
  return {
    service:
      service && service in SERVICE_LABELS
        ? (service as PhotoService)
        : undefined,
    style: first("style"),
  };
}

export function formatFollowers(n: number): string {
  return n >= 1000 ? `${Math.round(n / 1000)}k følgere` : `${n} følgere`;
}
