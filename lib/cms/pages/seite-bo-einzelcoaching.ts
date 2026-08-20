import type { Field } from "@/lib/cms/types";

/**
 * Inhalte der Seite /berufsorientierung/einzelcoaching.
 */

export const KEY = "seite-bo-einzelcoaching";
export const TITLE = "Berufsorientierung – Einzelcoaching";
export const DESCRIPTION =
  "Die Einzelcoaching-Seite der Berufsorientierung – Hero, „Auf einen Blick“, Coaching-Inhalte mit Preisschild und Abschluss-Aufruf.";

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
  inhalt: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    text: string;
    bullets: string[];
    image: string;
    price: string;
    priceNote: string;
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
    eyebrow: "Berufsorientierung · Einzelcoaching",
    headline: "Ein geschützter Raum –",
    headlineEm: "ganz für den jungen Menschen.",
    intro:
      "Geht es noch individueller? Na klar. An allen Standorten und online bieten wir Einzelcoaching zur beruflichen Orientierung für Schüler:innen, Abiturient:innen und junge Erwachsene an – passend zur jeweiligen Situation, systemisch und lösungsorientiert.",
    image: "/images/ke-jugend-einzel.jpg",
  },
  aufEinenBlick: {
    question: "Wie läuft das Einzelcoaching ab?",
    answer:
      "In vier Sitzungen à 90 Minuten finden wir gemeinsam mit dem jungen Menschen die berufliche Ausrichtung, lösen hinderliche Haltungen und entwickeln konkrete Ziele. Das Coaching ist systemisch, ziel- und lösungsorientiert und aktiviert vorhandene Ressourcen. Die Erfahrung zeigt: Nach den Sitzungen ist die eigene Ausrichtung deutlich klarer – motivierter Start in Bewerbung, Ausbildung oder Studium inklusive.",
    facts: [
      { label: "Für wen", value: "Schüler:innen, Abiturient:innen, junge Erwachsene" },
      { label: "Umfang", value: "4 Sitzungen à 90 Minuten" },
      { label: "Preis", value: "595 € für das Coaching-Paket" },
      { label: "Wo", value: "Online, Berlin, Potsdam oder Augsburg" },
    ],
  },
  inhalt: {
    eyebrow: "Was im Coaching passiert",
    headline: "In vier Schritten",
    headlineEm: "zu einer klaren Richtung.",
    text: "Neben der Berufsorientierung können im Einzelcoaching auch unförderliche Muster und Überzeugungen oder belastende Situationen reflektiert und gelöst werden – im Tempo des jungen Menschen, in einem vertrauensvollen Rahmen.",
    bullets: [
      "Gemeinsam finden wir die berufliche Ausrichtung des jungen Menschen",
      "Wir lösen hinderliche Haltungen, Muster und Überzeugungen",
      "Die Jugendlichen entwickeln Ziele, die sie wirklich motivieren",
      "Daraus leiten wir konkrete nächste Schritte und Handlungen ab",
    ],
    image: "/images/jugend-beelitz-2.jpg",
    price: "595 €",
    priceNote: "4 Sitzungen à 90 Minuten",
  },
  cta: {
    headline: "Du möchtest einen jungen Menschen",
    headlineEm: "unterstützen?",
    text: "Ob als Lehrkraft, Elternteil oder Kooperationspartner: Schreib uns oder ruf an – wir klären alle Fragen und finden heraus, ob die Chemie stimmt.",
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
    key: "inhalt",
    label: "Was im Coaching passiert – Text, Bild und Preisschild",
    fields: [
      { type: "text", key: "eyebrow", label: "Kicker (kleine Zeile über der Überschrift)" },
      { type: "text", key: "headline", label: "Überschrift" },
      {
        type: "text",
        key: "headlineEm",
        label: "Überschrift – kursiver Teil",
        help: "Wird hinter der Überschrift kursiv dargestellt.",
      },
      { type: "textarea", key: "text", label: "Absatztext", rows: 4 },
      { type: "stringList", key: "bullets", label: "Häkchen-Punkte", itemLabel: "Punkt" },
      { type: "image", key: "image", label: "Bild", help: IMAGE_HELP },
      { type: "text", key: "price", label: "Preisschild – Preis" },
      { type: "text", key: "priceNote", label: "Preisschild – Zeile darunter" },
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
