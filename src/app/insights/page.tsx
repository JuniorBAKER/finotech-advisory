import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { InsightsFilter } from "@/components/sections/InsightsFilter";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Nos analyses en Business Intelligence, Business Strategy, Corporate Finance et Gouvernance — pour dirigeants, administrateurs et investisseurs.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Insights", url: "/insights" }]} />
      <Section tone="navy" className="pb-16 pt-16 md:pt-20">
        <Container>
          <Breadcrumb items={[{ label: "Insights" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="kicker">Insights</p>
            <h1 className="mt-6 text-display-xl font-display font-medium text-white text-balance">
              Nos analyses. Sans langage marketing.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-anthracite-300">
              Des points de vue directement issus de nos mandats, sur la finance, la stratégie, la
              donnée et la gouvernance.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <InsightsFilter />
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <CTABanner
            title="Recevoir nos prochaines analyses"
            description="Une analyse par mois, directement dans votre boîte de réception — inscrivez-vous depuis le bas de page."
            primaryLabel="Prendre rendez-vous"
            secondaryLabel="Nous contacter"
          />
        </Container>
      </Section>
    </>
  );
}
