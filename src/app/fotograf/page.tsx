import PhotographerCard from "@/components/photographer/PhotographerCard";
import PhotographerFilters from "@/components/photographer/PhotographerFilters";
import AddProfileLink from "@/components/vendors/AddProfileLink";
import VendorFilterForm from "@/components/vendors/VendorFilterForm";
import {
  filterPhotographers,
  getAllPhotographers,
  parsePhotographerSearch,
  PHOTO_PRICE_OPTIONS,
} from "@/lib/photographers";
import { filterVendors, parseVendorSearch } from "@/lib/vendors";

export const metadata = { title: "Fotograf – NordicOccasions" };

export default async function PhotographerPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const search = parseVendorSearch(params);
  const photoSearch = parsePhotographerSearch(params);
  const results = filterPhotographers(
    filterVendors(getAllPhotographers(), search),
    photoSearch,
  );
  const count = `${results.length} ${results.length === 1 ? "fotograf" : "fotografer"}`;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Fotograf</h1>
          <p className="mt-1 text-stone-600">
            Se porteføljen først – finn fotografen og stilen som passer dere.
          </p>
        </div>
        <AddProfileLink
          href="/fotograf/registrer"
          label="Legg til din profil i fotograf-listen"
        />
      </div>

      <VendorFilterForm
        action="/fotograf"
        search={search}
        priceOptions={PHOTO_PRICE_OPTIONS}
      >
        <PhotographerFilters search={photoSearch} />
      </VendorFilterForm>

      <h2 className="text-xl font-semibold">
        {search.date ? `${count} ledige` : count}
      </h2>

      {results.length === 0 ? (
        <p className="rounded-2xl bg-white p-8 text-center text-stone-500">
          Ingen fotografer passer filteret. Prøv å fjerne et av filtrene.
        </p>
      ) : (
        <div className="grid gap-7 md:grid-cols-2">
          {results.map((p) => (
            <PhotographerCard key={p.slug} p={p} date={search.date} />
          ))}
        </div>
      )}
    </div>
  );
}
