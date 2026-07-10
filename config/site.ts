export const siteConfig = {
  name: "NEXA",
  legalName: "NEXA Building Services Engineers Ltd",
  descriptor: "Electrical Building Services Engineers",
  strapline: "Engineering the next.",
  positioning:
    "Digital-first electrical engineering for healthcare, commercial and public-sector environments.",
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
    "Electrical building services design",
    "LV distribution and infrastructure",
    "Healthcare electrical engineering",
    "Lighting and emergency lighting",
    "Surveys and feasibility",
    "BIM and digital coordination",
    "Resilience, UPS and standby generation",
    "Sustainability, PV, BESS and EV infrastructure",
  ],
  sectors: ["Healthcare", "Commercial", "Education", "Public sector", "Residential", "Industrial"],
} as const;

export type SiteConfig = typeof siteConfig;
