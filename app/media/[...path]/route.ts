import { promises as fs } from "fs";
import path from "path";

/**
 * Liefert hochgeladene Bilder aus UPLOADS_DIR aus.
 * Der Ordner liegt außerhalb von public/, damit Uploads auch im
 * Container-Betrieb (Volume-Mount) zuverlässig funktionieren.
 */

const UPLOADS_DIR =
  process.env.UPLOADS_DIR || path.join(process.cwd(), "data", "uploads");

const MIME: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  avif: "image/avif",
};

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ path: string[] }> }
) {
  const { path: segments } = await ctx.params;
  if (!segments || segments.length !== 1) {
    return new Response("Not found", { status: 404 });
  }
  const name = segments[0];
  if (!/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(name) || name.includes("..")) {
    return new Response("Not found", { status: 404 });
  }
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  const type = MIME[ext];
  if (!type) return new Response("Not found", { status: 404 });

  try {
    const buf = await fs.readFile(path.join(UPLOADS_DIR, name));
    return new Response(new Uint8Array(buf), {
      headers: {
        "Content-Type": type,
        // Dateinamen sind einmalig (Zeitstempel) – aggressiv cachen ist sicher.
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
