# NordicOccasions

Norsk plattform for selskapslokaler, DJ, fotograf, utstyr og bryllupskort. Book befaring direkte med eieren.

## Kjør lokalt

Krever [Node.js](https://nodejs.org) (LTS).

```bash
npm install
npm run dev
```

Åpne http://localhost:3000

## Hvor ligger hva?

| Mappe / fil | Innhold |
|---|---|
| `src/config/navigation.ts` | Menyen og kategoriene (endre her → meny og forside oppdateres) |
| `src/types/venue.ts` | Hvordan et lokale ser ut (felter) |
| `src/data/` | Eksempeldata: lokaler, regioner, plassholdere |
| `src/lib/` | Logikk: søk, datoer, formatering, validering |
| `src/app/` | Sidene (tynne – setter sammen komponenter) |
| `src/components/layout/` | Topp, meny, bunn |
| `src/components/home/` | Forsiden |
| `src/components/venues/` | Søk og resultatliste (inkl. bildebytte ved hover) |
| `src/components/venue-page/` | Siden for ett lokale: bilder, detaljer, anmeldelser, utleier, kalender, skjema |
| `src/components/ui/` | Små felles byggeklosser |

## Sider

- `/` – forside
- `/selskapslokaler` – søk på region, dato og gjester
- `/selskapslokaler/[navn]` – lokale med befaringskalender
- `/dj`, `/fotograf`, `/utstyr/*`, `/bryllupskort` – «Kommer snart»

## Legge til et lokale

Kopier et lokale i `src/data/venues.ts` og gi det en unik `slug`. Opptatte datoer legges i `bookedDates`.

## Neste steg

1. Supabase: lagre lokaler og befaringsforespørsler
2. E-post til eier ved ny forespørsel
3. Eiers kalender (iCal-lenke fra Google/Outlook) → opptatte dager automatisk
4. Innlogging for eiere
