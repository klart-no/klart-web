import DjCard from "@/components/dj/DjCard";
import AddProfileLink from "@/components/vendors/AddProfileLink";
import VendorFilterForm from "@/components/vendors/VendorFilterForm";
import { getAllDjs } from "@/lib/djs";
import { filterVendors, parseVendorSearch } from "@/lib/vendors";

export const metadata = { title: "DJ – NordicOccasions" };

export default async function DjPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const search = parseVendorSearch(await searchParams);
  const results = filterVendors(getAllDjs(), search);
  const count = `${results.length} ${results.length === 1 ? "DJ" : "DJ-er"}`;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">DJ</h1>
          <p className="mt-1 text-stone-600">
            Finn DJ til bryllup, bursdag og fest – sammenlign pris og se hvem
            som er ledig.
          </p>
        </div>
        <AddProfileLink
          href="/dj/registrer"
          label="Legg til din profil i DJ-listen"
        />
      </div>

      <VendorFilterForm action="/dj" search={search} />

      <h2 className="text-xl font-semibold">
        {search.date ? `${count} ledige` : count}
      </h2>

      {results.length === 0 ? (
        <p className="rounded-2xl bg-white p-8 text-center text-stone-500">
          Ingen DJ-er passer filteret. Prøv en annen dato, et annet sted eller
          en høyere pris.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((dj) => (
            <DjCard key={dj.slug} dj={dj} date={search.date} />
          ))}
        </div>
      )}
    </div>
  );
}
