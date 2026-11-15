// Henting og søk i lokaler. Når vi flytter til Supabase, er det bare denne filen som endres.
import { venues } from "@/data/venues";
import type { Venue, VenueSearch } from "@/types/venue";

export function getVenue(slug: string): Venue | undefined {
  return venues.find((v) => v.slug === slug);
}

export function getAllVenues(): Venue[] {
  return venues;
}

export function isAvailable(venue: Venue, date?: string): boolean {
  return !date || !venue.bookedDates.includes(date);
}

export function searchVenues(search: VenueSearch): Venue[] {
  return venues.filter(
    (v) =>
      (!search.region || v.region === search.region) &&
      (!search.guests || v.capacity >= search.guests) &&
      isAvailable(v, search.date),
  );
}

// Leser søket fra nettadressen (?region=...&date=...&guests=...)
export function parseSearch(
  params: Record<string, string | string[] | undefined>,
): VenueSearch {
  const first = (k: string) => {
    const v = params[k];
    return (Array.isArray(v) ? v[0] : v) || undefined;
  };
  const guests = Number(first("guests"));
  return {
    region: first("region"),
    date: first("date"),
    guests: guests > 0 ? guests : undefined,
  };
}

export function averageRating(venue: Venue): number | null {
  if (venue.reviews.length === 0) return null;
  const sum = venue.reviews.reduce((s, r) => s + r.rating, 0);
  return Math.round((sum / venue.reviews.length) * 10) / 10;
}
