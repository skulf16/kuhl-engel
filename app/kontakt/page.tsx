import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { CONTACT, STANDORTE } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Kontakt & Standorte",
  description:
    "Kontaktiere Kuhl & Engel: Rückruf-Service, Telefon 030 51565388-0 oder info@kuhlundengel.de. Standorte in Berlin, Potsdam, Augsburg – und online.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Kontakt & Standorte", path: "/kontakt" }])} />
      <PageHero
        eyebrow="Kontakt"
        title={
          <>
            Der erste Schritt ist <em>ein Gespräch.</em>
          </>
        }
        intro="Ruf uns an, schreib uns oder nutze den Rückruf-Service – wir melden uns schnellstmöglich und finden gemeinsam heraus, welches Coaching zu Dir passt."
      />

      {/* Kontakt + Formular */}
      <section id="rueckruf" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden className="inline-block h-px w-10 bg-gold" />
                Direkter Draht
              </p>
              <h2 className="display mt-6 text-4xl">
                Wir freuen uns <em>auf Dich.</em>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <dl className="mt-10 space-y-8">
                <div>
                  <dt className="eyebrow text-ink/45">Telefon</dt>
                  <dd className="mt-2">
                    <a href={CONTACT.phoneHref} className="display link-gold text-2xl hover:text-gold md:text-3xl">
                      {CONTACT.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-ink/45">E-Mail</dt>
                  <dd className="mt-2">
                    <a href={`mailto:${CONTACT.email}`} className="display link-gold text-2xl hover:text-gold md:text-3xl">
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-ink/45">Deine Ansprechpartnerinnen</dt>
                  <dd className="mt-2 leading-relaxed text-ink/70">
                    Heike Kuhl & Martina Engel-Fürstberger
                    <br />
                    <span className="text-[0.9rem] text-ink/55">
                      Organisation & Coach-Vermittlung: Anna Podakova
                    </span>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="border border-ink/10 bg-cream-deep p-8 md:p-12">
              <h3 className="display text-3xl">
                Rückruf, <em>bitte!</em>
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/65">
                Hinterlasse uns Deine Nummer – wir rufen Dich zu Deiner Wunschzeit
                zurück.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Standorte */}
      <section className="bg-cream-deep py-24 md:py-32">
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
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  {standort.href && (
                    <Link
                      href={standort.href}
                      className="link-gold mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold"
                    >
                      Mehr zum Standort <span aria-hidden>→</span>
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
    </>
  );
}
