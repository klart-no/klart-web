import { notFound } from "next/navigation";
import RentalBrowser from "@/components/rental/RentalBrowser";
import AddProfileLink from "@/components/vendors/AddProfileLink";
import {
  getAllRentalItems,
  isRentalCategory,
  RENTAL_CATEGORIES,
} from "@/lib/rentals";

export const metadata = { title: "Leie av utstyr – NordicOccasions" };

export function generateStaticParams() {
  return RENTAL_CATEGORIES.map((c) => ({ kategori: c.id }));
}

// /utstyr/fotoboks, /utstyr/fotovegg, /utstyr/bryllupsbil og /utstyr/annet åpner samme side
// med riktig kategori valgt i nedtrekkslisten.
export default async function RentalPage({
  params,
}: {
  params: Promise<{ kategori: string }>;
}) {
  const { kategori } = await params;
  if (!isRentalCategory(kategori)) notFound();

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Leie av utstyr</h1>
          <p className="mt-1 text-stone-600">
            Velg hva du vil leie, sammenlign modeller, og send én samlet
            forespørsel.
          </p>
        </div>
        <AddProfileLink
          href="/utstyr/bryllupsbil/registrer"
          label="Lei ut bilen din til bryllup"
        />
      </div>
      <RentalBrowser items={getAllRentalItems()} initialCategory={kategori} />
      <p className="text-sm text-stone-500">
        Alle produkter, biler, spesifikasjoner og priser er eksempler.
      </p>
    </div>
  );
}
