import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, TrendingDown, TrendingUp, Minus } from "lucide-react";
import { BULLETINS, getBulletinBySlug, getSortedBulletins } from "@/lib/data/analytics-bulletins";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { CTABanner } from "@/components/ui/CTABanner";
import { Reveal } from "@/components/ui/Reveal";
import { BulletinSubscribeForm } from "@/components/sections/BulletinSubscribeForm";
import { formatDate } from "@/lib/utils";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return BULLETINS.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const bulletin = getBulletinBySlug(params.slug);
  if (!bulletin) return {};
  return {
    title: `${bulletin.title} | Finotech Analytics`,
    description: bulletin.summary,
    alternates: { canonical: `/finotech-analytics/private-equity/${bulletin.slug}` },
    openGraph: {
      title: bulletin.title,
      description: bulletin.summary,
      url: `${SITE_URL}/finotech-analytics/private-equity/${bulletin.slug}`,
      type: "article",
      publishedTime: bulletin.date,
    },
  };
}

function trendIcon(trend: string) {
  if (trend.trim().startsWith("+")) return <TrendingUp className="h-3.5 w-3.5" />;
  if (trend.trim().startsWith("-")) return <TrendingDown className="h-3.5 w-3.5" />;
  return <Minus className="h-3.5 w-3.5" />;
}

export default function BulletinPage({ params }: { params: { slug: string } }) {
  const bulletin = getBulletinBySlug(params.slug);
  if (!bulletin) notFound();

  const others = getSortedBulletins()
    .filter((b) => b.slug !== bulletin.slug)
    .slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Finotech Analytics", url: "/finotech-analytics" },
          { name: "Private Equity", url: "/finotech-analytics/private-equity" },
          { name: bulletin.title, url: `/finotech-analytics/private-equity/${bulletin.slug}` },
        ]}
      />
      <ArticleJsonLd
        title={bulletin.title}
        description={bulletin.summary}
        url={`/finotech-analytics/private-equity/${bulletin.slug}`}
        datePublished={bulletin.date}
        author={bulletin.author}
      />

      <Section tone="navy" className="pb-16 pt-16 md:pt-20">
        <Container>
          <Breadcrumb
            items={[
              { label: "Finotech Analytics", href: "/finotech-analytics" },
              { label: "Private Equity", href: "/finotech-analytics/private-equity" },
              { label: bulletin.period },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone={bulletin.category === "Note spéciale" ? "scarlet" : "navy"} className="bg-white/10 text-white">
                {bulletin.category}
              </Badge>
              <span className="text-xs font-semibold uppercase tracking-wide text-anthracite-400">
                {bulletin.period}
              </span>
            </div>
            <h1 className="mt-5 text-display-xl font-display font-medium text-white text-balance">
              {bulletin.title}
            </h1>
            <p className="mt-5 text-sm text-anthracite-400">
              {formatDate(bulletin.date)} · {bulletin.readTime} de lecture · {bulletin.author}
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-xl leading-relaxed text-anthracite-700 dark:text-anthracite-300">
                {bulletin.summary}
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {bulletin.keyMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-anthracite-200/70 p-5 dark:border-white/10"
                  >
                    <p className="font-display text-2xl font-medium text-navy-900 dark:text-white sm:text-3xl">
                      {m.value}
                    </p>
                    <p className="mt-1 text-xs text-anthracite-500 dark:text-anthracite-400">{m.label}</p>
                    <p
                      className={`mt-2 flex items-center gap-1 text-xs font-semibold ${
                        m.trend.trim().startsWith("+")
                          ? "text-emerald-600 dark:text-emerald-400"
                          : m.trend.trim().startsWith("-")
                            ? "text-scarlet-600 dark:text-scarlet-400"
                            : "text-anthracite-500"
                      }`}
                    >
                      {trendIcon(m.trend)} {m.trend}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 space-y-10">
                {bulletin.sections.map((s) => (
                  <Reveal key={s.heading}>
                    <h2 className="font-display text-2xl font-medium text-navy-900 dark:text-white">
                      {s.heading}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {s.paragraphs.map((p, i) => (
                        <p key={i} className="leading-relaxed text-anthracite-700 dark:text-anthracite-300">
                          {p}
                        </p>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {bulletin.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-anthracite-100 px-3 py-1 text-xs text-anthracite-600 dark:bg-white/10 dark:text-anthracite-300"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <Link
                href="/finotech-analytics/private-equity"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-scarlet-600 dark:text-scarlet-400"
              >
                <ArrowLeft className="h-4 w-4" /> Retour aux bulletins Private Equity
              </Link>
            </div>

            <div className="lg:sticky lg:top-28 lg:self-start">
              <BulletinSubscribeForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <h2 className="font-display text-2xl font-medium text-navy-900 dark:text-white">
            Bulletins précédents
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((b) => (
              <Link
                key={b.slug}
                href={`/finotech-analytics/private-equity/${b.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-anthracite-200/70 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-elevated dark:border-white/10 dark:bg-navy-900"
              >
                <Badge tone={b.category === "Note spéciale" ? "scarlet" : "navy"}>{b.period}</Badge>
                <h3 className="mt-4 flex-1 font-display text-base font-medium text-navy-900 dark:text-white">
                  {b.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-scarlet-600 dark:text-scarlet-400">
                  Lire le bulletin <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTABanner
            title="Une décision de transaction à valider avec des données de marché à jour ?"
            description="Discutons de votre contexte lors d'un premier échange stratégique, sans frais ni engagement."
          />
        </Container>
      </Section>
    </>
  );
}
