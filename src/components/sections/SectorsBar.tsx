import { SECTORS } from "@/lib/data/sectors";

export function SectorsBar() {
  const items = [...SECTORS, ...SECTORS];
  return (
    <div className="overflow-hidden border-y border-anthracite-200/70 bg-anthracite-50/60 py-6 dark:border-white/10 dark:bg-navy-900/40">
      <div className="mask-fade-r flex w-max animate-marquee gap-10">
        {items.map((s, i) => (
          <span
            key={`${s.slug}-${i}`}
            className="whitespace-nowrap text-sm font-medium uppercase tracking-wide text-anthracite-500 dark:text-anthracite-400"
          >
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}
