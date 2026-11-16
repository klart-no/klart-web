"use client";

// Steg 5 for fotografer: pakker og priser. Prisestimatet i listen regnes ut fra pakkene.
import { useState } from "react";
import { fieldClass, labelClass } from "@/components/ui/formStyles";

const MAX_PACKAGES = 5;
const EXAMPLES = [
  { name: "Vielse", includes: "2 timer, 150 bilder" },
  { name: "Hel dag", includes: "10 timer, 700 bilder" },
];

export default function PackagesStep() {
  const [count, setCount] = useState(2);

  return (
    <>
      <p className="text-stone-700">
        Legg inn pakkene dine. Prisestimatet i listen regnes ut fra billigste og
        dyreste pakke.
      </p>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="grid gap-3 sm:grid-cols-[1.2fr_2fr_1fr]">
          <label className={labelClass}>
            Pakke
            <input
              name={`package-${i}-name`}
              placeholder={EXAMPLES[i]?.name ?? "Navn"}
              className={fieldClass}
            />
          </label>
          <label className={labelClass}>
            Inkluderer
            <input
              name={`package-${i}-includes`}
              placeholder={EXAMPLES[i]?.includes ?? "Timer, antall bilder"}
              className={fieldClass}
            />
          </label>
          <label className={labelClass}>
            Pris fra (kr)
            <input
              name={`package-${i}-price`}
              type="number"
              min={0}
              className={fieldClass}
            />
          </label>
        </div>
      ))}
      {count < MAX_PACKAGES && (
        <button
          type="button"
          onClick={() => setCount(count + 1)}
          className="self-start rounded-lg border border-stone-300 bg-white px-4 py-2.5 font-semibold hover:bg-stone-50"
        >
          + Legg til pakke
        </button>
      )}
    </>
  );
}
