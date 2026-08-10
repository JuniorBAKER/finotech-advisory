import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-1.5 text-sm text-anthracite-500 dark:text-anthracite-400">
      <Link href="/" className="hover:text-navy-900 dark:hover:text-white">
        Accueil
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5" />
          {item.href ? (
            <Link href={item.href} className="hover:text-navy-900 dark:hover:text-white">
              {item.label}
            </Link>
          ) : (
            <span className="text-navy-800 dark:text-white">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
