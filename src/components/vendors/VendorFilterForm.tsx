// Filter for leverandørlister: sted, estimert pris og ledig dato.
// Vanlig skjema – filteret havner i nettadressen, så et søk kan deles som lenke.
import { regions } from "@/data/regions";
import { todayIso } from "@/lib/dates";
import { PRICE_OPTIONS } from "@/lib/vendors";
import type { VendorSearch } from "@/types/vendor";

const field =
  "w-full rounded-lg border border-stone-300 bg-white px-3 py-3 focus:border-rose-400 focus:outline-none";
const label = "text-sm font-medium text-stone-600";

export default function VendorFilterForm({
  action,
  search,
  priceOptions = PRICE_OPTIONS,
  children,
}: {
  action: string; // f.eks. "/dj"
  search: VendorSearch;
  priceOptions?: { value: string; label: string }[];
  children?: React.ReactNode; // ekstra filtre, f.eks. stil for fotografer
}) {
  return (
    <form
      action={action}
      className="grid gap-3 rounded-2xl bg-white p-4 shadow-sm sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col"
    >
      <label className={label}>
        Sted
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

      <label className={label}>
        Estimert pris
        <select
          name="maxPrice"
          defaultValue={search.maxPrice ? String(search.maxPrice) : ""}
          className={field}
        >
          {priceOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>

      <label className={label}>
        Ledig dato
        <input
          type="date"
          name="date"
          min={todayIso()}
          defaultValue={search.date ?? ""}
          className={field}
        />
      </label>

      {children}

      <button className="self-end rounded-lg bg-rose-500 px-8 py-3 font-semibold text-white hover:bg-rose-600">
        Søk
      </button>
    </form>
  );
}
