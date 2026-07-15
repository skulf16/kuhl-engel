import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Accordion from "@/components/Accordion";
import FactBox from "@/components/FactBox";
import JsonLd from "@/components/JsonLd";
import { CONTACT, JOBCOACHING_LEISTUNGEN, type Faq } from "@/lib/data";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Jobcoaching – Karrierecoaching für Akademikerinnen und Akademiker",
  description:
    "Jobcoaching bei Kuhl & Engel: systemisches Karrierecoaching für berufliche Orientierung, Bewerbung und Neustart – mit AVGS-Gutschein 100 % kostenfrei. Berlin, Potsdam, Augsburg & online.",
  path: "/jobcoaching",
  image: "/images/coaching-warm.jpg",
  imageAlt: "Coaching-Gespräch bei Kuhl & Engel",
});

const GRUENDE = [
  {
    title: "Nachhaltig & ganzheitlich",
    text: "Wir entwickeln mit Dir eine berufliche Ausrichtung, die Dich langfristig motiviert – nicht die schnelle Notlösung.",
  },
  {
    title: "Empathisch & wertschätzend",
    text: "Zugewandte Coaches, die Deinen Handlungsspielraum mit Dir neu definieren. Immer auf Augenhöhe.",
  },
  {
    title: "Persönlich & individuell",
    text: "Kein Schema F: Du gibst die Richtung an, wir begleiten Dich an Deinen Bedürfnissen ausgerichtet.",
  },
  {
    title: "Professionell & erfahren",
    text: "15+ zertifizierte, systemisch ausgebildete Coaches mit vielseitiger Expertise und langjähriger Erfahrung.",
  },
];

const SZENARIEN = [
  {
    title: "Du willst raus – weißt aber nicht, wohin.",
    text: "Der aktuelle Job trägt nicht mehr, doch keine Stellenanzeige fühlt sich richtig an. Im Coaching findest Du heraus, was Dir wirklich wichtig ist – und welche Wege dazu passen.",
  },
  {
    title: "Deine Bewerbungen bleiben unbeantwortet.",
    text: "Starke Qualifikation, wenig Resonanz: Gemeinsam schärfen wir Deine Positionierung, Deine Unterlagen und Deine Strategie – bis die Einladungen kommen.",
  },
  {
    title: "Du willst nach der Elternzeit neu ansetzen.",
    text: "Zurück ja – aber nicht zurück in den alten Trott. Wir klären, wie ein Wiedereinstieg aussieht, der zu Deinem Leben von heute passt.",
  },
  {
    title: "Nach Studium oder Promotion fehlt der rote Faden.",
    text: "Hochqualifiziert, aber der Arbeitsmarkt wirkt unübersichtlich? Wir übersetzen Deine Fähigkeiten in konkrete berufliche Richtungen.",
  },
  {
    title: "Im Vorstellungsgespräch bleibst Du unter Deinem Wert.",
    text: "Du kannst mehr, als Du zeigst. Wir arbeiten an Auftreten, Selbstsicherheit und dem Umgang mit schwierigen Fragen – bis Du überzeugst, ohne Dich zu verbiegen.",
  },
  {
    title: "Die Arbeitslosigkeit nagt am Selbstvertrauen.",
    text: "Je länger die Suche, desto lauter die Zweifel. Im Coaching gewinnst Du Struktur, Zuversicht und einen Plan, der Dich wieder in Bewegung bringt.",
  },
];

const PAKETE = [
  {
    ue: "24 UE",
    dauer: "6 Wochen",
    name: "Kompakt",
    text: "Für ein klar umrissenes Anliegen – zum Beispiel Bewerbungsstrategie, Unterlagen und Vorstellungsgespräche.",
  },
  {
    ue: "32 UE",
    dauer: "8 Wochen",
    name: "Ausgewogen",
    text: "Standortbestimmung, neue Richtung und Umsetzung in einem Prozess – mit genug Raum für beides.",
  },
  {
    ue: "44 UE",
    dauer: "11 Wochen",
    name: "Intensiv",
    text: "Für den kompletten Neustart: tiefe Standortbestimmung, Neuausrichtung und Begleitung bis zum Ziel.",
  },
];

const FAQS_JOBCOACHING: Faq[] = [
  {
    q: "Was kostet ein Jobcoaching?",
    a: "Mit einem AVGS-Gutschein (Aktivierungs- und Vermittlungsgutschein) der Agentur für Arbeit oder des Jobcenters ist das Jobcoaching bei Kuhl & Engel zu 100 % kostenfrei – wir rechnen direkt mit der Behörde ab. Auch das Erstgespräch kostet nichts. Ohne Gutschein finden wir im kostenlosen Erstgespräch eine individuelle Lösung.",
  },
  {
    q: "Was macht ein Jobcoach genau?",
    a: "Ein Jobcoach begleitet Dich im 1:1 durch berufliche Veränderung: Standortbestimmung, Klarheit über Stärken und Werte, Bewerbungsstrategie, Vorstellungsgespräche und Entscheidungen. Anders als eine Beratung gibt Dir ein Coach keine fertigen Antworten vor, sondern führt Dich mit Methoden, Struktur und Feedback zu Deinen eigenen – die deshalb auch langfristig tragen.",
  },
  {
    q: "Wie lange dauert ein Jobcoaching?",
    a: "Bei Kuhl & Engel gibt es drei Umfänge: 24 Unterrichtseinheiten in 6 Wochen, 32 UE in 8 Wochen oder 44 UE in 11 Wochen (1 UE = 45 Minuten). Welcher Umfang zu Deinem Anliegen passt, klären wir im kostenlosen Erstgespräch – bewilligt wird er über Deinen AVGS.",
  },
  {
    q: "Wer bezahlt das Jobcoaching?",
    a: "In den meisten Fällen die Agentur für Arbeit oder das Jobcenter – über den AVGS-Gutschein nach § 45 SGB III. Die Kostenübernahme ist vollständig, es gibt keinen Eigenanteil. Wie Du den Gutschein bekommst, erklären wir Schritt für Schritt in unserem AVGS-Ratgeber.",
  },
  {
    q: "Für wen ist Jobcoaching sinnvoll?",
    a: "Für alle, die beruflich in einer Veränderungssituation stecken: Arbeitslose und Arbeitssuchende, Wiedereinsteigerinnen nach der Elternzeit, Absolventinnen und Promovierte auf Richtungssuche, Fach- und Führungskräfte vor dem nächsten Schritt. Wir sind auf Akademikerinnen und Akademiker spezialisiert – entscheidend ist aber Dein Anliegen, nicht Dein Titel.",
  },
  {
    q: "Was ist der Unterschied zwischen Jobcoaching und Bewerbungstraining?",
    a: "Ein Bewerbungstraining übt Unterlagen und Gespräche. Jobcoaching setzt früher an: Erst klären wir, wohin Du überhaupt willst und was Dich ausmacht – dann folgen Strategie und Bewerbung. Die Bewerbungsthemen sind also ein Teil des Coachings, nicht das Ganze.",
  },
  {
    q: "Ist Jobcoaching auch online möglich?",
    a: "Ja. Du kannst komplett online via Zoom gecoacht werden, vor Ort in Berlin, Potsdam oder Augsburg – oder hybrid als Kombination aus beidem. Die Wirkung ist dieselbe, entscheidend ist die Beziehung zu Deiner Coachin.",
  },
];

export default function JobcoachingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Jobcoaching",
          description:
            "Systemisches Jobcoaching und Karrierecoaching für Akademikerinnen und Akademiker, Fach- und Führungskräfte: berufliche Orientierung, Bewerbung und Neustart – mit AVGS-Gutschein förderfähig.",
          path: "/jobcoaching",
          serviceType: "Jobcoaching / Karrierecoaching",
        })}
      />
      <JsonLd data={faqSchema(FAQS_JOBCOACHING, "/jobcoaching")} />
      <JsonLd data={breadcrumbSchema([{ name: "Jobcoaching", path: "/jobcoaching" }])} />

      <PageHero
        eyebrow="Jobcoaching · Für Erwachsene"
        title={
          <>
            Jobcoaching, das <em>wirklich weiterbringt.</em>
          </>
        }
        intro="Ob berufliche Orientierung, der nächste Karriereschritt oder ein kompletter Neustart: Als AVGS-zertifizierte Jobcoaches begleiten wir Dich dabei, eine Tätigkeit zu finden, die zu Dir passt – und Dir langfristig gefällt. Mit AVGS-Gutschein für Dich vollständig kostenfrei."
        image="/images/coaching-warm.jpg"
      />

      {/* Auf einen Blick */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        <Reveal>
          <FactBox
            question="Was ist Jobcoaching?"
            answer="Jobcoaching ist eine individuelle 1:1-Begleitung rund um Beruf und Karriere – von der beruflichen Orientierung über die Bewerbung bis zum Neustart. Bei Kuhl & Engel arbeiten wir systemisch und ganzheitlich und sind auf Akademikerinnen und Akademiker, Fach- und Führungskräfte spezialisiert: seit 2018, mit 246 AVGS-Coachings und über 6.500 Unterrichtseinheiten seit 2022. Über den AVGS-Gutschein der Agentur für Arbeit ist das Coaching für Dich zu 100 % kostenfrei."
            facts={[
              { label: "Für wen", value: "Jobsuchende, Akademikerinnen und Akademiker, Fach- & Führungskräfte" },
              { label: "Themen", value: "Orientierung, Bewerbung, Karriere, Neustart" },
              { label: "Umfang", value: "24, 32 oder 44 UE in 6–11 Wochen (1 UE = 45 Min.)" },
              { label: "Kosten", value: "Mit AVGS-Gutschein 0 €" },
              { label: "Orte", value: "Berlin, Potsdam, Augsburg, online oder hybrid" },
            ]}
          />
        </Reveal>
      </section>

      {/* Wozu brauche ich ein Jobcoaching? */}
      <section className="mx-auto max-w-7xl px-5 pt-24 md:px-8 md:pt-32">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            Wozu brauche ich das?
          </p>
          <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
            Sechs Situationen, in denen Jobcoaching <em>den Unterschied macht.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            Ein Jobcoaching brauchst Du nicht, weil mit Dir etwas nicht stimmt –
            sondern weil berufliche Veränderung allein schwer ist. Erkennst Du
            Dich in einer dieser Situationen wieder?
          </p>
        </Reveal>
        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {SZENARIEN.map((szenario, i) => (
            <Reveal key={szenario.title} delay={(i % 3) * 100}>
              <div className="border-t border-ink/10 pt-6">
                <h3 className="display text-xl md:text-2xl">{szenario.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{szenario.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Die Angebote (Pillar → Detail) */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            Unsere Jobcoaching-Angebote
          </p>
          <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
            Ein Ziel – <em>vier Wege dorthin.</em>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {JOBCOACHING_LEISTUNGEN.map((item, i) => (
            <Reveal key={item.slug} delay={i * 120} className="h-full">
              <Link
                href={item.slug}
                className="group flex h-full flex-col overflow-hidden border border-ink/10 bg-paper transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-28px_rgba(14,29,43,0.35)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
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

      {/* Ablauf & Umfang */}
      <section className="bg-cream-deep py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span aria-hidden className="inline-block h-px w-10 bg-gold" />
              Ablauf & Umfang
            </p>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
              <h2 className="display max-w-2xl text-4xl md:text-5xl">
                So läuft Dein Jobcoaching <em>ab.</em>
              </h2>
              <p className="mb-1.5 max-w-sm text-[0.95rem] leading-relaxed text-ink/60">
                Alle Termine finden 1:1 statt – vor Ort in Berlin, Potsdam oder
                Augsburg, online via Zoom oder hybrid. Eine Unterrichtseinheit
                (UE) dauert 45 Minuten.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PAKETE.map((paket, i) => (
              <Reveal key={paket.name} delay={i * 100} className="h-full">
                <div className="flex h-full flex-col border border-ink/10 bg-cream p-8 md:p-9">
                  <p className="eyebrow text-gold">{paket.name}</p>
                  <p className="display mt-4 text-4xl md:text-5xl">
                    {paket.ue}
                    <span className="ml-3 text-lg italic text-ink/50">in {paket.dauer}</span>
                  </p>
                  <p className="mt-4 grow leading-relaxed text-ink/70">{paket.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-ink/70">
              Welcher Umfang zu Deinem Anliegen passt, klären wir im kostenlosen
              Erstgespräch – bewilligt wird er über Deinen{" "}
              <Link href="/avgs-gutschein-beantragen" className="link-gold font-semibold text-gold">
                AVGS-Gutschein
              </Link>
              . Den Papierkram mit Agentur oder Jobcenter übernehmen wir.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gründe (dunkel) */}
      <section className="on-dark bg-ink py-24 text-cream md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold-bright">
              <span aria-hidden className="inline-block h-px w-10 bg-gold-bright" />
              Warum Kuhl & Engel
            </p>
            <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
              Gute Gründe, mit uns zu <em>arbeiten.</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden border border-cream/12 bg-cream/12 sm:grid-cols-2">
            {GRUENDE.map((grund, i) => (
              <Reveal key={grund.title} delay={i * 100} className="h-full">
                <div className="h-full bg-ink p-9 md:p-11">
                  <span className="display text-4xl italic text-gold-bright/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display mt-5 text-2xl">{grund.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-cream/65">{grund.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="/avgs-coaching"
                className="group inline-flex items-center gap-3 bg-cream px-8 py-4 font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-bright"
              >
                AVGS Coaching starten
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <a href={CONTACT.phoneHref} className="font-semibold text-cream/80 transition-colors hover:text-gold-bright">
                oder ruf an: {CONTACT.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Methodik & Abgrenzung */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span aria-hidden className="inline-block h-px w-10 bg-gold" />
              Unsere Methode
            </p>
            <h2 className="display mt-6 text-3xl md:text-4xl">
              Systemisch heißt: Wir schauen <em>aufs Ganze.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Dein Beruf ist kein isoliertes Thema. Er hängt mit Deinen Werten
              zusammen, mit Deiner Lebenssituation, mit den Erwartungen von
              Familie und Umfeld – und mit Glaubenssätzen, die Du oft gar nicht
              bemerkst. Systemisches Coaching bezieht dieses ganze System ein,
              statt nur am Lebenslauf zu polieren.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Das Ergebnis sind keine schnellen Notlösungen, sondern
              Entscheidungen, die von Dir selbst kommen – und deshalb auch dann
              noch tragen, wenn das Coaching längst abgeschlossen ist.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span aria-hidden className="inline-block h-px w-10 bg-gold" />
              Gut zu wissen
            </p>
            <h2 className="display mt-6 text-3xl md:text-4xl">
              Coaching, Beratung <em>oder Therapie?</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Eine Karriereberatung gibt Dir Empfehlungen von außen. Ein
              Jobcoaching entwickelt Deine eigenen Antworten – mit Methoden,
              Struktur und ehrlichem Feedback. Beides hat seinen Platz; wenn Du
              nachhaltige Klarheit suchst, ist Coaching der wirksamere Weg.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Und: Jobcoaching ist keine Psychotherapie. Es richtet sich an
              gesunde Menschen in beruflichen Veränderungssituationen. Sollte
              im Prozess mehr sichtbar werden, sprechen wir das offen an –
              mehrere unserer Coachinnen sind zusätzlich Heilpraktikerinnen
              für Psychotherapie und kennen die Grenze genau.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 pb-24 md:px-8 md:pb-32">
        <Reveal>
          <h2 className="display text-center text-4xl md:text-5xl">
            Häufige Fragen zum <em>Jobcoaching.</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12">
            <Accordion items={FAQS_JOBCOACHING} />
          </div>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-10 text-center text-lg text-ink/70">
            Noch keinen Gutschein?{" "}
            <Link href="/avgs-gutschein-beantragen" className="link-gold font-semibold text-gold">
              So beantragst Du den AVGS →
            </Link>
          </p>
        </Reveal>
      </section>

      <CtaBand
        title={
          <>
            Stell Dir eine Arbeit vor, die <em>zu Dir passt.</em>
          </>
        }
        text="Klingt weltfremd? Wir sind überzeugt: Das geht. Lerne uns in einem kostenlosen Erstgespräch kennen."
      />
    </>
  );
}
