// Validering av befaringsforespørsler (brukes av API-ruten).

export type BefaringRequest = {
  venueSlug: string;
  viewingDate: string; // ønsket dag for befaring
  eventDate: string; // dato for arrangementet
  name: string;
  email: string;
  phone: string;
  guests: string;
  message: string;
};

type Result =
  { ok: true; data: BefaringRequest } | { ok: false; error: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateBefaring(body: unknown): Result {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Ugyldig forespørsel" };
  }
  const b = body as Record<string, unknown>;
  const str = (k: string) => String(b[k] ?? "").trim();

  const data: BefaringRequest = {
    venueSlug: str("venueSlug"),
    viewingDate: str("viewingDate"),
    eventDate: str("eventDate"),
    name: str("name"),
    email: str("email"),
    phone: str("phone"),
    guests: str("guests"),
    message: str("message"),
  };

  if (!data.venueSlug) return { ok: false, error: "Mangler lokale" };
  if (!data.viewingDate)
    return { ok: false, error: "Velg en dag for befaring" };
  if (!data.name) return { ok: false, error: "Skriv inn navn" };
  if (!EMAIL.test(data.email)) return { ok: false, error: "Ugyldig e-post" };

  return { ok: true, data };
}
