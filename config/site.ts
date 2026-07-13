export const siteConfig = {
  name: "NEXA",
  legalName: "NEXA Building Services Engineers Ltd",
  descriptor: "Progressive Electrical Design Consultancy",
  strapline: "Engineering the next.",
  positioning:
    "Progressive electrical design for better buildings.",
  url: "https://nexa.example",
  email: "hello@nexa-engineering.example",
  telephone: "+44 (0)0000 000000",
  address: "UK address placeholder",
  socials: {
    linkedin: "https://www.linkedin.com/company/nexa-placeholder",
  },
  navigation: [
    { label: "Services", href: "/services" },
    { label: "Healthcare", href: "/healthcare" },
    { label: "Sectors", href: "/sectors" },
    { label: "Projects", href: "/projects" },
    { label: "Insights", href: "/insights" },
    { label: "Portal", href: "/portal" },
  ],
  services: [
    "Electrical strategy",
    "Critical power",
    "Lighting design",
    "LV infrastructure",
    "Healthcare environments",
    "Digital coordination",
    "Technical reports",
    "Design validation",
  ],
  sectors: ["Healthcare", "Commercial", "Education", "Public sector", "Residential", "Industrial"],
} as const;

export type SiteConfig = typeof siteConfig;
