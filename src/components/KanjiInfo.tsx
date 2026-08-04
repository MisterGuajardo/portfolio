"use client";

import { useEffect, useState } from "react";

type KanjiInfoProps = {
  kanji: string;
  reading: string;
  meaning: string;
  description: string;
  relation: string;
  variant?: "floating" | "inline";
};

export function KanjiInfo({
  kanji,
  reading,
  meaning,
  description,
  relation,
  variant = "floating",
}: KanjiInfoProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Ver el significado del kanji ${kanji}`}
        title={`${kanji} — ${meaning}`}
        className={
          variant === "inline"
            ? "group inline-flex select-none flex-col items-center gap-2 rounded-2xl border border-ink-700 bg-ink-850 px-6 py-5 transition-colors hover:border-sakura-400/60 focus:outline-none focus-visible:border-sakura-400"
            : "group pointer-events-auto absolute right-2 top-0 hidden select-none font-serif text-[9rem] leading-none text-sakura-500/[0.08] transition-colors duration-300 hover:text-sakura-400/40 focus:outline-none focus-visible:text-sakura-400/60 xl:block"
        }
      >
        {variant === "inline" ? (
          <>
            <span className="font-serif text-6xl leading-none text-sakura-400 transition-transform duration-300 group-hover:scale-105">
              {kanji}
            </span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-seal-400/80 transition-colors group-hover:text-seal-400">
              significado
            </span>
          </>
        ) : (
          <>
            {kanji}
            <span className="pointer-events-none absolute bottom-1 left-0 right-0 text-center font-mono text-xs tracking-[0.3em] text-seal-400/0 transition-colors duration-300 group-hover:text-seal-400">
              significado
            </span>
          </>
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="kanji-meaning"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/80 p-6 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-ink-700 bg-ink-850 p-8 shadow-2xl shadow-ink-950/70"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-ink-700 text-paper-mute transition-colors hover:border-sakura-400 hover:text-sakura-400"
            >
              <span aria-hidden="true" className="text-lg leading-none">
                ×
              </span>
            </button>

            <div className="flex items-center gap-6">
              <span className="font-serif text-7xl leading-none text-sakura-400">
                {kanji}
              </span>
              <div>
                <p className="font-mono text-xs tracking-[0.3em] text-seal-400">
                  {reading}
                </p>
                <h3
                  id="kanji-meaning"
                  className="mt-2 font-serif text-2xl leading-snug text-paper"
                >
                  {meaning}
                </h3>
              </div>
            </div>

            <div className="mt-7 h-px w-full bg-gradient-to-r from-ink-600 via-ink-700/50 to-transparent" />

            <p className="mt-6 leading-relaxed text-paper-dim">{description}</p>

            <div className="mt-6 rounded-2xl border border-sakura-500/20 bg-sakura-500/[0.06] p-5">
              <p className="font-mono text-xs tracking-[0.3em] text-sakura-400">
                Y SU RELACIÓN CON ESTA SECCIÓN
              </p>
              <p className="mt-2 leading-relaxed text-paper">{relation}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
