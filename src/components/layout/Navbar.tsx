"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV } from "@/lib/constants";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 shadow-soft backdrop-blur-md dark:bg-navy-950/90"
          : "bg-paper/0 dark:bg-navy-950/0"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Finotech Advisory — Accueil">
          <Image
            src="/logo-icon.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-tight text-navy-900 dark:text-white">
            Finotech<span className="text-scarlet-500"> Advisory</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setOpenMenu(null)}>
          {NAV.filter((item) => item.label !== "Contact").map((item) => (
            <div key={item.href} className="relative" onMouseEnter={() => item.children && setOpenMenu(item.label)}>
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-navy-800 transition-colors hover:bg-navy-900/5 dark:text-anthracite-200 dark:hover:bg-white/10"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>

              <AnimatePresence>
                {item.children && openMenu === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 top-full z-50 mt-2 w-[380px] -translate-x-1/2 rounded-2xl border border-anthracite-200/70 bg-white p-3 shadow-elevated dark:border-white/10 dark:bg-navy-900"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-4 py-3 transition-colors hover:bg-navy-900/5 dark:hover:bg-white/5"
                      >
                        <p className="text-sm font-semibold text-navy-900 dark:text-white">{child.label}</p>
                        {child.description && (
                          <p className="mt-0.5 text-xs text-anthracite-500 dark:text-anthracite-400">
                            {child.description}
                          </p>
                        )}
                      </Link>
                    ))}
                    <Link
                      href={item.href}
                      className="mt-1 block rounded-xl px-4 py-2.5 text-sm font-semibold text-scarlet-600 hover:bg-scarlet-500/5 dark:text-scarlet-400"
                    >
                      Voir tout {item.label.toLowerCase()} →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button href="/contact" variant="ghost" size="sm">
            Contact
          </Button>
          <Button href="/rendez-vous" variant="primary" size="sm">
            Prendre rendez-vous
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Ouvrir le menu"
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-navy-900 dark:text-white"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>{mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}</AnimatePresence>
    </header>
  );
}
