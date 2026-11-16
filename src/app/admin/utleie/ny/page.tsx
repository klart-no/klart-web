import ProductForm from "@/components/admin/ProductForm";

export const metadata = {
  title: "Admin: legg til utleieprodukt – NordicOccasions",
  robots: "noindex",
};

// VIKTIG: siden er ikke beskyttet ennå. Den må ligge bak innlogging før lansering.
export default function NewRentalProductPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <p className="text-sm font-semibold text-rose-700">
          Admin · kun for oss
        </p>
        <h1 className="text-3xl font-bold">Legg til utleieprodukt</h1>
        <p className="mt-1 text-stone-600">
          Fyll inn én gang – produktet vises på nettsiden når du publiserer.
        </p>
      </div>
      <ProductForm />
    </div>
  );
}
