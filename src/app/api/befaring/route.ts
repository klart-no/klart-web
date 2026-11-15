import { NextResponse } from "next/server";
import { validateBefaring } from "@/lib/befaring";
import { getVenue } from "@/lib/venues";

// Tar imot befaringsforespørsler.
// Nå: logges i serverloggen. Senere: lagres i Supabase + e-post til eier.
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const result = validateBefaring(body);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const venue = getVenue(result.data.venueSlug);
  if (!venue) {
    return NextResponse.json({ error: "Ukjent lokale" }, { status: 404 });
  }

  console.log("NY BEFARINGSFORESPØRSEL", {
    receivedAt: new Date().toISOString(),
    venue: venue.name,
    ownerEmail: venue.owner.email,
    ...result.data,
  });

  return NextResponse.json({ ok: true });
}
