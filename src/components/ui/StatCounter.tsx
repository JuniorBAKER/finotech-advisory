"use client";

import { Reveal } from "./Reveal";

export function StatCounter({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 0.08}>
          <div className="border-l-2 border-scarlet-500 pl-5">
            <p className="font-display text-4xl font-medium text-navy-900 dark:text-white md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-anthracite-600 dark:text-anthracite-300">{stat.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
