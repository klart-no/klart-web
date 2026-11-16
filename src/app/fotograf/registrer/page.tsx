import PackagesStep from "@/components/photographer/PackagesStep";
import PhotographerAboutStep from "@/components/photographer/PhotographerAboutStep";
import PhotographerCvStep from "@/components/photographer/PhotographerCvStep";
import PortfolioStep from "@/components/photographer/PortfolioStep";
import SignupWizard from "@/components/signup/SignupWizard";
import StepAccount from "@/components/signup/StepAccount";
import StepCalendar from "@/components/signup/StepCalendar";
import StepPreview from "@/components/signup/StepPreview";

export const metadata = {
  title: "Legg til din fotografprofil – NordicOccasions",
};

// «Legg til din profil i fotograf-listen». Innsending lagres når Supabase er koblet på.
export default function PhotographerSignupPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <SignupWizard
        doneText="Vi går gjennom porteføljen og CV-en og gir beskjed på e-post når profilen er publisert."
        steps={[
          {
            title: "Opprett bruker",
            intro: "Lag en gratis bruker for å legge til fotografprofilen din.",
            content: <StepAccount rightsNotice />,
          },
          {
            title: "Om deg og stilen din",
            intro:
              "Kort om hvem du er. Kundene ser porteføljen først, så hold det kort.",
            content: <PhotographerAboutStep />,
          },
          {
            title: "Portefølje",
            intro:
              "Bilder og film er det kundene velger ut fra. Vis ditt beste arbeid.",
            content: <PortfolioStep />,
          },
          {
            title: "CV og kompetanse",
            intro:
              "Erfaring, utdanning og utmerkelser gjør at kundene stoler på deg.",
            content: <PhotographerCvStep />,
          },
          {
            title: "Pakker og priser",
            intro:
              "Gjør det enkelt å sammenligne: hva får paret, og hva koster det?",
            content: <PackagesStep />,
          },
          {
            title: "Koble kalenderen din",
            intro:
              "Valgfritt, men anbefalt: da får du bare forespørsler på dager du er ledig.",
            content: <StepCalendar />,
          },
          {
            title: "Send inn",
            intro: "Sjekk at alt ser riktig ut før du sender inn.",
            content: <StepPreview listName="fotograf-listen" />,
          },
        ]}
      />
    </div>
  );
}
