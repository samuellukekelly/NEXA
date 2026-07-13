import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary: "border-nexa-cyan bg-nexa-cyan text-[#04101D] hover:bg-nexa-light-cyan",
  secondary: "border-white/15 bg-white/[0.055] text-white hover:border-nexa-cyan/60 hover:bg-white/[0.09]",
  ghost: "border-transparent bg-transparent text-nexa-silver hover:bg-white/[0.06]",
};

const base =
  "inline-flex min-h-11 items-center justify-center rounded-md border px-4 py-2 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 focus-visible:outline-nexa-light-cyan";

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; variant?: ButtonVariant; children: ReactNode }) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}
