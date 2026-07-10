import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-lg border border-white/10 bg-white/[0.035] p-6", className)}>{children}</div>;
}

export function GlassPanel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-lg border border-nexa-light-cyan/20 bg-white/[0.055] shadow-2xl shadow-black/20 backdrop-blur-xl", className)}>
      {children}
    </div>
  );
}
