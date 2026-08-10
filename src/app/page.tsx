import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { SectorsBar } from "@/components/sections/SectorsBar";
import { ExpertiseGrid } from "@/components/sections/ExpertiseGrid";
import { SolutionCard } from "@/components/sections/SolutionCard";
import { Testimonials } from "@/components/sections/Testimonials";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCounter } from "@/components/ui/StatCounter";
import { CTABanner } from "@/components/ui/CTABanner";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { SOLUTIONS } from "@/lib/data/solutions";
import { CASE_STUDIES } from "@/lib/data/case-studies";
import { METHODOLOGY_PHASES } from "@/lib/data/methodology";
import { STATS, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${COMPANY.legalName} — ${COMPANY.tagline}`,
  description: COMPANY.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featuredSolutions = SOLUTIONS.slice(0, 3);
  const featuredCase = CASE_STUDIES[1] ?? CASE_STUDIES[0]!;

  return (
    <>
      <Hero />
      <SectorsBar />

      <Section>
        <div className="container">
          <StatCounter stats={STATS} />
        </div>
      </Section>

      <Section tone="muted">
        <div className="container">
          <SectionHeading
            kicker="Nos expertises"
            title="Quatre disciplines, une seule finalité : de meilleures décisions."
            description="Nous n'intervenons pas en silos. Chaque mandat combine la donnée, la stratégie, la finance et le transfert de compétence selon ce que la situation exige réellement."
          />
          <div className="mt-14">
            <ExpertiseGrid />
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              kicker="Nos solutions"
              title="Des mandats conçus pour un résultat précis."
              className="max-w-2xl"
            />
            <Button href="/solutions" variant="outline" withArrow>
              Voir les 8 solutions
            </Button>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {featuredSolutions.map((s, i) => (
              <SolutionCard key={s.slug} solution={s} index={i} />
            ))}
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                kicker="Notre méthodologie"
                title="Un processus rigoureux, du diagnostic à l'impact mesuré."
                tone="inverted"
              />
              <p className="mt-6 max-w-lg leading-relaxed text-anthracite-300">
                Chaque mandat suit cinq phases disciplinées. Aucune recommandation n&apos;est présentée
                sans avoir été testée ; aucun mandat ne se termine sans mesure d&apos;impact.
              </p>
              <div className="mt-8">
                <Button href="/methodologie" variant="outline" className="border-white/20 text-white hover:bg-white/10" withArrow>
                  Découvrir la méthodologie complète
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              {METHODOLOGY_PHASES.slice(0, 4).map((phase, i) => (
                <Reveal key={phase.step} delay={i * 0.06}>
                  <div className="flex gap-5 border-b border-white/10 pb-6">
                    <span className="font-display text-2xl font-medium text-scarlet-400">{phase.step}</span>
                    <div>
                      <h3 className="font-display text-lg font-medium text-white">{phase.title}</h3>
                      <p className="mt-1 text-sm text-anthracite-300">{phase.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="container">
          <SectionHeading kicker="Étude de cas" title="Un mandat, un résultat mesurable." className="mb-14" />
          <Reveal>
            <Link
              href={`/etudes-de-cas/${featuredCase.slug}`}
              className="group grid gap-10 rounded-3xl border border-anthracite-200/70 bg-white p-10 transition-shadow hover:shadow-elevated dark:border-white/10 dark:bg-navy-900 lg:grid-cols-[1.2fr_1fr] lg:p-14"
            >
              <div>
                <Badge tone="scarlet">{featuredCase.solution}</Badge>
                <h3 className="mt-5 font-display text-2xl font-medium text-navy-900 dark:text-white md:text-3xl">
                  {featuredCase.title}
                </h3>
                <p className="mt-5 leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                  {featuredCase.challenge}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-scarlet-600 dark:text-scarlet-400">
                  Lire l&apos;étude de cas complète
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <div className="flex flex-col justify-center gap-6 border-t border-anthracite-200/70 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 dark:border-white/10">
                {featuredCase.results.map((r) => (
                  <div key={r.description}>
                    <p className="font-display text-4xl font-medium text-navy-900 dark:text-white">{r.metric}</p>
                    <p className="mt-1 text-sm text-anthracite-500 dark:text-anthracite-400">{r.description}</p>
                  </div>
                ))}
              </div>
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="container">
          <SectionHeading kicker="Témoignages" title="La confiance de dirigeants exigeants." className="mb-14" />
          <Testimonials />
        </div>
      </Section>

      <Section tone="muted">
        <div className="container">
          <CTABanner
            title="Une décision stratégique à venir ? Parlons-en avant qu'elle ne soit prise."
            description="30 minutes suffisent pour clarifier si notre expertise correspond à votre enjeu — sans frais, sans engagement."
          />
        </div>
      </Section>
    </>
  );
}
