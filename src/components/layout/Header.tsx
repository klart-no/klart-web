import Image from "next/image";
import Link from "next/link";
import MainMenu from "./MainMenu";

// Toppfeltet: går fra logoens mørke marineblå til en litt lysere tone mot høyre.
export default function Header() {
  return (
    <header className="border-b border-gold-500/30 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800">
      <div className="mx-auto flex max-w-6xl items-center gap-5 px-4 py-2">
        <MainMenu />
        <Link href="/" aria-label="Nordic Occasions – til forsiden">
          <Image
            src="/logo.png"
            alt="Nordic Occasions"
            width={400}
            height={243}
            priority
            className="logo-blend h-16 w-auto"
          />
        </Link>
      </div>
    </header>
  );
}
