import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Accordion from "@/components/Accordion";
import FactBox from "@/components/FactBox";
import StandortGalerie from "@/components/StandortGalerie";
import JsonLd from "@/components/JsonLd";
import { KEY, DEFAULTS } from "@/lib/cms/pages/seite-jobcoaching-augsburg";
import { loadPage, getTeam } from "@/lib/content";
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

// Ziel-Links der Angebotsliste – bewusst fest im Code,
// im CMS werden nur die Beschriftungen bearbeitet.
const LEISTUNGEN_HREFS = [
  "/avgs-coaching",
  "/karrierecoaching",
  "/jobcoaching",
  "/avgs-gutschein-beantragen",
];

export default async function JobcoachingAugsburgPage() {
  const [c, team] = await Promise.all([loadPage(KEY, DEFAULTS), getTeam()]);

  // Heike und Martina coachen selbst nicht im AVGS-Standortbetrieb
  // (Kundenvorgabe 18.08.2026) – hier nur die Coach:innen vor Ort.
  const coachesAugsburg = team.members.filter((m) => m.role.startsWith("Augsburg"));

  const leistungen = c.leistungen.items.map((item, i) => ({
    ...item,
    href: LEISTUNGEN_HREFS[i] ?? "/jobcoaching",
  }));

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
      <JsonLd data={faqSchema(c.faq.items, "/jobcoaching-augsburg")} />
      <JsonLd data={breadcrumbSchema([{ name: "Jobcoaching Augsburg", path: "/jobcoaching-augsburg" }])} />

      <PageHero
        eyebrow={c.hero.eyebrow}
        title={
          <>
            {c.hero.headline} <em>{c.hero.headlineEm}</em>
          </>
        }
        intro={c.hero.intro}
        image={c.hero.image}
      />

      {/* Auf einen Blick */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        <Reveal>
          <FactBox
            question={c.fakten.question}
            answer={c.fakten.answer}
            facts={c.fakten.facts}
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
                {c.leistungen.eyebrow}
              </p>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                {c.leistungen.headline} <em>{c.leistungen.headlineEm}</em>
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
                {c.leistungen.text}
              </p>
            </Reveal>
            <Reveal delay={150}>
              <ul className="mt-10 border-t border-ink/10">
                {leistungen.map((leistung, i) => (
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
                    src={c.leistungen.image}
                    alt="Coaching-Raum am Standort Augsburg mit zwei Sesseln"
                    fill
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-6 left-6 bg-ink px-6 py-4 text-cream">
                  <p className="display text-base italic text-gold-bright">{c.leistungen.cardTitle}</p>
                  <p className="mt-0.5 text-[0.8rem] text-cream/70">{c.leistungen.cardSub}</p>
                </div>
              </div>
              <figure className="mt-8">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={c.leistungen.imageSecond}
                    alt="Gruppenraum mit Stuhlkreis und Flipchart am Standort Augsburg"
                    fill
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <figcaption className="mt-3 text-[0.85rem] text-ink/55">
                  {c.leistungen.imageSecondCaption}
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
              {c.coaches.eyebrow}
            </p>
            <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
              {c.coaches.headline} <em>{c.coaches.headlineEm}</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {coachesAugsburg.map((member, i) => (
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
              {c.coaches.outro}{" "}
              <Link href="/ueber-uns#team" className="link-gold font-semibold text-gold">
                {c.coaches.linkLabel}
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Galerie */}
      <StandortGalerie
        headline="Unser Standort am"
        headlineEm="Mauerberg"
        images={[
          {
            src: "/images/standort-augsburg-aussen.jpg",
            alt: "Außenansicht des Standorts von Kuhl & Engel am Mauerberg 26 in der Augsburger Altstadt",
          },
          {
            src: "/images/standort-augsburg-kanal.jpg",
            alt: "Blick über den Lechkanal auf das Gebäude von Kuhl & Engel in der Augsburger Altstadt",
          },
          {
            src: "/images/standort-augsburg-fenster.jpg",
            alt: "Fassade mit Sprossenfenstern am Standort von Kuhl & Engel in Augsburg",
          },
          {
            src: "/images/standort-augsburg-raum.jpg",
            alt: "Seminarraum mit grünen Stühlen bei Kuhl & Engel in Augsburg",
          },
        ]}
      />

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="display text-center text-4xl md:text-5xl">
            {c.faq.headline} <em>{c.faq.headlineEm}</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12">
            <Accordion items={c.faq.items} />
          </div>
        </Reveal>
      </section>

      <CtaBand
        title={
          <>
            {c.cta.headline} <em>{c.cta.headlineEm}</em>
          </>
        }
        text={c.cta.text}
      />

      <div className="bg-cream-deep py-6 text-center">
        <Link href="/ueber-uns#standorte" className="link-gold text-sm font-semibold text-gold">
          {c.cta.standorteLinkLabel}
        </Link>
      </div>
    </>
  );
}
