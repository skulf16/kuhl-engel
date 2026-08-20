import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import {
  KEY as UEBER_UNS_KEY,
  DEFAULTS as UEBER_UNS_DEFAULTS,
} from "@/lib/cms/pages/seite-ueber-uns";
import { loadPage, getStandorte, getTeam } from "@/lib/content";
import { breadcrumbSchema, teamGraph } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Über uns & Team – zertifizierte Coach:innen",
  description:
    "Kuhl & Engel, das sind Heike Kuhl und Martina Engel-Fürstberger – mit einem Team aus 14 zertifizierten, systemisch arbeitenden Coach:innen – online, in Berlin, Potsdam und Augsburg.",
  path: "/ueber-uns",
});

export default async function UeberUnsPage() {
  const [c, team, standorte] = await Promise.all([
    loadPage(UEBER_UNS_KEY, UEBER_UNS_DEFAULTS),
    getTeam(),
    getStandorte(),
  ]);

  return (
    <>
      <JsonLd data={teamGraph} />
      <JsonLd data={breadcrumbSchema([{ name: "Über uns & Team", path: "/ueber-uns" }])} />
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

      {/* Haltung */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
                {c.motivation.eyebrow}
              </p>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                {c.motivation.headline} <em>{c.motivation.headlineEm}</em>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink/70">
                <p>{c.motivation.text1}</p>
                <p>{c.motivation.text2}</p>
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal delay={100}>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
                {c.arbeitsweise.eyebrow}
              </p>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                {c.arbeitsweise.headline} <em>{c.arbeitsweise.headlineEm}</em>
              </h2>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink/70">
                <p>{c.arbeitsweise.text1}</p>
                <p>{c.arbeitsweise.text2}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gründerinnen */}
      <section className="bg-cream-deep py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span aria-hidden className="inline-block h-px w-10 bg-gold" />
              {c.gruenderinnen.eyebrow}
            </p>
            <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
              {c.gruenderinnen.headline} <em>{c.gruenderinnen.headlineEm}</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {team.founders.map((founder, i) => (
              <Reveal key={founder.name} delay={i * 150}>
                <article className="group grid h-full overflow-hidden border border-ink/10 bg-paper sm:grid-cols-[42%_1fr]">
                  <div className="relative aspect-[4/5] sm:aspect-auto">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 24vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col p-8">
                    <h3 className="display text-2xl">{founder.name}</h3>
                    <p className="eyebrow mt-2 !text-[0.6rem] text-gold">{founder.role}</p>
                    <blockquote className="display mt-5 grow text-[1.05rem] italic leading-relaxed text-ink/75">
                      „{founder.quote}“
                    </blockquote>
                    <p className="mt-5 border-t border-ink/10 pt-4 text-[0.8rem] leading-relaxed text-ink/50">
                      {founder.quali}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            {c.team.eyebrow}
          </p>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <h2 className="display max-w-xl text-4xl md:text-5xl">
              {c.team.headline} <em>{c.team.headlineEm}</em>
            </h2>
            <p className="mb-2 max-w-md text-[0.95rem] leading-relaxed text-ink/60">
              {c.team.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.members.map((member, i) => (
            <Reveal key={member.name} delay={(i % 3) * 100}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-cream-deep">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {member.quote && (
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <p className="display text-[0.95rem] italic leading-relaxed text-cream">
                        „{member.quote}“
                      </p>
                    </div>
                  )}
                </div>
                <h3 className="display mt-5 text-xl transition-colors group-hover:text-gold md:text-2xl">
                  {member.name}
                </h3>
                <p className="eyebrow mt-1.5 !text-[0.58rem] text-gold">{member.role}</p>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-ink/55">{member.quali}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Standorte */}
      <section id="standorte" className="scroll-mt-24 bg-cream-deep py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span aria-hidden className="inline-block h-px w-10 bg-gold" />
              {c.standorte.eyebrow}
            </p>
            <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
              {c.standorte.headline} <em>{c.standorte.headlineEm}</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {standorte.map((standort, i) => (
              <Reveal key={standort.city} delay={i * 100} className="h-full">
                <div className="group flex h-full flex-col overflow-hidden border border-ink/10 bg-paper transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_56px_-28px_rgba(14,29,43,0.3)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={standort.image}
                      alt={`Standort ${standort.city} – Kuhl & Engel`}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex grow flex-col p-7">
                    <p className="display text-sm italic text-gold">{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="display mt-3 text-2xl transition-colors group-hover:text-gold">
                      {standort.city}
                    </h3>
                    <p className="eyebrow mt-1.5 !text-[0.58rem] text-ink/45">{standort.label}</p>
                    <p className="mt-4 grow leading-relaxed text-ink/70">
                      {standort.address.map((line) => (
                        <span key={line} className="block">{line}</span>
                      ))}
                    </p>
                    {standort.href && (
                      <Link href={standort.href} className="link-gold mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                        {c.standorte.linkLabel} <span aria-hidden>→</span>
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <p className="mt-10 text-[0.95rem] text-ink/60">
              {c.standorte.hybridNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Zertifizierung */}
      <section className="py-16 md:py-20">
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-5 text-center md:flex-row md:text-left">
            <Image
              src={c.zertifizierung.image}
              alt="Europanozert AZAV-Siegel Maßnahmezulassung"
              width={120}
              height={120}
              className="shrink-0 border border-ink/10 bg-white p-2"
            />
            <p className="text-lg leading-relaxed text-ink/75">
              {c.zertifizierung.textVor}{" "}
              <strong className="text-ink">{c.zertifizierung.textFett}</strong>
              {c.zertifizierung.textNach}
            </p>
          </div>
        </Reveal>
      </section>

      <CtaBand
        title={
          <>
            {c.ctaBand.headline} <em>{c.ctaBand.headlineEm}</em>
          </>
        }
        text={c.ctaBand.text}
      />
    </>
  );
}
