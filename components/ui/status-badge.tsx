import { cn } from "@/lib/utils";

const variants = {
  cyan: "border-nexa-cyan/35 bg-nexa-cyan/10 text-nexa-light-cyan",
  green: "border-emerald-400/35 bg-emerald-400/10 text-emerald-200",
  amber: "border-amber-400/35 bg-amber-400/10 text-amber-200",
  red: "border-red-400/35 bg-red-400/10 text-red-200",
  neutral: "border-white/15 bg-white/[0.055] text-nexa-silver",
};

export function StatusBadge({
  children,
  variant = "neutral",
}: {
  children: React.ReactNode;
  variant?: keyof typeof variants;
}) {
  return <span className={cn("inline-flex rounded-full border px-2.5 py-1 text-xs font-bold", variants[variant])}>{children}</span>;
}
