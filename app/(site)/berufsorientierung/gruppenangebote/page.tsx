import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import FactBox from "@/components/FactBox";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { KEY, DEFAULTS } from "@/lib/cms/pages/seite-bo-gruppenangebote";
import { getKontakt, loadPage } from "@/lib/content";

const FOERDERLOGOS = [
  {
    src: "/images/logo-praxisbo.jpg",
    alt: "PraxisBO – Praxisnahe Berufsorientierung",
    width: 98,
  },
  {
    src: "/images/logo-spi.png",
    alt: "Stiftung SPI, Niederlassung Brandenburg – Praxis BO, Regionalpartner Süd-Ost",
    width: 109,
  },
  {
    src: "/images/logo-foerderung.jpg",
    alt: "Kofinanziert von der Europäischen Union · Land Brandenburg · Bundesagentur für Arbeit",
    width: 171,
  },
  {
    src: "/images/logo-kobra-net.jpg",
    alt: "kobra.net – Beratung. Bildung. Brandenburg",
    width: 100,
  },
];

export const metadata: Metadata = {
  title: "Schulklassen – Berufsorientierung für Schulen (PraxisBO)",
  description:
    "Coaching-Seminar „Mein Berufseinstieg“ für Schulklassen in Berlin und Brandenburg: 2–2,5 Tage, professionelle Coaches, jugendgerechte Methoden. Über PraxisBO für Schulen förderfähig.",
  alternates: { canonical: "/berufsorientierung/gruppenangebote" },
};

export default async function GruppenangebotePage() {
  const [c, kontakt] = await Promise.all([loadPage(KEY, DEFAULTS), getKontakt()]);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Berufsorientierung für Schulklassen",
          description:
            "Coaching-Seminar „Mein Berufseinstieg“ zur Berufsorientierung für Schulklassen in Berlin und Brandenburg. 2 bis 2,5 Tage, mehrere professionelle Coaches, jugendgerechte Methoden. Über das Förderprogramm PraxisBO förderfähig.",
          path: "/berufsorientierung/gruppenangebote",
          serviceType: "Berufsorientierung Gruppenseminar für Schulen",
          areaServed: ["Berlin", "Brandenburg"],
          audience: "Schulen, Schulleitungen und Lehrkräfte",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Berufsorientierung", path: "/berufsorientierung" },
          { name: "Schulklassen", path: "/berufsorientierung/gruppenangebote" },
        ])}
      />

      <PageHero
        eyebrow={c.hero.eyebrow}
        title={
          <>
            {c.hero.headline} <em>{c.hero.headlineEm}</em>
          </>
        }
        intro={c.hero.intro}
        image={c.hero.image}
      />

      {/* Auf einen Blick */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        <Reveal>
          <FactBox
            question={c.aufEinenBlick.question}
            answer={c.aufEinenBlick.answer}
            facts={c.aufEinenBlick.facts}
          />
        </Reveal>
      </section>

      {/* Ablauf */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            {c.ablauf.eyebrow}
          </p>
          <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
            {c.ablauf.headline} <em>{c.ablauf.headlineEm}</em>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-3">
          {c.ablauf.phasen.map((block, i) => (
            <Reveal key={block.phase} delay={i * 120} className="h-full">
              <div className="h-full bg-paper p-8 md:p-9">
                <span className="display text-4xl italic text-gold/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-4 text-2xl">{block.phase}</h3>
                <ul className="mt-5 space-y-3">
                  {block.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[0.92rem] leading-relaxed text-ink/70">
                      <span aria-hidden className="display mt-0.5 italic text-gold">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Förderpartner */}
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
        <Reveal>
          <div className="flex flex-col gap-8 border-y border-ink/10 py-10 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-md text-[0.9rem] leading-relaxed text-ink/60">
              {c.foerderpartner.text}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {FOERDERLOGOS.map((logo) => (
                <div key={logo.src} className="flex h-16 items-center border border-ink/10 bg-white px-4">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={40}
                    className="h-10 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* PraxisBO Förderung */}
      <section className="bg-cream-deep py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
                {c.praxisbo.eyebrow}
              </p>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                {c.praxisbo.headline} <em>{c.praxisbo.headlineEm}</em>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink/70">
                <p>{c.praxisbo.absatz1}</p>
                <p>{c.praxisbo.absatz2}</p>
              </div>
            </Reveal>
            <Reveal delay={250}>
              <a
                href={kontakt.phoneHref}
                className="mt-9 inline-flex items-center gap-2 font-semibold text-gold transition-colors hover:text-ink"
              >
                {c.praxisbo.phoneLinkLabel} {kontakt.phone} <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={c.praxisbo.image}
                alt="Berufsorientierungs-Seminar für eine Schulklasse"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={
          <>
            {c.cta.headline} <em>{c.cta.headlineEm}</em>
          </>
        }
        text={c.cta.text}
        href="/berufsorientierung#kontakt"
        label={c.cta.buttonLabel}
      />

      <div className="bg-cream-deep py-6 text-center">
        <Link href="/berufsorientierung" className="link-gold text-sm font-semibold text-gold">
          {c.zurueck.label}
        </Link>
      </div>
    </>
  );
}
