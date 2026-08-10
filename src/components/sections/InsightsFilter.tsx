"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowUpRight } from "lucide-react";
import { INSIGHTS, INSIGHT_CATEGORIES } from "@/lib/data/insights";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function InsightsFilter() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tous");

  const filtered = useMemo(() => {
    return INSIGHTS.filter((insight) => {
      const matchesCategory = category === "Tous" || insight.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        insight.title.toLowerCase().includes(query.toLowerCase()) ||
        insight.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        insight.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-anthracite-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un article..."
            aria-label="Rechercher dans les Insights"
            className="w-full rounded-full border border-anthracite-200 bg-white py-2.5 pl-11 pr-4 text-sm focus:border-scarlet-400 focus:outline-none dark:border-white/10 dark:bg-navy-900"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {INSIGHT_CATEGORIES.map((c) => (
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
          Aucun article ne correspond à votre recherche. Essayez un autre mot-clé ou une autre catégorie.
        </p>
      ) : (
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((insight, i) => (
            <Reveal key={insight.slug} delay={i * 0.05}>
              <Link
                href={`/insights/${insight.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-anthracite-200/70 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated dark:border-white/10 dark:bg-navy-900"
              >
                <Badge tone="scarlet">{insight.category}</Badge>
                <h3 className="mt-4 font-display text-lg font-medium leading-snug text-navy-900 dark:text-white">
                  {insight.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                  {insight.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-anthracite-200/70 pt-4 text-xs text-anthracite-500 dark:border-white/10 dark:text-anthracite-400">
                  <span>
                    {formatDate(insight.date)} · {insight.readTime} de lecture
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-scarlet-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
