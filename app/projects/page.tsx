import type { Metadata } from "next";
import { SectionGrid } from "@/components/marketing/section-grid";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, Heading } from "@/components/ui/typography";
import { caseStudies } from "@/lib/demo-data/marketing";

export const metadata: Metadata = { title: "Projects", description: "Demonstration case studies for the NEXA digital engineering platform." };

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      <Section>
        <Container>
          <Eyebrow>Demonstration content</Eyebrow>
          <Heading as="h1" className="mt-4 max-w-5xl text-5xl lg:text-7xl">Project stories shown as placeholders until verified work is published.</Heading>
          <p className="mt-6 max-w-3xl text-nexa-silver">These fictional case studies demonstrate content structure only. They do not claim completed NEXA commissions, clients or outcomes.</p>
          <div className="mt-12"><SectionGrid items={caseStudies.map((item) => ({ title: item.title, meta: item.sector, text: item.text }))} /></div>
        </Container>
      </Section>
    </main>
  );
}
