import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { INSIGHTS, getInsightBySlug } from "@/lib/data/insights";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { CTABanner } from "@/components/ui/CTABanner";
import { formatDate } from "@/lib/utils";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const insight = getInsightBySlug(params.slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.excerpt,
    alternates: { canonical: `/insights/${insight.slug}` },
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      url: `${SITE_URL}/insights/${insight.slug}`,
      type: "article",
      publishedTime: insight.date,
    },
  };
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const insight = getInsightBySlug(params.slug);
  if (!insight) notFound();

  const related = INSIGHTS.filter((i) => i.slug !== insight.slug && i.category === insight.category).slice(0, 3);
  const others = related.length > 0 ? related : INSIGHTS.filter((i) => i.slug !== insight.slug).slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Insights", url: "/insights" }, { name: insight.title, url: `/insights/${insight.slug}` }]} />
      <ArticleJsonLd
        title={insight.title}
        description={insight.excerpt}
        url={`/insights/${insight.slug}`}
        datePublished={insight.date}
        author={insight.author}
      />

      <Section tone="navy" className="pb-16 pt-16 md:pt-20">
        <Container>
          <Breadcrumb items={[{ label: "Insights", href: "/insights" }, { label: insight.category }]} />
          <div className="mt-8 max-w-3xl">
            <Badge tone="scarlet">{insight.category}</Badge>
            <h1 className="mt-5 text-display-xl font-display font-medium text-white text-balance">
              {insight.title}
            </h1>
            <p className="mt-5 text-sm text-anthracite-400">
              {formatDate(insight.date)} · {insight.readTime} de lecture · {insight.author}
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-2xl">
            <p className="text-xl leading-relaxed text-anthracite-700 dark:text-anthracite-300">
              {insight.excerpt}
            </p>
            <div className="prose prose-lg mt-8 max-w-none dark:prose-invert prose-p:leading-relaxed prose-headings:font-display">
              {insight.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {insight.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-anthracite-100 px-3 py-1 text-xs text-anthracite-600 dark:bg-white/10 dark:text-anthracite-300"
                >
                  #{t}
                </span>
              ))}
            </div>
            <Link
              href="/insights"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-scarlet-600 dark:text-scarlet-400"
            >
              <ArrowLeft className="h-4 w-4" /> Retour aux Insights
            </Link>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <h2 className="font-display text-2xl font-medium text-navy-900 dark:text-white">
            À lire également
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((i) => (
              <Link
                key={i.slug}
                href={`/insights/${i.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-anthracite-200/70 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-elevated dark:border-white/10 dark:bg-navy-900"
              >
                <Badge tone="scarlet">{i.category}</Badge>
                <h3 className="mt-4 flex-1 font-display text-base font-medium text-navy-900 dark:text-white">
                  {i.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-scarlet-600 dark:text-scarlet-400">
                  Lire l&apos;article <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTABanner
            title="Cette analyse résonne avec un enjeu que vous vivez actuellement ?"
            description="Discutons-en lors d'un premier échange stratégique, sans frais ni engagement."
          />
        </Container>
      </Section>
    </>
  );
}
