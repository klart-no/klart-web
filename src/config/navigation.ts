// Menyen på siden. Legg til / fjern kategorier her – menyen og forsiden oppdateres automatisk.

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  wip?: boolean; // vises som "Kommer"
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  {
    label: "Selskapslokaler",
    href: "/selskapslokaler",
    description: "Finn lokalet til bryllup, bursdag og fest",
  },
  {
    label: "DJ",
    href: "/dj",
    description: "Musikk og stemning hele kvelden",
  },
  {
    label: "Fotograf",
    href: "/fotograf",
    description: "Fang øyeblikkene",
  },
  {
    label: "Leie av annet utstyr",
    href: "/utstyr",
    description: "Fotoboks, bryllupsbil og mer",
    children: [
      { label: "Fotoboks", href: "/utstyr/fotoboks" },
      { label: "Fotovegg og rekvisitter", href: "/utstyr/fotovegg" },
      { label: "Bryllupsbil", href: "/utstyr/bryllupsbil" },
      { label: "Annet utstyr", href: "/utstyr/annet" },
    ],
  },
  {
    label: "Bestilling av bryllupskort",
    href: "/bryllupskort",
    description: "Invitasjoner, menykort og bordkort",
  },
];
