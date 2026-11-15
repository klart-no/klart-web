import type { VenueOwner } from "@/types/venue";

// "Om utleier / kontakt" – fylles ut av eieren.
export default function OwnerInfo({ owner }: { owner: VenueOwner }) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">Om utleier</h2>
      <p className="mt-1 font-medium">{owner.name}</p>
      <p className="mt-2 text-stone-700">{owner.about}</p>
      <dl className="mt-4 space-y-1 text-sm">
        <div className="flex gap-2">
          <dt className="text-stone-500">E-post:</dt>
          <dd>{owner.email}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="text-stone-500">Telefon:</dt>
          <dd>{owner.phone}</dd>
        </div>
      </dl>
    </section>
  );
}
