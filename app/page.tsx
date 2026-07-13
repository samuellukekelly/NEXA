import type { Metadata } from "next";
import { HeroAnimation } from "@/components/marketing/hero-animation";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, Heading } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Engineering the next",
  description:
    "Progressive electrical design for better buildings. NEXA combines engineering precision, digital delivery and design thinking.",
};

const principles = [
  "More than compliant. Designed properly.",
  "Engineering without the friction.",
  "Simple process. Serious engineering.",
];

const capabilities = [
  ["Electrical strategy", "Sharper decisions before the design is locked."],
  ["Critical power", "Resilience designed for real operational pressure."],
  ["Digital delivery", "Models, reports and decisions that stay usable."],
  ["Technical coordination", "Less noise. Better information. Earlier."],
];

const environments = ["Healthcare", "Commercial", "Public sector", "Education", "Residential", "Industrial"];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#F7FBFD] pt-20 text-[#081320] dark:bg-[#04101D] dark:text-white">
      <Section className="relative min-h-[calc(100vh-5rem)] py-12 lg:py-20">
        <div className="absolute inset-x-0 top-0 h-px bg-nexa-cyan/40" />
        <Container className="grid min-h-[calc(100vh-10rem)] items-center gap-12 lg:grid-cols-[.82fr_1.18fr]">
          <div className="relative z-10">
            <Eyebrow>Progressive electrical design consultancy</Eyebrow>
            <Heading as="h1" className="mt-5 max-w-5xl text-6xl sm:text-7xl lg:text-[7.5rem]">
              Building services deserves better.
            </Heading>
            <p className="mt-7 max-w-xl text-xl leading-8 text-nexa-silver">
              Engineering precision, digital delivery and design thinking for better-performing buildings.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Let's design what comes next</ButtonLink>
              <ButtonLink href="/process" variant="secondary">See the process</ButtonLink>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-12 top-10 hidden h-48 w-px bg-nexa-cyan/40 lg:block" />
            <HeroAnimation />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-nexa-cyan/15 bg-[#EAF4F8] py-10 dark:bg-[#071827]">
        <Container>
          <div className="grid gap-6 text-sm font-semibold uppercase tracking-[0.18em] text-nexa-muted md:grid-cols-3">
            {principles.map((principle) => (
              <p key={principle} className="border-l border-nexa-cyan/40 pl-4 text-white">
                {principle}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <Eyebrow>Position</Eyebrow>
            <Heading className="mt-4 text-5xl lg:text-7xl">A challenger to slow engineering.</Heading>
          </div>
          <div className="grid gap-8 border-l border-nexa-cyan/25 pl-6 lg:pl-10">
            <p className="max-w-3xl text-3xl font-semibold leading-tight text-white">
              NEXA is a digitally native electrical design practice for clients who expect technical work to be clear,
              fast and beautifully controlled.
            </p>
            <p className="max-w-2xl text-lg leading-8 text-nexa-silver">
              We design the invisible systems that make buildings work: power, resilience, lighting, infrastructure and
              technical coordination. No bloated process. No tired consultancy theatre. Just precise engineering,
              delivered cleanly.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-white py-0 text-[#04101D]">
        <Container className="grid gap-0 lg:grid-cols-[1.05fr_.95fr]">
          <div className="py-16 pr-0 lg:py-24 lg:pr-16">
            <Eyebrow className="text-[#00A8B4]">What we design</Eyebrow>
            <Heading className="mt-4 text-5xl text-[#04101D] lg:text-7xl">
              Progressive electrical design for better buildings.
            </Heading>
          </div>
          <div className="grid border-t border-[#00C7D4]/25 lg:border-l lg:border-t-0">
            {capabilities.map(([title, text], index) => (
              <div key={title} className="grid gap-4 border-b border-[#00C7D4]/25 py-8 lg:grid-cols-[6rem_1fr] lg:px-10">
                <p className="font-mono text-sm text-[#00A8B4]">0{index + 1}</p>
                <div>
                  <h2 className="text-2xl font-semibold">{title}</h2>
                  <p className="mt-2 max-w-md text-base leading-7 text-[#314252]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <Eyebrow>Critical environments</Eyebrow>
              <Heading className="mt-4 max-w-5xl text-5xl lg:text-8xl">
                Designed for pressure.
              </Heading>
            </div>
            <p className="max-w-xl text-xl leading-8 text-nexa-silver">
              Hospitals. Live estates. Complex refurbishments. Power-critical spaces. Places where electrical design
              cannot be vague.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 border-y border-nexa-cyan/20 md:grid-cols-3 lg:grid-cols-6">
            {environments.map((environment) => (
              <div key={environment} className="border-r border-nexa-cyan/20 py-8 pr-6 text-sm font-semibold uppercase tracking-[0.14em] text-white last:border-r-0">
                {environment}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[#EAF4F8] dark:bg-[#061523]">
        <Container className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <Eyebrow>Process</Eyebrow>
            <Heading className="mt-4 text-5xl lg:text-7xl">Simple process. Serious engineering.</Heading>
          </div>
          <div className="grid gap-1">
            {["Brief", "Model", "Coordinate", "Validate", "Deliver"].map((step, index) => (
              <div key={step} className="group grid border-b border-nexa-cyan/15 py-6 transition hover:border-nexa-cyan/60 md:grid-cols-[8rem_1fr]">
                <p className="font-mono text-sm text-nexa-cyan">0{index + 1}</p>
                <h2 className="text-3xl font-semibold text-white transition group-hover:translate-x-2">{step}</h2>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-5xl">
            <Eyebrow>Next</Eyebrow>
            <Heading className="mt-4 text-6xl lg:text-8xl">Engineering the next.</Heading>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-nexa-silver">
              More than compliant. More useful than a drawing pack. Electrical design with intent.
            </p>
            <ButtonLink href="/contact" className="mt-9">Let's design what comes next</ButtonLink>
          </div>
        </Container>
      </Section>
    </main>
  );
}
