import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, TrendingDown, TrendingUp, Minus, ShieldAlert } from "lucide-react";
import {
  RESEARCH_NOTES,
  RESEARCH_DISCLAIMER,
  getResearchNoteBySlug,
  getSortedResearchNotes,
} from "@/lib/data/equity-research";
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
  return RESEARCH_NOTES.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const note = getResearchNoteBySlug(params.slug);
  if (!note) return {};
  return {
    title: `${note.title} | Finotech Analytics`,
    description: note.summary,
    alternates: { canonical: `/finotech-analytics/equity-research/${note.slug}` },
    openGraph: {
      title: note.title,
      description: note.summary,
      url: `${SITE_URL}/finotech-analytics/equity-research/${note.slug}`,
      type: "article",
      publishedTime: note.date,
    },
  };
}

function trendIcon(trend: string) {
  if (trend.trim().startsWith("+")) return <TrendingUp className="h-3.5 w-3.5" />;
  if (trend.trim().startsWith("-")) return <TrendingDown className="h-3.5 w-3.5" />;
  return <Minus className="h-3.5 w-3.5" />;
}

function ratingTone(rating?: string): "navy" | "scarlet" | "anthracite" {
  if (rating === "Achat") return "navy";
  if (rating === "Vendre") return "scarlet";
  return "anthracite";
}

export default function ResearchNotePage({ params }: { params: { slug: string } }) {
  const note = getResearchNoteBySlug(params.slug);
  if (!note) notFound();

  const others = getSortedResearchNotes()
    .filter((n) => n.slug !== note.slug)
    .slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Finotech Analytics", url: "/finotech-analytics" },
          { name: "Equity Research", url: "/finotech-analytics/equity-research" },
          { name: note.title, url: `/finotech-analytics/equity-research/${note.slug}` },
        ]}
      />
      <ArticleJsonLd
        title={note.title}
        description={note.summary}
        url={`/finotech-analytics/equity-research/${note.slug}`}
        datePublished={note.date}
        author={note.analyst}
      />

      <Section tone="navy" className="pb-16 pt-16 md:pt-20">
        <Container>
          <Breadcrumb
            items={[
              { label: "Finotech Analytics", href: "/finotech-analytics" },
              { label: "Equity Research", href: "/finotech-analytics/equity-research" },
              { label: note.ticker ?? note.sector },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="navy" className="bg-white/10 text-white">
                {note.noteType}
              </Badge>
              {note.rating && (
                <Badge tone={ratingTone(note.rating)} className="bg-white/10 text-white">
                  {note.rating}
                </Badge>
              )}
              {note.ticker && (
                <span className="text-xs font-semibold uppercase tracking-wide text-anthracite-400">
                  {note.ticker}
                </span>
              )}
            </div>
            <h1 className="mt-5 text-display-xl font-display font-medium text-white text-balance">
              {note.title}
            </h1>
            <p className="mt-5 text-sm text-anthracite-400">
              {formatDate(note.date)} · {note.readTime} de lecture · {note.analyst}
            </p>
            {(note.priceTarget || note.currentPrice) && (
              <div className="mt-6 flex flex-wrap gap-6 border-t border-white/10 pt-6">
                {note.currentPrice && (
                  <div>
                    <p className="text-xs uppercase tracking-wide text-anthracite-400">Cours actuel</p>
                    <p className="mt-1 font-display text-xl font-medium text-white">{note.currentPrice}</p>
                  </div>
                )}
                {note.priceTarget && (
                  <div>
                    <p className="text-xs uppercase tracking-wide text-anthracite-400">Cible de cours</p>
                    <p className="mt-1 font-display text-xl font-medium text-white">{note.priceTarget}</p>
                  </div>
                )}
                {note.upside && (
                  <div>
                    <p className="text-xs uppercase tracking-wide text-anthracite-400">Potentiel</p>
                    <p className="mt-1 font-display text-xl font-medium text-white">{note.upside}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="flex items-start gap-3 rounded-2xl border border-scarlet-400/30 bg-scarlet-50 p-5 dark:bg-scarlet-900/15">
                <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-scarlet-600 dark:text-scarlet-400" />
                <p className="text-sm leading-relaxed text-anthracite-700 dark:text-anthracite-300">
                  {RESEARCH_DISCLAIMER}
                </p>
              </div>

              <p className="mt-10 text-xl leading-relaxed text-anthracite-700 dark:text-anthracite-300">
                {note.summary}
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {note.keyMetrics.map((m) => (
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
                {note.sections.map((s) => (
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
                {note.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-anthracite-100 px-3 py-1 text-xs text-anthracite-600 dark:bg-white/10 dark:text-anthracite-300"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <Link
                href="/finotech-analytics/equity-research"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-scarlet-600 dark:text-scarlet-400"
              >
                <ArrowLeft className="h-4 w-4" /> Retour à Equity Research
              </Link>
            </div>

            <div className="lg:sticky lg:top-28 lg:self-start">
              <BulletinSubscribeForm
                heading="Recevoir les notes Equity Research"
                description="Une note publiée dès qu'un secteur ou un titre couvert présente un développement significatif."
                successMessage="Merci — vous recevrez les prochaines notes Equity Research dès leur publication."
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <h2 className="font-display text-2xl font-medium text-navy-900 dark:text-white">
            Autres notes
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((n) => (
              <Link
                key={n.slug}
                href={`/finotech-analytics/equity-research/${n.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-anthracite-200/70 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-elevated dark:border-white/10 dark:bg-navy-900"
              >
                <Badge tone={ratingTone(n.rating)}>{n.rating ?? n.noteType}</Badge>
                <h3 className="mt-4 flex-1 font-display text-base font-medium text-navy-900 dark:text-white">
                  {n.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-scarlet-600 dark:text-scarlet-400">
                  Lire la note <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTABanner
            title="Une analyse de titre ou de secteur sur mesure ?"
            description="Discutons de votre contexte lors d'un premier échange stratégique, sans frais ni engagement."
          />
        </Container>
      </Section>
    </>
  );
}
