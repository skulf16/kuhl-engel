"use client";

import { useState } from "react";
import type { Faq } from "@/lib/data";

export default function Accordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="group flex w-full items-baseline justify-between gap-6 py-6 text-left"
            >
              <span className="flex items-baseline gap-5">
                <span className="display text-sm italic text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="display text-xl transition-colors group-hover:text-gold md:text-2xl">
                  {item.q}
                </span>
              </span>
              <span
                aria-hidden
                className={`display shrink-0 text-2xl leading-none text-gold transition-transform duration-300 ${open ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-7 pl-12 pr-4 leading-relaxed text-ink/70">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
