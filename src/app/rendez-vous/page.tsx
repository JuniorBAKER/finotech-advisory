import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BookingForm } from "@/components/sections/BookingForm";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Prendre rendez-vous",
  description:
    "Réservez un échange stratégique de 30 minutes, sans frais ni engagement, avec un conseiller senior de Finotech Advisory.",
  alternates: { canonical: "/rendez-vous" },
};

const INCLUDED = [
  "Un échange de 30 minutes avec un conseiller senior, pas un représentant commercial",
  "Une évaluation honnête de l'adéquation entre votre besoin et notre expertise",
  "Une recommandation même si nous ne sommes pas la bonne ressource pour vous",
  "Aucun frais, aucun engagement",
];

export default function RendezVousPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Prendre rendez-vous", url: "/rendez-vous" }]} />
      <Section tone="navy" className="pb-16 pt-16 md:pt-20">
        <Container>
          <Breadcrumb items={[{ label: "Prendre rendez-vous" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="kicker">Prendre rendez-vous</p>
            <h1 className="mt-6 text-display-xl font-display font-medium text-white text-balance">
              Un premier échange stratégique, sans frais.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-anthracite-300">
              Trente minutes suffisent généralement pour clarifier votre enjeu et déterminer si notre
              expertise peut y répondre. Remplissez le formulaire ci-dessous ; un conseiller senior
              vous contactera dans un délai d&apos;un jour ouvrable.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-scarlet-600 dark:text-scarlet-400">
                Ce que comprend cet échange
              </p>
              <ul className="mt-5 space-y-4">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-scarlet-500" />
                    <span className="leading-relaxed text-anthracite-700 dark:text-anthracite-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-anthracite-200/70 bg-anthracite-50/60 p-6 dark:border-white/10 dark:bg-navy-900">
                <p className="text-sm leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                  Vous préférez nous écrire directement plutôt que remplir ce formulaire ?{" "}
                  <a href="/contact" className="link-underline font-semibold text-navy-900 dark:text-white">
                    Contactez-nous ici
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-anthracite-200/70 bg-white p-8 dark:border-white/10 dark:bg-navy-900 md:p-10">
              <BookingForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
