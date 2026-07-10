import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-xs font-semibold uppercase tracking-[0.18em] text-nexa-cyan", className)}>{children}</p>
  );
}

export function Heading({
  children,
  className,
  as = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const Component = as;
  return (
    <Component className={cn("text-balance font-semibold leading-[1.05] tracking-normal text-white", className)}>
      {children}
    </Component>
  );
}
