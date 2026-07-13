"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("nexa-theme");
    const shouldUseDark = stored === "dark";
    document.documentElement.classList.toggle("dark", shouldUseDark);
    setDark(shouldUseDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("nexa-theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      className="inline-flex h-10 items-center gap-2 rounded-full border border-nexa-cyan/25 bg-white/75 px-3 text-xs font-semibold uppercase tracking-[0.12em] text-nexa-muted shadow-sm transition hover:-translate-y-0.5 hover:border-nexa-cyan/60 dark:bg-white/[0.055]"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      onClick={toggleTheme}
    >
      <span className="relative h-4 w-8 rounded-full bg-nexa-cyan/20">
        <span
          className={`absolute top-0.5 h-3 w-3 rounded-full bg-nexa-cyan transition ${dark ? "left-4" : "left-1"}`}
        />
      </span>
      <span>{dark ? "Dark" : "Light"}</span>
    </button>
  );
}
