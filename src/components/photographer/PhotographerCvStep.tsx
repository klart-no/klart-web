// Steg 4 for fotografer: CV og kompetanse. Lister skrives én per linje.
import { fieldClass, labelClass } from "@/components/ui/formStyles";

const LISTS = [
  {
    name: "education",
    label: "Utdanning og kurs",
    hint: "Én per linje: skole eller kurs, år",
  },
  {
    name: "awards",
    label: "Priser og utmerkelser",
    hint: "Én per linje: pris eller konkurranse, år",
  },
  {
    name: "published",
    label: "Publisert i",
    hint: "Magasiner, blogger eller nettsider – med lenke hvis mulig",
  },
];

export default function PhotographerCvStep() {
  return (
    <>
      <div className="grid gap-3 sm:grid-cols-3">
        <label className={labelClass}>
          År med erfaring
          <input
            name="yearsExperience"
            type="number"
            min={0}
            placeholder="9"
            className={fieldClass}
          />
        </label>
        <label className={labelClass}>
          Bryllup fotografert
          <input
            name="weddingsShot"
            type="number"
            min={0}
            placeholder="180"
            className={fieldClass}
          />
        </label>
        <label className={labelClass}>
          Leveringstid
          <input
            name="deliveryTime"
            placeholder="4–6 uker"
            className={fieldClass}
          />
        </label>
      </div>
      {LISTS.map((l) => (
        <label key={l.name} className={labelClass}>
          {l.label}
          <textarea
            name={l.name}
            rows={2}
            placeholder={l.hint}
            className={fieldClass}
          />
        </label>
      ))}
      <label className={labelClass}>
        Medlemskap og sertifisering
        <input
          name="memberships"
          placeholder="Fotografforbund, mesterbrev, nettverk"
          className={fieldClass}
        />
      </label>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className={labelClass}>
          Instagram
          <input
            name="instagram"
            placeholder="@dittnavn"
            className={fieldClass}
          />
        </label>
        <label className={labelClass}>
          Nettside
          <input
            name="website"
            type="url"
            placeholder="https://"
            className={fieldClass}
          />
        </label>
        <label className={labelClass}>
          Utstyr
          <input
            name="equipment"
            placeholder="Kamera, backup, drone"
            className={fieldClass}
          />
        </label>
        <label className={labelClass}>
          Ekstra fotograf
          <select name="secondShooter" className={fieldClass}>
            <option value="ja">Ja, ved behov</option>
            <option value="nei">Nei</option>
          </select>
        </label>
      </div>
    </>
  );
}
