import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { SOLUTIONS, getSolutionBySlug } from "@/lib/data/solutions";
import { EXPERTISES } from "@/lib/data/expertises";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { CTABanner } from "@/components/ui/CTABanner";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { SolutionCard } from "@/components/sections/SolutionCard";
import { BreadcrumbJsonLd, FAQJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) return {};
  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    alternates: { canonical: `/solutions/${solution.slug}` },
    openGraph: { title: solution.metaTitle, description: solution.metaDescription, url: `${SITE_URL}/solutions/${solution.slug}` },
  };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) notFound();

  const expertise = EXPERTISES.find((e) => e.slug === solution.category);
  const otherSolutions = SOLUTIONS.filter((s) => s.slug !== solution.slug && s.category === solution.category).slice(0, 3);
  const fallbackSolutions = otherSolutions.length > 0 ? otherSolutions : SOLUTIONS.filter((s) => s.slug !== solution.slug).slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Solutions", url: "/solutions" }, { name: solution.name, url: `/solutions/${solution.slug}` }]} />
      <ServiceJsonLd name={solution.name} description={solution.metaDescription} url={`/solutions/${solution.slug}`} />
      <FAQJsonLd items={solution.faq} />

      {/* Hero */}
      <Section tone="navy" className="pb-16 pt-16 md:pt-20">
        <Container>
          <Breadcrumb items={[{ label: "Solutions", href: "/solutions" }, { label: solution.name }]} />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div className="max-w-2xl">
              {expertise && <Badge tone="scarlet">{expertise.shortName}</Badge>}
              <h1 className="mt-5 text-display-xl font-display font-medium text-white text-balance">
                {solution.name}
              </h1>
              <p className="mt-5 text-xl italic text-anthracite-300">{solution.tagline}</p>
              <p className="mt-6 text-lg leading-relaxed text-anthracite-300">{solution.summary}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <p className="font-display text-4xl font-medium text-scarlet-400">{solution.heroStat.value}</p>
              <p className="mt-2 text-sm text-anthracite-300">{solution.heroStat.label}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section>
        <Container>
          <p className="kicker">Bénéfices</p>
          <h2 className="mt-4 text-display-lg font-display font-medium text-navy-900 dark:text-white">
            Ce que ce mandat change concrètement
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {solution.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.06}>
                <div className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-scarlet-500" />
                  <div>
                    <h3 className="font-display text-lg font-medium text-navy-900 dark:text-white">{b.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                      {b.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Methodology */}
      <Section tone="muted">
        <Container>
          <p className="kicker">Méthodologie</p>
          <h2 className="mt-4 text-display-lg font-display font-medium text-navy-900 dark:text-white">
            Comment nous procédons
          </h2>
          <div className="mt-12">
            <ProcessSteps steps={solution.methodology} />
          </div>
        </Container>
      </Section>

      {/* Deliverables + Results */}
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="kicker">Livrables</p>
              <h2 className="mt-4 font-display text-2xl font-medium text-navy-900 dark:text-white">
                Ce que vous recevez
              </h2>
              <ul className="mt-6 space-y-3">
                {solution.deliverables.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-scarlet-500" />
                    <span className="leading-relaxed text-anthracite-700 dark:text-anthracite-300">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="kicker">Résultats observés</p>
              <h2 className="mt-4 font-display text-2xl font-medium text-navy-900 dark:text-white">
                L&apos;impact mesuré chez nos clients
              </h2>
              <div className="mt-6 grid grid-cols-2 gap-6">
                {solution.results.map((r) => (
                  <div key={r.description} className="rounded-2xl border border-anthracite-200/70 p-6 dark:border-white/10">
                    <p className="font-display text-3xl font-medium text-navy-900 dark:text-white">{r.metric}</p>
                    <p className="mt-1.5 text-sm text-anthracite-500 dark:text-anthracite-400">{r.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="muted">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="kicker">Questions fréquentes</p>
            <h2 className="mt-4 font-display text-2xl font-medium text-navy-900 dark:text-white">
              À propos de {solution.name}
            </h2>
            <div className="mt-6">
              <FAQAccordion items={solution.faq} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Related solutions */}
      <Section>
        <Container>
          <h2 className="text-display-lg font-display font-medium text-navy-900 dark:text-white">
            Solutions complémentaires
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {fallbackSolutions.map((s, i) => (
              <SolutionCard key={s.slug} solution={s} index={i} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <CTABanner title={solution.cta.title} description={solution.cta.description} />
        </Container>
      </Section>
    </>
  );
}
