import type { Faq } from "@/lib/data";

export const BASE_URL = "https://kuhlundengel.de";

const ORG_ID = `${BASE_URL}/#organization`;

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
      email: "info@kuhlundengel.de",
      telephone: "+49 30 515653880",
      priceRange: "Mit AVGS-Gutschein kostenfrei",
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
    areaServed: (opts.areaServed ?? ["Berlin", "Potsdam", "Augsburg", "Deutschland (online)"]).map(
      (name) => ({ "@type": "Place", name }),
    ),
    audience: {
      "@type": "Audience",
      audienceType: opts.audience ?? "Akademiker:innen, Fach- und Führungskräfte",
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

/** Personen-Schema für die Gründerinnen (Über-uns-Seite). */
export const foundersSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/ueber-uns#heike-kuhl`,
      name: "Heike Kuhl",
      jobTitle: "Gründerin & Standortmanagerin Berlin",
      worksFor: { "@id": ORG_ID },
      image: `${BASE_URL}/images/team-heike.jpg`,
      knowsAbout: [
        "Systemisch-integratives Coaching",
        "Supervision",
        "Paarcoaching",
        "Familien-Sozialtherapie",
      ],
    },
    {
      "@type": "Person",
      "@id": `${BASE_URL}/ueber-uns#martina-engel-fuerstberger`,
      name: "Martina Engel-Fürstberger",
      jobTitle: "Gründerin & Standortmanagerin Potsdam",
      worksFor: { "@id": ORG_ID },
      image: `${BASE_URL}/images/team-martina.jpg`,
      knowsAbout: [
        "Lehr- und Senior-Coaching (DCV, IOBC)",
        "Psychopathologie",
        "Seminar- und Ausbildungsleitung",
      ],
    },
  ],
};
