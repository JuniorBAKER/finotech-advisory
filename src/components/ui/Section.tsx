import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  tone?: "default" | "muted" | "navy";
};

export function Section({ className, tone = "default", ...props }: SectionProps) {
  const toneClasses = {
    default: "bg-paper dark:bg-navy-950",
    muted: "bg-anthracite-50/60 dark:bg-navy-900/60",
    navy: "bg-navy-900 text-white dark:bg-navy-950",
  } as const;

  return (
    <section
      className={cn("py-20 md:py-28", toneClasses[tone], className)}
      {...props}
    />
  );
}
