import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import FactBox from "@/components/FactBox";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { KEY, DEFAULTS } from "@/lib/cms/pages/seite-berufsorientierung";
import { getJugendAngebote, getKontakt, loadPage } from "@/lib/content";

export const metadata = pageMetadata({
  title: "Berufsorientierung für Jugendliche – Angebote für Schulen",
  description:
    "Berufsorientierung „Mein Berufseinstieg“ für Schulen, Lehrkräfte und Kooperationspartner: Projekte für ganze Schulklassen, Einzelcoaching für Schüler:innen und Materialien für den Berufsstart. Seit über 15 Jahren in Berlin & Brandenburg.",
  path: "/berufsorientierung",
  image: "/images/jugend-hero.jpg",
  imageAlt: "Berufsorientierung „Mein Berufseinstieg“ von Kuhl & Engel",
});

export default async function BerufsorientierungPage() {
  const [c, kontakt, angebote] = await Promise.all([
    loadPage(KEY, DEFAULTS),
    getKontakt(),
    getJugendAngebote(),
  ]);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Berufsorientierung für Jugendliche",
          description:
            "Coaching zur beruflichen Orientierung für Jugendliche: Projekte für ganze Schulklassen in Berlin und Brandenburg sowie Einzelcoaching für Schüler:innen und Abiturient:innen – ein Angebot für Schulen, Lehrkräfte und Kooperationspartner.",
          path: "/berufsorientierung",
          serviceType: "Berufsorientierung / Berufscoaching für Jugendliche",
          areaServed: ["Berlin", "Brandenburg", "online"],
          audience: "Schulen, Lehrkräfte, Kooperationspartner",
        })}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Berufsorientierung", path: "/berufsorientierung" }])} />

      <PageHero
        eyebrow={c.hero.eyebrow}
        title={
          <>
            {c.hero.headline} <em>{c.hero.headlineEm}</em>
          </>
        }
        intro={c.hero.intro}
        image={c.hero.image}
        cta={{ href: "#kontakt", label: c.hero.ctaLabel }}
      />

      {/* Kennzahlen (überlappen den Hero) */}
      <section className="relative z-10 mx-auto -mt-14 max-w-6xl px-5 md:px-8">
        <Reveal>
          <dl className="grid grid-cols-1 divide-y divide-ink/10 overflow-hidden rounded-xl border border-ink/10 bg-paper shadow-[0_32px_80px_-32px_rgba(14,29,43,0.35)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {c.kennzahlen.items.map((stat) => (
              <div key={stat.label} className="px-6 py-8 text-center md:py-10">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="display text-4xl text-ink md:text-5xl">{stat.value}</dd>
                <dd className="mt-2 text-[0.82rem] font-medium tracking-wide text-ink/55">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* Auf einen Blick */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        <Reveal>
          <FactBox
            question={c.aufEinenBlick.question}
            answer={c.aufEinenBlick.answer}
            facts={c.aufEinenBlick.facts}
          />
        </Reveal>
      </section>

      {/* Die drei Angebote */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            {c.angebote.eyebrow}
          </p>
          <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
            {c.angebote.headline} <em>{c.angebote.headlineEm}</em>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {angebote.map((item, i) => (
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
                    {c.angebote.linkLabel} <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Wirkung */}
      <section className="bg-cream-deep py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={c.wirkung.image}
                alt="Jugendliche im Coaching zur Berufsorientierung"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
                {c.wirkung.eyebrow}
              </p>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                {c.wirkung.headline} <em>{c.wirkung.headlineEm}</em>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <ul className="mt-8 space-y-3.5">
                {c.wirkung.bullets.map((punkt) => (
                  <li key={punkt} className="flex items-start gap-3.5 leading-relaxed text-ink/75">
                    <span aria-hidden className="display mt-0.5 italic text-gold">✓</span>
                    {punkt}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={250}>
              <p className="mt-7 max-w-xl text-[0.95rem] leading-relaxed text-ink/60">
                {c.wirkung.outro}
              </p>
              <a
                href={kontakt.phoneHref}
                className="mt-7 inline-flex items-center gap-2 font-semibold text-gold transition-colors hover:text-ink"
              >
                {c.wirkung.phoneLinkLabel} {kontakt.phone} <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Kontakt – eigenes Formular ohne AVGS-Abfrage (Kundenwunsch 18.08.) */}
      <section id="kontakt" className="scroll-mt-24 bg-cream-deep py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
                {c.kontakt.eyebrow}
              </p>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                {c.kontakt.headline} <em>{c.kontakt.headlineEm}</em>
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
                {c.kontakt.text}
              </p>
              <a
                href={kontakt.phoneHref}
                className="mt-7 inline-flex items-center gap-2 font-semibold text-gold transition-colors hover:text-ink"
              >
                {c.kontakt.phoneLinkLabel} {kontakt.phone} <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <ContactForm variant="schulen" kontakt={kontakt} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
