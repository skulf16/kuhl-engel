"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Datenschutzfreundlicher YouTube-Player: zeigt zunächst nur ein lokal
 * gehostetes Vorschaubild – erst beim Klick wird das Video von
 * youtube-nocookie.com geladen.
 */
export default function YouTubeEmbed({
  videoId,
  title,
  thumbnail,
}: {
  videoId: string;
  title: string;
  thumbnail: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure>
      <div className="relative aspect-video overflow-hidden bg-ink">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full cursor-pointer"
            aria-label={`Video abspielen: ${title}`}
          >
            <Image
              src={thumbnail}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span
              aria-hidden
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-ink shadow-[0_16px_40px_-8px_rgba(14,29,43,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-bright"
            >
              <svg width="20" height="22" viewBox="0 0 20 22" fill="currentColor">
                <path d="M18.5 9.27a2 2 0 0 1 0 3.46L3.5 21.39A2 2 0 0 1 .5 19.66V2.34A2 2 0 0 1 3.5.61l15 8.66Z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 text-[0.92rem] font-medium leading-snug">{title}</figcaption>
    </figure>
  );
}
