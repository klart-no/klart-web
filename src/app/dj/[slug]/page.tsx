import Link from "next/link";
import { notFound } from "next/navigation";
import DjDetails from "@/components/dj/DjDetails";
import Reviews from "@/components/venue-page/Reviews";
import MediaGallery from "@/components/vendors/MediaGallery";
import RequestForm from "@/components/vendors/RequestForm";
import { getDj } from "@/lib/djs";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ date?: string }>;
};

export default async function DjProfilePage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { date } = await searchParams;
  const dj = getDj(slug);
  if (!dj) notFound();

  return (
    <div className="space-y-8">
      <Link href="/dj" className="text-sm text-stone-500 hover:text-navy-950">
        ← Tilbake til alle DJ-er
      </Link>
      <MediaGallery media={dj.media} />

      <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
        <div className="space-y-10">
          <DjDetails dj={dj} />
          <Reviews reviews={dj.reviews} />
        </div>
        <aside className="lg:sticky lg:top-4 lg:self-start">
          <RequestForm
            vendorType="dj"
            vendorSlug={dj.slug}
            vendorName={dj.name}
            unavailable={dj.bookedDates}
            initialDate={date}
          />
        </aside>
      </div>
    </div>
  );
}
