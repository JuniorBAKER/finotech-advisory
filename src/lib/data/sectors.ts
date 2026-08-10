export type Sector = {
  slug: string;
  name: string;
  description: string;
  challenges: string[];
};

export const SECTORS: Sector[] = [
  {
    slug: "pme",
    name: "PME",
    description:
      "Des dirigeants de PME qui doivent professionnaliser leur gestion financière sans alourdir leur structure de coûts.",
    challenges: [
      "Absence de visibilité financière au-delà de la comptabilité",
      "Décisions de prix et d'investissement prises sans données fiables",
      "Difficulté à présenter des dossiers de financement convaincants",
    ],
  },
  {
    slug: "entreprises-en-croissance",
    name: "Entreprises en croissance",
    description:
      "Des organisations dont la croissance dépasse la capacité de leurs systèmes et processus internes.",
    challenges: [
      "Systèmes financiers qui ne suivent plus le rythme de la croissance",
      "Structure organisationnelle héritée d'une phase antérieure de l'entreprise",
      "Besoin de financement de croissance structuré",
    ],
  },
  {
    slug: "startups",
    name: "Startups",
    description:
      "Des équipes fondatrices qui doivent démontrer la rigueur financière attendue par les investisseurs.",
    challenges: [
      "Modèles financiers à construire pour une levée de fonds",
      "Absence de contrôle financier interne à un stade précoce",
      "Besoin de crédibilité rapide face aux investisseurs institutionnels",
    ],
  },
  {
    slug: "scaleups",
    name: "Scaleups",
    description:
      "Des entreprises en expansion rapide qui doivent structurer leur performance financière à l'échelle.",
    challenges: [
      "Multiplication des lignes d'affaires sans visibilité consolidée",
      "Structure organisationnelle à redéfinir pour soutenir l'échelle",
      "Préparation à des tours de financement plus importants",
    ],
  },
  {
    slug: "investisseurs",
    name: "Investisseurs",
    description:
      "Des investisseurs qui ont besoin d'une vérification diligente rigoureuse et d'un suivi de performance de portefeuille.",
    challenges: [
      "Vérification diligente financière avant investissement",
      "Suivi de la performance financière des entreprises du portefeuille",
      "Évaluation indépendante en cas de sortie ou de restructuration",
    ],
  },
  {
    slug: "fonds-investissement",
    name: "Fonds d'investissement",
    description:
      "Des fonds qui exigent un niveau d'analyse institutionnel pour chaque décision d'allocation de capital.",
    challenges: [
      "Analyse approfondie des cibles d'investissement potentielles",
      "Structuration financière des transactions",
      "Création de valeur post-investissement dans les entreprises du portefeuille",
    ],
  },
  {
    slug: "entrepreneurs",
    name: "Entrepreneurs",
    description:
      "Des entrepreneurs qui pilotent seuls des décisions à fort impact financier, sans structure de direction élargie.",
    challenges: [
      "Manque de recul indépendant sur les décisions stratégiques",
      "Préparation à une transaction ou une transmission d'entreprise",
      "Structuration personnelle et corporative du patrimoine d'affaires",
    ],
  },
  {
    slug: "conseils-administration",
    name: "Conseils d'administration",
    description:
      "Des administrateurs qui doivent exercer une gouvernance financière rigoureuse sans dupliquer le rôle de la direction.",
    challenges: [
      "Tableaux de bord de gouvernance insuffisamment orientés décision",
      "Évaluation indépendante de la performance de la direction",
      "Formation des administrateurs à la lecture des risques financiers",
    ],
  },
  {
    slug: "organismes-publics",
    name: "Organismes publics",
    description:
      "Des organisations publiques et parapubliques qui doivent optimiser la performance financière sous contrainte budgétaire et réglementaire.",
    challenges: [
      "Reddition de comptes financière exigeante et multi-parties prenantes",
      "Optimisation de l'allocation budgétaire sous contrainte",
      "Modernisation des outils de suivi de la performance",
    ],
  },
  {
    slug: "cooperatives",
    name: "Coopératives",
    description:
      "Des coopératives qui doivent concilier gouvernance démocratique et rigueur de gestion financière.",
    challenges: [
      "Communication financière adaptée à une gouvernance collective",
      "Structuration du financement dans un cadre coopératif",
      "Optimisation organisationnelle respectueuse du modèle coopératif",
    ],
  },
];

export function getSectorBySlug(slug: string) {
  return SECTORS.find((s) => s.slug === slug);
}
