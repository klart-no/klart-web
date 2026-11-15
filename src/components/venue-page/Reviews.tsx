import { formatDate } from "@/lib/format";
import type { Review } from "@/types/venue";

export default function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-semibold">
        Anmeldelser fra andre brukere
      </h2>
      {reviews.length === 0 ? (
        <p className="text-stone-500">Ingen anmeldelser ennå.</p>
      ) : (
        <ul className="space-y-3">
          {reviews.map((r, i) => (
            <li key={i} className="rounded-xl bg-white p-4 shadow-sm">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{r.author}</span>
                <span className="text-amber-500">{"★".repeat(r.rating)}</span>
              </div>
              <p className="mt-1 text-xs text-stone-500">
                {formatDate(r.date)}
              </p>
              <p className="mt-2 text-stone-700">{r.text}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
