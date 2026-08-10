import type { Metadata } from "next";
import Link from "next/link";
import { LineChart, TrendingUp, Landmark, Handshake, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { Reveal } from "@/components/ui/Reveal";
import { BulletinsFilter } from "@/components/sections/BulletinsFilter";
import { BulletinSubscribeForm } from "@/components/sections/BulletinSubscribeForm";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bulletins Private Equity — Finotech Analytics",
  description:
    "Finotech Analytics publie chaque trimestre une lecture indépendante et chiffrée du marché du capital-investissement au Québec : transactions, valorisations, levées de fonds et sorties.",
  alternates: { canonical: "/finotech-analytics/private-equity" },
  openGraph: {
    title: "Bulletins Private Equity — Finotech Analytics",
    description:
      "Une lecture indépendante et chiffrée du marché du capital-investissement au Québec, publiée chaque trimestre.",
    url: `${SITE_URL}/finotech-analytics/private-equity`,
  },
};

const PILLARS = [
  {
    icon: LineChart,
    title: "Données propriétaires",
    description: "Suivi trimestriel des transactions de private equity complétées au Québec, compilé et vérifié par notre équipe.",
  },
  {
    icon: TrendingUp,
    title: "Lecture indépendante",
    description: "Aucune donnée promotionnelle : les tendances rapportées sont celles observées, favorables ou non au marché.",
  },
  {
    icon: Landmark,
    title: "Ancrage Québec et Canada",
    description: "Un focus assumé sur le marché québécois du mid-market, replacé dans son contexte canadien et nord-américain.",
  },
  {
    icon: Handshake,
    title: "Utile aux deux parties",
    description: "Conçu autant pour les gestionnaires de fonds que pour les dirigeants qui envisagent une transaction.",
  },
];

export default function PrivateEquityBulletinsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Finotech Analytics", url: "/finotech-analytics" },
          { name: "Bulletins Private Equity", url: "/finotech-analytics/private-equity" },
        ]}
      />
      <Section tone="navy" className="pb-16 pt-16 md:pt-20">
        <Container>
          <Breadcrumb
            items={[
              { label: "Finotech Analytics", href: "/finotech-analytics" },
              { label: "Private Equity" },
            ]}
          />
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
            <div className="max-w-2xl">
              <p className="kicker">Finotech Analytics · Private Equity</p>
              <h1 className="mt-6 text-display-xl font-display font-medium text-white text-balance">
                Le bulletin trimestriel de private equity.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-anthracite-300">
                Chaque trimestre, Finotech Analytics publie une lecture chiffrée et indépendante du
                marché du capital-investissement au Québec — activité transactionnelle, valorisations,
                levées de fonds et sorties. Sans complaisance, sans langage promotionnel.
              </p>
              <Link
                href="/finotech-analytics/equity-research"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-scarlet-400 hover:text-scarlet-300"
              >
                Voir aussi nos notes Equity Research <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <BulletinSubscribeForm />
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
          <p className="kicker">Archives</p>
          <h2 className="mt-4 text-display-lg font-display font-medium text-navy-900 dark:text-white">
            Tous les bulletins
          </h2>
          <div className="mt-10">
            <BulletinsFilter />
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <CTABanner
            title="Une transaction de private equity à l'horizon ?"
            description="Notre équipe Corporate Finance accompagne acquéreurs, vendeurs et gestionnaires de fonds à chaque étape — évaluation, structuration, diligence."
            primaryLabel="Prendre rendez-vous"
            secondaryLabel="Voir Business Valuation"
            secondaryHref="/solutions/business-valuation"
          />
        </Container>
      </Section>
    </>
  );
}
