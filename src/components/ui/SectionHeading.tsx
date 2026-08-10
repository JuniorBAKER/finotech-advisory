import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
  tone = "default",
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  tone?: "default" | "inverted";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {kicker && <p className="kicker mb-4">{kicker}</p>}
      <h2
        className={cn(
          "text-display-lg font-display font-medium text-balance",
          tone === "inverted" ? "text-white" : "text-navy-900 dark:text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            tone === "inverted" ? "text-anthracite-200" : "text-anthracite-600 dark:text-anthracite-300"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
