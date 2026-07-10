import type { Metadata } from "next";
import { HeroAnimation } from "@/components/marketing/hero-animation";
import { SectionGrid } from "@/components/marketing/section-grid";
import { ButtonLink } from "@/components/ui/button";
import { Card, GlassPanel } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, Heading } from "@/components/ui/typography";
import { siteConfig } from "@/config/site";
import { caseStudies } from "@/lib/demo-data/marketing";

export const metadata: Metadata = {
  title: "Engineering the next",
  description:
    "NEXA delivers intelligent, compliant and future-ready electrical building services engineering across healthcare, commercial and public-sector environments.",
};

const sectorItems = siteConfig.sectors.map((sector) => ({
  title: sector,
  text: "Electrical building services strategy, design and coordination shaped around project constraints, resilience and long-term operation.",
}));

const processItems = ["Discover", "Define", "Design", "Coordinate", "Deliver", "Support"].map((title, index) => ({
  title,
  meta: `0${index + 1}`,
  text: "A structured digital workflow keeps risks visible, information clear and design decisions traceable.",
}));

export default function HomePage() {
  return (
    <main className="pt-20">
      <Section className="min-h-[calc(100vh-5rem)] py-16 lg:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <Eyebrow>Independent Electrical Engineering Consultancy</Eyebrow>
            <Heading as="h1" className="mt-5 text-6xl sm:text-7xl lg:text-8xl">
              Engineering the next.
            </Heading>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-nexa-silver">
              NEXA delivers intelligent, compliant and future-ready electrical building services engineering across
              healthcare, commercial and public-sector environments.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Start a Project</ButtonLink>
              <ButtonLink href="/services" variant="secondary">Explore Our Services</ButtonLink>
            </div>
          </div>
          <HeroAnimation />
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <Eyebrow>Positioning</Eyebrow>
            <Heading className="mt-4 text-4xl lg:text-6xl">Electrical engineering, reimagined.</Heading>
          </div>
          <GlassPanel className="p-8">
            <p className="text-xl leading-9 text-nexa-silver">
              NEXA combines practical electrical engineering expertise with digital delivery: clearer dashboards,
              structured reports, visible progress tracking and coordinated technical information that helps clients
              make decisions earlier.
            </p>
          </GlassPanel>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Services</Eyebrow>
          <Heading className="mt-4 max-w-4xl text-4xl lg:text-6xl">Electrical services for complex buildings.</Heading>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {siteConfig.services.map((service) => (
              <Card key={service}><h3 className="text-lg font-semibold text-white">{service}</h3></Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Sectors</Eyebrow>
          <Heading className="mt-4 max-w-4xl text-4xl lg:text-6xl">Focused sectors. Transferable engineering judgement.</Heading>
          <div className="mt-10"><SectionGrid items={sectorItems} /></div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <Eyebrow>Digital-first delivery</Eyebrow>
            <Heading className="mt-4 text-4xl lg:text-6xl">A clearer client experience.</Heading>
          </div>
          <div className="grid gap-3 text-nexa-silver">
            {["Live project dashboards", "Interactive reports", "Clear progress tracking", "Browser-based model reviews", "Digital handover", "Structured project data"].map((item) => (
              <div key={item} className="rounded-md border border-white/10 bg-white/[0.04] p-4 font-bold">{item}</div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Process</Eyebrow>
          <Heading className="mt-4 max-w-4xl text-4xl lg:text-6xl">From brief to support, with fewer blind spots.</Heading>
          <div className="mt-10"><SectionGrid items={processItems} /></div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Demonstration projects</Eyebrow>
          <Heading className="mt-4 max-w-4xl text-4xl lg:text-6xl">Fictional case studies for the Phase 1 platform.</Heading>
          <div className="mt-10"><SectionGrid items={caseStudies.map((item) => ({ title: item.title, meta: item.sector, text: item.text }))} /></div>
        </Container>
      </Section>

      <Section>
        <Container>
          <GlassPanel className="p-8 text-center lg:p-12">
            <Eyebrow>Start</Eyebrow>
            <Heading className="mx-auto mt-4 max-w-3xl text-5xl lg:text-7xl">Build with clarity.</Heading>
            <p className="mx-auto mt-5 max-w-2xl text-nexa-silver">Bring NEXA into the conversation early and make electrical risks, interfaces and decisions visible from day one.</p>
            <ButtonLink href="/contact" className="mt-8">Start a Project</ButtonLink>
          </GlassPanel>
        </Container>
      </Section>
    </main>
  );
}
