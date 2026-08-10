import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "navy",
  className,
}: {
  children: React.ReactNode;
  tone?: "navy" | "scarlet" | "anthracite";
  className?: string;
}) {
  const tones = {
    navy: "bg-navy-900/5 text-navy-800 dark:bg-white/10 dark:text-white",
    scarlet: "bg-scarlet-500/10 text-scarlet-700 dark:text-scarlet-300",
    anthracite: "bg-anthracite-500/10 text-anthracite-700 dark:text-anthracite-300",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
