import type { Field } from "@/lib/cms/types";

/**
 * Standortseite Berlin (/jobcoaching-berlin): Texte und Bilder als Default-Inhalt.
 * Diese Werte greifen, solange im Admin nichts anderes gespeichert wurde –
 * die Seite funktioniert also auch ganz ohne Datenbank.
 */

export const KEY = "seite-jobcoaching-berlin";
export const TITLE = "Jobcoaching Berlin";
export const DESCRIPTION =
  "Die Standortseite Berlin – Hero, Faktenkasten, Angebote am Standort, Coaches vor Ort, Anfahrt, Abgrenzung zum „Berliner JobCoaching“, FAQ und Abschluss-Banner.";

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
    items: { href: string; label: string; note: string }[];
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
  anfahrt: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    text: string;
  };
  abgrenzung: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    text: string;
    outro: string;
    outroLinkLabel: string;
  };
  faq: {
    headline: string;
    headlineEm: string;
    items: { q: string; a: string }[];
  };
  cta: {
    title: string;
    titleEm: string;
    text: string;
  };
};

export const DEFAULTS: Content = {
  hero: {
    eyebrow: "Standort Berlin · Prenzlauer Berg",
    headline: "Jobcoaching in Berlin –",
    headlineEm: "mitten im Bötzowviertel.",
    intro:
      "AVGS Coaching, Karrierecoaching und berufliche Neuorientierung in der Bötzowstraße 28, wenige Minuten vom Volkspark Friedrichshain – oder online, ganz wie es zu Dir passt.",
    image: "/images/ke-flipchart-duo.jpg",
  },
  fakten: {
    question: "Wo finde ich Jobcoaching in Berlin?",
    answer:
      "Kuhl & Engel bietet AVGS-gefördertes Jobcoaching in Berlin-Prenzlauer Berg an: Bötzowstraße 28, 10407 Berlin. Das Einzelcoaching richtet sich an Akademiker:innen, Fach- und Führungskräfte und ist mit einem AVGS-Gutschein der Agentur für Arbeit oder des Jobcenters zu 100 % kostenfrei. Termine gibt es vor Ort, online oder hybrid.",
    facts: [
      { label: "Adresse", value: "Bötzowstraße 28, 10407 Berlin (Prenzlauer Berg)" },
      { label: "Kosten", value: "Mit AVGS-Gutschein 0 €" },
      { label: "Telefon", value: "030 51565388-0" },
      { label: "Formate", value: "Vor Ort, online oder hybrid" },
    ],
  },
  leistungen: {
    eyebrow: "Angebote in Berlin",
    headline: "Alles, was Deine Karriere",
    headlineEm: "weiterbringt.",
    text: "Vom geförderten AVGS Coaching über Bewerbungs- und Karrierecoaching bis zum Wiedereinstieg nach der Elternzeit: Am Berliner Standort steht Dir unser komplettes Angebot offen – begleitet von systemisch ausgebildeten, zertifizierten Coach:innen.",
    items: [
      { href: "/avgs-coaching", label: "AVGS Coaching", note: "Mit Gutschein 100 % kostenfrei" },
      { href: "/karrierecoaching", label: "Karrierecoaching", note: "Für Selbstzahler:innen & Unternehmen" },
      { href: "/jobcoaching", label: "Karriere- & Bewerbungscoaching", note: "Orientierung, Bewerbung, Neustart" },
      { href: "/avgs-gutschein-beantragen", label: "AVGS-Gutschein beantragen", note: "Schritt für Schritt zur Förderung" },
    ],
    image: "/images/ke-berlin-fenster.jpg",
    cardTitle: "Bötzowstraße 28",
    cardSub: "10407 Berlin · Prenzlauer Berg",
  },
  coaches: {
    eyebrow: "Dein Team in Berlin",
    headline: "Diese Coaches begleiten Dich",
    headlineEm: "vor Ort.",
    outro: "Das komplette Team mit allen Schwerpunkten findest Du",
    linkLabel: "hier →",
  },
  anfahrt: {
    eyebrow: "Anfahrt",
    headline: "Aus allen Berliner Bezirken",
    headlineEm: "gut erreichbar.",
    text: "Das Bötzowviertel liegt wenige Minuten vom Volkspark Friedrichshain: Die Tram M10 (Haltestelle Arnswalder Platz) hält um die Ecke, der S-Bahnhof Greifswalder Straße ist fußläufig erreichbar. Unsere Klientinnen und Klienten kommen aus Prenzlauer Berg, Pankow, Mitte, Friedrichshain-Kreuzberg, Lichtenberg – und aus dem gesamten Stadtgebiet. Wer sich den Weg sparen möchte, nimmt Termine online oder hybrid wahr.",
  },
  abgrenzung: {
    eyebrow: "Gut zu wissen",
    headline: "Kuhl & Engel oder",
    headlineEm: "„Berliner JobCoaching“?",
    text: "Das „Berliner JobCoaching (BJC)“ der Senatsverwaltung richtet sich an Teilnehmende öffentlich geförderter Beschäftigungsmaßnahmen. Unser Angebot ist davon unabhängig: Kuhl & Engel ist ein privater, AZAV-zertifizierter Träger für AVGS-Jobcoaching – individuelles 1:1-Karrierecoaching für Akademiker:innen, Fach- und Führungskräfte. Mit einem AVGS-Gutschein der Agentur für Arbeit oder des Jobcenters ist es für Dich zu 100 % kostenfrei.",
    outro: "Du hast noch keinen Gutschein?",
    outroLinkLabel: "So beantragst Du den AVGS →",
  },
  faq: {
    headline: "Häufige Fragen zum",
    headlineEm: "Jobcoaching in Berlin.",
    items: [
      {
        q: "Wo findet das Jobcoaching in Berlin statt?",
        a: "Unser Berliner Standort liegt in der Bötzowstraße 28, 10407 Berlin – im ruhigen Bötzowviertel in Prenzlauer Berg, wenige Minuten vom Volkspark Friedrichshain. Alternativ coachen wir Dich online oder hybrid.",
      },
      {
        q: "Was kostet ein Jobcoaching in Berlin?",
        a: "Mit einem AVGS-Gutschein (Aktivierungs- und Vermittlungsgutschein) der Agentur für Arbeit oder des Jobcenters ist das Jobcoaching bei Kuhl & Engel zu 100 % kostenfrei – die Förderung deckt alle Kosten ab. Auch das Erstgespräch kostet nichts. Ohne Gutschein finden wir im kostenlosen Erstgespräch eine individuelle Lösung.",
      },
      {
        q: "Kann ich meinen AVGS-Gutschein in Berlin einlösen?",
        a: "Ja. Kuhl & Engel ist AZAV-zertifizierter Träger, Du kannst Deinen Aktivierungs- und Vermittlungsgutschein direkt an unserem Berliner Standort einlösen. Der Gutschein muss noch mindestens 10 Tage gültig sein, mindestens 20 Unterrichtseinheiten umfassen und in Teilzeit ausgestellt sein – das Coaching ist dann für Dich kostenfrei.",
      },
      {
        q: "Was genau macht ein Jobcoach?",
        a: "Ein Jobcoach begleitet Dich im 1:1 bei beruflicher Orientierung, Bewerbungsstrategie, Vorstellungsgesprächen und Karriereentscheidungen. Bei Kuhl & Engel arbeiten alle Coaches systemisch: Statt fertiger Rezepte entwickelst Du Klarheit über Deine Stärken, Werte und Ziele – und einen konkreten Plan für Deinen nächsten beruflichen Schritt.",
      },
      {
        q: "Wie finde ich einen seriösen Jobcoach in Berlin?",
        a: "Achte auf drei Dinge: eine AZAV-Zertifizierung des Trägers (Voraussetzung, um AVGS-Gutscheine annehmen zu dürfen), eine fundierte, zertifizierte Coaching-Ausbildung und ein kostenloses Erstgespräch, in dem Du prüfst, ob die Chemie stimmt. Kuhl & Engel erfüllt alle drei Kriterien – und wenn es doch nicht passt, wechselst Du einfach Deine:n Coach:in.",
      },
      {
        q: "Ist Kuhl & Engel dasselbe wie das „Berliner JobCoaching“ des Senats?",
        a: "Nein. Das „Berliner JobCoaching (BJC)“ ist ein Programm der Senatsverwaltung für Teilnehmende öffentlich geförderter Beschäftigungsmaßnahmen. Kuhl & Engel ist ein unabhängiger, AZAV-zertifizierter Träger: Unser AVGS-Jobcoaching ist ein individuelles 1:1-Karrierecoaching für Akademiker:innen – finanziert über den AVGS-Gutschein Deiner Agentur für Arbeit oder Deines Jobcenters.",
      },
      {
        q: "Welche Coaches arbeiten in Berlin?",
        a: "In Berlin coachen Angelina Werner und Carmen Pilger – beide systemisch ausgebildet und zertifiziert. Carmen Pilger coacht auch auf Englisch. Gemeinsam finden wir die Person, die am besten zu Dir und Deinem Thema passt.",
      },
      {
        q: "Geht das Jobcoaching auch auf Englisch?",
        a: "Ja. In Berlin coacht Carmen Pilger auch auf Englisch, online zusätzlich Matthias Fink (Englisch, Französisch) und Dr. Anna Mandel-Zakharova (Englisch, Russisch).",
      },
    ],
  },
  cta: {
    title: "Lerne uns in Berlin",
    titleEm: "persönlich kennen.",
    text: "Vereinbare ein kostenloses Erstgespräch – in der Bötzowstraße, telefonisch oder online.",
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
    key: "fakten",
    label: "„Auf einen Blick“ – Faktenkasten",
    fields: [
      { type: "text", key: "question", label: "Frage (Überschrift des Kastens)" },
      { type: "textarea", key: "answer", label: "Antwort (Absatz)", rows: 5 },
      {
        type: "objectList",
        key: "facts",
        label: "Fakten-Zeilen",
        itemTitle: "label",
        fields: [
          { type: "text", key: "label", label: "Bezeichnung (z. B. Adresse)" },
          { type: "text", key: "value", label: "Wert" },
        ],
      },
    ],
  },
  {
    type: "group",
    key: "leistungen",
    label: "Angebote in Berlin – Linkliste mit Foto",
    fields: [
      ...headlineFields,
      { type: "textarea", key: "text", label: "Einleitungstext", rows: 4 },
      {
        type: "objectList",
        key: "items",
        label: "Angebots-Links",
        itemTitle: "label",
        fields: [
          { type: "text", key: "label", label: "Titel" },
          { type: "text", key: "note", label: "Zusatzzeile darunter" },
          {
            type: "text",
            key: "href",
            label: "Link-Ziel (Pfad)",
            help: "Interner Pfad wie /avgs-coaching – nur ändern, wenn sich die Zielseite ändert.",
          },
        ],
      },
      { type: "image", key: "image", label: "Foto rechts", help: IMAGE_HELP },
      { type: "text", key: "cardTitle", label: "Adresskarte – Zeile 1 (goldene Schrift)" },
      { type: "text", key: "cardSub", label: "Adresskarte – Zeile 2" },
    ],
  },
  {
    type: "group",
    key: "coaches",
    label: "Dein Team in Berlin – Überschriften",
    help: "Die Coach-Porträts kommen aus „Bausteine → Team“ (alle mit Rolle „Berlin …“).",
    fields: [
      ...headlineFields,
      { type: "text", key: "outro", label: "Abschlusszeile (vor dem Link)" },
      { type: "text", key: "linkLabel", label: "Link-Text (führt zu „Über uns“)" },
    ],
  },
  {
    type: "group",
    key: "anfahrt",
    label: "Anfahrt (linke Spalte)",
    help: "Das Zitat darunter kommt aus „Bausteine → Kundenstimmen“.",
    fields: [
      ...headlineFields,
      { type: "textarea", key: "text", label: "Absatztext", rows: 5 },
    ],
  },
  {
    type: "group",
    key: "abgrenzung",
    label: "Gut zu wissen – „Berliner JobCoaching“ (rechte Spalte)",
    fields: [
      ...headlineFields,
      { type: "textarea", key: "text", label: "Absatztext", rows: 5 },
      { type: "text", key: "outro", label: "Abschlusszeile (vor dem Link)" },
      { type: "text", key: "outroLinkLabel", label: "Link-Text (führt zum AVGS-Ratgeber)" },
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
        label: "Fragen und Antworten",
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
    label: "Abschluss-Banner unten",
    fields: [
      { type: "text", key: "title", label: "Überschrift" },
      {
        type: "text",
        key: "titleEm",
        label: "Überschrift – kursiver Teil",
        help: "Wird hinter der Überschrift kursiv dargestellt.",
      },
      { type: "textarea", key: "text", label: "Text unter der Überschrift", rows: 2 },
    ],
  },
];
