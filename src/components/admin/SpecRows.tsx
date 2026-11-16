"use client";

// Spesifikasjoner som frie rader (navn + verdi) som kan legges til og fjernes.
import { useState } from "react";
import { fieldClass } from "@/components/ui/formStyles";
import type { Spec } from "@/types/rental";

export default function SpecRows({ initial }: { initial: Spec[] }) {
  const [rows, setRows] = useState(
    initial.map((spec, i) => ({ ...spec, key: i })),
  );
  const [nextKey, setNextKey] = useState(initial.length);

  function addRow() {
    setRows([...rows, { label: "", value: "", key: nextKey }]);
    setNextKey(nextKey + 1);
  }

  return (
    <div className="space-y-2">
      {rows.map((row) => (
        <div key={row.key} className="grid grid-cols-[1fr_2fr_44px] gap-2">
          <input
            name="specLabel"
            aria-label="Navn på spesifikasjon"
            defaultValue={row.label}
            placeholder="F.eks. Kamera"
            className={fieldClass}
          />
          <input
            name="specValue"
            aria-label="Verdi"
            defaultValue={row.value}
            placeholder="F.eks. Speilrefleks, 24 MP"
            className={fieldClass}
          />
          <button
            type="button"
            aria-label="Fjern rad"
            onClick={() => setRows(rows.filter((r) => r.key !== row.key))}
            className="rounded-lg bg-stone-100 text-lg hover:bg-stone-200"
          >
            ×
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addRow}
        className="rounded-lg border border-stone-300 bg-white px-4 py-2.5 font-semibold hover:bg-stone-50"
      >
        + Legg til rad
      </button>
    </div>
  );
}
