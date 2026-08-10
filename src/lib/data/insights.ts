export type Insight = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  author: string;
  tags: string[];
};

export const INSIGHT_CATEGORIES = [
  "Tous",
  "Business Intelligence",
  "Business Strategy",
  "Corporate Finance",
  "Gouvernance",
];

export const INSIGHTS: Insight[] = [
  {
    slug: "trois-signes-tableau-de-bord-financier-inutile",
    title: "Trois signes que votre tableau de bord financier ne sert plus à décider",
    category: "Business Intelligence",
    excerpt:
      "Un tableau de bord qui existe depuis trois ans sans avoir changé de forme n'est probablement plus aligné sur vos décisions actuelles. Voici comment le vérifier.",
    content: [
      "Un tableau de bord financier a une durée de vie utile. Passé un certain point, il continue d'être consulté par habitude, sans plus influencer réellement les décisions qu'il devait éclairer.",
      "Premier signe : personne ne pose de question en le consultant. Un bon tableau de bord génère des questions — pourquoi cette marge a-t-elle chuté, pourquoi ce délai de recouvrement s'allonge-t-il. L'absence de question signale soit une performance parfaite, ce qui est rare, soit un désengagement.",
      "Deuxième signe : les décisions importantes se prennent ailleurs, dans des analyses ad hoc produites en dehors du tableau de bord. C'est le signe le plus fiable que le système en place ne répond plus aux vraies questions de la direction.",
      "Troisième signe : la production du tableau de bord prend plus de temps que sa consultation. Lorsque l'équipe financière passe plus de temps à réconcilier les chiffres qu'à les analyser, le système a cessé de créer de la valeur nette.",
      "La solution n'est pas nécessairement un nouvel outil. C'est souvent une révision du processus de collecte et de définition des indicateurs — ce que nous appelons le Business Intelligence Process.",
    ],
    date: "2026-06-12",
    readTime: "5 min",
    author: "Équipe Finotech Advisory",
    tags: ["tableau de bord", "business intelligence", "pilotage financier"],
  },
  {
    slug: "pourquoi-strategie-echoue-a-execution",
    title: "Pourquoi la plupart des stratégies échouent à l'exécution, pas à la conception",
    category: "Business Strategy",
    excerpt:
      "La qualité d'une stratégie se mesure à ce qui se passe six mois après sa présentation au conseil d'administration — pas le jour de sa présentation.",
    content: [
      "Les plans stratégiques échouent rarement par manque d'idées. Ils échouent par manque de séquencement, de responsabilisation et de suivi.",
      "Un plan stratégique correctement conçu répond à trois questions au-delà du 'quoi' : qui est responsable de chaque initiative, quel budget lui est alloué, et quel indicateur permettra de savoir en 90 jours si elle progresse ou non.",
      "L'absence de l'une de ces trois réponses transforme un plan stratégique en document d'intention. Les meilleures organisations que nous accompagnons révisent leurs priorités stratégiques trimestriellement, pas annuellement.",
      "La discipline d'exécution n'est pas une compétence secondaire à la stratégie : elle en est une composante à part entière, qui doit être conçue en même temps que le plan lui-même.",
    ],
    date: "2026-05-28",
    readTime: "6 min",
    author: "Équipe Finotech Advisory",
    tags: ["stratégie", "exécution", "gouvernance"],
  },
  {
    slug: "structure-capital-pme-croissance",
    title: "Structurer le capital d'une PME en croissance : dette, capital ou les deux ?",
    category: "Corporate Finance",
    excerpt:
      "Le choix entre dette et capital n'est pas une question de préférence, mais de coût réel, de dilution acceptable et de flexibilité opérationnelle.",
    content: [
      "La dette est généralement moins coûteuse que le capital-actions, mais elle impose une discipline de remboursement qui peut fragiliser une entreprise en croissance rapide si elle est mal calibrée.",
      "Le capital-actions dilue la propriété, mais offre une flexibilité précieuse lorsque les flux de trésorerie restent incertains à moyen terme.",
      "La bonne structure dépend de trois facteurs : la prévisibilité des flux de trésorerie, la valeur de l'actif pouvant garantir un financement, et l'horizon de sortie envisagé par les actionnaires actuels.",
      "Une analyse rigoureuse du coût du capital pondéré permet de sortir du débat théorique et de chiffrer précisément l'impact de chaque option sur la valeur actionnariale à long terme.",
    ],
    date: "2026-05-10",
    readTime: "7 min",
    author: "Équipe Finotech Advisory",
    tags: ["financement", "structure de capital", "corporate finance"],
  },
  {
    slug: "administrateurs-lecture-risque-financier",
    title: "Ce que chaque administrateur devrait pouvoir lire dans un état financier en cinq minutes",
    category: "Gouvernance",
    excerpt:
      "La gouvernance financière ne demande pas à un administrateur d'être comptable. Elle demande de savoir où regarder.",
    content: [
      "Un administrateur n'a pas à maîtriser la comptabilité pour exercer une gouvernance financière rigoureuse. Il doit savoir identifier rapidement trois zones de risque : la tendance du fonds de roulement, la concentration du chiffre d'affaires et l'évolution du levier financier.",
      "Le fonds de roulement révèle la capacité de l'entreprise à honorer ses obligations à court terme. Une dégradation progressive, même en présence de profits comptables, est souvent le signal le plus précoce de difficultés à venir.",
      "La concentration du chiffre d'affaires — la part générée par les principaux clients — expose un risque souvent sous-estimé par les conseils d'administration jusqu'à ce qu'il se matérialise.",
      "L'évolution du levier financier, enfin, détermine la marge de manœuvre de l'entreprise en cas de ralentissement. Un conseil bien formé pose ces trois questions à chaque rencontre, sans exception.",
    ],
    date: "2026-04-22",
    readTime: "5 min",
    author: "Équipe Finotech Advisory",
    tags: ["conseil d'administration", "gouvernance", "risque financier"],
  },
  {
    slug: "valorisation-entreprise-familiale-transmission",
    title: "Valoriser une entreprise familiale en vue d'une transmission : les erreurs les plus coûteuses",
    category: "Corporate Finance",
    excerpt:
      "La transmission d'une entreprise familiale échoue rarement pour des raisons stratégiques. Elle échoue souvent sur la question de la valeur.",
    content: [
      "La première erreur est de confondre la valeur sentimentale de l'entreprise pour son fondateur et sa valeur économique pour un successeur ou un tiers acquéreur.",
      "La deuxième erreur est de retarder l'évaluation jusqu'au moment de la transmission elle-même, privant l'entreprise du temps nécessaire pour ajuster sa structure et maximiser sa valeur avant la transaction.",
      "La troisième erreur est de s'appuyer sur une seule méthode d'évaluation. Une approche croisée — revenus, marché, actifs — offre une fourchette de valeur plus crédible et plus facilement acceptée par toutes les parties prenantes.",
      "Une planification de la transmission amorcée trois à cinq ans à l'avance permet généralement d'augmenter significativement la valeur transférable, par des ajustements structurels souvent simples à mettre en œuvre.",
    ],
    date: "2026-03-30",
    readTime: "6 min",
    author: "Équipe Finotech Advisory",
    tags: ["valorisation", "transmission d'entreprise", "planification successorale"],
  },
  {
    slug: "donnee-fiable-avant-intelligence-artificielle",
    title: "Avant l'intelligence artificielle, la fiabilité de la donnée",
    category: "Business Intelligence",
    excerpt:
      "Aucun modèle prédictif, aussi sophistiqué soit-il, ne compense une donnée financière non fiable à la source.",
    content: [
      "L'enthousiasme pour l'intelligence artificielle appliquée à la finance occulte souvent une réalité simple : un modèle prédictif entraîné sur des données incohérentes produira des prévisions incohérentes, avec plus de confiance apparente qu'un rapport manuel.",
      "Avant d'investir dans des capacités prédictives avancées, les organisations les plus performantes investissent dans la gouvernance de leur donnée : définitions communes, propriété claire, contrôle qualité systématique.",
      "Cette étape, moins visible que l'implantation d'un outil d'intelligence artificielle, conditionne pourtant l'essentiel de la valeur qui pourra être tirée de tout investissement analytique ultérieur.",
      "Notre recommandation constante : gouvernance de la donnée d'abord, capacités prédictives ensuite. L'ordre inverse produit systématiquement des attentes déçues.",
    ],
    date: "2026-03-08",
    readTime: "5 min",
    author: "Équipe Finotech Advisory",
    tags: ["intelligence artificielle", "gouvernance de la donnée", "business intelligence"],
  },
  {
    slug: "signes-restructuration-necessaire",
    title: "Cinq signes qu'une restructuration devient nécessaire — avant qu'elle ne devienne inévitable",
    category: "Business Strategy",
    excerpt:
      "Les entreprises qui évitent l'insolvabilité sont presque toujours celles qui ont agi avant que la situation ne devienne critique.",
    content: [
      "Le premier signe est la dégradation progressive des délais de paiement fournisseurs, souvent minimisée comme un problème temporaire de gestion de trésorerie.",
      "Le deuxième est le recours croissant à la marge de crédit pour financer des dépenses opérationnelles récurrentes plutôt que des besoins ponctuels.",
      "Le troisième est l'absence de prévisions de trésorerie fiables au-delà de quelques semaines, qui empêche toute anticipation des difficultés à venir.",
      "Le quatrième est une rentabilité déclarée positive qui coexiste avec une trésorerie en tension constante — signe fréquent d'un problème de fonds de roulement plutôt que de rentabilité.",
      "Le cinquième est le report répété de décisions structurantes par manque de visibilité financière claire. Chacun de ces signes, pris isolément, justifie un diagnostic financier rapide.",
    ],
    date: "2026-02-14",
    readTime: "6 min",
    author: "Équipe Finotech Advisory",
    tags: ["restructuration", "trésorerie", "gestion de crise"],
  },
  {
    slug: "cfo-fractionnaire-vs-cfo-temps-plein",
    title: "CFO fractionnaire ou CFO à temps plein : comment trancher",
    category: "Corporate Finance",
    excerpt:
      "La question n'est pas de coût, mais de complexité et de fréquence des décisions financières à arbitrer.",
    content: [
      "Un CFO fractionnaire convient aux organisations dont les décisions financières structurantes surviennent à un rythme mensuel ou trimestriel — budgets, financement, tarification, investissement.",
      "Un CFO à temps plein devient justifié lorsque ces décisions deviennent hebdomadaires, ou lorsque la complexité opérationnelle exige une présence continue — multiplication des lignes d'affaires, transactions fréquentes, levées de fonds successives.",
      "La transition entre les deux modèles n'est pas binaire. Beaucoup d'organisations combinent un CFO fractionnaire senior avec un contrôleur interne à temps plein, avant de justifier pleinement un poste de direction financière permanent.",
      "Le bon indicateur de décision : si les questions financières stratégiques s'accumulent plus vite qu'elles ne trouvent réponse, le modèle actuel a atteint ses limites.",
    ],
    date: "2026-01-20",
    readTime: "5 min",
    author: "Équipe Finotech Advisory",
    tags: ["CFO", "direction financière", "corporate finance"],
  },
];

export function getInsightBySlug(slug: string) {
  return INSIGHTS.find((i) => i.slug === slug);
}
