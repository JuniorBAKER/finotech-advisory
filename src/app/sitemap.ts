import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { EXPERTISES } from "@/lib/data/expertises";
import { SOLUTIONS } from "@/lib/data/solutions";
import { CASE_STUDIES } from "@/lib/data/case-studies";
import { INSIGHTS } from "@/lib/data/insights";
import { BULLETINS } from "@/lib/data/analytics-bulletins";
import { RESEARCH_NOTES } from "@/lib/data/equity-research";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/a-propos",
    "/expertises",
    "/solutions",
    "/secteurs",
    "/methodologie",
    "/etudes-de-cas",
    "/insights",
    "/finotech-analytics",
    "/finotech-analytics/private-equity",
    "/finotech-analytics/equity-research",
    "/carrieres",
    "/faq",
    "/contact",
    "/rendez-vous",
    "/confidentialite",
    "/cookies",
    "/mentions-legales",
    "/conditions-utilisation",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const expertiseRoutes = EXPERTISES.map((e) => ({
    url: `${SITE_URL}/expertises/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const solutionRoutes = SOLUTIONS.map((s) => ({
    url: `${SITE_URL}/solutions/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const caseStudyRoutes = CASE_STUDIES.map((c) => ({
    url: `${SITE_URL}/etudes-de-cas/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const insightRoutes = INSIGHTS.map((i) => ({
    url: `${SITE_URL}/insights/${i.slug}`,
    lastModified: new Date(i.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  const bulletinRoutes = BULLETINS.map((b) => ({
    url: `${SITE_URL}/finotech-analytics/private-equity/${b.slug}`,
    lastModified: new Date(b.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const researchNoteRoutes = RESEARCH_NOTES.map((n) => ({
    url: `${SITE_URL}/finotech-analytics/equity-research/${n.slug}`,
    lastModified: new Date(n.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...expertiseRoutes,
    ...solutionRoutes,
    ...caseStudyRoutes,
    ...insightRoutes,
    ...bulletinRoutes,
    ...researchNoteRoutes,
  ];
}
