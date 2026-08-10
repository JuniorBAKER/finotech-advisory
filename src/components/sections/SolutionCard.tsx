import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Solution } from "@/lib/data/solutions";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { EXPERTISES } from "@/lib/data/expertises";

export function SolutionCard({ solution, index = 0 }: { solution: Solution; index?: number }) {
  const category = EXPERTISES.find((e) => e.slug === solution.category);
  return (
    <Reveal delay={index * 0.06}>
      <Link href={`/solutions/${solution.slug}`} className="block h-full">
        <Card className="flex h-full flex-col">
          {category && <Badge tone="scarlet">{category.shortName}</Badge>}
          <h3 className="mt-5 font-display text-xl font-medium text-navy-900 dark:text-white">
            {solution.name}
          </h3>
          <p className="mt-3 flex-1 leading-relaxed text-anthracite-600 dark:text-anthracite-300">
            {solution.tagline}
          </p>
          <div className="mt-6 flex items-center justify-between border-t border-anthracite-200/70 pt-5 dark:border-white/10">
            <div>
              <p className="font-display text-lg font-medium text-navy-900 dark:text-white">
                {solution.heroStat.value}
              </p>
              <p className="text-xs text-anthracite-500 dark:text-anthracite-400">{solution.heroStat.label}</p>
            </div>
            <ArrowUpRight className="h-5 w-5 text-scarlet-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </Card>
      </Link>
    </Reveal>
  );
}
