import type { Field } from "@/lib/cms/types";

/**
 * Standortseite Potsdam: Texte und Bilder als Default-Inhalt.
 * Diese Werte greifen, solange im Admin nichts anderes gespeichert wurde –
 * die Seite funktioniert also auch ganz ohne Datenbank.
 */

export const KEY = "seite-jobcoaching-potsdam";
export const TITLE = "Jobcoaching Potsdam";
export const DESCRIPTION =
  "Die Standortseite Potsdam – Hero, „Auf einen Blick“-Kasten, Angebotsliste mit Standortfoto, Coaches vor Ort, häufige Fragen und Abschluss-Banner.";

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
  };
};

export const DEFAULTS: Content = {
  hero: {
    eyebrow: "Standort Potsdam · Nördliche Innenstadt",
    headline: "Jobcoaching in Potsdam –",
    headlineEm: "nahe Holländisches Viertel.",
    intro:
      "AVGS Coaching und berufliche Neuorientierung in der Gutenbergstraße 87, mitten in der Potsdamer Innenstadt – oder online, ganz wie es zu Dir passt.",
    image: "/images/ke-tisch-beratung.jpg",
  },
  fakten: {
    question: "Wo finde ich Jobcoaching in Potsdam?",
    answer:
      "Kuhl & Engel bietet AVGS-gefördertes Jobcoaching in der Potsdamer Innenstadt an: Gutenbergstraße 87, 14467 Potsdam, wenige Gehminuten vom Holländischen Viertel. Das Einzelcoaching richtet sich an Akademiker:innen, Fach- und Führungskräfte und ist mit einem AVGS-Gutschein der Agentur für Arbeit oder des Jobcenters zu 100 % kostenfrei. Termine gibt es vor Ort, online oder hybrid.",
    facts: [
      { label: "Adresse", value: "Gutenbergstraße 87, 14467 Potsdam (Nördliche Innenstadt)" },
      { label: "Kosten", value: "Mit AVGS-Gutschein 0 €" },
      { label: "Telefon", value: "030 51565388-0" },
      { label: "Formate", value: "Vor Ort, online oder hybrid" },
    ],
  },
  leistungen: {
    eyebrow: "Angebote in Potsdam",
    headline: "Karrierecoaching für Potsdam",
    headlineEm: "und Brandenburg.",
    text: "Ob Neuorientierung nach der Elternzeit, der nächste Karriereschritt oder der Berufseinstieg nach der Promotion: In Potsdam begleiten Dich vier systemisch ausgebildete Coach:innen – auf Wunsch auch hybrid mit Online-Terminen.",
    items: [
      { label: "AVGS Coaching", note: "Mit Gutschein 100 % kostenfrei" },
      { label: "Karrierecoaching", note: "Für Selbstzahler:innen & Unternehmen" },
      { label: "Karriere- & Bewerbungscoaching", note: "Orientierung, Bewerbung, Neustart" },
      { label: "AVGS-Gutschein beantragen", note: "Schritt für Schritt zur Förderung" },
    ],
    image: "/images/standort-potsdam.jpg",
    cardTitle: "Gutenbergstraße 87",
    cardSub: "14467 Potsdam · Nördliche Innenstadt",
  },
  coaches: {
    eyebrow: "Dein Team in Potsdam",
    headline: "Diese Coaches begleiten Dich",
    headlineEm: "vor Ort.",
    outro: "Das komplette Team mit allen Schwerpunkten findest Du",
    linkLabel: "hier →",
  },
  faq: {
    headline: "Häufige Fragen zum",
    headlineEm: "Standort Potsdam.",
    items: [
      {
        q: "Wo findet das Jobcoaching in Potsdam statt?",
        a: "Unser Potsdamer Standort liegt in der Gutenbergstraße 87, 14467 Potsdam – zentral in der nördlichen Innenstadt, nur wenige Gehminuten vom Holländischen Viertel. Alternativ coachen wir Dich online oder hybrid.",
      },
      {
        q: "Kann ich meinen AVGS-Gutschein in Potsdam einlösen?",
        a: "Ja. Kuhl & Engel ist AZAV-zertifizierter Träger, Du kannst Deinen Aktivierungs- und Vermittlungsgutschein direkt in Potsdam einlösen. Der Gutschein muss noch mindestens 10 Tage gültig sein, mindestens 20 Unterrichtseinheiten umfassen und in Teilzeit ausgestellt sein – das Coaching ist dann für Dich kostenfrei.",
      },
      {
        q: "Welche Coaches arbeiten in Potsdam?",
        a: "In Potsdam coachen Bettina Brammer, Grit Staroste, Wanda Wolff und Dr. Anna Mandel-Zakharova – alle systemisch ausgebildet und zertifiziert. Dr. Mandel-Zakharova coacht auch auf Englisch und Russisch.",
      },
      {
        q: "Ich wohne in Brandenburg außerhalb Potsdams – geht das trotzdem?",
        a: "Ja. Viele unserer Klient:innen kombinieren Termine vor Ort mit Online-Sitzungen via Zoom (hybrid) oder lassen sich komplett digital coachen. So funktioniert das Coaching unabhängig vom Wohnort.",
      },
      {
        q: "Was kostet ein Jobcoaching in Potsdam?",
        a: "Mit einem AVGS-Gutschein (Aktivierungs- und Vermittlungsgutschein) der Agentur für Arbeit oder des Jobcenters ist das Jobcoaching bei Kuhl & Engel zu 100 % kostenfrei – die Förderung deckt alle Kosten ab. Auch das Erstgespräch kostet nichts.",
      },
    ],
  },
  cta: {
    headline: "Lerne uns in Potsdam",
    headlineEm: "persönlich kennen.",
    text: "Vereinbare ein kostenloses Erstgespräch – in der Gutenbergstraße, telefonisch oder online.",
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
    label: "Angebote in Potsdam – Linkliste & Standortfoto",
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
      { type: "image", key: "image", label: "Standortfoto", help: IMAGE_HELP },
      { type: "text", key: "cardTitle", label: "Karte auf dem Foto – Zeile 1 (Straße)" },
      { type: "text", key: "cardSub", label: "Karte auf dem Foto – Zeile 2 (PLZ · Viertel)" },
    ],
  },
  {
    type: "group",
    key: "coaches",
    label: "Dein Team in Potsdam",
    help: "Fotos, Namen und Qualifikationen kommen aus „Bausteine → Team“ (alle mit Rolle „Potsdam …“).",
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
    ],
  },
];
