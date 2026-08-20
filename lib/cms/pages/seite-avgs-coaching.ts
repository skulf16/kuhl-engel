import type { Field } from "@/lib/cms/types";

/**
 * Inhalte der Seite „AVGS Coaching & Gutschein“ (/avgs-coaching).
 * Diese Werte greifen, solange im Admin nichts anderes gespeichert wurde –
 * die Seite funktioniert also auch ganz ohne Datenbank.
 */

export const KEY = "seite-avgs-coaching";
export const TITLE = "AVGS Coaching & Gutschein";
export const DESCRIPTION =
  "Alle Texte und Bilder der AVGS-Coaching-Seite – vom Hero über die vier Coaching-Themen und die fünf Gutschein-Schritte bis zum Abschluss-Band.";

export type Content = {
  hero: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    intro: string;
    image: string;
    ctaLabel: string;
  };
  factbox: {
    question: string;
    answer: string;
    facts: { label: string; value: string }[];
  };
  themen: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    listLabel: string;
    items: { nr: string; q: string; intro: string; points: string[]; image: string }[];
  };
  zitat: {
    quote: string;
    author: string;
  };
  gutschein: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    sideText: string;
    steps: { title: string; text: string }[];
    hinweisText: string;
    hinweisLinkLabel: string;
  };
  buchen: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    intro: string;
  };
  faq: {
    headline: string;
    headlineEm: string;
    outroText: string;
    outroLinkLabel: string;
  };
  cta: {
    title: string;
    titleEm: string;
    text: string;
  };
};

export const DEFAULTS: Content = {
  hero: {
    eyebrow: "AVGS Coaching · Zu 100 % gefördert",
    headline: "Deine Profis für AVGS Coaching",
    headlineEm: "für Akademiker:innen.",
    intro:
      "Wir sind spezialisiert auf Coaching in beruflichen Veränderungssituationen und zertifiziert für Dein AVGS Coaching. Mit langjähriger Erfahrung und maßgeschneidertem Ansatz begleiten wir Dich auf dem Weg zu einem Job, der wirklich zu Dir passt.",
    image: "/images/ke-beratung.jpg",
    ctaLabel: "Sofort starten",
  },
  factbox: {
    question: "Was ist AVGS Coaching?",
    answer:
      "AVGS Coaching ist ein individuelles Einzelcoaching zur beruflichen Orientierung, Bewerbung und Karriereentwicklung, das über den Aktivierungs- und Vermittlungsgutschein (AVGS) nach § 45 SGB III finanziert wird. Wer bei der Agentur für Arbeit oder dem Jobcenter arbeitssuchend gemeldet ist, erhält den Gutschein auf Anfrage – das Coaching bei Kuhl & Engel ist damit zu 100 % kostenfrei.",
    facts: [
      { label: "Kosten", value: "0 € – vollständig durch den AVGS gedeckt" },
      { label: "Format", value: "1:1-Einzelcoaching, Umfang individuell (mind. 20 UE)" },
      { label: "Orte", value: "Online, Berlin, Potsdam, Augsburg oder hybrid" },
      { label: "Team", value: "14 erfahrene Coach:innen – Du wählst, wer Dich begleitet" },
      { label: "Sprachen", value: "Deutsch, Englisch, Französisch, Russisch" },
      { label: "Start", value: "Kostenloses Erstgespräch, Beginn nach Bewilligung" },
    ],
  },
  themen: {
    eyebrow: "Deine wichtigsten Fragen",
    headline: "Der Weg zu Deinem",
    headlineEm: "beruflichen Glück.",
    listLabel: "Das passiert im Coaching",
    items: [
      {
        nr: "01",
        q: "Du weißt nicht, was Du beruflich machen willst?",
        intro:
          "Berufliche Entscheidungen machen wir oft von äußeren Umständen abhängig – Familie, Lebensstandard, Erwartungen. Im Coaching findest Du eine Ausrichtung, die Dir entspricht und Deinem Leben Sinn gibt.",
        points: [
          "Gemeinsam reflektieren wir Deinen Werdegang und finden heraus, was Dir wirklich wichtig ist.",
          "Du entwickelst eine Vision für Deine berufliche Zukunft und erste Schritte, um sie zu erreichen.",
          "Wir setzen klare, realistische Ziele, die Dich motivieren und Dir Orientierung geben.",
        ],
        image: "/images/ke-whiteboard.jpg",
      },
      {
        nr: "02",
        q: "Du fragst Dich, was Du wirklich gut kannst?",
        intro:
          "Viele Menschen wissen nicht genau, welche ihrer Fähigkeiten und Talente sie im Berufsleben am besten einsetzen können. Hier geht es darum, Deine Stärken zu erkennen und zu nutzen.",
        points: [
          "Du erkundest Deine Kernkompetenzen anhand Deiner Erfolge und überwundenen Misserfolge.",
          "Du erforschst, welche Rollen und Aufgaben Dir Energie geben.",
          "Wir erarbeiten, wie Du Deine Stärken im Beruf optimal einsetzt.",
        ],
        image: "/images/ke-gruppe-tisch.jpg",
      },
      {
        nr: "03",
        q: "Du zweifelst an Dir?",
        intro:
          "Unsicherheit ist normal, wenn es um berufliche Veränderung geht. Wir stärken Dein Selbstvertrauen, lösen innere Blockaden und bauen Resilienz auf.",
        points: [
          "Du reflektierst Deine Verhaltens- und Kommunikationsmuster und lernst, auf natürliche Weise zu überzeugen.",
          "Wir arbeiten Rückschläge auf und entwickeln Strategien, aus denen Du gestärkt hervorgehst.",
          "Wir klären, ob Du zusätzliche Qualifikationen brauchst – und wie Du sie erwirbst.",
        ],
        image: "/images/ke-coaching-lachen.jpg",
      },
      {
        nr: "04",
        q: "Du hast Angst vor Bewerbungen?",
        intro:
          "Der Bewerbungsprozess kann überwältigend sein. Wir geben Deinen Unterlagen den Feinschliff, trainieren Gespräche und begleiten Dich auf Wunsch durch den gesamten Prozess.",
        points: [
          "Gemeinsam werten wir Stellenangebote aus, die zu Deinen Fähigkeiten und Zielen passen.",
          "Deine Bewerbung und Dein Online-Profil werden professionell und überzeugend.",
          "Durch Rollenspiele bereitest Du Dich gezielt auf Gespräche vor – sicher und souverän.",
        ],
        image: "/images/ke-unterlagen-duo.jpg",
      },
    ],
  },
  zitat: {
    quote:
      "„Coaching war eine großartige Erfahrung und hat mir jetzt und langfristig sehr geholfen. Ich würde Kuhl & Engel jedem empfehlen, der professionelles und qualitativ hochwertiges Coaching sucht!“",
    author: "Franziska M.",
  },
  gutschein: {
    eyebrow: "Der AVGS-Gutschein",
    headline: "Dein Coaching.",
    headlineEm: "Finanziert durch den AVGS-Gutschein.",
    sideText:
      "Der Aktivierungs- und Vermittlungsgutschein (AVGS) nach § 45 SGB III deckt die Kosten zu 100 %. Wir begleiten Dich durch jeden Schritt.",
    steps: [
      {
        title: "Infogespräch mit uns",
        text: "Kontaktiere uns für eine unverbindliche Erstberatung. Wir klären alle Fragen zu Ablauf und Möglichkeiten.",
      },
      {
        title: "AVGS beantragen",
        text: "Falls Du noch keinen Gutschein hast: Deine Agentur für Arbeit oder Dein Jobcenter stellt ihn aus, wenn Du die Voraussetzungen erfüllst.",
      },
      {
        title: "Kostenloses Vorgespräch",
        text: "Wir finden die passende Coachin oder den passenden Coach für Dich. Im Vorgespräch besprecht Ihr gemeinsam Deine Erwartungen.",
      },
      {
        title: "Wir übernehmen den Papierkram",
        text: "Du schickst uns den Gutschein – wir erledigen die gesamte Abwicklung und Korrespondenz mit Agentur oder Jobcenter.",
      },
      {
        title: "Dein Coaching beginnt",
        text: "Nach der Bewilligung geht es los. Auch die Abrechnung übernehmen wir. Dir entstehen keine Kosten.",
      },
    ],
    hinweisText: "Du hast noch keinen Gutschein?",
    hinweisLinkLabel: "So beantragst Du den AVGS bei Agentur für Arbeit oder Jobcenter",
  },
  buchen: {
    eyebrow: "In 4 Schritten zum Erstgespräch",
    headline: "Starte Dein",
    headlineEm: "AVGS Coaching.",
    intro:
      "Beantworte vier kurze Fragen – wir melden uns mit dem passenden Coach und allen Infos zum Gutschein. Unverbindlich und kostenlos.",
  },
  faq: {
    headline: "FAQs zum",
    headlineEm: "AVGS Coaching.",
    outroText: "Noch unsicher, ob AVGS das Richtige ist?",
    outroLinkLabel: "Zurück zum Jobcoaching-Überblick",
  },
  cta: {
    title: "Bereit für den ersten Schritt",
    titleEm: "Richtung Traumjob?",
    text: "Kontaktiere uns für ein unverbindliches Beratungsgespräch. Unser AVGS Coaching hilft Dir, Deine Stärken optimal zu nutzen und Deine beruflichen Ziele zu erreichen.",
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
      { type: "textarea", key: "intro", label: "Text unter der Überschrift", rows: 4 },
      { type: "image", key: "image", label: "Hintergrundbild", help: IMAGE_HELP },
      { type: "text", key: "ctaLabel", label: "Beschriftung des Buttons (springt zum Buchungsfunnel)" },
    ],
  },
  {
    type: "group",
    key: "factbox",
    label: "„Auf einen Blick“-Box",
    fields: [
      { type: "text", key: "question", label: "Frage (Überschrift der Box)" },
      { type: "textarea", key: "answer", label: "Antworttext", rows: 5 },
      {
        type: "objectList",
        key: "facts",
        label: "Fakten-Liste",
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
    key: "themen",
    label: "Die vier Coaching-Themen",
    fields: [
      ...headlineFields,
      { type: "text", key: "listLabel", label: "Zeile über den Häkchen-Punkten" },
      {
        type: "objectList",
        key: "items",
        label: "Themen-Blöcke",
        itemTitle: "q",
        fields: [
          { type: "text", key: "nr", label: "Nummer (01, 02 …)" },
          { type: "text", key: "q", label: "Frage / Überschrift" },
          { type: "textarea", key: "intro", label: "Einleitungstext", rows: 4 },
          { type: "stringList", key: "points", label: "Häkchen-Punkte", itemLabel: "Punkt" },
          { type: "image", key: "image", label: "Bild", help: IMAGE_HELP },
        ],
      },
    ],
  },
  {
    type: "group",
    key: "zitat",
    label: "Zwischen-Zitat (heller Balken)",
    fields: [
      { type: "textarea", key: "quote", label: "Zitat", rows: 3 },
      { type: "text", key: "author", label: "Name unter dem Zitat" },
    ],
  },
  {
    type: "group",
    key: "gutschein",
    label: "AVGS-Gutschein – die 5 Schritte",
    fields: [
      ...headlineFields,
      { type: "textarea", key: "sideText", label: "Kurztext rechts neben der Überschrift", rows: 3 },
      {
        type: "objectList",
        key: "steps",
        label: "Die fünf Schritte",
        itemTitle: "title",
        fixed: true,
        fields: [
          { type: "text", key: "title", label: "Titel" },
          { type: "textarea", key: "text", label: "Text", rows: 3 },
        ],
      },
      { type: "text", key: "hinweisText", label: "Hinweiszeile unter den Schritten" },
      {
        type: "text",
        key: "hinweisLinkLabel",
        label: "Link-Text (führt zur AVGS-Gutschein-Seite)",
      },
    ],
  },
  {
    type: "group",
    key: "buchen",
    label: "Buchungsfunnel – Überschriften",
    help: "Die vier Fragen des Funnels selbst sind fest eingebaut.",
    fields: [
      ...headlineFields,
      { type: "textarea", key: "intro", label: "Einleitungstext", rows: 3 },
    ],
  },
  {
    type: "group",
    key: "faq",
    label: "FAQ – Überschrift und Abschluss",
    help: "Die Fragen und Antworten bearbeitest Du unter „Bausteine → FAQs AVGS“.",
    fields: [
      { type: "text", key: "headline", label: "Überschrift" },
      {
        type: "text",
        key: "headlineEm",
        label: "Überschrift – kursiver Teil",
        help: "Wird hinter der Überschrift kursiv dargestellt.",
      },
      { type: "text", key: "outroText", label: "Abschlusszeile (vor dem Link)" },
      { type: "text", key: "outroLinkLabel", label: "Link-Text (führt zum Jobcoaching-Überblick)" },
    ],
  },
  {
    type: "group",
    key: "cta",
    label: "Abschluss-Band ganz unten",
    fields: [
      { type: "text", key: "title", label: "Überschrift" },
      {
        type: "text",
        key: "titleEm",
        label: "Überschrift – kursiver Teil",
        help: "Wird hinter der Überschrift kursiv dargestellt.",
      },
      { type: "textarea", key: "text", label: "Text unter der Überschrift", rows: 3 },
    ],
  },
];
