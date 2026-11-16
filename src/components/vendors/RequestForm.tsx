"use client";

// «Send forespørsel» til en DJ eller fotograf: velg dato, fyll inn, send.
// Gjenbruker kalenderen fra lokalsiden – opptatte dager kommer fra leverandørens kalender.
import { useState } from "react";
import BookingCalendar from "@/components/venue-page/BookingCalendar";
import { formatDate } from "@/lib/format";

type Props = {
  vendorType: "dj" | "fotograf";
  vendorSlug: string;
  vendorName: string;
  unavailable: string[];
  initialDate?: string;
  packages?: string[]; // fotografer: «Ønsket pakke»
  messageHint?: string;
};

const input = "w-full rounded-lg border border-stone-300 px-3 py-2";

export default function RequestForm(props: Props) {
  const [date, setDate] = useState<string | null>(props.initialDate ?? null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const fields = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/foresporsel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...fields,
        vendorType: props.vendorType,
        vendorSlug: props.vendorSlug,
        eventDate: date,
      }),
    });
    if (res.ok) return setStatus("sent");
    const body = await res.json().catch(() => ({}));
    setError(body.error ?? "Noe gikk galt. Prøv igjen.");
    setStatus("idle");
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Takk! Forespørselen er sendt</h2>
        <p className="mt-2 text-stone-600">
          {props.vendorName} svarer deg direkte på e-post.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl bg-white p-6 shadow-sm"
    >
      <h2 className="text-xl font-semibold">Send forespørsel</h2>
      <div>
        <p className="mb-2 text-sm font-medium text-stone-600">
          1. Velg dato for arrangementet
        </p>
        <BookingCalendar
          unavailable={props.unavailable}
          selected={date}
          onSelect={setDate}
        />
        {date && (
          <p className="mt-2 text-sm">
            Valgt: <strong>{formatDate(date)}</strong>
          </p>
        )}
      </div>
      <div className="space-y-3">
        <p className="text-sm font-medium text-stone-600">
          2. Om arrangementet
        </p>
        <select name="eventType" className={input} defaultValue="Bryllup">
          <option>Bryllup</option>
          <option>Bursdag</option>
          <option>Firmafest</option>
          <option>Annet</option>
        </select>
        {props.packages && (
          <select name="package" className={input} defaultValue="">
            <option value="">Ønsket pakke (valgfritt)</option>
            {props.packages.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        )}
        <input name="name" required placeholder="Navn" className={input} />
        <input
          name="email"
          type="email"
          required
          placeholder="E-post"
          className={input}
        />
        <textarea
          name="message"
          rows={3}
          placeholder={
            props.messageHint ?? "Sted, antall gjester, ønsket musikk"
          }
          className={input}
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        disabled={!date || status === "sending"}
        className="w-full rounded-lg bg-rose-500 py-3 font-semibold text-white hover:bg-rose-600 disabled:opacity-40"
      >
        {status === "sending"
          ? "Sender…"
          : date
            ? "Send forespørsel"
            : "Velg en dato først"}
      </button>
      <p className="text-center text-xs text-stone-500">
        Gratis og uforpliktende.
      </p>
    </form>
  );
}
