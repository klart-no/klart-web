import { NextResponse } from "next/server";
import { validateRentalRequest } from "@/lib/rentalRequest";
import { rentalTotal } from "@/lib/rentals";

// Tar imot leieforespørsler (utstyr og bryllupsbil i samme bestilling).
// Nå: logges i serverloggen. Senere: lagres i Supabase, sjekkes mot lager og sendes på e-post.
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const result = validateRentalRequest(body);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const { items, ...rest } = result.data;
  console.log("NY LEIEFORESPØRSEL", {
    receivedAt: new Date().toISOString(),
    items: items.map((item) => item.name),
    estimatedTotal: rentalTotal(items),
    ...rest,
  });

  return NextResponse.json({ ok: true });
}
