import { formatPriceRange } from "@/lib/format";
import { averageVendorRating } from "@/lib/vendors";
import type { Dj } from "@/types/vendor";

// Navn, nøkkeltall, «Om meg», sjangre og hva som er inkludert.
export default function DjDetails({ dj }: { dj: Dj }) {
  const rating = averageVendorRating(dj);

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{dj.name}</h1>
        <p className="text-stone-500">
          {dj.region} · reiser i {dj.travel}
          {rating &&
            ` · ★ ${rating.toLocaleString("nb-NO")} (${dj.reviews.length} anmeldelser)`}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {dj.eventTypes.map((t) => (
            <span
              key={t}
              className="rounded-full bg-rose-100 px-3 py-1 text-sm text-rose-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-4 shadow-sm">
        <div>
          <dt className="text-sm text-stone-500">Prisestimat</dt>
          <dd className="font-semibold">
            {formatPriceRange(dj.priceMin, dj.priceMax)}
          </dd>
        </div>
        <div>
          <dt className="text-sm text-stone-500">Spilletid</dt>
          <dd className="font-semibold">Opptil {dj.maxHours} timer</dd>
        </div>
      </dl>

      <div>
        <h2 className="text-xl font-semibold">Om meg</h2>
        <p className="mt-2 leading-relaxed text-stone-700">{dj.about}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <h3 className="font-semibold">Sjangre</h3>
          <p className="mt-1 text-stone-700">{dj.genres.join(" · ")}</p>
        </div>
        <div>
          <h3 className="font-semibold">Inkludert i prisen</h3>
          <ul className="mt-1 space-y-1 text-stone-700">
            {dj.included.map((i) => (
              <li key={i}>✓ {i}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
