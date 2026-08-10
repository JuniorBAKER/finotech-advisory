import Link from "next/link";
import { ArrowUpRight, BarChart3, Target, Landmark, GraduationCap } from "lucide-react";
import { EXPERTISES } from "@/lib/data/expertises";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "business-intelligence-data-analysis": BarChart3,
  "business-strategy": Target,
  "corporate-finance": Landmark,
  "training-and-research": GraduationCap,
};

export function ExpertiseGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {EXPERTISES.map((expertise, i) => {
        const Icon = ICONS[expertise.slug] ?? Target;
        return (
          <Reveal key={expertise.slug} delay={i * 0.08}>
            <Link href={`/expertises/${expertise.slug}`} className="block h-full">
              <Card className="flex h-full flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900/5 text-navy-800 dark:bg-white/10 dark:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-medium text-navy-900 dark:text-white">
                  {expertise.name}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                  {expertise.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-scarlet-600 dark:text-scarlet-400">
                  En savoir plus
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Card>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
