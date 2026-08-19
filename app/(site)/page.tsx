import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Accordion from "@/components/Accordion";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import {
  getBereiche,
  getFaqsAvgs,
  getKontakt,
  getStartseite,
  getStats,
  getTeam,
  getTestimonials,
} from "@/lib/content";
import { getGoogleRating } from "@/lib/googleRating";

// Portrait-Leiste: sechs Gesichter aus dem Coach:innen-Team –
// Anna Podakova (Assistenz der Geschäftsführung) gehört nicht dazu.
// Die Fotos kommen aus dem Team-Baustein im CMS.
const COACH_SELECTION = [
  { name: "Dr. Anna Mandel-Zakharova, Ph.D.", fach: "Neurowissenschaftlerin & Coachin" },
  { name: "Angelina Werner", fach: "Job- und Karrierecoach" },
  { name: "Bettina Brammer", fach: "Systemische Berufscoachin" },
  { name: "Carmen Pilger", fach: "Systemisch-integrative Coachin" },
  { name: "Matthias Fink", fach: "Systemisch-integrativer Coach" },
  { name: "Grit Staroste", fach: "Systemisch-integrative Coachin" },
];

export default async function Home() {
  const [content, bereiche, stats, kontakt, team, testimonials, faqs, googleRating] =
    await Promise.all([
      getStartseite(),
      getBereiche(),
      getStats(),
      getKontakt(),
      getTeam(),
      getTestimonials(),
      getFaqsAvgs(),
      getGoogleRating(),
    ]);

  const coaches = COACH_SELECTION.flatMap((c) => {
    const member = team.members.find((m) => m.name === c.name);
    return member ? [{ ...c, image: member.image }] : [];
  });

  // Kennzahlen-Band: die Google-Kennzahl bekommt das Live-Rating,
  // solange die Places API antwortet (sonst bleibt der CMS-Wert).
  const liveStats = googleRating
    ? stats.map((s) =>
        s.label.includes("Google") ? { ...s, value: googleRating.ratingFormatted } : s
      )
    : stats;

  return (
    <>
      <JsonLd data={faqSchema(faqs, "/")} />
      {/* ---------- Hero ---------- */}
      <section className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-cream">
        <Image
          src={content.hero.image}
          alt="Heike Kuhl und Martina Engel-Fürstberger in ihren Coaching-Räumen"
          fill
          priority
          sizes="100vw"
          className="hero-zoom object-cover object-[74%_28%]"
        />
        {/* heller Verlauf nur auf der Textseite – das Foto bleibt voll sichtbar */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/60 to-transparent md:via-cream/40" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-28 md:px-8 md:pb-28">
          <div className="max-w-3xl">
            <p className="eyebrow hero-rise inline-flex items-center gap-2.5 rounded-full border border-ink/20 bg-cream/70 px-4 py-2 text-ink/85 backdrop-blur-sm">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
              {content.hero.badge}
            </p>
            <h1 className="display mt-8 max-w-4xl text-[2.4rem] text-ink md:text-6xl lg:text-[4.8rem]">
              <span className="hero-rise block" style={{ animationDelay: "120ms" }}>
                {content.hero.headline1}
              </span>
              <span className="hero-rise block" style={{ animationDelay: "240ms" }}>
                <em>{content.hero.headline2}</em>
              </span>
            </h1>
            <p
              className="hero-rise mt-7 max-w-2xl text-lg leading-relaxed text-ink/80 md:text-xl"
              style={{ animationDelay: "360ms" }}
            >
              {content.hero.subline}
            </p>
            <div
              className="hero-rise mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              style={{ animationDelay: "480ms" }}
            >
              <a
                href="#wege"
                className="group inline-flex items-center gap-3 rounded-lg bg-ink px-8 py-4 font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-700"
              >
                {content.hero.ctaLabel}
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </a>
              <a
                href={kontakt.phoneHref}
                className="inline-flex items-center gap-3 rounded-lg border border-ink/30 bg-cream/60 px-8 py-4 font-semibold text-ink backdrop-blur-sm transition-all duration-300 hover:border-gold hover:text-gold"
              >
                {kontakt.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Scroll-Hinweis */}
        <div className="absolute bottom-28 left-1/2 hidden -translate-x-1/2 md:block" aria-hidden>
          <div className="scroll-drip relative h-14 w-px overflow-hidden bg-ink/20" />
        </div>
      </section>

      {/* ---------- Positionierung ---------- */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
                {content.positionierung.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                {content.positionierung.headline}{" "}
                <em>{content.positionierung.headlineEm}</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/70">
                {content.positionierung.text}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <ul className="mt-9 grid gap-4 sm:grid-cols-2">
                {content.positionierung.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.95rem] font-medium">
                    <span aria-hidden className="display mt-0.5 italic text-gold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={400}>
              <Link href="/ueber-uns" className="link-gold mt-10 inline-flex items-center gap-2 font-semibold text-gold">
                {content.positionierung.linkLabel} <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          {/* Bildkomposition */}
          <Reveal delay={150} className="relative">
            <div className="relative ml-6 aspect-[4/5] overflow-hidden md:ml-14">
              <Image
                src={content.positionierung.imageMain}
                alt="Einzelcoaching in den Räumen von Kuhl & Engel"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-8 left-0 w-52 overflow-hidden rounded-xl border-8 border-cream bg-cream md:w-64">
              <Image
                src={content.positionierung.imageSmall}
                alt="Coaching-Raum mit zwei Sesseln"
                width={512}
                height={234}
                className="object-cover"
              />
            </div>
            <p className="display absolute -top-7 right-2 text-7xl italic text-gold/25 md:text-8xl" aria-hidden>
              &amp;
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Zwei-Wege-Weiche ---------- */}
      <section id="wege" className="scroll-mt-20 bg-cream-deep py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow flex items-center justify-center gap-3 text-gold">
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
                {content.weiche.eyebrow}
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
              </p>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                {content.weiche.headline} <em>{content.weiche.headlineEm}</em>
              </h2>
              <p className="mt-5 leading-relaxed text-ink/65">
                {content.weiche.intro}
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {bereiche.map((bereich, i) => (
              <Reveal key={bereich.slug} delay={i * 140} className="h-full">
                <Link
                  href={bereich.slug}
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-ink/10 bg-paper transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-32px_rgba(14,29,43,0.4)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={bereich.image}
                      alt={bereich.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <p className="eyebrow absolute left-6 top-6 rounded-full border border-cream/30 bg-ink/60 px-3 py-1.5 text-cream backdrop-blur-sm">
                      {bereich.kicker}
                    </p>
                  </div>
                  <div className="flex grow flex-col p-8 md:p-10">
                    <h3 className="display text-3xl transition-colors group-hover:text-clay md:text-4xl">
                      {bereich.title}
                    </h3>
                    <p className="eyebrow mt-2 !text-[0.62rem] text-gold">{bereich.claim}</p>
                    <p className="mt-4 leading-relaxed text-ink/70">{bereich.text}</p>
                    <ul className="mt-6 space-y-2.5">
                      {bereich.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-[0.92rem] font-medium">
                          <span aria-hidden className="display mt-0.5 italic text-gold">✓</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-8 inline-flex items-center gap-3 self-start rounded-lg bg-ink px-6 py-3.5 font-semibold text-cream transition-all duration-300 group-hover:bg-ink-700">
                      {bereich.cta}
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Kennzahlen ---------- */}
      <section className="mx-auto max-w-6xl px-5 pt-24 md:px-8 md:pt-32">
        <Reveal>
          <dl className="grid grid-cols-1 divide-y divide-ink/10 overflow-hidden rounded-xl border border-ink/10 bg-paper shadow-[0_32px_80px_-32px_rgba(14,29,43,0.35)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {liveStats.map((stat) => (
              <div key={stat.label} className="px-6 py-8 text-center md:py-10">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="display text-4xl text-ink md:text-5xl">{stat.value}</dd>
                <dd className="mt-2 text-[0.82rem] font-medium tracking-wide text-ink/55">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* ---------- Methode (warm) ---------- */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div aria-hidden className="absolute -left-40 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border border-clay/20" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-clay-deep">
              <span aria-hidden className="inline-block h-px w-10 bg-clay" />
              {content.methode.eyebrow}
            </p>
          </Reveal>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
            <Reveal delay={100}>
              <h2 className="display text-4xl md:text-5xl">
                {content.methode.headline} <em>{content.methode.headlineEm}</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg leading-relaxed text-ink/70">
                {content.methode.intro}
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10 md:grid-cols-3">
            {content.methode.steps.map((phase, i) => (
              <Reveal key={phase.step} delay={i * 140} className="h-full">
                <div className="group h-full bg-paper p-9 transition-colors duration-500 hover:bg-cream md:p-11">
                  <p className="display text-5xl italic text-clay/60 transition-colors duration-500 group-hover:text-clay">
                    {phase.step}
                  </p>
                  <h3 className="display mt-6 text-2xl">{phase.title}</h3>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/65">{phase.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <figure className="mx-auto mt-20 max-w-2xl text-center">
              <blockquote className="display text-2xl italic leading-snug text-ink/85 md:text-3xl">
                {content.methode.quote}
              </blockquote>
              <figcaption className="eyebrow mt-5 text-clay-deep">
                {content.methode.quoteAuthor}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ---------- Gründerinnen ---------- */}
      <section className="bg-cream-deep py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={content.gruenderinnen.image}
                alt="Heike Kuhl und Martina Engel-Fürstberger"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-lg bg-ink px-7 py-5 text-cream md:-right-8">
              <p className="display text-lg italic text-gold-bright">Kuhl & Engel</p>
              <p className="mt-1 text-[0.8rem] text-cream/70">
                {team.founders.map((f) => f.name).join(" · ")}
              </p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
                {content.gruenderinnen.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                {content.gruenderinnen.headline}{" "}
                <em>{content.gruenderinnen.headlineEm}</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/70">
                {content.gruenderinnen.text}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 grid gap-6 sm:grid-cols-2">
                {team.founders.map((founder) => (
                  <div key={founder.name} className="border-l-2 border-gold/60 pl-5">
                    <p className="display text-lg">{founder.name}</p>
                    <p className="mt-1 text-[0.82rem] leading-relaxed text-ink/55">{founder.role}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={400}>
              <Link href="/ueber-uns" className="link-gold mt-10 inline-flex items-center gap-2 font-semibold text-gold">
                {content.gruenderinnen.linkLabel} <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Coach:innen ---------- */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow flex items-center justify-center gap-3 text-clay-deep">
              <span aria-hidden className="inline-block h-px w-10 bg-clay" />
              {content.coaches.eyebrow}
              <span aria-hidden className="inline-block h-px w-10 bg-clay" />
            </p>
            <h2 className="display mt-6 text-4xl md:text-5xl">
              {content.coaches.headline} <em>{content.coaches.headlineEm}</em>
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              {content.coaches.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {coaches.map((coach, i) => (
            <Reveal key={coach.name} delay={i * 80}>
              <figure className="text-center">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="text-[0.92rem] font-semibold leading-snug">{coach.name}</p>
                  <p className="mt-1 text-[0.78rem] leading-snug text-ink/55">{coach.fach}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-12 text-center text-[0.95rem] text-ink/60">
            {content.coaches.outro}{" "}
            <Link href="/ueber-uns" className="link-gold font-semibold text-gold">
              {content.coaches.linkLabel} <span aria-hidden>→</span>
            </Link>
          </p>
        </Reveal>
      </section>

      {/* ---------- Stimmen ---------- */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
                {content.stimmen.eyebrow}
              </p>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                {content.stimmen.headline} <em>{content.stimmen.headlineEm}</em>
              </h2>
            </div>
            {googleRating ? (
              <a
                href={googleRating.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-gold mb-2 text-[0.9rem] font-medium text-ink/55"
              >
                {googleRating.note} <span aria-hidden>→</span>
              </a>
            ) : (
              <p className="mb-2 text-[0.9rem] font-medium text-ink/55">
                {content.stimmen.ratingNote}
              </p>
            )}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={(i % 2) * 120}>
              <figure className="flex h-full flex-col rounded-xl border border-ink/10 bg-paper p-9 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_56px_-28px_rgba(14,29,43,0.3)] md:p-10">
                <p aria-hidden className="display text-6xl italic leading-none text-clay/40">„</p>
                <blockquote className="display mt-2 grow text-lg leading-relaxed md:text-xl">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4">
                  <span aria-hidden className="h-px w-8 bg-gold" />
                  <span>
                    <span className="block text-[0.95rem] font-semibold">{t.author}</span>
                    {t.meta && <span className="block text-[0.8rem] text-ink/50">{t.meta}</span>}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="mx-auto max-w-4xl px-5 pb-24 md:px-8 md:pb-32">
        <Reveal>
          <p className="eyebrow flex items-center justify-center gap-3 text-gold">
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            {content.faq.eyebrow}
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
          </p>
          <h2 className="display mt-6 text-center text-4xl md:text-5xl">
            {content.faq.headline} <em>{content.faq.headlineEm}</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12">
            <Accordion items={faqs} />
          </div>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 text-center text-[0.95rem] text-ink/60">
            {content.faq.outro}{" "}
            <a href={kontakt.phoneHref} className="link-gold font-semibold text-gold">
              {kontakt.phone}
            </a>
          </p>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
