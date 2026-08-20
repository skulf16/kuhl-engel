import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { breadcrumbSchema } from "@/lib/schema";
import { KEY, DEFAULTS } from "@/lib/cms/pages/seite-bo-berufsstart";
import { loadPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hilfreiches für den Berufsstart – Infos, Links & Vorlagen",
  description:
    "Studium, duales Studium oder Ausbildung? Hilfreiche Links, Lebenslauf-Vorlagen und Ausbildungsbörsen für Jugendliche auf dem Weg in den Beruf – kuratiert von Kuhl & Engel.",
  alternates: { canonical: "/berufsorientierung/berufsstart" },
};

export default async function BerufsstartPage() {
  const c = await loadPage(KEY, DEFAULTS);
  const sections = [c.wege, c.lebenslauf, c.ausbildung];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Berufsorientierung", path: "/berufsorientierung" },
          { name: "Für den Berufsstart", path: "/berufsorientierung/berufsstart" },
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
        imagePosition="object-[70%_35%]"
      />

      <section className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="mb-14 border border-ink/10 bg-cream-deep px-6 py-4 text-[0.9rem] leading-relaxed text-ink/65">
            <span className="font-semibold text-ink">{c.hinweis.strong}</span>{" "}
            {c.hinweis.text}{" "}
            <Link href="/berufsorientierung" className="link-gold font-semibold text-gold">
              {c.hinweis.linkLabel}
            </Link>
            .
          </p>
        </Reveal>
        <Reveal>
          <div>
            <div className="flex items-baseline gap-5">
              <span className="display text-sm italic text-gold">{c.videos.nr}</span>
              <h2 className="display text-3xl md:text-4xl">{c.videos.title}</h2>
            </div>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink/70">
              {c.videos.intro}
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {c.videos.items.map((video) => (
                <YouTubeEmbed key={video.videoId} {...video} />
              ))}
            </div>
            <p className="mt-5 text-[0.8rem] leading-relaxed text-ink/50">
              {c.videos.datenschutz}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-16">
          {sections.map((section, i) => (
            <Reveal key={section.nr} delay={i * 80}>
              <div>
                <div className="flex items-baseline gap-5">
                  <span className="display text-sm italic text-gold">{section.nr}</span>
                  <h2 className="display text-3xl md:text-4xl">{section.title}</h2>
                </div>
                <p className="mt-5 max-w-2xl leading-relaxed text-ink/70">{section.intro}</p>
                <div className={`mt-8 grid gap-6 sm:grid-cols-2 ${section.links.length > 2 ? "lg:grid-cols-3" : ""}`}>
                  {section.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col overflow-hidden border border-ink/10 bg-paper transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_56px_-24px_rgba(14,29,43,0.35)]"
                    >
                      <span className="relative block aspect-[16/9] overflow-hidden">
                        <Image
                          src={link.image}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </span>
                      <span className="flex grow items-start justify-between gap-3 p-5">
                        <span className="text-[0.95rem] font-semibold leading-snug transition-colors group-hover:text-gold">
                          {link.label}
                        </span>
                        <span aria-hidden className="text-gold transition-transform duration-300 group-hover:translate-x-1">↗</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-16 border border-ink/10 border-l-4 border-l-gold bg-paper p-8 md:p-10">
            <p className="eyebrow text-gold">{c.begleitung.eyebrow}</p>
            <h2 className="display mt-4 text-2xl md:text-3xl">
              {c.begleitung.headline} <em>{c.begleitung.headlineEm}</em>
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">
              {c.begleitung.textBefore}{" "}
              <Link href="/berufsorientierung/einzelcoaching" className="link-gold font-semibold text-gold">
                {c.begleitung.link1Label}
              </Link>{" "}
              {c.begleitung.textMiddle}{" "}
              <Link href="/berufsorientierung/gruppenangebote" className="link-gold font-semibold text-gold">
                {c.begleitung.link2Label}
              </Link>{" "}
              {c.begleitung.textAfter}
            </p>
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
        href="/berufsorientierung#kontakt"
        label={c.cta.buttonLabel}
      />

      <div className="bg-cream-deep py-6 text-center">
        <Link href="/berufsorientierung" className="link-gold text-sm font-semibold text-gold">
          {c.zurueck.label}
        </Link>
      </div>
    </>
  );
}
