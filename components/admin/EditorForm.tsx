"use client";

import { useEffect, useRef, useState } from "react";
import { saveSectionAction } from "@/app/admin/actions";
import type { Field } from "@/lib/cms/types";

/**
 * Schema-getriebener Editor: rendert die Feld-Definitionen einer Sektion
 * als Formular. Bearbeitet wird eine JSON-Kopie im State; nicht im Schema
 * aufgeführte Felder (z. B. interne slugs) bleiben unangetastet erhalten.
 */

type Path = (string | number)[];

function getAt(obj: unknown, path: Path): unknown {
  let cur: unknown = obj;
  for (const key of path) {
    if (cur == null) return undefined;
    cur = (cur as Record<string | number, unknown>)[key];
  }
  return cur;
}

function setAt(obj: unknown, path: Path, value: unknown): unknown {
  if (path.length === 0) return value;
  const [head, ...rest] = path;
  if (Array.isArray(obj)) {
    const copy = [...obj];
    copy[head as number] = setAt(copy[head as number], rest, value);
    return copy;
  }
  const record = (obj ?? {}) as Record<string | number, unknown>;
  return { ...record, [head]: setAt(record[head], rest, value) };
}

function emptyValue(field: Field): unknown {
  switch (field.type) {
    case "text":
    case "textarea":
    case "image":
      return "";
    case "stringList":
    case "objectList":
      return [];
    case "group":
      return Object.fromEntries(field.fields.map((f) => [f.key, emptyValue(f)]));
  }
}

const labelCls = "block text-[0.82rem] font-semibold text-ink/80";
const inputCls =
  "mt-1.5 w-full rounded-lg border border-ink/15 bg-cream px-3.5 py-2.5 text-[0.95rem] outline-none transition-colors focus:border-gold";
const helpCls = "mt-1 text-[0.78rem] leading-relaxed text-ink/45";
const miniBtn =
  "rounded-md border border-ink/15 px-2 py-1 text-[0.72rem] font-medium text-ink/60 transition-colors hover:border-gold hover:text-gold disabled:pointer-events-none disabled:opacity-30";

function ImageInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  async function upload(file: File) {
    setBusy(true);
    setError(null);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/admin/api/upload", { method: "POST", body: fd });
      const data = (await res.json()) as { path?: string; error?: string };
      if (!res.ok || !data.path) {
        throw new Error(data.error || "Upload fehlgeschlagen.");
      }
      onChange(data.path);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload fehlgeschlagen.");
    } finally {
      setBusy(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  return (
    <div className="mt-1.5 flex items-start gap-4">
      {value ? (
        // eslint-disable-next-line @next/next/no-img-element -- Admin-Vorschau, bewusst ohne Optimizer
        <img
          src={value}
          alt=""
          className="h-24 w-36 shrink-0 rounded-lg border border-ink/10 object-cover"
        />
      ) : (
        <div className="flex h-24 w-36 shrink-0 items-center justify-center rounded-lg border border-dashed border-ink/20 text-[0.75rem] text-ink/40">
          Kein Bild
        </div>
      )}
      <div className="min-w-0">
        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/avif"
          hidden
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) upload(f);
          }}
        />
        <button
          type="button"
          disabled={busy}
          onClick={() => fileRef.current?.click()}
          className="rounded-lg border border-ink/20 px-4 py-2 text-[0.85rem] font-semibold transition-colors hover:border-gold hover:text-gold disabled:opacity-50"
        >
          {busy ? "Wird hochgeladen…" : "Bild ersetzen…"}
        </button>
        {error && (
          <p className="mt-2 text-[0.8rem] font-medium text-clay-deep">{error}</p>
        )}
        <p className="mt-2 truncate text-[0.72rem] text-ink/40">{value}</p>
      </div>
    </div>
  );
}

export default function EditorForm({
  sectionKey,
  fields,
  initialValue,
}: {
  sectionKey: string;
  fields: Field[];
  initialValue: unknown;
}) {
  const [value, setValue] = useState<unknown>(initialValue);
  const [dirty, setDirty] = useState(false);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState<{
    kind: "ok" | "err";
    text: string;
  } | null>(null);

  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  const update = (path: Path, v: unknown) => {
    setValue((prev: unknown) => setAt(prev, path, v));
    setDirty(true);
    setMessage(null);
  };

  async function handleSave() {
    setPending(true);
    setMessage(null);
    try {
      const res = await saveSectionAction(sectionKey, value);
      if (res.ok) {
        setDirty(false);
        setMessage({
          kind: "ok",
          text: "Gespeichert – die Änderungen sind jetzt online.",
        });
      } else {
        setMessage({ kind: "err", text: res.error ?? "Speichern fehlgeschlagen." });
      }
    } catch {
      setMessage({ kind: "err", text: "Speichern fehlgeschlagen – bitte noch einmal versuchen." });
    } finally {
      setPending(false);
    }
  }

  function renderField(field: Field, path: Path): React.ReactNode {
    const fieldPath = [...path, field.key];

    switch (field.type) {
      case "text":
        return (
          <label className="block">
            <span className={labelCls}>{field.label}</span>
            <input
              type="text"
              className={inputCls}
              value={String(getAt(value, fieldPath) ?? "")}
              onChange={(e) => update(fieldPath, e.target.value)}
            />
            {field.help && <span className={helpCls}>{field.help}</span>}
          </label>
        );

      case "textarea":
        return (
          <label className="block">
            <span className={labelCls}>{field.label}</span>
            <textarea
              className={inputCls}
              rows={field.rows ?? 4}
              value={String(getAt(value, fieldPath) ?? "")}
              onChange={(e) => update(fieldPath, e.target.value)}
            />
            {field.help && <span className={helpCls}>{field.help}</span>}
          </label>
        );

      case "image":
        return (
          <div>
            <span className={labelCls}>{field.label}</span>
            <ImageInput
              value={String(getAt(value, fieldPath) ?? "")}
              onChange={(v) => update(fieldPath, v)}
            />
            {field.help && <p className={helpCls}>{field.help}</p>}
          </div>
        );

      case "stringList": {
        const items = (getAt(value, fieldPath) as string[] | undefined) ?? [];
        return (
          <div>
            <span className={labelCls}>{field.label}</span>
            {field.help && <p className={helpCls}>{field.help}</p>}
            <div className="mt-2 space-y-2">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input
                    type="text"
                    className={`${inputCls} !mt-0`}
                    value={item}
                    onChange={(e) => update([...fieldPath, i], e.target.value)}
                  />
                  <button
                    type="button"
                    className={miniBtn}
                    disabled={i === 0}
                    onClick={() => {
                      const next = [...items];
                      [next[i - 1], next[i]] = [next[i], next[i - 1]];
                      update(fieldPath, next);
                    }}
                    title="Nach oben"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    className={miniBtn}
                    disabled={i === items.length - 1}
                    onClick={() => {
                      const next = [...items];
                      [next[i], next[i + 1]] = [next[i + 1], next[i]];
                      update(fieldPath, next);
                    }}
                    title="Nach unten"
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    className={miniBtn}
                    onClick={() =>
                      update(
                        fieldPath,
                        items.filter((_, j) => j !== i)
                      )
                    }
                    title="Entfernen"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              className={`${miniBtn} mt-2`}
              onClick={() => update(fieldPath, [...items, ""])}
            >
              + {field.itemLabel ?? "Eintrag"} hinzufügen
            </button>
          </div>
        );
      }

      case "objectList": {
        const items =
          (getAt(value, fieldPath) as Record<string, unknown>[] | undefined) ??
          [];
        return (
          <div>
            <span className={labelCls}>{field.label}</span>
            {field.help && <p className={helpCls}>{field.help}</p>}
            <div className="mt-3 space-y-4">
              {items.map((item, i) => {
                const title =
                  (field.itemTitle &&
                    String(item?.[field.itemTitle] ?? "").trim()) ||
                  `Eintrag ${i + 1}`;
                return (
                  <div
                    key={i}
                    className="rounded-xl border border-ink/10 bg-cream/60 p-5"
                  >
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <p className="display text-lg">{title}</p>
                      {!field.fixed && (
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            className={miniBtn}
                            disabled={i === 0}
                            onClick={() => {
                              const next = [...items];
                              [next[i - 1], next[i]] = [next[i], next[i - 1]];
                              update(fieldPath, next);
                            }}
                            title="Nach oben"
                          >
                            ↑
                          </button>
                          <button
                            type="button"
                            className={miniBtn}
                            disabled={i === items.length - 1}
                            onClick={() => {
                              const next = [...items];
                              [next[i], next[i + 1]] = [next[i + 1], next[i]];
                              update(fieldPath, next);
                            }}
                            title="Nach unten"
                          >
                            ↓
                          </button>
                          <button
                            type="button"
                            className={miniBtn}
                            onClick={() => {
                              if (
                                window.confirm(
                                  `„${title}“ wirklich entfernen?`
                                )
                              ) {
                                update(
                                  fieldPath,
                                  items.filter((_, j) => j !== i)
                                );
                              }
                            }}
                            title="Entfernen"
                          >
                            ✕ Entfernen
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="space-y-4">
                      {field.fields.map((sub) => (
                        <div key={sub.key}>
                          {renderField(sub, [...fieldPath, i])}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            {!field.fixed && (
              <button
                type="button"
                className={`${miniBtn} mt-3`}
                onClick={() =>
                  update(fieldPath, [
                    ...items,
                    Object.fromEntries(
                      field.fields.map((f) => [f.key, emptyValue(f)])
                    ),
                  ])
                }
              >
                + Eintrag hinzufügen
              </button>
            )}
          </div>
        );
      }

      case "group":
        return (
          <section className="rounded-xl border border-ink/10 bg-paper p-6 md:p-7">
            <h2 className="display text-xl">{field.label}</h2>
            {field.help && <p className={helpCls}>{field.help}</p>}
            <div className="mt-5 space-y-5">
              {field.fields.map((sub) => (
                <div key={sub.key}>{renderField(sub, fieldPath)}</div>
              ))}
            </div>
          </section>
        );
    }
  }

  return (
    <div className="mt-8">
      <div className="space-y-6 pb-24">
        {fields.map((field) => (
          <div key={field.key}>{renderField(field, [])}</div>
        ))}
      </div>

      {/* Sticky Speicher-Leiste */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3.5">
          <p
            className={`text-[0.88rem] font-medium ${
              message?.kind === "err"
                ? "text-clay-deep"
                : message?.kind === "ok"
                  ? "text-ink/70"
                  : "text-ink/45"
            }`}
          >
            {message
              ? message.text
              : dirty
                ? "Ungespeicherte Änderungen"
                : "Keine Änderungen"}
          </p>
          <button
            type="button"
            onClick={handleSave}
            disabled={pending || !dirty}
            className="rounded-lg bg-ink px-7 py-2.5 font-semibold text-cream transition-colors hover:bg-ink-700 disabled:opacity-40"
          >
            {pending ? "Wird gespeichert…" : "Speichern"}
          </button>
        </div>
      </div>
    </div>
  );
}
