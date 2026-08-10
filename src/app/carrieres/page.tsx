import type { Metadata } from "next";
import { MapPin, Clock, Briefcase } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CULTURE_PILLARS, BENEFITS, JOB_OPENINGS } from "@/lib/data/careers";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Carrières",
  description:
    "Rejoignez Finotech Advisory : postes en Corporate Finance, Business Intelligence, Business Strategy et Training and Research à Sherbrooke.",
  alternates: { canonical: "/carrieres" },
};

export default function CarrieresPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Carrières", url: "/carrieres" }]} />
      <Section tone="navy" className="pb-16 pt-16 md:pt-20">
        <Container>
          <Breadcrumb items={[{ label: "Carrières" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="kicker">Carrières</p>
            <h1 className="mt-6 text-display-xl font-display font-medium text-white text-balance">
              Construire une carrière sur la rigueur, pas sur le volume.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-anthracite-300">
              Nous recrutons des professionnels qui préfèrent un mandat bien fait à dix mandats
              approximatifs. Si cette exigence vous parle, explorez nos postes ouverts.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-display-lg font-display font-medium text-navy-900 dark:text-white">
            Notre culture
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {CULTURE_PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="border-l-2 border-scarlet-500 pl-6">
                  <h3 className="font-display text-lg font-medium text-navy-900 dark:text-white">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <h2 className="font-display text-2xl font-medium text-navy-900 dark:text-white">Avantages</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <li key={b} className="flex gap-3 text-anthracite-700 dark:text-anthracite-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-scarlet-500" />
                {b}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-display-lg font-display font-medium text-navy-900 dark:text-white">
            Postes ouverts
          </h2>
          <div className="mt-10 space-y-5">
            {JOB_OPENINGS.map((job, i) => (
              <Reveal key={job.slug} delay={i * 0.05}>
                <div className="rounded-2xl border border-anthracite-200/70 bg-white p-8 dark:border-white/10 dark:bg-navy-900">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-medium text-navy-900 dark:text-white">
                        {job.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-anthracite-500 dark:text-anthracite-400">
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="h-4 w-4" /> {job.department}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" /> {job.type}
                        </span>
                      </div>
                    </div>
                    <Button href={`mailto:carrieres@finotechadvisory.ca?subject=Candidature — ${job.title}`} variant="outline" size="sm">
                      Postuler
                    </Button>
                  </div>
                  <p className="mt-5 leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                    {job.summary}
                  </p>
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-scarlet-600 dark:text-scarlet-400">
                        Responsabilités
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-anthracite-600 dark:text-anthracite-300">
                        {job.responsibilities.map((r) => (
                          <li key={r} className="flex gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-scarlet-500" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-scarlet-600 dark:text-scarlet-400">
                        Qualifications
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-anthracite-600 dark:text-anthracite-300">
                        {job.qualifications.map((q) => (
                          <li key={q} className="flex gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-scarlet-500" />
                            {q}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <CTABanner
            title="Aucun poste ne correspond, mais vous pensez avoir votre place chez nous ?"
            description="Écrivez-nous en candidature spontanée — nous lisons chaque message personnellement."
            primaryLabel="Envoyer une candidature spontanée"
            primaryHref="mailto:carrieres@finotechadvisory.ca"
            secondaryLabel="Nous contacter"
            secondaryHref="/contact"
          />
        </Container>
      </Section>
    </>
  );
}
