import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Accordion from "@/components/Accordion";
import FactBox from "@/components/FactBox";
import JsonLd from "@/components/JsonLd";
import { KEY, DEFAULTS } from "@/lib/cms/pages/seite-karrierecoaching";
import { getTeam, loadPage } from "@/lib/content";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Karrierecoaching – auf Augenhöhe für Selbstzahler:innen und Unternehmen",
  description:
    "Karrierecoaching bei Kuhl & Engel: Wiedereinstieg nach der Elternzeit, Neuorientierung, Sichtbarkeit und der nächste Karriereschritt – auf Augenhöhe für Selbstzahler:innen und Unternehmen. Online, Berlin & Potsdam.",
  path: "/karrierecoaching",
  image: "/images/ke-frauen.jpg",
  imageAlt: "Karrierecoaching bei Kuhl & Engel",
});

export default async function KarrierecoachingPage() {
  const [c, team] = await Promise.all([loadPage(KEY, DEFAULTS), getTeam()]);

  // Im Karrierecoaching (Selbstzahler:innen & Unternehmen) coachen nur die
  // beiden Gründerinnen persönlich – Kundenvorgabe 18.08.2026.
  const coaches = [team.founders[0], team.founders[1]];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Karrierecoaching",
          description:
            "Karrierecoaching für Selbstzahler:innen und Unternehmen: Wiedereinstieg nach der Elternzeit, berufliche Neuorientierung, Sichtbarkeit und der nächste Karriereschritt – persönlich begleitet von den Gründerinnen Heike Kuhl und Martina Engel-Fürstberger.",
          path: "/karrierecoaching",
          serviceType: "Karrierecoaching",
          audience: "Selbstzahler:innen und Unternehmen",
        })}
      />
      <JsonLd data={faqSchema(c.faq.items, "/karrierecoaching")} />
      <JsonLd data={breadcrumbSchema([{ name: "Karrierecoaching", path: "/karrierecoaching" }])} />

      <PageHero
        eyebrow={c.hero.eyebrow}
        title={
          <>
            {c.hero.headline} <em>{c.hero.headlineEm}</em>
          </>
        }
        intro={c.hero.intro}
        image={c.hero.image}
        cta={{ href: "/avgs-coaching", label: c.hero.ctaLabel }}
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
        <div className="mt-14 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2">
          {c.themen.items.map((thema, i) => (
            <Reveal key={thema.nr} delay={(i % 2) * 120} className="h-full">
              <div className="group h-full bg-paper p-9 transition-colors duration-500 hover:bg-cream md:p-11">
                <span className="display text-4xl italic text-gold/50 transition-colors duration-500 group-hover:text-gold">
                  {thema.nr}
                </span>
                <h3 className="display mt-5 text-2xl md:text-3xl">{thema.title}</h3>
                <p className="mt-4 leading-relaxed text-ink/70">{thema.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/avgs-coaching#buchen"
              className="group inline-flex items-center gap-3 bg-ink px-8 py-4 font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-700"
            >
              {c.themen.ctaLabel}
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <p className="text-[0.9rem] text-ink/55">
              {c.themen.ctaNote}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Zitat */}
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

      {/* Coaches */}
      <section className="bg-cream-deep py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span aria-hidden className="inline-block h-px w-10 bg-gold" />
              {c.coaches.eyebrow}
            </p>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
              <h2 className="display max-w-xl text-4xl md:text-5xl">
                {c.coaches.headline} <em>{c.coaches.headlineEm}</em>
              </h2>
              <p className="mb-2 max-w-md text-[0.95rem] leading-relaxed text-ink/60">
                {c.coaches.sideText}
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {coaches.map((member, i) => (
              <Reveal key={member.name} delay={i * 150}>
                <article className="group grid h-full overflow-hidden border border-ink/10 bg-paper sm:grid-cols-[42%_1fr]">
                  <div className="relative aspect-[4/5] sm:aspect-auto">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 24vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col p-8">
                    <h3 className="display text-2xl">{member.name}</h3>
                    <p className="eyebrow mt-2 !text-[0.6rem] text-gold">{member.role}</p>
                    <blockquote className="display mt-5 grow text-[1.05rem] italic leading-relaxed text-ink/75">
                      „{member.quote}“
                    </blockquote>
                    <p className="mt-5 border-t border-ink/10 pt-4 text-[0.8rem] leading-relaxed text-ink/50">
                      {member.quali}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <p className="mt-10 text-[0.95rem] text-ink/60">
              {c.coaches.outroText}{" "}
              <Link href="/ueber-uns#team" className="link-gold font-semibold text-gold">
                {c.coaches.outroLinkLabel} →
              </Link>
            </p>
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
            <Accordion items={c.faq.items} />
          </div>
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
