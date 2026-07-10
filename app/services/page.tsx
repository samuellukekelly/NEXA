import type { Metadata } from "next";
import { SectionGrid } from "@/components/marketing/section-grid";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, Heading } from "@/components/ui/typography";
import { serviceDetails, serviceOutputs } from "@/lib/demo-data/marketing";

export const metadata: Metadata = {
  title: "Services",
  description: "Electrical building services design, infrastructure, healthcare engineering, lighting, surveys, BIM and construction-stage support.",
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <Section>
        <Container>
          <Eyebrow>Services</Eyebrow>
          <Heading as="h1" className="mt-4 max-w-5xl text-5xl lg:text-7xl">Electrical services designed for clarity, resilience and coordination.</Heading>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-nexa-silver">
            NEXA supports project teams from feasibility through construction with practical electrical engineering information. Services are scoped to project needs and verified against applicable standards and constraints.
          </p>
          <div className="mt-12"><SectionGrid items={serviceDetails.map((title) => ({ title, text: "Detailed design, reporting and coordination support tailored to the project stage, site constraints and stakeholder requirements." }))} /></div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Eyebrow>Outputs</Eyebrow>
          <Heading className="mt-4 max-w-4xl text-4xl lg:text-6xl">Clear information that helps teams procure and build.</Heading>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {serviceOutputs.map((output) => <div key={output} className="rounded-md border border-white/10 bg-white/[0.04] p-4 font-bold text-nexa-silver">{output}</div>)}
          </div>
        </Container>
      </Section>
    </main>
  );
}
