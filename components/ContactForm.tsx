"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/data";

const inputStyles =
  "w-full border border-ink/15 bg-paper px-4 py-3.5 text-[0.95rem] outline-none transition-colors placeholder:text-ink/35 focus:border-gold";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Name: ${data.get("name")}`,
      `E-Mail: ${data.get("email")}`,
      `Telefon: ${data.get("phone")}`,
      `Erreichbarkeit: ${data.get("zeit") || "keine Angabe"}`,
      `AVGS-Gutschein: ${data.get("avgs")}`,
      "",
      `${data.get("nachricht") || ""}`,
    ];
    const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      "Rückruf-Bitte über die Website",
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
          <a href={`mailto:${CONTACT.email}`} className="font-semibold text-gold">
            {CONTACT.email}
          </a>{" "}
          oder telefonisch unter{" "}
          <a href={CONTACT.phoneHref} className="font-semibold text-gold">
            {CONTACT.phone}
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
      <fieldset className="grid gap-2">
        <legend className="mb-2 text-sm font-semibold">Hast Du schon einen AVGS-Gutschein?</legend>
        <div className="flex flex-wrap gap-3">
          {["ja", "nein", "ist in Beantragung"].map((option) => (
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
