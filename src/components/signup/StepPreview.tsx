// Siste steg: hva som skjer når profilen sendes inn.
export default function StepPreview({ listName }: { listName: string }) {
  return (
    <>
      <p className="leading-relaxed text-stone-700">
        Når du sender inn, går vi gjennom profilen før den publiseres i{" "}
        {listName}, vanligvis innen 24 timer. Du får e-post når den er ute.
      </p>
      <p className="rounded-lg bg-stone-50 p-3 text-sm text-stone-600">
        Gratis de første 6 månedene. Deretter [PRIS] kr i måneden – du kan
        avslutte når som helst.
      </p>
    </>
  );
}
