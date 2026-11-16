import Link from "next/link";
import HoverGallery from "@/components/venues/HoverGallery";
import { formatPriceRange } from "@/lib/format";
import { averageVendorRating, mediaSummary } from "@/lib/vendors";
import type { Dj } from "@/types/vendor";

// Kortet i DJ-listen. Bildene byttes ved hover, som på lokalkortene.
export default function DjCard({ dj, date }: { dj: Dj; date?: string }) {
  const rating = averageVendorRating(dj);
  const images = dj.media.filter((m) => m.kind === "image");
  const href = `/dj/${dj.slug}${date ? `?date=${date}` : ""}`;

  return (
    <Link
      href={href}
      className="block overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="relative">
        <HoverGallery images={images} />
        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold">
          {mediaSummary(dj)}
        </span>
        {date && (
          <span className="absolute right-3 top-3 rounded-full bg-green-800 px-2.5 py-1 text-xs font-semibold text-white">
            Ledig denne datoen
          </span>
        )}
      </div>
      <div className="space-y-1 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold">{dj.name}</h3>
          {rating && (
            <span className="text-sm">★ {rating.toLocaleString("nb-NO")}</span>
          )}
        </div>
        <p className="text-sm text-stone-500">
          {dj.region} · reiser i {dj.travel}
        </p>
        <p className="text-sm text-stone-700">{dj.genres.join(" · ")}</p>
        <p className="pt-2 font-medium">
          {formatPriceRange(dj.priceMin, dj.priceMax)}
          <span className="font-normal text-stone-500">
            {" "}
            · prisestimat per kveld
          </span>
        </p>
      </div>
    </Link>
  );
}
