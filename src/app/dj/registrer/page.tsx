import DjAboutStep from "@/components/dj/DjAboutStep";
import SignupWizard from "@/components/signup/SignupWizard";
import StepAccount from "@/components/signup/StepAccount";
import StepCalendar from "@/components/signup/StepCalendar";
import StepMedia from "@/components/signup/StepMedia";
import StepPreview from "@/components/signup/StepPreview";

export const metadata = { title: "Legg til din DJ-profil – NordicOccasions" };

// «Legg til din profil i DJ-listen». Innsending lagres når Supabase er koblet på.
export default function DjSignupPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <SignupWizard
        doneText="Vi går gjennom profilen og gir beskjed på e-post når den er publisert."
        steps={[
          {
            title: "Opprett bruker",
            intro: "Lag en gratis bruker for å legge til DJ-profilen din.",
            content: <StepAccount />,
          },
          {
            title: "Om deg som DJ",
            intro: "Dette er det kundene ser først. Du kan endre alt senere.",
            content: <DjAboutStep />,
          },
          {
            title: "Bilder og video",
            intro:
              "Vis frem stemningen fra gigs du har spilt. Profiler med video får flest forespørsler.",
            content: (
              <StepMedia
                maxImages={10}
                maxVideos={3}
                videoHint="Last opp video (maks 1 minutt)"
              />
            ),
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
            content: <StepPreview listName="DJ-listen" />,
          },
        ]}
      />
    </div>
  );
}
