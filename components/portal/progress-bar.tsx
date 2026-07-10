import { formatPercent } from "@/lib/utils";

export function ProgressBar({ value }: { value: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs font-bold text-nexa-muted">
        <span>Progress</span>
        <span>{formatPercent(value)}</span>
      </div>
      <div className="h-2 rounded-full bg-white/10">
        <div className="h-2 rounded-full bg-nexa-cyan" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
      </div>
    </div>
  );
}
