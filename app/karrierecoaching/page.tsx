import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Accordion from "@/components/Accordion";
import FactBox from "@/components/FactBox";
import JsonLd from "@/components/JsonLd";
import { FOUNDERS, TEAM, type Faq } from "@/lib/data";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Karrierecoaching – für den nächsten beruflichen Schritt",
  description:
    "Karrierecoaching bei Kuhl & Engel: Wiedereinstieg nach der Elternzeit, Neuorientierung, Sichtbarkeit und der nächste Karriereschritt – mit AVGS-Gutschein 100 % kostenfrei. Berlin, Potsdam & online.",
  path: "/karrierecoaching",
  image: "/images/ke-frauen.jpg",
  imageAlt: "Karrierecoaching bei Kuhl & Engel",
});

const THEMEN = [
  {
    nr: "01",
    title: "Wiedereinstieg nach der Elternzeit",
    text: "Du willst zurück ins Berufsleben, aber nicht einfach zurück in den alten Trott? Gemeinsam klären wir, ob der alte Job noch passt, wie Du Dich neu ausrichtest und wie Du Beruf und Familie so verbindest, dass es Dir entspricht – ohne schlechtes Gewissen in beide Richtungen.",
  },
  {
    nr: "02",
    title: "Sichtbarkeit & Selbstzweifel",
    text: "Bestens qualifiziert und trotzdem das Gefühl, nicht zu genügen? Viele Hochqualifizierte kennen das. Im Coaching reflektierst Du Deine Muster, erkennst Deine Kernkompetenzen anhand echter Erfolge und lernst, auf natürliche Weise zu überzeugen – im Meeting wie im Vorstellungsgespräch.",
  },
  {
    nr: "03",
    title: "Neuorientierung nach Studium oder Promotion",
    text: "Raus aus der Wissenschaft, rein – aber wohin? Wenn der akademische Weg nicht mehr trägt, helfen wir Dir, Deine Fähigkeiten in neue Kontexte zu übersetzen und eine Richtung zu finden, die Deinem Leben Sinn gibt.",
  },
  {
    nr: "04",
    title: "Der nächste Karriereschritt",
    text: "Mehr Verantwortung, ein neues Feld oder endlich die Position, die Deinem Können entspricht? Wir entwickeln mit Dir inspirierende, realistische Ziele und eine Strategie, mit der Du souverän verhandelst und auftrittst.",
  },
];

const FAQS_KARRIERE: Faq[] = [
  {
    q: "Kann ich mir aussuchen, wer mich coacht?",
    a: "Ja. In unserem Team arbeiten 14 Coachinnen und ein Coach – mit unterschiedlichen Schwerpunkten, Biografien und Sprachen. Im Erstgespräch finden wir gemeinsam heraus, wer am besten zu Dir und Deinem Anliegen passt. Wenn Du ein Coaching von Frau zu Frau möchtest, sag es einfach – das garantieren wir Dir.",
  },
  {
    q: "Ist das Coaching wirklich kostenlos?",
    a: "Ja – wenn Du bei der Agentur für Arbeit oder dem Jobcenter arbeitssuchend gemeldet bist und einen AVGS-Gutschein bekommst, übernimmt die Agentur 100 % der Kosten. Das gilt auch während oder nach der Elternzeit. Wir übernehmen die komplette Abwicklung mit der Behörde.",
  },
  {
    q: "Ich stecke mitten in der Elternzeit – wann ist der richtige Zeitpunkt?",
    a: "Früher, als die meisten denken: Ein Coaching vor dem Wiedereinstieg verschafft Dir Klarheit, bevor Du Entscheidungen triffst oder verhandeln musst. Viele Klient:innen starten sechs bis drei Monate vor dem geplanten Wiedereinstieg – online geht das auch mit Kind zu Hause.",
  },
  {
    q: "Geht das Coaching auch online oder hybrid?",
    a: "Ja. Alle Coachings finden wahlweise in Berlin, Potsdam oder Augsburg, komplett online via Zoom oder hybrid statt. Die Termine legen wir so, dass sie in Deinen Alltag passen.",
  },
];

const COACHES = [
  FOUNDERS[0],
  FOUNDERS[1],
  ...TEAM.filter((m) => ["Carmen Pilger", "Matthias Fink"].includes(m.name)),
];

export default function KarrierecoachingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Karrierecoaching",
          description:
            "Karrierecoaching für Akademikerinnen und Akademiker, Fach- und Führungskräfte: Wiedereinstieg nach der Elternzeit, berufliche Neuorientierung, Sichtbarkeit und der nächste Karriereschritt – mit AVGS-Gutschein zu 100 % kostenfrei.",
          path: "/karrierecoaching",
          serviceType: "Karrierecoaching",
          audience: "Akademikerinnen und Akademiker, Fach- und Führungskräfte",
        })}
      />
      <JsonLd data={faqSchema(FAQS_KARRIERE, "/karrierecoaching")} />
      <JsonLd data={breadcrumbSchema([{ name: "Karrierecoaching", path: "/karrierecoaching" }])} />

      <PageHero
        eyebrow="Karrierecoaching · Für den nächsten Schritt"
        title={
          <>
            Karrierecoaching <em>auf Augenhöhe.</em>
          </>
        }
        intro="Wiedereinstieg nach der Elternzeit, Neuorientierung oder der nächste Karriereschritt: Bei Kuhl & Engel begleiten Dich Coaches, die Deine Fragen aus eigener Erfahrung kennen – auf Wunsch auch garantiert von Frau zu Frau. Mit AVGS-Gutschein zu 100 % kostenfrei."
        image="/images/ke-frauen.jpg"
      />

      {/* Auf einen Blick */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        <Reveal>
          <FactBox
            question="Was macht Karrierecoaching bei Kuhl & Engel aus?"
            answer="Karrierecoaching bei Kuhl & Engel ist eine individuelle 1:1-Begleitung für alle, die beruflich den nächsten Schritt gehen wollen: Wiedereinstieg nach der Elternzeit, Neuorientierung, Sichtbarkeit oder mehr Verantwortung. 14 Coachinnen und ein Coach arbeiten systemisch und auf Augenhöhe – auf Wunsch garantiert von Frau zu Frau. Mit AVGS-Gutschein der Agentur für Arbeit ist das Coaching zu 100 % kostenfrei."
            facts={[
              { label: "Team", value: "15 Coaches – 14 Coachinnen & 1 Coach" },
              { label: "Kosten", value: "Mit AVGS-Gutschein 0 €" },
              { label: "Schwerpunkte", value: "Wiedereinstieg, Neuorientierung, Sichtbarkeit, Karriere" },
              { label: "Formate", value: "Berlin, Potsdam, Augsburg, online oder hybrid" },
            ]}
          />
        </Reveal>
      </section>

      {/* Themen */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            Womit unsere Klient:innen zu uns kommen
          </p>
          <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
            Deine Themen. <em>Unsere Erfahrung.</em>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2">
          {THEMEN.map((thema, i) => (
            <Reveal key={thema.nr} delay={(i % 2) * 120} className="h-full">
              <div className="group h-full bg-paper p-9 transition-colors duration-500 hover:bg-cream md:p-11">
                <span className="display text-4xl italic text-gold/50 transition-colors duration-500 group-hover:text-gold">
                  {thema.nr}
                </span>
                <h3 className="display mt-5 text-2xl md:text-3xl">{thema.title}</h3>
                <p className="mt-4 leading-relaxed text-ink/70">{thema.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/avgs-coaching#buchen"
              className="group inline-flex items-center gap-3 bg-ink px-8 py-4 font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-700"
            >
              Kostenloses Erstgespräch starten
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <p className="text-[0.9rem] text-ink/55">
              4 kurze Fragen – wir melden uns mit dem passenden Coach.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Zitat */}
      <section className="bg-cream-deep py-20 md:py-24">
        <Reveal>
          <figure className="mx-auto max-w-3xl px-5 text-center md:px-8">
            <blockquote className="display text-2xl italic leading-snug text-ink/85 md:text-3xl">
              „Ich hatte die Möglichkeit herauszufinden, wohin es mich beruflich in
              Zukunft leiten darf. Dabei standen meine persönlichen Bedürfnisse an
              Leben, Beruf und Familie im Vordergrund – ebenso wie das Herausfiltern
              meiner persönlichen Stärken.“
            </blockquote>
            <figcaption className="eyebrow mt-6 text-gold">Lena W. · Google-Bewertung</figcaption>
          </figure>
        </Reveal>
      </section>

      {/* Coaches */}
      <section className="bg-cream-deep py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span aria-hidden className="inline-block h-px w-10 bg-gold" />
              Dein Team
            </p>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
              <h2 className="display max-w-xl text-4xl md:text-5xl">
                Coaches, die Deinen Weg <em>selbst gegangen sind.</em>
              </h2>
              <p className="mb-2 max-w-md text-[0.95rem] leading-relaxed text-ink/60">
                Heike Kuhl und Martina Engel-Fürstberger haben Kuhl & Engel
                gegründet – heute begleiten Dich 14 Coachinnen und ein Coach
                in beruflichen Veränderungen.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-x-6 gap-y-12 grid-cols-2 lg:grid-cols-4">
            {COACHES.map((member, i) => (
              <Reveal key={member.name} delay={i * 100}>
                <article className="group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="display mt-4 text-lg transition-colors group-hover:text-gold md:text-xl">
                    {member.name}
                  </h3>
                  <p className="mt-1.5 text-[0.8rem] leading-relaxed text-ink/55">{member.quali}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <p className="mt-10 text-[0.95rem] text-ink/60">
              Alle Coaches mit ihren Schwerpunkten findest Du{" "}
              <Link href="/ueber-uns#team" className="link-gold font-semibold text-gold">
                im Team →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="display text-center text-4xl md:text-5xl">
            Häufige Fragen zum <em>Karrierecoaching.</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12">
            <Accordion items={FAQS_KARRIERE} />
          </div>
        </Reveal>
      </section>

      <CtaBand
        title={
          <>
            Dein nächstes Kapitel beginnt <em>mit einem Gespräch.</em>
          </>
        }
        text="Lern uns in einem kostenlosen Erstgespräch kennen – vertraulich, unverbindlich und auf Wunsch von Frau zu Frau."
      />
    </>
  );
}
