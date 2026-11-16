// Ekstra filtre for fotografer: tjeneste (foto/video) og stil.
// Legges inn i det felles VendorFilterForm.
import { SERVICE_LABELS, STYLES } from "@/lib/photographers";
import type { PhotographerSearch } from "@/types/photographer";

const field =
  "w-full rounded-lg border border-stone-300 bg-white px-3 py-3 focus:border-gold-500 focus:outline-none";
const label = "text-sm font-medium text-stone-600";

export default function PhotographerFilters({
  search,
}: {
  search: PhotographerSearch;
}) {
  return (
    <>
      <label className={label}>
        Tjeneste
        <select
          name="service"
          defaultValue={search.service ?? ""}
          className={field}
        >
          <option value="">Foto og/eller video</option>
          <option value="foto">{SERVICE_LABELS.foto}</option>
          <option value="video">{SERVICE_LABELS.video}</option>
        </select>
      </label>
      <label className={label}>
        Stil
        <select
          name="style"
          defaultValue={search.style ?? ""}
          className={field}
        >
          <option value="">Alle stiler</option>
          {STYLES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
    </>
  );
}
