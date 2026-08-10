import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data/testimonials";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {TESTIMONIALS.map((t, i) => (
        <Reveal key={t.author} delay={i * 0.08}>
          <figure className="h-full rounded-2xl border border-anthracite-200/70 bg-white p-8 dark:border-white/10 dark:bg-navy-900">
            <Quote className="h-6 w-6 text-scarlet-500" />
            <blockquote className="mt-4 font-display text-lg italic leading-relaxed text-navy-900 dark:text-white">
              « {t.quote} »
            </blockquote>
            <figcaption className="mt-6 text-sm text-anthracite-500 dark:text-anthracite-400">
              <span className="font-semibold text-navy-800 dark:text-anthracite-200">{t.author}</span> — {t.role}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
