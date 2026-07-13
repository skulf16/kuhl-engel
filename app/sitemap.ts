import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/schema";

// Stabiles Datum statt Build-Zeitpunkt: kein künstliches „Freshness“-Signal
// bei jedem Deploy. Bei inhaltlichen Änderungen aktualisieren.
const LAST_MODIFIED = new Date("2026-07-10");

export default function sitemap(): MetadataRoute.Sitemap {
  // /impressum & /datenschutz sind noindex und gehören nicht in die Sitemap.
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/jobcoaching", priority: 0.9 },
    { path: "/avgs-coaching", priority: 0.9 },
    { path: "/avgs-gutschein-beantragen", priority: 0.8 },
    { path: "/coaching-fuer-frauen", priority: 0.9 },
    { path: "/jobcoaching-berlin", priority: 0.9 },
    { path: "/jobcoaching-potsdam", priority: 0.8 },
    { path: "/berufsorientierung", priority: 0.9 },
    { path: "/berufsorientierung/einzelcoaching", priority: 0.8 },
    { path: "/berufsorientierung/gruppenangebote", priority: 0.8 },
    { path: "/berufsorientierung/berufsstart", priority: 0.6 },
    { path: "/ueber-uns", priority: 0.7 },
    { path: "/kontakt", priority: 0.8 },
  ];
  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority,
  }));
}
