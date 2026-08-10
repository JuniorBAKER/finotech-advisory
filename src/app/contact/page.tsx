import type { Metadata } from "next";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ContactForm } from "@/components/sections/ContactForm";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Finotech Advisory Inc. pour discuter de vos enjeux financiers, stratégiques ou organisationnels.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Contact", url: "/contact" }]} />
      <Section tone="navy" className="pb-16 pt-16 md:pt-20">
        <Container>
          <Breadcrumb items={[{ label: "Contact" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="kicker">Contact</p>
            <h1 className="mt-6 text-display-xl font-display font-medium text-white text-balance">
              Parlons de votre contexte.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-anthracite-300">
              Que ce soit pour un mandat précis, une question générale ou une opportunité de
              collaboration, notre équipe vous répond personnellement, dans un délai d&apos;un jour ouvrable.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
            <div className="space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-scarlet-600 dark:text-scarlet-400">
                  Coordonnées
                </p>
                <div className="mt-4 space-y-4 text-navy-800 dark:text-anthracite-200">
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 hover:text-scarlet-600">
                    <Mail className="h-5 w-5 text-scarlet-500" /> {COMPANY.email}
                  </a>
                  <a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-3 hover:text-scarlet-600">
                    <Phone className="h-5 w-5 text-scarlet-500" /> {COMPANY.phone}
                  </a>
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-scarlet-500" /> {COMPANY.addressLine}
                  </p>
                  <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-scarlet-600">
                    <Linkedin className="h-5 w-5 text-scarlet-500" /> LinkedIn — Finotech Advisory
                  </a>
                </div>
              </div>
              <div className="rounded-2xl border border-anthracite-200/70 bg-anthracite-50/60 p-6 dark:border-white/10 dark:bg-navy-900">
                <p className="text-sm leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                  Vous préférez fixer directement un échange téléphonique de 30 minutes avec un
                  conseiller senior ?{" "}
                  <a href="/rendez-vous" className="link-underline font-semibold text-navy-900 dark:text-white">
                    Prenez rendez-vous ici
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-anthracite-200/70 bg-white p-8 dark:border-white/10 dark:bg-navy-900 md:p-10">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
