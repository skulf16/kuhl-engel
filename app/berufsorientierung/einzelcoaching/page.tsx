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
    "Einzelcoaching zur beruflichen Orientierung für Schüler:innen, Abiturient:innen und junge Erwachsene: 4 Sitzungen à 90 Minuten für 570 €, an allen Standorten oder online. Systemisch, ziel- und lösungsorientiert.",
  alternates: { canonical: "/berufsorientierung/einzelcoaching" },
};

const IM_COACHING = [
  "Gemeinsam finden wir die berufliche Ausrichtung des jungen Menschen",
  "Wir lösen hinderliche Haltungen, Muster und Überzeugungen",
  "Die Jugendlichen entwickeln Ziele, die sie wirklich motivieren",
  "Daraus leiten wir konkrete nächste Schritte und Handlungen ab",
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
        eyebrow="Berufsorientierung · Einzelcoaching"
        title={
          <>
            Ein geschützter Raum – <em>ganz für den jungen Menschen.</em>
          </>
        }
        intro="Geht es noch individueller? Na klar. An allen Standorten und online bieten wir Einzelcoaching zur beruflichen Orientierung für Schüler:innen, Abiturient:innen und junge Erwachsene an – passend zur jeweiligen Situation, systemisch und lösungsorientiert."
        image="/images/jugend-einzel.jpg"
      />

      {/* Auf einen Blick */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        <Reveal>
          <FactBox
            question="Wie läuft das Einzelcoaching ab?"
            answer="In vier Sitzungen à 90 Minuten finden wir gemeinsam mit dem jungen Menschen die berufliche Ausrichtung, lösen hinderliche Haltungen und entwickeln konkrete Ziele. Das Coaching ist systemisch, ziel- und lösungsorientiert und aktiviert vorhandene Ressourcen. Die Erfahrung zeigt: Nach den Sitzungen ist die eigene Ausrichtung deutlich klarer – motivierter Start in Bewerbung, Ausbildung oder Studium inklusive."
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
                Was im Coaching passiert
              </p>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                In vier Schritten <em>zu einer klaren Richtung.</em>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
                Neben der Berufsorientierung können im Einzelcoaching auch
                unförderliche Muster und Überzeugungen oder belastende Situationen
                reflektiert und gelöst werden – im Tempo des jungen Menschen, in
                einem vertrauensvollen Rahmen.
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
        formal
        title={
          <>
            Sie möchten einen jungen Menschen <em>unterstützen?</em>
          </>
        }
        text="Ob als Lehrkraft, Elternteil oder Kooperationspartner: Schreiben Sie uns oder rufen Sie an – wir klären alle Fragen und finden heraus, ob die Chemie stimmt."
      />

      <div className="bg-cream-deep py-6 text-center">
        <Link href="/berufsorientierung" className="link-gold text-sm font-semibold text-gold">
          ← Zurück zur Berufsorientierung
        </Link>
      </div>
    </>
  );
}
