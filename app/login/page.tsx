import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, Heading } from "@/components/ui/typography";

export const metadata: Metadata = { title: "Login", description: "NEXA demo portal login placeholder." };

export default function LoginPage() {
  return (
    <main className="pt-20">
      <Section>
        <Container className="max-w-3xl">
          <GlassPanel className="p-8 text-center">
            <Eyebrow>Client portal</Eyebrow>
            <Heading as="h1" className="mt-4 text-5xl">NEXA Portal</Heading>
            <p className="mx-auto mt-5 max-w-xl text-nexa-silver">Production authentication is planned for a future phase. For now, enter the visual demo portal without credentials.</p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href="/portal">Enter Demo Portal</ButtonLink>
            </div>
          </GlassPanel>
        </Container>
      </Section>
    </main>
  );
}
