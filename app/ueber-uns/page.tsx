import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { FOUNDERS, STANDORTE, TEAM } from "@/lib/data";
import { breadcrumbSchema, foundersSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Über uns & Team",
  description:
    "Kuhl & Engel, das sind Heike Kuhl und Martina Engel-Fürstberger – mit einem Team aus 15+ zertifizierten, systemisch arbeitenden Coaches in Berlin, Potsdam, Augsburg und online.",
  alternates: { canonical: "/ueber-uns" },
};

export default function UeberUnsPage() {
  return (
    <>
      <JsonLd data={foundersSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "Über uns & Team", path: "/ueber-uns" }])} />
      <PageHero
        eyebrow="Über uns"
        title={
          <>
            Arbeit darf <em>leicht sein.</em>
          </>
        }
        intro="Ganzheitliches Coaching für mehr Sinn und Freude im Berufsleben: Wir glauben daran, dass jeder Mensch etwas Wertvolles zu geben hat – und alle Potenziale dafür in sich trägt."
        image="/images/gruenderinnen.jpg"
      />

      {/* Haltung */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
                Was uns motiviert
              </p>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                Berufung <em>statt Beruf.</em>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink/70">
                <p>
                  Kuhl & Engel, das sind wir: Heike Kuhl und Martina
                  Engel-Fürstberger. Wir arbeiten seit vielen Jahren als Coaches und
                  möchten Dich als authentische Persönlichkeiten mit all unseren
                  Erfahrungen in Deiner beruflichen Entwicklung unterstützen.
                </p>
                <p>
                  Statt höher, schneller, weiter plädieren wir als gesamtes Team
                  für: selbstbestimmt, verbunden und erfüllt.
                </p>
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal delay={100}>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
                Wie wir arbeiten
              </p>
              <h2 className="display mt-6 text-4xl md:text-5xl">
                Auf <em>Augenhöhe.</em>
              </h2>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink/70">
                <p>
                  In unseren Coachings schaffen wir eine sichere und vertrauensvolle
                  Atmosphäre, in der Du ankommen, loslassen und Du selbst sein
                  darfst. Wir holen Dich da ab, wo Du gerade stehst – und erforschen
                  gemeinsam, was Deine innere Stimme Dir sagt.
                </p>
                <p>
                  Wir arbeiten wertschätzend, ressourcenorientiert und bieten Dir
                  systemisches Coaching auf höchstem Niveau.
                </p>
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
              Die Gründerinnen
            </p>
            <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
              Zwei Wege, <em>ein gemeinsames Warum.</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {FOUNDERS.map((founder, i) => (
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
            Gemeinsam stark
          </p>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <h2 className="display max-w-xl text-4xl md:text-5xl">
              Unser <em>Team.</em>
            </h2>
            <p className="mb-2 max-w-md text-[0.95rem] leading-relaxed text-ink/60">
              Vielseitige Expertise, hohes Engagement und verschiedenste Biografien –
              alle zertifiziert, alle systemisch arbeitend.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, i) => (
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
              Unsere Standorte
            </p>
            <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
              Berlin, Potsdam, Augsburg – <em>oder bei Dir.</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STANDORTE.map((standort, i) => (
              <Reveal key={standort.city} delay={i * 100} className="h-full">
                <div className="group flex h-full flex-col border border-ink/10 bg-paper p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_56px_-28px_rgba(14,29,43,0.3)]">
                  <p className="display text-sm italic text-gold">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="display mt-4 text-2xl transition-colors group-hover:text-gold">
                    {standort.city}
                  </h3>
                  <p className="eyebrow mt-1.5 !text-[0.58rem] text-ink/45">{standort.label}</p>
                  <p className="mt-5 grow leading-relaxed text-ink/70">
                    {standort.address.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </p>
                  {standort.href && (
                    <Link href={standort.href} className="link-gold mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                      Zum Standort <span aria-hidden>→</span>
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <p className="mt-10 text-[0.95rem] text-ink/60">
              Alle Coachings bieten wir auch hybrid an – vor Ort kombiniert mit
              Online-Terminen via Zoom.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Zertifizierung */}
      <section className="on-dark bg-ink py-16 text-cream md:py-20">
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-5 text-center md:flex-row md:text-left">
            <Image
              src="/images/azav-siegel.jpg"
              alt="Certuria AZAV-Siegel Maßnahmezulassung"
              width={130}
              height={103}
              className="shrink-0 bg-white p-2"
            />
            <p className="text-lg leading-relaxed text-cream/75">
              Kuhl & Engel steht für <strong className="text-cream">zertifizierte Qualität</strong>:
              Als AZAV-zugelassener Träger sind wir zu 100 % für das AVGS Coaching
              zertifiziert – für langjährige Erfahrung, individuelles und
              nachhaltiges Coaching.
            </p>
          </div>
        </Reveal>
      </section>

      <CtaBand
        title={
          <>
            Mach Dich mit uns <em>auf den Weg.</em>
          </>
        }
        text="Buche Dir gleich ein kostenloses Erstgespräch – wir finden gemeinsam heraus, welche:r Coach:in am besten zu Dir passt."
      />
    </>
  );
}
