import Link from "next/link";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { formatPriceRange } from "@/lib/format";
import { formatFollowers, SERVICE_LABELS } from "@/lib/photographers";
import { averageVendorRating, mediaSummary } from "@/lib/vendors";
import type { Photographer } from "@/types/photographer";

// Kortet i fotograf-listen: porteføljen først (stort bilde + to små), så nøkkelinfo.
export default function PhotographerCard({
  p,
  date,
}: {
  p: Photographer;
  date?: string;
}) {
  const rating = averageVendorRating(p);
  const images = p.media.filter((m) => m.kind === "image");
  const hasFilm = p.media.some((m) => m.kind === "video");
  const href = `/fotograf/${p.slug}${date ? `?date=${date}` : ""}`;

  return (
    <Link
      href={href}
      className="block overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="grid h-72 grid-cols-[2fr_1fr] grid-rows-2 gap-1">
        <div className="relative row-span-2">
          <PlaceholderImage image={images[0]} className="h-full w-full" />
          <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold">
            {mediaSummary(p)}
          </span>
        </div>
        <PlaceholderImage
          image={images[1] ?? images[0]}
          className="h-full w-full"
        />
        {hasFilm ? (
          <div className="flex items-center justify-center gap-1.5 bg-stone-800 text-sm text-white">
            ▶ Film
          </div>
        ) : (
          <PlaceholderImage
            image={images[2] ?? images[0]}
            className="h-full w-full"
          />
        )}
      </div>
      <div className="space-y-1 p-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold">{p.name}</h3>
          {rating && (
            <span className="text-sm">★ {rating.toLocaleString("nb-NO")}</span>
          )}
        </div>
        <p className="text-sm text-stone-500">
          {p.region} · {p.styles.join(", ")} · {SERVICE_LABELS[p.service]}
        </p>
        <p className="text-sm text-stone-700">
          {p.yearsExperience} års erfaring · {p.weddingsShot} bryllup ·{" "}
          {p.instagram.handle} ({formatFollowers(p.instagram.followers)})
        </p>
        {date && (
          <p className="text-sm font-semibold text-green-800">
            Ledig denne datoen
          </p>
        )}
        <p className="pt-1 font-medium">
          {formatPriceRange(p.priceMin, p.priceMax)}
          <span className="font-normal text-stone-500">
            {" "}
            · prisestimat bryllup
          </span>
        </p>
      </div>
    </Link>
  );
}
