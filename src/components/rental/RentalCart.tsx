"use client";

// «Din bestilling»: det som er valgt, estimert total og skjema for å sende forespørselen.
import { useState } from "react";
import { fieldClass } from "@/components/ui/formStyles";
import { formatNok } from "@/lib/format";
import { rentalTotal } from "@/lib/rentals";
import type { RentalItem } from "@/types/rental";

type Props = {
  items: RentalItem[];
  date: string;
  region: string;
  onRemove: (id: string) => void;
  onSent: () => void;
};

export default function RentalCart({
  items,
  date,
  region,
  onRemove,
  onSent,
}: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const empty = items.length === 0;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const fields = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/leie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...fields,
        itemIds: items.map((i) => i.id),
        eventDate: date,
        region,
      }),
    });
    if (res.ok) {
      setStatus("sent");
      onSent();
      return;
    }
    const body = await res.json().catch(() => ({}));
    setError(body.error ?? "Noe gikk galt. Prøv igjen.");
    setStatus("idle");
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Takk! Forespørselen er sendt</h2>
        <p className="mt-2 text-stone-600">
          Vi bekrefter tilgjengelighet og endelig pris på e-post.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl bg-white p-6 shadow-sm"
    >
      <h2 className="text-xl font-semibold">Din bestilling</h2>

      {empty ? (
        <p className="text-stone-500">
          Ingenting valgt ennå. Trykk «Legg til» på det du trenger. Du kan velge
          fra flere kategorier.
        </p>
      ) : (
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-2"
            >
              <span>{item.name}</span>
              <span className="flex items-center gap-2 whitespace-nowrap">
                {formatNok(item.price)}
                <button
                  type="button"
                  aria-label={`Fjern ${item.name}`}
                  onClick={() => onRemove(item.id)}
                  className="h-8 w-8 rounded-full bg-stone-100 hover:bg-stone-200"
                >
                  ×
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}

      <p className="flex justify-between border-t border-stone-200 pt-3 text-lg font-bold">
        <span>Estimert total</span>
        <span>{formatNok(rentalTotal(items))}</span>
      </p>

      <select name="delivery" className={fieldClass} aria-label="Levering">
        <option>Levering og oppsett på lokalet</option>
        <option>Jeg henter selv</option>
      </select>
      <input name="name" required placeholder="Navn" className={fieldClass} />
      <input
        name="email"
        type="email"
        required
        placeholder="E-post"
        className={fieldClass}
      />

      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        disabled={empty || status === "sending"}
        className="w-full rounded-lg bg-rose-600 py-3 font-semibold text-white hover:bg-rose-700 disabled:bg-stone-400"
      >
        {status === "sending"
          ? "Sender…"
          : empty
            ? "Velg noe først"
            : `Send forespørsel (${items.length})`}
      </button>
      <p className="text-center text-xs text-stone-500">
        Gratis og uforpliktende. Vi bekrefter tilgjengelighet og endelig pris.
      </p>
    </form>
  );
}
