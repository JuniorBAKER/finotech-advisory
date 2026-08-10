import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { Reveal } from "@/components/ui/Reveal";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { METHODOLOGY_PHASES, METHODOLOGY_PRINCIPLES } from "@/lib/data/methodology";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Méthodologie",
  description:
    "Diagnostic, analyse et modélisation, recommandation stratégique, mise en œuvre, suivi et optimisation : la méthodologie en cinq phases de Finotech Advisory.",
  alternates: { canonical: "/methodologie" },
};

export default function MethodologiePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Méthodologie", url: "/methodologie" }]} />
      <Section tone="navy" className="pb-16 pt-16 md:pt-20">
        <Container>
          <Breadcrumb items={[{ label: "Méthodologie" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="kicker">Notre méthodologie</p>
            <h1 className="mt-6 text-display-xl font-display font-medium text-white text-balance">
              Cinq phases. Aucun raccourci.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-anthracite-300">
              Une recommandation stratégique n&apos;a de valeur que si elle est fondée sur des faits
              vérifiés et suivie d&apos;une exécution mesurée. Voici comment nous y parvenons, à chaque mandat.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <ProcessSteps steps={METHODOLOGY_PHASES} />
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <h2 className="text-display-lg font-display font-medium text-navy-900 dark:text-white">
            Les principes qui gouvernent chaque mandat
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {METHODOLOGY_PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-anthracite-200/70 bg-white p-8 dark:border-white/10 dark:bg-navy-900">
                  <h3 className="font-display text-lg font-medium text-navy-900 dark:text-white">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTABanner
            title="Découvrir comment cette méthodologie s'applique à votre situation"
            description="Un premier échange stratégique de 30 minutes, sans frais ni engagement."
          />
        </Container>
      </Section>
    </>
  );
}
