// Plassholdere til fotografene fyller inn ekte CV, pakker og album.
import type { Album, PhotographerCv, PhotoPackage } from "@/types/photographer";

export const PLACEHOLDER_CV: PhotographerCv = {
  education: ["[Fotoutdanning, skole, år]", "[Kurs eller workshop, år]"],
  awards: ["[Pris eller konkurranse, år]"],
  published: ["[Magasin eller blogg, år]"],
  memberships: ["[Fotografforbund eller nettverk]"],
};

export const PLACEHOLDER_PACKAGES: PhotoPackage[] = [
  {
    name: "Vielse",
    includes: "2 timer, seremoni og portretter, 150 bilder",
    priceFrom: 18000,
  },
  {
    name: "Halv dag",
    includes: "5 timer, seremoni til middag, 400 bilder",
    priceFrom: 25000,
  },
  {
    name: "Hel dag + film",
    includes: "10 timer, 700 bilder, 5 min film",
    priceFrom: 32000,
  },
];

export function makeAlbums(name: string): Album[] {
  return [
    {
      title: "Sommerbryllup (eksempel)",
      meta: "312 bilder · hel dag",
      alt: `${name} – album 1`,
      tone: "from-orange-100 to-stone-300",
    },
    {
      title: "Låvebryllup (eksempel)",
      meta: "268 bilder · halv dag",
      alt: `${name} – album 2`,
      tone: "from-emerald-100 to-teal-200",
    },
    {
      title: "Vinterbryllup (eksempel)",
      meta: "190 bilder · vielse",
      alt: `${name} – album 3`,
      tone: "from-blue-100 to-slate-200",
    },
  ];
}
