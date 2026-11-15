// Plassholdere til eier fyller inn ekte innhold.
import type { Review, VenueOwner } from "@/types/venue";

export const placeholderOwner: VenueOwner = {
  name: "Navn på utleier",
  about:
    "Her presenterer utleieren seg selv: hvem de er, hvor lenge de har leid ut lokalet, og hva de kan hjelpe til med.",
  email: "utleier@example.com",
  phone: "+47 000 00 000",
};

export const placeholderReviews: Review[] = [
  {
    author: "Gjest (eksempel)",
    rating: 5,
    date: "2026-08-15",
    text: "Her kommer anmeldelser fra tidligere leietakere.",
  },
  {
    author: "Gjest (eksempel)",
    rating: 4,
    date: "2026-06-02",
    text: "Anmeldelser kan bare skrives av de som faktisk har leid lokalet.",
  },
];
