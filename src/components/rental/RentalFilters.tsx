// Øverste rad på leiesiden: hva vil du leie, dato og sted.
import { fieldClass } from "@/components/ui/formStyles";
import { todayIso } from "@/lib/dates";
import { RENTAL_CATEGORIES, RENTAL_REGIONS } from "@/lib/rentals";
import type { RentalCategory } from "@/types/rental";

type Props = {
  category: RentalCategory;
  date: string;
  region: string;
  onCategory: (c: RentalCategory) => void;
  onDate: (d: string) => void;
  onRegion: (r: string) => void;
};

const label = "text-sm font-medium text-stone-600";

export default function RentalFilters(props: Props) {
  return (
    <div className="grid gap-3 rounded-2xl bg-white p-4 shadow-sm sm:grid-cols-3">
      <label className={label}>
        Hva vil du leie?
        <select
          value={props.category}
          onChange={(e) => props.onCategory(e.target.value as RentalCategory)}
          className={fieldClass}
        >
          {RENTAL_CATEGORIES.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </label>
      <label className={label}>
        Dato for arrangementet
        <input
          type="date"
          min={todayIso()}
          value={props.date}
          onChange={(e) => props.onDate(e.target.value)}
          className={fieldClass}
        />
      </label>
      <label className={label}>
        Sted
        <select
          value={props.region}
          onChange={(e) => props.onRegion(e.target.value)}
          className={fieldClass}
        >
          {RENTAL_REGIONS.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
