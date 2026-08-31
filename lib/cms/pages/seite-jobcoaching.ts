import type { Field } from "@/lib/cms/types";

/**
 * Jobcoaching-Seite (/jobcoaching): Texte und Bilder als Default-Inhalt.
 * Diese Werte greifen, solange im Admin nichts anderes gespeichert wurde –
 * die Seite funktioniert also auch ganz ohne Datenbank.
 */

export const KEY = "seite-jobcoaching";
export const TITLE = "Jobcoaching";
export const DESCRIPTION =
  "Die Jobcoaching-Seite für Erwachsene – Hero, Faktenkasten, sechs Situationen, Pakete, Gründe, Methode, FAQ und Abschluss-Banner.";

export type Content = {
  hero: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    headlineAfter: string;
    intro: string;
    image: string;
    ctaLabel: string;
  };
  fakten: {
    question: string;
    answer: string;
    facts: { label: string; value: string }[];
  };
  szenarien: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  pakete: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    note: string;
    items: { name: string; ue: string; dauer: string; text: string }[];
    outro: string;
    outroLinkLabel: string;
    outroAfter: string;
  };
  gruende: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    items: { title: string; text: string }[];
    ctaLabel: string;
    phonePrefix: string;
  };
  standorte: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    linkLabel: string;
    hybridNote: string;
  };
  methode: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    text1: string;
    text2: string;
  };
  abgrenzung: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    text1: string;
    text2: string;
  };
  faq: {
    headline: string;
    headlineEm: string;
    items: { q: string; a: string }[];
    outro: string;
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
    eyebrow: "Jobcoaching · Für Erwachsene",
    headline: "Jobcoaching, das",
    headlineEm: "wirklich weiterbringt",
    headlineAfter: "– gefördert mit AVGS-Gutschein.",
    intro:
      "Ob berufliche Orientierung, der nächste Karriereschritt oder ein kompletter Neustart: Als AVGS-zertifizierte Jobcoaches begleiten wir Dich dabei, eine Tätigkeit zu finden, die zu Dir passt – und Dir langfristig gefällt. Mit AVGS-Gutschein für Dich vollständig kostenfrei.",
    image: "/images/ke-coaching-draussen.jpg",
    ctaLabel: "Sofort starten",
  },
  fakten: {
    question: "Was ist Jobcoaching?",
    answer:
      "Jobcoaching ist eine individuelle 1:1-Begleitung rund um Beruf und Karriere – von der beruflichen Orientierung über die Bewerbung bis zum Neustart. Bei Kuhl & Engel arbeiten wir systemisch und ganzheitlich und sind auf Akademiker:innen, Fach- und Führungskräfte spezialisiert: seit 2018, mit 246 AVGS-Coachings und über 6.500 Unterrichtseinheiten seit 2022. Über den AVGS-Gutschein der Agentur für Arbeit ist das Coaching für Dich zu 100 % kostenfrei.",
    facts: [
      { label: "Für wen", value: "Jobsuchende, Akademiker:innen, Fach- & Führungskräfte" },
      { label: "Themen", value: "Orientierung, Bewerbung, Karriere, Neustart" },
      { label: "Umfang", value: "24, 32 oder 44 UE in 6–11 Wochen (1 UE = 45 Min.)" },
      { label: "Kosten", value: "Mit AVGS-Gutschein 0 €" },
      { label: "Orte", value: "Online, Berlin, Potsdam, Augsburg oder hybrid" },
    ],
  },
  szenarien: {
    eyebrow: "Wozu brauche ich das?",
    headline: "Sechs Situationen, in denen Jobcoaching",
    headlineEm: "den Unterschied macht.",
    intro:
      "Ein Jobcoaching brauchst Du nicht, weil mit Dir etwas nicht stimmt – sondern weil berufliche Veränderung allein schwer ist. Erkennst Du Dich in einer dieser Situationen wieder?",
    items: [
      {
        title: "Du willst raus – weißt aber nicht, wohin.",
        text: "Der aktuelle Job trägt nicht mehr, doch keine Stellenanzeige fühlt sich richtig an. Im Coaching findest Du heraus, was Dir wirklich wichtig ist – und welche Wege dazu passen.",
      },
      {
        title: "Deine Bewerbungen bleiben unbeantwortet.",
        text: "Starke Qualifikation, wenig Resonanz: Gemeinsam schärfen wir Deine Positionierung, Deine Unterlagen und Deine Strategie – bis die Einladungen kommen.",
      },
      {
        title: "Du willst nach der Elternzeit neu ansetzen.",
        text: "Zurück ja – aber nicht zurück in den alten Trott. Wir klären, wie ein Wiedereinstieg aussieht, der zu Deinem Leben von heute passt.",
      },
      {
        title: "Nach Studium oder Promotion fehlt der rote Faden.",
        text: "Hochqualifiziert, aber der Arbeitsmarkt wirkt unübersichtlich? Wir übersetzen Deine Fähigkeiten in konkrete berufliche Richtungen.",
      },
      {
        title: "Im Vorstellungsgespräch bleibst Du unter Deinem Wert.",
        text: "Du kannst mehr, als Du zeigst. Wir arbeiten an Auftreten, Selbstsicherheit und dem Umgang mit schwierigen Fragen – bis Du überzeugst, ohne Dich zu verbiegen.",
      },
      {
        title: "Die Arbeitslosigkeit nagt am Selbstvertrauen.",
        text: "Je länger die Suche, desto lauter die Zweifel. Im Coaching gewinnst Du Struktur, Zuversicht und einen Plan, der Dich wieder in Bewegung bringt.",
      },
    ],
  },
  pakete: {
    eyebrow: "Ablauf & Umfang",
    headline: "So läuft Dein Jobcoaching",
    headlineEm: "ab.",
    note: "Alle Termine finden 1:1 statt – vor Ort in Berlin, Potsdam oder Augsburg, online via Zoom oder hybrid. Eine Unterrichtseinheit (UE) dauert 45 Minuten.",
    items: [
      {
        ue: "24 UE",
        dauer: "6 Wochen",
        name: "Kompakt",
        text: "Für ein klar umrissenes Anliegen – zum Beispiel Bewerbungsstrategie, Unterlagen und Vorstellungsgespräche.",
      },
      {
        ue: "32 UE",
        dauer: "8 Wochen",
        name: "Ausgewogen",
        text: "Standortbestimmung, neue Richtung und Umsetzung in einem Prozess – mit genug Raum für beides.",
      },
      {
        ue: "44 UE",
        dauer: "11 Wochen",
        name: "Intensiv",
        text: "Für den kompletten Neustart: tiefe Standortbestimmung, Neuausrichtung und Begleitung bis zum Ziel.",
      },
    ],
    outro:
      "Welcher Umfang zu Deinem Anliegen passt, klären wir im kostenlosen Erstgespräch – bewilligt wird er über Deinen",
    outroLinkLabel: "AVGS-Gutschein",
    outroAfter: ". Den Papierkram mit Agentur oder Jobcenter übernehmen wir.",
  },
  gruende: {
    eyebrow: "Warum Kuhl & Engel",
    headline: "Gute Gründe, mit uns zu",
    headlineEm: "arbeiten.",
    items: [
      {
        title: "Nachhaltig & ganzheitlich",
        text: "Wir entwickeln mit Dir eine berufliche Ausrichtung, die Dich langfristig motiviert – nicht die schnelle Notlösung.",
      },
      {
        title: "Empathisch & wertschätzend",
        text: "Zugewandte Coaches, die Deinen Handlungsspielraum mit Dir neu definieren. Immer auf Augenhöhe.",
      },
      {
        title: "Persönlich & individuell",
        text: "Kein Schema F: Du gibst die Richtung an, wir begleiten Dich an Deinen Bedürfnissen ausgerichtet.",
      },
      {
        title: "Professionell & erfahren",
        text: "14 zertifizierte, systemisch ausgebildete Coach:innen mit vielseitiger Expertise und langjähriger Erfahrung.",
      },
    ],
    ctaLabel: "AVGS Coaching jetzt starten",
    phonePrefix: "oder ruf an:",
  },
  standorte: {
    eyebrow: "Unsere Standorte",
    headline: "Online, Berlin, Potsdam, Augsburg –",
    headlineEm: "oder hybrid.",
    linkLabel: "Mehr zum Standort",
    hybridNote:
      "Alle Coachings bieten wir auch hybrid an – vor Ort kombiniert mit Online-Terminen via Zoom.",
  },
  methode: {
    eyebrow: "Unsere Methode",
    headline: "Systemisch heißt: Wir schauen",
    headlineEm: "aufs Ganze.",
    text1:
      "Dein Beruf ist kein isoliertes Thema. Er hängt mit Deinen Werten zusammen, mit Deiner Lebenssituation, mit den Erwartungen von Familie und Umfeld – und mit Glaubenssätzen, die Du oft gar nicht bemerkst. Systemisches Coaching bezieht dieses ganze System ein, statt nur am Lebenslauf zu polieren.",
    text2:
      "Das Ergebnis sind keine schnellen Notlösungen, sondern Entscheidungen, die von Dir selbst kommen – und deshalb auch dann noch tragen, wenn das Coaching längst abgeschlossen ist.",
  },
  abgrenzung: {
    eyebrow: "Gut zu wissen",
    headline: "Coaching oder",
    headlineEm: "Beratung?",
    text1:
      "Eine Karriereberatung gibt Dir Empfehlungen von außen. Ein Jobcoaching entwickelt Deine eigenen Antworten – mit Methoden, Struktur und ehrlichem Feedback. Beides hat seinen Platz; wenn Du nachhaltige Klarheit suchst, ist Coaching der wirksamere Weg.",
    text2:
      "Das Beste: Am Preis ändert der Unterschied nichts. Mit einem AVGS-Gutschein der Agentur für Arbeit oder des Jobcenters ist das komplette 1:1-Coaching für Dich kostenfrei – Du bekommst echte Begleitung statt Beratung von der Stange, ohne einen Euro zu zahlen.",
  },
  faq: {
    headline: "Häufige Fragen zum",
    headlineEm: "Jobcoaching.",
    items: [
      {
        q: "Was kostet ein Jobcoaching?",
        a: "Mit einem AVGS-Gutschein (Aktivierungs- und Vermittlungsgutschein) der Agentur für Arbeit oder des Jobcenters ist das Jobcoaching bei Kuhl & Engel zu 100 % kostenfrei – wir rechnen direkt mit der Behörde ab. Auch das Erstgespräch kostet nichts. Ohne Gutschein finden wir im kostenlosen Erstgespräch eine individuelle Lösung.",
      },
      {
        q: "Was macht ein Jobcoach genau?",
        a: "Ein Jobcoach begleitet Dich im 1:1 durch berufliche Veränderung: Standortbestimmung, Klarheit über Stärken und Werte, Bewerbungsstrategie, Vorstellungsgespräche und Entscheidungen. Anders als eine Beratung gibt Dir ein Coach keine fertigen Antworten vor, sondern führt Dich mit Methoden, Struktur und Feedback zu Deinen eigenen – die deshalb auch langfristig tragen.",
      },
      {
        q: "Wie lange dauert ein Jobcoaching?",
        a: "Bei Kuhl & Engel gibt es drei Umfänge: 24 Unterrichtseinheiten in 6 Wochen, 32 UE in 8 Wochen oder 44 UE in 11 Wochen (1 UE = 45 Minuten). Welcher Umfang zu Deinem Anliegen passt, klären wir im kostenlosen Erstgespräch – bewilligt wird er über Deinen AVGS.",
      },
      {
        q: "Wer bezahlt das Jobcoaching?",
        a: "In den meisten Fällen die Agentur für Arbeit oder das Jobcenter – über den AVGS-Gutschein nach § 45 SGB III. Die Kostenübernahme ist vollständig, es gibt keinen Eigenanteil. Wie Du den Gutschein bekommst, erklären wir Schritt für Schritt in unserem AVGS-Ratgeber.",
      },
      {
        q: "Für wen ist Jobcoaching sinnvoll?",
        a: "Für alle, die beruflich in einer Veränderungssituation stecken: Arbeitslose und Arbeitssuchende, Wiedereinsteiger:innen nach der Elternzeit, Absolvent:innen und Promovierte auf Richtungssuche, Fach- und Führungskräfte vor dem nächsten Schritt. Wir sind auf Akademiker:innen spezialisiert – entscheidend ist aber Dein Anliegen, nicht Dein Titel.",
      },
      {
        q: "Was ist der Unterschied zwischen Jobcoaching und Bewerbungstraining?",
        a: "Ein Bewerbungstraining übt Unterlagen und Gespräche. Jobcoaching setzt früher an: Erst klären wir, wohin Du überhaupt willst und was Dich ausmacht – dann folgen Strategie und Bewerbung. Die Bewerbungsthemen sind also ein Teil des Coachings, nicht das Ganze.",
      },
      {
        q: "Ist Jobcoaching auch online möglich?",
        a: "Ja. Du kannst komplett online via Zoom gecoacht werden, vor Ort in Berlin, Potsdam oder Augsburg – oder hybrid als Kombination aus beidem. Die Wirkung ist dieselbe – entscheidend ist, dass die Chemie zwischen Dir und Deinem:Deiner Coach:in stimmt.",
      },
    ],
    outro: "Noch keinen Gutschein?",
    outroLinkLabel: "So beantragst Du den AVGS →",
  },
  cta: {
    title: "Stell Dir eine Arbeit vor, die",
    titleEm: "zu Dir passt.",
    text: "Klingt weltfremd? Wir sind überzeugt: Das geht. Lerne uns in einem kostenlosen Erstgespräch kennen.",
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
      { type: "text", key: "eyebrow", label: "Kicker (kleine Zeile über der Überschrift)" },
      { type: "text", key: "headline", label: "Überschrift – Anfang" },
      {
        type: "text",
        key: "headlineEm",
        label: "Überschrift – kursiver Teil",
        help: "Wird mitten in der Überschrift kursiv dargestellt.",
      },
      { type: "text", key: "headlineAfter", label: "Überschrift – Ende (nach dem kursiven Teil)" },
      { type: "textarea", key: "intro", label: "Text unter der Überschrift", rows: 4 },
      { type: "image", key: "image", label: "Hintergrundbild", help: IMAGE_HELP },
      { type: "text", key: "ctaLabel", label: "Beschriftung des Buttons" },
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
          { type: "text", key: "label", label: "Bezeichnung (z. B. Kosten)" },
          { type: "text", key: "value", label: "Wert" },
        ],
      },
    ],
  },
  {
    type: "group",
    key: "szenarien",
    label: "Sechs Situationen – „Wozu brauche ich das?“",
    fields: [
      ...headlineFields,
      { type: "textarea", key: "intro", label: "Einleitungstext", rows: 3 },
      {
        type: "objectList",
        key: "items",
        label: "Die sechs Situationen",
        itemTitle: "title",
        fixed: true,
        help: "Die Überschrift nennt „Sechs Situationen“ – die Anzahl ist daher fest.",
        fields: [
          { type: "text", key: "title", label: "Titel" },
          { type: "textarea", key: "text", label: "Text", rows: 3 },
        ],
      },
    ],
  },
  {
    type: "group",
    key: "pakete",
    label: "Ablauf & Umfang – die drei Pakete",
    fields: [
      ...headlineFields,
      { type: "textarea", key: "note", label: "Hinweistext rechts neben der Überschrift", rows: 3 },
      {
        type: "objectList",
        key: "items",
        label: "Die drei Pakete",
        itemTitle: "name",
        fixed: true,
        fields: [
          { type: "text", key: "name", label: "Name (Kompakt / Ausgewogen / Intensiv)" },
          { type: "text", key: "ue", label: "Umfang (z. B. 24 UE)" },
          { type: "text", key: "dauer", label: "Dauer (z. B. 6 Wochen)" },
          { type: "textarea", key: "text", label: "Text", rows: 3 },
        ],
      },
      { type: "textarea", key: "outro", label: "Absatz unter den Paketen (vor dem Link)", rows: 3 },
      { type: "text", key: "outroLinkLabel", label: "Link-Text (führt zum AVGS-Ratgeber)" },
      {
        type: "text",
        key: "outroAfter",
        label: "Text nach dem Link",
        help: "Folgt ohne Leerzeichen direkt auf den Link – ggf. mit Satzzeichen beginnen.",
      },
    ],
  },
  {
    type: "group",
    key: "gruende",
    label: "Warum Kuhl & Engel – vier Gründe",
    fields: [
      ...headlineFields,
      {
        type: "objectList",
        key: "items",
        label: "Die vier Gründe",
        itemTitle: "title",
        fixed: true,
        fields: [
          { type: "text", key: "title", label: "Titel" },
          { type: "textarea", key: "text", label: "Text", rows: 3 },
        ],
      },
      { type: "text", key: "ctaLabel", label: "Beschriftung des Buttons" },
      { type: "text", key: "phonePrefix", label: "Text vor der Telefonnummer" },
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
  {
    type: "group",
    key: "methode",
    label: "Unsere Methode – „Systemisch heißt …“ (linke Spalte)",
    fields: [
      ...headlineFields,
      { type: "textarea", key: "text1", label: "Absatz 1", rows: 5 },
      { type: "textarea", key: "text2", label: "Absatz 2", rows: 4 },
    ],
  },
  {
    type: "group",
    key: "abgrenzung",
    label: "Gut zu wissen – „Coaching oder Beratung?“ (rechte Spalte)",
    fields: [
      ...headlineFields,
      { type: "textarea", key: "text1", label: "Absatz 1", rows: 4 },
      { type: "textarea", key: "text2", label: "Absatz 2", rows: 5 },
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
      { type: "text", key: "outro", label: "Abschlusszeile (vor dem Link)" },
      { type: "text", key: "outroLinkLabel", label: "Link-Text (führt zum AVGS-Ratgeber)" },
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
