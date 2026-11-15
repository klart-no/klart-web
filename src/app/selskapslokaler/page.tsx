import VenueResults from "@/components/venues/VenueResults";
import VenueSearchForm from "@/components/venues/VenueSearchForm";
import { parseSearch, searchVenues } from "@/lib/venues";

export const metadata = { title: "Selskapslokaler – NordicOccasions" };

export default async function SelskapslokalerPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const search = parseSearch(await searchParams);
  const results = searchVenues(search);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Selskapslokaler</h1>
        <p className="mt-1 text-stone-600">
          Finn ledige lokaler til bryllup, bursdag og fest.
        </p>
      </div>
      <VenueSearchForm search={search} />
      <VenueResults venues={results} search={search} />
    </div>
  );
}
