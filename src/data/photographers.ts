// EKSEMPELDATA – alle fotografer er fiktive. Fylles av fotografene selv senere (Supabase).
import type { Review } from "@/types/venue";
import type { MediaItem } from "@/types/vendor";
import type { Photographer, PhotoPackage } from "@/types/photographer";
import {
  PLACEHOLDER_CV,
  PLACEHOLDER_PACKAGES,
  makeAlbums,
} from "./photographerPlaceholders";

const TONES = [
  "from-orange-100 to-stone-300",
  "from-stone-200 to-amber-200",
  "from-sky-100 to-slate-300",
  "from-amber-100 to-yellow-200",
  "from-violet-100 to-stone-200",
  "from-emerald-100 to-teal-200",
  "from-rose-100 to-stone-200",
  "from-stone-100 to-stone-300",
  "from-blue-100 to-slate-200",
];

function portfolio(name: string, images: number, videos: number): MediaItem[] {
  const pics: MediaItem[] = Array.from({ length: images }, (_, i) => ({
    kind: "image",
    alt: `${name} – bilde ${i + 1}`,
    tone: TONES[i % TONES.length],
  }));
  const films: MediaItem[] = Array.from({ length: videos }, (_, i) => ({
    kind: "video",
    alt: `${name} – film ${i + 1}`,
    tone: "from-stone-700 to-stone-900",
  }));
  return [...pics, ...films];
}

// Prisestimatet regnes ut fra billigste og dyreste pakke, så fotografen slipper å skrive det to ganger.
function priceRange(packages: PhotoPackage[]) {
  const prices = packages.map((p) => p.priceFrom);
  return { priceMin: Math.min(...prices), priceMax: Math.max(...prices) };
}

const reviews: Review[] = [
  {
    author: "Brudepar (eksempel)",
    rating: 5,
    date: "2026-08-22",
    text: "Her vises anmeldelser fra kunder som har booket fotografen via NordicOccasions.",
  },
  {
    author: "Brudepar (eksempel)",
    rating: 5,
    date: "2026-07-04",
    text: "Bare kunder som faktisk har booket fotografen kan skrive anmeldelse.",
  },
];

const ABOUT =
  "Her skriver fotografen selv: bakgrunn, hvordan de jobber på dagen, hvordan de får parene til å slappe av foran kamera, og hva som gjør stilen deres særegen.";

const base = {
  eventTypes: ["Bryllup", "Forlovelse", "Familie"],
  about: ABOUT,
  reviews,
  contactEmail: "fotograf@example.com",
  languages: ["Norsk", "Engelsk"],
  cv: PLACEHOLDER_CV,
  equipment: "Fullformat, backup-kamera",
  secondShooter: true,
};

function make(
  p: Omit<
    Photographer,
    keyof typeof base | "priceMin" | "priceMax" | "albums" | "packages"
  > & { packages?: PhotoPackage[] },
): Photographer {
  const packages = p.packages ?? PLACEHOLDER_PACKAGES;
  return {
    ...base,
    ...p,
    packages,
    ...priceRange(packages),
    albums: makeAlbums(p.name),
  };
}

export const photographers: Photographer[] = [
  make({
    slug: "lysglimt-foto",
    name: "Lysglimt Foto (eksempel)",
    region: "Oslo og Viken",
    travel: "hele Norge og utlandet",
    service: "begge",
    styles: ["Dokumentarisk"],
    yearsExperience: 9,
    weddingsShot: 180,
    deliveryTime: "4–6 uker",
    photosDelivered: "400–700",
    instagram: { handle: "@lysglimt", followers: 12000 },
    website: "https://example.com",
    media: portfolio("Lysglimt Foto", 12, 4),
    bookedDates: ["2027-06-12"],
  }),
  make({
    slug: "fjordlinse",
    name: "Fjordlinse (eksempel)",
    region: "Vestland",
    travel: "Vestlandet",
    service: "foto",
    styles: ["Fine art"],
    yearsExperience: 12,
    weddingsShot: 240,
    deliveryTime: "6–8 uker",
    photosDelivered: "500–800",
    instagram: { handle: "@fjordlinse", followers: 28000 },
    media: portfolio("Fjordlinse", 10, 2),
    bookedDates: [],
    packages: [
      { name: "Vielse", includes: "3 timer, 200 bilder", priceFrom: 22000 },
      { name: "Hel dag", includes: "10 timer, 800 bilder", priceFrom: 40000 },
    ],
  }),
  make({
    slug: "siv-og-ola-film",
    name: "Siv & Ola Film (eksempel)",
    region: "Rogaland",
    travel: "Rogaland og Agder",
    service: "video",
    styles: ["Editorial"],
    yearsExperience: 6,
    weddingsShot: 95,
    deliveryTime: "8 uker",
    photosDelivered: "Film på 5–10 min",
    instagram: { handle: "@sivogola", followers: 8000 },
    media: portfolio("Siv & Ola Film", 6, 9),
    bookedDates: ["2027-06-19"],
  }),
  make({
    slug: "klassisk-oyeblikk",
    name: "Klassisk Øyeblikk (eksempel)",
    region: "Trøndelag",
    travel: "Midt-Norge",
    service: "foto",
    styles: ["Klassisk"],
    yearsExperience: 15,
    weddingsShot: 320,
    deliveryTime: "3–4 uker",
    photosDelivered: "300–500",
    instagram: { handle: "@klassiskoyeblikk", followers: 5000 },
    media: portfolio("Klassisk Øyeblikk", 12, 0),
    bookedDates: ["2027-06-12"],
    packages: [
      { name: "Vielse", includes: "2 timer, 120 bilder", priceFrom: 12000 },
      { name: "Hel dag", includes: "9 timer, 500 bilder", priceFrom: 20000 },
    ],
  }),
];
