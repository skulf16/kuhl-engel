import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  image?: string;
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-ink pb-20 pt-36 text-cream md:pb-28 md:pt-48">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-zoom object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        </>
      )}
      {/* dezentes Linienornament */}
      <div aria-hidden className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-cream/8" />
      <div aria-hidden className="absolute -right-8 -top-8 h-96 w-96 rounded-full border border-cream/6" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow hero-rise flex items-center gap-3 text-gold-bright">
            <span aria-hidden className="inline-block h-px w-10 bg-gold-bright" />
            {eyebrow}
          </p>
          <h1 className="display hero-rise mt-6 text-4xl md:text-6xl" style={{ animationDelay: "120ms" }}>
            {title}
          </h1>
          {intro && (
            <p className="hero-rise mt-6 max-w-2xl text-lg leading-relaxed text-cream/75" style={{ animationDelay: "240ms" }}>
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
