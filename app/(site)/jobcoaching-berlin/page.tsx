import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Accordion from "@/components/Accordion";
import FactBox from "@/components/FactBox";
import JsonLd from "@/components/JsonLd";
import { DEFAULTS, KEY } from "@/lib/cms/pages/seite-jobcoaching-berlin";
import { getTeam, getTestimonials, loadPage } from "@/lib/content";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Jobcoaching Berlin – AVGS Coaching in Prenzlauer Berg",
  description:
    "Jobcoaching Berlin: AVGS Coaching und Karrierecoaching für Akademiker:innen in der Bötzowstraße 28, Prenzlauer Berg – mit AVGS-Gutschein 100 % kostenfrei. AZAV-zertifiziert, auch online oder hybrid.",
  path: "/jobcoaching-berlin",
  image: "/images/ke-flipchart-duo.jpg",
  imageAlt: "Coaching-Situation bei Kuhl & Engel in Berlin: Arbeit am Flipchart in den Räumen in Prenzlauer Berg",
});

export default async function JobcoachingBerlinPage() {
  const [c, team, testimonials] = await Promise.all([
    loadPage(KEY, DEFAULTS),
    getTeam(),
    getTestimonials(),
  ]);

  // Heike und Martina coachen selbst nicht im AVGS-Standortbetrieb
  // (Kundenvorgabe 18.08.2026) – hier nur die Coach:innen vor Ort.
  const coachesBerlin = team.members.filter((m) => m.role.startsWith("Berlin"));

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Jobcoaching Berlin",
          description:
            "AVGS Coaching und Karrierecoaching für Akademiker:innen in Berlin-Prenzlauer Berg (Bötzowstraße 28) – systemisch, individuell und mit AVGS-Gutschein zu 100 % kostenfrei.",
          path: "/jobcoaching-berlin",
          serviceType: "Jobcoaching / AVGS Coaching",
          areaServed: ["Berlin"],
          avgsFree: true,
        })}
      />
      <JsonLd data={faqSchema(c.faq.items, "/jobcoaching-berlin")} />
      <JsonLd data={breadcrumbSchema([{ name: "Jobcoaching Berlin", path: "/jobcoaching-berlin" }])} />

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
                {c.leistungen.items.map((leistung, i) => (
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
                  src={c.leistungen.image}
                  alt="Blick aus den Coaching-Räumen von Kuhl & Engel in der Bötzowstraße 28, Berlin-Prenzlauer Berg"
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
            {coachesBerlin.map((member, i) => (
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
              {c.coaches.outro}{" "}
              <Link href="/ueber-uns#team" className="link-gold font-semibold text-gold">
                {c.coaches.linkLabel}
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
              {c.anfahrt.eyebrow}
            </p>
            <h2 className="display mt-6 text-3xl md:text-4xl">
              {c.anfahrt.headline} <em>{c.anfahrt.headlineEm}</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              {c.anfahrt.text}
            </p>
            <blockquote className="mt-10 border-l-2 border-gold pl-6">
              <p className="display text-lg italic leading-relaxed text-ink/80">
                „{testimonials[3].quote}“
              </p>
              <footer className="mt-4 text-[0.85rem] text-ink/55">
                {testimonials[3].author} · {testimonials[3].meta}
              </footer>
            </blockquote>
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
              {c.abgrenzung.text}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              {c.abgrenzung.outro}{" "}
              <Link href="/avgs-gutschein-beantragen" className="link-gold font-semibold text-gold">
                {c.abgrenzung.outroLinkLabel}
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
