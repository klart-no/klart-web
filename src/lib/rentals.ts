// Henting av utleieprodukter. Når vi flytter til Supabase, er det bare denne filen som endres.
import { rentalEquipment } from "@/data/rentalEquipment";
import { weddingCars } from "@/data/weddingCars";
import type {
  RentalCategory,
  RentalCategoryInfo,
  RentalItem,
} from "@/types/rental";

export const RENTAL_CATEGORIES: RentalCategoryInfo[] = [
  {
    id: "fotoboks",
    label: "Fotoboks",
    intro: "Sammenlign modellene og velg den som passer festen.",
  },
  {
    id: "fotovegg",
    label: "Fotovegg og rekvisitter",
    intro: "Passer til alle fotoboksene.",
  },
  {
    id: "bryllupsbil",
    label: "Bryllupsbil",
    intro: "Biler med sjarm fra private eiere. Eieren kjører selv.",
  },
  {
    id: "annet",
    label: "Annet utstyr",
    intro: "Smått og stort til den store dagen.",
  },
];

// Hvor vi leverer utstyr fra (lagersteder).
export const RENTAL_REGIONS = ["Oslo og Viken", "Rogaland"];

export function getAllRentalItems(): RentalItem[] {
  return [...rentalEquipment, ...weddingCars];
}

export function isRentalCategory(value: string): value is RentalCategory {
  return RENTAL_CATEGORIES.some((c) => c.id === value);
}

export function rentalTotal(items: RentalItem[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}
