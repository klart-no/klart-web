// Validering av leieforespørsler (brukes av /api/leie).
import { getAllRentalItems, RENTAL_REGIONS } from "./rentals";
import type { RentalItem } from "@/types/rental";

export type RentalRequest = {
  items: RentalItem[];
  eventDate: string;
  region: string;
  delivery: string;
  name: string;
  email: string;
};

type Result = { ok: true; data: RentalRequest } | { ok: false; error: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateRentalRequest(body: unknown): Result {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Ugyldig forespørsel" };
  }
  const b = body as Record<string, unknown>;
  const str = (k: string) => String(b[k] ?? "").trim();

  const ids = Array.isArray(b.itemIds) ? b.itemIds.map(String) : [];
  const items = getAllRentalItems().filter((item) => ids.includes(item.id));
  if (items.length === 0 || items.length !== ids.length) {
    return { ok: false, error: "Velg minst ett produkt" };
  }
  if (!str("eventDate"))
    return { ok: false, error: "Velg dato for arrangementet" };
  if (!RENTAL_REGIONS.includes(str("region")))
    return { ok: false, error: "Velg sted" };
  if (!str("name")) return { ok: false, error: "Skriv inn navn" };
  if (!EMAIL.test(str("email"))) return { ok: false, error: "Ugyldig e-post" };

  return {
    ok: true,
    data: {
      items,
      eventDate: str("eventDate"),
      region: str("region"),
      delivery: str("delivery"),
      name: str("name"),
      email: str("email"),
    },
  };
}
