import Link from "next/link";
import { NexaLogo } from "@/components/brand/nexa-logo";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#020914] py-10">
      <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <NexaLogo />
          <p className="mt-4 max-w-2xl text-sm text-nexa-muted">{siteConfig.positioning}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-bold text-nexa-silver">
          <Link href="/about">About</Link>
          <Link href="/process">Process</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/reports/demo-condition-survey">Demo Report</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p className="text-xs text-nexa-muted lg:col-span-2">
          © 2026 {siteConfig.legalName}. Business details are placeholders until verified.
        </p>
      </Container>
    </footer>
  );
}
