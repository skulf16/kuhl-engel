import { cache } from "react";
import { getDocument } from "@/lib/cms/store";
import { DEFAULTS } from "@/lib/cms/registry";
import { STARTSEITE_DEFAULTS, type StartseiteContent } from "@/lib/cms/defaults/startseite";
import type {
  Bereich,
  Faq,
  Leistung,
  Standort,
  TeamMember,
  Testimonial,
} from "@/lib/data";
import { CONTACT, STATS } from "@/lib/data";

/**
 * Liest CMS-Inhalte mit Fallback auf die Defaults aus lib/data.ts.
 * Gespeicherte Dokumente werden über die Defaults gelegt (Deep-Merge),
 * damit neue Felder im Code nie an alten Dokumenten scheitern.
 */

const isPlainObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v);

function deepMerge(fallback: unknown, saved: unknown): unknown {
  if (saved === undefined || saved === null) return fallback;
  if (Array.isArray(saved)) return saved; // Listen ersetzen die Defaults komplett
  if (isPlainObject(saved) && isPlainObject(fallback)) {
    const out: Record<string, unknown> = { ...fallback };
    for (const [k, v] of Object.entries(saved)) {
      out[k] = deepMerge(fallback[k], v);
    }
    return out;
  }
  return saved;
}

/** Pro Request dedupliziert (React cache) – eine Sektion wird nur einmal geladen. */
export const loadSection = cache(async (key: string): Promise<unknown> => {
  const fallback = DEFAULTS[key];
  const saved = await getDocument(key);
  return saved == null ? fallback : deepMerge(fallback, saved);
});

/**
 * Für Seiten-Sektionen, deren Defaults im eigenen Modul liegen
 * (lib/cms/pages/*): lädt das Dokument und merged es über die Defaults.
 */
export const loadPage = cache(
  async <T,>(key: string, fallback: T): Promise<T> => {
    const saved = await getDocument(key);
    return saved == null ? fallback : (deepMerge(fallback, saved) as T);
  }
);

// ---------- Typisierte Getter für die Seiten ----------

export const getStartseite = () =>
  loadSection("startseite") as Promise<StartseiteContent>;

export const getKontakt = () => loadSection("kontakt") as Promise<typeof CONTACT>;

export const getStats = async () =>
  ((await loadSection("stats")) as { items: typeof STATS }).items;

export const getBereiche = async () =>
  ((await loadSection("bereiche")) as { items: Bereich[] }).items;

export const getJobcoachingLeistungen = async () =>
  ((await loadSection("leistungen-jobcoaching")) as { items: Leistung[] }).items;

export const getJugendAngebote = async () =>
  ((await loadSection("angebote-jugend")) as { items: Leistung[] }).items;

export const getTeam = async () => {
  const doc = (await loadSection("team")) as {
    founders: TeamMember[];
    members: TeamMember[];
  };
  return doc;
};

export const getTestimonials = async () =>
  ((await loadSection("testimonials")) as { items: Testimonial[] }).items;

export const getFaqsAvgs = async () =>
  ((await loadSection("faqs-avgs")) as { items: Faq[] }).items;

export const getStandorte = async () =>
  ((await loadSection("standorte")) as { items: Standort[] }).items;

export { STARTSEITE_DEFAULTS };
