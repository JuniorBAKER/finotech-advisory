import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description: "Conditions d'utilisation du site Finotech Advisory Inc.",
  alternates: { canonical: "/conditions-utilisation" },
};

export default function ConditionsUtilisationPage() {
  return (
    <Section className="pb-24 pt-16 md:pt-20">
      <Container>
        <Breadcrumb items={[{ label: "Conditions d'utilisation" }]} />
        <div className="prose prose-lg mx-auto mt-10 max-w-3xl dark:prose-invert prose-headings:font-display">
          <h1>Conditions d&apos;utilisation</h1>
          <p className="text-sm text-anthracite-500 dark:text-anthracite-400">
            Dernière mise à jour : 9 août 2026
          </p>

          <p>
            En accédant au site {COMPANY.legalName} et en l&apos;utilisant, vous acceptez les présentes
            conditions d&apos;utilisation. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas
            utiliser ce site.
          </p>

          <h2>1. Objet du site</h2>
          <p>
            Ce site présente les expertises, solutions et méthodologies de {COMPANY.legalName}, cabinet
            de conseil stratégique en finance, business intelligence et performance organisationnelle.
            Il permet également de nous contacter et de solliciter un premier échange stratégique.
          </p>

          <h2>2. Nature des contenus</h2>
          <p>
            Les contenus publiés sur ce site (Insights, études de cas, descriptions de solutions) sont
            fournis à titre informatif uniquement et ne constituent ni un avis financier, ni un avis
            comptable, ni un avis juridique personnalisé. Toute décision d&apos;affaires devrait faire
            l&apos;objet d&apos;un mandat de conseil spécifique tenant compte de votre situation propre.
          </p>

          <h2>3. Utilisation autorisée</h2>
          <p>
            Vous pouvez consulter ce site à des fins personnelles ou professionnelles légitimes. Toute
            reproduction, extraction automatisée (scraping) ou utilisation commerciale des contenus
            sans autorisation écrite préalable est interdite.
          </p>

          <h2>4. Exactitude des informations</h2>
          <p>
            Nous nous efforçons de maintenir les informations de ce site à jour et exactes. Nous ne
            garantissons toutefois pas l&apos;absence totale d&apos;erreurs et nous réservons le droit de
            corriger ou modifier le contenu du site à tout moment, sans préavis.
          </p>

          <h2>5. Limitation de responsabilité</h2>
          <p>
            {COMPANY.legalName} ne pourra être tenue responsable de dommages directs ou indirects
            résultant de l&apos;utilisation ou de l&apos;impossibilité d&apos;utiliser ce site, y compris toute
            décision d&apos;affaires prise sur la seule base des contenus publiés sans mandat de conseil
            formel.
          </p>

          <h2>6. Formulaires et données transmises</h2>
          <p>
            Toute information transmise via nos formulaires de contact ou de prise de rendez-vous est
            traitée conformément à notre{" "}
            <a href="/confidentialite">politique de confidentialité</a>.
          </p>

          <h2>7. Modification des conditions</h2>
          <p>
            Ces conditions peuvent être modifiées à tout moment. La version en vigueur est celle
            publiée sur cette page.
          </p>

          <h2>8. Droit applicable et juridiction</h2>
          <p>
            Les présentes conditions sont régies par les lois de la province de Québec. Tout litige
            relève de la compétence exclusive des tribunaux du district judiciaire de Saint-François.
          </p>

          <h2>9. Contact</h2>
          <p>
            Pour toute question, écrivez à <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
          </p>
        </div>
      </Container>
    </Section>
  );
}
