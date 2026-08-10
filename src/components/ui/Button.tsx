import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-premium focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants = {
  primary:
    "bg-navy-900 text-white hover:bg-navy-700 shadow-soft hover:shadow-elevated dark:bg-white dark:text-navy-900 dark:hover:bg-anthracite-100",
  scarlet: "bg-scarlet-600 text-white hover:bg-scarlet-700 shadow-scarlet",
  outline:
    "border border-navy-900/20 text-navy-900 hover:border-navy-900 hover:bg-navy-900/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10",
  ghost: "text-navy-900 hover:bg-navy-900/5 dark:text-white dark:hover:bg-white/10",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type CommonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  withArrow?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type ButtonProps =
  | (CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  | (CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined });

export function Button({
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
        {withArrow && <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {withArrow && <ArrowUpRight className="h-4 w-4" />}
    </button>
  );
}
