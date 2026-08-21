import { Download, FileText } from "lucide-react";
import { getSortedMarketReviews } from "@/lib/data/market-reviews";
import { formatDate } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function MarketReviewsDownloads() {
  const reviews = getSortedMarketReviews();

  return (
    <div className="divide-y divide-anthracite-200/70 overflow-hidden rounded-2xl border border-anthracite-200/70 dark:divide-white/10 dark:border-white/10">
      {reviews.map((r, i) => (
        <Reveal key={r.slug} delay={i * 0.03}>
          <a
            href={r.file}
            download
            className="group flex items-center gap-4 bg-white p-5 transition-colors hover:bg-anthracite-50 dark:bg-navy-900 dark:hover:bg-white/5 sm:p-6"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900/5 text-navy-800 dark:bg-white/10 dark:text-white">
              <FileText className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-anthracite-500 dark:text-anthracite-400">
                {formatDate(r.date)}
              </p>
              <h3 className="mt-1 truncate font-display text-base font-medium text-navy-900 dark:text-white">
                {r.title}
              </h3>
              <p className="mt-1 truncate text-sm text-anthracite-600 dark:text-anthracite-300">
                {r.highlights}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-scarlet-600 dark:text-scarlet-400">
              <span className="hidden sm:inline">{r.fileSize}</span>
              <span className="flex items-center gap-1.5 rounded-full bg-scarlet-50 px-3 py-1.5 transition-transform group-hover:-translate-y-0.5 dark:bg-scarlet-900/20">
                <Download className="h-3.5 w-3.5" /> PDF
              </span>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
