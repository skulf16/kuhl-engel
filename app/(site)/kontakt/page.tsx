import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import {
  KEY as KONTAKT_KEY,
  DEFAULTS as KONTAKT_DEFAULTS,
} from "@/lib/cms/pages/seite-kontakt";
import { loadPage, getKontakt, getStandorte } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Kontakt & Standorte",
  description:
    "Kontaktiere Kuhl & Engel: Rückruf-Service, Telefon 030 51565388-0 oder info@kuhlundengel.de. Coaching online sowie in Berlin, Potsdam und Augsburg.",
  path: "/kontakt",
});

export default async function KontaktPage() {
  const [c, kontakt, standorte] = await Promise.all([
    loadPage(KONTAKT_KEY, KONTAKT_DEFAULTS),
    getKontakt(),
    getStandorte(),
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Kontakt & Standorte", path: "/kontakt" }])} />
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={
          <>
            {c.hero.headline} <em>{c.hero.headlineEm}</em>
          </>
        }
        intro={c.hero.intro}
      />

      {/* Kontakt + Formular */}
      <section id="rueckruf" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
                {c.direkt.eyebrow}
              </p>
              <h2 className="display mt-6 text-4xl">
                {c.direkt.headline} <em>{c.direkt.headlineEm}</em>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <dl className="mt-10 space-y-8">
                <div>
                  <dt className="eyebrow text-ink/45">{c.direkt.labelTelefon}</dt>
                  <dd className="mt-2">
                    <a href={kontakt.phoneHref} className="display link-gold text-2xl hover:text-gold md:text-3xl">
                      {kontakt.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-ink/45">{c.direkt.labelEmail}</dt>
                  <dd className="mt-2">
                    <a href={`mailto:${kontakt.email}`} className="display link-gold text-2xl hover:text-gold md:text-3xl">
                      {kontakt.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-ink/45">{c.direkt.labelAnsprech}</dt>
                  <dd className="mt-2 leading-relaxed text-ink/70">
                    {c.direkt.ansprechpartnerinnen}
                    <br />
                    <span className="text-[0.9rem] text-ink/55">
                      {c.direkt.organisation}
                    </span>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="border border-ink/10 bg-cream-deep p-8 md:p-12">
              <h3 className="display text-3xl">
                {c.rueckruf.headline} <em>{c.rueckruf.headlineEm}</em>
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/65">
                {c.rueckruf.text}
              </p>
              <div className="mt-8">
                <ContactForm kontakt={kontakt} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Standorte */}
      <section className="bg-cream-deep py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span aria-hidden className="inline-block h-px w-10 bg-gold" />
              {c.standorte.eyebrow}
            </p>
            <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
              {c.standorte.headline} <em>{c.standorte.headlineEm}</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {standorte.map((standort, i) => (
              <Reveal key={standort.city} delay={i * 100} className="h-full">
                <div className="group flex h-full flex-col border border-ink/10 bg-paper p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_56px_-28px_rgba(14,29,43,0.3)]">
                  <p className="display text-sm italic text-gold">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="display mt-4 text-2xl transition-colors group-hover:text-gold">
                    {standort.city}
                  </h3>
                  <p className="eyebrow mt-1.5 !text-[0.58rem] text-ink/45">{standort.label}</p>
                  <p className="mt-5 grow leading-relaxed text-ink/70">
                    {standort.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  {standort.href && (
                    <Link
                      href={standort.href}
                      className="link-gold mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold"
                    >
                      {c.standorte.linkLabel} <span aria-hidden>→</span>
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <p className="mt-10 text-[0.95rem] text-ink/60">
              {c.standorte.hybridNote}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
