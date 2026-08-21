import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, LineChart, Target, FileSearch, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { Reveal } from "@/components/ui/Reveal";
import { ResearchNotesFilter } from "@/components/sections/ResearchNotesFilter";
import { MarketReviewsDownloads } from "@/components/sections/MarketReviewsDownloads";
import { BulletinSubscribeForm } from "@/components/sections/BulletinSubscribeForm";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { RESEARCH_DISCLAIMER } from "@/lib/data/equity-research";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Notes Equity Research — Finotech Analytics",
  description:
    "Finotech Analytics publie des notes sectorielles et des notes sur titres illustratives couvrant les émetteurs cotés québécois — méthodologie, hypothèses et lecture des résultats trimestriels.",
  alternates: { canonical: "/finotech-analytics/equity-research" },
  openGraph: {
    title: "Notes Equity Research — Finotech Analytics",
    description:
      "Notes sectorielles et notes sur titres illustratives couvrant les émetteurs cotés québécois.",
    url: `${SITE_URL}/finotech-analytics/equity-research`,
  },
};

const PILLARS = [
  {
    icon: FileSearch,
    title: "Méthodologie transparente",
    description: "Chaque note expose ses hypothèses de valorisation, ses catalyseurs et ses risques — aucune boîte noire.",
  },
  {
    icon: LineChart,
    title: "Lecture sectorielle et titre par titre",
    description: "Des notes de fond sur les tendances sectorielles, complétées par une couverture de titres individuels.",
  },
  {
    icon: Target,
    title: "Cibles et scénarios explicites",
    description: "Cible de cours, potentiel d'appréciation et conditions de révision clairement énoncés à chaque mise à jour.",
  },
  {
    icon: ShieldAlert,
    title: "Cadre pédagogique assumé",
    description: "Format éditorial à visée démonstrative — voir l'avertissement complet ci-dessous avant toute lecture.",
  },
];

export default function EquityResearchPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Finotech Analytics", url: "/finotech-analytics" },
          { name: "Equity Research", url: "/finotech-analytics/equity-research" },
        ]}
      />
      <Section tone="navy" className="pb-16 pt-16 md:pt-20">
        <Container>
          <Breadcrumb
            items={[
              { label: "Finotech Analytics", href: "/finotech-analytics" },
              { label: "Equity Research" },
            ]}
          />
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
            <div className="max-w-2xl">
              <p className="kicker">Finotech Analytics · Equity Research</p>
              <h1 className="mt-6 text-display-xl font-display font-medium text-white text-balance">
                Notes sectorielles et notes sur titres.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-anthracite-300">
                Equity Research prolonge Finotech Analytics au-delà du private equity : lecture des
                tendances sectorielles et couverture titre par titre d&apos;émetteurs cotés, avec cibles de
                cours, catalyseurs et risques exposés méthodiquement.
              </p>
              <Link
                href="/finotech-analytics/private-equity"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-scarlet-400 hover:text-scarlet-300"
              >
                Voir aussi les bulletins Private Equity <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <BulletinSubscribeForm
              heading="Recevoir les notes Equity Research"
              description="Une note publiée dès qu'un secteur ou un titre couvert présente un développement significatif. Aucune sollicitation commerciale."
              successMessage="Merci — vous recevrez les prochaines notes Equity Research dès leur publication."
            />
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900/5 text-navy-800 dark:bg-white/10 dark:text-white">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-medium text-navy-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                  {p.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex items-start gap-3 rounded-2xl border border-scarlet-400/30 bg-scarlet-50 p-5 dark:bg-scarlet-900/15">
            <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-scarlet-600 dark:text-scarlet-400" />
            <p className="text-sm leading-relaxed text-anthracite-700 dark:text-anthracite-300">
              {RESEARCH_DISCLAIMER}
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <p className="kicker">Revue hebdomadaire</p>
          <h2 className="mt-4 text-display-lg font-display font-medium text-navy-900 dark:text-white">
            Revue des marchés mondiaux — téléchargements PDF
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-anthracite-600 dark:text-anthracite-300">
            Chaque jeudi, un survol condensé des marchés boursiers, obligataires et des matières
            premières, en format PDF téléchargeable.
          </p>
          <div className="mt-8">
            <MarketReviewsDownloads />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <p className="kicker">Archives</p>
          <h2 className="mt-4 text-display-lg font-display font-medium text-navy-900 dark:text-white">
            Toutes les notes
          </h2>
          <div className="mt-10">
            <ResearchNotesFilter />
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <CTABanner
            title="Besoin d'une analyse indépendante sur mesure ?"
            description="Notre équipe Corporate Finance et Business Intelligence conçoit des analyses de titres, de secteurs ou de cibles d'acquisition adaptées à votre mandat."
            primaryLabel="Prendre rendez-vous"
            secondaryLabel="Voir Data Analytics & Research"
            secondaryHref="/solutions/data-analytics-research"
          />
        </Container>
      </Section>
    </>
  );
}
