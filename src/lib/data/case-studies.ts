export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  solution: string;
  title: string;
  challenge: string;
  approach: string[];
  results: { metric: string; description: string }[];
  quote?: { text: string; author: string; role: string };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "manufacturier-quebecois-cfo-as-a-service",
    client: "Manufacturier industriel — 45 employés",
    sector: "PME",
    solution: "CFO as a Service",
    title: "Renégocier un financement bancaire en 90 jours grâce à une direction financière fractionnaire",
    challenge:
      "Après trois années de croissance rapide, l'entreprise gérait sa trésorerie de façon réactive, sans prévisions fiables. La banque avait exprimé des réserves sur le renouvellement de la marge de crédit.",
    approach: [
      "Diagnostic financier complet et mise en place d'un tableau de bord mensuel",
      "Construction d'une prévision de trésorerie glissante sur 13 semaines",
      "Préparation et accompagnement du dossier de renégociation bancaire",
    ],
    results: [
      { metric: "+18 %", description: "d'amélioration du fonds de roulement en 6 mois" },
      { metric: "1,2 M$", description: "de marge de crédit renouvelée à de meilleures conditions" },
    ],
    quote: {
      text: "Pour la première fois, nous savions exactement où nous en étions financièrement — et notre banquier aussi.",
      author: "Directeur général",
      role: "Manufacturier industriel",
    },
  },
  {
    slug: "scaleup-technologie-financial-performance-system",
    client: "Scaleup technologique — 120 employés",
    sector: "Scaleups",
    solution: "Financial Performance System",
    title: "Unifier trois systèmes de reporting en un seul tableau de bord exécutif",
    challenge:
      "Trois acquisitions successives avaient laissé l'entreprise avec des systèmes financiers non intégrés. Chaque comité de direction commençait par un débat sur la fiabilité des chiffres plutôt que sur les décisions à prendre.",
    approach: [
      "Cartographie des sources de données financières et opérationnelles",
      "Conception d'un modèle de données unifié",
      "Déploiement d'un tableau de bord exécutif avec alertes automatisées",
    ],
    results: [
      { metric: "-60 %", description: "de temps de préparation des comités de direction" },
      { metric: "3x", description: "plus rapide pour détecter les dérives de marge par ligne d'affaires" },
    ],
  },
  {
    slug: "distributeur-restructuration",
    client: "Distributeur régional — 80 employés",
    sector: "Entreprises en croissance",
    solution: "Restructuration d'entreprise",
    title: "Stabiliser la trésorerie et éviter une procédure d'insolvabilité",
    challenge:
      "Une expansion géographique mal financée avait mis l'entreprise sous pression de trésorerie sévère, avec des retards de paiement fournisseurs s'accumulant.",
    approach: [
      "Diagnostic accéléré de la situation financière et opérationnelle",
      "Plan de stabilisation de la trésorerie sur 13 semaines",
      "Renégociation structurée des ententes avec les principaux créanciers",
    ],
    results: [
      { metric: "13 sem.", description: "pour stabiliser la trésorerie" },
      { metric: "0", description: "procédure d'insolvabilité formelle requise" },
    ],
    quote: {
      text: "Le plan nous a donné une feuille de route claire au moment où nous en avions le plus besoin.",
      author: "Présidente",
      role: "Distributeur régional",
    },
  },
  {
    slug: "startup-fintech-financial-modeling",
    client: "Startup fintech — série A",
    sector: "Startups",
    solution: "Financial Modeling Project",
    title: "Construire le modèle financier d'une levée de fonds de série A",
    challenge:
      "L'équipe fondatrice avait un modèle financier construit rapidement, insuffisamment robuste pour résister à l'examen d'un comité d'investissement institutionnel.",
    approach: [
      "Reconstruction complète du modèle financier intégré",
      "Analyse de sensibilité sur les hypothèses critiques de croissance",
      "Préparation de trois scénarios pour la présentation aux investisseurs",
    ],
    results: [
      { metric: "4,5 M$", description: "de financement de série A complété" },
      { metric: "-45 %", description: "de temps de diligence raisonnable côté investisseurs" },
    ],
  },
  {
    slug: "fonds-investissement-valuation",
    client: "Fonds d'investissement régional",
    sector: "Fonds d'investissement",
    solution: "Business Valuation",
    title: "Évaluation indépendante pour une sortie de portefeuille",
    challenge:
      "Le fonds avait besoin d'une évaluation indépendante et défendable d'une entreprise de portefeuille en vue d'une sortie partielle auprès de co-investisseurs.",
    approach: [
      "Normalisation des états financiers historiques",
      "Application croisée des méthodes de revenus, de marché et d'actifs",
      "Rapport d'évaluation documenté et présentation aux co-investisseurs",
    ],
    results: [
      { metric: "3", description: "méthodes croisées pour une fourchette de valeur robuste" },
      { metric: "100 %", description: "d'accord des co-investisseurs sur la valeur retenue" },
    ],
  },
  {
    slug: "cooperative-optimisation-organisationnelle",
    client: "Coopérative de services — 200 membres",
    sector: "Coopératives",
    solution: "Optimisation Organisationnelle",
    title: "Clarifier la structure de gouvernance et accélérer l'exécution stratégique",
    challenge:
      "La structure de gouvernance de la coopérative, inchangée depuis quinze ans, ralentissait considérablement la mise en œuvre des décisions stratégiques du conseil.",
    approach: [
      "Diagnostic organisationnel et cartographie des circuits de décision",
      "Redesign de la structure organisationnelle et des comités",
      "Plan de transition respectueux du modèle de gouvernance coopératif",
    ],
    results: [
      { metric: "-25 %", description: "de délai d'exécution des décisions stratégiques" },
      { metric: "+30 %", description: "d'amélioration perçue de la clarté des rôles" },
    ],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
