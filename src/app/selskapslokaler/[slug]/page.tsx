import Link from "next/link";
import { notFound } from "next/navigation";
import BefaringForm from "@/components/venue-page/BefaringForm";
import OwnerInfo from "@/components/venue-page/OwnerInfo";
import Reviews from "@/components/venue-page/Reviews";
import VenueDetails from "@/components/venue-page/VenueDetails";
import VenueGallery from "@/components/venue-page/VenueGallery";
import { getVenue } from "@/lib/venues";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ date?: string }>;
};

export default async function VenuePage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { date } = await searchParams;
  const venue = getVenue(slug);
  if (!venue) notFound();

  return (
    <div className="space-y-8">
      <Link
        href="/selskapslokaler"
        className="text-sm text-stone-500 hover:text-stone-900"
      >
        ← Tilbake til alle lokaler
      </Link>
      <VenueGallery images={venue.images} />

      <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
        <div className="space-y-10">
          <VenueDetails venue={venue} />
          <Reviews reviews={venue.reviews} />
          <OwnerInfo owner={venue.owner} />
        </div>
        <aside className="lg:sticky lg:top-4 lg:self-start">
          <BefaringForm
            venueSlug={venue.slug}
            venueName={venue.name}
            unavailable={venue.bookedDates}
            eventDate={date}
          />
        </aside>
      </div>
    </div>
  );
}
