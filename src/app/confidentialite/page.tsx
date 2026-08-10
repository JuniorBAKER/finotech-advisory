import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité de Finotech Advisory Inc.",
  alternates: { canonical: "/confidentialite" },
  robots: { index: true, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <Section className="pb-24 pt-16 md:pt-20">
      <Container>
        <Breadcrumb items={[{ label: "Politique de confidentialité" }]} />
        <div className="prose prose-lg mx-auto mt-10 max-w-3xl dark:prose-invert prose-headings:font-display">
          <h1>Politique de confidentialité</h1>
          <p className="text-sm text-anthracite-500 dark:text-anthracite-400">
            Dernière mise à jour : 9 août 2026
          </p>

          <p>
            {COMPANY.legalName} (« Finotech », « nous », « notre ») s&apos;engage à protéger la
            confidentialité des renseignements personnels que vous nous confiez, conformément à la
            Loi sur la protection des renseignements personnels dans le secteur privé (Loi 25) du
            Québec et à la Loi sur la protection des renseignements personnels et les documents
            électroniques (LPRPDE) applicable au Canada.
          </p>

          <h2>1. Renseignements que nous recueillons</h2>
          <p>Nous recueillons les renseignements que vous nous fournissez volontairement, notamment :</p>
          <ul>
            <li>Nom, adresse courriel, numéro de téléphone et organisation, via nos formulaires de contact et de prise de rendez-vous ;</li>
            <li>Contenu des communications échangées avec notre équipe ;</li>
            <li>Renseignements financiers et opérationnels transmis dans le cadre d&apos;un mandat de conseil ;</li>
            <li>Données de navigation anonymisées (pages consultées, durée de visite) à des fins d&apos;amélioration du site.</li>
          </ul>

          <h2>2. Finalités de la collecte</h2>
          <p>Nous utilisons ces renseignements exclusivement pour :</p>
          <ul>
            <li>Répondre à vos demandes de contact ou de rendez-vous ;</li>
            <li>Réaliser les mandats de conseil qui nous sont confiés ;</li>
            <li>Vous transmettre notre infolettre, si vous y avez consenti ;</li>
            <li>Améliorer la performance et la sécurité de notre site.</li>
          </ul>

          <h2>3. Partage des renseignements</h2>
          <p>
            Nous ne vendons ni ne louons vos renseignements personnels. Ils peuvent être partagés
            uniquement avec des fournisseurs de services (hébergement, infonuagique, envoi de
            courriels transactionnels) liés par des ententes de confidentialité, ou lorsque la loi
            l&apos;exige.
          </p>

          <h2>4. Conservation des données</h2>
          <p>
            Les renseignements liés à un mandat de conseil sont conservés pendant la durée requise
            par nos obligations professionnelles et légales, puis détruits ou anonymisés de façon
            sécuritaire. Les renseignements liés à une demande de contact non suivie d&apos;un mandat
            sont conservés 24 mois.
          </p>

          <h2>5. Vos droits</h2>
          <p>
            Vous disposez d&apos;un droit d&apos;accès, de rectification, de retrait du consentement et,
            dans certains cas, de portabilité et de suppression de vos renseignements personnels.
            Pour exercer ces droits, contactez notre responsable de la protection des renseignements
            personnels à <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
          </p>

          <h2>6. Sécurité</h2>
          <p>
            Nous appliquons des mesures de sécurité administratives, techniques et physiques
            adaptées à la sensibilité des renseignements traités, incluant le chiffrement des
            données et la limitation des accès aux dossiers clients.
          </p>

          <h2>7. Modifications de la politique</h2>
          <p>
            Cette politique peut être mise à jour périodiquement. La date de dernière mise à jour
            figure en haut de cette page.
          </p>

          <h2>8. Nous contacter</h2>
          <p>
            Pour toute question relative à cette politique, écrivez à{" "}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> ou par courrier à l&apos;adresse
            suivante : {COMPANY.addressLine}.
          </p>
        </div>
      </Container>
    </Section>
  );
}
