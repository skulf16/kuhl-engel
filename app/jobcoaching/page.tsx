import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import FactBox from "@/components/FactBox";
import JsonLd from "@/components/JsonLd";
import { CONTACT, JOBCOACHING_LEISTUNGEN } from "@/lib/data";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Jobcoaching – Karrierecoaching für Akademikerinnen und Akademiker",
  description:
    "Jobcoaching bei Kuhl & Engel: systemisches Karrierecoaching für berufliche Orientierung, Bewerbung und Neustart – mit AVGS-Gutschein 100 % kostenfrei. Berlin, Potsdam, Augsburg & online.",
  path: "/jobcoaching",
  image: "/images/coaching-warm.jpg",
  imageAlt: "Coaching-Gespräch bei Kuhl & Engel",
});

const GRUENDE = [
  {
    title: "Nachhaltig & ganzheitlich",
    text: "Wir entwickeln mit Dir eine berufliche Ausrichtung, die Dich langfristig motiviert – nicht die schnelle Notlösung.",
  },
  {
    title: "Empathisch & wertschätzend",
    text: "Zugewandte Coaches, die Deinen Handlungsspielraum mit Dir neu definieren. Immer auf Augenhöhe.",
  },
  {
    title: "Persönlich & individuell",
    text: "Kein Schema F: Du gibst die Richtung an, wir begleiten Dich an Deinen Bedürfnissen ausgerichtet.",
  },
  {
    title: "Professionell & erfahren",
    text: "15+ zertifizierte, systemisch ausgebildete Coaches mit vielseitiger Expertise und langjähriger Erfahrung.",
  },
];

export default function JobcoachingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Jobcoaching",
          description:
            "Systemisches Jobcoaching und Karrierecoaching für Akademikerinnen und Akademiker, Fach- und Führungskräfte: berufliche Orientierung, Bewerbung und Neustart – mit AVGS-Gutschein förderfähig.",
          path: "/jobcoaching",
          serviceType: "Jobcoaching / Karrierecoaching",
        })}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Jobcoaching", path: "/jobcoaching" }])} />

      <PageHero
        eyebrow="Jobcoaching · Für Erwachsene"
        title={
          <>
            Jobcoaching, das <em>wirklich weiterbringt.</em>
          </>
        }
        intro="Ob berufliche Orientierung, der nächste Karriereschritt oder ein kompletter Neustart: Als AVGS-zertifizierte Jobcoaches begleiten wir Dich dabei, eine Tätigkeit zu finden, die zu Dir passt – und Dir langfristig gefällt. Mit AVGS-Gutschein für Dich vollständig kostenfrei."
        image="/images/coaching-warm.jpg"
      />

      {/* Auf einen Blick */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        <Reveal>
          <FactBox
            question="Was ist Jobcoaching?"
            answer="Jobcoaching ist eine individuelle 1:1-Begleitung rund um Beruf und Karriere – von der beruflichen Orientierung über die Bewerbung bis zum Neustart. Bei Kuhl & Engel arbeiten wir systemisch und ganzheitlich und sind auf Akademikerinnen und Akademiker, Fach- und Führungskräfte spezialisiert. Über den AVGS-Gutschein der Agentur für Arbeit ist das Coaching für Dich zu 100 % kostenfrei."
            facts={[
              { label: "Für wen", value: "Jobsuchende, Akademikerinnen und Akademiker, Fach- & Führungskräfte" },
              { label: "Themen", value: "Orientierung, Bewerbung, Karriere, Neustart" },
              { label: "Kosten", value: "Mit AVGS-Gutschein 0 €" },
              { label: "Orte", value: "Berlin, Potsdam, Augsburg, online oder hybrid" },
            ]}
          />
        </Reveal>
      </section>

      {/* Die Angebote (Pillar → Detail) */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            Unsere Jobcoaching-Angebote
          </p>
          <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
            Ein Ziel – <em>vier Wege dorthin.</em>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {JOBCOACHING_LEISTUNGEN.map((item, i) => (
            <Reveal key={item.slug} delay={i * 120} className="h-full">
              <Link
                href={item.slug}
                className="group flex h-full flex-col overflow-hidden border border-ink/10 bg-paper transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-28px_rgba(14,29,43,0.35)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex grow flex-col p-7">
                  <span className="display text-sm italic text-gold">{item.nr}</span>
                  <h3 className="display mt-3 text-2xl transition-colors group-hover:text-gold">{item.title}</h3>
                  <p className="eyebrow mt-2 !text-[0.6rem] text-ink/45">{item.claim}</p>
                  <p className="mt-4 grow text-[0.95rem] leading-relaxed text-ink/65">{item.text}</p>
                  <span className="link-gold mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    Mehr erfahren <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gründe (dunkel) */}
      <section className="on-dark bg-ink py-24 text-cream md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold-bright">
              <span aria-hidden className="inline-block h-px w-10 bg-gold-bright" />
              Warum Kuhl & Engel
            </p>
            <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
              Gute Gründe, mit uns zu <em>arbeiten.</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden border border-cream/12 bg-cream/12 sm:grid-cols-2">
            {GRUENDE.map((grund, i) => (
              <Reveal key={grund.title} delay={i * 100} className="h-full">
                <div className="h-full bg-ink p-9 md:p-11">
                  <span className="display text-4xl italic text-gold-bright/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display mt-5 text-2xl">{grund.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-cream/65">{grund.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="/avgs-coaching"
                className="group inline-flex items-center gap-3 bg-cream px-8 py-4 font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-bright"
              >
                AVGS Coaching starten
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <a href={CONTACT.phoneHref} className="font-semibold text-cream/80 transition-colors hover:text-gold-bright">
                oder ruf an: {CONTACT.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Stell Dir eine Arbeit vor, die <em>zu Dir passt.</em>
          </>
        }
        text="Klingt weltfremd? Wir sind überzeugt: Das geht. Lerne uns in einem kostenlosen Erstgespräch kennen."
      />
    </>
  );
}
