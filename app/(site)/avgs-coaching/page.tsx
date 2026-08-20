import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Accordion from "@/components/Accordion";
import FactBox from "@/components/FactBox";
import JsonLd from "@/components/JsonLd";
import BookingFunnel from "@/components/BookingFunnel";
import { KEY, DEFAULTS } from "@/lib/cms/pages/seite-avgs-coaching";
import { getFaqsAvgs, getKontakt, loadPage } from "@/lib/content";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AVGS Coaching & Gutschein – 100 % kostenfrei in Berlin & online",
  description:
    "AVGS Coaching für Akademiker:innen: individuelles 1:1-Jobcoaching, mit Gutschein der Agentur für Arbeit zu 100 % kostenfrei. So bekommst und löst Du den AVGS-Gutschein ein – online, Berlin, Potsdam & Augsburg.",
  path: "/avgs-coaching",
  image: "/images/ke-beratung.jpg",
  imageAlt: "Coaching-Gespräch bei Kuhl & Engel",
});

export default async function AvgsCoachingPage() {
  const [c, faqs, kontakt] = await Promise.all([
    loadPage(KEY, DEFAULTS),
    getFaqsAvgs(),
    getKontakt(),
  ]);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "AVGS Coaching",
          description:
            "Individuelles 1:1-Jobcoaching für Akademiker:innen, finanziert über den Aktivierungs- und Vermittlungsgutschein (AVGS) der Agentur für Arbeit oder des Jobcenters – zu 100 % kostenfrei.",
          path: "/avgs-coaching",
          serviceType: "Jobcoaching / Karrierecoaching (AVGS-gefördert)",
        })}
      />
      <JsonLd data={faqSchema(faqs, "/avgs-coaching")} />
      <JsonLd data={breadcrumbSchema([{ name: "AVGS Coaching", path: "/avgs-coaching" }])} />
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={
          <>
            {c.hero.headline} <em>{c.hero.headlineEm}</em>
          </>
        }
        intro={c.hero.intro}
        image={c.hero.image}
        cta={{ href: "#buchen", label: c.hero.ctaLabel }}
      />

      {/* Auf einen Blick (zitierfähig für KI-Suche) */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        <Reveal>
          <FactBox
            question={c.factbox.question}
            answer={c.factbox.answer}
            facts={c.factbox.facts}
          />
        </Reveal>
      </section>

      {/* Themen */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            {c.themen.eyebrow}
          </p>
          <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
            {c.themen.headline} <em>{c.themen.headlineEm}</em>
          </h2>
        </Reveal>

        <div className="mt-16 space-y-20 md:space-y-28">
          {c.themen.items.map((thema, i) => (
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
                  <p className="eyebrow mt-8 text-ink/45">{c.themen.listLabel}</p>
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
      <section className="bg-cream-deep py-20 md:py-24">
        <Reveal>
          <figure className="mx-auto max-w-3xl px-5 text-center md:px-8">
            <blockquote className="display text-2xl italic leading-snug text-ink/85 md:text-3xl">
              {c.zitat.quote}
            </blockquote>
            <figcaption className="eyebrow mt-6 text-gold">{c.zitat.author}</figcaption>
          </figure>
        </Reveal>
      </section>

      {/* AVGS-Gutschein: die 5 Schritte */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            {c.gutschein.eyebrow}
          </p>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <h2 className="display max-w-2xl text-4xl md:text-5xl">
              {c.gutschein.headline} <em>{c.gutschein.headlineEm}</em>
            </h2>
            <p className="mb-1.5 max-w-sm text-[0.95rem] leading-relaxed text-ink/60">
              {c.gutschein.sideText}
            </p>
          </div>
        </Reveal>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {c.gutschein.steps.map((step, i) => (
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
            {c.gutschein.hinweisText}{" "}
            <Link href="/avgs-gutschein-beantragen" className="link-gold font-semibold text-gold">
              {c.gutschein.hinweisLinkLabel} →
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
              {c.buchen.eyebrow}
              <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            </p>
            <h2 className="display mt-6 text-center text-4xl md:text-5xl">
              {c.buchen.headline} <em>{c.buchen.headlineEm}</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-center leading-relaxed text-ink/65">
              {c.buchen.intro}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-12">
              <BookingFunnel kontakt={kontakt} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="display text-center text-4xl md:text-5xl">
            {c.faq.headline} <em>{c.faq.headlineEm}</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12">
            <Accordion items={faqs} />
          </div>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 text-center text-[0.95rem] text-ink/60">
            {c.faq.outroText}{" "}
            <Link href="/jobcoaching" className="link-gold font-semibold text-gold">
              {c.faq.outroLinkLabel} →
            </Link>
          </p>
        </Reveal>
      </section>

      <CtaBand
        title={
          <>
            {c.cta.title} <em>{c.cta.titleEm}</em>
          </>
        }
        text={c.cta.text}
      />
    </>
  );
}
