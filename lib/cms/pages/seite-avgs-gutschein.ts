import type { Field } from "@/lib/cms/types";

/**
 * Inhalte der Ratgeber-Seite „AVGS-Gutschein beantragen“ (/avgs-gutschein-beantragen).
 * Diese Werte greifen, solange im Admin nichts anderes gespeichert wurde –
 * die Seite funktioniert also auch ganz ohne Datenbank.
 */

export const KEY = "seite-avgs-gutschein";
export const TITLE = "AVGS-Gutschein beantragen";
export const DESCRIPTION =
  "Der Ratgeber zum AVGS-Gutschein – Hero, „Auf einen Blick“-Box, die fünf Antrags-Schritte, Argumentationshilfen fürs Gespräch, eigene FAQ-Liste und Abschluss-Band.";

export type Content = {
  hero: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    intro: string;
    image: string;
  };
  factbox: {
    question: string;
    answer: string;
    facts: { label: string; value: string }[];
  };
  schritte: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    steps: { title: string; text: string }[];
  };
  gespraech: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    text: string;
    argumente: string[];
  };
  faq: {
    headline: string;
    headlineEm: string;
    items: { q: string; a: string }[];
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
    eyebrow: "Ratgeber · AVGS-Gutschein",
    headline: "Der AVGS-Gutschein –",
    headlineEm: "so beantragst Du ihn.",
    intro:
      "Mit dem Aktivierungs- und Vermittlungsgutschein zahlt die Agentur für Arbeit oder das Jobcenter Dein komplettes Jobcoaching. Hier erfährst Du, wer ihn bekommt, wie das Gespräch läuft und worauf Du achten musst.",
    image: "/images/ke-unterlagen.jpg",
  },
  factbox: {
    question: "Was ist der AVGS-Gutschein?",
    answer:
      "Der Aktivierungs- und Vermittlungsgutschein (AVGS) ist eine Förderung nach § 45 SGB III. Agentur für Arbeit oder Jobcenter übernehmen damit die vollen Kosten eines Jobcoachings bei einem AZAV-zertifizierten Träger. Beantragen können ihn Arbeitslose und Arbeitssuchende – auch Menschen in Kündigung oder Elternzeit. Die Ausstellung ist meist eine Ermessensentscheidung; eine konkrete Begründung erhöht die Chancen.",
    facts: [
      { label: "Rechtsgrundlage", value: "§ 45 SGB III" },
      { label: "Kosten für Dich", value: "0 € – vollständig gefördert" },
      { label: "Richtige Variante", value: "AVGS MAT (Maßnahme bei einem Träger)" },
      { label: "Einlösbar bei", value: "Kuhl & Engel – online, Berlin, Potsdam, Augsburg" },
    ],
  },
  schritte: {
    eyebrow: "Schritt für Schritt",
    headline: "In fünf Schritten zum",
    headlineEm: "geförderten Coaching.",
    steps: [
      {
        title: "Termin vereinbaren",
        text: "Kontaktiere Deine Agentur für Arbeit oder Dein Jobcenter – telefonisch, über die eServices oder persönlich. Du musst dafür nicht auf den nächsten Regeltermin warten.",
      },
      {
        title: "Coaching-Wunsch begründen",
        text: "Sag konkret, wobei Dich ein Einzelcoaching unterstützen soll: berufliche Orientierung, Bewerbungsstrategie, Vorstellungsgespräche oder der Wiedereinstieg nach der Elternzeit. Je klarer Dein Anliegen, desto besser.",
      },
      {
        title: "Gutschein prüfen",
        text: "Achte darauf, dass der AVGS für Maßnahmen bei einem Träger (MAT) ausgestellt ist, mindestens 20 Unterrichtseinheiten umfasst und in Teilzeit ausgestellt wurde. Unsicher? Wir prüfen ihn kostenlos.",
      },
      {
        title: "Träger auswählen",
        text: "Den Gutschein löst Du bei einem AZAV-zertifizierten Träger Deiner Wahl ein – zum Beispiel bei Kuhl & Engel, online oder in Berlin, Potsdam und Augsburg. Im kostenlosen Erstgespräch findest Du heraus, ob wir zu Dir passen.",
      },
      {
        title: "Wir übernehmen den Papierkram",
        text: "Du schickst uns Deinen AVGS, wir erledigen die komplette Korrespondenz und Abrechnung mit Agentur oder Jobcenter. Nach der Bewilligung startet Dein Coaching.",
      },
    ],
  },
  gespraech: {
    eyebrow: "Das Gespräch",
    headline: "So begründest Du Deinen",
    headlineEm: "Coaching-Wunsch.",
    text: "Deine Vermittlerin oder Dein Vermittler entscheidet nach Ermessen. Entscheidend ist, dass Dein Unterstützungsbedarf konkret wird – nicht „ich hätte gern ein Coaching“, sondern ein klares Anliegen. Diese Formulierungen haben sich bewährt:",
    argumente: [
      "„Ich bekomme kaum Rückmeldungen auf meine Bewerbungen und möchte meine Unterlagen und Strategie professionell überarbeiten.“",
      "„Ich möchte nach der Elternzeit wieder einsteigen und brauche eine klare Positionierung für meinen Wiedereinstieg.“",
      "„Ich weiß nicht, in welche berufliche Richtung ich mich entwickeln soll, und möchte eine fundierte Standortbestimmung.“",
      "„Ich komme in Vorstellungsgesprächen nicht überzeugend rüber und möchte gezielt an meinem Auftreten arbeiten.“",
    ],
  },
  faq: {
    headline: "Häufige Fragen zum",
    headlineEm: "AVGS.",
    items: [
      {
        q: "Was ist ein AVGS (Aktivierungs- und Vermittlungsgutschein)?",
        a: "Der AVGS ist ein Förderinstrument nach § 45 SGB III: Mit dem Gutschein übernimmt die Agentur für Arbeit oder das Jobcenter die Kosten für Maßnahmen, die Deine beruflichen Chancen verbessern – zum Beispiel ein individuelles Jobcoaching bei einem AZAV-zertifizierten Träger wie Kuhl & Engel. Für Dich ist das Coaching dann zu 100 % kostenfrei.",
      },
      {
        q: "Wer bekommt einen AVGS?",
        a: "Einen AVGS können Personen erhalten, die arbeitslos oder arbeitssuchend gemeldet sind – egal ob mit Arbeitslosengeld I (Agentur für Arbeit) oder Bürgergeld (Jobcenter). Auch wer von Arbeitslosigkeit bedroht ist, etwa in der Kündigungsfrist oder in Elternzeit ohne Rückkehroption, kann den Gutschein bekommen. Die Bewilligung ist in der Regel eine Ermessensentscheidung Deiner Vermittlerin oder Deines Vermittlers – eine gute Begründung erhöht Deine Chancen deutlich.",
      },
      {
        q: "Wie beantrage ich den AVGS?",
        a: "Vereinbare einen Termin bei Deiner Agentur für Arbeit oder Deinem Jobcenter (telefonisch, online über die eServices oder persönlich) und äußere den Wunsch nach einem Einzelcoaching. Begründe konkret, wobei das Coaching Dich unterstützen soll – zum Beispiel berufliche Orientierung, Bewerbungsstrategie oder Wiedereinstieg nach der Elternzeit. Der Gutschein wird dann direkt ausgestellt oder Dir zugeschickt.",
      },
      {
        q: "Welche AVGS-Varianten gibt es?",
        a: "Es gibt drei Varianten: den AVGS MAT für Maßnahmen bei einem zertifizierten Träger (dazu zählt Jobcoaching), den AVGS MAG für betriebliche Erprobungen und den AVGS MPAV für private Arbeitsvermittlung. Für ein Jobcoaching bei Kuhl & Engel brauchst Du einen AVGS für Maßnahmen bei einem Träger (MAT).",
      },
      {
        q: "Was muss auf dem Gutschein stehen, damit ich ihn bei Kuhl & Engel einlösen kann?",
        a: "Der Gutschein muss noch mindestens 10 Tage gültig sein, mindestens 20 Unterrichtseinheiten umfassen und in Teilzeit ausgestellt sein. Ob Dein Gutschein passt, prüfen wir gern kostenlos – schick ihn uns einfach oder ruf an: 030 51565388-0.",
      },
      {
        q: "Kann der Antrag abgelehnt werden – und was mache ich dann?",
        a: "Ja, der AVGS ist meist eine Ermessensleistung. Bei einer Ablehnung lohnt es sich nachzufassen: Bitte um eine schriftliche Begründung, konkretisiere Deinen Unterstützungsbedarf (z. B. ausbleibende Rückmeldungen auf Bewerbungen, unklare berufliche Richtung) und stelle den Antrag erneut. Wir beraten Dich im kostenlosen Erstgespräch, wie Du Dein Anliegen überzeugend formulierst.",
      },
      {
        q: "Was kostet mich das Coaching mit AVGS?",
        a: "Nichts. Mit einem gültigen AVGS-Gutschein rechnet Kuhl & Engel direkt mit der Agentur für Arbeit oder dem Jobcenter ab – Dir entstehen keinerlei Kosten, auch nicht für das Erstgespräch oder die Abwicklung.",
      },
      {
        q: "Wie lange ist der AVGS gültig?",
        a: "Die Gültigkeit steht auf Deinem Gutschein – üblich sind ein bis drei Monate ab Ausstellung. Warte nach Erhalt nicht zu lange: Für die Einlösung bei uns muss der Gutschein noch mindestens 10 Tage gültig sein. Melde Dich am besten direkt nach der Ausstellung.",
      },
    ],
    outroText: "Gutschein schon in der Tasche?",
    outroLinkLabel: "Hier geht es zu Deinem AVGS Coaching",
  },
  cta: {
    title: "Unsicher, ob Du die Voraussetzungen",
    titleEm: "erfüllst?",
    text: "Ruf uns an – wir schauen kostenlos auf Deine Situation und begleiten Dich durch die Beantragung.",
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
    key: "schritte",
    label: "Die fünf Antrags-Schritte",
    fields: [
      ...headlineFields,
      {
        type: "objectList",
        key: "steps",
        label: "Schritte",
        itemTitle: "title",
        fixed: true,
        fields: [
          { type: "text", key: "title", label: "Titel" },
          { type: "textarea", key: "text", label: "Text", rows: 4 },
        ],
      },
    ],
  },
  {
    type: "group",
    key: "gespraech",
    label: "Das Gespräch – Argumentationshilfe",
    fields: [
      ...headlineFields,
      { type: "textarea", key: "text", label: "Einleitungstext", rows: 4 },
      {
        type: "stringList",
        key: "argumente",
        label: "Beispiel-Formulierungen (kursive Kästen)",
        itemLabel: "Formulierung",
      },
    ],
  },
  {
    type: "group",
    key: "faq",
    label: "FAQ – Fragen zum AVGS",
    help: "Diese FAQ-Liste gehört nur zu dieser Ratgeber-Seite.",
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
      { type: "text", key: "outroText", label: "Abschlusszeile (vor dem Link)" },
      { type: "text", key: "outroLinkLabel", label: "Link-Text (führt zum AVGS Coaching)" },
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
