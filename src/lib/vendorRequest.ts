// Validering av forespørsler til DJ-er (og senere fotografer). Brukes av /api/foresporsel.
import { getDj } from "./djs";

export type VendorRequest = {
  vendorType: "dj";
  vendorSlug: string;
  eventDate: string;
  eventType: string;
  name: string;
  email: string;
  message: string;
};

type Result = { ok: true; data: VendorRequest } | { ok: false; error: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateVendorRequest(body: unknown): Result {
  if (!body || typeof body !== "object")
    return { ok: false, error: "Ugyldig forespørsel" };
  const b = body as Record<string, unknown>;
  const str = (k: string) => String(b[k] ?? "").trim();

  if (str("vendorType") !== "dj")
    return { ok: false, error: "Ukjent type leverandør" };
  const data: VendorRequest = {
    vendorType: "dj",
    vendorSlug: str("vendorSlug"),
    eventDate: str("eventDate"),
    eventType: str("eventType"),
    name: str("name"),
    email: str("email"),
    message: str("message"),
  };

  if (!data.eventDate) return { ok: false, error: "Velg en dato" };
  if (!data.name) return { ok: false, error: "Skriv inn navn" };
  if (!EMAIL.test(data.email)) return { ok: false, error: "Ugyldig e-post" };
  return { ok: true, data };
}

// Finner leverandøren forespørselen gjelder (utvides med fotograf).
export function findVendor(request: VendorRequest) {
  return getDj(request.vendorSlug);
}
