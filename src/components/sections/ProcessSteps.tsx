import { Reveal } from "@/components/ui/Reveal";

type Step = {
  step: string;
  title: string;
  description: string;
  duration?: string;
  outputs?: string[];
};

export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="relative">
      <div className="absolute left-6 top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-scarlet-500/60 via-anthracite-300 to-transparent dark:via-white/10 md:block" />
      <div className="space-y-10">
        {steps.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.06}>
            <div className="relative flex gap-6 md:gap-8">
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-semibold text-scarlet-400 dark:bg-white dark:text-navy-900">
                {s.step}
              </div>
              <div className="flex-1 pb-2">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-display text-xl font-medium text-navy-900 dark:text-white">{s.title}</h3>
                  {s.duration && (
                    <span className="text-xs font-semibold uppercase tracking-wide text-scarlet-600 dark:text-scarlet-400">
                      {s.duration}
                    </span>
                  )}
                </div>
                <p className="mt-2 max-w-2xl leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                  {s.description}
                </p>
                {s.outputs && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {s.outputs.map((o) => (
                      <li
                        key={o}
                        className="rounded-full bg-anthracite-100 px-3 py-1 text-xs text-anthracite-600 dark:bg-white/10 dark:text-anthracite-300"
                      >
                        {o}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
