import { fieldClass, labelClass } from "@/components/ui/formStyles";

// Steg: koble egen kalender (iCal-lenke). Samme løsning som for lokalene.
export default function StepCalendar() {
  return (
    <>
      <p className="leading-relaxed text-stone-700">
        Koble kalenderen din, så vises du bare som ledig på datoer du faktisk er
        ledig. Du trenger ikke oppdatere noe hos oss.
      </p>
      <label className={labelClass}>
        Privat kalenderlenke (iCal)
        <input
          name="calendarUrl"
          placeholder="Lim inn lenken fra Google, Outlook eller Apple"
          className={fieldClass}
        />
      </label>
      <details className="text-sm text-stone-700">
        <summary className="cursor-pointer font-medium">
          Hvor finner jeg lenken?
        </summary>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>
            Google: Innstillinger → velg kalender → «Hemmelig adresse i
            iCal-format»
          </li>
          <li>
            Outlook: Innstillinger → Kalender → Delte kalendere → Publiser
          </li>
          <li>Apple: Kalender i iCloud → Del → Offentlig kalender</li>
        </ul>
      </details>
      <p className="text-sm text-stone-500">
        Vi lagrer bare når du er opptatt, aldri hva som står i avtalene. Du kan
        også hoppe over dette og koble kalenderen senere.
      </p>
    </>
  );
}
