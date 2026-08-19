import { createHash, createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

/**
 * Minimale, abhängigkeitsfreie Session-Verwaltung für das Admin.
 * Ein Passwort (ADMIN_PASSWORD, per Env gesetzt), eine HMAC-signierte
 * Session-Cookie mit Ablaufdatum. AUTH_SECRET ist optional – ohne es
 * wird der Signatur-Schlüssel aus dem Passwort abgeleitet.
 */

export const SESSION_COOKIE = "ke_admin";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 30; // 30 Tage

function secret(): string | null {
  const base = process.env.AUTH_SECRET || process.env.ADMIN_PASSWORD;
  if (!base) return null;
  return createHash("sha256").update(`ke-cms-v1:${base}`).digest("hex");
}

const sign = (payload: string, s: string) =>
  createHmac("sha256", s).update(payload).digest("hex");

export const isAuthConfigured = () => Boolean(process.env.ADMIN_PASSWORD);

export function createSessionToken(): string | null {
  const s = secret();
  if (!s) return null;
  const exp = String(Date.now() + SESSION_MAX_AGE * 1000);
  return `${exp}.${sign(exp, s)}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const s = secret();
  if (!s) return false;
  const [exp, sig] = token.split(".");
  if (!exp || !sig) return false;
  const expected = Buffer.from(sign(exp, s));
  const actual = Buffer.from(sig);
  if (actual.length !== expected.length) return false;
  if (!timingSafeEqual(actual, expected)) return false;
  return Number(exp) > Date.now();
}

export async function isAdmin(): Promise<boolean> {
  const store = await cookies();
  return verifySessionToken(store.get(SESSION_COOKIE)?.value);
}

export function checkPassword(input: string): boolean {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw || !input) return false;
  // Über Hashes vergleichen, damit timingSafeEqual gleiche Längen bekommt.
  const a = createHash("sha256").update(input).digest();
  const b = createHash("sha256").update(pw).digest();
  return timingSafeEqual(a, b);
}
