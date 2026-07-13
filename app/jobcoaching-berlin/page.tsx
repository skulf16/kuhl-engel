import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Accordion from "@/components/Accordion";
import FactBox from "@/components/FactBox";
import JsonLd from "@/components/JsonLd";
import { FOUNDERS, TEAM, TESTIMONIALS, type Faq } from "@/lib/data";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Jobcoaching Berlin – AVGS Coaching in Prenzlauer Berg",
  description:
    "Jobcoaching Berlin: AVGS Coaching und Karrierecoaching für Akademikerinnen und Akademiker in der Bötzowstraße 28, Prenzlauer Berg – mit AVGS-Gutschein 100 % kostenfrei. AZAV-zertifiziert, auch online oder hybrid.",
  path: "/jobcoaching-berlin",
  image: "/images/standort-berlin.jpg",
  imageAlt: "Standort von Kuhl & Engel in der Bötzowstraße 28, Berlin-Prenzlauer Berg",
});

const FAQS_BERLIN: Faq[] = [
  {
    q: "Wo findet das Jobcoaching in Berlin statt?",
    a: "Unser Berliner Standort liegt in der Bötzowstraße 28, 10407 Berlin – im ruhigen Bötzowviertel in Prenzlauer Berg, wenige Minuten vom Volkspark Friedrichshain. Alternativ coachen wir Dich online oder hybrid.",
  },
  {
    q: "Was kostet ein Jobcoaching in Berlin?",
    a: "Mit einem AVGS-Gutschein (Aktivierungs- und Vermittlungsgutschein) der Agentur für Arbeit oder des Jobcenters ist das Jobcoaching bei Kuhl & Engel zu 100 % kostenfrei – die Förderung deckt alle Kosten ab. Auch das Erstgespräch kostet nichts. Ohne Gutschein finden wir im kostenlosen Erstgespräch eine individuelle Lösung.",
  },
  {
    q: "Kann ich meinen AVGS-Gutschein in Berlin einlösen?",
    a: "Ja. Kuhl & Engel ist AZAV-zertifizierter Träger, Du kannst Deinen Aktivierungs- und Vermittlungsgutschein direkt an unserem Berliner Standort einlösen. Der Gutschein muss noch mindestens 10 Tage gültig sein, mindestens 20 Unterrichtseinheiten umfassen und in Teilzeit ausgestellt sein – das Coaching ist dann für Dich kostenfrei.",
  },
  {
    q: "Was genau macht ein Jobcoach?",
    a: "Ein Jobcoach begleitet Dich im 1:1 bei beruflicher Orientierung, Bewerbungsstrategie, Vorstellungsgesprächen und Karriereentscheidungen. Bei Kuhl & Engel arbeiten alle Coaches systemisch: Statt fertiger Rezepte entwickelst Du Klarheit über Deine Stärken, Werte und Ziele – und einen konkreten Plan für Deinen nächsten beruflichen Schritt.",
  },
  {
    q: "Wie finde ich einen seriösen Jobcoach in Berlin?",
    a: "Achte auf drei Dinge: eine AZAV-Zertifizierung des Trägers (Voraussetzung, um AVGS-Gutscheine annehmen zu dürfen), eine fundierte, zertifizierte Coaching-Ausbildung und ein kostenloses Erstgespräch, in dem Du prüfst, ob die Chemie stimmt. Kuhl & Engel erfüllt alle drei Kriterien – und wenn es doch nicht passt, wechselst Du einfach die Coachin.",
  },
  {
    q: "Ist Kuhl & Engel dasselbe wie das „Berliner JobCoaching“ des Senats?",
    a: "Nein. Das „Berliner JobCoaching (BJC)“ ist ein Programm der Senatsverwaltung für Teilnehmende öffentlich geförderter Beschäftigungsmaßnahmen. Kuhl & Engel ist ein unabhängiger, AZAV-zertifizierter Träger: Unser AVGS-Jobcoaching ist ein individuelles 1:1-Karrierecoaching für Akademikerinnen und Akademiker – finanziert über den AVGS-Gutschein Deiner Agentur für Arbeit oder Deines Jobcenters.",
  },
  {
    q: "Welche Coaches arbeiten in Berlin?",
    a: "In Berlin coachen unter anderem Gründerin Heike Kuhl, Angelina Werner und Carmen Pilger – alle systemisch ausgebildet und zertifiziert. Carmen Pilger coacht auch auf Englisch. Gemeinsam finden wir die Person, die am besten zu Dir und Deinem Thema passt.",
  },
  {
    q: "Geht das Jobcoaching auch auf Englisch?",
    a: "Ja. In Berlin coacht Carmen Pilger auch auf Englisch, online zusätzlich Saskia Sattler (Englisch), Matthias Fink (Englisch, Französisch) und Dr. Anna Mandel-Zakharova (Englisch, Russisch).",
  },
];

const COACHES_BERLIN = [
  FOUNDERS[0],
  ...TEAM.filter((m) => m.role.startsWith("Berlin")),
];

const LEISTUNGEN = [
  { href: "/avgs-coaching", label: "AVGS Coaching", note: "Mit Gutschein 100 % kostenfrei" },
  { href: "/coaching-fuer-frauen", label: "Coaching für Frauen", note: "Von Frau zu Frau – 14 Coachinnen" },
  { href: "/jobcoaching", label: "Karriere- & Bewerbungscoaching", note: "Orientierung, Bewerbung, Neustart" },
  { href: "/avgs-gutschein-beantragen", label: "AVGS-Gutschein beantragen", note: "Schritt für Schritt zur Förderung" },
];

export default function JobcoachingBerlinPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Jobcoaching Berlin",
          description:
            "AVGS Coaching und Karrierecoaching für Akademikerinnen und Akademiker in Berlin-Prenzlauer Berg (Bötzowstraße 28) – systemisch, individuell und mit AVGS-Gutschein zu 100 % kostenfrei.",
          path: "/jobcoaching-berlin",
          serviceType: "Jobcoaching / AVGS Coaching",
          areaServed: ["Berlin"],
          avgsFree: true,
        })}
      />
      <JsonLd data={faqSchema(FAQS_BERLIN, "/jobcoaching-berlin")} />
      <JsonLd data={breadcrumbSchema([{ name: "Jobcoaching Berlin", path: "/jobcoaching-berlin" }])} />

      <PageHero
        eyebrow="Standort Berlin · Prenzlauer Berg"
        title={
          <>
            Jobcoaching in Berlin – <em>mitten im Bötzowviertel.</em>
          </>
        }
        intro="AVGS Coaching, Karrierecoaching und berufliche Neuorientierung in der Bötzowstraße 28, wenige Minuten vom Volkspark Friedrichshain – oder online, ganz wie es zu Dir passt."
        image="/images/standort-berlin.jpg"
      />

      {/* Auf einen Blick */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        <Reveal>
          <FactBox
            question="Wo finde ich Jobcoaching in Berlin?"
            answer="Kuhl & Engel bietet AVGS-gefördertes Jobcoaching in Berlin-Prenzlauer Berg an: Bötzowstraße 28, 10407 Berlin. Das Einzelcoaching richtet sich an Akademikerinnen und Akademiker, Fach- und Führungskräfte und ist mit einem AVGS-Gutschein der Agentur für Arbeit oder des Jobcenters zu 100 % kostenfrei. Termine gibt es vor Ort, online oder hybrid."
            facts={[
              { label: "Adresse", value: "Bötzowstraße 28, 10407 Berlin (Prenzlauer Berg)" },
              { label: "Kosten", value: "Mit AVGS-Gutschein 0 €" },
              { label: "Telefon", value: "030 51565388-0" },
              { label: "Formate", value: "Vor Ort, online oder hybrid" },
            ]}
          />
        </Reveal>
      </section>

      {/* Leistungen am Standort */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
                Angebote in Berlin
              </p>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                Alles, was Deine Karriere <em>weiterbringt.</em>
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
                Vom geförderten AVGS Coaching über Bewerbungs- und
                Karrierecoaching bis zum Wiedereinstieg nach der Elternzeit:
                Am Berliner Standort steht Dir unser komplettes Angebot offen –
                begleitet von systemisch ausgebildeten, zertifizierten
                Coachinnen und Coaches.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <ul className="mt-10 border-t border-ink/10">
                {LEISTUNGEN.map((leistung, i) => (
                  <li key={leistung.href}>
                    <Link
                      href={leistung.href}
                      className="group flex items-baseline justify-between gap-6 border-b border-ink/10 py-5 transition-colors hover:bg-paper"
                    >
                      <span className="flex items-baseline gap-5">
                        <span className="display w-8 shrink-0 text-sm italic text-gold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>
                          <span className="display block text-xl transition-colors group-hover:text-gold md:text-2xl">
                            {leistung.label}
                          </span>
                          <span className="mt-1 block text-[0.85rem] text-ink/55">{leistung.note}</span>
                        </span>
                      </span>
                      <span aria-hidden className="text-gold opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/standort-berlin.jpg"
                  alt="Standort von Kuhl & Engel in der Bötzowstraße 28, Berlin-Prenzlauer Berg"
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 left-6 bg-ink px-6 py-4 text-cream">
                <p className="display text-base italic text-gold-bright">Bötzowstraße 28</p>
                <p className="mt-0.5 text-[0.8rem] text-cream/70">10407 Berlin · Prenzlauer Berg</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Coaches vor Ort */}
      <section className="bg-cream-deep py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span aria-hidden className="inline-block h-px w-10 bg-gold" />
              Dein Team in Berlin
            </p>
            <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
              Diese Coaches begleiten Dich <em>vor Ort.</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {COACHES_BERLIN.map((member, i) => (
              <Reveal key={member.name} delay={i * 100}>
                <article className="group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="display mt-5 text-xl transition-colors group-hover:text-gold md:text-2xl">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-ink/55">{member.quali}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <p className="mt-10 text-[0.95rem] text-ink/60">
              Das komplette Team mit allen Schwerpunkten findest Du{" "}
              <Link href="/ueber-uns#team" className="link-gold font-semibold text-gold">
                hier →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Anfahrt & Abgrenzung */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span aria-hidden className="inline-block h-px w-10 bg-gold" />
              Anfahrt
            </p>
            <h2 className="display mt-6 text-3xl md:text-4xl">
              Aus allen Berliner Bezirken <em>gut erreichbar.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Das Bötzowviertel liegt wenige Minuten vom Volkspark
              Friedrichshain: Die Tram M10 (Haltestelle Arnswalder Platz) hält
              um die Ecke, der S-Bahnhof Greifswalder Straße ist fußläufig
              erreichbar. Unsere Klientinnen und Klienten kommen aus Prenzlauer
              Berg, Pankow, Mitte, Friedrichshain-Kreuzberg, Lichtenberg – und
              aus dem gesamten Stadtgebiet. Wer sich den Weg sparen möchte,
              nimmt Termine online oder hybrid wahr.
            </p>
            <blockquote className="mt-10 border-l-2 border-gold pl-6">
              <p className="display text-lg italic leading-relaxed text-ink/80">
                „{TESTIMONIALS[3].quote}“
              </p>
              <footer className="mt-4 text-[0.85rem] text-ink/55">
                {TESTIMONIALS[3].author} · {TESTIMONIALS[3].meta}
              </footer>
            </blockquote>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span aria-hidden className="inline-block h-px w-10 bg-gold" />
              Gut zu wissen
            </p>
            <h2 className="display mt-6 text-3xl md:text-4xl">
              Kuhl & Engel oder <em>„Berliner JobCoaching“?</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Das „Berliner JobCoaching (BJC)“ der Senatsverwaltung richtet
              sich an Teilnehmende öffentlich geförderter
              Beschäftigungsmaßnahmen. Unser Angebot ist davon unabhängig:
              Kuhl & Engel ist ein privater, AZAV-zertifizierter Träger für
              AVGS-Jobcoaching – individuelles 1:1-Karrierecoaching für
              Akademikerinnen und Akademiker, Fach- und Führungskräfte. Mit
              einem AVGS-Gutschein der Agentur für Arbeit oder des Jobcenters
              ist es für Dich zu 100 % kostenfrei.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Du hast noch keinen Gutschein?{" "}
              <Link href="/avgs-gutschein-beantragen" className="link-gold font-semibold text-gold">
                So beantragst Du den AVGS →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="display text-center text-4xl md:text-5xl">
            Häufige Fragen zum <em>Jobcoaching in Berlin.</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12">
            <Accordion items={FAQS_BERLIN} />
          </div>
        </Reveal>
      </section>

      <CtaBand
        title={
          <>
            Lerne uns in Berlin <em>persönlich kennen.</em>
          </>
        }
        text="Vereinbare ein kostenloses Erstgespräch – in der Bötzowstraße, telefonisch oder online."
      />
    </>
  );
}
