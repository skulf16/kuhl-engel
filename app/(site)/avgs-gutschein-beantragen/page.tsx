import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Accordion from "@/components/Accordion";
import FactBox from "@/components/FactBox";
import JsonLd from "@/components/JsonLd";
import { KEY, DEFAULTS } from "@/lib/cms/pages/seite-avgs-gutschein";
import { loadPage } from "@/lib/content";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AVGS-Gutschein beantragen – so bekommst Du die Förderung",
  description:
    "AVGS beantragen in 5 Schritten: Wer den Aktivierungs- und Vermittlungsgutschein bekommt, wie das Gespräch bei Agentur für Arbeit oder Jobcenter läuft und worauf Du beim Gutschein achten musst – damit Dein Jobcoaching 100 % kostenfrei ist.",
  path: "/avgs-gutschein-beantragen",
  image: "/images/ke-unterlagen.jpg",
  imageAlt: "Coaching-Gespräch bei Kuhl & Engel",
});

export default async function AvgsGutscheinBeantragenPage() {
  const c = await loadPage(KEY, DEFAULTS);

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: "AVGS-Gutschein beantragen: So bekommst Du die Förderung für Dein Jobcoaching",
          description:
            "Schritt-für-Schritt-Anleitung: Wer Anspruch auf den Aktivierungs- und Vermittlungsgutschein (AVGS) hat, wie Du ihn bei Agentur für Arbeit oder Jobcenter beantragst und worauf Du beim Einlösen achten musst.",
          path: "/avgs-gutschein-beantragen",
          image: "/images/ke-unterlagen.jpg",
          datePublished: "2026-07-10",
        })}
      />
      <JsonLd data={faqSchema(c.faq.items, "/avgs-gutschein-beantragen")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "AVGS Coaching", path: "/avgs-coaching" },
          { name: "AVGS-Gutschein beantragen", path: "/avgs-gutschein-beantragen" },
        ])}
      />

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
            question={c.factbox.question}
            answer={c.factbox.answer}
            facts={c.factbox.facts}
          />
        </Reveal>
      </section>

      {/* Schritte */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            {c.schritte.eyebrow}
          </p>
          <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
            {c.schritte.headline} <em>{c.schritte.headlineEm}</em>
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {c.schritte.steps.map((schritt, i) => (
            <Reveal key={schritt.title} delay={i * 100}>
              <li className="border-t border-ink/10 pt-6">
                <span className="display text-sm italic text-gold">
                  Schritt {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-3 text-xl md:text-2xl">{schritt.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{schritt.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Argumentationshilfe */}
      <section className="bg-cream-deep py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
                {c.gespraech.eyebrow}
              </p>
              <h2 className="display mt-6 text-3xl md:text-4xl">
                {c.gespraech.headline} <em>{c.gespraech.headlineEm}</em>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/70">
                {c.gespraech.text}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <ul className="space-y-6">
                {c.gespraech.argumente.map((argument) => (
                  <li
                    key={argument}
                    className="border-l-2 border-gold bg-cream px-6 py-5 text-lg italic leading-relaxed text-ink/80"
                  >
                    {argument}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
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
            <Accordion items={c.faq.items} />
          </div>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-10 text-center text-lg text-ink/70">
            {c.faq.outroText}{" "}
            <Link href="/avgs-coaching" className="link-gold font-semibold text-gold">
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
