import { NextResponse } from "next/server";
import { findVendor, validateVendorRequest } from "@/lib/vendorRequest";

// Tar imot forespørsler til DJ-er (og senere fotografer).
// Nå: logges i serverloggen. Senere: lagres i Supabase + e-post til leverandøren.
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const result = validateVendorRequest(body);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const vendor = findVendor(result.data);
  if (!vendor) {
    return NextResponse.json(
      { error: "Fant ikke leverandøren" },
      { status: 404 },
    );
  }
  if (vendor.bookedDates.includes(result.data.eventDate)) {
    return NextResponse.json(
      { error: "Datoen er ikke ledig" },
      { status: 409 },
    );
  }

  console.log("NY FORESPØRSEL", {
    receivedAt: new Date().toISOString(),
    vendor: vendor.name,
    vendorEmail: vendor.contactEmail,
    ...result.data,
  });

  return NextResponse.json({ ok: true });
}
