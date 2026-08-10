import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section tone="navy" className="flex min-h-[70vh] items-center py-24">
      <Container className="text-center">
        <p className="kicker mx-auto justify-center">Erreur 404</p>
        <h1 className="mt-6 text-display-xl font-display font-medium text-white">
          Cette page n&apos;existe pas — ou plus.
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg text-anthracite-300">
          Le lien que vous avez suivi est peut-être obsolète. Revenez à l&apos;accueil ou
          consultez nos expertises et solutions.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="scarlet" size="lg">
            Retour à l&apos;accueil
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
            Nous contacter
          </Button>
        </div>
      </Container>
    </Section>
  );
}
