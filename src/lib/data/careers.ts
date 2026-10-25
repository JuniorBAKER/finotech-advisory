export type JobOpening = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
};

export const CULTURE_PILLARS = [
  {
    title: "Rigueur avant volume",
    description:
      "Nous préférons refuser un mandat mal aligné plutôt que de livrer un travail sous notre standard.",
  },
  {
    title: "Apprentissage continu",
    description:
      "Chaque consultant consacre du temps protégé chaque mois à la formation, la certification ou la recherche appliquée.",
  },
  {
    title: "Accès direct aux dirigeants",
    description:
      "Nos analystes et consultants seniors interagissent directement avec les clients dès leurs premiers mandats.",
  },
  {
    title: "Mérite et transparence",
    description:
      "Les critères de progression sont documentés et communiqués — pas de politique de couloir.",
  },
];

export const BENEFITS = [
  "Rémunération concurrentielle avec le marché du conseil stratégique",
  "Mode de travail hybride flexible",
  "Budget annuel de formation et de certification professionnelle",
  "Programme de mentorat structuré avec les associés",
  "Participation aux résultats pour les postes seniors",
];

// Tous les processus de recrutement sont actuellement fermés.
// Pour rouvrir un poste, ajouter une entrée dans ce tableau : la page /carrieres
// affichera automatiquement la liste des postes ouverts.
export const JOB_OPENINGS: JobOpening[] = [];

export function getJobBySlug(slug: string) {
  return JOB_OPENINGS.find((j) => j.slug === slug);
}
