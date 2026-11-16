// Søkefeltet: region, dato, antall gjester. Vanlig skjema – søket havner i nettadressen,
// så et søk kan deles som lenke.
import { regions } from "@/data/regions";
import { todayIso } from "@/lib/dates";
import type { VenueSearch } from "@/types/venue";

const field =
  "w-full rounded-lg border border-stone-300 bg-white px-3 py-3 focus:border-gold-500 focus:outline-none";

export default function VenueSearchForm({ search }: { search: VenueSearch }) {
  return (
    <form
      action="/selskapslokaler"
      className="grid gap-3 rounded-2xl bg-white p-4 shadow-sm sm:grid-cols-[1fr_1fr_1fr_auto]"
    >
      <label className="text-sm font-medium text-stone-600">
        Velg region
        <select
          name="region"
          defaultValue={search.region ?? ""}
          className={field}
        >
          <option value="">Hele Norge</option>
          {regions.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </label>

      <label className="text-sm font-medium text-stone-600">
        Velg dato
        <input
          type="date"
          name="date"
          min={todayIso()}
          defaultValue={search.date ?? ""}
          className={field}
        />
      </label>

      <label className="text-sm font-medium text-stone-600">
        Velg antall gjester
        <input
          type="number"
          name="guests"
          min={1}
          placeholder="F.eks. 80"
          defaultValue={search.guests ?? ""}
          className={field}
        />
      </label>

      <button className="self-end rounded-lg bg-navy-900 px-8 py-3 font-semibold text-white hover:bg-navy-700">
        Søk
      </button>
    </form>
  );
}
