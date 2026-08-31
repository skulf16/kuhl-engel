import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Nimmt Anfragen aus ContactForm und BookingFunnel entgegen und verschickt
 * sie per SMTP ans Büro-Postfach. Die Antwort-Adresse des Besuchers wird
 * als Reply-To gesetzt, damit im Postfach direkt geantwortet werden kann.
 *
 * Konfiguration über Env-Variablen (in Coolify hinterlegen):
 *   SMTP_HOST, SMTP_PORT (Standard 587), SMTP_USER, SMTP_PASS
 *   MAIL_FROM  – Absenderadresse (Standard: SMTP_USER)
 *   CONTACT_TO – Empfänger im Büro (alias MAIL_TO; Standard: MAIL_FROM)
 *
 * Ohne SMTP_HOST (lokale Entwicklung) wird die Mail nur ins Log geschrieben.
 */

const MAX_LEN = 5000;

type Payload = {
  subject?: string;
  text?: string;
  name?: string;
  email?: string;
  website?: string; // Honeypot – Menschen lassen das Feld leer
};

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Honeypot: still verwerfen, dem Bot aber Erfolg melden
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const subject = (body.subject || "").trim().slice(0, 200);
  const text = (body.text || "").trim().slice(0, MAX_LEN);
  const name = (body.name || "").trim().slice(0, 200);
  const email = (body.email || "").trim().slice(0, 320);

  if (!subject || !text) {
    return NextResponse.json({ error: "Unvollständige Anfrage." }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Ungültige E-Mail-Adresse." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const from = process.env.MAIL_FROM || process.env.SMTP_USER || "";
  const to = process.env.CONTACT_TO || process.env.MAIL_TO || from;

  const mail = {
    from: name ? { name: `${name} über die Website`, address: from } : from,
    to,
    subject,
    text,
    // Antworten gehen direkt an die Person, die angefragt hat
    ...(email ? { replyTo: name ? { name, address: email } : email } : {}),
  };

  if (!host) {
    console.log("[kontakt] SMTP nicht konfiguriert – Mail nur geloggt:", mail);
    return NextResponse.json({ ok: true });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: process.env.SMTP_USER
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
    });
    await transporter.sendMail(mail);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[kontakt] Mail-Versand fehlgeschlagen:", err);
    return NextResponse.json(
      { error: "Die Nachricht konnte nicht gesendet werden." },
      { status: 502 },
    );
  }
}
