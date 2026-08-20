"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/data";

const inputStyles =
  "w-full border border-ink/15 bg-paper px-4 py-3.5 text-[0.95rem] outline-none transition-colors placeholder:text-ink/35 focus:border-gold";

/**
 * variant "default": Rückruf-Formular mit AVGS-Frage (Jobcoaching).
 * variant "schulen": Anfrage zur Berufsorientierung – ohne AVGS-Frage,
 * stattdessen Themen-Auswahl für Schulen, Lehrkräfte und Eltern.
 */
export default function ContactForm({
  variant = "default",
  kontakt = CONTACT,
}: {
  variant?: "default" | "schulen";
  /** Kontaktdaten aus dem CMS – Fallback sind die Defaults aus lib/data. */
  kontakt?: typeof CONTACT;
}) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Name: ${data.get("name")}`,
      `E-Mail: ${data.get("email")}`,
      `Telefon: ${data.get("phone")}`,
      `Erreichbarkeit: ${data.get("zeit") || "keine Angabe"}`,
      variant === "schulen"
        ? `Anliegen: ${data.get("anliegen")}`
        : `AVGS-Gutschein: ${data.get("avgs")}`,
      ...(variant === "schulen" && data.get("schule")
        ? [`Schule/Einrichtung: ${data.get("schule")}`]
        : []),
      "",
      `${data.get("nachricht") || ""}`,
    ];
    const subject =
      variant === "schulen"
        ? "Anfrage Berufsorientierung über die Website"
        : "Rückruf-Bitte über die Website";
    const mailto = `mailto:${kontakt.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-gold/40 bg-gold/8 p-8">
        <p className="display text-2xl">Fast geschafft!</p>
        <p className="mt-3 leading-relaxed text-ink/70">
          Dein E-Mail-Programm hat sich mit der vorbereiteten Nachricht geöffnet –
          einfach absenden, wir melden uns schnellstmöglich bei Dir. Falls sich kein
          Fenster geöffnet hat, erreichst Du uns direkt unter{" "}
          <a href={`mailto:${kontakt.email}`} className="font-semibold text-gold">
            {kontakt.email}
          </a>{" "}
          oder telefonisch unter{" "}
          <a href={kontakt.phoneHref} className="font-semibold text-gold">
            {kontakt.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold">Dein Name *</span>
          <input name="name" required autoComplete="name" className={inputStyles} placeholder="Vor- und Nachname" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-semibold">Deine E-Mail-Adresse *</span>
          <input name="email" type="email" required autoComplete="email" className={inputStyles} placeholder="name@beispiel.de" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold">Telefonnummer für den Rückruf *</span>
          <input name="phone" type="tel" required autoComplete="tel" className={inputStyles} placeholder="030 …" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-semibold">Erreichbarkeit (optional)</span>
          <select name="zeit" className={inputStyles} defaultValue="">
            <option value="">Bitte wählen</option>
            <option value="9:00-12:00 Uhr">9:00 – 12:00 Uhr</option>
            <option value="12:00-18:00 Uhr">12:00 – 18:00 Uhr</option>
            <option value="nach 18:00 Uhr">nach 18:00 Uhr</option>
          </select>
        </label>
      </div>
      {variant === "schulen" ? (
        <>
          <fieldset className="grid gap-2">
            <legend className="mb-2 text-sm font-semibold">Worum geht es?</legend>
            <div className="flex flex-wrap gap-3">
              {[
                "Projekt für Schulklassen",
                "Einzelcoaching für Schüler:innen",
                "Material & Sonstiges",
              ].map((option) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-2.5 border border-ink/15 bg-paper px-4 py-2.5 text-sm transition-colors has-checked:border-gold has-checked:bg-gold/10"
                >
                  <input
                    type="radio"
                    name="anliegen"
                    value={option}
                    defaultChecked={option === "Projekt für Schulklassen"}
                    className="accent-[#b9862c]"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="grid gap-2">
            <span className="text-sm font-semibold">Schule / Einrichtung (optional)</span>
            <input name="schule" className={inputStyles} placeholder="Name und Ort der Schule" />
          </label>
        </>
      ) : (
        <fieldset className="grid gap-2">
          <legend className="mb-2 text-sm font-semibold">Hast Du schon einen AVGS-Gutschein?</legend>
          <div className="flex flex-wrap gap-3">
            {["ja", "nein", "ich zahle selbst"].map((option) => (
              <label
                key={option}
                className="flex cursor-pointer items-center gap-2.5 border border-ink/15 bg-paper px-4 py-2.5 text-sm transition-colors has-checked:border-gold has-checked:bg-gold/10"
              >
                <input
                  type="radio"
                  name="avgs"
                  value={option}
                  defaultChecked={option === "nein"}
                  className="accent-[#b9862c]"
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>
      )}
      <label className="grid gap-2">
        <span className="text-sm font-semibold">Deine Nachricht (optional)</span>
        <textarea name="nachricht" rows={4} className={inputStyles} placeholder="Worum geht es Dir? Ein Satz genügt." />
      </label>
      <p className="text-[0.82rem] leading-relaxed text-ink/50">
        Mit dem Absenden erkennst Du unsere{" "}
        <a href="/datenschutz" className="underline decoration-gold underline-offset-2 hover:text-ink">
          Datenschutzerklärung
        </a>{" "}
        an.
      </p>
      <button
        type="submit"
        className="group mt-1 inline-flex items-center justify-center gap-3 bg-ink px-8 py-4 font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-700 sm:justify-self-start"
      >
        Rückruf anfordern
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>
    </form>
  );
}
