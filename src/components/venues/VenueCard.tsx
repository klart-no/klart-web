import Link from "next/link";
import { formatPriceRange } from "@/lib/format";
import { averageRating } from "@/lib/venues";
import type { Venue } from "@/types/venue";
import HoverGallery from "./HoverGallery";

export default function VenueCard({
  venue,
  date,
}: {
  venue: Venue;
  date?: string;
}) {
  const rating = averageRating(venue);
  const href = `/selskapslokaler/${venue.slug}${date ? `?date=${date}` : ""}`;

  return (
    <Link
      href={href}
      className="block overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
    >
      <HoverGallery images={venue.images} />
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold">{venue.name}</h3>
          {rating && <span className="text-sm">★ {rating}</span>}
        </div>
        <p className="text-sm text-stone-500">
          {venue.place}, {venue.region} · opptil {venue.capacity} gjester
        </p>
        <p className="mt-2 text-sm text-stone-700">{venue.shortDescription}</p>
        <p className="mt-3 font-medium">
          {formatPriceRange(venue.priceMin, venue.priceMax)}
          <span className="font-normal text-stone-500"> · prisestimat</span>
        </p>
      </div>
    </Link>
  );
}
