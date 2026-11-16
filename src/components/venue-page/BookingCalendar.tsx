"use client";

// Månedskalender for å velge dag for befaring.
// Opptatte dager kommer fra eier (nå: eksempeldata, senere: eiers kalender).
import { useState } from "react";
import { WEEKDAYS, monthGrid, monthLabel, todayIso } from "@/lib/dates";

type Props = {
  unavailable: string[];
  selected: string | null;
  onSelect: (date: string) => void;
};

export default function BookingCalendar({
  unavailable,
  selected,
  onSelect,
}: Props) {
  const now = new Date();
  const [view, setView] = useState({
    year: now.getFullYear(),
    month: now.getMonth(),
  });
  const today = todayIso();

  function shift(delta: number) {
    const d = new Date(view.year, view.month + delta, 1);
    setView({ year: d.getFullYear(), month: d.getMonth() });
  }

  const isCurrentMonth =
    view.year === now.getFullYear() && view.month === now.getMonth();

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <button
          type="button"
          onClick={() => shift(-1)}
          disabled={isCurrentMonth}
          aria-label="Forrige måned"
          className="px-2 text-lg disabled:opacity-30"
        >
          ‹
        </button>
        <span className="font-medium capitalize">
          {monthLabel(view.year, view.month)}
        </span>
        <button
          type="button"
          onClick={() => shift(1)}
          aria-label="Neste måned"
          className="px-2 text-lg"
        >
          ›
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs text-stone-500">
        {WEEKDAYS.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1">
        {monthGrid(view.year, view.month).map((iso, i) =>
          iso ? (
            <DayButton
              key={iso}
              iso={iso}
              disabled={iso < today || unavailable.includes(iso)}
              booked={unavailable.includes(iso)}
              selected={iso === selected}
              onSelect={onSelect}
            />
          ) : (
            <span key={`blank-${i}`} />
          ),
        )}
      </div>

      <p className="mt-2 text-xs text-stone-500">
        <span className="line-through">Gjennomstreket</span> = ikke ledig
      </p>
    </div>
  );
}

function DayButton({
  iso,
  disabled,
  booked,
  selected,
  onSelect,
}: {
  iso: string;
  disabled: boolean;
  booked: boolean;
  selected: boolean;
  onSelect: (d: string) => void;
}) {
  const base = "aspect-square rounded-lg text-sm";
  const style = selected
    ? "bg-navy-900 font-semibold text-white"
    : disabled
      ? `text-stone-300 ${booked ? "line-through" : ""}`
      : "hover:bg-gold-100";

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onSelect(iso)}
      className={`${base} ${style}`}
    >
      {Number(iso.slice(8))}
    </button>
  );
}
