import type { Metadata } from "next";
import Link from "next/link";
import { DemoEnvironmentBadge } from "@/components/portal/project-nav";
import { ProgressBar } from "@/components/portal/progress-bar";
import { ButtonLink } from "@/components/ui/button";
import { Card, GlassPanel } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { MetricCard } from "@/components/ui/metric-card";
import { Section } from "@/components/ui/section";
import { StatusBadge } from "@/components/ui/status-badge";
import { Eyebrow, Heading } from "@/components/ui/typography";
import { demoProjects } from "@/lib/demo-data/projects";

export const metadata: Metadata = {
  title: "Client Portal",
  description: "Demo NEXA client portal for project dashboards and digital engineering information.",
};

function statusVariant(status: string) {
  if (status === "On track") return "green";
  if (status === "Watch") return "amber";
  if (status === "Action required") return "red";
  return "neutral";
}

export default function PortalPage() {
  const project = demoProjects[0];

  return (
    <main className="pt-20">
      <Section className="py-14 lg:py-20">
        <Container>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <DemoEnvironmentBadge />
            <StatusBadge variant={statusVariant(project.status)}>{project.status}</StatusBadge>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <Eyebrow>Client Portal</Eyebrow>
              <Heading as="h1" className="mt-4 max-w-4xl text-5xl lg:text-7xl">
                Project intelligence, clearly presented.
              </Heading>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-nexa-silver">
                A demonstration portal showing how NEXA can make project status, risks, actions and engineering
                deliverables easier to review.
              </p>
            </div>
            <GlassPanel className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-nexa-cyan">Featured project</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{project.name}</h2>
              <p className="mt-3 text-sm leading-6 text-nexa-muted">{project.description}</p>
              <div className="mt-6">
                <ProgressBar value={project.progress} />
              </div>
              <ButtonLink href={`/portal/projects/${project.id}`} className="mt-6">
                Open Dashboard
              </ButtonLink>
            </GlassPanel>
          </div>
        </Container>
      </Section>

      <Section className="py-12">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {project.metrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-12">
        <Container>
          <Eyebrow>Demo workspace</Eyebrow>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Link href={`/portal/projects/${project.id}`}>
              <Card>
                <h2 className="text-xl font-semibold text-white">Project dashboard</h2>
                <p className="mt-3 text-sm leading-6 text-nexa-muted">Progress, risks, RFIs and decisions.</p>
              </Card>
            </Link>
            <Link href="/reports/demo-condition-survey">
              <Card>
                <h2 className="text-xl font-semibold text-white">Digital report</h2>
                <p className="mt-3 text-sm leading-6 text-nexa-muted">Structured condition survey findings.</p>
              </Card>
            </Link>
            <Link href="/tools">
              <Card>
                <h2 className="text-xl font-semibold text-white">Engineering tools</h2>
                <p className="mt-3 text-sm leading-6 text-nexa-muted">Browser-based calculators and checklists.</p>
              </Card>
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
