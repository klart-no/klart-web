"use client";

// "Kontakt eier for befaring": velg dag i kalenderen, fyll inn kontaktinfo, send.
import { useState } from "react";
import { formatDate } from "@/lib/format";
import BookingCalendar from "./BookingCalendar";
import BefaringSent from "./BefaringSent";

type Props = {
  venueSlug: string;
  venueName: string;
  unavailable: string[];
  eventDate?: string;
};

const input = "w-full rounded-lg border border-stone-300 px-3 py-2";

export default function BefaringForm({
  venueSlug,
  venueName,
  unavailable,
  eventDate,
}: Props) {
  const [viewingDate, setViewingDate] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const fields = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/befaring", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...fields, venueSlug, viewingDate }),
    });
    if (res.ok) return setStatus("sent");
    const body = await res.json().catch(() => ({}));
    setError(body.error ?? "Noe gikk galt. Prøv igjen.");
    setStatus("idle");
  }

  if (status === "sent") return <BefaringSent venueName={venueName} />;

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl bg-white p-6 shadow-sm"
    >
      <h2 className="text-xl font-semibold">Kontakt eier for befaring</h2>

      <div>
        <p className="mb-2 text-sm font-medium text-stone-600">
          1. Velg dag for befaring
        </p>
        <BookingCalendar
          unavailable={unavailable}
          selected={viewingDate}
          onSelect={setViewingDate}
        />
        {viewingDate && (
          <p className="mt-2 text-sm">
            Valgt: <strong>{formatDate(viewingDate)}</strong>
          </p>
        )}
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-stone-600">
          2. Dine opplysninger
        </p>
        <input name="name" required placeholder="Navn" className={input} />
        <input
          name="email"
          type="email"
          required
          placeholder="E-post"
          className={input}
        />
        <input name="phone" placeholder="Telefon" className={input} />
        <label className="block text-sm text-stone-600">
          Dato for arrangementet
          <input
            name="eventDate"
            type="date"
            defaultValue={eventDate}
            className={input}
          />
        </label>
        <input
          name="guests"
          type="number"
          min={1}
          placeholder="Antall gjester"
          className={input}
        />
        <textarea
          name="message"
          rows={3}
          placeholder="Fortell litt om arrangementet"
          className={input}
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        disabled={!viewingDate || status === "sending"}
        className="w-full rounded-lg bg-rose-500 py-3 font-semibold text-white hover:bg-rose-600 disabled:opacity-40"
      >
        {status === "sending"
          ? "Sender…"
          : viewingDate
            ? "Send forespørsel"
            : "Velg dag for befaring først"}
      </button>
    </form>
  );
}
