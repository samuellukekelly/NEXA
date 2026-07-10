import type { Metadata } from "next";
import { GlassPanel } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, Heading } from "@/components/ui/typography";

export const metadata: Metadata = { title: "About", description: "About NEXA, a digital-first UK electrical building services engineering consultancy." };

export default function AboutPage() {
  return (
    <main className="pt-20">
      <Section>
        <Container className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <Eyebrow>About NEXA</Eyebrow>
            <Heading as="h1" className="mt-4 text-5xl lg:text-7xl">Independent electrical engineering with a digital operating model.</Heading>
          </div>
          <GlassPanel className="p-8 text-lg leading-8 text-nexa-silver">
            <p>NEXA is positioned as a modern UK electrical building services engineering consultancy for clients that need clear advice, coordinated design and practical delivery support.</p>
            <p className="mt-5">The platform is designed to make engineering information easier to understand: project dashboards, digital reports, structured risks and browser-based tools sit alongside traditional design outputs.</p>
          </GlassPanel>
        </Container>
      </Section>
    </main>
  );
}
