import type { Field } from "@/lib/cms/types";

/**
 * Inhalte der Seite /berufsorientierung/berufsstart
 * (Hilfreiches für den Berufsstart – Videos, Links und Vorlagen).
 * Die Link-Listen dürfen wachsen: Einträge können im Admin
 * hinzugefügt und entfernt werden.
 */

export const KEY = "seite-bo-berufsstart";
export const TITLE = "Berufsorientierung – Berufsstart";
export const DESCRIPTION =
  "Die Seite „Hilfreiches für den Berufsstart“ – Video-Interviews, kuratierte Links zu Studium und Ausbildung, Lebenslauf-Vorlagen und Ausbildungsbörsen.";

type LinkItem = { label: string; href: string; image: string };

export type Content = {
  hero: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    intro: string;
    image: string;
  };
  hinweis: {
    strong: string;
    text: string;
    linkLabel: string;
  };
  videos: {
    nr: string;
    title: string;
    intro: string;
    items: { videoId: string; title: string; thumbnail: string }[];
    datenschutz: string;
  };
  wege: {
    nr: string;
    title: string;
    intro: string;
    links: LinkItem[];
  };
  lebenslauf: {
    nr: string;
    title: string;
    intro: string;
    links: LinkItem[];
  };
  ausbildung: {
    nr: string;
    title: string;
    intro: string;
    links: LinkItem[];
  };
  begleitung: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    textBefore: string;
    link1Label: string;
    textMiddle: string;
    link2Label: string;
    textAfter: string;
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
    eyebrow: "Berufsorientierung · Hilfreiches",
    headline: "Hilfreiches für",
    headlineEm: "Deinen Berufsstart.",
    intro:
      "Welcher Weg passt zu Dir? Hier findest Du Berufe im Video-Check, kuratierte Links, Lebenslauf-Vorlagen und Ausbildungsbörsen – die wichtigsten Anlaufstellen für Deinen Start ins Berufsleben, an einem Ort.",
    image: "/images/jugend-freundlich.jpg",
  },
  hinweis: {
    strong: "Hinweis für Lehrkräfte und Eltern:",
    text: "Diese Seite ist zum direkten Weitergeben gedacht – alle Links und Vorlagen sind frei zugänglich. Informationen zu unseren Angeboten für Schulen findest Du unter",
    linkLabel: "Berufsorientierung",
  },
  videos: {
    nr: "01",
    title: "Berufe im Video-Check",
    intro:
      "Wie sieht der Arbeitsalltag in einem Beruf wirklich aus? In den Schüler-Interviews von Job-Opener bekommst Du ehrliche Einblicke – direkt von Menschen, die den Job jeden Tag machen.",
    items: [
      {
        videoId: "FPCNaE7emrY",
        title: "Check den Informationselektroniker – das Schüler-Interview",
        thumbnail: "/images/yt-FPCNaE7emrY.jpg",
      },
      {
        videoId: "C9Jkb6Oss-s",
        title: "Check den Steuerberater – das Schüler-Interview",
        thumbnail: "/images/yt-C9Jkb6Oss-s.jpg",
      },
      {
        videoId: "HKIIGXwUjrU",
        title: "Check den Elektriker – das Schüler-Interview",
        thumbnail: "/images/yt-HKIIGXwUjrU.jpg",
      },
    ],
    datenschutz:
      "Beim Abspielen wird eine Verbindung zu YouTube hergestellt und es gelten die Datenschutzbestimmungen von Google.",
  },
  wege: {
    nr: "02",
    title: "Studium, duales Studium oder Ausbildung?",
    intro:
      "Nach der Schule gibt es viele Wege ins Berufsleben. Hier findest Du Infos zu Möglichkeiten, Voraussetzungen und Perspektiven – damit Du herausfindest, was zu Deinen Interessen und Stärken passt.",
    links: [
      {
        label: "Informationen zu Studienplätzen (hochschulkompass.de)",
        href: "https://www.hochschulkompass.de",
        image: "/images/weiterbildung.jpg",
      },
      {
        label: "Informationen zur Ausbildung (arbeitsagentur.de)",
        href: "https://www.arbeitsagentur.de/bildung/ausbildung",
        image: "/images/jugend-seminar.jpg",
      },
      {
        label: "Informationen zum dualen Studium (wegweiser-duales-studium.de)",
        href: "https://www.wegweiser-duales-studium.de",
        image: "/images/seminar.jpg",
      },
    ],
  },
  lebenslauf: {
    nr: "03",
    title: "So kann Dein Lebenslauf aussehen",
    intro:
      "Einen Lebenslauf zu schreiben fällt am Anfang vielen schwer. Diese Beispiele zeigen Dir, wie ein Lebenslauf aufgebaut sein kann. Du musst nicht perfekt sein – wichtig ist, dass er zu Dir passt.",
    links: [
      {
        label: "Beispiele für einen Lebenslauf – Ausbildung nach der Schule (PDF)",
        href: "https://kuhlundengel.de/wp-content/uploads/2024/03/Beispiele-fuer-die-Gestaltung-eines-Lebenlaufs_Ausbildung.pdf",
        image: "/images/ke-unterlagen.jpg",
      },
      {
        label: "Weitere Beispiele zur Gestaltung eines Lebenslaufs (PDF)",
        href: "https://kuhlundengel.de/wp-content/uploads/2023/12/Beispiele-fuer-die-Gestaltung-eines-Lebenlaufs.pdf",
        image: "/images/ke-unterlagen-duo.jpg",
      },
    ],
  },
  ausbildung: {
    nr: "04",
    title: "Finde eine Ausbildung in Deinem Traumjob",
    intro:
      "Du suchst eine Ausbildung oder möchtest wissen, welche Möglichkeiten es in Deiner Region gibt? Hier findest Du Ausbildungsbörsen und Angebote rund um Ausbildung, Praktikum und Berufseinstieg.",
    links: [
      {
        label: "Ausbildung.de",
        href: "https://www.ausbildung.de",
        image: "/images/jugend-gruppe.jpg",
      },
      {
        label: "Agentur für Arbeit – Ausbildungssuche",
        href: "https://www.arbeitsagentur.de/ausbildungssuche",
        image: "/images/jugend-einzel.jpg",
      },
      {
        label: "Ausbildung-in-Deutschland.de",
        href: "https://www.ausbildung-in-deutschland.de",
        image: "/images/jugend-gruppe-2.jpg",
      },
      {
        label: "Ausbildungsmarkt.de",
        href: "https://www.ausbildungsmarkt.de",
        image: "/images/jugend-spiel-coaching.jpg",
      },
    ],
  },
  begleitung: {
    eyebrow: "Noch mehr Unterstützung?",
    headline: "Wir begleiten Dich",
    headlineEm: "persönlich.",
    textBefore: "Links und Vorlagen sind ein guter Anfang – im",
    link1Label: "Einzelcoaching",
    textMiddle: "oder in unseren",
    link2Label: "Projekttagen",
    textAfter:
      "finden wir gemeinsam heraus, was wirklich zu Dir passt. Sprich am besten mit Deinen Eltern oder Deiner Lehrkraft darüber.",
  },
  cta: {
    headline: "Lieber gemeinsam",
    headlineEm: "herausfinden?",
    text: "Melde Dich für ein unverbindliches Gespräch – wir helfen Dir, Deinen Weg nach der Schule zu finden.",
    buttonLabel: "Unverbindlich anfragen",
  },
  zurueck: {
    label: "← Zurück zur Berufsorientierung",
  },
};

const IMAGE_HELP = "JPG oder PNG hochladen – wird automatisch verkleinert.";

const linkListField = (label: string): Field => ({
  type: "objectList",
  key: "links",
  label,
  itemTitle: "label",
  fields: [
    { type: "text", key: "label", label: "Link-Beschriftung" },
    { type: "text", key: "href", label: "Link (URL)" },
    { type: "image", key: "image", label: "Bild", help: IMAGE_HELP },
  ],
});

const abschnittKopf: Field[] = [
  { type: "text", key: "nr", label: "Nummer (01, 02 …)" },
  { type: "text", key: "title", label: "Überschrift" },
  { type: "textarea", key: "intro", label: "Einleitungstext", rows: 3 },
];

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
    key: "hinweis",
    label: "Hinweis-Kasten für Lehrkräfte und Eltern",
    fields: [
      { type: "text", key: "strong", label: "Fett gedruckter Anfang" },
      { type: "textarea", key: "text", label: "Text danach (endet vor dem Link)", rows: 3 },
      { type: "text", key: "linkLabel", label: "Link-Text (führt zur Berufsorientierung)" },
    ],
  },
  {
    type: "group",
    key: "videos",
    label: "Abschnitt 01 – Berufe im Video-Check",
    fields: [
      ...abschnittKopf,
      {
        type: "objectList",
        key: "items",
        label: "Videos",
        itemTitle: "title",
        fields: [
          {
            type: "text",
            key: "videoId",
            label: "YouTube-Video-ID",
            help: "Der Teil hinter „watch?v=“ in der YouTube-Adresse, z. B. FPCNaE7emrY.",
          },
          { type: "text", key: "title", label: "Titel" },
          { type: "image", key: "thumbnail", label: "Vorschaubild", help: IMAGE_HELP },
        ],
      },
      { type: "textarea", key: "datenschutz", label: "Datenschutz-Hinweis unter den Videos", rows: 2 },
    ],
  },
  {
    type: "group",
    key: "wege",
    label: "Abschnitt 02 – Studium, duales Studium oder Ausbildung?",
    fields: [...abschnittKopf, linkListField("Links")],
  },
  {
    type: "group",
    key: "lebenslauf",
    label: "Abschnitt 03 – Lebenslauf-Beispiele",
    fields: [...abschnittKopf, linkListField("Links (z. B. PDF-Vorlagen)")],
  },
  {
    type: "group",
    key: "ausbildung",
    label: "Abschnitt 04 – Ausbildungsbörsen",
    fields: [...abschnittKopf, linkListField("Links")],
  },
  {
    type: "group",
    key: "begleitung",
    label: "Kasten „Noch mehr Unterstützung?“",
    help: "Der Absatz enthält zwei feste Links (Einzelcoaching und Projekttage) – hier bearbeitest Du die Textteile davor, dazwischen und danach.",
    fields: [
      { type: "text", key: "eyebrow", label: "Kicker (kleine Zeile über der Überschrift)" },
      { type: "text", key: "headline", label: "Überschrift" },
      {
        type: "text",
        key: "headlineEm",
        label: "Überschrift – kursiver Teil",
        help: "Wird hinter der Überschrift kursiv dargestellt.",
      },
      { type: "text", key: "textBefore", label: "Text vor dem ersten Link" },
      { type: "text", key: "link1Label", label: "Link-Text 1 (führt zum Einzelcoaching)" },
      { type: "text", key: "textMiddle", label: "Text zwischen den Links" },
      { type: "text", key: "link2Label", label: "Link-Text 2 (führt zu den Gruppenangeboten)" },
      { type: "textarea", key: "textAfter", label: "Text nach dem zweiten Link", rows: 2 },
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
      { type: "textarea", key: "text", label: "Text", rows: 2 },
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
