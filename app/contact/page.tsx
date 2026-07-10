import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, Heading } from "@/components/ui/typography";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Contact", description: "Start a project enquiry with NEXA." };

export default function ContactPage() {
  return (
    <main className="pt-20">
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <Heading as="h1" className="mt-4 text-5xl lg:text-7xl">Start a project with clearer electrical information.</Heading>
            <p className="mt-6 text-lg leading-8 text-nexa-silver">Demo mode validates the enquiry locally and sends nothing externally.</p>
            <p className="mt-6 text-sm font-bold text-nexa-muted">{siteConfig.email} · {siteConfig.telephone}</p>
          </div>
          <ContactForm />
        </Container>
      </Section>
    </main>
  );
}
