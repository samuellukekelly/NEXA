import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const routes = [
  "",
  "/services",
  "/healthcare",
  "/sectors",
  "/projects",
  "/about",
  "/process",
  "/insights",
  "/contact",
  "/login",
  "/portal",
  "/portal/projects/north-west-healthcare-infrastructure-upgrade",
  "/reports/demo-condition-survey",
  "/tools",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
