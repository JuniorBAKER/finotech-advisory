import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function CTABanner({
  title,
  description,
  primaryLabel = "Prendre rendez-vous",
  primaryHref = "/rendez-vous",
  secondaryLabel = "Nous contacter",
  secondaryHref = "/contact",
}: {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-8 py-16 text-center dark:bg-navy-900 sm:px-16">
      <div className="absolute inset-0 bg-grid-faint bg-[length:32px_32px] opacity-40" />
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-scarlet-500/20 blur-3xl" />
      <Reveal className="relative mx-auto max-w-2xl">
        <h2 className="text-display-lg font-display font-medium text-white text-balance">{title}</h2>
        <p className="mt-4 text-lg text-anthracite-200">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href={primaryHref} variant="scarlet" size="lg" withArrow>
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
            {secondaryLabel}
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
