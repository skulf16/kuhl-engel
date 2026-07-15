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
  title: "Coaching für Frauen – Karrierecoaching von Coachinnen",
  description:
    "Coaching für Frauen bei Kuhl & Engel: 14 Coachinnen begleiten Akademikerinnen bei Wiedereinstieg nach der Elternzeit, Neuorientierung und Sichtbarkeit – mit AVGS-Gutschein 100 % kostenfrei. Berlin, Potsdam & online.",
  path: "/coaching-fuer-frauen",
  image: "/images/coaching-7.jpg",
  imageAlt: "Coaching von Frau zu Frau bei Kuhl & Engel",
});

const THEMEN = [
  {
    nr: "01",
    title: "Wiedereinstieg nach der Elternzeit",
    text: "Sie wollen zurück ins Berufsleben, aber nicht einfach zurück in den alten Trott? Gemeinsam klären wir, ob der alte Job noch passt, wie Sie sich neu ausrichten und wie Sie Beruf und Familie so verbinden, dass es Ihnen entspricht – ohne schlechtes Gewissen in beide Richtungen.",
  },
  {
    nr: "02",
    title: "Sichtbarkeit & Selbstzweifel",
    text: "Bestens qualifiziert und trotzdem das Gefühl, nicht zu genügen? Viele Akademikerinnen kennen das. Im Coaching reflektieren Sie Ihre Muster, erkennen Ihre Kernkompetenzen anhand echter Erfolge und lernen, auf natürliche Weise zu überzeugen – im Meeting wie im Vorstellungsgespräch.",
  },
  {
    nr: "03",
    title: "Neuorientierung nach Studium oder Promotion",
    text: "Raus aus der Wissenschaft, rein – aber wohin? Wenn der akademische Weg nicht mehr trägt, helfen wir Ihnen, Ihre Fähigkeiten in neue Kontexte zu übersetzen und eine Richtung zu finden, die Ihrem Leben Sinn gibt.",
  },
  {
    nr: "04",
    title: "Der nächste Karriereschritt",
    text: "Mehr Verantwortung, ein neues Feld oder endlich die Position, die Ihrem Können entspricht? Wir entwickeln mit Ihnen inspirierende, realistische Ziele und eine Strategie, die Sie souverän verhandeln und auftreten lässt.",
  },
];

const FAQS_FRAUEN: Faq[] = [
  {
    q: "Werde ich bei euch von einer Frau gecoacht?",
    a: "Sehr wahrscheinlich – und auf Wunsch garantiert. 14 unserer 15 Coaches sind Frauen, beide Gründerinnen eingeschlossen. Sagen Sie uns im Erstgespräch einfach, dass Sie ein Coaching von Frau zu Frau möchten, und wir stellen die passende Coachin an Ihre Seite.",
  },
  {
    q: "Ist das Coaching wirklich kostenlos?",
    a: "Ja – wenn Sie bei der Agentur für Arbeit oder dem Jobcenter arbeitssuchend gemeldet sind und einen AVGS-Gutschein bekommen, übernimmt die Agentur 100 % der Kosten. Das gilt auch während oder nach der Elternzeit. Wir übernehmen die komplette Abwicklung mit der Behörde.",
  },
  {
    q: "Ich stecke mitten in der Elternzeit – wann ist der richtige Zeitpunkt?",
    a: "Früher, als die meisten denken: Ein Coaching vor dem Wiedereinstieg verschafft Ihnen Klarheit, bevor Sie Entscheidungen treffen oder verhandeln müssen. Viele Klientinnen starten sechs bis drei Monate vor dem geplanten Wiedereinstieg – online geht das auch mit Kind zu Hause.",
  },
  {
    q: "Geht das Coaching auch online oder hybrid?",
    a: "Ja. Alle Coachings finden wahlweise in Berlin, Potsdam oder Augsburg, komplett online via Zoom oder hybrid statt. Die Termine legen wir so, dass sie in Ihren Alltag passen.",
  },
];

const COACHINNEN = [
  FOUNDERS[0],
  FOUNDERS[1],
  ...TEAM.filter((m) => ["Carmen Pilger", "Angelina Werner"].includes(m.name)),
];

export default function CoachingFuerFrauenPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Coaching für Frauen",
          description:
            "Karrierecoaching für Frauen und Akademikerinnen: Wiedereinstieg nach der Elternzeit, berufliche Neuorientierung, Sichtbarkeit und der nächste Karriereschritt – begleitet von 14 Coachinnen, mit AVGS-Gutschein zu 100 % kostenfrei.",
          path: "/coaching-fuer-frauen",
          serviceType: "Karrierecoaching für Frauen",
          audience: "Frauen, Akademikerinnen, Wiedereinsteigerinnen",
        })}
      />
      <JsonLd data={faqSchema(FAQS_FRAUEN, "/coaching-fuer-frauen")} />
      <JsonLd data={breadcrumbSchema([{ name: "Coaching für Frauen", path: "/coaching-fuer-frauen" }])} />

      <PageHero
        eyebrow="Coaching für Frauen · Von Coachinnen"
        title={
          <>
            Karrierecoaching <em>von Frau zu Frau.</em>
          </>
        }
        intro="Wiedereinstieg nach der Elternzeit, Neuorientierung oder der nächste Karriereschritt: Bei Kuhl & Engel begleiten Sie Coachinnen, die Ihre Fragen aus eigener Erfahrung kennen. Gegründet von zwei Frauen, getragen von 14 Coachinnen – und mit AVGS-Gutschein zu 100 % kostenfrei."
        image="/images/coaching-7.jpg"
      />

      {/* Auf einen Blick */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        <Reveal>
          <FactBox
            question="Was macht Coaching für Frauen bei Kuhl & Engel aus?"
            answer="Kuhl & Engel ist ein von zwei Frauen gegründetes Coaching-Unternehmen mit 14 Coachinnen im Team. Wir begleiten Frauen und Akademikerinnen bei Wiedereinstieg nach der Elternzeit, beruflicher Neuorientierung, Sichtbarkeit und dem nächsten Karriereschritt – systemisch, auf Augenhöhe und auf Wunsch garantiert von Frau zu Frau. Mit AVGS-Gutschein der Agentur für Arbeit ist das Coaching zu 100 % kostenfrei."
            facts={[
              { label: "Team", value: "14 Coachinnen, 2 Gründerinnen" },
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
            Womit Frauen zu uns kommen
          </p>
          <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
            Ihre Themen. <em>Unsere Erfahrung.</em>
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
              4 kurze Fragen – wir melden uns mit der passenden Coachin.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Zitat */}
      <section className="on-dark bg-ink py-20 text-cream md:py-24">
        <Reveal>
          <figure className="mx-auto max-w-3xl px-5 text-center md:px-8">
            <blockquote className="display text-2xl italic leading-snug md:text-3xl">
              „Ich hatte die Möglichkeit herauszufinden, wohin es mich beruflich in
              Zukunft leiten darf. Dabei standen meine persönlichen Bedürfnisse an
              Leben, Beruf und Familie im Vordergrund – ebenso wie das Herausfiltern
              meiner persönlichen Stärken.“
            </blockquote>
            <figcaption className="eyebrow mt-6 text-gold-bright">Lena W. · Google-Bewertung</figcaption>
          </figure>
        </Reveal>
      </section>

      {/* Coachinnen */}
      <section className="bg-cream-deep py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span aria-hidden className="inline-block h-px w-10 bg-gold" />
              Von Frauen gegründet
            </p>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
              <h2 className="display max-w-xl text-4xl md:text-5xl">
                Coachinnen, die Ihren Weg <em>selbst gegangen sind.</em>
              </h2>
              <p className="mb-2 max-w-md text-[0.95rem] leading-relaxed text-ink/60">
                Heike Kuhl und Martina Engel-Fürstberger haben Kuhl & Engel
                gegründet – heute begleiten 14 Coachinnen Frauen in beruflichen
                Veränderungen.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-x-6 gap-y-12 grid-cols-2 lg:grid-cols-4">
            {COACHINNEN.map((member, i) => (
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
              Alle 14 Coachinnen mit ihren Schwerpunkten finden Sie{" "}
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
            Häufige Fragen von <em>Frauen an uns.</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12">
            <Accordion items={FAQS_FRAUEN} />
          </div>
        </Reveal>
      </section>

      <CtaBand
        title={
          <>
            Ihr nächstes Kapitel beginnt <em>mit einem Gespräch.</em>
          </>
        }
        text="Lernen Sie uns in einem kostenlosen Erstgespräch kennen – vertraulich, unverbindlich und auf Wunsch von Frau zu Frau."
      />
    </>
  );
}
