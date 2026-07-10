import type { Metadata } from "next";
import { SectionGrid } from "@/components/marketing/section-grid";
import { GlassPanel } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, Heading } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Healthcare Electrical Engineering",
  description: "Electrical engineering for live hospital environments, clinical continuity, resilience, medical locations and phased healthcare estates.",
};

const healthcareItems = [
  "Live hospital environments", "Clinical continuity", "Electrical resilience", "Essential and non-essential supplies",
  "UPS systems", "Standby generation", "Medical locations", "IPS systems", "Isolation and shutdown planning",
  "Infection prevention coordination", "Phased works", "HTM-led design", "Estate infrastructure",
  "Diagnostic equipment supplies", "Mental-health environments", "Emergency departments", "Imaging departments",
  "Theatres and procedure spaces", "Community healthcare",
];

export default function HealthcarePage() {
  return (
    <main className="pt-20">
      <Section>
        <Container>
          <Eyebrow>Healthcare</Eyebrow>
          <Heading as="h1" className="mt-4 max-w-5xl text-5xl lg:text-7xl">Electrical design for live, critical and clinically sensitive environments.</Heading>
          <GlassPanel className="mt-8 p-6">
            <p className="text-lg leading-8 text-nexa-silver">
              Designed with reference to applicable HTMs, HBNs, BS 7671 and project-specific requirements. Final compliance is always subject to project scope, survey information, stakeholder review and verification.
            </p>
          </GlassPanel>
          <div className="mt-12"><SectionGrid items={healthcareItems.map((title) => ({ title, text: "Careful electrical engineering support for resilience, safety, maintainability and phased delivery in healthcare settings." }))} /></div>
        </Container>
      </Section>
    </main>
  );
}
