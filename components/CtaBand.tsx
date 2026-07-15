import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CONTACT } from "@/lib/data";

export default function CtaBand({
  title,
  text,
  informal = false,
}: {
  title?: React.ReactNode;
  text?: string;
  /** Du-Ansprache (nur für die Schüler:innen-Seite /berufsorientierung/berufsstart) */
  informal?: boolean;
}) {
  const fallbackTitle = informal ? (
    <>
      Sag ja zu: <em>Jetzt, nicht irgendwann.</em>
    </>
  ) : (
    <>
      Sagen Sie ja zu: <em>Jetzt, nicht irgendwann.</em>
    </>
  );
  const fallbackText = informal
    ? "Lerne uns in einem kostenlosen, unverbindlichen Erstgespräch kennen – telefonisch, online oder vor Ort."
    : "Lernen Sie uns in einem kostenlosen, unverbindlichen Erstgespräch kennen – telefonisch, online oder vor Ort.";
  return (
    <section className="relative overflow-hidden bg-cream-deep">
      <div aria-hidden className="display pointer-events-none absolute -bottom-24 right-0 select-none text-[22rem] italic leading-none text-gold/6">
        &amp;
      </div>
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="display text-4xl md:text-5xl">{title ?? fallbackTitle}</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">{text ?? fallbackText}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/kontakt"
                className="group inline-flex items-center justify-center gap-3 bg-ink px-8 py-4 font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-700"
              >
                Kostenloses Erstgespräch
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-4 py-4 font-semibold text-ink/80 transition-colors hover:text-gold"
              >
                {informal ? "oder ruf an:" : "oder rufen Sie an:"} {CONTACT.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
