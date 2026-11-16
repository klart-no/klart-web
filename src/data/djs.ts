// EKSEMPELDATA – alle DJ-er er fiktive. Fylles av DJ-ene selv senere (Supabase).
import type { Dj, MediaItem } from "@/types/vendor";
import type { Review } from "@/types/venue";

function media(name: string, tones: string[], videos = 0): MediaItem[] {
  const images: MediaItem[] = tones.map((tone, i) => ({
    kind: "image",
    alt: `${name} – bilde ${i + 1}`,
    tone,
  }));
  const clips: MediaItem[] = Array.from({ length: videos }, (_, i) => ({
    kind: "video",
    alt: `${name} – video ${i + 1}`,
    tone: "from-stone-700 to-stone-900",
  }));
  return [...images, ...clips];
}

const ABOUT =
  "Her skriver DJ-en selv: hvem de er, hvordan de leser dansegulvet, hva slags stemning de skaper, og hvordan de samarbeider med paret før den store dagen.";

const djReviews: Review[] = [
  {
    author: "Brudepar (eksempel)",
    rating: 5,
    date: "2026-08-15",
    text: "Her vises anmeldelser fra kunder som har booket DJ-en via NordicOccasions.",
  },
  {
    author: "Bursdagsfeiring (eksempel)",
    rating: 4,
    date: "2026-06-02",
    text: "Bare kunder som faktisk har booket DJ-en kan skrive anmeldelse.",
  },
];

const base = {
  eventTypes: ["Bryllup", "Bursdag", "Firmafest"],
  about: ABOUT,
  reviews: djReviews,
  contactEmail: "dj@example.com",
};

export const djs: Dj[] = [
  {
    ...base,
    slug: "dj-nordlys",
    name: "DJ Nordlys (eksempel)",
    region: "Oslo og Viken",
    travel: "hele Østlandet",
    priceMin: 8000,
    priceMax: 15000,
    genres: ["Pop", "House", "80-tall"],
    included: ["Lydanlegg", "Lys", "Mikrofon til taler"],
    maxHours: 6,
    media: media(
      "DJ Nordlys",
      [
        "from-rose-200 to-pink-200",
        "from-pink-100 to-rose-300",
        "from-fuchsia-100 to-pink-200",
      ],
      2,
    ),
    bookedDates: ["2027-06-12"],
  },
  {
    ...base,
    slug: "dj-fjellbris",
    name: "DJ Fjellbris (eksempel)",
    region: "Rogaland",
    travel: "Rogaland og Agder",
    priceMin: 6000,
    priceMax: 10000,
    genres: ["Pop", "Norsk allsang", "Latin"],
    included: ["Lydanlegg", "Mikrofon til taler"],
    maxHours: 5,
    media: media(
      "DJ Fjellbris",
      ["from-sky-200 to-cyan-200", "from-cyan-100 to-sky-300"],
      1,
    ),
    bookedDates: ["2027-06-19"],
  },
  {
    ...base,
    slug: "kveldsklang",
    name: "Kveldsklang (eksempel)",
    region: "Vestland",
    travel: "Vestlandet",
    priceMin: 10000,
    priceMax: 18000,
    genres: ["Disco", "Funk", "Soul"],
    included: ["Lydanlegg", "Lys", "Musikk til seremonien"],
    maxHours: 7,
    media: media(
      "Kveldsklang",
      [
        "from-violet-200 to-indigo-200",
        "from-indigo-100 to-violet-300",
        "from-purple-100 to-violet-200",
      ],
      3,
    ),
    bookedDates: [],
    reviews: [],
  },
  {
    ...base,
    slug: "dj-midnattssol",
    name: "DJ Midnattssol (eksempel)",
    region: "Trøndelag",
    travel: "Midt-Norge",
    priceMin: 7000,
    priceMax: 12000,
    genres: ["House", "Pop", "Hip-hop"],
    included: ["Lydanlegg", "Lys"],
    maxHours: 6,
    media: media(
      "DJ Midnattssol",
      ["from-amber-200 to-yellow-200", "from-yellow-100 to-amber-300"],
      1,
    ),
    bookedDates: ["2027-06-12"],
  },
  {
    ...base,
    slug: "sommerfest-dj",
    name: "Sommerfest-DJ (eksempel)",
    region: "Agder",
    travel: "Sørlandet",
    priceMin: 5000,
    priceMax: 9000,
    genres: ["Pop", "Norsk allsang", "90-tall"],
    included: ["Lydanlegg"],
    maxHours: 5,
    media: media("Sommerfest-DJ", [
      "from-emerald-200 to-lime-200",
      "from-lime-100 to-emerald-300",
    ]),
    bookedDates: [],
  },
];
