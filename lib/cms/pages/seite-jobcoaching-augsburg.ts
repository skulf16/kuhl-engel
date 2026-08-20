import type { Field } from "@/lib/cms/types";

/**
 * Standortseite Augsburg: Texte und Bilder als Default-Inhalt.
 * Diese Werte greifen, solange im Admin nichts anderes gespeichert wurde –
 * die Seite funktioniert also auch ganz ohne Datenbank.
 */

export const KEY = "seite-jobcoaching-augsburg";
export const TITLE = "Jobcoaching Augsburg";
export const DESCRIPTION =
  "Die Standortseite Augsburg – Hero, „Auf einen Blick“-Kasten, Angebotsliste mit Standortfotos, Coach vor Ort, häufige Fragen und Abschluss-Banner.";

export type Content = {
  hero: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    intro: string;
    image: string;
  };
  fakten: {
    question: string;
    answer: string;
    facts: { label: string; value: string }[];
  };
  leistungen: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    text: string;
    items: { label: string; note: string }[];
    image: string;
    cardTitle: string;
    cardSub: string;
    imageSecond: string;
    imageSecondCaption: string;
  };
  coaches: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    outro: string;
    linkLabel: string;
  };
  faq: {
    headline: string;
    headlineEm: string;
    items: { q: string; a: string }[];
  };
  cta: {
    headline: string;
    headlineEm: string;
    text: string;
    standorteLinkLabel: string;
  };
};

export const DEFAULTS: Content = {
  hero: {
    eyebrow: "Standort Augsburg · Altstadt",
    headline: "Jobcoaching in Augsburg –",
    headlineEm: "mitten in der Altstadt.",
    intro:
      "AVGS Coaching und berufliche Neuorientierung am Mauerberg 26, im Herzen der Augsburger Altstadt – oder online, ganz wie es zu Dir passt.",
    image: "/images/ke-augsburg-einzel.jpg",
  },
  fakten: {
    question: "Wo finde ich Jobcoaching in Augsburg?",
    answer:
      "Kuhl & Engel bietet AVGS-gefördertes Jobcoaching in der Augsburger Altstadt an: Mauerberg 26, 86152 Augsburg. Das Einzelcoaching richtet sich an Akademiker:innen, Fach- und Führungskräfte und ist mit einem AVGS-Gutschein der Agentur für Arbeit oder des Jobcenters zu 100 % kostenfrei. Termine gibt es vor Ort, online oder hybrid.",
    facts: [
      { label: "Adresse", value: "Mauerberg 26, 86152 Augsburg (Altstadt)" },
      { label: "Kosten", value: "Mit AVGS-Gutschein 0 €" },
      { label: "Telefon", value: "030 51565388-0" },
      { label: "Formate", value: "Vor Ort, online oder hybrid" },
    ],
  },
  leistungen: {
    eyebrow: "Angebote in Augsburg",
    headline: "Karrierecoaching für Augsburg",
    headlineEm: "und Bayern.",
    text: "Ob Neuorientierung, der nächste Karriereschritt oder der Wiedereinstieg: In Augsburg begleitet Dich ein systemisch ausgebildeter Coach – auf Wunsch auch hybrid mit Online-Terminen.",
    items: [
      { label: "AVGS Coaching", note: "Mit Gutschein 100 % kostenfrei" },
      { label: "Karrierecoaching", note: "Für Selbstzahler:innen & Unternehmen" },
      { label: "Karriere- & Bewerbungscoaching", note: "Orientierung, Bewerbung, Neustart" },
      { label: "AVGS-Gutschein beantragen", note: "Schritt für Schritt zur Förderung" },
    ],
    image: "/images/ke-augsburg-einzel.jpg",
    cardTitle: "Mauerberg 26",
    cardSub: "86152 Augsburg · Altstadt",
    imageSecond: "/images/ke-augsburg-gruppe.jpg",
    imageSecondCaption: "Unser Gruppenraum in Augsburg",
  },
  coaches: {
    eyebrow: "Dein Team in Augsburg",
    headline: "Dein Coach",
    headlineEm: "vor Ort.",
    outro: "Online begleitet Dich auf Wunsch das gesamte Team –",
    linkLabel: "alle Coach:innen kennenlernen →",
  },
  faq: {
    headline: "Häufige Fragen zum",
    headlineEm: "Jobcoaching in Augsburg.",
    items: [
      {
        q: "Wo findet das Jobcoaching in Augsburg statt?",
        a: "Unser Augsburger Standort liegt am Mauerberg 26, 86152 Augsburg – mitten in der Altstadt. Alternativ coachen wir Dich online oder hybrid.",
      },
      {
        q: "Kann ich meinen AVGS-Gutschein in Augsburg einlösen?",
        a: "Ja. Kuhl & Engel ist AZAV-zertifizierter Träger, Du kannst Deinen Aktivierungs- und Vermittlungsgutschein direkt in Augsburg einlösen. Der Gutschein muss noch mindestens 10 Tage gültig sein, mindestens 20 Unterrichtseinheiten umfassen und in Teilzeit ausgestellt sein – das Coaching ist dann für Dich kostenfrei.",
      },
      {
        q: "Wer coacht in Augsburg?",
        a: "In Augsburg coacht Matthias Fink – systemisch-integrativer Coach, auf Wunsch auch auf Englisch oder Französisch. Online steht Dir zusätzlich das gesamte Team von Kuhl & Engel offen.",
      },
      {
        q: "Ich wohne in Bayern außerhalb Augsburgs – geht das trotzdem?",
        a: "Ja. Viele unserer Klient:innen kombinieren Termine vor Ort mit Online-Sitzungen via Zoom (hybrid) oder lassen sich komplett digital coachen. So funktioniert das Coaching unabhängig vom Wohnort.",
      },
      {
        q: "Was kostet ein Jobcoaching in Augsburg?",
        a: "Mit einem AVGS-Gutschein (Aktivierungs- und Vermittlungsgutschein) der Agentur für Arbeit oder des Jobcenters ist das Jobcoaching bei Kuhl & Engel zu 100 % kostenfrei – die Förderung deckt alle Kosten ab. Auch das Erstgespräch kostet nichts.",
      },
    ],
  },
  cta: {
    headline: "Starte Dein Coaching",
    headlineEm: "in Augsburg.",
    text: "Lern uns in einem kostenlosen Erstgespräch kennen – vor Ort am Mauerberg, online oder hybrid.",
    standorteLinkLabel: "← Alle Standorte ansehen",
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
      { type: "textarea", key: "intro", label: "Text unter der Überschrift", rows: 3 },
      { type: "image", key: "image", label: "Hintergrundbild", help: IMAGE_HELP },
    ],
  },
  {
    type: "group",
    key: "fakten",
    label: "Auf einen Blick – Faktenkasten",
    fields: [
      { type: "text", key: "question", label: "Frage (Überschrift des Kastens)" },
      { type: "textarea", key: "answer", label: "Antwort (Absatz)", rows: 5 },
      {
        type: "objectList",
        key: "facts",
        label: "Fakten (Adresse, Kosten …)",
        itemTitle: "label",
        fields: [
          { type: "text", key: "label", label: "Bezeichnung" },
          { type: "text", key: "value", label: "Wert" },
        ],
      },
    ],
  },
  {
    type: "group",
    key: "leistungen",
    label: "Angebote in Augsburg – Linkliste & Standortfotos",
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
      {
        type: "objectList",
        key: "items",
        label: "Die vier Angebots-Links",
        help: "Die Link-Ziele sind fest hinterlegt – hier änderst Du nur die Beschriftungen.",
        itemTitle: "label",
        fixed: true,
        fields: [
          { type: "text", key: "label", label: "Titel" },
          { type: "text", key: "note", label: "Untertitel" },
        ],
      },
      { type: "image", key: "image", label: "Standortfoto (oben)", help: IMAGE_HELP },
      { type: "text", key: "cardTitle", label: "Karte auf dem Foto – Zeile 1 (Straße)" },
      { type: "text", key: "cardSub", label: "Karte auf dem Foto – Zeile 2 (PLZ · Viertel)" },
      { type: "image", key: "imageSecond", label: "Zweites Foto (Gruppenraum)", help: IMAGE_HELP },
      { type: "text", key: "imageSecondCaption", label: "Bildunterschrift zweites Foto" },
    ],
  },
  {
    type: "group",
    key: "coaches",
    label: "Dein Team in Augsburg",
    help: "Foto, Name und Qualifikationen kommen aus „Bausteine → Team“ (alle mit Rolle „Augsburg …“).",
    fields: [
      { type: "text", key: "eyebrow", label: "Kicker (kleine Zeile über der Überschrift)" },
      { type: "text", key: "headline", label: "Überschrift" },
      {
        type: "text",
        key: "headlineEm",
        label: "Überschrift – kursiver Teil",
        help: "Wird hinter der Überschrift kursiv dargestellt.",
      },
      { type: "text", key: "outro", label: "Abschlusszeile (vor dem Link)" },
      { type: "text", key: "linkLabel", label: "Link-Text (führt zum Team auf „Über uns“)" },
    ],
  },
  {
    type: "group",
    key: "faq",
    label: "Häufige Fragen",
    fields: [
      { type: "text", key: "headline", label: "Überschrift" },
      {
        type: "text",
        key: "headlineEm",
        label: "Überschrift – kursiver Teil",
        help: "Wird hinter der Überschrift kursiv dargestellt.",
      },
      {
        type: "objectList",
        key: "items",
        label: "Fragen & Antworten",
        itemTitle: "q",
        fields: [
          { type: "text", key: "q", label: "Frage" },
          { type: "textarea", key: "a", label: "Antwort", rows: 4 },
        ],
      },
    ],
  },
  {
    type: "group",
    key: "cta",
    label: "Abschluss-Banner (großer Kasten unten)",
    fields: [
      { type: "text", key: "headline", label: "Überschrift" },
      {
        type: "text",
        key: "headlineEm",
        label: "Überschrift – kursiver Teil",
        help: "Wird hinter der Überschrift kursiv dargestellt.",
      },
      { type: "textarea", key: "text", label: "Text unter der Überschrift", rows: 2 },
      {
        type: "text",
        key: "standorteLinkLabel",
        label: "Link-Zeile ganz unten („Alle Standorte ansehen“)",
      },
    ],
  },
];
