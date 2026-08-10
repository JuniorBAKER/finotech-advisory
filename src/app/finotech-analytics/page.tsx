import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Handshake, LineChart } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { BulletinSubscribeForm } from "@/components/sections/BulletinSubscribeForm";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getSortedBulletins } from "@/lib/data/analytics-bulletins";
import { getSortedResearchNotes } from "@/lib/data/equity-research";
import { formatDate } from "@/lib/utils";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Finotech Analytics — Bulletins Private Equity & Equity Research",
  description:
    "Finotech Analytics publie chaque trimestre un bulletin sur le marché du private equity québécois ainsi que des notes Equity Research sectorielles et sur titres.",
  alternates: { canonical: "/finotech-analytics" },
  openGraph: {
    title: "Finotech Analytics — Bulletins Private Equity & Equity Research",
    description:
      "Une lecture indépendante et chiffrée du marché du capital-investissement et des émetteurs cotés québécois.",
    url: `${SITE_URL}/finotech-analytics`,
  },
};

export default function FinotechAnalyticsHubPage() {
  const latestBulletin = getSortedBulletins()[0];
  const latestNote = getSortedResearchNotes()[0];

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Finotech Analytics", url: "/finotech-analytics" }]} />
      <Section tone="navy" className="pb-16 pt-16 md:pt-20">
        <Container>
          <Breadcrumb items={[{ label: "Finotech Analytics" }]} />
          <div className="mt-8 max-w-2xl">
            <p className="kicker">Finotech Analytics</p>
            <h1 className="mt-6 text-display-xl font-display font-medium text-white text-balance">
              L&apos;intelligence de marché de Finotech Advisory.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-anthracite-300">
              Deux publications, une même exigence : une lecture chiffrée et indépendante des marchés
              qui comptent pour nos clients — le capital-investissement québécois et les émetteurs
              cotés que nous suivons.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl border border-anthracite-200/70 bg-white p-8 dark:border-white/10 dark:bg-navy-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900/5 text-navy-800 dark:bg-white/10 dark:text-white">
                  <Handshake className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-display text-2xl font-medium text-navy-900 dark:text-white">
                  Private Equity
                </h2>
                <p className="mt-3 flex-1 leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                  Le bulletin trimestriel de Finotech Analytics : activité transactionnelle,
                  valorisations, levées de fonds et sorties sur le marché québécois du
                  capital-investissement.
                </p>
                {latestBulletin && (
                  <div className="mt-6 border-t border-anthracite-200/70 pt-5 dark:border-white/10">
                    <Badge tone={latestBulletin.category === "Note spéciale" ? "scarlet" : "navy"}>
                      {latestBulletin.period}
                    </Badge>
                    <p className="mt-3 text-sm font-medium text-navy-900 dark:text-white">
                      {latestBulletin.title}
                    </p>
                    <p className="mt-1 text-xs text-anthracite-500 dark:text-anthracite-400">
                      {formatDate(latestBulletin.date)}
                    </p>
                  </div>
                )}
                <Link
                  href="/finotech-analytics/private-equity"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-scarlet-600 dark:text-scarlet-400"
                >
                  Explorer les bulletins Private Equity <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-anthracite-200/70 bg-white p-8 dark:border-white/10 dark:bg-navy-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900/5 text-navy-800 dark:bg-white/10 dark:text-white">
                  <LineChart className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-display text-2xl font-medium text-navy-900 dark:text-white">
                  Equity Research
                </h2>
                <p className="mt-3 flex-1 leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                  Notes sectorielles et notes sur titres illustratives couvrant des émetteurs cotés
                  québécois, avec cibles de cours, catalyseurs et risques exposés méthodiquement.
                </p>
                {latestNote && (
                  <div className="mt-6 border-t border-anthracite-200/70 pt-5 dark:border-white/10">
                    <Badge tone="navy">{latestNote.noteType}</Badge>
                    <p className="mt-3 text-sm font-medium text-navy-900 dark:text-white">
                      {latestNote.title}
                    </p>
                    <p className="mt-1 text-xs text-anthracite-500 dark:text-anthracite-400">
                      {formatDate(latestNote.date)}
                    </p>
                  </div>
                )}
                <Link
                  href="/finotech-analytics/equity-research"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-scarlet-600 dark:text-scarlet-400"
                >
                  Explorer les notes Equity Research <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-xl">
            <BulletinSubscribeForm />
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <CTABanner
            title="Une décision de transaction ou d'investissement à valider ?"
            description="Notre équipe Corporate Finance et Business Intelligence accompagne dirigeants, gestionnaires de fonds et investisseurs à chaque étape."
            primaryLabel="Prendre rendez-vous"
            secondaryLabel="Voir Business Valuation"
            secondaryHref="/solutions/business-valuation"
          />
        </Container>
      </Section>
    </>
  );
}
