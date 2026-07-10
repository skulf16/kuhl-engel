import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import FactBox from "@/components/FactBox";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Einzelcoaching Berufsorientierung für Schüler:innen",
  description:
    "Einzelcoaching zur beruflichen Orientierung für Schüler:innen, Abiturient:innen und junge Erwachsene. 4 Sitzungen à 90 Minuten für 570 €, an allen Standorten oder online. Systemisch und lösungsorientiert.",
  alternates: { canonical: "/berufsorientierung/einzelcoaching" },
};

const IM_COACHING = [
  "Wir finden gemeinsam Deine berufliche Ausrichtung",
  "Wir lösen hinderliche Haltungen und Überzeugungen",
  "Du entwickelst Ziele, die Dich wirklich motivieren",
  "Wir leiten konkrete nächste Schritte daraus ab",
];

export default function EinzelcoachingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Einzelcoaching Berufsorientierung für Jugendliche",
          description:
            "Individuelles Coaching zur beruflichen Orientierung für Schüler:innen, Abiturient:innen und junge Erwachsene. Vier Sitzungen à 90 Minuten für 570 Euro, vor Ort oder online.",
          path: "/berufsorientierung/einzelcoaching",
          serviceType: "Einzelcoaching Berufsorientierung",
          areaServed: ["Berlin", "Potsdam", "Augsburg", "online"],
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Berufsorientierung", path: "/berufsorientierung" },
          { name: "Einzelcoaching", path: "/berufsorientierung/einzelcoaching" },
        ])}
      />

      <PageHero
        eyebrow="Berufsorientierung · Einzelcoaching"
        title={
          <>
            Dein geschützter Raum, <em>ganz für Dich.</em>
          </>
        }
        intro="Geht's noch individueller? Na klar. An allen Standorten und online bieten wir Einzelcoaching zur beruflichen Orientierung für Schüler:innen, Abiturient:innen und junge Erwachsene an – passend zu Deiner Situation."
        image="/images/jugend-einzel.jpg"
      />

      {/* Auf einen Blick */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        <Reveal>
          <FactBox
            question="Wie läuft das Einzelcoaching ab?"
            answer="In vier Sitzungen à 90 Minuten finden wir gemeinsam Deine berufliche Ausrichtung, lösen hinderliche Haltungen und entwickeln konkrete Ziele. Unser Coaching ist systemisch, ziel- und lösungsorientiert und aktiviert Deine vorhandenen Ressourcen. Nach den Sitzungen ist Deine Ausrichtung deutlich klarer – Du startest motiviert in Deinen Weg."
            facts={[
              { label: "Für wen", value: "Schüler:innen, Abiturient:innen, junge Erwachsene" },
              { label: "Umfang", value: "4 Sitzungen à 90 Minuten" },
              { label: "Preis", value: "570 € für das Coaching-Paket" },
              { label: "Wo", value: "Berlin, Potsdam, Augsburg oder online" },
            ]}
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
                Was wir zusammen machen
              </p>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                In vier Schritten <em>zu Deiner Richtung.</em>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
                Neben der Berufsorientierung können wir im Einzelcoaching auch
                unförderliche Muster oder belastende Situationen reflektieren und
                lösen. Du entscheidest, wie tief wir gehen.
              </p>
              <ul className="mt-8 space-y-3.5">
                {IM_COACHING.map((punkt) => (
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
                  src="/images/jugend-beelitz-2.jpg"
                  alt="Einzelcoaching zur Berufsorientierung"
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 bg-ink px-7 py-5 text-cream md:-left-8">
                <p className="display text-2xl italic text-gold-bright">570 €</p>
                <p className="mt-1 text-[0.8rem] text-cream/70">4 Sitzungen à 90 Minuten</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Bereit, Deinen Weg <em>zu finden?</em>
          </>
        }
        text="Schreib uns oder ruf an – wir klären alle Fragen und finden heraus, ob die Chemie stimmt. Auch Eltern sind herzlich willkommen."
      />

      <div className="bg-cream-deep py-6 text-center">
        <Link href="/berufsorientierung" className="link-gold text-sm font-semibold text-gold">
          ← Zurück zur Berufsorientierung
        </Link>
      </div>
    </>
  );
}
