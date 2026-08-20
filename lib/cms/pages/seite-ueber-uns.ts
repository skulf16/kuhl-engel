import type { Field } from "@/lib/cms/types";

/**
 * Seiten-Inhalt "Über uns & Team" (/ueber-uns).
 * Enthält nur die seitenspezifischen Überschriften, Texte und Bilder –
 * Gründerinnen, Team und Standorte kommen aus den Bausteinen
 * "Team" bzw. "Standorte".
 */

export const KEY = "seite-ueber-uns";
export const TITLE = "Über uns & Team";
export const DESCRIPTION =
  "Alle Texte und Bilder der Seite „Über uns“ – Hero, Haltung, Überschriften für Gründerinnen, Team und Standorte sowie Zertifizierung und Abschluss-Banner.";

export type Content = {
  hero: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    intro: string;
    image: string;
  };
  motivation: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    text1: string;
    text2: string;
  };
  arbeitsweise: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    text1: string;
    text2: string;
  };
  gruenderinnen: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
  };
  team: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    intro: string;
  };
  standorte: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    linkLabel: string;
    hybridNote: string;
  };
  zertifizierung: {
    image: string;
    textVor: string;
    textFett: string;
    textNach: string;
  };
  ctaBand: {
    headline: string;
    headlineEm: string;
    text: string;
  };
};

export const DEFAULTS: Content = {
  hero: {
    eyebrow: "Über uns",
    headline: "Arbeit darf",
    headlineEm: "leicht sein.",
    intro:
      "Ganzheitliches Coaching für mehr Sinn und Freude im Berufsleben: Wir glauben daran, dass jeder Mensch etwas Wertvolles zu geben hat – und alle Potenziale dafür in sich trägt.",
    image: "/images/ke-duo-blick.jpg",
  },
  motivation: {
    eyebrow: "Was uns motiviert",
    headline: "Berufung",
    headlineEm: "statt Beruf.",
    text1:
      "Kuhl & Engel, das sind wir: Heike Kuhl und Martina Engel-Fürstberger. Wir arbeiten seit vielen Jahren als Coaches und möchten Dich als authentische Persönlichkeiten mit all unseren Erfahrungen in Deiner beruflichen Entwicklung unterstützen.",
    text2:
      "Statt höher, schneller, weiter plädieren wir als gesamtes Team für: selbstbestimmt, verbunden und erfüllt.",
  },
  arbeitsweise: {
    eyebrow: "Wie wir arbeiten",
    headline: "Auf",
    headlineEm: "Augenhöhe.",
    text1:
      "In unseren Coachings schaffen wir eine sichere und vertrauensvolle Atmosphäre, in der Du ankommen, loslassen und Du selbst sein darfst. Wir holen Dich da ab, wo Du gerade stehst – und erforschen gemeinsam, was Deine innere Stimme Dir sagt.",
    text2:
      "Wir arbeiten wertschätzend, ressourcenorientiert und bieten Dir systemisches Coaching auf höchstem Niveau.",
  },
  gruenderinnen: {
    eyebrow: "Die Gründerinnen",
    headline: "Zwei Wege,",
    headlineEm: "ein gemeinsames Warum.",
  },
  team: {
    eyebrow: "Gemeinsam stark",
    headline: "Unser",
    headlineEm: "Team.",
    intro:
      "Vielseitige Expertise, hohes Engagement und verschiedenste Biografien – alle zertifiziert, alle systemisch arbeitend.",
  },
  standorte: {
    eyebrow: "Unsere Standorte",
    headline: "Online, Berlin, Potsdam, Augsburg –",
    headlineEm: "oder bei Dir.",
    linkLabel: "Zum Standort",
    hybridNote:
      "Alle Coachings bieten wir auch hybrid an – vor Ort kombiniert mit Online-Terminen via Zoom.",
  },
  zertifizierung: {
    image: "/images/europanozert-siegel.png",
    textVor: "Kuhl & Engel steht für",
    textFett: "zertifizierte Qualität",
    textNach:
      ": Als AZAV-zugelassener Träger sind wir zu 100 % für das AVGS Coaching zertifiziert – für langjährige Erfahrung, individuelles und nachhaltiges Coaching.",
  },
  ctaBand: {
    headline: "Mach Dich mit uns",
    headlineEm: "auf den Weg.",
    text: "Buch Dir gleich ein kostenloses Erstgespräch – wir finden gemeinsam heraus, welche:r Coach:in am besten zu Dir passt.",
  },
};

const IMAGE_HELP = "JPG oder PNG hochladen – wird automatisch verkleinert.";

const headlineFields: Field[] = [
  { type: "text", key: "eyebrow", label: "Kicker (kleine Zeile über der Überschrift)" },
  { type: "text", key: "headline", label: "Überschrift" },
  {
    type: "text",
    key: "headlineEm",
    label: "Überschrift – kursiver Teil",
    help: "Wird hinter der Überschrift kursiv dargestellt.",
  },
];

export const FIELDS: Field[] = [
  {
    type: "group",
    key: "hero",
    label: "Hero – großes Bild oben",
    fields: [
      ...headlineFields,
      { type: "textarea", key: "intro", label: "Text unter der Überschrift", rows: 3 },
      { type: "image", key: "image", label: "Hintergrundbild", help: IMAGE_HELP },
    ],
  },
  {
    type: "group",
    key: "motivation",
    label: "Haltung links – „Was uns motiviert“",
    fields: [
      ...headlineFields,
      { type: "textarea", key: "text1", label: "Erster Absatz", rows: 4 },
      { type: "textarea", key: "text2", label: "Zweiter Absatz", rows: 3 },
    ],
  },
  {
    type: "group",
    key: "arbeitsweise",
    label: "Haltung rechts – „Wie wir arbeiten“",
    fields: [
      ...headlineFields,
      { type: "textarea", key: "text1", label: "Erster Absatz", rows: 4 },
      { type: "textarea", key: "text2", label: "Zweiter Absatz", rows: 3 },
    ],
  },
  {
    type: "group",
    key: "gruenderinnen",
    label: "Gründerinnen – Überschriften",
    help: "Die beiden Karten mit Fotos, Zitaten und Qualifikationen bearbeitest Du unter „Bausteine → Team“.",
    fields: [...headlineFields],
  },
  {
    type: "group",
    key: "team",
    label: "Team – Überschriften",
    help: "Die Coach:innen selbst (Fotos, Rollen, Zitate) bearbeitest Du unter „Bausteine → Team“.",
    fields: [
      ...headlineFields,
      { type: "textarea", key: "intro", label: "Kurztext rechts neben der Überschrift", rows: 3 },
    ],
  },
  {
    type: "group",
    key: "standorte",
    label: "Standorte – Überschriften",
    help: "Adressen und Bilder der Standorte bearbeitest Du unter „Bausteine → Standorte“.",
    fields: [
      ...headlineFields,
      { type: "text", key: "linkLabel", label: "Link-Text auf den Karten" },
      { type: "textarea", key: "hybridNote", label: "Hinweiszeile unter den Karten", rows: 2 },
    ],
  },
  {
    type: "group",
    key: "zertifizierung",
    label: "Zertifizierung – Siegel mit Text",
    fields: [
      { type: "image", key: "image", label: "Siegel-Bild", help: IMAGE_HELP },
      { type: "text", key: "textVor", label: "Text vor dem fett gedruckten Teil" },
      { type: "text", key: "textFett", label: "Fett gedruckter Teil" },
      {
        type: "textarea",
        key: "textNach",
        label: "Text nach dem fett gedruckten Teil",
        help: "Beginnt direkt hinter dem fetten Teil – Satzzeichen am Anfang mitschreiben.",
        rows: 3,
      },
    ],
  },
  {
    type: "group",
    key: "ctaBand",
    label: "Abschluss-Banner unten",
    help: "Button-Beschriftung und Telefonzeile des Banners sind auf allen Seiten gleich.",
    fields: [
      { type: "text", key: "headline", label: "Überschrift" },
      {
        type: "text",
        key: "headlineEm",
        label: "Überschrift – kursiver Teil",
        help: "Wird hinter der Überschrift kursiv dargestellt.",
      },
      { type: "textarea", key: "text", label: "Text unter der Überschrift", rows: 3 },
    ],
  },
];
