import { FOUNDERS, TEAM, type Faq } from "@/lib/data";

export const BASE_URL = "https://kuhlundengel.de";

const ORG_ID = `${BASE_URL}/#organization`;

/** Offizielle Profile – verknüpft die Marke als Entity (Google Knowledge Graph, KI-Suchen). */
const SAME_AS = [
  "https://www.facebook.com/profile.php?id=100083691926340",
  "https://www.instagram.com/kuhlundengel/",
  "https://www.linkedin.com/company/kuhl-engel/",
  "https://www.youtube.com/@kuhlundengel-coaching",
  "https://www.tiktok.com/@kuhl.engel",
];

const mapUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

/** Site-weiter Graph: Organisation mit allen Standorten (einmal im Root-Layout). */
export const organizationGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": ORG_ID,
      name: "Kuhl & Engel – Jobcoaching",
      legalName: "Kuhl & Engel GbR",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logo.png`,
      },
      image: `${BASE_URL}/images/gruenderinnen.jpg`,
      description:
        "AZAV-zertifizierter Träger mit zwei Schwerpunkten: AVGS-gefördertes Jobcoaching für Erwachsene und Berufsorientierung für Jugendliche – in Berlin, Potsdam, Augsburg und online.",
      slogan: "Jetzt, nicht irgendwann.",
      foundingDate: "2018",
      email: "info@kuhlundengel.de",
      telephone: "+49 30 515653880",
      priceRange: "Mit AVGS-Gutschein kostenfrei",
      sameAs: SAME_AS,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+49 30 515653880",
        email: "info@kuhlundengel.de",
        availableLanguage: ["de", "en", "fr", "ru"],
      },
      knowsAbout: [
        "Jobcoaching",
        "AVGS Coaching (Aktivierungs- und Vermittlungsgutschein, § 45 SGB III)",
        "Karrierecoaching für Akademikerinnen und Akademiker",
        "Berufliche Neuorientierung",
        "Wiedereinstieg nach der Elternzeit",
        "Bewerbungscoaching",
        "Berufsorientierung für Jugendliche",
        "Systemisches Coaching",
      ],
      founder: [
        { "@id": `${BASE_URL}/ueber-uns#heike-kuhl` },
        { "@id": `${BASE_URL}/ueber-uns#martina-engel-fuerstberger` },
      ],
      areaServed: [
        { "@type": "City", name: "Berlin" },
        { "@type": "City", name: "Potsdam" },
        { "@type": "City", name: "Augsburg" },
        { "@type": "Country", name: "Deutschland" },
      ],
      knowsLanguage: ["de", "en", "fr", "ru"],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "AZAV-Trägerzulassung (Maßnahmezulassung, Certuria Certification Germany)",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bötzowstraße 28",
        postalCode: "10407",
        addressLocality: "Berlin",
        addressCountry: "DE",
      },
      location: [
        { "@id": `${BASE_URL}/#standort-berlin` },
        { "@id": `${BASE_URL}/#standort-potsdam` },
        { "@id": `${BASE_URL}/#standort-augsburg` },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#standort-berlin`,
      name: "Kuhl & Engel Jobcoaching – Standort Berlin",
      url: `${BASE_URL}/jobcoaching-berlin`,
      parentOrganization: { "@id": ORG_ID },
      telephone: "+49 30 515653880",
      hasMap: mapUrl("Kuhl & Engel Jobcoaching Bötzowstraße 28 10407 Berlin"),
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bötzowstraße 28",
        postalCode: "10407",
        addressLocality: "Berlin",
        addressRegion: "Berlin",
        addressCountry: "DE",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#standort-potsdam`,
      name: "Kuhl & Engel Jobcoaching – Standort Potsdam",
      url: `${BASE_URL}/jobcoaching-potsdam`,
      parentOrganization: { "@id": ORG_ID },
      telephone: "+49 30 515653880",
      hasMap: mapUrl("Kuhl & Engel Jobcoaching Gutenbergstraße 87 14467 Potsdam"),
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gutenbergstraße 87",
        postalCode: "14467",
        addressLocality: "Potsdam",
        addressRegion: "Brandenburg",
        addressCountry: "DE",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#standort-augsburg`,
      name: "Kuhl & Engel Jobcoaching – Standort Augsburg",
      url: `${BASE_URL}/kontakt`,
      parentOrganization: { "@id": ORG_ID },
      telephone: "+49 30 515653880",
      hasMap: mapUrl("Kuhl & Engel Jobcoaching Mauerberg 26 86152 Augsburg"),
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mauerberg 26",
        postalCode: "86152",
        addressLocality: "Augsburg",
        addressRegion: "Bayern",
        addressCountry: "DE",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Kuhl & Engel – Jobcoaching",
      inLanguage: "de",
      publisher: { "@id": ORG_ID },
    },
  ],
};

/** Service-Schema für eine Leistungsseite. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  areaServed?: string[];
  audience?: string;
  /** true = mit AVGS-Gutschein kostenfrei (Offer mit 0 €). */
  avgsFree?: boolean;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}${opts.path}#service`,
    name: opts.name,
    description: opts.description,
    url: `${BASE_URL}${opts.path}`,
    serviceType: opts.serviceType,
    provider: { "@id": ORG_ID },
    ...(opts.avgsFree
      ? {
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
            description:
              "Mit AVGS-Gutschein (Aktivierungs- und Vermittlungsgutschein) der Agentur für Arbeit oder des Jobcenters zu 100 % kostenfrei.",
          },
        }
      : {}),
    areaServed: (opts.areaServed ?? ["Berlin", "Potsdam", "Augsburg", "Deutschland (online)"]).map(
      (name) => ({ "@type": "Place", name }),
    ),
    audience: {
      "@type": "Audience",
      audienceType: opts.audience ?? "Akademikerinnen und Akademiker, Fach- und Führungskräfte",
    },
    availableChannel: [
      {
        "@type": "ServiceChannel",
        name: "Vor Ort",
        serviceLocation: { "@id": `${BASE_URL}/#standort-berlin` },
      },
      {
        "@type": "ServiceChannel",
        name: "Online-Coaching",
        serviceUrl: `${BASE_URL}/kontakt`,
      },
    ],
  };
}

/** FAQPage-Schema aus einer FAQ-Liste. */
export function faqSchema(items: Faq[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}${path}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** BreadcrumbList für Unterseiten. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: BASE_URL },
      ...crumbs.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: crumb.name,
        item: `${BASE_URL}${crumb.path}`,
      })),
    ],
  };
}

/** Stabile Anker-IDs aus Namen („Dr. Anna Mandel-Zakharova, Ph.D." → anna-mandel-zakharova). */
const personSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/dr\.|ph\.d\.|,/g, "")
    .replace(/ü/g, "ue")
    .replace(/ö/g, "oe")
    .replace(/ä/g, "ae")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/** Personen-Schema für das gesamte Team (Über-uns-Seite). */
export const teamGraph = {
  "@context": "https://schema.org",
  "@graph": [...FOUNDERS, ...TEAM].map((member) => ({
    "@type": "Person",
    "@id": `${BASE_URL}/ueber-uns#${personSlug(member.name)}`,
    name: member.name,
    jobTitle: member.role,
    worksFor: { "@id": ORG_ID },
    image: `${BASE_URL}${member.image}`,
    description: member.quali,
  })),
};

/** Article-Schema für Ratgeber-Seiten. */
export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${BASE_URL}${opts.path}#article`,
    headline: opts.headline,
    description: opts.description,
    url: `${BASE_URL}${opts.path}`,
    ...(opts.image ? { image: `${BASE_URL}${opts.image}` } : {}),
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    inLanguage: "de",
    isPartOf: { "@id": `${BASE_URL}/#website` },
  };
}
