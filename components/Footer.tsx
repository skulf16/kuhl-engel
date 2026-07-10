import Link from "next/link";
import { CONTACT, STANDORTE } from "@/lib/data";

const FOOTER_JOBCOACHING = [
  { href: "/jobcoaching", label: "Jobcoaching – Überblick" },
  { href: "/avgs-coaching", label: "AVGS Coaching & Gutschein" },
  { href: "/jobcoaching-berlin", label: "Jobcoaching Berlin" },
  { href: "/jobcoaching-potsdam", label: "Jobcoaching Potsdam" },
];

const FOOTER_JUGEND = [
  { href: "/berufsorientierung", label: "Berufsorientierung" },
  { href: "/berufsorientierung/einzelcoaching", label: "Einzelcoaching" },
  { href: "/berufsorientierung/gruppenangebote", label: "Gruppenangebote" },
  { href: "/berufsorientierung/berufsstart", label: "Für den Berufsstart" },
];

export default function Footer() {
  return (
    <footer className="on-dark bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] lg:grid-cols-[1.6fr_1fr_1fr_1.1fr]">
          {/* Marke */}
          <div>
            <p className="display text-3xl">
              kuhl<em className="mx-0.5">&</em>engel
            </p>
            <p className="mt-4 max-w-xs text-[0.92rem] leading-relaxed text-cream/60">
              AVGS-zertifiziertes Jobcoaching und Berufsorientierung für
              Jugendliche. In Berlin, Potsdam, Augsburg und online.
            </p>
            <p className="display mt-6 text-lg italic text-gold-bright">
              Jetzt, nicht irgendwann.
            </p>
          </div>

          {/* Jobcoaching */}
          <nav aria-label="Jobcoaching">
            <p className="eyebrow mb-5 text-gold-bright">Jobcoaching</p>
            <ul className="space-y-2.5 text-[0.92rem]">
              {FOOTER_JOBCOACHING.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-gold text-cream/75 hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Berufsorientierung */}
          <nav aria-label="Berufsorientierung">
            <p className="eyebrow mb-5 text-gold-bright">Berufsorientierung</p>
            <ul className="space-y-2.5 text-[0.92rem]">
              {FOOTER_JUGEND.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-gold text-cream/75 hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li><Link href="/ueber-uns" className="link-gold text-cream/75 hover:text-cream">Über uns & Team</Link></li>
            </ul>
          </nav>

          {/* Kontakt */}
          <div>
            <p className="eyebrow mb-5 text-gold-bright">Kontakt</p>
            <ul className="space-y-2.5 text-[0.92rem] text-cream/75">
              <li>
                <a href={CONTACT.phoneHref} className="link-gold hover:text-cream">{CONTACT.phone}</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="link-gold hover:text-cream">{CONTACT.email}</a>
              </li>
            </ul>
            <ul className="mt-5 space-y-1.5 text-[0.85rem] leading-relaxed text-cream/50">
              {STANDORTE.map((s) => (
                <li key={s.city}>
                  {s.href ? (
                    <Link href={s.href} className="link-gold hover:text-cream">
                      Jobcoaching {s.city}
                    </Link>
                  ) : (
                    <span>{s.city === "Online" ? "Online & hybrid" : s.city}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-6 text-[0.82rem] text-cream/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Kuhl & Engel GbR – Jobcoaching, Berlin</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="link-gold hover:text-cream">Impressum</Link>
            <Link href="/datenschutz" className="link-gold hover:text-cream">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
