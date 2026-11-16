"use client";

// Veiviser i flere steg for leverandører som legger inn profil (DJ nå, fotograf senere).
// Alle stegene ligger i siden hele tiden (bare skjult), så det som er fylt inn ikke forsvinner.
import { useState } from "react";
import ProgressBar from "./ProgressBar";

export type WizardStep = {
  title: string;
  intro: string;
  content: React.ReactNode;
};

export default function SignupWizard({
  steps,
  doneText,
}: {
  steps: WizardStep[];
  doneText: string;
}) {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const step = steps[index];
  const isLast = index === steps.length - 1;

  if (done) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold">Takk! Profilen er sendt inn</h1>
        <p className="mt-2 text-stone-600">{doneText}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold text-rose-700">
          Steg {index + 1} av {steps.length}
        </p>
        <h1 className="mt-1 text-3xl font-bold">{step.title}</h1>
        <p className="mt-1 text-stone-600">{step.intro}</p>
      </div>
      <ProgressBar current={index} total={steps.length} />

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        {steps.map((s, i) => (
          <div key={s.title} hidden={i !== index} className="space-y-4">
            {s.content}
          </div>
        ))}
      </div>

      <div className="flex justify-between gap-3">
        <button
          type="button"
          onClick={() => setIndex(index - 1)}
          disabled={index === 0}
          className="rounded-lg border border-stone-300 bg-white px-5 py-3 font-semibold disabled:opacity-40"
        >
          Tilbake
        </button>
        <button
          type="button"
          onClick={() => (isLast ? setDone(true) : setIndex(index + 1))}
          className="rounded-lg bg-rose-600 px-6 py-3 font-semibold text-white hover:bg-rose-700"
        >
          {isLast ? "Send inn profil" : "Neste"}
        </button>
      </div>
    </div>
  );
}
