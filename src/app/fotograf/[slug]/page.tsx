import Link from "next/link";
import { notFound } from "next/navigation";
import PackagesTable from "@/components/photographer/PackagesTable";
import PhotographerCv from "@/components/photographer/PhotographerCv";
import PhotographerHeader from "@/components/photographer/PhotographerHeader";
import PhotographerStats from "@/components/photographer/PhotographerStats";
import Portfolio from "@/components/photographer/Portfolio";
import Reviews from "@/components/venue-page/Reviews";
import RequestForm from "@/components/vendors/RequestForm";
import { formatPriceRange } from "@/lib/format";
import { getPhotographer } from "@/lib/photographers";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ date?: string }>;
};

export default async function PhotographerProfilePage({
  params,
  searchParams,
}: Props) {
  const { slug } = await params;
  const { date } = await searchParams;
  const p = getPhotographer(slug);
  if (!p) notFound();

  return (
    <div className="space-y-8">
      <Link
        href="/fotograf"
        className="text-sm text-stone-500 hover:text-stone-900"
      >
        ← Tilbake til alle fotografer
      </Link>
      <PhotographerHeader p={p} />
      <Portfolio media={p.media} albums={p.albums} />

      <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
        <div className="space-y-10">
          <PhotographerStats p={p} />
          <section>
            <h2 className="text-xl font-semibold">Om meg</h2>
            <p className="mt-2 leading-relaxed text-stone-700">{p.about}</p>
          </section>
          <PhotographerCv p={p} />
          <PackagesTable packages={p.packages} />
          <Reviews reviews={p.reviews} />
        </div>
        <aside className="space-y-3 lg:sticky lg:top-4 lg:self-start">
          <p className="rounded-2xl bg-white px-6 py-4 shadow-sm">
            <strong>{formatPriceRange(p.priceMin, p.priceMax)}</strong>
            <span className="text-stone-500"> · prisestimat bryllup</span>
          </p>
          <RequestForm
            vendorType="fotograf"
            vendorSlug={p.slug}
            vendorName={p.name}
            unavailable={p.bookedDates}
            initialDate={date}
            packages={p.packages.map((pk) => pk.name)}
            messageHint="Sted, antall gjester, hva dere ønsker dere"
          />
        </aside>
      </div>
    </div>
  );
}
