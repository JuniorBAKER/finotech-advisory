"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-24 pt-40 text-white md:pb-32 md:pt-48">
      <div className="absolute inset-0 bg-grid-faint bg-[length:44px_44px] opacity-[0.35]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-navy-700/30 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-40 h-72 w-72 rounded-full bg-scarlet-500/10 blur-[100px]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="kicker mx-auto justify-center">Cabinet de conseil en finance stratégique</span>
          <h1 className="mt-6 text-display-2xl font-display font-medium text-balance">
            Décider mieux,
            <br />
            <span className="italic text-scarlet-400">créer plus de valeur.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-anthracite-300 md:text-xl">
            Finotech Advisory transforme vos données financières en décisions stratégiques —
            pour les dirigeants, conseils d&apos;administration et investisseurs qui n&apos;ont pas
            le droit de se tromper.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/rendez-vous" variant="scarlet" size="lg" withArrow>
              Prendre rendez-vous
            </Button>
            <Button href="/methodologie" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              Découvrir notre méthodologie
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
