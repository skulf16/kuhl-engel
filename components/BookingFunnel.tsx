"use client";

import { useState } from "react";
import {
  CONTACT,
  FUNNEL_GUTSCHEIN,
  FUNNEL_ORTE,
  FUNNEL_THEMEN,
  FUNNEL_ZEIT,
} from "@/lib/data";

type Answers = {
  gutschein: string;
  thema: string;
  ort: string;
  name: string;
  phone: string;
  email: string;
  zeit: string;
};

const TOTAL_STEPS = 4;

const inputStyles =
  "w-full border border-ink/15 bg-paper px-4 py-3.5 text-[0.95rem] outline-none transition-colors placeholder:text-ink/35 focus:border-gold";

export default function BookingFunnel() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [answers, setAnswers] = useState<Answers>({
    gutschein: "",
    thema: "",
    ort: "",
    name: "",
    phone: "",
    email: "",
    zeit: "",
  });

  const set = (patch: Partial<Answers>) => setAnswers((a) => ({ ...a, ...patch }));

  // Direkt bei Auswahl in Schritt weiterspringen (weniger Reibung)
  const pick = (patch: Partial<Answers>) => {
    set(patch);
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  };

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const g = FUNNEL_GUTSCHEIN.find((o) => o.value === answers.gutschein)?.label;
    const t = FUNNEL_THEMEN.find((o) => o.value === answers.thema)?.label;
    const o = FUNNEL_ORTE.find((x) => x.value === answers.ort)?.label;
    const body = [
      "Anfrage über den AVGS-Buchungsfunnel:",
      "",
      `AVGS-Gutschein: ${g ?? "-"}`,
      `Thema: ${t ?? "-"}`,
      `Wunsch-Ort/Format: ${o ?? "-"}`,
      `Erreichbarkeit: ${answers.zeit || "keine Angabe"}`,
      "",
      `Name: ${answers.name}`,
      `Telefon: ${answers.phone}`,
      `E-Mail: ${answers.email}`,
    ].join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      "AVGS-Coaching – Buchungsanfrage",
    )}&body=${encodeURIComponent(body)}`;
    setDone(true);
  }

  if (done) {
    return (
      <div className="border border-gold/40 bg-gold/8 p-8 md:p-10">
        <p className="display text-3xl">Geschafft – wir melden uns!</p>
        <p className="mt-4 max-w-xl leading-relaxed text-ink/70">
          Ihr E-Mail-Programm hat sich mit Ihrer Anfrage geöffnet – einmal
          absenden, und wir rufen Sie zu Ihrer Wunschzeit zurück. Falls sich
          nichts geöffnet hat, erreichen Sie uns direkt unter{" "}
          <a href={CONTACT.phoneHref} className="font-semibold text-gold">
            {CONTACT.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  return (
    <div className="border border-ink/10 bg-paper p-7 md:p-10">
      {/* Fortschritt */}
      <div className="flex items-center justify-between">
        <p className="eyebrow text-gold">
          Schritt {step + 1} / {TOTAL_STEPS}
        </p>
        {step > 0 && (
          <button
            onClick={() => setStep((s) => Math.max(s - 1, 0))}
            className="text-[0.82rem] font-medium text-ink/50 transition-colors hover:text-ink"
          >
            ← zurück
          </button>
        )}
      </div>
      <div className="mt-3 h-1 w-full bg-ink/10">
        <div
          className="h-1 bg-gold transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Schritt 1: Gutschein */}
      {step === 0 && (
        <div className="mt-8">
          <h3 className="display text-2xl md:text-3xl">
            Haben Sie schon einen <em>AVGS-Gutschein?</em>
          </h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/60">
            Damit ist Ihr Coaching zu 100 % kostenfrei. Auch ohne Gutschein sind
            Sie richtig – wir helfen Ihnen dabei.
          </p>
          <div className="mt-6 grid gap-3">
            {FUNNEL_GUTSCHEIN.map((o) => (
              <button
                key={o.value}
                onClick={() => pick({ gutschein: o.value })}
                className="group flex items-center justify-between gap-4 border border-ink/15 bg-cream px-5 py-4 text-left transition-all duration-300 hover:border-gold hover:bg-gold/8"
              >
                <span>
                  <span className="block font-semibold">{o.label}</span>
                  <span className="mt-0.5 block text-[0.85rem] text-ink/55">{o.hint}</span>
                </span>
                <span aria-hidden className="text-gold opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">→</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Schritt 2: Thema */}
      {step === 1 && (
        <div className="mt-8">
          <h3 className="display text-2xl md:text-3xl">
            Worum geht es Ihnen <em>gerade?</em>
          </h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/60">
            Damit finden wir die Coachin oder den Coach, die:der am besten zu
            Ihnen passt.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {FUNNEL_THEMEN.map((o) => (
              <button
                key={o.value}
                onClick={() => pick({ thema: o.value })}
                className="group flex items-center justify-between gap-3 border border-ink/15 bg-cream px-5 py-4 text-left text-[0.95rem] font-medium transition-all duration-300 hover:border-gold hover:bg-gold/8"
              >
                {o.label}
                <span aria-hidden className="text-gold opacity-0 transition-all duration-300 group-hover:opacity-100">→</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Schritt 3: Ort */}
      {step === 2 && (
        <div className="mt-8">
          <h3 className="display text-2xl md:text-3xl">
            Wo möchten Sie <em>gecoacht werden?</em>
          </h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/60">
            Vor Ort, online oder hybrid – Sie entscheiden.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {FUNNEL_ORTE.map((o) => (
              <button
                key={o.value}
                onClick={() => pick({ ort: o.value })}
                className="group flex items-center justify-between gap-3 border border-ink/15 bg-cream px-5 py-4 text-left transition-all duration-300 hover:border-gold hover:bg-gold/8"
              >
                <span>
                  <span className="block font-semibold">{o.label}</span>
                  <span className="mt-0.5 block text-[0.85rem] text-ink/55">{o.hint}</span>
                </span>
                <span aria-hidden className="text-gold opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">→</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Schritt 4: Kontaktdaten */}
      {step === 3 && (
        <form onSubmit={submit} className="mt-8 grid gap-5">
          <div>
            <h3 className="display text-2xl md:text-3xl">
              Fast geschafft – <em>wohin dürfen wir zurückrufen?</em>
            </h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/60">
              Unverbindlich und kostenlos. Wir melden uns zu Ihrer Wunschzeit.
            </p>
          </div>
          <label className="grid gap-2">
            <span className="text-sm font-semibold">Ihr Name *</span>
            <input name="name" required autoComplete="name" className={inputStyles} placeholder="Vor- und Nachname" value={answers.name} onChange={(e) => set({ name: e.target.value })} />
          </label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-semibold">Telefon *</span>
              <input name="phone" type="tel" required autoComplete="tel" className={inputStyles} placeholder="030 …" value={answers.phone} onChange={(e) => set({ phone: e.target.value })} />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold">E-Mail</span>
              <input name="email" type="email" autoComplete="email" className={inputStyles} placeholder="name@beispiel.de" value={answers.email} onChange={(e) => set({ email: e.target.value })} />
            </label>
          </div>
          <label className="grid gap-2">
            <span className="text-sm font-semibold">Wann erreichen wir Sie am besten?</span>
            <select className={inputStyles} value={answers.zeit} onChange={(e) => set({ zeit: e.target.value })}>
              <option value="">Bitte wählen</option>
              {FUNNEL_ZEIT.map((z) => (
                <option key={z} value={z}>{z}</option>
              ))}
            </select>
          </label>
          <p className="text-[0.82rem] leading-relaxed text-ink/50">
            Mit dem Absenden erkennen Sie unsere{" "}
            <a href="/datenschutz" className="underline decoration-gold underline-offset-2 hover:text-ink">Datenschutzerklärung</a> an.
          </p>
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-3 bg-ink px-8 py-4 font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-700 sm:justify-self-start"
          >
            Kostenloses Erstgespräch anfragen
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </form>
      )}
    </div>
  );
}
