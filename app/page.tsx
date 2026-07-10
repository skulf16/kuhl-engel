import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Accordion from "@/components/Accordion";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import {
  BEREICHE,
  CONTACT,
  FAQS_AVGS,
  FOUNDERS,
  TESTIMONIALS,
} from "@/lib/data";

const STATS = [
  { value: "14", label: "Coachinnen im Team" },
  { value: "2", label: "Gründerinnen" },
  { value: "5,0", label: "★ Google-Bewertung" },
  { value: "100 %", label: "AVGS-förderfähig" },
];

const METHODE = [
  {
    step: "I",
    title: "Veränderung erarbeiten",
    text: "Neue Perspektiven, Werte und Kompetenzen entwickeln – mit kreativen Denkansätzen für berufliche und persönliche Herausforderungen.",
  },
  {
    step: "II",
    title: "Veränderung umsetzen",
    text: "Unterstützung und Motivation im Veränderungsprozess, kontinuierliche Begleitung unter Einbeziehung Deines persönlichen Umfelds.",
  },
  {
    step: "III",
    title: "Veränderung stabilisieren",
    text: "Berufliche und soziale Kompetenzen erweitern, Orientierung am Arbeitsmarkt stärken, Qualifizierungsbedarf identifizieren.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(FAQS_AVGS, "/")} />
      {/* ---------- Hero ---------- */}
      <section className="on-dark relative flex min-h-svh flex-col justify-center overflow-hidden bg-ink text-cream">
        <Image
          src="/images/atelier-wide.jpg"
          alt="Coaching-Gespräch bei Kuhl & Engel"
          fill
          priority
          sizes="100vw"
          className="hero-zoom object-cover object-[center_35%] opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/45 to-ink" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-40 pt-40 text-center md:px-8">
          <p className="eyebrow hero-rise inline-flex items-center gap-2.5 border border-cream/25 bg-ink/40 px-4 py-2 text-cream/90 backdrop-blur-sm">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold-bright" />
            100 % AVGS-zertifiziert · Berlin · Potsdam · Augsburg · Online
          </p>
          <h1 className="display mx-auto mt-8 max-w-4xl text-[2.4rem] md:text-7xl lg:text-[5.4rem]">
            <span className="hero-rise block" style={{ animationDelay: "120ms" }}>
              Den richtigen Weg finden.
            </span>
            <span className="hero-rise block" style={{ animationDelay: "240ms" }}>
              <em>Beruflich und persönlich.</em>
            </span>
          </h1>
          <p
            className="hero-rise mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-cream/75 md:text-xl"
            style={{ animationDelay: "360ms" }}
          >
            Systemisches Coaching bei Kuhl & Engel – AVGS-gefördertes Jobcoaching,
            spezialisiert auf Akademikerinnen, und Berufsorientierung für Schulen,
            Lehrkräfte und Kooperationspartner. Zwei Wege, ein Klick:
          </p>
          <div
            className="hero-rise mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "480ms" }}
          >
            <a
              href="#wege"
              className="group inline-flex items-center gap-3 bg-cream px-8 py-4 font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-bright"
            >
              Meinen Weg wählen
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-3 border border-cream/30 px-8 py-4 font-semibold text-cream transition-all duration-300 hover:border-gold-bright hover:text-gold-bright"
            >
              {CONTACT.phone}
            </a>
          </div>
        </div>

        {/* Scroll-Hinweis */}
        <div className="absolute bottom-28 left-1/2 hidden -translate-x-1/2 md:block" aria-hidden>
          <div className="scroll-drip relative h-14 w-px overflow-hidden bg-cream/20" />
        </div>
      </section>

      {/* ---------- Kennzahlen (überlappen den Hero) ---------- */}
      <section className="relative z-10 mx-auto -mt-20 max-w-6xl px-5 md:px-8">
        <Reveal>
          <dl className="grid grid-cols-2 divide-ink/10 border border-ink/10 bg-paper shadow-[0_32px_80px_-32px_rgba(14,29,43,0.35)] md:grid-cols-4 md:divide-x">
            {STATS.map((stat) => (
              <div key={stat.label} className="px-6 py-8 text-center md:py-10">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="display text-4xl text-ink md:text-5xl">{stat.value}</dd>
                <dd className="mt-2 text-[0.82rem] font-medium tracking-wide text-ink/55">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* ---------- Positionierung ---------- */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
                Spezialisiert auf Akademikerinnen und Akademiker
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                Anspruchsvolle Laufbahnen brauchen{" "}
                <em>anspruchsvolles Coaching.</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/70">
                Studium, Promotion, Verantwortung – und trotzdem die Frage: War das
                schon alles? Mit langjähriger Erfahrung und maßgeschneidertem Ansatz
                begleiten wir Akademikerinnen und Akademiker auf dem Weg zu einem Beruf, der
                wirklich passt. Kein Schema F, sondern ein Prozess auf der Höhe
                Deines Werdegangs.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <ul className="mt-9 grid gap-4 sm:grid-cols-2">
                {[
                  "Stärken und Talente präzise erkennen",
                  "Klarheit über das, was Du wirklich willst",
                  "Langfristig und groß denken",
                  "Begleitung in Deinem Tempo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.95rem] font-medium">
                    <span aria-hidden className="display mt-0.5 italic text-gold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={400}>
              <Link href="/ueber-uns" className="link-gold mt-10 inline-flex items-center gap-2 font-semibold text-gold">
                Lerne uns kennen <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          {/* Bildkomposition */}
          <Reveal delay={150} className="relative">
            <div className="relative ml-6 aspect-[4/5] overflow-hidden md:ml-14">
              <Image
                src="/images/coaching-sq-1.jpg"
                alt="Einzelcoaching in den Räumen von Kuhl & Engel"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-8 left-0 w-52 border-8 border-cream bg-cream md:w-64">
              <Image
                src="/images/raum.jpg"
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
                Unsere zwei Bereiche
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
              </p>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                Zwei Wege, <em>ein Ziel: Orientierung, die trägt.</em>
              </h2>
              <p className="mt-5 leading-relaxed text-ink/65">
                Ein Klick führt direkt zum passenden Angebot – für Jobsuchende oder
                für Schulen, Lehrkräfte und Kooperationspartner.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {BEREICHE.map((bereich, i) => (
              <Reveal key={bereich.slug} delay={i * 140} className="h-full">
                <Link
                  href={bereich.slug}
                  className="group relative flex h-full flex-col overflow-hidden border border-ink/10 bg-paper transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-32px_rgba(14,29,43,0.4)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={bereich.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                    <p className="eyebrow absolute left-6 top-6 border border-cream/30 bg-ink/40 px-3 py-1.5 text-cream backdrop-blur-sm">
                      {bereich.kicker}
                    </p>
                  </div>
                  <div className="flex grow flex-col p-8 md:p-10">
                    <h3 className="display text-3xl transition-colors group-hover:text-gold md:text-4xl">
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
                    <span className="mt-8 inline-flex items-center gap-3 self-start bg-ink px-6 py-3.5 font-semibold text-cream transition-all duration-300 group-hover:bg-ink-700">
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

      {/* ---------- Methode (dunkel) ---------- */}
      <section className="on-dark relative overflow-hidden bg-ink py-24 text-cream md:py-36">
        <div aria-hidden className="absolute -left-40 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border border-cream/6" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold-bright">
              <span aria-hidden className="inline-block h-px w-10 bg-gold-bright" />
              Unsere Methode
            </p>
          </Reveal>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
            <Reveal delay={100}>
              <h2 className="display text-4xl md:text-5xl">
                Systemisch. Ganzheitlich. <em>Nachhaltig.</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg leading-relaxed text-cream/70">
                Du bist immer Teil von Systemen, die Du selbst mitgestaltest – eines
                Teams, einer Organisation, einer Familie. Deshalb schauen wir nicht
                nur auf Deinen Lebenslauf, sondern auf das Ganze: Gefühle, Gedanken,
                Verhalten und Kommunikation.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-cream/12 bg-cream/12 md:grid-cols-3">
            {METHODE.map((phase, i) => (
              <Reveal key={phase.step} delay={i * 140} className="h-full">
                <div className="group h-full bg-ink p-9 transition-colors duration-500 hover:bg-ink-800 md:p-11">
                  <p className="display text-5xl italic text-gold-bright/60 transition-colors duration-500 group-hover:text-gold-bright">
                    {phase.step}
                  </p>
                  <h3 className="display mt-6 text-2xl">{phase.title}</h3>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-cream/65">{phase.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <figure className="mx-auto mt-20 max-w-2xl text-center">
              <blockquote className="display text-2xl italic leading-snug text-cream/90 md:text-3xl">
                „Welch eine himmlische Empfindung ist es, seinem Herzen zu folgen.“
              </blockquote>
              <figcaption className="eyebrow mt-5 text-gold-bright">J. W. von Goethe</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ---------- Gründerinnen ---------- */}
      <section className="bg-cream-deep py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/gruenderinnen.jpg"
                alt="Heike Kuhl und Martina Engel-Fürstberger"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-ink px-7 py-5 text-cream md:-right-8">
              <p className="display text-lg italic text-gold-bright">Kuhl & Engel</p>
              <p className="mt-1 text-[0.8rem] text-cream/70">Heike Kuhl · Martina Engel-Fürstberger</p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
                Wer hinter Kuhl & Engel steht
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                Zwei Gründerinnen, ein Anspruch: <em>Berufung statt Beruf.</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/70">
                Von Frauen gegründet, von Coachinnen getragen: Hinter uns steht ein
                Team von 14 erfahrenen Coachinnen und einem Coach – mit eigenen
                Brüchen, Neustarts und Karrieren. Statt höher, schneller, weiter
                plädieren wir für selbstbestimmt, verbunden und erfüllt. Wer von
                einer Frau gecoacht werden möchte, sagt es einfach im Erstgespräch.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 grid gap-6 sm:grid-cols-2">
                {FOUNDERS.map((founder) => (
                  <div key={founder.name} className="border-l-2 border-gold/60 pl-5">
                    <p className="display text-lg">{founder.name}</p>
                    <p className="mt-1 text-[0.82rem] leading-relaxed text-ink/55">{founder.role}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={400}>
              <Link href="/ueber-uns" className="link-gold mt-10 inline-flex items-center gap-2 font-semibold text-gold">
                Das ganze Team kennenlernen <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Stimmen ---------- */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
                Stimmen unserer Klient:innen
              </p>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                Ergebnisse, die <em>für sich sprechen.</em>
              </h2>
            </div>
            <p className="mb-2 text-[0.9rem] font-medium text-ink/55">
              5,0 ★ · 25 Google-Bewertungen
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={(i % 2) * 120}>
              <figure className="flex h-full flex-col border border-ink/10 bg-paper p-9 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_56px_-28px_rgba(14,29,43,0.3)] md:p-10">
                <p aria-hidden className="display text-6xl italic leading-none text-gold/30">„</p>
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
            Häufige Fragen
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
          </p>
          <h2 className="display mt-6 text-center text-4xl md:text-5xl">
            Gut zu <em>wissen.</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12">
            <Accordion items={FAQS_AVGS} />
          </div>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 text-center text-[0.95rem] text-ink/60">
            Deine Frage war nicht dabei? Ruf uns an:{" "}
            <a href={CONTACT.phoneHref} className="link-gold font-semibold text-gold">
              {CONTACT.phone}
            </a>
          </p>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
