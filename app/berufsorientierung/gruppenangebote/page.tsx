import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import FactBox from "@/components/FactBox";
import JsonLd from "@/components/JsonLd";
import { CONTACT } from "@/lib/data";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Gruppenangebote Berufsorientierung für Schulen (PraxisBO)",
  description:
    "Coaching-Seminar „Mein Berufseinstieg“ für Schulklassen in Berlin und Brandenburg: 2–2,5 Tage, professionelle Coaches, jugendgerechte Methoden. Über PraxisBO für Schulen förderfähig.",
  alternates: { canonical: "/berufsorientierung/gruppenangebote" },
};

const ABLAUF = [
  {
    phase: "Vorbereitung",
    points: [
      "Komplette Organisation und Koordination mit allen Beteiligten",
      "Information an Schulleitung, Lehrkräfte, Schüler:innen und Eltern",
      "Inhaltliche Konzeption und Zusammenstellung des Teams",
    ],
  },
  {
    phase: "Durchführung",
    points: [
      "Team- und Kommunikationsübungen, Vertrauensübungen",
      "Talente, Werte und Haltung zur Schule herausarbeiten",
      "Mission Statement sowie kurz- und mittelfristige Ziele",
      "Verankerung im Kletterpark, individuelles Einzelcoaching",
    ],
  },
  {
    phase: "Nachbereitung",
    points: [
      "Evaluationsbögen auswerten",
      "Nachbesprechung mit der Schulleitung",
      "Berichterstattung in den Medien und Abrechnung",
    ],
  },
];

export default function GruppenangebotePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Gruppenangebote Berufsorientierung für Schulen",
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
          { name: "Gruppenangebote", path: "/berufsorientierung/gruppenangebote" },
        ])}
      />

      <PageHero
        eyebrow="Berufsorientierung · Für Schulen"
        title={
          <>
            Mein Berufseinstieg – <em>das Seminar für ganze Klassen.</em>
          </>
        }
        intro="Null Bock oder könnte gut werden? Wir sagen: wird gut. Unser Projekt „Mein Berufseinstieg“ ist eigens für Schulen konzipiert und steht für Begegnung auf Augenhöhe, vielfältige Methoden und intensive Betreuung."
        image="/images/jugend-gruppe.jpg"
      />

      {/* Auf einen Blick */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        <Reveal>
          <FactBox
            question="Wie läuft das Gruppen-Seminar ab?"
            answer="Das Coaching-Seminar dauert 2 bis 2,5 Tage und wird mit je einer Klasse an einem attraktiven Lernort außerhalb der Schule durchgeführt. Mehrere professionelle Coaches begleiten die Jugendlichen – in der ganzen Klasse, in kleinen Gruppen und teilweise einzeln. Über das Förderprogramm PraxisBO ist das Seminar für Brandenburger Schulen förderfähig, für öffentliche Schulen ohne zusätzliche Kosten."
            facts={[
              { label: "Format", value: "2–2,5 Tage pro Klasse, externer Lernort" },
              { label: "Betreuung", value: "Mehrere Coaches, Klein- und Einzelgruppen" },
              { label: "Förderung", value: "PraxisBO – bis zu 35.000 € / Schuljahr" },
              { label: "Region", value: "Berlin und Brandenburg" },
            ]}
          />
        </Reveal>
      </section>

      {/* Ablauf */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            So läuft unsere Zusammenarbeit
          </p>
          <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
            Von der Planung bis zur <em>Nachbereitung.</em>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-3">
          {ABLAUF.map((block, i) => (
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

      {/* PraxisBO Förderung (dunkel) */}
      <section className="on-dark bg-ink py-24 text-cream md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold-bright">
                <span aria-hidden className="inline-block h-px w-10 bg-gold-bright" />
                Förderung über PraxisBO
              </p>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                Für öffentliche Schulen <em>ohne zusätzliche Kosten.</em>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-7 space-y-5 text-lg leading-relaxed text-cream/70">
                <p>
                  PraxisBO ist ein Förderprogramm des Landes Brandenburg für
                  weiterführende Schulen, finanziert aus Mitteln des Europäischen
                  Sozialfonds und der Agentur für Arbeit. Darüber lassen sich
                  Projekte zur Berufs- und Studienorientierung umsetzen.
                </p>
                <p>
                  Für mehrzügige Schulen stehen bis zu 35.000 € zzgl. Fahrtkosten
                  pro Schuljahr zur Verfügung. Für öffentliche Schulen fallen keine
                  zusätzlichen Kosten an; Schulen in privater Trägerschaft tragen
                  einen Eigenanteil von 38 %.
                </p>
              </div>
            </Reveal>
            <Reveal delay={250}>
              <a
                href={CONTACT.phoneHref}
                className="mt-9 inline-flex items-center gap-2 font-semibold text-gold-bright transition-colors hover:text-cream"
              >
                Wir beraten gern: {CONTACT.phone} <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/jugend-seminar.jpg"
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
        formal
        title={
          <>
            Bringen Sie „Mein Berufseinstieg“ <em>an Ihre Schule.</em>
          </>
        }
        text="Wie sich das Seminar optimal in den Projektablauf an Ihrer Schule einbetten lässt, klären wir gern im persönlichen Gespräch – inklusive aller Fragen zur PraxisBO-Förderung."
      />

      <div className="bg-cream-deep py-6 text-center">
        <Link href="/berufsorientierung" className="link-gold text-sm font-semibold text-gold">
          ← Zurück zur Berufsorientierung
        </Link>
      </div>
    </>
  );
}
