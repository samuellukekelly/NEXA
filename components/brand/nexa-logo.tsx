import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function NexaLogo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)} aria-label="NEXA home">
      <svg className="h-11 w-11 shrink-0" viewBox="0 0 48 48" aria-hidden="true">
        <defs>
          <linearGradient id="nexaMark" x1="6" x2="42" y1="6" y2="42">
            <stop stopColor="#60E6ED" />
            <stop offset=".42" stopColor="#00C7D4" />
            <stop offset="1" stopColor="#081320" />
          </linearGradient>
        </defs>
        <path fill="url(#nexaMark)" d="M5 5h28l10 10v28H15L5 33V5Z" />
        <path
          fill="none"
          stroke="#fff"
          strokeLinecap="square"
          strokeWidth="4"
          d="M16 34V15l16 18V14"
        />
      </svg>
      <span className="leading-none">
        <span className="block text-xl font-semibold tracking-[0.18em] text-white">{siteConfig.name}</span>
        <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.24em] text-nexa-muted">
          {siteConfig.descriptor}
        </span>
      </span>
    </Link>
  );
}
