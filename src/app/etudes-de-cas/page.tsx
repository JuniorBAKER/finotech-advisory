import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { CTABanner } from "@/components/ui/CTABanner";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_STUDIES } from "@/lib/data/case-studies";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Études de cas",
  description:
    "Des mandats réels, des résultats mesurés : découvrez comment Finotech Advisory a accompagné PME, scaleups, startups, fonds d'investissement et coopératives.",
  alternates: { canonical: "/etudes-de-cas" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Études de cas", url: "/etudes-de-cas" }]} />
      <Section tone="navy" className="pb-16 pt-16 md:pt-20">
        <Container>
          <Breadcrumb items={[{ label: "Études de cas" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="kicker">Études de cas</p>
            <h1 className="mt-6 text-display-xl font-display font-medium text-white text-balance">
              Des résultats mesurés, pas des promesses.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-anthracite-300">
              Chaque mandat est résumé ici avec le même niveau de transparence que nous appliquons
              à nos propres recommandations : le contexte, l&apos;approche, le résultat chiffré.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {CASE_STUDIES.map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 0.05}>
                <Link
                  href={`/etudes-de-cas/${cs.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-anthracite-200/70 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated dark:border-white/10 dark:bg-navy-900"
                >
                  <div className="flex flex-wrap gap-2">
                    <Badge tone="navy">{cs.sector}</Badge>
                    <Badge tone="scarlet">{cs.solution}</Badge>
                  </div>
                  <h2 className="mt-5 font-display text-xl font-medium text-navy-900 dark:text-white">
                    {cs.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                    {cs.challenge}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-anthracite-200/70 pt-5 dark:border-white/10">
                    <div className="flex gap-6">
                      {cs.results.slice(0, 2).map((r) => (
                        <div key={r.description}>
                          <p className="font-display text-2xl font-medium text-navy-900 dark:text-white">
                            {r.metric}
                          </p>
                        </div>
                      ))}
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-scarlet-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <CTABanner
            title="Votre mandat pourrait-il figurer ici dans six mois ?"
            description="Discutons de votre contexte et du résultat que vous cherchez à atteindre."
          />
        </Container>
      </Section>
    </>
  );
}
