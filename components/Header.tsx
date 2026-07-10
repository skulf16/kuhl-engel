"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/data";

const JOBCOACHING_LINKS = [
  { href: "/jobcoaching", label: "Jobcoaching – Überblick" },
  { href: "/avgs-coaching", label: "AVGS Coaching & Gutschein" },
  { href: "/jobcoaching-berlin", label: "Jobcoaching Berlin" },
  { href: "/jobcoaching-potsdam", label: "Jobcoaching Potsdam" },
];

const JUGEND_LINKS = [
  { href: "/berufsorientierung", label: "Berufsorientierung – Überblick" },
  { href: "/berufsorientierung/einzelcoaching", label: "Einzelcoaching" },
  { href: "/berufsorientierung/gruppenangebote", label: "Gruppenangebote" },
  { href: "/berufsorientierung/berufsstart", label: "Für den Berufsstart" },
];

const UEBER_LINKS = [
  { href: "/ueber-uns", label: "Über uns & Team" },
  { href: "/ueber-uns#standorte", label: "Standorte" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${solid ? "text-ink" : "text-cream"}`}
    >
      {/* Hintergrund der Leiste – getrennt vom Header, damit backdrop-filter
          nicht zum Containing Block des fixed Mobile-Overlays wird */}
      <div
        aria-hidden
        className={`absolute inset-0 transition-all duration-500 ${
          solid
            ? "bg-cream/90 shadow-[0_1px_0_0_rgba(14,29,43,0.08)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      />
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        {/* Wortmarke */}
        <Link href="/" className="group flex items-baseline gap-0.5" aria-label="Kuhl & Engel – Startseite">
          <span className="display text-[1.35rem] leading-none md:text-2xl">
            kuhl<em className="mx-0.5 transition-colors group-hover:text-gold-bright">&</em>engel
          </span>
          <span className={`eyebrow mb-0.5 ml-2 hidden !text-[0.55rem] lg:inline ${solid ? "text-ink/50" : "text-cream/60"}`}>
            Jobcoaching
          </span>
        </Link>

        {/* Desktop-Navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          <NavDropdown label="Jobcoaching" items={JOBCOACHING_LINKS} />
          <NavDropdown label="Berufsorientierung" items={JUGEND_LINKS} />
          <NavDropdown label="Über uns" items={UEBER_LINKS} />
          <Link href="/kontakt" className="link-gold text-[0.92rem] font-medium">
            Kontakt
          </Link>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a href={CONTACT.phoneHref} className={`text-[0.88rem] font-medium tracking-wide transition-colors ${solid ? "text-ink/70 hover:text-ink" : "text-cream/80 hover:text-cream"}`}>
            {CONTACT.phone}
          </a>
          <Link
            href="/kontakt"
            className={`px-5 py-2.5 text-[0.85rem] font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${
              solid
                ? "bg-ink text-cream hover:bg-ink-700"
                : "bg-cream text-ink hover:bg-gold-bright"
            }`}
          >
            Erstgespräch buchen
          </Link>
        </div>

        {/* Mobile-Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
        >
          <span className={`h-px w-6 bg-current transition-all duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-current transition-all duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile-Overlay */}
      <div
        className={`fixed inset-0 top-16 z-40 overflow-y-auto bg-cream text-ink transition-all duration-400 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-8" aria-label="Mobile Navigation">
          <p className="eyebrow mb-3 text-gold">Jobcoaching</p>
          {JOBCOACHING_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="display border-b border-ink/10 py-3 text-[1.2rem]"
            >
              {item.label}
            </Link>
          ))}
          <p className="eyebrow mb-3 mt-7 text-gold">Berufsorientierung</p>
          {JUGEND_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="display border-b border-ink/10 py-3 text-[1.2rem]"
            >
              {item.label}
            </Link>
          ))}
          <p className="eyebrow mb-3 mt-7 text-gold">Über uns</p>
          {UEBER_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="display border-b border-ink/10 py-3 text-[1.2rem]"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/kontakt" className="display border-b border-ink/10 py-3 text-[1.2rem]">
            Kontakt
          </Link>
          <div className="mt-8 flex flex-col gap-4">
            <Link href="/kontakt" className="bg-ink px-6 py-4 text-center font-semibold text-cream">
              Erstgespräch buchen
            </Link>
            <a href={CONTACT.phoneHref} className="text-center font-medium text-ink/70">
              {CONTACT.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div className="group relative">
      <button className="link-gold flex items-center gap-1.5 text-[0.92rem] font-medium" aria-haspopup="true">
        {label}
        <svg width="9" height="6" viewBox="0 0 10 6" fill="none" className="transition-transform duration-300 group-hover:rotate-180">
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="w-72 border border-ink/8 bg-paper p-2 text-ink shadow-[0_24px_60px_-20px_rgba(14,29,43,0.35)]">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between px-4 py-3 text-[0.9rem] font-medium transition-colors hover:bg-cream hover:text-gold"
            >
              {item.label}
              <span aria-hidden className="text-gold">→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
