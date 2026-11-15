export default function BefaringSent({ venueName }: { venueName: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">Takk! Forespørselen er sendt 🎉</h2>
      <p className="mt-2 text-stone-600">
        Eieren av {venueName} tar kontakt for å bekrefte befaringen.
      </p>
    </div>
  );
}
