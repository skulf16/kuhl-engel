"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  SESSION_COOKIE,
  SESSION_MAX_AGE,
  checkPassword,
  createSessionToken,
  isAdmin,
} from "@/lib/admin/auth";
import { getSection } from "@/lib/cms/registry";
import { saveDocument } from "@/lib/cms/store";

export type LoginState = { error?: string };

export async function loginAction(
  _prev: LoginState | undefined,
  formData: FormData
): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");
  if (!checkPassword(password)) {
    // kleine Bremse gegen automatisiertes Durchprobieren
    await new Promise((r) => setTimeout(r, 500));
    return { error: "Das Passwort stimmt nicht." };
  }
  const token = createSessionToken();
  if (!token) {
    return { error: "Admin ist nicht konfiguriert (ADMIN_PASSWORD fehlt)." };
  }
  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  redirect("/admin");
}

export async function logoutAction(): Promise<void> {
  (await cookies()).delete(SESSION_COOKIE);
  redirect("/admin/login");
}

export type SaveResult = { ok: boolean; error?: string; savedAt?: string };

export async function saveSectionAction(
  key: string,
  value: unknown
): Promise<SaveResult> {
  if (!(await isAdmin())) {
    return { ok: false, error: "Nicht angemeldet – bitte neu einloggen." };
  }
  if (!getSection(key)) {
    return { ok: false, error: "Unbekannte Sektion." };
  }
  const json = JSON.stringify(value);
  if (!json || json === "null" || json.length > 1_000_000) {
    return { ok: false, error: "Ungültiger oder zu großer Inhalt." };
  }
  try {
    await saveDocument(key, JSON.parse(json));
    // Inhalte (auch Bausteine) können auf mehreren Seiten auftauchen –
    // bei ~12 Seiten ist ein kompletter Revalidate am einfachsten und billig.
    revalidatePath("/", "layout");
    return { ok: true, savedAt: new Date().toISOString() };
  } catch (err) {
    console.error("[cms] Speichern fehlgeschlagen:", err);
    return {
      ok: false,
      error: "Speichern fehlgeschlagen – bitte noch einmal versuchen.",
    };
  }
}
