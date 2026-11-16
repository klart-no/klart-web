"use client";

// Ett produkt på leiesiden: bilde, nøkkelpunkter, pris, «Se spesifikasjoner» og «Legg til».
import { useState } from "react";
import { formatNok } from "@/lib/format";
import type { RentalItem } from "@/types/rental";

type Props = { item: RentalItem; picked: boolean; onToggle: () => void };

export default function RentalItemCard({ item, picked, onToggle }: Props) {
  const [open, setOpen] = useState(false);
  const isCar = item.category === "bryllupsbil";

  return (
    <article className="grid overflow-hidden rounded-2xl bg-white shadow-sm sm:grid-cols-[220px_1fr]">
      <div
        role="img"
        aria-label={`Bilde av ${item.name}`}
        className={`flex min-h-44 items-end bg-gradient-to-br p-3 ${item.tone}`}
      >
        <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold">
          {item.badge}
        </span>
      </div>

      <div className="flex flex-col gap-2 p-5">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-stone-700">{item.description}</p>
        <p className="text-sm text-stone-500">{item.keyPoints.join(" · ")}</p>

        {open && (
          <dl className="grid gap-x-4 gap-y-2 rounded-lg bg-stone-50 p-3 text-sm sm:grid-cols-2">
            {item.specs.map((spec) => (
              <div key={spec.label}>
                <dt className="text-stone-500">{spec.label}</dt>
                <dd className="font-medium">{spec.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
          <p className="text-lg font-semibold">
            {isCar && "fra "}
            {formatNok(item.price)}
            <span className="text-sm font-normal text-stone-500">
              {isCar ? " per bryllup" : " per arrangement"}
            </span>
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold hover:bg-stone-50"
            >
              {open ? "Skjul detaljer" : "Se spesifikasjoner"}
            </button>
            <button
              type="button"
              aria-pressed={picked}
              onClick={onToggle}
              className={`rounded-lg px-4 py-2.5 text-sm font-semibold ${
                picked
                  ? "border border-green-800 bg-green-100 text-green-800"
                  : "bg-navy-900 text-white hover:bg-navy-700"
              }`}
            >
              {picked ? "Lagt til ✓" : "Legg til"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
