import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import FactBox from "@/components/FactBox";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { KEY, DEFAULTS } from "@/lib/cms/pages/seite-bo-einzelcoaching";
import { loadPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Einzelcoaching Berufsorientierung für Schüler:innen",
  description:
    "Einzelcoaching zur beruflichen Orientierung für Schüler:innen, Abiturient:innen und junge Erwachsene: 4 Sitzungen à 90 Minuten für 595 €, an allen Standorten oder online. Systemisch, ziel- und lösungsorientiert.",
  alternates: { canonical: "/berufsorientierung/einzelcoaching" },
};

export default async function EinzelcoachingPage() {
  const c = await loadPage(KEY, DEFAULTS);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Einzelcoaching Berufsorientierung für Jugendliche",
          description:
            "Individuelles Coaching zur beruflichen Orientierung für Schüler:innen, Abiturient:innen und junge Erwachsene. Vier Sitzungen à 90 Minuten für 595 Euro, vor Ort oder online.",
          path: "/berufsorientierung/einzelcoaching",
          serviceType: "Einzelcoaching Berufsorientierung",
          areaServed: ["online", "Berlin", "Potsdam", "Augsburg"],
          audience: "Eltern, Lehrkräfte und junge Menschen vor der Berufswahl",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Berufsorientierung", path: "/berufsorientierung" },
          { name: "Einzelcoaching", path: "/berufsorientierung/einzelcoaching" },
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

      {/* Inhalt */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
                {c.inhalt.eyebrow}
              </p>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                {c.inhalt.headline} <em>{c.inhalt.headlineEm}</em>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
                {c.inhalt.text}
              </p>
              <ul className="mt-8 space-y-3.5">
                {c.inhalt.bullets.map((punkt) => (
                  <li key={punkt} className="flex items-start gap-3.5 leading-relaxed text-ink/75">
                    <span aria-hidden className="display mt-0.5 italic text-gold">✓</span>
                    {punkt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={c.inhalt.image}
                  alt="Einzelcoaching zur Berufsorientierung"
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 bg-ink px-7 py-5 text-cream md:-left-8">
                <p className="display text-2xl italic text-gold-bright">{c.inhalt.price}</p>
                <p className="mt-1 text-[0.8rem] text-cream/70">{c.inhalt.priceNote}</p>
              </div>
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
