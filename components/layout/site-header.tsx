"use client";

import Link from "next/link";
import { useState } from "react";
import { NexaLogo } from "@/components/brand/nexa-logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-xl dark:bg-nexa-deep/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-6 lg:px-8">
        <NexaLogo />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-nexa-silver transition hover:text-nexa-white">
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="min-h-10 px-3 py-2">
            Start
          </ButtonLink>
          <ThemeToggle />
        </nav>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/[0.055] lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-xl font-semibold text-white">{open ? "X" : "≡"}</span>
        </button>
      </div>
      <div
        className={cn(
          "border-t border-white/10 bg-nexa-deep px-5 py-5 lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="grid gap-2" aria-label="Mobile navigation">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-3 text-lg font-semibold text-white transition hover:bg-white/[0.06]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" onClick={() => setOpen(false)} className="mt-2">
            Start
          </ButtonLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
