import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hilfreiches für den Berufsstart – Infos, Links & Vorlagen",
  description:
    "Studium, duales Studium oder Ausbildung? Hilfreiche Links, Lebenslauf-Vorlagen und Ausbildungsbörsen für Jugendliche auf dem Weg in den Beruf – kuratiert von Kuhl & Engel.",
  alternates: { canonical: "/berufsorientierung/berufsstart" },
};

type LinkItem = { label: string; href: string };

const SECTIONS: {
  nr: string;
  title: string;
  intro: string;
  links: LinkItem[];
}[] = [
  {
    nr: "01",
    title: "Studium, duales Studium oder Ausbildung?",
    intro:
      "Nach der Schule gibt es viele Wege ins Berufsleben. Hier findest Du Infos zu Möglichkeiten, Voraussetzungen und Perspektiven – damit Du herausfindest, was zu Deinen Interessen und Stärken passt.",
    links: [
      { label: "Informationen zu Studienplätzen (hochschulkompass.de)", href: "https://www.hochschulkompass.de" },
      { label: "Informationen zur Ausbildung (arbeitsagentur.de)", href: "https://www.arbeitsagentur.de/bildung/ausbildung" },
      { label: "Informationen zum dualen Studium (wegweiser-duales-studium.de)", href: "https://www.wegweiser-duales-studium.de" },
    ],
  },
  {
    nr: "02",
    title: "So kann Dein Lebenslauf aussehen",
    intro:
      "Einen Lebenslauf zu schreiben fällt am Anfang vielen schwer. Diese Beispiele zeigen Dir, wie ein Lebenslauf aufgebaut sein kann. Du musst nicht perfekt sein – wichtig ist, dass er zu Dir passt.",
    links: [
      {
        label: "Beispiele für einen Lebenslauf – Ausbildung nach der Schule (PDF)",
        href: "https://kuhlundengel.de/wp-content/uploads/2024/03/Beispiele-fuer-die-Gestaltung-eines-Lebenlaufs_Ausbildung.pdf",
      },
      {
        label: "Weitere Beispiele zur Gestaltung eines Lebenslaufs (PDF)",
        href: "https://kuhlundengel.de/wp-content/uploads/2023/12/Beispiele-fuer-die-Gestaltung-eines-Lebenlaufs.pdf",
      },
    ],
  },
  {
    nr: "03",
    title: "Finde eine Ausbildung in Deinem Traumjob",
    intro:
      "Du suchst eine Ausbildung oder möchtest wissen, welche Möglichkeiten es in Deiner Region gibt? Hier findest Du Ausbildungsbörsen und Angebote rund um Ausbildung, Praktikum und Berufseinstieg.",
    links: [
      { label: "Ausbildung.de", href: "https://www.ausbildung.de" },
      { label: "Agentur für Arbeit – Ausbildungssuche", href: "https://www.arbeitsagentur.de/ausbildungssuche" },
      { label: "Ausbildung-in-Deutschland.de", href: "https://www.ausbildung-in-deutschland.de" },
      { label: "Ausbildungsmarkt.de", href: "https://www.ausbildungsmarkt.de" },
    ],
  },
];

export default function BerufsstartPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Berufsorientierung", path: "/berufsorientierung" },
          { name: "Für den Berufsstart", path: "/berufsorientierung/berufsstart" },
        ])}
      />

      <PageHero
        eyebrow="Berufsorientierung · Hilfreiches"
        title={
          <>
            Hilfreiches für <em>Deinen Berufsstart.</em>
          </>
        }
        intro="Welcher Weg passt zu Dir? Hier findest Du kuratierte Links, Lebenslauf-Vorlagen und Ausbildungsbörsen – die wichtigsten Anlaufstellen für Deinen Start ins Berufsleben, an einem Ort."
        image="/images/jugend-beelitz-3.jpg"
      />

      <section className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="mb-14 border border-ink/10 bg-cream-deep px-6 py-4 text-[0.9rem] leading-relaxed text-ink/65">
            <span className="font-semibold text-ink">Hinweis für Lehrkräfte und Eltern:</span>{" "}
            Diese Seite ist zum direkten Weitergeben gedacht – alle Links und
            Vorlagen sind frei zugänglich. Informationen zu unseren Angeboten für
            Schulen finden Sie unter{" "}
            <Link href="/berufsorientierung" className="link-gold font-semibold text-gold">
              Berufsorientierung
            </Link>
            .
          </p>
        </Reveal>
        <div className="space-y-16">
          {SECTIONS.map((section, i) => (
            <Reveal key={section.nr} delay={i * 80}>
              <div>
                <div className="flex items-baseline gap-5">
                  <span className="display text-sm italic text-gold">{section.nr}</span>
                  <h2 className="display text-3xl md:text-4xl">{section.title}</h2>
                </div>
                <p className="mt-5 max-w-2xl leading-relaxed text-ink/70">{section.intro}</p>
                <ul className="mt-7 border-t border-ink/10">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-4 border-b border-ink/10 py-4 transition-colors hover:text-gold"
                      >
                        <span className="font-medium">{link.label}</span>
                        <span aria-hidden className="text-gold transition-transform duration-300 group-hover:translate-x-1">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-16 border border-ink/10 border-l-4 border-l-gold bg-paper p-8 md:p-10">
            <p className="eyebrow text-gold">Noch mehr Unterstützung?</p>
            <h2 className="display mt-4 text-2xl md:text-3xl">
              Wir begleiten Dich <em>persönlich.</em>
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">
              Links und Vorlagen sind ein guter Anfang – im{" "}
              <Link href="/berufsorientierung/einzelcoaching" className="link-gold font-semibold text-gold">
                Einzelcoaching
              </Link>{" "}
              oder in unseren{" "}
              <Link href="/berufsorientierung/gruppenangebote" className="link-gold font-semibold text-gold">
                Projekttagen
              </Link>{" "}
              finden wir gemeinsam heraus, was wirklich zu Dir passt. Sprich am
              besten mit Deinen Eltern oder Deiner Lehrkraft darüber.
            </p>
          </div>
        </Reveal>
      </section>

      <CtaBand
        title={
          <>
            Lieber gemeinsam <em>herausfinden?</em>
          </>
        }
        text="Melde Dich für ein unverbindliches Gespräch – wir helfen Dir, Deinen Weg nach der Schule zu finden."
      />

      <div className="bg-cream-deep py-6 text-center">
        <Link href="/berufsorientierung" className="link-gold text-sm font-semibold text-gold">
          ← Zurück zur Berufsorientierung
        </Link>
      </div>
    </>
  );
}
