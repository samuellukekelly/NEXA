import type { Metadata } from "next";
import { SectionGrid } from "@/components/marketing/section-grid";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, Heading } from "@/components/ui/typography";

export const metadata: Metadata = { title: "Process", description: "NEXA process from discover and define through design, coordination, delivery and support." };

const steps = [
  ["Discover", "Understand brief, stakeholders, existing services, constraints and information gaps."],
  ["Define", "Set design strategy, standards, deliverables, risks and project-specific assumptions."],
  ["Design", "Produce coordinated electrical information with clear calculations, drawings and schedules."],
  ["Coordinate", "Resolve interfaces with architecture, structure, mechanical systems and clinical or operational needs."],
  ["Deliver", "Support tender, technical queries, construction review and commissioning information."],
  ["Support", "Help clients use project data for handover, operation and future estate planning."],
];

export default function ProcessPage() {
  return (
    <main className="pt-20">
      <Section>
        <Container>
          <Eyebrow>Process</Eyebrow>
          <Heading as="h1" className="mt-4 max-w-5xl text-5xl lg:text-7xl">A precise digital route through electrical design.</Heading>
          <div className="mt-12"><SectionGrid items={steps.map(([title, text], index) => ({ title, text, meta: `0${index + 1}` }))} /></div>
        </Container>
      </Section>
    </main>
  );
}
