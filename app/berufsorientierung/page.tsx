import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import FactBox from "@/components/FactBox";
import JsonLd from "@/components/JsonLd";
import { CONTACT, JUGEND_ANGEBOTE } from "@/lib/data";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Berufsorientierung für Jugendliche – Angebote für Schulen",
  description:
    "Berufsorientierung „Mein Berufseinstieg“ für Schulen, Lehrkräfte und Kooperationspartner: Gruppenprojekte für ganze Klassen, Einzelcoaching für Schüler:innen und Materialien für den Berufsstart. Seit über 10 Jahren in Berlin & Brandenburg.",
  path: "/berufsorientierung",
  image: "/images/jugend-hero.jpg",
  imageAlt: "Berufsorientierung „Mein Berufseinstieg“ von Kuhl & Engel",
});

const NUTZEN = [
  "lernen ihre Stärken und Interessen kennen",
  "beschäftigen sich mit ihren Werten und Prioritäten",
  "entwickeln ein Mission Statement, das sie berührt und motiviert",
  "haben eine klare Vorstellung von ihrer beruflichen Richtung",
  "können sich selbst besser einschätzen",
  "lernen, eigene Ziele zu entwerfen und ihre Zukunft zu planen",
];

export default function BerufsorientierungPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Berufsorientierung für Jugendliche",
          description:
            "Coaching zur beruflichen Orientierung für Jugendliche: Gruppenprojekte für Schulklassen in Berlin und Brandenburg sowie Einzelcoaching für Schüler:innen und Abiturient:innen – ein Angebot für Schulen, Lehrkräfte und Kooperationspartner.",
          path: "/berufsorientierung",
          serviceType: "Berufsorientierung / Berufscoaching für Jugendliche",
          areaServed: ["Berlin", "Brandenburg", "online"],
          audience: "Schulen, Lehrkräfte, Kooperationspartner",
        })}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Berufsorientierung", path: "/berufsorientierung" }])} />

      <PageHero
        eyebrow="Berufsorientierung · Für Schulen, Lehrkräfte & Partner"
        title={
          <>
            Mein Berufseinstieg – <em>Orientierung, die wirkt.</em>
          </>
        }
        intro="Für die meisten Jugendlichen ist die Berufs- oder Studienwahl ein schwerer Brocken – bei viel Druck und wenig Erfahrung. Seit über 10 Jahren begleiten wir Schulen in Berlin und Brandenburg mit Gruppen- und Einzelcoachings zur beruflichen Orientierung. Professionell, jugendgerecht und mit messbarer Wirkung."
        image="/images/jugend-hero.jpg"
      />

      {/* Auf einen Blick */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        <Reveal>
          <FactBox
            question="Was leistet „Mein Berufseinstieg“?"
            answer="„Mein Berufseinstieg“ ist unser Programm zur Berufsorientierung für Jugendliche – als 2- bis 2,5-tägiges Gruppenprojekt an Schulen oder als Einzelcoaching für Schüler:innen und Abiturient:innen. Mehrere professionelle Coaches arbeiten mit jugendgerechten, spielerischen Methoden. Das Ergebnis: Die Jugendlichen kennen ihre Stärken, entwickeln eine klare berufliche Richtung und starten motivierter in Schule, Praktikum und Bewerbung."
            facts={[
              { label: "Für wen", value: "Schulen, Lehrkräfte und Kooperationspartner" },
              { label: "Formate", value: "Gruppenprojekte für Klassen & Einzelcoaching" },
              { label: "Erfahrung", value: "Über 10 Jahre, viele Schulen begleitet" },
              { label: "Förderung", value: "In Brandenburg über PraxisBO förderfähig" },
            ]}
          />
        </Reveal>
      </section>

      {/* Die drei Angebote */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            Unsere Angebote zur Berufsorientierung
          </p>
          <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
            Drei Wege, wie wir <em>Ihre Schüler:innen stärken.</em>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {JUGEND_ANGEBOTE.map((item, i) => (
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

      {/* Wirkung (dunkel) */}
      <section className="on-dark bg-ink py-24 text-cream md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/jugend-beelitz-1.jpg"
                alt="Jugendliche im Coaching zur Berufsorientierung"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold-bright">
                <span aria-hidden className="inline-block h-px w-10 bg-gold-bright" />
                Die Wirkung
              </p>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                Schüler:innen, die teilnehmen, <em>starten klarer und motivierter.</em>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <ul className="mt-8 space-y-3.5">
                {NUTZEN.map((punkt) => (
                  <li key={punkt} className="flex items-start gap-3.5 leading-relaxed text-cream/80">
                    <span aria-hidden className="display mt-0.5 italic text-gold-bright">✓</span>
                    {punkt}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={250}>
              <p className="mt-7 max-w-xl text-[0.95rem] leading-relaxed text-cream/60">
                Die motiviertere Grundhaltung zeigt sich im Schulalltag ebenso wie
                bei der weiteren Orientierung – etwa in der Studienberatung, im BIZ
                oder bei der Planung eines Schülerpraktikums.
              </p>
              <a
                href={CONTACT.phoneHref}
                className="mt-7 inline-flex items-center gap-2 font-semibold text-gold-bright transition-colors hover:text-cream"
              >
                Fragen? Rufen Sie an: {CONTACT.phone} <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        formal
        title={
          <>
            Holen Sie „Mein Berufseinstieg“ <em>an Ihre Schule.</em>
          </>
        }
        text="Im unverbindlichen Gespräch finden wir gemeinsam heraus, welches Format zu Ihrer Schule oder Einrichtung passt – und wie die Förderung funktioniert."
      />
    </>
  );
}
