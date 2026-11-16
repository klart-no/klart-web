import type { Photographer } from "@/types/photographer";

// «CV og kompetanse»: utdanning, priser, publisert i, medlemskap + utstyr og nettside.
export default function PhotographerCv({ p }: { p: Photographer }) {
  const blocks = [
    { title: "Utdanning og kurs", items: p.cv.education },
    { title: "Priser og utmerkelser", items: p.cv.awards },
    { title: "Publisert i", items: p.cv.published },
    { title: "Medlemskap og sertifisering", items: p.cv.memberships },
  ].filter((b) => b.items.length > 0);

  return (
    <section>
      <h2 className="mb-3 text-xl font-semibold">CV og kompetanse</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {blocks.map((b) => (
          <div key={b.title} className="rounded-xl bg-white p-4 shadow-sm">
            <h3 className="mb-2 font-semibold">{b.title}</h3>
            <ul className="list-inside list-disc space-y-1 text-stone-700">
              {b.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
        <div>
          <dt className="text-stone-500">Utstyr</dt>
          <dd>{p.equipment}</dd>
        </div>
        <div>
          <dt className="text-stone-500">Ekstra fotograf</dt>
          <dd>{p.secondShooter ? "Ja, ved behov" : "Nei"}</dd>
        </div>
        {p.website && (
          <div>
            <dt className="text-stone-500">Nettside</dt>
            <dd>
              <a
                href={p.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-700 underline"
              >
                Besøk nettside
              </a>
            </dd>
          </div>
        )}
      </dl>
    </section>
  );
}
