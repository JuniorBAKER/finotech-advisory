import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description: "Politique d'utilisation des cookies du site Finotech Advisory Inc.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <Section className="pb-24 pt-16 md:pt-20">
      <Container>
        <Breadcrumb items={[{ label: "Politique de cookies" }]} />
        <div className="prose prose-lg mx-auto mt-10 max-w-3xl dark:prose-invert prose-headings:font-display">
          <h1>Politique de cookies</h1>
          <p className="text-sm text-anthracite-500 dark:text-anthracite-400">
            Dernière mise à jour : 9 août 2026
          </p>

          <p>
            Le site finotechadvisory.ca utilise des cookies et technologies similaires afin d&apos;assurer
            son bon fonctionnement, d&apos;en mesurer la performance et, avec votre consentement,
            d&apos;améliorer votre expérience de navigation.
          </p>

          <h2>1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite d&apos;un
            site web, permettant de reconnaître votre navigateur lors de visites ultérieures.
          </p>

          <h2>2. Catégories de cookies utilisées</h2>
          <table>
            <thead>
              <tr>
                <th>Catégorie</th>
                <th>Finalité</th>
                <th>Consentement requis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Essentiels</td>
                <td>Fonctionnement du site (navigation, sécurité, préférence d&apos;affichage clair/sombre)</td>
                <td>Non</td>
              </tr>
              <tr>
                <td>Analytiques</td>
                <td>Mesure d&apos;audience anonymisée pour améliorer le contenu du site</td>
                <td>Oui</td>
              </tr>
              <tr>
                <td>Fonctionnels</td>
                <td>Mémorisation de vos préférences (ex. : filtres de recherche des Insights)</td>
                <td>Oui</td>
              </tr>
            </tbody>
          </table>

          <h2>3. Gestion de vos préférences</h2>
          <p>
            Vous pouvez configurer votre navigateur pour refuser les cookies ou être averti avant
            leur dépôt. Le refus des cookies non essentiels n&apos;affecte pas l&apos;accès aux contenus
            principaux du site, mais peut limiter certaines fonctionnalités.
          </p>

          <h2>4. Cookies tiers</h2>
          <p>
            Certains outils tiers (mesure d&apos;audience, plateforme de prise de rendez-vous) peuvent
            déposer leurs propres cookies. Nous sélectionnons des fournisseurs respectant les normes
            de protection des données applicables au Canada et au Québec.
          </p>

          <h2>5. Nous contacter</h2>
          <p>
            Pour toute question relative à cette politique, écrivez à{" "}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
          </p>
        </div>
      </Container>
    </Section>
  );
}
