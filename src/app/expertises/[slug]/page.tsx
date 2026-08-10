import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EXPERTISES, getExpertiseBySlug } from "@/lib/data/expertises";
import { SOLUTIONS } from "@/lib/data/solutions";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { Reveal } from "@/components/ui/Reveal";
import { SolutionCard } from "@/components/sections/SolutionCard";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return EXPERTISES.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const expertise = getExpertiseBySlug(params.slug);
  if (!expertise) return {};
  return {
    title: expertise.metaTitle,
    description: expertise.metaDescription,
    alternates: { canonical: `/expertises/${expertise.slug}` },
    openGraph: { title: expertise.metaTitle, description: expertise.metaDescription, url: `${SITE_URL}/expertises/${expertise.slug}` },
  };
}

export default function ExpertisePage({ params }: { params: { slug: string } }) {
  const expertise = getExpertiseBySlug(params.slug);
  if (!expertise) notFound();

  const relatedSolutions = SOLUTIONS.filter((s) => expertise.relatedSolutions.includes(s.slug));

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Expertises", url: "/expertises" }, { name: expertise.name, url: `/expertises/${expertise.slug}` }]} />
      <ServiceJsonLd name={expertise.name} description={expertise.metaDescription} url={`/expertises/${expertise.slug}`} />

      <Section tone="navy" className="pb-16 pt-16 md:pt-20">
        <Container>
          <Breadcrumb items={[{ label: "Expertises", href: "/expertises" }, { label: expertise.shortName }]} />
          <div className="mt-8 max-w-3xl">
            <p className="kicker">Expertise</p>
            <h1 className="mt-6 text-display-xl font-display font-medium text-white text-balance">
              {expertise.name}
            </h1>
            <p className="mt-6 text-xl italic text-scarlet-400">{expertise.heroStatement}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-6">
              {expertise.description.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="text-lg leading-relaxed text-anthracite-700 dark:text-anthracite-300">{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-anthracite-200/70 bg-anthracite-50/60 p-8 dark:border-white/10 dark:bg-navy-900">
                <h3 className="font-display text-lg font-medium text-navy-900 dark:text-white">
                  Solutions associées
                </h3>
                <ul className="mt-4 space-y-3">
                  {relatedSolutions.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/solutions/${s.slug}`}
                        className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm font-medium text-navy-800 hover:bg-white dark:text-anthracite-200 dark:hover:bg-white/5"
                      >
                        {s.name}
                        <ArrowUpRight className="h-3.5 w-3.5 text-scarlet-500" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <h2 className="text-display-lg font-display font-medium text-navy-900 dark:text-white">
            Nos capacités
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {expertise.capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="border-l-2 border-scarlet-500 pl-6">
                  <h3 className="font-display text-lg font-medium text-navy-900 dark:text-white">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                    {c.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {relatedSolutions.length > 0 && (
        <Section>
          <Container>
            <h2 className="text-display-lg font-display font-medium text-navy-900 dark:text-white">
              Solutions liées à cette expertise
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {relatedSolutions.map((s, i) => (
                <SolutionCard key={s.slug} solution={s} index={i} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section tone="muted">
        <Container>
          <CTABanner
            title={`Un enjeu lié à ${expertise.shortName} ?`}
            description="Discutons de votre contexte lors d'un premier échange stratégique, sans frais ni engagement."
          />
        </Container>
      </Section>
    </>
  );
}
