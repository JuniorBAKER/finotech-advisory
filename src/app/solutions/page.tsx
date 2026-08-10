import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { SolutionCard } from "@/components/sections/SolutionCard";
import { SOLUTIONS } from "@/lib/data/solutions";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Nos solutions",
  description:
    "CFO as a Service, Financial Performance System, Business Intelligence Process, Financial Modeling Project, Data Analytics & Research, Restructuration d'entreprise, Business Valuation, Optimisation Organisationnelle : les 8 solutions de Finotech Advisory.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Solutions", url: "/solutions" }]} />
      <Section tone="navy" className="pb-16 pt-16 md:pt-20">
        <Container>
          <Breadcrumb items={[{ label: "Solutions" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="kicker">Nos solutions</p>
            <h1 className="mt-6 text-display-xl font-display font-medium text-white text-balance">
              Huit mandats. Chacun conçu pour un résultat précis.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-anthracite-300">
              Chaque solution répond à une décision spécifique — financement, pilotage, croissance,
              transaction. Chacune est livrée avec des bénéfices définis, une méthodologie claire et
              des résultats mesurables.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s, i) => (
              <SolutionCard key={s.slug} solution={s} index={i} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <CTABanner
            title="Vous ne savez pas encore quelle solution correspond à votre besoin ?"
            description="C'est précisément le rôle de notre premier échange stratégique. Aucun frais, aucun engagement."
          />
        </Container>
      </Section>
    </>
  );
}
