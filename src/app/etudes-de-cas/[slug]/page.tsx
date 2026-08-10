import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Quote } from "lucide-react";
import { CASE_STUDIES, getCaseStudyBySlug } from "@/lib/data/case-studies";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { CTABanner } from "@/components/ui/CTABanner";
import { Reveal } from "@/components/ui/Reveal";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) return {};
  const description = cs.challenge.slice(0, 155);
  return {
    title: cs.title,
    description,
    alternates: { canonical: `/etudes-de-cas/${cs.slug}` },
    openGraph: { title: cs.title, description, url: `${SITE_URL}/etudes-de-cas/${cs.slug}` },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Études de cas", url: "/etudes-de-cas" }, { name: cs.title, url: `/etudes-de-cas/${cs.slug}` }]}
      />
      <Section tone="navy" className="pb-16 pt-16 md:pt-20">
        <Container>
          <Breadcrumb items={[{ label: "Études de cas", href: "/etudes-de-cas" }, { label: cs.client }]} />
          <div className="mt-8 max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <Badge tone="scarlet">{cs.sector}</Badge>
              <Badge tone="navy" className="bg-white/10 text-white">
                {cs.solution}
              </Badge>
            </div>
            <h1 className="mt-6 text-display-xl font-display font-medium text-white text-balance">{cs.title}</h1>
            <p className="mt-4 text-anthracite-400">{cs.client}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr]">
            <div className="space-y-10">
              <Reveal>
                <div>
                  <p className="kicker">Le défi</p>
                  <p className="mt-4 text-lg leading-relaxed text-anthracite-700 dark:text-anthracite-300">
                    {cs.challenge}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div>
                  <p className="kicker">Notre approche</p>
                  <ul className="mt-4 space-y-4">
                    {cs.approach.map((a, i) => (
                      <li key={a} className="flex gap-4">
                        <span className="font-display text-lg font-medium text-scarlet-500">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="leading-relaxed text-anthracite-700 dark:text-anthracite-300">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              {cs.quote && (
                <Reveal delay={0.12}>
                  <figure className="rounded-2xl border-l-2 border-scarlet-500 bg-anthracite-50/60 p-8 dark:bg-navy-900">
                    <Quote className="h-6 w-6 text-scarlet-500" />
                    <blockquote className="mt-4 font-display text-xl italic leading-relaxed text-navy-900 dark:text-white">
                      « {cs.quote.text} »
                    </blockquote>
                    <figcaption className="mt-4 text-sm text-anthracite-500 dark:text-anthracite-400">
                      {cs.quote.author} — {cs.quote.role}
                    </figcaption>
                  </figure>
                </Reveal>
              )}
            </div>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-anthracite-200/70 bg-white p-8 dark:border-white/10 dark:bg-navy-900">
                <p className="kicker">Résultats</p>
                <div className="mt-6 space-y-6">
                  {cs.results.map((r) => (
                    <div key={r.description} className="border-b border-anthracite-200/70 pb-6 last:border-0 last:pb-0 dark:border-white/10">
                      <p className="font-display text-4xl font-medium text-navy-900 dark:text-white">{r.metric}</p>
                      <p className="mt-1 text-sm text-anthracite-500 dark:text-anthracite-400">{r.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <CTABanner
            title="Un enjeu similaire dans votre organisation ?"
            description="Discutons-en lors d'un premier échange stratégique, sans frais ni engagement."
          />
        </Container>
      </Section>
    </>
  );
}
