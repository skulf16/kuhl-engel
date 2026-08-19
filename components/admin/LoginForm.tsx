"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "@/app/admin/actions";

export default function LoginForm() {
  const [state, action, pending] = useActionState<LoginState, FormData>(
    loginAction,
    {}
  );
  return (
    <form
      action={action}
      className="mt-8 space-y-5 rounded-xl border border-ink/10 bg-paper p-7"
    >
      <label className="block">
        <span className="text-[0.85rem] font-semibold">Passwort</span>
        <input
          type="password"
          name="password"
          required
          autoFocus
          autoComplete="current-password"
          className="mt-2 w-full rounded-lg border border-ink/15 bg-cream px-3.5 py-2.5 outline-none transition-colors focus:border-gold"
        />
      </label>
      {state?.error && (
        <p className="text-[0.9rem] font-medium text-clay-deep">{state.error}</p>
      )}
      <button
        disabled={pending}
        className="w-full rounded-lg bg-ink px-6 py-3 font-semibold text-cream transition-colors hover:bg-ink-700 disabled:opacity-60"
      >
        {pending ? "Wird geprüft…" : "Anmelden"}
      </button>
    </form>
  );
}
