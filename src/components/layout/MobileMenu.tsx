"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { NAV } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function MobileMenu({ onClose }: { onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-paper dark:bg-navy-950 lg:hidden"
    >
      <div className="container flex h-20 items-center justify-between">
        <span className="font-display text-lg font-semibold text-navy-900 dark:text-white">Menu</span>
        <button
          aria-label="Fermer le menu"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy-900 dark:text-white"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <motion.nav
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="container flex max-h-[calc(100vh-160px)] flex-col gap-1 overflow-y-auto pb-8"
      >
        {NAV.map((item) => (
          <div key={item.href} className="border-b border-anthracite-200/60 py-2 dark:border-white/10">
            <div className="flex items-center justify-between">
              <Link href={item.href} className="py-3 text-lg font-medium text-navy-900 dark:text-white">
                {item.label}
              </Link>
              {item.children && (
                <button
                  onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                  className="p-3 text-anthracite-500"
                  aria-label={`Déplier ${item.label}`}
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${expanded === item.label ? "rotate-180" : ""}`}
                  />
                </button>
              )}
            </div>
            {item.children && expanded === item.label && (
              <div className="ml-2 flex flex-col gap-1 pb-3">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="rounded-lg px-3 py-2 text-sm text-anthracite-600 hover:bg-navy-900/5 dark:text-anthracite-300 dark:hover:bg-white/5"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="mt-6 flex flex-col gap-3">
          <Button href="/rendez-vous" variant="primary" size="lg">
            Prendre rendez-vous
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Nous contacter
          </Button>
        </div>
      </motion.nav>
    </motion.div>
  );
}
