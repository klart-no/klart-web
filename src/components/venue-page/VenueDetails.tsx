import { formatPriceRange } from "@/lib/format";
import type { Venue } from "@/types/venue";

// Navn, nøkkeltall og beskrivelse av lokalet.
export default function VenueDetails({ venue }: { venue: Venue }) {
  return (
    <section>
      <h1 className="text-3xl font-bold">{venue.name}</h1>
      <p className="text-stone-500">
        {venue.place}, {venue.region}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {venue.eventTypes.map((t) => (
          <span
            key={t}
            className="rounded-full bg-gold-100 px-3 py-1 text-sm text-gold-700"
          >
            {t}
          </span>
        ))}
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-white p-4 shadow-sm">
        <div>
          <dt className="text-sm text-stone-500">Kapasitet</dt>
          <dd className="font-semibold">Opptil {venue.capacity} gjester</dd>
        </div>
        <div>
          <dt className="text-sm text-stone-500">Prisestimat</dt>
          <dd className="font-semibold">
            {formatPriceRange(venue.priceMin, venue.priceMax)}
          </dd>
        </div>
      </dl>

      <h2 className="mt-8 text-xl font-semibold">Om lokalet</h2>
      <p className="mt-2 leading-relaxed text-stone-700">{venue.description}</p>

      <h3 className="mt-6 font-semibold">Fasiliteter</h3>
      <ul className="mt-2 grid grid-cols-2 gap-1 text-stone-700">
        {venue.facilities.map((f) => (
          <li key={f}>✓ {f}</li>
        ))}
      </ul>
    </section>
  );
}
