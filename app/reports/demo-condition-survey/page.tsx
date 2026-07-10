import type { Metadata } from "next";
import { ProjectNavigation } from "@/components/portal/project-nav";
import { Card, GlassPanel } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { DataTable } from "@/components/ui/data-table";
import { Section } from "@/components/ui/section";
import { StatusBadge } from "@/components/ui/status-badge";
import { Eyebrow, Heading } from "@/components/ui/typography";
import { conditionSurveyReport } from "@/lib/demo-data/report";
import { demoProjects } from "@/lib/demo-data/projects";

export const metadata: Metadata = {
  title: "Demo Condition Survey",
  description: conditionSurveyReport.summary,
};

function priorityVariant(priority: string) {
  if (priority === "High") return "red";
  if (priority === "Medium") return "amber";
  return "neutral";
}

export default function DemoConditionSurveyPage() {
  const project = demoProjects[0];

  return (
    <main className="pt-20">
      <Section className="py-14 lg:py-20">
        <Container>
          <ProjectNavigation projectId={project.id} />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_.55fr]">
            <div>
              <Eyebrow>{conditionSurveyReport.site}</Eyebrow>
              <Heading as="h1" className="mt-4 max-w-4xl text-5xl lg:text-7xl">
                {conditionSurveyReport.title}
              </Heading>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-nexa-silver">{conditionSurveyReport.summary}</p>
            </div>
            <GlassPanel className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-nexa-cyan">Report date</p>
              <p className="mt-3 text-3xl font-semibold text-white">{conditionSurveyReport.date}</p>
              <p className="mt-4 text-sm leading-6 text-nexa-muted">
                Demonstration content only. Findings must be verified against a real site survey and appointment scope.
              </p>
            </GlassPanel>
          </div>
        </Container>
      </Section>

      <Section className="py-10">
        <Container>
          <DataTable
            columns={[
              { key: "item", label: "Finding" },
              {
                key: "priority",
                label: "Priority",
                render: (row) => (
                  <StatusBadge variant={priorityVariant(String(row.priority))}>{String(row.priority)}</StatusBadge>
                ),
              },
              { key: "budget", label: "Budget band" },
            ]}
            rows={conditionSurveyReport.findings}
          />
        </Container>
      </Section>

      <Section className="py-10">
        <Container>
          <Eyebrow>Limitations</Eyebrow>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {conditionSurveyReport.limitations.map((limitation) => (
              <Card key={limitation}>
                <p className="text-sm leading-6 text-nexa-silver">{limitation}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
