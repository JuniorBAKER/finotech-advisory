import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { Reveal } from "@/components/ui/Reveal";
import { SECTORS } from "@/lib/data/sectors";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Secteurs et clientèles",
  description:
    "PME, entreprises en croissance, startups, scaleups, investisseurs, fonds d'investissement, entrepreneurs, conseils d'administration, organismes publics et coopératives : les clientèles accompagnées par Finotech Advisory.",
  alternates: { canonical: "/secteurs" },
};

export default function SecteursPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Secteurs", url: "/secteurs" }]} />
      <Section tone="navy" className="pb-16 pt-16 md:pt-20">
        <Container>
          <Breadcrumb items={[{ label: "Secteurs" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="kicker">Secteurs et clientèles</p>
            <h1 className="mt-6 text-display-xl font-display font-medium text-white text-balance">
              Dix profils d&apos;organisations. Un même niveau d&apos;exigence.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-anthracite-300">
              Chaque type d&apos;organisation fait face à des contraintes différentes — gouvernance,
              capital, réglementation. Notre méthode s&apos;adapte ; notre rigueur ne varie jamais.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {SECTORS.map((sector, i) => (
              <Reveal key={sector.slug} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-anthracite-200/70 bg-white p-8 dark:border-white/10 dark:bg-navy-900">
                  <h2 className="font-display text-xl font-medium text-navy-900 dark:text-white">{sector.name}</h2>
                  <p className="mt-3 leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                    {sector.description}
                  </p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-scarlet-600 dark:text-scarlet-400">
                    Enjeux fréquents
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-anthracite-600 dark:text-anthracite-300">
                    {sector.challenges.map((c) => (
                      <li key={c} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-scarlet-500" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <CTABanner
            title="Votre organisation ne figure pas exactement dans cette liste ?"
            description="Nos méthodes s'adaptent à des contextes variés. Discutons du vôtre."
          />
        </Container>
      </Section>
    </>
  );
}
