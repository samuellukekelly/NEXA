import { GlassPanel } from "@/components/ui/card";

export function MetricCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail?: string;
}) {
  return (
    <GlassPanel className="p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-nexa-muted">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
      {detail ? <p className="mt-2 text-sm text-nexa-muted">{detail}</p> : null}
    </GlassPanel>
  );
}
