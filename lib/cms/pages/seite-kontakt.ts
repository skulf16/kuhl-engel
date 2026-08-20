import type { Field } from "@/lib/cms/types";

/**
 * Seiten-Inhalt "Kontakt" (/kontakt).
 * Enthält nur die seitenspezifischen Überschriften und Texte –
 * Telefonnummer/E-Mail kommen aus dem Baustein "Kontaktdaten",
 * die Standort-Karten aus dem Baustein "Standorte".
 */

export const KEY = "seite-kontakt";
export const TITLE = "Kontakt";
export const DESCRIPTION =
  "Texte der Kontaktseite – Hero, Kontaktblock mit Ansprechpartnerinnen, Rückruf-Kasten und Standort-Überschriften.";

export type Content = {
  hero: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    intro: string;
  };
  direkt: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    labelTelefon: string;
    labelEmail: string;
    labelAnsprech: string;
    ansprechpartnerinnen: string;
    organisation: string;
  };
  rueckruf: {
    headline: string;
    headlineEm: string;
    text: string;
  };
  standorte: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    linkLabel: string;
    hybridNote: string;
  };
};

export const DEFAULTS: Content = {
  hero: {
    eyebrow: "Kontakt",
    headline: "Der erste Schritt ist",
    headlineEm: "ein Gespräch.",
    intro:
      "Ruf uns an, schreib uns oder nutze den Rückruf-Service – wir melden uns schnellstmöglich und finden gemeinsam heraus, welches Coaching zu Dir passt.",
  },
  direkt: {
    eyebrow: "Direkter Draht",
    headline: "Wir freuen uns",
    headlineEm: "auf Dich.",
    labelTelefon: "Telefon",
    labelEmail: "E-Mail",
    labelAnsprech: "Deine Ansprechpartnerinnen",
    ansprechpartnerinnen: "Heike Kuhl & Martina Engel-Fürstberger",
    organisation: "Organisation & Coach-Vermittlung: Anna Podakova",
  },
  rueckruf: {
    headline: "Rückruf,",
    headlineEm: "bitte!",
    text: "Hinterlass uns Deine Nummer – wir rufen Dich zu Deiner Wunschzeit zurück.",
  },
  standorte: {
    eyebrow: "Unsere Standorte",
    headline: "Online, Berlin, Potsdam, Augsburg –",
    headlineEm: "oder bei Dir.",
    linkLabel: "Mehr zum Standort",
    hybridNote:
      "Alle Coachings bieten wir auch hybrid an – vor Ort kombiniert mit Online-Terminen via Zoom.",
  },
};

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
    label: "Hero – Überschrift ganz oben",
    fields: [
      ...headlineFields,
      { type: "textarea", key: "intro", label: "Text unter der Überschrift", rows: 3 },
    ],
  },
  {
    type: "group",
    key: "direkt",
    label: "Kontaktblock links – „Direkter Draht“",
    help: "Telefonnummer und E-Mail-Adresse selbst bearbeitest Du unter „Bausteine → Kontaktdaten“.",
    fields: [
      ...headlineFields,
      { type: "text", key: "labelTelefon", label: "Beschriftung über der Telefonnummer" },
      { type: "text", key: "labelEmail", label: "Beschriftung über der E-Mail-Adresse" },
      { type: "text", key: "labelAnsprech", label: "Beschriftung über den Ansprechpartnerinnen" },
      { type: "text", key: "ansprechpartnerinnen", label: "Ansprechpartnerinnen" },
      { type: "text", key: "organisation", label: "Zusatzzeile (Organisation)" },
    ],
  },
  {
    type: "group",
    key: "rueckruf",
    label: "Rückruf-Kasten rechts",
    help: "Die Formularfelder selbst sind fest eingebaut und nicht editierbar.",
    fields: [
      { type: "text", key: "headline", label: "Überschrift" },
      {
        type: "text",
        key: "headlineEm",
        label: "Überschrift – kursiver Teil",
        help: "Wird hinter der Überschrift kursiv dargestellt.",
      },
      { type: "textarea", key: "text", label: "Text über dem Formular", rows: 3 },
    ],
  },
  {
    type: "group",
    key: "standorte",
    label: "Standorte – Überschriften",
    help: "Adressen der Standorte bearbeitest Du unter „Bausteine → Standorte“.",
    fields: [
      ...headlineFields,
      { type: "text", key: "linkLabel", label: "Link-Text auf den Karten" },
      { type: "textarea", key: "hybridNote", label: "Hinweiszeile unter den Karten", rows: 2 },
    ],
  },
];
