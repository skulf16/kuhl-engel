import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Accordion from "@/components/Accordion";
import FactBox from "@/components/FactBox";
import JsonLd from "@/components/JsonLd";
import BookingFunnel from "@/components/BookingFunnel";
import { FAQS_AVGS } from "@/lib/data";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AVGS Coaching & Gutschein – 100 % kostenfrei in Berlin & online",
  description:
    "AVGS Coaching für Akademikerinnen und Akademiker: individuelles 1:1-Jobcoaching, mit Gutschein der Agentur für Arbeit zu 100 % kostenfrei. So bekommst und löst Du den AVGS-Gutschein ein – Berlin, Potsdam, Augsburg & online.",
  path: "/avgs-coaching",
  image: "/images/coaching-warm.jpg",
  imageAlt: "Coaching-Gespräch bei Kuhl & Engel",
});

const GUTSCHEIN_STEPS = [
  { title: "Infogespräch mit uns", text: "Kontaktiere uns für eine unverbindliche Erstberatung. Wir klären alle Fragen zu Ablauf und Möglichkeiten." },
  { title: "AVGS beantragen", text: "Falls Du noch keinen Gutschein hast: Deine Agentur für Arbeit oder Dein Jobcenter stellt ihn aus, wenn Du die Voraussetzungen erfüllst." },
  { title: "Kostenloses Vorgespräch", text: "Wir finden die passende Coachin oder den passenden Coach für Dich. Im Vorgespräch besprecht Ihr Deine Erwartungen." },
  { title: "Wir übernehmen den Papierkram", text: "Du schickst uns den Gutschein – wir erledigen die gesamte Abwicklung und Korrespondenz mit Agentur oder Jobcenter." },
  { title: "Dein Coaching beginnt", text: "Nach der Bewilligung geht es los. Auch die Abrechnung übernehmen wir. Dir entstehen keine Kosten." },
];

const THEMEN = [
  {
    nr: "01",
    q: "Du weißt nicht, was Du beruflich machen willst?",
    intro:
      "Berufliche Entscheidungen machen wir oft von äußeren Umständen abhängig – Familie, Lebensstandard, Erwartungen. Im Coaching findest Du eine Ausrichtung, die Dir entspricht und Deinem Leben Sinn gibt.",
    points: [
      "Gemeinsam reflektieren wir Deinen Werdegang und finden heraus, was Dir wirklich wichtig ist.",
      "Du entwickelst eine Vision für Deine berufliche Zukunft und erste Schritte, um sie zu erreichen.",
      "Wir setzen klare, realistische Ziele, die Dich motivieren und Dir Orientierung geben.",
    ],
    image: "/images/coaching-5.jpg",
  },
  {
    nr: "02",
    q: "Du fragst Dich, was Du wirklich gut kannst?",
    intro:
      "Viele Menschen wissen nicht genau, welche ihrer Fähigkeiten und Talente sie im Berufsleben am besten einsetzen können. Hier geht es darum, Deine Stärken zu erkennen und zu nutzen.",
    points: [
      "Du erkundest Deine Kernkompetenzen anhand Deiner Erfolge und überwundenen Misserfolge.",
      "Du erforschst, welche Rollen und Aufgaben Dir Energie geben.",
      "Wir erarbeiten, wie Du Deine Stärken im Beruf optimal einsetzt.",
    ],
    image: "/images/coaching-2.jpg",
  },
  {
    nr: "03",
    q: "Du zweifelst an Dir?",
    intro:
      "Unsicherheit ist normal, wenn es um berufliche Veränderung geht. Wir stärken Dein Selbstvertrauen, lösen innere Blockaden und bauen Resilienz auf.",
    points: [
      "Du reflektierst Deine Verhaltens- und Kommunikationsmuster und lernst, auf natürliche Weise zu überzeugen.",
      "Wir arbeiten Rückschläge auf und entwickeln Strategien, aus denen Du gestärkt hervorgehst.",
      "Wir klären, ob Du zusätzliche Qualifikationen brauchst – und wie Du sie erwirbst.",
    ],
    image: "/images/coaching-7.jpg",
  },
  {
    nr: "04",
    q: "Du hast Angst vor Bewerbungen?",
    intro:
      "Der Bewerbungsprozess kann überwältigend sein. Wir geben Deinen Unterlagen den Feinschliff, trainieren Gespräche und begleiten Dich auf Wunsch durch den gesamten Prozess.",
    points: [
      "Gemeinsam werten wir Stellenangebote aus, die zu Deinen Fähigkeiten und Zielen passen.",
      "Deine Bewerbung und Dein Online-Profil werden professionell und überzeugend.",
      "Durch Rollenspiele bereitest Du Dich gezielt auf Gespräche vor – sicher und souverän.",
    ],
    image: "/images/coaching-6.jpg",
  },
];

export default function AvgsCoachingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "AVGS Coaching",
          description:
            "Individuelles 1:1-Jobcoaching für Akademikerinnen und Akademiker, finanziert über den Aktivierungs- und Vermittlungsgutschein (AVGS) der Agentur für Arbeit oder des Jobcenters – zu 100 % kostenfrei.",
          path: "/avgs-coaching",
          serviceType: "Jobcoaching / Karrierecoaching (AVGS-gefördert)",
        })}
      />
      <JsonLd data={faqSchema(FAQS_AVGS, "/avgs-coaching")} />
      <JsonLd data={breadcrumbSchema([{ name: "AVGS Coaching", path: "/avgs-coaching" }])} />
      <PageHero
        eyebrow="AVGS Coaching · Zu 100 % gefördert"
        title={
          <>
            Deine Profis für <em>AVGS Coaching.</em>
          </>
        }
        intro="Wir sind spezialisiert auf Coaching in beruflichen Veränderungssituationen und zertifiziert für Dein AVGS Coaching. Mit langjähriger Erfahrung und maßgeschneidertem Ansatz begleiten wir Akademikerinnen und Akademiker auf dem Weg zu einem Job, der wirklich passt."
        image="/images/coaching-warm.jpg"
      />

      {/* Auf einen Blick (zitierfähig für KI-Suche) */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        <Reveal>
          <FactBox
            question="Was ist AVGS Coaching?"
            answer="AVGS Coaching ist ein individuelles Einzelcoaching zur beruflichen Orientierung, Bewerbung und Karriereentwicklung, das über den Aktivierungs- und Vermittlungsgutschein (AVGS) nach § 45 SGB III finanziert wird. Wer bei der Agentur für Arbeit oder dem Jobcenter arbeitssuchend gemeldet ist, erhält den Gutschein auf Anfrage – das Coaching bei Kuhl & Engel ist damit zu 100 % kostenfrei."
            facts={[
              { label: "Kosten", value: "0 € – vollständig durch den AVGS gedeckt" },
              { label: "Format", value: "1:1-Einzelcoaching, Umfang individuell (mind. 20 UE)" },
              { label: "Orte", value: "Berlin, Potsdam, Augsburg, online oder hybrid" },
              { label: "Team", value: "14 Coachinnen & 1 Coach – auf Wunsch Coaching von Frau zu Frau" },
              { label: "Sprachen", value: "Deutsch, Englisch, Französisch, Russisch" },
              { label: "Start", value: "Kostenloses Erstgespräch, Beginn nach Bewilligung" },
            ]}
          />
        </Reveal>
      </section>

      {/* Themen */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            Deine wichtigsten Fragen
          </p>
          <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
            Der Weg zu Deinem <em>beruflichen Glück.</em>
          </h2>
        </Reveal>

        <div className="mt-16 space-y-20 md:space-y-28">
          {THEMEN.map((thema, i) => (
            <div
              key={thema.nr}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <div>
                  <p className="display text-sm italic text-gold">{thema.nr}</p>
                  <h3 className="display mt-4 text-3xl md:text-4xl">{thema.q}</h3>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">{thema.intro}</p>
                  <p className="eyebrow mt-8 text-ink/45">Das passiert im Coaching</p>
                  <ul className="mt-4 space-y-3.5">
                    {thema.points.map((point) => (
                      <li key={point} className="flex items-start gap-3.5 leading-relaxed text-ink/75">
                        <span aria-hidden className="display mt-0.5 italic text-gold">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={thema.image}
                    alt={thema.q}
                    fill
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Zwischen-Zitat */}
      <section className="on-dark bg-ink py-20 text-cream md:py-24">
        <Reveal>
          <figure className="mx-auto max-w-3xl px-5 text-center md:px-8">
            <blockquote className="display text-2xl italic leading-snug md:text-3xl">
              „Coaching war eine großartige Erfahrung und hat mir jetzt und
              langfristig sehr geholfen. Ich würde Kuhl & Engel jedem empfehlen, der
              professionelles und qualitativ hochwertiges Coaching sucht!“
            </blockquote>
            <figcaption className="eyebrow mt-6 text-gold-bright">Franziska M.</figcaption>
          </figure>
        </Reveal>
      </section>

      {/* AVGS-Gutschein: die 5 Schritte */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            Der AVGS-Gutschein
          </p>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <h2 className="display max-w-2xl text-4xl md:text-5xl">
              Dein Coaching. <em>Vom Staat finanziert.</em>
            </h2>
            <p className="mb-1.5 max-w-sm text-[0.95rem] leading-relaxed text-ink/60">
              Der Aktivierungs- und Vermittlungsgutschein (AVGS) nach § 45 SGB III
              deckt die Kosten zu 100 %. Wir begleiten Dich durch jeden Schritt.
            </p>
          </div>
        </Reveal>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {GUTSCHEIN_STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <li className="border-t-2 border-ink/12 pt-6 transition-colors duration-500 hover:border-gold">
                <span className="display text-sm italic text-gold">Schritt {i + 1}</span>
                <h3 className="display mt-3 text-xl">{step.title}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-ink/60">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={150}>
          <p className="mt-12 text-lg text-ink/70">
            Du hast noch keinen Gutschein?{" "}
            <Link href="/avgs-gutschein-beantragen" className="link-gold font-semibold text-gold">
              So beantragst Du den AVGS bei Agentur für Arbeit oder Jobcenter →
            </Link>
          </p>
        </Reveal>
      </section>

      {/* Buchungsfunnel */}
      <section id="buchen" className="scroll-mt-24 bg-cream-deep py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow flex items-center justify-center gap-3 text-gold">
              <span aria-hidden className="inline-block h-px w-10 bg-gold" />
              In 4 Schritten zum Erstgespräch
              <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            </p>
            <h2 className="display mt-6 text-center text-4xl md:text-5xl">
              Starte Dein <em>AVGS Coaching.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-center leading-relaxed text-ink/65">
              Beantworte vier kurze Fragen – wir melden uns mit dem passenden Coach
              und allen Infos zum Gutschein. Unverbindlich und kostenlos.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-12">
              <BookingFunnel />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="display text-center text-4xl md:text-5xl">
            FAQs zum <em>AVGS Coaching.</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12">
            <Accordion items={FAQS_AVGS} />
          </div>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 text-center text-[0.95rem] text-ink/60">
            Noch unsicher, ob AVGS das Richtige ist?{" "}
            <Link href="/jobcoaching" className="link-gold font-semibold text-gold">
              Zurück zum Jobcoaching-Überblick →
            </Link>
          </p>
        </Reveal>
      </section>

      <CtaBand
        title={
          <>
            Bereit für den ersten Schritt <em>Richtung Traumjob?</em>
          </>
        }
        text="Kontaktiere uns für ein unverbindliches Beratungsgespräch. Unser AVGS Coaching hilft Dir, Deine Stärken optimal zu nutzen und Deine beruflichen Ziele zu erreichen."
      />
    </>
  );
}
