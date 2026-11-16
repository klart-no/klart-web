// Henting av DJ-er. Når vi flytter til Supabase, er det bare denne filen som endres.
import { djs } from "@/data/djs";
import type { Dj } from "@/types/vendor";

export function getAllDjs(): Dj[] {
  return djs;
}

export function getDj(slug: string): Dj | undefined {
  return djs.find((d) => d.slug === slug);
}
