import type { Metadata } from "next";
import { SectionGrid } from "@/components/marketing/section-grid";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, Heading } from "@/components/ui/typography";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Sectors", description: "NEXA sector experience for healthcare, commercial, education, public sector, residential and industrial projects." };

export default function SectorsPage() {
  return (
    <main className="pt-20">
      <Section>
        <Container>
          <Eyebrow>Sectors</Eyebrow>
          <Heading as="h1" className="mt-4 max-w-5xl text-5xl lg:text-7xl">Engineering judgement for complex building environments.</Heading>
          <div className="mt-12">
            <SectionGrid items={siteConfig.sectors.map((title) => ({
              title,
              text: "Electrical strategies, surveys, coordinated design and construction support shaped around the sector's operational realities.",
            }))} />
          </div>
        </Container>
      </Section>
    </main>
  );
}
