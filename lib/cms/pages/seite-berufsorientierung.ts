import type { Field } from "@/lib/cms/types";

/**
 * Inhalte der Übersichtsseite /berufsorientierung.
 * Die drei Angebotskarten kommen aus dem Baustein
 * „Berufsorientierung – Angebotskarten“, die Kontaktdaten aus „Kontaktdaten“.
 */

export const KEY = "seite-berufsorientierung";
export const TITLE = "Berufsorientierung";
export const DESCRIPTION =
  "Übersichtsseite der Berufsorientierung – Hero, Kennzahlen, „Auf einen Blick“, die drei Angebote, Wirkung und Kontakt für Schulen.";

export type Content = {
  hero: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    intro: string;
    image: string;
    ctaLabel: string;
  };
  kennzahlen: {
    items: { value: string; label: string }[];
  };
  aufEinenBlick: {
    question: string;
    answer: string;
    facts: { label: string; value: string }[];
  };
  angebote: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    linkLabel: string;
  };
  wirkung: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    image: string;
    bullets: string[];
    outro: string;
    phoneLinkLabel: string;
  };
  kontakt: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    text: string;
    phoneLinkLabel: string;
  };
};

export const DEFAULTS: Content = {
  hero: {
    eyebrow: "Berufsorientierung · Für Schulen, Lehrkräfte & Partner",
    headline: "Mein Berufseinstieg –",
    headlineEm: "Orientierung, die wirkt.",
    intro:
      "Für die meisten Jugendlichen ist die Berufs- oder Studienwahl ein schwerer Brocken – bei viel Druck und wenig Erfahrung. Seit über 15 Jahren begleiten wir Schulen in Berlin und Brandenburg mit Coachings für Schulklassen und Einzelcoachings zur beruflichen Orientierung. Professionell, jugendgerecht und mit messbarer Wirkung.",
    image: "/images/jugend-klassen-coaching.jpg",
    ctaLabel: "Unverbindlich anfragen",
  },
  kennzahlen: {
    items: [
      { value: "53", label: "Schulprojekte seit 2016" },
      { value: "4.133", label: "Schüler:innen gecoacht" },
      { value: "13", label: "Schulen allein 2025" },
    ],
  },
  aufEinenBlick: {
    question: "Was leistet „Mein Berufseinstieg“?",
    answer:
      "„Mein Berufseinstieg“ ist unser Programm zur Berufsorientierung für Jugendliche – als 2- bis 2,5-tägiges Projekt für ganze Schulklassen oder als Einzelcoaching für Schüler:innen und Abiturient:innen. Mehrere professionelle Coaches arbeiten mit jugendgerechten, spielerischen Methoden. Seit 2016 waren das 53 Schulprojekte mit 4.133 Schüler:innen. Das Ergebnis: Die Jugendlichen kennen ihre Stärken, entwickeln eine klare berufliche Richtung und starten motivierter in Schule, Praktikum und Bewerbung.",
    facts: [
      { label: "Für wen", value: "Schulen, Lehrkräfte und Kooperationspartner" },
      { label: "Formate", value: "Projekte für Schulklassen & Einzelcoaching" },
      { label: "Erfahrung", value: "Seit über 15 Jahren · 53 Schulprojekte · 4.133 Schüler:innen" },
      { label: "Förderung", value: "In Brandenburg über PraxisBO förderfähig" },
    ],
  },
  angebote: {
    eyebrow: "Unsere Angebote zur Berufsorientierung",
    headline: "Drei Wege, wie wir",
    headlineEm: "Deine Schüler:innen stärken.",
    linkLabel: "Mehr erfahren",
  },
  wirkung: {
    eyebrow: "Die Wirkung",
    headline: "Schüler:innen, die teilnehmen,",
    headlineEm: "starten klarer und motivierter.",
    image: "/images/jugend-beelitz-1.jpg",
    bullets: [
      "lernen ihre Stärken und Interessen kennen",
      "beschäftigen sich mit ihren Werten und Prioritäten",
      "entwickeln ein Mission Statement, das sie berührt und motiviert",
      "haben eine klare Vorstellung von ihrer beruflichen Richtung",
      "können sich selbst besser einschätzen",
      "lernen, eigene Ziele zu entwerfen und ihre Zukunft zu planen",
    ],
    outro:
      "Die motiviertere Grundhaltung zeigt sich im Schulalltag ebenso wie bei der weiteren Orientierung – etwa in der Studienberatung, im BIZ oder bei der Planung eines Schülerpraktikums.",
    phoneLinkLabel: "Fragen? Ruf uns an:",
  },
  kontakt: {
    eyebrow: "Kontakt",
    headline: "Hol „Mein Berufseinstieg“",
    headlineEm: "an Deine Schule.",
    text: "Im unverbindlichen Gespräch finden wir gemeinsam heraus, welches Format zu Deiner Schule oder Einrichtung passt – und wie die Förderung funktioniert.",
    phoneLinkLabel: "Oder ruf direkt an:",
  },
};

const IMAGE_HELP = "JPG oder PNG hochladen – wird automatisch verkleinert.";

export const FIELDS: Field[] = [
  {
    type: "group",
    key: "hero",
    label: "Hero – großes Bild oben",
    fields: [
      { type: "text", key: "eyebrow", label: "Kicker (kleine Zeile über der Überschrift)" },
      { type: "text", key: "headline", label: "Überschrift" },
      {
        type: "text",
        key: "headlineEm",
        label: "Überschrift – kursiver Teil",
        help: "Wird hinter der Überschrift kursiv dargestellt.",
      },
      { type: "textarea", key: "intro", label: "Einleitungstext", rows: 4 },
      { type: "image", key: "image", label: "Hintergrundbild", help: IMAGE_HELP },
      { type: "text", key: "ctaLabel", label: "Beschriftung des Buttons (springt zum Kontaktformular)" },
    ],
  },
  {
    type: "group",
    key: "kennzahlen",
    label: "Kennzahlen-Band (unter dem Hero)",
    fields: [
      {
        type: "objectList",
        key: "items",
        label: "Kennzahlen",
        itemTitle: "label",
        fixed: true,
        fields: [
          { type: "text", key: "value", label: "Zahl" },
          { type: "text", key: "label", label: "Beschriftung" },
        ],
      },
    ],
  },
  {
    type: "group",
    key: "aufEinenBlick",
    label: "„Auf einen Blick“ – Faktenkasten",
    fields: [
      { type: "text", key: "question", label: "Frage (Überschrift des Kastens)" },
      { type: "textarea", key: "answer", label: "Antwort", rows: 5 },
      {
        type: "objectList",
        key: "facts",
        label: "Fakten (Kurzangaben unter der Antwort)",
        itemTitle: "label",
        fields: [
          { type: "text", key: "label", label: "Bezeichnung" },
          { type: "text", key: "value", label: "Angabe" },
        ],
      },
    ],
  },
  {
    type: "group",
    key: "angebote",
    label: "Die drei Angebote – Überschriften",
    help: "Die drei Karten selbst bearbeitest Du unter „Bausteine → Berufsorientierung – Angebotskarten“.",
    fields: [
      { type: "text", key: "eyebrow", label: "Kicker (kleine Zeile über der Überschrift)" },
      { type: "text", key: "headline", label: "Überschrift" },
      {
        type: "text",
        key: "headlineEm",
        label: "Überschrift – kursiver Teil",
        help: "Wird hinter der Überschrift kursiv dargestellt.",
      },
      { type: "text", key: "linkLabel", label: "Link-Text auf jeder Karte" },
    ],
  },
  {
    type: "group",
    key: "wirkung",
    label: "Die Wirkung – Bild und Häkchen-Liste",
    fields: [
      { type: "text", key: "eyebrow", label: "Kicker (kleine Zeile über der Überschrift)" },
      { type: "text", key: "headline", label: "Überschrift" },
      {
        type: "text",
        key: "headlineEm",
        label: "Überschrift – kursiver Teil",
        help: "Wird hinter der Überschrift kursiv dargestellt.",
      },
      { type: "image", key: "image", label: "Bild", help: IMAGE_HELP },
      { type: "stringList", key: "bullets", label: "Häkchen-Punkte", itemLabel: "Punkt" },
      { type: "textarea", key: "outro", label: "Absatz unter der Liste", rows: 3 },
      {
        type: "text",
        key: "phoneLinkLabel",
        label: "Text vor der Telefonnummer",
        help: "Die Telefonnummer selbst bearbeitest Du unter „Bausteine → Kontaktdaten“.",
      },
    ],
  },
  {
    type: "group",
    key: "kontakt",
    label: "Kontakt – Anfrage für Schulen",
    help: "Das Formular selbst ist fest eingebaut und kann hier nicht verändert werden.",
    fields: [
      { type: "text", key: "eyebrow", label: "Kicker (kleine Zeile über der Überschrift)" },
      { type: "text", key: "headline", label: "Überschrift" },
      {
        type: "text",
        key: "headlineEm",
        label: "Überschrift – kursiver Teil",
        help: "Wird hinter der Überschrift kursiv dargestellt.",
      },
      { type: "textarea", key: "text", label: "Einleitungstext", rows: 3 },
      {
        type: "text",
        key: "phoneLinkLabel",
        label: "Text vor der Telefonnummer",
        help: "Die Telefonnummer selbst bearbeitest Du unter „Bausteine → Kontaktdaten“.",
      },
    ],
  },
];
