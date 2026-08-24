import Image from "next/image";
import Reveal from "@/components/Reveal";

type GalerieBild = {
  src: string;
  alt: string;
  /** Panorama-Bild über die volle Breite */
  wide?: boolean;
};

/**
 * Bildergalerie der Standort-Räume für die Jobcoaching-Standortseiten.
 */
export default function StandortGalerie({
  eyebrow = "Einblicke",
  headline,
  headlineEm,
  images,
}: {
  eyebrow?: string;
  headline: string;
  headlineEm: string;
  images: GalerieBild[];
}) {
  return (
    <section className="bg-cream-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span aria-hidden className="inline-block h-px w-10 bg-gold" />
            {eyebrow}
          </p>
          <h2 className="display mt-6 max-w-2xl text-4xl md:text-5xl">
            {headline} <em>{headlineEm}</em>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {images.map((bild, i) => (
            <Reveal
              key={bild.src}
              delay={i * 100}
              className={bild.wide ? "sm:col-span-2" : undefined}
            >
              <div
                className={`group relative overflow-hidden ${
                  bild.wide ? "aspect-[21/8]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={bild.src}
                  alt={bild.alt}
                  fill
                  sizes={bild.wide ? "(max-width: 640px) 100vw, 80vw" : "(max-width: 640px) 100vw, 40vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
