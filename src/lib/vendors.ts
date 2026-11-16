// Felles søk og filtrering for leverandører (DJ nå, fotograf senere).
import type { VendorBase, VendorSearch } from "@/types/vendor";

export const PRICE_OPTIONS = [
  { value: "", label: "Alle priser" },
  { value: "8000", label: "Opptil 8 000 kr" },
  { value: "12000", label: "Opptil 12 000 kr" },
  { value: "16000", label: "Opptil 16 000 kr" },
];

export function filterVendors<T extends VendorBase>(
  list: T[],
  search: VendorSearch,
): T[] {
  return list.filter(
    (v) =>
      (!search.region || v.region === search.region) &&
      (!search.maxPrice || v.priceMin <= search.maxPrice) &&
      (!search.date || !v.bookedDates.includes(search.date)),
  );
}

// Leser filteret fra nettadressen (?region=...&maxPrice=...&date=...)
export function parseVendorSearch(
  params: Record<string, string | string[] | undefined>,
): VendorSearch {
  const first = (k: string) => {
    const v = params[k];
    return (Array.isArray(v) ? v[0] : v) || undefined;
  };
  const maxPrice = Number(first("maxPrice"));
  return {
    region: first("region"),
    date: first("date"),
    maxPrice: maxPrice > 0 ? maxPrice : undefined,
  };
}

export function averageVendorRating(vendor: VendorBase): number | null {
  if (vendor.reviews.length === 0) return null;
  const sum = vendor.reviews.reduce((s, r) => s + r.rating, 0);
  return Math.round((sum / vendor.reviews.length) * 10) / 10;
}

export function mediaSummary(vendor: VendorBase): string {
  const images = vendor.media.filter((m) => m.kind === "image").length;
  const videos = vendor.media.filter((m) => m.kind === "video").length;
  const parts = [`${images} bilder`];
  if (videos > 0) parts.push(`${videos} ${videos === 1 ? "video" : "videoer"}`);
  return parts.join(" · ");
}
