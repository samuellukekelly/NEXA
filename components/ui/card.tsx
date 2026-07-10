import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-nexa-cyan/35 hover:bg-white/[0.055]", className)}>
      {children}
    </div>
  );
}

export function GlassPanel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-lg border border-nexa-light-cyan/20 bg-white/[0.055] shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300", className)}>
      {children}
    </div>
  );
}
