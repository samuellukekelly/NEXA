import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ActivityTimeline } from "@/components/portal/activity-timeline";
import { DemoEnvironmentBadge, ProjectNavigation } from "@/components/portal/project-nav";
import { ProgressBar } from "@/components/portal/progress-bar";
import { Card, GlassPanel } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { DataTable } from "@/components/ui/data-table";
import { MetricCard } from "@/components/ui/metric-card";
import { Section } from "@/components/ui/section";
import { StatusBadge } from "@/components/ui/status-badge";
import { Tabs } from "@/components/ui/tabs";
import { Eyebrow, Heading } from "@/components/ui/typography";
import { demoProjects } from "@/lib/demo-data/projects";

type ProjectPageProps = {
  params: Promise<{ projectId: string }>;
};

export async function generateStaticParams() {
  return demoProjects.map((project) => ({ projectId: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { projectId } = await params;
  const project = demoProjects.find((item) => item.id === projectId);

  return {
    title: project ? project.name : "Project Dashboard",
    description: project?.description,
  };
}

function statusVariant(status: string) {
  if (["On track", "Approved", "Draft issued"].includes(status)) return "green";
  if (["Watch", "In review", "In progress", "Pending", "Scheduled"].includes(status)) return "amber";
  if (["Action required", "Open", "Information required"].includes(status)) return "red";
  return "neutral";
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const project = demoProjects.find((item) => item.id === projectId);

  if (!project) notFound();

  return (
    <main className="pt-20">
      <Section className="py-12 lg:py-16">
        <Container>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <DemoEnvironmentBadge />
            <StatusBadge variant={statusVariant(project.status)}>{project.status}</StatusBadge>
          </div>
          <ProjectNavigation projectId={project.id} />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_.45fr] lg:items-end">
            <div>
              <Eyebrow>{project.stage}</Eyebrow>
              <Heading as="h1" className="mt-4 max-w-4xl text-4xl lg:text-6xl">
                {project.name}
              </Heading>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-nexa-silver">{project.description}</p>
            </div>
            <GlassPanel className="p-6">
              <p className="text-sm font-semibold text-nexa-muted">{project.client}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{project.sector}</p>
              <div className="mt-6">
                <ProgressBar value={project.progress} />
              </div>
            </GlassPanel>
          </div>
        </Container>
      </Section>

      <Section className="py-10">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {project.metrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-10">
        <Container>
          <Tabs
            tabs={[
              {
                id: "overview",
                label: "Overview",
                content: (
                  <div className="grid gap-4 lg:grid-cols-[.8fr_1.2fr]">
                    <Card>
                      <h2 className="text-xl font-semibold text-white">Discipline progress</h2>
                      <div className="mt-6 space-y-5">
                        {project.disciplines.map((discipline) => (
                          <ProgressBar key={discipline.name} value={discipline.progress} />
                        ))}
                      </div>
                    </Card>
                    <Card>
                      <h2 className="text-xl font-semibold text-white">Recent activity</h2>
                      <div className="mt-6">
                        <ActivityTimeline items={project.activity} />
                      </div>
                    </Card>
                  </div>
                ),
              },
              {
                id: "risks",
                label: "Risks",
                content: (
                  <DataTable
                    columns={[
                      { key: "id", label: "ID" },
                      { key: "risk", label: "Risk" },
                      { key: "impact", label: "Impact" },
                      { key: "owner", label: "Owner" },
                      {
                        key: "status",
                        label: "Status",
                        render: (row) => (
                          <StatusBadge variant={statusVariant(String(row.status))}>{String(row.status)}</StatusBadge>
                        ),
                      },
                    ]}
                    rows={project.risks}
                  />
                ),
              },
              {
                id: "rfis",
                label: "RFIs",
                content: (
                  <DataTable
                    columns={[
                      { key: "id", label: "ID" },
                      { key: "title", label: "Title" },
                      { key: "owner", label: "Owner" },
                      { key: "due", label: "Due" },
                      {
                        key: "status",
                        label: "Status",
                        render: (row) => (
                          <StatusBadge variant={statusVariant(String(row.status))}>{String(row.status)}</StatusBadge>
                        ),
                      },
                    ]}
                    rows={project.rfis}
                  />
                ),
              },
              {
                id: "documents",
                label: "Documents",
                content: (
                  <DataTable
                    columns={[
                      { key: "id", label: "ID" },
                      { key: "title", label: "Title" },
                      { key: "type", label: "Type" },
                      { key: "status", label: "Status" },
                      { key: "updated", label: "Updated" },
                    ]}
                    rows={project.documents}
                  />
                ),
              },
            ]}
          />
        </Container>
      </Section>
    </main>
  );
}
