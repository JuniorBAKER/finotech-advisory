import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { COMPANY, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Finotech Advisory Inc.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <Section className="pb-24 pt-16 md:pt-20">
      <Container>
        <Breadcrumb items={[{ label: "Mentions légales" }]} />
        <div className="prose prose-lg mx-auto mt-10 max-w-3xl dark:prose-invert prose-headings:font-display">
          <h1>Mentions légales</h1>

          <h2>Éditeur du site</h2>
          <p>
            Le site {SITE_URL.replace("https://", "")} est édité par {COMPANY.legalName}, société
            constituée en vertu des lois du Québec, ayant son siège social au {COMPANY.addressLine}.
          </p>
          <ul>
            <li>Raison sociale : {COMPANY.legalName}</li>
            <li>Fondée en : {COMPANY.founded}</li>
            <li>Courriel : {COMPANY.email}</li>
            <li>Téléphone : {COMPANY.phone}</li>
          </ul>

          <h2>Directeur de la publication</h2>
          <p>La direction générale de {COMPANY.shortName} Advisory Inc. est responsable de la publication du présent site.</p>

          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé sur une infrastructure infonuagique conforme aux standards de
            disponibilité et de sécurité de l&apos;industrie. Les coordonnées complètes de
            l&apos;hébergeur sont disponibles sur demande auprès de {COMPANY.email}.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, méthodologies, illustrations,
            logo, identité visuelle) est la propriété exclusive de {COMPANY.legalName}, sauf mention
            contraire, et est protégé par les lois applicables en matière de propriété intellectuelle.
            Toute reproduction, représentation ou diffusion, en tout ou en partie, sans autorisation
            écrite préalable, est interdite.
          </p>

          <h2>Marques</h2>
          <p>
            « Finotech Advisory » et le logo associé sont des marques de {COMPANY.legalName}. Toute
            utilisation non autorisée est interdite.
          </p>

          <h2>Liens externes</h2>
          <p>
            Ce site peut contenir des liens vers des sites tiers. {COMPANY.shortName} Advisory n&apos;exerce
            aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
          </p>

          <h2>Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par les lois de la province de Québec et les
            lois fédérales du Canada qui s&apos;y appliquent.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question relative aux présentes mentions légales, contactez-nous à{" "}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
          </p>
        </div>
      </Container>
    </Section>
  );
}
