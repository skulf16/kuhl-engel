import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Accordion from "@/components/Accordion";
import FactBox from "@/components/FactBox";
import JsonLd from "@/components/JsonLd";
import { TEAM, type Faq } from "@/lib/data";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Jobcoaching Augsburg – AVGS Coaching in der Altstadt",
  description:
    "Jobcoaching und AVGS Coaching in Augsburg: systemisches Karrierecoaching für Akademiker:innen am Mauerberg 26, mitten in der Altstadt – mit AVGS-Gutschein 100 % kostenfrei. Auch online.",
  path: "/jobcoaching-augsburg",
  image: "/images/ke-augsburg-einzel.jpg",
  imageAlt: "Coaching-Raum von Kuhl & Engel am Mauerberg 26, Augsburg",
});

const FAQS_AUGSBURG: Faq[] = [
  {
    q: "Wo findet das Jobcoaching in Augsburg statt?",
    a: "Unser Augsburger Standort liegt am Mauerberg 26, 86152 Augsburg – mitten in der Altstadt. Alternativ coachen wir Dich online oder hybrid.",
  },
  {
    q: "Kann ich meinen AVGS-Gutschein in Augsburg einlösen?",
    a: "Ja. Kuhl & Engel ist AZAV-zertifizierter Träger, Du kannst Deinen Aktivierungs- und Vermittlungsgutschein direkt in Augsburg einlösen. Der Gutschein muss noch mindestens 10 Tage gültig sein, mindestens 20 Unterrichtseinheiten umfassen und in Teilzeit ausgestellt sein – das Coaching ist dann für Dich kostenfrei.",
  },
  {
    q: "Wer coacht in Augsburg?",
    a: "In Augsburg coacht Matthias Fink – systemisch-integrativer Coach, auf Wunsch auch auf Englisch oder Französisch. Online steht Dir zusätzlich das gesamte Team von Kuhl & Engel offen.",
  },
  {
    q: "Ich wohne in Bayern außerhalb Augsburgs – geht das trotzdem?",
    a: "Ja. Viele unserer Klient:innen kombinieren Termine vor Ort mit Online-Sitzungen via Zoom (hybrid) oder lassen sich komplett digital coachen. So funktioniert das Coaching unabhängig vom Wohnort.",
  },
  {
    q: "Was kostet ein Jobcoaching in Augsburg?",
    a: "Mit einem AVGS-Gutschein (Aktivierungs- und Vermittlungsgutschein) der Agentur für Arbeit oder des Jobcenters ist das Jobcoaching bei Kuhl & Engel zu 100 % kostenfrei – die Förderung deckt alle Kosten ab. Auch das Erstgespräch kostet nichts.",
  },
];

// Heike und Martina coachen selbst nicht im AVGS-Standortbetrieb
// (Kundenvorgabe 18.08.2026) – hier nur die Coach:innen vor Ort.
const COACHES_AUGSBURG = TEAM.filter((m) => m.role.startsWith("Augsburg"));

const LEISTUNGEN = [
  { href: "/avgs-coaching", label: "AVGS Coaching", note: "Mit Gutschein 100 % kostenfrei" },
  { href: "/karrierecoaching", label: "Karrierecoaching", note: "Für Selbstzahler:innen & Unternehmen" },
  { href: "/jobcoaching", label: "Karriere- & Bewerbungscoaching", note: "Orientierung, Bewerbung, Neustart" },
  { href: "/avgs-gutschein-beantragen", label: "AVGS-Gutschein beantragen", note: "Schritt für Schritt zur Förderung" },
];

export default function JobcoachingAugsburgPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Jobcoaching Augsburg",
          description:
            "AVGS Coaching und Karrierecoaching für Akademiker:innen in der Augsburger Altstadt (Mauerberg 26) – systemisch, individuell und mit AVGS-Gutschein zu 100 % kostenfrei.",
          path: "/jobcoaching-augsburg",
          serviceType: "Jobcoaching / AVGS Coaching",
          areaServed: ["Augsburg", "Bayern"],
          avgsFree: true,
        })}
      />
      <JsonLd data={faqSchema(FAQS_AUGSBURG, "/jobcoaching-augsburg")} />
      <JsonLd data={breadcrumbSchema([{ name: "Jobcoaching Augsburg", path: "/jobcoaching-augsburg" }])} />

      <PageHero
        eyebrow="Standort Augsburg · Altstadt"
        title={
          <>
            Jobcoaching in Augsburg – <em>mitten in der Altstadt.</em>
          </>
        }
        intro="AVGS Coaching und berufliche Neuorientierung am Mauerberg 26, im Herzen der Augsburger Altstadt – oder online, ganz wie es zu Dir passt."
        image="/images/ke-augsburg-einzel.jpg"
      />

      {/* Auf einen Blick */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        <Reveal>
          <FactBox
            question="Wo finde ich Jobcoaching in Augsburg?"
            answer="Kuhl & Engel bietet AVGS-gefördertes Jobcoaching in der Augsburger Altstadt an: Mauerberg 26, 86152 Augsburg. Das Einzelcoaching richtet sich an Akademiker:innen, Fach- und Führungskräfte und ist mit einem AVGS-Gutschein der Agentur für Arbeit oder des Jobcenters zu 100 % kostenfrei. Termine gibt es vor Ort, online oder hybrid."
            facts={[
              { label: "Adresse", value: "Mauerberg 26, 86152 Augsburg (Altstadt)" },
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
                Angebote in Augsburg
              </p>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                Karrierecoaching für Augsburg <em>und Bayern.</em>
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
                Ob Neuorientierung, der nächste Karriereschritt oder der
                Wiedereinstieg: In Augsburg begleitet Dich ein systemisch
                ausgebildeter Coach – auf Wunsch auch hybrid mit
                Online-Terminen.
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
            <div className="grid gap-6">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/ke-augsburg-einzel.jpg"
                    alt="Coaching-Raum am Standort Augsburg mit zwei Sesseln"
                    fill
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-6 left-6 bg-ink px-6 py-4 text-cream">
                  <p className="display text-base italic text-gold-bright">Mauerberg 26</p>
                  <p className="mt-0.5 text-[0.8rem] text-cream/70">86152 Augsburg · Altstadt</p>
                </div>
              </div>
              <figure className="mt-8">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/ke-augsburg-gruppe.jpg"
                    alt="Gruppenraum mit Stuhlkreis und Flipchart am Standort Augsburg"
                    fill
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <figcaption className="mt-3 text-[0.85rem] text-ink/55">
                  Unser Gruppenraum in Augsburg
                </figcaption>
              </figure>
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
              Dein Team in Augsburg
            </p>
            <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
              Dein Coach <em>vor Ort.</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {COACHES_AUGSBURG.map((member, i) => (
              <Reveal key={member.name} delay={(i % 3) * 100}>
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
              Online begleitet Dich auf Wunsch das gesamte Team –{" "}
              <Link href="/ueber-uns#team" className="link-gold font-semibold text-gold">
                alle Coach:innen kennenlernen →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="display text-center text-4xl md:text-5xl">
            Häufige Fragen zum <em>Jobcoaching in Augsburg.</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12">
            <Accordion items={FAQS_AUGSBURG} />
          </div>
        </Reveal>
      </section>

      <CtaBand
        title={
          <>
            Starte Dein Coaching <em>in Augsburg.</em>
          </>
        }
        text="Lern uns in einem kostenlosen Erstgespräch kennen – vor Ort am Mauerberg, online oder hybrid."
      />

      <div className="bg-cream-deep py-6 text-center">
        <Link href="/ueber-uns#standorte" className="link-gold text-sm font-semibold text-gold">
          ← Alle Standorte ansehen
        </Link>
      </div>
    </>
  );
}
