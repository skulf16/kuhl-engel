import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Accordion from "@/components/Accordion";
import FactBox from "@/components/FactBox";
import JsonLd from "@/components/JsonLd";
import { DEFAULTS, KEY } from "@/lib/cms/pages/seite-jobcoaching";
import { getKontakt, loadPage } from "@/lib/content";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Jobcoaching – Karrierecoaching für Akademiker:innen",
  description:
    "Jobcoaching bei Kuhl & Engel: systemisches Karrierecoaching für berufliche Orientierung, Bewerbung und Neustart – mit AVGS-Gutschein 100 % kostenfrei. Online, Berlin, Potsdam & Augsburg.",
  path: "/jobcoaching",
  image: "/images/ke-coaching-draussen.jpg",
  imageAlt: "Coaching-Gespräch bei Kuhl & Engel",
});

export default async function JobcoachingPage() {
  const [c, kontakt] = await Promise.all([loadPage(KEY, DEFAULTS), getKontakt()]);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Jobcoaching",
          description:
            "Systemisches Jobcoaching und Karrierecoaching für Akademiker:innen, Fach- und Führungskräfte: berufliche Orientierung, Bewerbung und Neustart – mit AVGS-Gutschein förderfähig.",
          path: "/jobcoaching",
          serviceType: "Jobcoaching / Karrierecoaching",
        })}
      />
      <JsonLd data={faqSchema(c.faq.items, "/jobcoaching")} />
      <JsonLd data={breadcrumbSchema([{ name: "Jobcoaching", path: "/jobcoaching" }])} />

      <PageHero
        eyebrow={c.hero.eyebrow}
        title={
          <>
            {c.hero.headline} <em>{c.hero.headlineEm}</em> {c.hero.headlineAfter}
          </>
        }
        intro={c.hero.intro}
        image={c.hero.image}
        cta={{ href: "/kontakt#rueckruf", label: c.hero.ctaLabel }}
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

      {/* Wozu brauche ich ein Jobcoaching? */}
      <section className="mx-auto max-w-7xl px-5 pt-24 md:px-8 md:pt-32">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            {c.szenarien.eyebrow}
          </p>
          <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
            {c.szenarien.headline} <em>{c.szenarien.headlineEm}</em>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            {c.szenarien.intro}
          </p>
        </Reveal>
        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {c.szenarien.items.map((szenario, i) => (
            <Reveal key={szenario.title} delay={(i % 3) * 100}>
              <div className="border-t border-ink/10 pt-6">
                <h3 className="display text-xl md:text-2xl">{szenario.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{szenario.text}</p>
              </div>
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
              {c.pakete.eyebrow}
            </p>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
              <h2 className="display max-w-2xl text-4xl md:text-5xl">
                {c.pakete.headline} <em>{c.pakete.headlineEm}</em>
              </h2>
              <p className="mb-1.5 max-w-sm text-[0.95rem] leading-relaxed text-ink/60">
                {c.pakete.note}
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {c.pakete.items.map((paket, i) => (
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
              {c.pakete.outro}{" "}
              <Link href="/avgs-gutschein-beantragen" className="link-gold font-semibold text-gold">
                {c.pakete.outroLinkLabel}
              </Link>
              {c.pakete.outroAfter}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gründe */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span aria-hidden className="inline-block h-px w-10 bg-gold" />
              {c.gruende.eyebrow}
            </p>
            <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
              {c.gruende.headline} <em>{c.gruende.headlineEm}</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {c.gruende.items.map((grund, i) => (
              <Reveal key={grund.title} delay={i * 100} className="h-full">
                <div className="h-full bg-paper p-9 md:p-11">
                  <span className="display text-4xl italic text-gold/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display mt-5 text-2xl">{grund.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/65">{grund.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="/kontakt#rueckruf"
                className="group inline-flex items-center gap-3 bg-ink px-8 py-4 font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-700"
              >
                {c.gruende.ctaLabel}
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <a href={kontakt.phoneHref} className="font-semibold text-ink/70 transition-colors hover:text-gold">
                {c.gruende.phonePrefix} {kontakt.phone}
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
              {c.methode.eyebrow}
            </p>
            <h2 className="display mt-6 text-3xl md:text-4xl">
              {c.methode.headline} <em>{c.methode.headlineEm}</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              {c.methode.text1}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              {c.methode.text2}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span aria-hidden className="inline-block h-px w-10 bg-gold" />
              {c.abgrenzung.eyebrow}
            </p>
            <h2 className="display mt-6 text-3xl md:text-4xl">
              {c.abgrenzung.headline} <em>{c.abgrenzung.headlineEm}</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              {c.abgrenzung.text1}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              {c.abgrenzung.text2}
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 pb-24 md:px-8 md:pb-32">
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
            {c.faq.outro}{" "}
            <Link href="/avgs-gutschein-beantragen" className="link-gold font-semibold text-gold">
              {c.faq.outroLinkLabel}
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
