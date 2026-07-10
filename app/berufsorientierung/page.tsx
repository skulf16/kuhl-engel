import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import FactBox from "@/components/FactBox";
import JsonLd from "@/components/JsonLd";
import { CONTACT, JUGEND_ANGEBOTE } from "@/lib/data";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Berufsorientierung für Jugendliche – Mein Berufseinstieg",
  description:
    "Berufsorientierung für Jugendliche bei Kuhl & Engel: Einzelcoaching für Schüler:innen, Gruppenprojekte für Schulen und hilfreiche Infos für den Berufsstart. Seit über 10 Jahren, in Berlin & Brandenburg.",
  alternates: { canonical: "/berufsorientierung" },
};

const NUTZEN = [
  "Du lernst Deine Stärken und Interessen kennen",
  "Du beschäftigst Dich mit Deinen Werten und Prioritäten",
  "Du entwickelst ein Mission Statement, das Dich motiviert",
  "Du bekommst eine klare Vorstellung von Deiner Richtung",
  "Du kannst Dich selbst besser einschätzen",
  "Du lernst, eigene Ziele zu entwerfen und zu planen",
];

export default function BerufsorientierungPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Berufsorientierung für Jugendliche",
          description:
            "Coaching zur beruflichen Orientierung für Jugendliche und junge Erwachsene: Einzelcoaching für Schüler:innen und Abiturient:innen sowie Gruppenprojekte für Schulen in Berlin und Brandenburg.",
          path: "/berufsorientierung",
          serviceType: "Berufsorientierung / Berufscoaching für Jugendliche",
          areaServed: ["Berlin", "Brandenburg", "online"],
        })}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Berufsorientierung", path: "/berufsorientierung" }])} />

      <PageHero
        eyebrow="Berufsorientierung · Für Jugendliche"
        title={
          <>
            Mein Berufseinstieg – <em>Dein Weg beginnt hier.</em>
          </>
        }
        intro="Studium, Ausbildung oder duales Studium? Für die meisten ist die Berufswahl ein ziemlich schwerer Brocken. Seit über 10 Jahren helfen wir jungen Menschen dabei, ihre Stärken zu erkennen und den Weg zu finden, der wirklich zu ihnen passt."
        image="/images/jugend-hero.jpg"
      />

      {/* Auf einen Blick */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        <Reveal>
          <FactBox
            question="Was bringt Dir Berufsorientierung?"
            answer="Unser Projekt „Mein Berufseinstieg“ begleitet Jugendliche bei der Berufs- und Studienwahl – im Einzelcoaching oder als Gruppenprojekt an Schulen. Du lernst Deine Stärken kennen, entwickelst eine klare Vorstellung von Deiner Richtung und startest motivierter in Schule, Praktikum und Bewerbung. Wir arbeiten systemisch, spielerisch und auf Augenhöhe."
            facts={[
              { label: "Für wen", value: "Schüler:innen, Abiturient:innen, junge Erwachsene" },
              { label: "Formate", value: "Einzelcoaching & Gruppenprojekte für Schulen" },
              { label: "Erfahrung", value: "Über 10 Jahre, viele Schulen begleitet" },
              { label: "Region", value: "Berlin, Brandenburg & online" },
            ]}
          />
        </Reveal>
      </section>

      {/* Die drei Angebote */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            Unsere Angebote für Jugendliche
          </p>
          <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
            Such Dir aus, <em>was zu Dir passt.</em>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {JUGEND_ANGEBOTE.map((item, i) => (
            <Reveal key={item.slug} delay={i * 120} className="h-full">
              <Link
                href={item.slug}
                className="group flex h-full flex-col overflow-hidden border border-ink/10 bg-paper transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-28px_rgba(14,29,43,0.35)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex grow flex-col p-7">
                  <span className="display text-sm italic text-gold">{item.nr}</span>
                  <h3 className="display mt-3 text-2xl transition-colors group-hover:text-gold">{item.title}</h3>
                  <p className="eyebrow mt-2 !text-[0.6rem] text-ink/45">{item.claim}</p>
                  <p className="mt-4 grow text-[0.95rem] leading-relaxed text-ink/65">{item.text}</p>
                  <span className="link-gold mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    Mehr erfahren <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Nutzen (dunkel) */}
      <section className="on-dark bg-ink py-24 text-cream md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/jugend-beelitz-1.jpg"
                alt="Jugendliche im Coaching zur Berufsorientierung"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold-bright">
                <span aria-hidden className="inline-block h-px w-10 bg-gold-bright" />
                Das nimmst Du mit
              </p>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                Nach dem Coaching bist Du <em>klarer und motivierter.</em>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <ul className="mt-8 space-y-3.5">
                {NUTZEN.map((punkt) => (
                  <li key={punkt} className="flex items-start gap-3.5 leading-relaxed text-cream/80">
                    <span aria-hidden className="display mt-0.5 italic text-gold-bright">✓</span>
                    {punkt}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={250}>
              <a
                href={CONTACT.phoneHref}
                className="mt-9 inline-flex items-center gap-2 font-semibold text-gold-bright transition-colors hover:text-cream"
              >
                Fragen? Ruf an: {CONTACT.phone} <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Null Bock oder könnte gut werden? <em>Wird gut.</em>
          </>
        }
        text="Lern uns kennen – im kostenlosen Erstgespräch finden wir heraus, welches Angebot am besten zu Dir oder Deiner Schule passt."
      />
    </>
  );
}
