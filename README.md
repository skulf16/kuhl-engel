# Kuhl & Engel – Website-Relaunch

Kompletter Relaunch von [kuhlundengel.de](https://kuhlundengel.de) auf Basis von
**Next.js 16 (App Router), React 19 und Tailwind CSS v4**.

## Design-Konzept „Refined Academia“

Positionierung: hochwertiges Karrierecoaching für **Akademiker:innen, Fach- und
Führungskräfte**. Die Gestaltung leitet sich aus dem Bestandslogo ab und
übersetzt es in eine premium-editoriale Richtung:

- **Farben**: Ink-Navy `#0e1d2b`, warmes Creme `#f8f5ee`, Gold `#b9862c` /
  `#e2ab52` (abgeleitet vom Orange des Logos), Stahlblau `#3c6187` als Reserve
- **Typografie**: [Fraunces](https://fonts.google.com/specimen/Fraunces)
  (Display-Serifen, kursive Gold-Akzente) + Instrument Sans (Fließtext), geladen
  über `next/font`
- **Motion**: gestaffelte Hero-Einblendung, Scroll-Reveals per
  IntersectionObserver, Ken-Burns-Zoom im Hero, dezente Hover-Zustände –
  respektiert `prefers-reduced-motion`
- Alle Fotos stammen aus der öffentlichen WordPress-Mediathek der Bestandsseite
  (`public/images/`, weboptimiert)

## Seiten

| Route | Inhalt |
| --- | --- |
| `/` | Startseite: Hero, Kennzahlen, Positionierung, Angebote, Methode, AVGS-Prozess, Gründerinnen, Stimmen, FAQ |
| `/avgs-coaching` | AVGS Coaching mit den vier Leitfragen + FAQ |
| `/avgs-gutschein` | Der Weg zum Gutschein in 5 Schritten + FAQ |
| `/neuorientierung` | Einsteiger:innen / Umsteiger:innen / Aussteiger:innen, Outplacement, Wiedereinstieg |
| `/fuehrungskraefte` | Coaching für Fach- und Führungskräfte |
| `/supervision` | Supervision inkl. Konditionen |
| `/weiterbildungen` | Ausbildung „Job- und Karrierecoach:in“ + Seminare |
| `/ueber-uns` | Haltung, Gründerinnen, komplettes Team (15 Coaches), AZAV-Siegel |
| `/kontakt` | Rückruf-Formular, Kontaktdaten, 4 Standorte |
| `/impressum`, `/datenschutz` | Rechtstexte, übernommen von der Bestandsseite |

## Entwicklung

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # statischer Production-Build (alle Seiten prerendered)
```

## GEO & SEO

Die Seite ist für klassische und generative Suche (ChatGPT, Perplexity, AI
Overviews) optimiert:

- **Strukturierte Daten (JSON-LD)**: Organisations-Graph mit allen drei
  Standorten site-weit (`lib/schema.ts`), dazu `Service`, `FAQPage` und
  `BreadcrumbList` pro Leistungsseite sowie `Person` für die Gründerinnen
- **„Auf einen Blick“-Boxen** (`components/FactBox.tsx`): zitierfähige
  Frage-Antwort-Blöcke mit harten Fakten auf allen Leistungsseiten
- **`/llms.txt`**: Kurzprofil und Leistungsverzeichnis für KI-Crawler
- **`robots.txt`**: erlaubt GPTBot, ClaudeBot, PerplexityBot & Co. explizit
- **`sitemap.xml`**, Canonicals und keyword-optimierte Title-Tags auf Basis
  echter Suchvolumina (DataForSEO, Juli 2026)
- **Lokale Landingpages**: `/jobcoaching-berlin` (~1.000 Suchanfragen/Monat
  adressierbar) und `/jobcoaching-potsdam`, verlinkt aus Footer und Kontakt

## Struktur: zwei fokussierte Bereiche

Die Seite konzentriert sich auf zwei Geschäftsbereiche, die auf der Startseite
über eine „Zwei-Wege-Weiche“ direkt getrennt werden:

1. **Jobcoaching / AVGS** (Erwachsene) – Pillar-Seite `/jobcoaching` (breites
   Keyword) → Conversion-Seite `/avgs-coaching` (AVGS + Gutschein zusammengeführt,
   mit mehrstufigem Buchungsfunnel) → lokale Seiten Berlin/Potsdam.
2. **Berufsorientierung** (Jugendliche, Ansprache per „Du“) – Hub
   `/berufsorientierung` → `/einzelcoaching`, `/gruppenangebote`, `/berufsstart`.

Standorte liegen auf `/ueber-uns#standorte`. Entfernt wurden: berufliche
Neuorientierung, Führungskräfte, Supervision, Weiterbildungen, Marktplatz.

Der Buchungsfunnel (`components/BookingFunnel.tsx`) qualifiziert in 4 Schritten
(Gutschein → Thema → Ort → Kontakt) und öffnet am Ende eine vorausgefüllte E-Mail.

## Offene Punkte für den Livegang

- **Kontaktformular & Buchungsfunnel**: öffnen aktuell das E-Mail-Programm mit
  vorausgefüllter Nachricht (`components/ContactForm.tsx`, `BookingFunnel.tsx`).
  Für echten Versand einen Provider anbinden (z. B. Resend, Formspree) oder eine
  API-Route ergänzen.
- **AGB-Seite** wurde nicht migriert (auf der Bestandsseite vorhanden).
- Der „Marktplatz“ (Partner-Jobbörsen) wurde bewusst weggelassen – passt nicht
  zur neuen Premium-Positionierung; bei Bedarf leicht nachrüstbar.
- Google-Bewertungszahl (5,0 ★ / 25 Bewertungen) ist statisch hinterlegt
  (`lib/data.ts` / `app/page.tsx`).

## CMS / Website-Verwaltung (`/admin`)

Eigenes, schlankes Admin ohne Fremd-CMS: Die Kundin meldet sich unter
**`/admin`** an, wählt eine Seite oder einen Baustein, ändert Texte/Bilder und
speichert – die betroffenen Seiten werden per On-Demand-Revalidation sofort
neu generiert.

### Architektur

- **Inhalte**: JSON-Dokumente pro Sektion (`lib/cms/registry.ts` definiert
  Felder + deutsche Labels). Gespeichert wird in **Postgres**
  (Tabelle `cms_documents`, wird automatisch angelegt) – ohne `DATABASE_URL`
  fällt alles auf JSON-Dateien unter `data/cms/` zurück (lokale Entwicklung).
- **Fallback-Prinzip**: `lib/data.ts` + `lib/cms/defaults/` sind die
  Default-Inhalte. Gespeicherte Dokumente werden per Deep-Merge darübergelegt –
  die Site baut und läuft auch ganz ohne Datenbank.
- **Bilder**: Upload über das Admin (max. 2400 px, via sharp verkleinert) nach
  `UPLOADS_DIR` (Default `data/uploads/`), ausgeliefert über `/media/[name]`.
- **Auth**: Ein Passwort (`ADMIN_PASSWORD`), HMAC-signierte Session-Cookie,
  30 Tage gültig. `/admin` ist per robots.txt + noindex ausgeschlossen.

### Umgebungsvariablen

| Variable | Pflicht | Beschreibung |
| --- | --- | --- |
| `ADMIN_PASSWORD` | ja | Login-Passwort für `/admin` |
| `DATABASE_URL` | Produktion | Postgres-Connection-String (z. B. `postgres://user:pass@host:5432/kuhlengel`) |
| `AUTH_SECRET` | empfohlen | Zufälliger String zum Signieren der Sessions (sonst vom Passwort abgeleitet) |
| `UPLOADS_DIR` | optional | Ablage für hochgeladene Bilder (Default: `<app>/data/uploads`) |
| `CMS_DATA_DIR` | optional | Nur Datei-Fallback ohne `DATABASE_URL` (Default: `<app>/data/cms`) |
| `GOOGLE_PLACES_API_KEY` | optional | API-Key für die Places API (New) – Live-Google-Rating in der Stimmen-Sektion |
| `GOOGLE_PLACE_ID` | optional | Place-ID des Google-Unternehmensprofils (Hauptprofil) |

Ohne die beiden `GOOGLE_*`-Variablen zeigen Stimmen-Sektion und
Kennzahlen-Band die im CMS gepflegten statischen Werte – mit ihnen wird
Rating + Anzahl 1× täglich live von Google geholt und die Stimmen-Sektion
verlinkt auf alle Rezensionen.
Der Abruf läuft server-seitig (kein Google-Request im Browser, DSGVO-sauber).

Place-IDs der Google-Unternehmensprofile (Stand Aug 2026):

| Standort | Profilname | Place-ID |
| --- | --- | --- |
| Berlin (Hauptprofil) | Kuhl & Engel - Jobcoaching | `ChIJmWIiZ1lPqEcRAf4ikA0WYFc` |
| Potsdam | Kuhl & Engel | `ChIJYTR8u1H1qEcRpkB1hbdO5EQ` |
| Augsburg | Kuhl & Engel | `ChIJZaLLx8q9nkcRMZfwXjtqobA` |

`getGoogleRating(placeId)` in `lib/googleRating.ts` akzeptiert optional eine
abweichende Place-ID – damit können Standortseiten später das Rating ihres
eigenen Profils zeigen. Wichtig: Google-Rezensionen dürfen laut
Google-Richtlinien nicht als `aggregateRating` ins Schema-Markup
(gilt als self-serving), nur sichtbar auf der Seite anzeigen.

### Deployment auf Coolify

1. **Postgres**: eigene Datenbank `kuhlengel` auf dem bestehenden Server
   anlegen, `DATABASE_URL` als Env-Variable setzen (Migration/Tabellen macht
   die App selbst beim ersten Zugriff).
2. **App**: normale Next.js-Anwendung (`next build` / `next start`).
3. **Volume**: persistentes Volume auf `/app/data` mounten, damit Bild-Uploads
   Redeploys überleben (`UPLOADS_DIR=/app/data/uploads`).
4. **Env**: `ADMIN_PASSWORD` (starkes Passwort für die Kundin) und
   `AUTH_SECRET` (z. B. `openssl rand -hex 32`) setzen.
5. Backups: Postgres-Backup in Coolify aktivieren; das Volume `/app/data`
   in die Backup-Strategie aufnehmen.

**Stand:** Startseite komplett über das CMS editierbar; die Bausteine
(Kontakt, Kennzahlen, Bereiche, Angebotskarten, Team, Kundenstimmen, FAQs,
Standorte) sind im Admin gepflegt, aber erst auf der Startseite angebunden –
Rollout auf die übrigen Seiten steht noch aus.
