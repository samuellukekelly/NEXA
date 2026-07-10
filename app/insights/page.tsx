import type { Metadata } from "next";
import { SectionGrid } from "@/components/marketing/section-grid";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, Heading } from "@/components/ui/typography";
import { insights } from "@/lib/demo-data/marketing";

export const metadata: Metadata = { title: "Insights", description: "NEXA insights on electrical resilience, digital reports and infrastructure feasibility." };

export default function InsightsPage() {
  return (
    <main className="pt-20">
      <Section>
        <Container>
          <Eyebrow>Insights</Eyebrow>
          <Heading as="h1" className="mt-4 max-w-5xl text-5xl lg:text-7xl">Practical thinking for digital-first electrical engineering.</Heading>
          <div className="mt-12"><SectionGrid items={insights.map((item) => ({ title: item.title, meta: item.tag, text: item.summary }))} /></div>
        </Container>
      </Section>
    </main>
  );
}
