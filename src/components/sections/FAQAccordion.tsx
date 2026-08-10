"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-anthracite-200/70 dark:divide-white/10">
      {items.map((item, i) => (
        <div key={item.question} className="py-2">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-4 text-left"
            aria-expanded={open === i}
          >
            <span className="font-display text-lg font-medium text-navy-900 dark:text-white">
              {item.question}
            </span>
            <Plus
              className={cn(
                "h-5 w-5 shrink-0 text-scarlet-500 transition-transform duration-300",
                open === i && "rotate-45"
              )}
            />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-5 pr-10 leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
