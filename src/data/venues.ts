// EKSEMPELDATA – alle lokaler er fiktive. Fylles av eierne senere (database i Supabase).
import type { Venue, VenueImage } from "@/types/venue";
import { placeholderOwner, placeholderReviews } from "./placeholders";

function images(name: string, tones: string[]): VenueImage[] {
  return tones.map((tone, i) => ({ alt: `${name} – bilde ${i + 1}`, tone }));
}

const LONG_TEXT =
  "Her skriver eieren en utfyllende beskrivelse av lokalet: historie, stemning, hvordan rommene kan brukes, muligheter for seremoni, mat og overnatting, og hva som gjør stedet spesielt.";

export const venues: Venue[] = [
  {
    slug: "fjordlaavet",
    name: "Fjordlåvet (eksempel)",
    region: "Rogaland",
    place: "Ryfylke",
    capacity: 120,
    priceMin: 35000,
    priceMax: 60000,
    eventTypes: ["Bryllup", "Bursdag", "Firmafest"],
    shortDescription: "Restaurert låve med fjordutsikt og dansesal på loftet.",
    description: LONG_TEXT,
    facilities: ["Fjordutsikt", "Seremoni ute", "Dansesal", "Parkering"],
    images: images("Fjordlåvet", [
      "from-amber-200 to-rose-200",
      "from-rose-200 to-fuchsia-200",
      "from-orange-100 to-amber-300",
      "from-stone-200 to-amber-200",
    ]),
    bookedDates: ["2027-06-12", "2027-06-19", "2027-07-03"],
    reviews: placeholderReviews,
    owner: placeholderOwner,
  },
  {
    slug: "villa-solberg",
    name: "Villa Solberg (eksempel)",
    region: "Oslo og Viken",
    place: "Bærum",
    capacity: 80,
    priceMin: 28000,
    priceMax: 45000,
    eventTypes: ["Bryllup", "Bursdag", "Konfirmasjon"],
    shortDescription: "Sveitservilla fra 1890 med hage og peisestue.",
    description: LONG_TEXT,
    facilities: ["Hage", "Cateringkjøkken", "15 min fra Oslo"],
    images: images("Villa Solberg", [
      "from-emerald-200 to-sky-200",
      "from-lime-100 to-emerald-300",
      "from-teal-100 to-cyan-200",
    ]),
    bookedDates: ["2027-06-12", "2027-08-21"],
    reviews: placeholderReviews,
    owner: placeholderOwner,
  },
  {
    slug: "sjoboden",
    name: "Sjøboden (eksempel)",
    region: "Agder",
    place: "Arendal",
    capacity: 60,
    priceMin: 18000,
    priceMax: 30000,
    eventTypes: ["Bryllup", "Bursdag"],
    shortDescription: "Sjøbod på svaberget med egen brygge.",
    description: LONG_TEXT,
    facilities: ["Brygge", "Båtankomst", "Uteservering"],
    images: images("Sjøboden", [
      "from-sky-200 to-indigo-200",
      "from-blue-100 to-sky-300",
      "from-indigo-100 to-violet-200",
      "from-cyan-100 to-blue-200",
    ]),
    bookedDates: ["2027-07-03"],
    reviews: [],
    owner: placeholderOwner,
  },
];
