import type { Field } from "@/lib/cms/types";

/**
 * Inhalte der Seite „Karrierecoaching“ (/karrierecoaching).
 * Diese Werte greifen, solange im Admin nichts anderes gespeichert wurde –
 * die Seite funktioniert also auch ganz ohne Datenbank.
 */

export const KEY = "seite-karrierecoaching";
export const TITLE = "Karrierecoaching";
export const DESCRIPTION =
  "Die Karrierecoaching-Seite für Selbstzahler:innen und Unternehmen – Hero, „Auf einen Blick“-Box, die vier Themen-Karten, Zitat, Gründerinnen-Vorstellung, eigene FAQ-Liste und Abschluss-Band.";

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
    items: { nr: string; title: string; text: string }[];
    ctaLabel: string;
    ctaNote: string;
  };
  zitat: {
    quote: string;
    author: string;
  };
  coaches: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    sideText: string;
    outroText: string;
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
    eyebrow: "Karrierecoaching · Selbstzahler:innen & Unternehmen",
    headline: "Karrierecoaching auf Augenhöhe –",
    headlineEm: "für Selbstzahler:innen und Unternehmen.",
    intro:
      "Wiedereinstieg nach der Elternzeit, Neuorientierung oder der nächste Karriereschritt: Bei Kuhl & Engel begleiten Dich die beiden Gründerinnen persönlich – mit Fragen, die sie aus eigener Erfahrung kennen. Du hast einen AVGS-Gutschein? Dann ist Dein Coaching sogar kostenfrei:",
    image: "/images/ke-frauen.jpg",
    ctaLabel: "Zum AVGS Coaching geht es hier",
  },
  factbox: {
    question: "Was macht Karrierecoaching bei Kuhl & Engel aus?",
    answer:
      "Karrierecoaching bei Kuhl & Engel ist eine individuelle 1:1-Begleitung für alle, die beruflich den nächsten Schritt gehen wollen: Wiedereinstieg nach der Elternzeit, Neuorientierung, Sichtbarkeit oder mehr Verantwortung. Die beiden Gründerinnen coachen persönlich – systemisch und auf Augenhöhe, für Selbstzahler:innen und Unternehmen. Mit AVGS-Gutschein steht Dir alternativ das geförderte AVGS Coaching offen.",
    facts: [
      { label: "Deine Coaches", value: "Heike Kuhl & Martina Engel-Fürstberger – die Gründerinnen persönlich" },
      { label: "Für wen", value: "Selbstzahler:innen & Unternehmen" },
      { label: "Kosten", value: "Individuelles Angebot nach kostenlosem Erstgespräch" },
      { label: "Schwerpunkte", value: "Wiedereinstieg, Neuorientierung, Sichtbarkeit, Karriere" },
      { label: "Formate", value: "Online, Berlin, Potsdam oder hybrid" },
    ],
  },
  themen: {
    eyebrow: "Womit unsere Klient:innen zu uns kommen",
    headline: "Deine Themen.",
    headlineEm: "Unsere Erfahrung.",
    items: [
      {
        nr: "01",
        title: "Wiedereinstieg nach der Elternzeit",
        text: "Du willst zurück ins Berufsleben, aber nicht einfach zurück in den alten Trott? Gemeinsam klären wir, ob der alte Job noch passt, wie Du Dich neu ausrichtest und wie Du Beruf und Familie so verbindest, dass es Dir entspricht – ohne schlechtes Gewissen in beide Richtungen.",
      },
      {
        nr: "02",
        title: "Sichtbarkeit & Selbstzweifel",
        text: "Bestens qualifiziert und trotzdem das Gefühl, nicht zu genügen? Viele Hochqualifizierte kennen das. Im Coaching reflektierst Du Deine Muster, erkennst Deine Kernkompetenzen anhand echter Erfolge und lernst, auf natürliche Weise zu überzeugen – im Meeting wie im Vorstellungsgespräch.",
      },
      {
        nr: "03",
        title: "Neuorientierung nach Studium oder Promotion",
        text: "Raus aus der Wissenschaft, rein – aber wohin? Wenn der akademische Weg nicht mehr trägt, helfen wir Dir, Deine Fähigkeiten in neue Kontexte zu übersetzen und eine Richtung zu finden, die Deinem Leben Sinn gibt.",
      },
      {
        nr: "04",
        title: "Der nächste Karriereschritt",
        text: "Mehr Verantwortung, ein neues Feld oder endlich die Position, die Deinem Können entspricht? Wir entwickeln mit Dir inspirierende, realistische Ziele und eine Strategie, mit der Du souverän verhandelst und auftrittst.",
      },
    ],
    ctaLabel: "Kostenloses Erstgespräch starten",
    ctaNote: "4 kurze Fragen – wir melden uns mit dem passenden Coach.",
  },
  zitat: {
    quote:
      "„Ich hatte die Möglichkeit herauszufinden, wohin es mich beruflich in Zukunft leiten darf. Dabei standen meine persönlichen Bedürfnisse an Leben, Beruf und Familie im Vordergrund – ebenso wie das Herausfiltern meiner persönlichen Stärken.“",
    author: "Lena W. · Google-Bewertung",
  },
  coaches: {
    eyebrow: "Dein Team",
    headline: "Coaches, die Deinen Weg",
    headlineEm: "selbst gegangen sind.",
    sideText:
      "Im Karrierecoaching begleiten Dich die beiden Gründerinnen persönlich – mit eigenen Brüchen, Neustarts und Karrieren.",
    outroText: "Das ganze Team hinter Kuhl & Engel findest Du",
    outroLinkLabel: "auf der Über-uns-Seite",
  },
  faq: {
    headline: "Häufige Fragen zum",
    headlineEm: "Karrierecoaching.",
    items: [
      {
        q: "Kann ich mir aussuchen, wer mich coacht?",
        a: "Im Karrierecoaching begleiten Dich die beiden Gründerinnen Heike Kuhl und Martina Engel-Fürstberger persönlich. Im Erstgespräch finden wir gemeinsam heraus, wer von beiden am besten zu Dir und Deinem Anliegen passt.",
      },
      {
        q: "Was kostet das Karrierecoaching?",
        a: "Das Karrierecoaching ist unser Angebot für Selbstzahler:innen und Unternehmen – Du bekommst nach dem kostenlosen Erstgespräch ein individuelles Angebot, das zu Deinem Anliegen passt. Bist Du arbeitssuchend gemeldet und hast Anspruch auf einen AVGS-Gutschein, ist unser AVGS Coaching für Dich zu 100 % kostenfrei – der Wechsel dorthin ist jederzeit möglich.",
      },
      {
        q: "Ich stecke mitten in der Elternzeit – wann ist der richtige Zeitpunkt?",
        a: "Früher, als die meisten denken: Ein Coaching vor dem Wiedereinstieg verschafft Dir Klarheit, bevor Du Entscheidungen triffst oder verhandeln musst. Viele Klient:innen starten sechs bis drei Monate vor dem geplanten Wiedereinstieg – online geht das auch mit Kind zu Hause.",
      },
      {
        q: "Geht das Coaching auch online oder hybrid?",
        a: "Ja. Alle Coachings finden wahlweise komplett online via Zoom, in Berlin oder Potsdam oder hybrid statt. Die Termine legen wir so, dass sie in Deinen Alltag passen.",
      },
    ],
  },
  cta: {
    title: "Dein nächstes Kapitel beginnt",
    titleEm: "mit einem Gespräch.",
    text: "Lern uns in einem kostenlosen Erstgespräch kennen – vertraulich und unverbindlich.",
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
      { type: "text", key: "ctaLabel", label: "Beschriftung des Buttons (führt zum AVGS Coaching)" },
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
    label: "Die vier Themen-Karten",
    fields: [
      ...headlineFields,
      {
        type: "objectList",
        key: "items",
        label: "Karten",
        itemTitle: "title",
        fixed: true,
        fields: [
          { type: "text", key: "nr", label: "Nummer (01, 02 …)" },
          { type: "text", key: "title", label: "Titel" },
          { type: "textarea", key: "text", label: "Text", rows: 4 },
        ],
      },
      { type: "text", key: "ctaLabel", label: "Button-Beschriftung unter den Karten" },
      { type: "text", key: "ctaNote", label: "Kurzer Hinweis neben dem Button" },
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
    key: "coaches",
    label: "Gründerinnen-Vorstellung",
    help: "Fotos, Zitate und Qualifikationen der Gründerinnen bearbeitest Du unter „Bausteine → Team“.",
    fields: [
      ...headlineFields,
      { type: "textarea", key: "sideText", label: "Kurztext rechts neben der Überschrift", rows: 3 },
      { type: "text", key: "outroText", label: "Abschlusszeile (vor dem Link)" },
      { type: "text", key: "outroLinkLabel", label: "Link-Text (führt zu „Über uns“)" },
    ],
  },
  {
    type: "group",
    key: "faq",
    label: "FAQ – Fragen zum Karrierecoaching",
    help: "Diese FAQ-Liste gehört nur zu dieser Seite.",
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
        label: "Fragen",
        itemTitle: "q",
        fields: [
          { type: "text", key: "q", label: "Frage" },
          { type: "textarea", key: "a", label: "Antwort", rows: 5 },
        ],
      },
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
