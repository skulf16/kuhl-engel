import {
  BEREICHE,
  CONTACT,
  FAQS_AVGS,
  FOUNDERS,
  JOBCOACHING_LEISTUNGEN,
  JUGEND_ANGEBOTE,
  STANDORTE,
  STATS,
  TEAM,
  TESTIMONIALS,
} from "@/lib/data";
import { STARTSEITE_DEFAULTS } from "./defaults/startseite";
import type { Field, SectionDef } from "./types";
import * as SeiteJobcoaching from "./pages/seite-jobcoaching";
import * as SeiteAvgsCoaching from "./pages/seite-avgs-coaching";
import * as SeiteAvgsGutschein from "./pages/seite-avgs-gutschein";
import * as SeiteKarrierecoaching from "./pages/seite-karrierecoaching";
import * as SeiteJobcoachingBerlin from "./pages/seite-jobcoaching-berlin";
import * as SeiteJobcoachingPotsdam from "./pages/seite-jobcoaching-potsdam";
import * as SeiteJobcoachingAugsburg from "./pages/seite-jobcoaching-augsburg";
import * as SeiteBerufsorientierung from "./pages/seite-berufsorientierung";
import * as SeiteBoEinzelcoaching from "./pages/seite-bo-einzelcoaching";
import * as SeiteBoGruppenangebote from "./pages/seite-bo-gruppenangebote";
import * as SeiteBoBerufsstart from "./pages/seite-bo-berufsstart";
import * as SeiteUeberUns from "./pages/seite-ueber-uns";
import * as SeiteKontakt from "./pages/seite-kontakt";

/**
 * Seiten-Module aus lib/cms/pages/ – jedes exportiert KEY, TITLE,
 * DESCRIPTION, FIELDS und DEFAULTS. Reihenfolge = Reihenfolge im Admin.
 */
const PAGE_MODULES = [
  SeiteJobcoaching,
  SeiteAvgsCoaching,
  SeiteAvgsGutschein,
  SeiteKarrierecoaching,
  SeiteJobcoachingBerlin,
  SeiteJobcoachingPotsdam,
  SeiteJobcoachingAugsburg,
  SeiteBerufsorientierung,
  SeiteBoEinzelcoaching,
  SeiteBoGruppenangebote,
  SeiteBoBerufsstart,
  SeiteUeberUns,
  SeiteKontakt,
] as const;

const PAGE_SECTIONS: SectionDef[] = PAGE_MODULES.map((mod) => ({
  key: mod.KEY,
  title: mod.TITLE,
  group: "Seiten",
  description: mod.DESCRIPTION,
  fields: mod.FIELDS,
}));

/**
 * Registry aller im Admin editierbaren Sektionen.
 * "Seiten" = Inhalte einer konkreten Seite, "Bausteine" = Inhalte,
 * die auf mehreren Seiten erscheinen (Team, FAQs, Kontaktdaten …).
 * Die Defaults kommen aus lib/data.ts bzw. lib/cms/defaults/ –
 * gespeicherte Dokumente überschreiben sie.
 */

const IMAGE_HELP = "JPG oder PNG hochladen – wird automatisch verkleinert.";

const headlineFields = (kursivHint = true): Field[] => [
  { type: "text", key: "eyebrow", label: "Kicker (kleine Zeile über der Überschrift)" },
  { type: "text", key: "headline", label: "Überschrift" },
  {
    type: "text",
    key: "headlineEm",
    label: "Überschrift – kursiver Teil",
    help: kursivHint ? "Wird hinter der Überschrift kursiv dargestellt." : undefined,
  },
];

const startseiteFields: Field[] = [
  {
    type: "group",
    key: "hero",
    label: "Hero – großes Bild ganz oben",
    fields: [
      { type: "image", key: "image", label: "Hintergrundbild", help: IMAGE_HELP },
      { type: "text", key: "badge", label: "Badge-Zeile über der Überschrift" },
      { type: "text", key: "headline1", label: "Überschrift Zeile 1" },
      { type: "text", key: "headline2", label: "Überschrift Zeile 2 (kursiv)" },
      { type: "textarea", key: "subline", label: "Text unter der Überschrift", rows: 3 },
      { type: "text", key: "ctaLabel", label: "Beschriftung des Buttons" },
    ],
  },
  {
    type: "group",
    key: "positionierung",
    label: "Positionierung – „Anspruchsvolle Laufbahnen …“",
    fields: [
      ...headlineFields(),
      { type: "textarea", key: "text", label: "Absatztext", rows: 5 },
      { type: "stringList", key: "bullets", label: "Häkchen-Punkte", itemLabel: "Punkt" },
      { type: "text", key: "linkLabel", label: "Link-Text (führt zu „Über uns“)" },
      { type: "image", key: "imageMain", label: "Großes Bild", help: IMAGE_HELP },
      { type: "image", key: "imageSmall", label: "Kleines Bild (unten links)", help: IMAGE_HELP },
    ],
  },
  {
    type: "group",
    key: "weiche",
    label: "Zwei-Wege-Weiche – Überschriften",
    help: "Die beiden Karten selbst bearbeitest Du unter „Bausteine → Die zwei Bereiche“.",
    fields: [
      ...headlineFields(),
      { type: "textarea", key: "intro", label: "Einleitungstext", rows: 2 },
    ],
  },
  {
    type: "group",
    key: "methode",
    label: "Unsere Methode",
    fields: [
      ...headlineFields(),
      { type: "textarea", key: "intro", label: "Einleitungstext", rows: 4 },
      {
        type: "objectList",
        key: "steps",
        label: "Die drei Phasen",
        itemTitle: "title",
        fixed: true,
        fields: [
          { type: "text", key: "step", label: "Ziffer (I / II / III)" },
          { type: "text", key: "title", label: "Titel" },
          { type: "textarea", key: "text", label: "Text", rows: 3 },
        ],
      },
      { type: "textarea", key: "quote", label: "Zitat", rows: 2 },
      { type: "text", key: "quoteAuthor", label: "Zitat – Urheber:in" },
    ],
  },
  {
    type: "group",
    key: "gruenderinnen",
    label: "Gründerinnen-Sektion",
    help: "Namen und Rollen der Gründerinnen bearbeitest Du unter „Bausteine → Team“.",
    fields: [
      ...headlineFields(),
      { type: "textarea", key: "text", label: "Absatztext", rows: 5 },
      { type: "image", key: "image", label: "Foto", help: IMAGE_HELP },
      { type: "text", key: "linkLabel", label: "Link-Text (führt zu „Über uns“)" },
    ],
  },
  {
    type: "group",
    key: "coaches",
    label: "Coach:innen-Leiste",
    help: "Die Fotos kommen aus „Bausteine → Team“.",
    fields: [
      ...headlineFields(),
      { type: "textarea", key: "intro", label: "Einleitungstext", rows: 2 },
      { type: "text", key: "outro", label: "Abschlusszeile unter den Fotos" },
      { type: "text", key: "linkLabel", label: "Link-Text (führt zu „Über uns“)" },
    ],
  },
  {
    type: "group",
    key: "stimmen",
    label: "Kundenstimmen – Überschriften",
    help: "Die Zitate selbst bearbeitest Du unter „Bausteine → Kundenstimmen“.",
    fields: [
      ...headlineFields(),
      { type: "text", key: "ratingNote", label: "Bewertungs-Hinweis (rechts oben)" },
    ],
  },
  {
    type: "group",
    key: "faq",
    label: "FAQ – Überschriften",
    help: "Die Fragen und Antworten bearbeitest Du unter „Bausteine → FAQs AVGS“.",
    fields: [
      ...headlineFields(),
      { type: "text", key: "outro", label: "Abschlusszeile (vor der Telefonnummer)" },
    ],
  },
];

const teamMemberFields: Field[] = [
  { type: "text", key: "name", label: "Name" },
  { type: "text", key: "role", label: "Rolle / Standort" },
  { type: "textarea", key: "quali", label: "Qualifikationen", rows: 2 },
  { type: "image", key: "image", label: "Porträtfoto", help: IMAGE_HELP },
  { type: "textarea", key: "quote", label: "Zitat (optional)", rows: 3 },
];

const leistungFields: Field[] = [
  { type: "text", key: "nr", label: "Nummer (01, 02 …)" },
  { type: "text", key: "title", label: "Titel" },
  { type: "text", key: "claim", label: "Claim (goldene Zeile)" },
  { type: "textarea", key: "text", label: "Text", rows: 3 },
  { type: "image", key: "image", label: "Bild", help: IMAGE_HELP },
];

export const SECTIONS: SectionDef[] = [
  {
    key: "startseite",
    title: "Startseite",
    group: "Seiten",
    description: "Alle Texte und Bilder der Startseite – vom Hero bis zur FAQ-Überschrift.",
    fields: startseiteFields,
  },
  ...PAGE_SECTIONS,
  {
    key: "kontakt",
    title: "Kontaktdaten",
    group: "Bausteine",
    description: "Telefonnummer und E-Mail – erscheinen auf allen Seiten (Header, Footer, Buttons).",
    fields: [
      { type: "text", key: "phone", label: "Telefonnummer (Anzeige)" },
      {
        type: "text",
        key: "phoneHref",
        label: "Telefonnummer (Wähl-Link)",
        help: "Format: tel:+4930515653880 – ohne Leerzeichen.",
      },
      { type: "text", key: "email", label: "E-Mail-Adresse" },
    ],
  },
  {
    key: "stats",
    title: "Kennzahlen",
    group: "Bausteine",
    description: "Das Zahlen-Band (Unterrichtseinheiten, Coach:innen, Google-Bewertung) – Startseite und Berufsorientierung.",
    fields: [
      {
        type: "objectList",
        key: "items",
        label: "Kennzahlen",
        itemTitle: "label",
        fixed: true,
        fields: [
          { type: "text", key: "value", label: "Zahl" },
          { type: "text", key: "label", label: "Beschriftung" },
        ],
      },
    ],
  },
  {
    key: "bereiche",
    title: "Die zwei Bereiche",
    group: "Bausteine",
    description: "Die beiden großen Karten der Zwei-Wege-Weiche auf der Startseite.",
    fields: [
      {
        type: "objectList",
        key: "items",
        label: "Karten",
        itemTitle: "title",
        fixed: true,
        fields: [
          { type: "text", key: "kicker", label: "Kicker (Pill auf dem Bild)" },
          { type: "text", key: "title", label: "Titel" },
          { type: "text", key: "claim", label: "Claim (goldene Zeile)" },
          { type: "textarea", key: "text", label: "Text", rows: 4 },
          { type: "stringList", key: "points", label: "Häkchen-Punkte", itemLabel: "Punkt" },
          { type: "text", key: "cta", label: "Button-Beschriftung" },
          { type: "image", key: "image", label: "Bild", help: IMAGE_HELP },
        ],
      },
    ],
  },
  {
    key: "leistungen-jobcoaching",
    title: "Jobcoaching – Angebotskarten",
    group: "Bausteine",
    description: "Die vier Angebotskarten des Jobcoaching-Bereichs (AVGS, Karriere, Berlin, Potsdam).",
    fields: [
      {
        type: "objectList",
        key: "items",
        label: "Karten",
        itemTitle: "title",
        fixed: true,
        fields: leistungFields,
      },
    ],
  },
  {
    key: "angebote-jugend",
    title: "Berufsorientierung – Angebotskarten",
    group: "Bausteine",
    description: "Die drei Angebotskarten der Berufsorientierung (Gruppen, Einzel, Berufsstart).",
    fields: [
      {
        type: "objectList",
        key: "items",
        label: "Karten",
        itemTitle: "title",
        fixed: true,
        fields: leistungFields,
      },
    ],
  },
  {
    key: "team",
    title: "Team",
    group: "Bausteine",
    description: "Gründerinnen und Coach:innen mit Fotos, Rollen und Zitaten – Startseite und „Über uns“.",
    fields: [
      {
        type: "objectList",
        key: "founders",
        label: "Gründerinnen",
        itemTitle: "name",
        fixed: true,
        fields: teamMemberFields,
      },
      {
        type: "objectList",
        key: "members",
        label: "Team & Coach:innen",
        itemTitle: "name",
        fields: teamMemberFields,
      },
    ],
  },
  {
    key: "testimonials",
    title: "Kundenstimmen",
    group: "Bausteine",
    description: "Zitate zufriedener Klient:innen – Startseite und weitere Seiten.",
    fields: [
      {
        type: "objectList",
        key: "items",
        label: "Zitate",
        itemTitle: "author",
        fields: [
          { type: "textarea", key: "quote", label: "Zitat", rows: 4 },
          { type: "text", key: "author", label: "Name" },
          { type: "text", key: "meta", label: "Zusatzzeile (optional)" },
        ],
      },
    ],
  },
  {
    key: "faqs-avgs",
    title: "FAQs AVGS",
    group: "Bausteine",
    description: "Häufige Fragen zum AVGS Coaching – Startseite und Jobcoaching-Seiten.",
    fields: [
      {
        type: "objectList",
        key: "items",
        label: "Fragen",
        itemTitle: "q",
        fields: [
          { type: "text", key: "q", label: "Frage" },
          { type: "textarea", key: "a", label: "Antwort", rows: 4 },
        ],
      },
    ],
  },
  {
    key: "standorte",
    title: "Standorte",
    group: "Bausteine",
    description: "Online, Berlin, Potsdam, Augsburg – Adressen für „Über uns“ und Kontakt.",
    fields: [
      {
        type: "objectList",
        key: "items",
        label: "Standorte",
        itemTitle: "city",
        fixed: true,
        fields: [
          { type: "text", key: "city", label: "Stadt" },
          { type: "text", key: "label", label: "Lage / Viertel" },
          { type: "stringList", key: "address", label: "Adresszeilen", itemLabel: "Zeile" },
          { type: "text", key: "note", label: "Hinweis (optional)" },
        ],
      },
    ],
  },
];

/** Default-Inhalte je Sektion – identisch strukturiert zu den gespeicherten Dokumenten. */
export const DEFAULTS: Record<string, unknown> = {
  startseite: STARTSEITE_DEFAULTS,
  ...Object.fromEntries(PAGE_MODULES.map((mod) => [mod.KEY, mod.DEFAULTS])),
  kontakt: CONTACT,
  stats: { items: STATS },
  bereiche: { items: BEREICHE },
  "leistungen-jobcoaching": { items: JOBCOACHING_LEISTUNGEN },
  "angebote-jugend": { items: JUGEND_ANGEBOTE },
  team: { founders: FOUNDERS, members: TEAM },
  testimonials: { items: TESTIMONIALS },
  "faqs-avgs": { items: FAQS_AVGS },
  standorte: { items: STANDORTE },
};

export function getSection(key: string): SectionDef | undefined {
  return SECTIONS.find((s) => s.key === key);
}
