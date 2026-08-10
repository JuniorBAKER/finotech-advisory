import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FAQ_CATEGORIES } from "@/lib/data/faq";
import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Foire aux questions",
  description:
    "Mandats, tarification, confidentialité, expertise : les réponses aux questions les plus fréquentes sur Finotech Advisory.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const allItems = FAQ_CATEGORIES.flatMap((c) => c.items);

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "FAQ", url: "/faq" }]} />
      <FAQJsonLd items={allItems} />
      <Section tone="navy" className="pb-16 pt-16 md:pt-20">
        <Container>
          <Breadcrumb items={[{ label: "FAQ" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="kicker">Foire aux questions</p>
            <h1 className="mt-6 text-display-xl font-display font-medium text-white text-balance">
              Les questions que nos clients nous posent le plus souvent.
            </h1>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl space-y-16">
            {FAQ_CATEGORIES.map((cat) => (
              <div key={cat.category}>
                <h2 className="font-display text-2xl font-medium text-navy-900 dark:text-white">
                  {cat.category}
                </h2>
                <div className="mt-4">
                  <FAQAccordion items={cat.items} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <CTABanner
            title="Vous ne trouvez pas la réponse à votre question ?"
            description="Écrivez-nous directement — nous répondons personnellement à chaque demande."
            primaryLabel="Nous écrire"
            primaryHref="/contact"
            secondaryLabel="Prendre rendez-vous"
            secondaryHref="/rendez-vous"
          />
        </Container>
      </Section>
    </>
  );
}
