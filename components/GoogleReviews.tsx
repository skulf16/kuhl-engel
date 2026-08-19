"use client";

import { useRef } from "react";
import type { GoogleRating } from "@/lib/googleRating";

/**
 * Google-Rezensionen als Karussell im Stil der gängigen Bewertungs-Widgets,
 * aber im eigenen Design-System und ohne Fremd-Script: links die Zusammenfassung
 * (Gesamtrating, Anzahl, Bewertung-schreiben-Link), rechts die Karten.
 * Avatare sind Initialen-Kreise – so lädt der Browser der Besucher:innen
 * nichts von Google-Servern (DSGVO).
 */

function Stars({ value, small = false }: { value: number; small?: boolean }) {
  return (
    <span
      aria-label={`${value} von 5 Sternen`}
      className={small ? "text-[0.95rem] tracking-[0.15em]" : "text-xl tracking-[0.2em]"}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} aria-hidden className={i <= Math.round(value) ? "text-gold-bright" : "text-ink/15"}>
          ★
        </span>
      ))}
    </span>
  );
}

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-label="Google" role="img">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

export default function GoogleReviews({ rating }: { rating: GoogleRating }) {
  const track = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) =>
    track.current?.scrollBy({ left: dir * 380, behavior: "smooth" });

  return (
    <div className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-14">
      {/* Zusammenfassung */}
      <div className="flex flex-col items-start justify-center">
        <p className="display text-6xl text-ink">{rating.ratingFormatted}</p>
        <div className="mt-2">
          <Stars value={rating.rating} />
        </div>
        <a
          href={rating.reviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-gold mt-2 text-[0.9rem] font-medium text-ink/55"
        >
          {rating.count} Google-Bewertungen <span aria-hidden>→</span>
        </a>
        <a
          href={rating.writeReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-[0.88rem] font-semibold text-ink transition-colors hover:border-gold hover:text-gold"
        >
          Eine Bewertung schreiben
        </a>
        <p className="mt-6 flex items-center gap-2 text-[0.78rem] font-medium text-ink/45">
          <GoogleLogo className="h-4 w-4" /> Bewertungen von Google
        </p>
      </div>

      {/* Karten */}
      <div className="relative min-w-0">
        <div
          ref={track}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {rating.reviews.map((review) => (
            <figure
              key={review.author + review.relativeTime}
              className="flex w-[85vw] max-w-[22rem] shrink-0 snap-start flex-col rounded-xl border border-ink/10 bg-paper p-8 md:w-[22rem]"
            >
              <figcaption className="flex items-center gap-4">
                <span
                  aria-hidden
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-[0.85rem] font-semibold text-cream"
                >
                  {initials(review.author)}
                </span>
                <span className="min-w-0 grow">
                  <span className="block truncate text-[0.95rem] font-semibold">{review.author}</span>
                  <span className="block text-[0.8rem] text-ink/50">{review.relativeTime}</span>
                </span>
                <GoogleLogo className="h-5 w-5 shrink-0" />
              </figcaption>
              <div className="mt-4">
                <Stars value={review.rating} small />
              </div>
              <blockquote className="mt-3 line-clamp-6 grow text-[0.95rem] leading-relaxed text-ink/80">
                {review.text}
              </blockquote>
              <a
                href={rating.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-gold mt-4 text-[0.85rem] font-semibold text-gold"
              >
                Auf Google weiterlesen <span aria-hidden>→</span>
              </a>
            </figure>
          ))}
        </div>

        {/* Pfeile (Desktop – mobil wird gewischt) */}
        <div className="mt-6 hidden justify-end gap-3 md:flex">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Vorherige Rezensionen"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold hover:text-gold"
          >
            <span aria-hidden>←</span>
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Weitere Rezensionen"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold hover:text-gold"
          >
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
