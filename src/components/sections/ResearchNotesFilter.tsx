"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowUpRight } from "lucide-react";
import { RESEARCH_NOTES, RESEARCH_CATEGORIES, getSortedResearchNotes } from "@/lib/data/equity-research";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

function ratingTone(rating?: string): "navy" | "scarlet" | "anthracite" {
  if (rating === "Achat") return "navy";
  if (rating === "Vendre") return "scarlet";
  return "anthracite";
}

export function ResearchNotesFilter() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Toutes");

  const sorted = useMemo(() => getSortedResearchNotes(), []);

  const filtered = useMemo(() => {
    return sorted.filter((n) => {
      const matchesCategory = category === "Toutes" || n.noteType === category;
      const matchesQuery =
        query.trim().length === 0 ||
        n.title.toLowerCase().includes(query.toLowerCase()) ||
        n.summary.toLowerCase().includes(query.toLowerCase()) ||
        n.sector.toLowerCase().includes(query.toLowerCase()) ||
        (n.ticker?.toLowerCase().includes(query.toLowerCase()) ?? false) ||
        n.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [query, category, sorted]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-anthracite-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher une note, un secteur, un titre..."
            aria-label="Rechercher dans les notes Equity Research"
            className="w-full rounded-full border border-anthracite-200 bg-white py-2.5 pl-11 pr-4 text-sm focus:border-scarlet-400 focus:outline-none dark:border-white/10 dark:bg-navy-900"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {RESEARCH_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
                category === c
                  ? "bg-navy-900 text-white dark:bg-white dark:text-navy-900"
                  : "bg-anthracite-100 text-anthracite-600 hover:bg-anthracite-200 dark:bg-white/10 dark:text-anthracite-300"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-anthracite-500 dark:text-anthracite-400">
          Aucune note ne correspond à votre recherche. Essayez un autre mot-clé ou une autre catégorie.
        </p>
      ) : (
        <div className="mt-12 space-y-6">
          {filtered.map((n, i) => (
            <Reveal key={n.slug} delay={i * 0.05}>
              <Link
                href={`/finotech-analytics/equity-research/${n.slug}`}
                className="group grid gap-6 rounded-2xl border border-anthracite-200/70 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated dark:border-white/10 dark:bg-navy-900 md:grid-cols-[1fr_auto] md:items-center md:p-8"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone="navy">{n.noteType}</Badge>
                    {n.rating && <Badge tone={ratingTone(n.rating)}>{n.rating}</Badge>}
                    {n.ticker && (
                      <span className="text-xs font-semibold uppercase tracking-wide text-anthracite-500 dark:text-anthracite-400">
                        {n.ticker}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-medium leading-snug text-navy-900 dark:text-white">
                    {n.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                    {n.summary}
                  </p>
                  <p className="mt-4 text-xs text-anthracite-500 dark:text-anthracite-400">
                    {formatDate(n.date)} · {n.readTime} de lecture · {n.sector}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-scarlet-600 dark:text-scarlet-400 md:flex-col md:items-end md:gap-1">
                  {n.priceTarget && (
                    <span className="text-xs font-normal text-anthracite-500 dark:text-anthracite-400">
                      Cible {n.priceTarget}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    Lire la note <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
