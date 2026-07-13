import type { Metadata } from "next";

/**
 * Einheitliche Seiten-Metadaten: Title, Description, Canonical plus
 * seitenspezifisches OpenGraph & Twitter-Card (statt des generischen
 * Homepage-OG aus dem Root-Layout).
 */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  /** OG-Bild, Default: Gründerinnen-Foto. */
  image?: string;
  imageAlt?: string;
}): Metadata {
  const image = opts.image ?? "/images/gruenderinnen.jpg";
  const imageAlt =
    opts.imageAlt ??
    "Heike Kuhl und Martina Engel-Fürstberger, Gründerinnen von Kuhl & Engel Jobcoaching";
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: opts.path,
      type: "website",
      locale: "de_DE",
      siteName: "Kuhl & Engel – Jobcoaching",
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [image],
    },
  };
}
