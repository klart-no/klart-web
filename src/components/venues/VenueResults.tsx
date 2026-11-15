import { formatDate } from "@/lib/format";
import type { Venue, VenueSearch } from "@/types/venue";
import VenueCard from "./VenueCard";

export default function VenueResults({
  venues,
  search,
}: {
  venues: Venue[];
  search: VenueSearch;
}) {
  const hasSearch = Boolean(search.region || search.date || search.guests);

  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">
        {hasSearch
          ? `${venues.length} ${venues.length === 1 ? "ledig lokale" : "ledige lokaler"}${search.date ? ` ${formatDate(search.date)}` : ""}`
          : "Alle lokaler"}
      </h2>

      {venues.length === 0 ? (
        <p className="rounded-2xl bg-white p-8 text-center text-stone-500">
          Ingen lokaler passer søket. Prøv en annen dato, region eller færre
          gjester.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {venues.map((v) => (
            <VenueCard key={v.slug} venue={v} date={search.date} />
          ))}
        </div>
      )}
    </section>
  );
}
