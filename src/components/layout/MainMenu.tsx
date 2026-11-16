"use client";

// Menyknappen øverst til venstre. Innholdet styres fra src/config/navigation.ts.
import Link from "next/link";
import { useState } from "react";
import { navigation, type NavItem } from "@/config/navigation";
import WipBadge from "@/components/ui/WipBadge";

export default function MainMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Åpne meny"
        className="flex items-center gap-2 rounded-full border border-gold-400/60 px-4 py-2 text-sm font-medium text-gold-100 hover:bg-white/10"
      >
        <span className="text-lg leading-none">☰</span> Meny
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <nav className="h-full w-80 max-w-[85vw] overflow-y-auto bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-lg font-semibold">
                Hva vil du bestille?
              </span>
              <button
                onClick={close}
                aria-label="Lukk meny"
                className="text-2xl"
              >
                ×
              </button>
            </div>
            <ul className="space-y-1">
              {navigation.map((item) => (
                <MenuItem key={item.href} item={item} onNavigate={close} />
              ))}
            </ul>
          </nav>
          <button
            aria-label="Lukk meny"
            onClick={close}
            className="flex-1 bg-black/30"
          />
        </div>
      )}
    </>
  );
}

function MenuItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={onNavigate}
          className="block rounded-lg px-3 py-3 hover:bg-stone-100"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left hover:bg-stone-100"
      >
        {item.label}
        <span className={`transition ${expanded ? "rotate-180" : ""}`}>▾</span>
      </button>
      {expanded && (
        <ul className="ml-3 border-l border-stone-200 pl-3">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onNavigate}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-stone-700 hover:bg-stone-100"
              >
                {child.label}
                {child.wip && <WipBadge />}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
