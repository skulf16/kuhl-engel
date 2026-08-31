import type { Field } from "@/lib/cms/types";

/**
 * Inhalte der Seite /berufsorientierung/gruppenangebote (Schulklassen).
 */

export const KEY = "seite-bo-gruppenangebote";
export const TITLE = "Berufsorientierung – Gruppenangebote";
export const DESCRIPTION =
  "Die Schulklassen-Seite der Berufsorientierung – Hero, „Auf einen Blick“, Ablauf in drei Phasen, PraxisBO-Förderung und Abschluss-Aufruf.";

export type Content = {
  hero: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    intro: string;
    image: string;
  };
  aufEinenBlick: {
    question: string;
    answer: string;
    facts: { label: string; value: string }[];
  };
  ablauf: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    phasen: { phase: string; points: string[] }[];
  };
  foerderpartner: {
    text: string;
  };
  praxisbo: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    absatz1: string;
    absatz2: string;
    phoneLinkLabel: string;
    image: string;
  };
  cta: {
    headline: string;
    headlineEm: string;
    text: string;
    buttonLabel: string;
  };
  zurueck: {
    label: string;
  };
};

export const DEFAULTS: Content = {
  hero: {
    eyebrow: "Berufsorientierung · Für Schulen",
    headline: "Mein Berufseinstieg –",
    headlineEm: "das Seminar für ganze Klassen.",
    intro:
      "Null Bock oder könnte gut werden? Wir sagen: wird gut. Unser Projekt „Mein Berufseinstieg“ ist eigens für Schulen konzipiert und steht für Begegnung auf Augenhöhe, vielfältige Methoden und intensive Betreuung.",
    image: "/images/ke-jugend-team.jpg",
  },
  aufEinenBlick: {
    question: "Wie läuft das Gruppen-Seminar ab?",
    answer:
      "Das Coaching-Seminar dauert 2 bis 2,5 Tage und wird mit je einer Klasse an einem attraktiven Lernort außerhalb der Schule durchgeführt. Mehrere professionelle Coaches begleiten die Jugendlichen – in der ganzen Klasse, in kleinen Gruppen und teilweise einzeln. Über das Förderprogramm PraxisBO ist das Seminar für Brandenburger Schulen förderfähig, für öffentliche Schulen ohne zusätzliche Kosten.",
    facts: [
      { label: "Format", value: "2–2,5 Tage pro Klasse, externer Lernort" },
      { label: "Betreuung", value: "Mehrere Coaches, Klein- und Einzelgruppen" },
      { label: "Förderung", value: "PraxisBO – bis zu 35.000 € / Schuljahr" },
      { label: "Region", value: "Berlin und Brandenburg" },
    ],
  },
  ablauf: {
    eyebrow: "So läuft unsere Zusammenarbeit",
    headline: "Von der Planung bis zur",
    headlineEm: "Nachbereitung.",
    phasen: [
      {
        phase: "Vorbereitung",
        points: [
          "Komplette Organisation und Koordination mit allen Beteiligten",
          "Information an Schulleitung, Lehrkräfte, Schüler:innen und Eltern",
          "Inhaltliche Konzeption und Zusammenstellung des Teams",
        ],
      },
      {
        phase: "Durchführung",
        points: [
          "Team- und Kommunikationsübungen, Vertrauensübungen",
          "Talente, Werte und Haltung zur Schule herausarbeiten",
          "Mission Statement sowie kurz- und mittelfristige Ziele",
          "Verankerung im Kletterpark, individuelles Einzelcoaching",
        ],
      },
      {
        phase: "Nachbereitung",
        points: [
          "Evaluationsbögen auswerten",
          "Nachbesprechung mit der Schulleitung",
          "Berichterstattung in den Medien und Abrechnung",
        ],
      },
    ],
  },
  foerderpartner: {
    text: "Das Projekt „Praxisnahe Berufsorientierung“ wird aus Mitteln der Europäischen Union, der Bundesagentur für Arbeit und des Landes Brandenburg gefördert.",
  },
  praxisbo: {
    eyebrow: "Förderung über PraxisBO",
    headline: "Für öffentliche Schulen",
    headlineEm: "ohne zusätzliche Kosten.",
    absatz1:
      "PraxisBO ist ein Förderprogramm des Landes Brandenburg für weiterführende Schulen, finanziert aus Mitteln des Europäischen Sozialfonds und der Agentur für Arbeit. Darüber lassen sich Projekte zur Berufs- und Studienorientierung umsetzen.",
    absatz2:
      "Für mehrzügige Schulen stehen bis zu 35.000 € zzgl. Fahrtkosten pro Schuljahr zur Verfügung. Für öffentliche Schulen fallen keine zusätzlichen Kosten an; Schulen in privater Trägerschaft tragen einen Eigenanteil von 38 %.",
    phoneLinkLabel: "Wir beraten gern:",
    image: "/images/jugend-seminar.jpg",
  },
  cta: {
    headline: "Bring „Mein Berufseinstieg“",
    headlineEm: "an Deine Schule.",
    text: "Wie sich das Seminar optimal in den Projektablauf an Deiner Schule einbetten lässt, klären wir gern im persönlichen Gespräch – inklusive aller Fragen zur PraxisBO-Förderung.",
    buttonLabel: "Unverbindlich anfragen",
  },
  zurueck: {
    label: "← Zurück zur Berufsorientierung",
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
    key: "ablauf",
    label: "Ablauf – die drei Phasen der Zusammenarbeit",
    fields: [
      { type: "text", key: "eyebrow", label: "Kicker (kleine Zeile über der Überschrift)" },
      { type: "text", key: "headline", label: "Überschrift" },
      {
        type: "text",
        key: "headlineEm",
        label: "Überschrift – kursiver Teil",
        help: "Wird hinter der Überschrift kursiv dargestellt.",
      },
      {
        type: "objectList",
        key: "phasen",
        label: "Die drei Phasen",
        itemTitle: "phase",
        fixed: true,
        fields: [
          { type: "text", key: "phase", label: "Titel der Phase" },
          { type: "stringList", key: "points", label: "Häkchen-Punkte", itemLabel: "Punkt" },
        ],
      },
    ],
  },
  {
    type: "group",
    key: "foerderpartner",
    label: "Förderpartner – Logoleiste",
    fields: [
      {
        type: "textarea",
        key: "text",
        label: "Text neben den Logos",
        rows: 3,
        help: "Die vier Logos selbst sind fest hinterlegt.",
      },
    ],
  },
  {
    type: "group",
    key: "praxisbo",
    label: "Förderung über PraxisBO",
    fields: [
      { type: "text", key: "eyebrow", label: "Kicker (kleine Zeile über der Überschrift)" },
      { type: "text", key: "headline", label: "Überschrift" },
      {
        type: "text",
        key: "headlineEm",
        label: "Überschrift – kursiver Teil",
        help: "Wird hinter der Überschrift kursiv dargestellt.",
      },
      { type: "textarea", key: "absatz1", label: "Absatz 1", rows: 4 },
      { type: "textarea", key: "absatz2", label: "Absatz 2", rows: 4 },
      {
        type: "text",
        key: "phoneLinkLabel",
        label: "Text vor der Telefonnummer",
        help: "Die Telefonnummer selbst bearbeitest Du unter „Bausteine → Kontaktdaten“.",
      },
      { type: "image", key: "image", label: "Bild", help: IMAGE_HELP },
    ],
  },
  {
    type: "group",
    key: "cta",
    label: "Abschluss-Aufruf (dunkles Band unten)",
    fields: [
      { type: "text", key: "headline", label: "Überschrift" },
      {
        type: "text",
        key: "headlineEm",
        label: "Überschrift – kursiver Teil",
        help: "Wird hinter der Überschrift kursiv dargestellt.",
      },
      { type: "textarea", key: "text", label: "Text", rows: 3 },
      { type: "text", key: "buttonLabel", label: "Beschriftung des Buttons" },
    ],
  },
  {
    type: "group",
    key: "zurueck",
    label: "Zurück-Link am Seitenende",
    fields: [{ type: "text", key: "label", label: "Link-Text" }],
  },
];
