import Link from "next/link";
import MainMenu from "./MainMenu";

export default function Header() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-4">
        <MainMenu />
        <Link href="/" className="text-xl font-bold tracking-tight">
          Nordic<span className="text-rose-500">Occasions</span>
        </Link>
      </div>
    </header>
  );
}
