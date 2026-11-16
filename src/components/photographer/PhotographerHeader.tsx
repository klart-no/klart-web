import { formatFollowers, SERVICE_LABELS } from "@/lib/photographers";
import { averageVendorRating } from "@/lib/vendors";
import type { Photographer } from "@/types/photographer";

// Toppen av profilen: profilbilde, navn, stil-merker og Instagram.
export default function PhotographerHeader({ p }: { p: Photographer }) {
  const rating = averageVendorRating(p);
  const tags = [
    ...p.styles,
    SERVICE_LABELS[p.service],
    p.languages.join(" og "),
  ];
  const instagramUrl = `https://instagram.com/${p.instagram.handle.replace("@", "")}`;

  return (
    <section className="flex flex-wrap items-center gap-5">
      <div
        aria-hidden="true"
        className="h-24 w-24 shrink-0 rounded-full bg-gradient-to-br from-stone-200 to-amber-200"
      />
      <div className="min-w-0 flex-1">
        <h1 className="text-3xl font-bold">{p.name}</h1>
        <p className="text-stone-500">
          {p.region} · reiser i {p.travel}
          {rating &&
            ` · ★ ${rating.toLocaleString("nb-NO")} (${p.reviews.length} anmeldelser)`}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-gold-100 px-3 py-1 text-sm text-gold-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-xl border border-stone-300 bg-white px-4 py-2.5 hover:bg-stone-50"
      >
        <span
          aria-hidden="true"
          className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-stone-800 text-xs"
        >
          IG
        </span>
        <span className="text-sm">
          <strong className="block">{p.instagram.handle}</strong>
          <span className="text-stone-500">
            {formatFollowers(p.instagram.followers)} · se Instagram
          </span>
        </span>
      </a>
    </section>
  );
}
