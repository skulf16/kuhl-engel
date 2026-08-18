import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hilfreiches für den Berufsstart – Infos, Links & Vorlagen",
  description:
    "Studium, duales Studium oder Ausbildung? Hilfreiche Links, Lebenslauf-Vorlagen und Ausbildungsbörsen für Jugendliche auf dem Weg in den Beruf – kuratiert von Kuhl & Engel.",
  alternates: { canonical: "/berufsorientierung/berufsstart" },
};

type LinkItem = { label: string; href: string; image: string };

const SECTIONS: {
  nr: string;
  title: string;
  intro: string;
  links: LinkItem[];
}[] = [
  {
    nr: "02",
    title: "Studium, duales Studium oder Ausbildung?",
    intro:
      "Nach der Schule gibt es viele Wege ins Berufsleben. Hier findest Du Infos zu Möglichkeiten, Voraussetzungen und Perspektiven – damit Du herausfindest, was zu Deinen Interessen und Stärken passt.",
    links: [
      { label: "Informationen zu Studienplätzen (hochschulkompass.de)", href: "https://www.hochschulkompass.de", image: "/images/weiterbildung.jpg" },
      { label: "Informationen zur Ausbildung (arbeitsagentur.de)", href: "https://www.arbeitsagentur.de/bildung/ausbildung", image: "/images/jugend-seminar.jpg" },
      { label: "Informationen zum dualen Studium (wegweiser-duales-studium.de)", href: "https://www.wegweiser-duales-studium.de", image: "/images/seminar.jpg" },
    ],
  },
  {
    nr: "03",
    title: "So kann Dein Lebenslauf aussehen",
    intro:
      "Einen Lebenslauf zu schreiben fällt am Anfang vielen schwer. Diese Beispiele zeigen Dir, wie ein Lebenslauf aufgebaut sein kann. Du musst nicht perfekt sein – wichtig ist, dass er zu Dir passt.",
    links: [
      {
        label: "Beispiele für einen Lebenslauf – Ausbildung nach der Schule (PDF)",
        href: "https://kuhlundengel.de/wp-content/uploads/2024/03/Beispiele-fuer-die-Gestaltung-eines-Lebenlaufs_Ausbildung.pdf",
        image: "/images/ke-unterlagen.jpg",
      },
      {
        label: "Weitere Beispiele zur Gestaltung eines Lebenslaufs (PDF)",
        href: "https://kuhlundengel.de/wp-content/uploads/2023/12/Beispiele-fuer-die-Gestaltung-eines-Lebenlaufs.pdf",
        image: "/images/ke-unterlagen-duo.jpg",
      },
    ],
  },
  {
    nr: "04",
    title: "Finde eine Ausbildung in Deinem Traumjob",
    intro:
      "Du suchst eine Ausbildung oder möchtest wissen, welche Möglichkeiten es in Deiner Region gibt? Hier findest Du Ausbildungsbörsen und Angebote rund um Ausbildung, Praktikum und Berufseinstieg.",
    links: [
      { label: "Ausbildung.de", href: "https://www.ausbildung.de", image: "/images/jugend-gruppe.jpg" },
      { label: "Agentur für Arbeit – Ausbildungssuche", href: "https://www.arbeitsagentur.de/ausbildungssuche", image: "/images/jugend-einzel.jpg" },
      { label: "Ausbildung-in-Deutschland.de", href: "https://www.ausbildung-in-deutschland.de", image: "/images/jugend-gruppe-2.jpg" },
      { label: "Ausbildungsmarkt.de", href: "https://www.ausbildungsmarkt.de", image: "/images/jugend-spiel-coaching.jpg" },
    ],
  },
];

const VIDEOS = [
  {
    videoId: "FPCNaE7emrY",
    title: "Check den Informationselektroniker – das Schüler-Interview",
    thumbnail: "/images/yt-FPCNaE7emrY.jpg",
  },
  {
    videoId: "C9Jkb6Oss-s",
    title: "Check den Steuerberater – das Schüler-Interview",
    thumbnail: "/images/yt-C9Jkb6Oss-s.jpg",
  },
  {
    videoId: "HKIIGXwUjrU",
    title: "Check den Elektriker – das Schüler-Interview",
    thumbnail: "/images/yt-HKIIGXwUjrU.jpg",
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
        intro="Welcher Weg passt zu Dir? Hier findest Du Berufe im Video-Check, kuratierte Links, Lebenslauf-Vorlagen und Ausbildungsbörsen – die wichtigsten Anlaufstellen für Deinen Start ins Berufsleben, an einem Ort."
        image="/images/jugend-freundlich.jpg"
        imagePosition="object-[70%_35%]"
      />

      <section className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="mb-14 border border-ink/10 bg-cream-deep px-6 py-4 text-[0.9rem] leading-relaxed text-ink/65">
            <span className="font-semibold text-ink">Hinweis für Lehrkräfte und Eltern:</span>{" "}
            Diese Seite ist zum direkten Weitergeben gedacht – alle Links und
            Vorlagen sind frei zugänglich. Informationen zu unseren Angeboten für
            Schulen findest Du unter{" "}
            <Link href="/berufsorientierung" className="link-gold font-semibold text-gold">
              Berufsorientierung
            </Link>
            .
          </p>
        </Reveal>
        <Reveal>
          <div>
            <div className="flex items-baseline gap-5">
              <span className="display text-sm italic text-gold">01</span>
              <h2 className="display text-3xl md:text-4xl">Berufe im Video-Check</h2>
            </div>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/70">
              Wie sieht der Arbeitsalltag in einem Beruf wirklich aus? In den
              Schüler-Interviews von Job-Opener bekommst Du ehrliche Einblicke –
              direkt von Menschen, die den Job jeden Tag machen.
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {VIDEOS.map((video) => (
                <YouTubeEmbed key={video.videoId} {...video} />
              ))}
            </div>
            <p className="mt-5 text-[0.8rem] leading-relaxed text-ink/50">
              Beim Abspielen wird eine Verbindung zu YouTube hergestellt und es
              gelten die Datenschutzbestimmungen von Google.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-16">
          {SECTIONS.map((section, i) => (
            <Reveal key={section.nr} delay={i * 80}>
              <div>
                <div className="flex items-baseline gap-5">
                  <span className="display text-sm italic text-gold">{section.nr}</span>
                  <h2 className="display text-3xl md:text-4xl">{section.title}</h2>
                </div>
                <p className="mt-5 max-w-2xl leading-relaxed text-ink/70">{section.intro}</p>
                <div className={`mt-8 grid gap-6 sm:grid-cols-2 ${section.links.length > 2 ? "lg:grid-cols-3" : ""}`}>
                  {section.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col overflow-hidden border border-ink/10 bg-paper transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_56px_-24px_rgba(14,29,43,0.35)]"
                    >
                      <span className="relative block aspect-[16/9] overflow-hidden">
                        <Image
                          src={link.image}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </span>
                      <span className="flex grow items-start justify-between gap-3 p-5">
                        <span className="text-[0.95rem] font-semibold leading-snug transition-colors group-hover:text-gold">
                          {link.label}
                        </span>
                        <span aria-hidden className="text-gold transition-transform duration-300 group-hover:translate-x-1">↗</span>
                      </span>
                    </a>
                  ))}
                </div>
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
        href="/berufsorientierung#kontakt"
        label="Unverbindlich anfragen"
      />

      <div className="bg-cream-deep py-6 text-center">
        <Link href="/berufsorientierung" className="link-gold text-sm font-semibold text-gold">
          ← Zurück zur Berufsorientierung
        </Link>
      </div>
    </>
  );
}
