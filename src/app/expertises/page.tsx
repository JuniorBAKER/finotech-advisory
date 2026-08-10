import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { ExpertiseGrid } from "@/components/sections/ExpertiseGrid";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Nos expertises",
  description:
    "Business Intelligence & Data Analysis, Business Strategy, Corporate Finance et Training and Research : les quatre expertises de Finotech Advisory.",
  alternates: { canonical: "/expertises" },
};

export default function ExpertisesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Expertises", url: "/expertises" }]} />
      <Section tone="navy" className="pb-16 pt-16 md:pt-20">
        <Container>
          <Breadcrumb items={[{ label: "Expertises" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="kicker">Nos expertises</p>
            <h1 className="mt-6 text-display-xl font-display font-medium text-white text-balance">
              Quatre disciplines. Une seule exigence : la rigueur.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-anthracite-300">
              Chaque expertise répond à un type de décision différent — mais toutes partagent la même
              méthode : les faits d&apos;abord, la recommandation ensuite.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <ExpertiseGrid />
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <CTABanner
            title="Laquelle de ces expertises correspond à votre enjeu actuel ?"
            description="Un premier échange nous permet souvent de le clarifier en quelques minutes."
          />
        </Container>
      </Section>
    </>
  );
}
