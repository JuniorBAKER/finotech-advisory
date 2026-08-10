import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { StatCounter } from "@/components/ui/StatCounter";
import { CTABanner } from "@/components/ui/CTABanner";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY, STATS, VALUES } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Finotech Advisory Inc. est un cabinet de conseil stratégique en finance, business intelligence et performance organisationnelle. Découvrez notre mission, notre vision et nos valeurs.",
  alternates: { canonical: "/a-propos" },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "À propos", url: "/a-propos" }]} />
      <Section tone="navy" className="pb-20 pt-16 md:pt-20">
        <Container>
          <Breadcrumb items={[{ label: "À propos" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="kicker">À propos de Finotech Advisory</p>
            <h1 className="mt-6 text-display-xl font-display font-medium text-white text-balance">
              Un cabinet construit pour une seule chose : améliorer vos décisions les plus critiques.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-anthracite-300">{COMPANY.description}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal>
              <p className="kicker">Notre mission</p>
              <h2 className="mt-4 font-display text-2xl font-medium text-navy-900 dark:text-white">
                {COMPANY.mission}
              </h2>
              <p className="mt-5 leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                Nous croyons que la majorité des décisions d&apos;affaires ratées ne proviennent pas d&apos;un
                manque d&apos;ambition, mais d&apos;un manque de clarté financière au moment où la décision
                est prise. Notre rôle est de fournir cette clarté — avant, et non après.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="kicker">Notre vision</p>
              <h2 className="mt-4 font-display text-2xl font-medium text-navy-900 dark:text-white">
                {COMPANY.vision}
              </h2>
              <p className="mt-5 leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                Nous mesurons notre réussite à celle de nos clients : mandats reconduits, décisions
                mieux exécutées, capital mieux alloué. Devenir une référence se gagne mandat après mandat,
                jamais par une campagne de communication.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            kicker="Notre positionnement"
            title="Ce que nous sommes — et ce que nous ne sommes pas."
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-anthracite-200/70 bg-white p-8 dark:border-white/10 dark:bg-navy-900">
              <h3 className="font-display text-lg font-medium text-navy-900 dark:text-white">
                Finotech n&apos;est pas
              </h3>
              <ul className="mt-4 space-y-3 text-anthracite-600 dark:text-anthracite-300">
                <li>Un cabinet comptable de tenue de livres</li>
                <li>Une firme d&apos;audit ou de certification</li>
                <li>Un généraliste qui touche à tout superficiellement</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-scarlet-500/30 bg-scarlet-500/5 p-8">
              <h3 className="font-display text-lg font-medium text-navy-900 dark:text-white">
                Finotech est
              </h3>
              <ul className="mt-4 space-y-3 text-anthracite-700 dark:text-anthracite-200">
                <li>Un cabinet de conseil stratégique spécialisé</li>
                <li>Expert en Business Intelligence, Business Strategy, Corporate Finance et Training and Research</li>
                <li>Un partenaire de décision pour dirigeants, conseils d&apos;administration et investisseurs</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading kicker="Nos valeurs" title="Six principes qui orientent chaque mandat." className="mb-14" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.05}>
                <div>
                  <span className="font-display text-3xl font-medium text-scarlet-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-medium text-navy-900 dark:text-white">{v.name}</h3>
                  <p className="mt-2 leading-relaxed text-anthracite-600 dark:text-anthracite-300">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <StatCounter stats={STATS} />
        </Container>
      </Section>

      <Section>
        <Container>
          <CTABanner
            title="Envie de discuter de votre contexte avec notre équipe ?"
            description="Un premier échange de 30 minutes, sans frais, pour clarifier vos enjeux et nos possibilités de collaboration."
          />
        </Container>
      </Section>
    </>
  );
}
