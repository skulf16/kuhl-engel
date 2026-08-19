import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin/auth";

/**
 * Bild-Upload für das Admin. Bilder werden (wenn sharp verfügbar ist)
 * auf max. 2400px Breite verkleinert und unter UPLOADS_DIR gespeichert –
 * ausgeliefert werden sie über /media/[name].
 */

const UPLOADS_DIR =
  process.env.UPLOADS_DIR || path.join(process.cwd(), "data", "uploads");

const ALLOWED: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/avif": "avif",
};

const MAX_UPLOAD_BYTES = 25 * 1024 * 1024;

export async function POST(req: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Nicht angemeldet." }, { status: 401 });
  }

  const form = await req.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Keine Datei erhalten." }, { status: 400 });
  }
  const ext = ALLOWED[file.type];
  if (!ext) {
    return NextResponse.json(
      { error: "Nur JPG, PNG, WebP oder AVIF sind erlaubt." },
      { status: 415 }
    );
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    return NextResponse.json(
      { error: "Die Datei ist größer als 25 MB." },
      { status: 413 }
    );
  }

  let buffer: Buffer = Buffer.from(await file.arrayBuffer());
  try {
    const sharp = (await import("sharp")).default;
    let img = sharp(buffer)
      .rotate()
      .resize({ width: 2400, withoutEnlargement: true });
    if (ext === "jpg") img = img.jpeg({ quality: 82, mozjpeg: true });
    else if (ext === "png") img = img.png();
    else if (ext === "webp") img = img.webp({ quality: 82 });
    else img = img.avif({ quality: 60 });
    buffer = await img.toBuffer();
  } catch (err) {
    console.warn("[cms] sharp nicht verfügbar – Original wird gespeichert.", err);
  }

  const base =
    file.name
      .replace(/\.[^.]+$/, "")
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "bild";
  const name = `${base}-${Date.now().toString(36)}.${ext}`;

  await fs.mkdir(UPLOADS_DIR, { recursive: true });
  await fs.writeFile(path.join(UPLOADS_DIR, name), buffer);

  return NextResponse.json({ path: `/media/${name}` });
}
