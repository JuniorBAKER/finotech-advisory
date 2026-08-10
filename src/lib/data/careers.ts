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

export const JOB_OPENINGS: JobOpening[] = [
  {
    slug: "consultant-senior-corporate-finance",
    title: "Consultant(e) senior — Corporate Finance",
    department: "Corporate Finance",
    location: "Sherbrooke (hybride)",
    type: "Temps plein",
    summary:
      "Piloter des mandats de valorisation, de structuration de financement et d'accompagnement transactionnel pour une clientèle de PME, scaleups et fonds d'investissement.",
    responsibilities: [
      "Diriger des mandats de valorisation d'entreprise et de vérification diligente",
      "Structurer des dossiers de financement et accompagner les négociations",
      "Encadrer les analystes assignés aux mandats",
      "Contribuer au développement des méthodologies internes",
    ],
    qualifications: [
      "Titre professionnel comptable (CPA) ou CFA",
      "5 à 8 ans d'expérience en finance corporative, transaction ou évaluation",
      "Maîtrise avancée de la modélisation financière",
      "Excellentes capacités de communication en français et en anglais",
    ],
  },
  {
    slug: "analyste-business-intelligence",
    title: "Analyste — Business Intelligence & Data Analysis",
    department: "Business Intelligence",
    location: "Sherbrooke (hybride)",
    type: "Temps plein",
    summary:
      "Concevoir des architectures de données et des tableaux de bord décisionnels pour une clientèle de PME et entreprises en croissance.",
    responsibilities: [
      "Modéliser des données financières et opérationnelles multi-sources",
      "Construire des tableaux de bord exécutifs (Power BI ou équivalent)",
      "Documenter les processus de gouvernance de la donnée",
      "Participer aux ateliers de cadrage avec les clients",
    ],
    qualifications: [
      "2 à 5 ans d'expérience en analyse de données ou business intelligence",
      "Maîtrise de SQL et d'un outil de visualisation de données",
      "Compréhension des états financiers et indicateurs de gestion",
      "Rigueur analytique et souci du détail",
    ],
  },
  {
    slug: "consultant-strategie",
    title: "Consultant(e) — Business Strategy",
    department: "Business Strategy",
    location: "Sherbrooke (hybride)",
    type: "Temps plein",
    summary:
      "Contribuer à des mandats de diagnostic stratégique, de planification et d'optimisation organisationnelle pour des dirigeants et conseils d'administration.",
    responsibilities: [
      "Réaliser des analyses concurrentielles et de marché",
      "Contribuer à la construction de plans stratégiques chiffrés",
      "Faciliter des ateliers avec les comités de direction",
      "Soutenir les diagnostics organisationnels",
    ],
    qualifications: [
      "3 à 6 ans d'expérience en conseil en stratégie ou en poste stratégique interne",
      "MBA ou formation universitaire équivalente en gestion",
      "Excellentes capacités d'analyse et de synthèse",
      "Aisance dans la présentation à des comités de direction",
    ],
  },
  {
    slug: "stage-analyste-recherche",
    title: "Stage — Analyste Data Analytics & Research",
    department: "Training and Research",
    location: "Sherbrooke (hybride)",
    type: "Stage — 4 à 8 mois",
    summary:
      "Contribuer à des études de marché et des analyses concurrentielles sectorielles pour notre clientèle de PME et d'investisseurs.",
    responsibilities: [
      "Collecter et analyser des données de marché primaires et secondaires",
      "Rédiger des sections de rapports de recherche",
      "Soutenir la préparation de formations internes",
    ],
    qualifications: [
      "Étudiant(e) en finance, économie, administration ou statistiques",
      "Excellentes capacités rédactionnelles en français",
      "Rigueur et curiosité analytique",
    ],
  },
];

export function getJobBySlug(slug: string) {
  return JOB_OPENINGS.find((j) => j.slug === slug);
}
