import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-xs font-black uppercase tracking-[0.24em] text-nexa-cyan", className)}>{children}</p>
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
    <Component className={cn("text-balance font-black leading-[0.98] tracking-[-0.04em] text-white", className)}>
      {children}
    </Component>
  );
}
