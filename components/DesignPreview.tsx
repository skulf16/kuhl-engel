"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

/**
 * Live-Vorschau der drei hellen Farbkonzepte. Alle Farben laufen über
 * lokale CSS-Variablen (--p-*), damit die Seite das globale Design nicht
 * berührt. Layout, Fotos und Typografie entsprechen der echten Seite.
 */
type ThemeKey = "salbei" | "terra" | "steel";

const THEMES: Record<
  ThemeKey,
  { name: string; sub: string; vars: Record<string, string> }
> = {
  salbei: {
    name: "Salbei & Leinen",
    sub: "ruhig · natürlich",
    vars: {
      "--p-bg": "#F7F5EF",
      "--p-tint": "#E9EDE3",
      "--p-paper": "#FDFCF9",
      "--p-text": "#2E3A33",
      "--p-soft": "rgba(46,58,51,0.66)",
      "--p-accent": "#5F7F6C",
      "--p-accent-deep": "#4C6A59",
      "--p-second": "#B9862C",
      "--p-second-deep": "#96690F",
      "--p-line": "rgba(46,58,51,0.14)",
    },
  },
  terra: {
    name: "Terrakotta & Puder",
    sub: "warm · herzlich",
    vars: {
      "--p-bg": "#FBF6F0",
      "--p-tint": "#F3E4DA",
      "--p-paper": "#FFFDFA",
      "--p-text": "#40312B",
      "--p-soft": "rgba(64,49,43,0.66)",
      "--p-accent": "#C05F3F",
      "--p-accent-deep": "#A94F32",
      "--p-second": "#D9A05B",
      "--p-second-deep": "#A56F24",
      "--p-line": "rgba(64,49,43,0.14)",
    },
  },
  steel: {
    name: "Steelblau & Creme",
    sub: "frisch · markentreu",
    vars: {
      "--p-bg": "#F8F7F2",
      "--p-tint": "#E4EDF3",
      "--p-paper": "#FFFEFB",
      "--p-text": "#22405C",
      "--p-soft": "rgba(34,64,92,0.66)",
      "--p-accent": "#3C6187",
      "--p-accent-deep": "#2F4F70",
      "--p-second": "#E8A33D",
      "--p-second-deep": "#B26F14",
      "--p-line": "rgba(34,64,92,0.14)",
    },
  },
};

const STATS = [
  { value: "14", label: "Coachinnen im Team" },
  { value: "2", label: "Gründerinnen" },
  { value: "5,0", label: "★ Google-Bewertung" },
  { value: "100 %", label: "AVGS-förderfähig" },
];

export default function DesignPreview() {
  const [theme, setTheme] = useState<ThemeKey>("salbei");
  const t = THEMES[theme];

  return (
    <div style={t.vars as CSSProperties}>
      {/* Dunkler Balken hinter dem fixen Header + Umschalter */}
      <div className="pt-16 md:pt-20" style={{ background: "var(--p-text)" }}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 md:px-8">
          <p className="eyebrow" style={{ color: "rgba(255,255,255,0.75)" }}>
            Design-Vorschau · Farbkonzepte
          </p>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(THEMES) as ThemeKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setTheme(key)}
                className="px-4 py-2 text-[0.82rem] font-semibold transition-all duration-300"
                style={
                  theme === key
                    ? { background: "var(--p-bg)", color: "var(--p-text)" }
                    : {
                        background: "transparent",
                        color: "rgba(255,255,255,0.75)",
                        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.3)",
                      }
                }
              >
                {THEMES[key].name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: "var(--p-bg)", color: "var(--p-text)" }}>
        {/* ---------- Heller Hero ---------- */}
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 md:px-8 md:pt-24 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="eyebrow flex items-center gap-3" style={{ color: "var(--p-accent)" }}>
              <span aria-hidden className="inline-block h-px w-10" style={{ background: "var(--p-accent)" }} />
              100 % AVGS-zertifiziert · Berlin · Potsdam · Online
            </p>
            <h1 className="display mt-7 text-[2.4rem] leading-[1.06] md:text-6xl">
              Den richtigen Weg finden.{" "}
              <em style={{ color: "var(--p-accent)" }}>Beruflich und persönlich.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: "var(--p-soft)" }}>
              AVGS-gefördertes Jobcoaching, spezialisiert auf Akademikerinnen –
              begleitet von 14 Coachinnen. Mit Gutschein der Agentur für Arbeit
              zu 100 % kostenfrei.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <span
                className="inline-flex cursor-pointer items-center gap-3 px-8 py-4 font-semibold transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: "var(--p-accent)", color: "var(--p-bg)" }}
              >
                Kostenloses Erstgespräch <span aria-hidden>→</span>
              </span>
              <span
                className="inline-flex cursor-pointer items-center px-8 py-4 font-semibold"
                style={{ boxShadow: "inset 0 0 0 1px var(--p-accent)", color: "var(--p-accent-deep)" }}
              >
                Angebote entdecken
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/atelier-wide.jpg"
                alt="Coaching-Gespräch bei Kuhl & Engel"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
            </div>
            <div
              className="absolute -bottom-5 -left-5 hidden px-6 py-4 md:block"
              style={{ background: "var(--p-text)", color: "var(--p-bg)" }}
            >
              <p className="display text-lg italic" style={{ color: "var(--p-second)" }}>
                Jetzt, nicht irgendwann.
              </p>
            </div>
            <div
              aria-hidden
              className="absolute -right-4 -top-4 -z-10 h-full w-full"
              style={{ background: "var(--p-tint)" }}
            />
          </div>
        </section>

        {/* ---------- Kennzahlen ---------- */}
        <section style={{ background: "var(--p-tint)" }}>
          <dl className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-10 md:grid-cols-4 md:px-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="px-4 py-4 text-center">
                <dd className="display text-4xl md:text-5xl">{stat.value}</dd>
                <dd className="mt-1.5 text-[0.82rem] font-medium" style={{ color: "var(--p-soft)" }}>
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ---------- Zwei-Wege-Karten ---------- */}
        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <p className="eyebrow flex items-center gap-3" style={{ color: "var(--p-accent)" }}>
            <span aria-hidden className="inline-block h-px w-10" style={{ background: "var(--p-accent)" }} />
            Unsere zwei Bereiche
          </p>
          <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
            Zwei Wege, <em style={{ color: "var(--p-accent)" }}>ein Ziel.</em>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                img: "/images/coaching-sq-2.jpg",
                kicker: "Für Akademikerinnen & Akademiker",
                title: "AVGS Jobcoaching",
                text: "Neustart, Wiedereinstieg oder Bewerbung – mit AVGS-Gutschein zu 100 % kostenfrei.",
              },
              {
                img: "/images/jugend-quadrat.jpg",
                kicker: "Für Schulen & Lehrkräfte",
                title: "Berufsorientierung",
                text: "„Mein Berufseinstieg“: Gruppenprojekte und Einzelcoaching für Jugendliche.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group cursor-pointer overflow-hidden border transition-all duration-500 hover:-translate-y-1.5"
                style={{ background: "var(--p-paper)", borderColor: "var(--p-line)" }}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={card.img}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <p className="eyebrow !text-[0.6rem]" style={{ color: "var(--p-second-deep)" }}>
                    {card.kicker}
                  </p>
                  <h3 className="display mt-2 text-2xl md:text-3xl">{card.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed" style={{ color: "var(--p-soft)" }}>
                    {card.text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--p-accent-deep)" }}>
                    Mehr erfahren <span aria-hidden>→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- FactBox ---------- */}
        <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
          <aside
            className="border border-l-4 p-8 md:p-10"
            style={{ background: "var(--p-paper)", borderColor: "var(--p-line)", borderLeftColor: "var(--p-second)" }}
          >
            <p className="eyebrow" style={{ color: "var(--p-second-deep)" }}>Auf einen Blick</p>
            <h2 className="display mt-4 text-2xl md:text-3xl">Was ist AVGS Coaching?</h2>
            <p className="mt-4 max-w-3xl leading-relaxed" style={{ color: "var(--p-soft)" }}>
              AVGS Coaching ist ein individuelles Einzelcoaching zur beruflichen
              Orientierung, das über den Aktivierungs- und Vermittlungsgutschein
              nach § 45 SGB III finanziert wird – für Sie zu 100 % kostenfrei.
            </p>
          </aside>
        </section>

        {/* ---------- Ehemals dunkle Sektion → getönte Fläche ---------- */}
        <section style={{ background: "var(--p-tint)" }}>
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
            <p className="eyebrow flex items-center gap-3" style={{ color: "var(--p-accent-deep)" }}>
              <span aria-hidden className="inline-block h-px w-10" style={{ background: "var(--p-accent-deep)" }} />
              Unsere Methode
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {["Veränderung erarbeiten", "Veränderung umsetzen", "Veränderung stabilisieren"].map(
                (phase, i) => (
                  <div key={phase} className="border p-8" style={{ background: "var(--p-paper)", borderColor: "var(--p-line)" }}>
                    <p className="display text-4xl italic" style={{ color: "var(--p-accent)" }}>
                      {["I", "II", "III"][i]}
                    </p>
                    <h3 className="display mt-4 text-xl md:text-2xl">{phase}</h3>
                  </div>
                ),
              )}
            </div>
            <figure className="mx-auto mt-14 max-w-2xl text-center">
              <blockquote className="display text-2xl italic leading-snug md:text-3xl">
                „Welch eine himmlische Empfindung ist es, seinem Herzen zu folgen.“
              </blockquote>
              <figcaption className="eyebrow mt-4" style={{ color: "var(--p-second-deep)" }}>
                J. W. von Goethe
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="max-w-3xl">
            <h2 className="display text-4xl md:text-5xl">
              Sagen Sie ja zu: <em style={{ color: "var(--p-accent)" }}>Jetzt, nicht irgendwann.</em>
            </h2>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span
                className="inline-flex cursor-pointer items-center gap-3 px-8 py-4 font-semibold transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: "var(--p-text)", color: "var(--p-bg)" }}
              >
                Kostenloses Erstgespräch <span aria-hidden>→</span>
              </span>
              <span className="font-semibold" style={{ color: "var(--p-soft)" }}>
                oder rufen Sie an: 030 51565388-0
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
