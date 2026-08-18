import { promises as fs } from "fs";
import path from "path";

/**
 * Storage-Schicht für CMS-Dokumente.
 * - Mit DATABASE_URL (Produktion/Coolify): Postgres, Tabelle cms_documents.
 * - Ohne DATABASE_URL (lokale Entwicklung): JSON-Dateien unter data/cms/.
 * Ein Dokument = der komplette Inhalt einer Admin-Sektion als JSON.
 */

const TABLE_SQL = `CREATE TABLE IF NOT EXISTS cms_documents (
  key text PRIMARY KEY,
  data jsonb NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now()
)`;

let poolPromise: Promise<import("pg").Pool> | null = null;

async function getPool(): Promise<import("pg").Pool> {
  if (!poolPromise) {
    poolPromise = (async () => {
      const { Pool } = await import("pg");
      const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        max: 5,
      });
      await pool.query(TABLE_SQL);
      return pool;
    })();
  }
  return poolPromise;
}

const usePg = () => Boolean(process.env.DATABASE_URL);

const fileDir = () =>
  process.env.CMS_DATA_DIR || path.join(process.cwd(), "data", "cms");

/** Nur [a-z0-9-]-Keys zulassen – schützt den Datei-Treiber vor Pfad-Tricks. */
const validKey = (key: string) => /^[a-z0-9-]{1,64}$/.test(key);

export async function getDocument(key: string): Promise<unknown | null> {
  if (!validKey(key)) return null;
  try {
    if (usePg()) {
      const pool = await getPool();
      const res = await pool.query(
        "SELECT data FROM cms_documents WHERE key = $1",
        [key]
      );
      return res.rows[0]?.data ?? null;
    }
    const raw = await fs.readFile(path.join(fileDir(), `${key}.json`), "utf8");
    return JSON.parse(raw);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code !== "ENOENT") {
      console.warn(`[cms] Dokument "${key}" konnte nicht geladen werden:`, err);
    }
    return null;
  }
}

export async function saveDocument(key: string, data: unknown): Promise<void> {
  if (!validKey(key)) throw new Error(`Ungültiger Dokument-Key: ${key}`);
  if (usePg()) {
    const pool = await getPool();
    await pool.query(
      `INSERT INTO cms_documents (key, data, updated_at)
       VALUES ($1, $2::jsonb, now())
       ON CONFLICT (key) DO UPDATE SET data = EXCLUDED.data, updated_at = now()`,
      [key, JSON.stringify(data)]
    );
    return;
  }
  const dir = fileDir();
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(
    path.join(dir, `${key}.json`),
    JSON.stringify(data, null, 2),
    "utf8"
  );
}

/** Für das Dashboard: wann wurde welche Sektion zuletzt gespeichert? */
export async function getDocumentDates(): Promise<Record<string, string>> {
  try {
    if (usePg()) {
      const pool = await getPool();
      const res = await pool.query("SELECT key, updated_at FROM cms_documents");
      return Object.fromEntries(
        res.rows.map((r: { key: string; updated_at: Date }) => [
          r.key,
          new Date(r.updated_at).toISOString(),
        ])
      );
    }
    const dir = fileDir();
    const files = await fs.readdir(dir);
    const out: Record<string, string> = {};
    for (const f of files) {
      if (!f.endsWith(".json")) continue;
      const stat = await fs.stat(path.join(dir, f));
      out[f.replace(/\.json$/, "")] = stat.mtime.toISOString();
    }
    return out;
  } catch {
    return {};
  }
}
