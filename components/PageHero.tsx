import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imagePosition = "object-[center_30%]",
  cta,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  image?: string;
  /** object-position-Klasse, um den Bildausschnitt pro Foto zu steuern */
  imagePosition?: string;
  /** optionaler Button, z. B. Sprungmarke zum Buchungsfunnel */
  cta?: { href: string; label: string };
}) {
  const ctaIsAnchor = cta?.href.startsWith("#");
  return (
    <section className="relative overflow-hidden bg-cream pb-20 pt-36 md:pb-28 md:pt-48">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className={`hero-zoom object-cover ${imagePosition}`}
          />
          {/* heller Verlauf nur auf der Textseite – das Foto bleibt voll sichtbar */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/70 to-transparent md:via-cream/45 md:to-transparent" />
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow hero-rise flex items-center gap-3 text-gold">
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            {eyebrow}
          </p>
          <h1 className="display hero-rise mt-6 text-4xl text-ink md:text-6xl" style={{ animationDelay: "120ms" }}>
            {title}
          </h1>
          {intro && (
            <p className="hero-rise mt-6 max-w-2xl text-lg leading-relaxed text-ink/80" style={{ animationDelay: "240ms" }}>
              {intro}
            </p>
          )}
          {cta && (
            <a
              href={cta.href}
              className="hero-rise group mt-9 inline-flex items-center gap-3 bg-ink px-8 py-4 font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-700"
              style={{ animationDelay: "360ms" }}
            >
              {cta.label}
              <span
                aria-hidden
                className={`transition-transform duration-300 ${
                  ctaIsAnchor ? "group-hover:translate-y-0.5" : "group-hover:translate-x-1"
                }`}
              >
                {ctaIsAnchor ? "↓" : "→"}
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
