import type { Metadata } from "next";
import { VoltageDropCalculator } from "@/components/tools/voltage-drop-calculator";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, Heading } from "@/components/ui/typography";
import { toolCards } from "@/lib/demo-data/tools";

export const metadata: Metadata = {
  title: "Engineering Tools",
  description: "Demo browser-based engineering tools for the NEXA digital platform.",
};

export default function ToolsPage() {
  return (
    <main className="pt-20">
      <Section className="py-14 lg:py-20">
        <Container>
          <Eyebrow>Engineering Tools</Eyebrow>
          <Heading as="h1" className="mt-4 max-w-4xl text-5xl lg:text-7xl">
            Practical calculations, clearer inputs.
          </Heading>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-nexa-silver">
            Demo tools showing how NEXA can turn repeat engineering checks into clean browser-based workflows.
          </p>
        </Container>
      </Section>

      <Section className="py-10">
        <Container>
          <VoltageDropCalculator />
        </Container>
      </Section>

      <Section className="py-10">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {toolCards.slice(1).map((tool) => (
              <Card key={tool}>
                <h2 className="text-lg font-semibold text-white">{tool}</h2>
                <p className="mt-3 text-sm leading-6 text-nexa-muted">Demo module placeholder.</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
