import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group rounded-2xl border border-anthracite-200/70 bg-white p-8 transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-elevated dark:border-white/10 dark:bg-navy-900",
        className
      )}
      {...props}
    />
  );
}
