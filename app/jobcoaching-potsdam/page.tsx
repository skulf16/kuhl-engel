import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Jobcoaching Potsdam – AVGS Coaching in der Innenstadt",
  description:
    "Jobcoaching und AVGS Coaching in Potsdam: systemisches Karrierecoaching für Akademiker:innen in der Gutenbergstraße 87, nahe Holländisches Viertel – mit AVGS-Gutschein 100 % kostenfrei. Auch online.",
  alternates: { canonical: "/jobcoaching-potsdam" },
};

const FAQS_POTSDAM: Faq[] = [
  {
    q: "Wo findet das Jobcoaching in Potsdam statt?",
    a: "Unser Potsdamer Standort liegt in der Gutenbergstraße 87, 14467 Potsdam – zentral in der nördlichen Innenstadt, nur wenige Gehminuten vom Holländischen Viertel. Alternativ coachen wir Dich online oder hybrid.",
  },
  {
    q: "Kann ich meinen AVGS-Gutschein in Potsdam einlösen?",
    a: "Ja. Kuhl & Engel ist AZAV-zertifizierter Träger, Du kannst Deinen Aktivierungs- und Vermittlungsgutschein direkt in Potsdam einlösen. Der Gutschein muss noch mindestens 10 Tage gültig sein, mindestens 20 Unterrichtseinheiten umfassen und in Teilzeit ausgestellt sein – das Coaching ist dann für Dich kostenfrei.",
  },
  {
    q: "Welche Coaches arbeiten in Potsdam?",
    a: "In Potsdam coachen unter anderem Gründerin Martina Engel-Fürstberger, Bettina Brammer, Grit Staroste, Wanda Wolff und Dr. Anna Mandel-Zakharova – alle systemisch ausgebildet und zertifiziert. Dr. Mandel-Zakharova coacht auch auf Englisch und Russisch.",
  },
  {
    q: "Ich wohne in Brandenburg außerhalb Potsdams – geht das trotzdem?",
    a: "Ja. Viele unserer Klient:innen kombinieren Termine vor Ort mit Online-Sitzungen via Zoom (hybrid) oder lassen sich komplett digital coachen. So funktioniert das Coaching unabhängig vom Wohnort.",
  },
];

const COACHES_POTSDAM = [
  FOUNDERS[1],
  ...TEAM.filter((m) => m.role.startsWith("Potsdam")),
];

const LEISTUNGEN = [
  { href: "/avgs-coaching", label: "AVGS Coaching", note: "Mit Gutschein 100 % kostenfrei" },
  { href: "/neuorientierung", label: "Berufliche Neuorientierung", note: "Für Ein-, Um- und Aussteiger:innen" },
  { href: "/fuehrungskraefte", label: "Coaching für Führungskräfte", note: "Diskret und individuell" },
  { href: "/weiterbildungen", label: "Weiterbildungen", note: "Für Coaches und Berater:innen" },
];

export default function JobcoachingPotsdamPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Jobcoaching Potsdam",
          description:
            "AVGS Coaching und Karrierecoaching für Akademiker:innen in Potsdam (Gutenbergstraße 87, nördliche Innenstadt) – systemisch, individuell und mit AVGS-Gutschein zu 100 % kostenfrei.",
          path: "/jobcoaching-potsdam",
          serviceType: "Jobcoaching / AVGS Coaching",
          areaServed: ["Potsdam", "Brandenburg"],
        })}
      />
      <JsonLd data={faqSchema(FAQS_POTSDAM, "/jobcoaching-potsdam")} />
      <JsonLd data={breadcrumbSchema([{ name: "Jobcoaching Potsdam", path: "/jobcoaching-potsdam" }])} />

      <PageHero
        eyebrow="Standort Potsdam · Nördliche Innenstadt"
        title={
          <>
            Jobcoaching in Potsdam – <em>nahe Holländisches Viertel.</em>
          </>
        }
        intro="AVGS Coaching und berufliche Neuorientierung in der Gutenbergstraße 87, mitten in der Potsdamer Innenstadt – oder online, ganz wie es zu Dir passt."
        image="/images/standort-potsdam.jpg"
      />

      {/* Auf einen Blick */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        <Reveal>
          <FactBox
            question="Wo finde ich Jobcoaching in Potsdam?"
            answer="Kuhl & Engel bietet AVGS-gefördertes Jobcoaching in der Potsdamer Innenstadt an: Gutenbergstraße 87, 14467 Potsdam, wenige Gehminuten vom Holländischen Viertel. Das Einzelcoaching richtet sich an Akademiker:innen, Fach- und Führungskräfte und ist mit einem AVGS-Gutschein der Agentur für Arbeit oder des Jobcenters zu 100 % kostenfrei. Termine gibt es vor Ort, online oder hybrid."
            facts={[
              { label: "Adresse", value: "Gutenbergstraße 87, 14467 Potsdam (Nördliche Innenstadt)" },
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
                Angebote in Potsdam
              </p>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                Karrierecoaching für Potsdam <em>und Brandenburg.</em>
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
                Ob Neuorientierung nach der Elternzeit, der nächste Karriereschritt
                oder der Berufseinstieg nach der Promotion: In Potsdam begleiten Dich
                fünf systemisch ausgebildete Coaches – auf Wunsch auch hybrid mit
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
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/coaching-sq-1.jpg"
                  alt="Einzelcoaching bei Kuhl & Engel"
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 left-6 bg-ink px-6 py-4 text-cream">
                <p className="display text-base italic text-gold-bright">Gutenbergstraße 87</p>
                <p className="mt-0.5 text-[0.8rem] text-cream/70">14467 Potsdam · Nördliche Innenstadt</p>
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
              Dein Team in Potsdam
            </p>
            <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
              Diese Coaches begleiten Dich <em>vor Ort.</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {COACHES_POTSDAM.map((member, i) => (
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
              Das komplette Team mit allen Schwerpunkten findest Du{" "}
              <Link href="/ueber-uns#team" className="link-gold font-semibold text-gold">
                hier →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="display text-center text-4xl md:text-5xl">
            Häufige Fragen zum <em>Standort Potsdam.</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12">
            <Accordion items={FAQS_POTSDAM} />
          </div>
        </Reveal>
      </section>

      <CtaBand
        title={
          <>
            Lerne uns in Potsdam <em>persönlich kennen.</em>
          </>
        }
        text="Vereinbare ein kostenloses Erstgespräch – in der Gutenbergstraße, telefonisch oder online."
      />
    </>
  );
}
