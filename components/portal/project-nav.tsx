import Link from "next/link";
import { StatusBadge } from "@/components/ui/status-badge";

export function DemoEnvironmentBadge() {
  return <StatusBadge variant="cyan">Demo Environment</StatusBadge>;
}

export function ProjectNavigation({ projectId }: { projectId: string }) {
  return (
    <nav className="flex flex-wrap gap-3 text-sm font-bold text-nexa-silver" aria-label="Project navigation">
      <Link href="/portal">Portal home</Link>
      <Link href={`/portal/projects/${projectId}`}>Project dashboard</Link>
      <Link href="/reports/demo-condition-survey">Digital report</Link>
      <Link href="/tools">Engineering tools</Link>
    </nav>
  );
}
