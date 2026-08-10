export type Expertise = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  heroStatement: string;
  description: string[];
  capabilities: { title: string; description: string }[];
  relatedSolutions: string[];
  metaTitle: string;
  metaDescription: string;
};

export const EXPERTISES: Expertise[] = [
  {
    slug: "business-intelligence-data-analysis",
    name: "Business Intelligence & Data Analysis",
    shortName: "Business Intelligence",
    summary:
      "Nous construisons l'infrastructure décisionnelle qui relie vos données brutes à vos décisions stratégiques.",
    heroStatement:
      "La donnée que vous possédez déjà contient la plupart des réponses que vous cherchez ailleurs.",
    description: [
      "La majorité des organisations disposent de plus de données qu'elles n'en exploitent. Le problème n'est presque jamais le volume : c'est la fragmentation, l'absence de définitions communes et le temps perdu à réconcilier des chiffres au lieu de les interpréter.",
      "Notre pratique Business Intelligence & Data Analysis conçoit des architectures de données et des tableaux de bord qui donnent aux dirigeants une lecture unique, fiable et actualisée de la performance de l'entreprise — vente, marge, trésorerie, opérations.",
      "Nous ne livrons pas des rapports. Nous livrons un système que vos équipes peuvent faire évoluer seules, avec une gouvernance claire et une documentation complète.",
    ],
    capabilities: [
      {
        title: "Architecture de données décisionnelles",
        description:
          "Cartographie des sources, modélisation des données et mise en place d'un entrepôt ou d'un modèle sémantique unique.",
      },
      {
        title: "Tableaux de bord exécutifs",
        description:
          "Indicateurs de performance conçus pour la prise de décision — pas pour l'accumulation de graphiques.",
      },
      {
        title: "Analyse prédictive et scénarios",
        description:
          "Modèles de prévision de la demande, de la trésorerie et du risque, testés et validés sur données historiques.",
      },
      {
        title: "Gouvernance de la donnée",
        description:
          "Définitions communes, propriété des données, contrôle qualité et processus de mise à jour.",
      },
    ],
    relatedSolutions: ["business-intelligence-process", "data-analytics-research", "financial-performance-system"],
    metaTitle: "Business Intelligence & Data Analysis | Finotech Advisory",
    metaDescription:
      "Architecture de données, tableaux de bord exécutifs et analyse prédictive pour transformer vos données en décisions. Découvrez notre expertise Business Intelligence.",
  },
  {
    slug: "business-strategy",
    name: "Business Strategy",
    shortName: "Business Strategy",
    summary:
      "Nous aidons les équipes de direction à choisir où jouer, comment gagner, et à quel rythme investir pour y arriver.",
    heroStatement:
      "Une bonne stratégie élimine des options. Une stratégie faible essaie de toutes les garder.",
    description: [
      "La croissance sans direction claire consomme du capital sans créer de valeur durable. Notre pratique Business Strategy aide les dirigeants et conseils d'administration à clarifier leur avantage concurrentiel, prioriser leurs marchés et allouer leurs ressources en conséquence.",
      "Nous combinons analyse de marché rigoureuse, modélisation financière et connaissance opérationnelle pour produire des plans stratégiques qui survivent au premier trimestre de mise en œuvre.",
      "Chaque recommandation est accompagnée d'un plan d'exécution chiffré — parce qu'une stratégie qui ne se traduit pas en décisions budgétaires reste un exercice académique.",
    ],
    capabilities: [
      {
        title: "Diagnostic stratégique et positionnement",
        description:
          "Analyse concurrentielle, analyse de la chaîne de valeur et identification des leviers de différenciation réels.",
      },
      {
        title: "Stratégie de croissance",
        description:
          "Priorisation des marchés, segmentation client et arbitrage entre croissance organique et acquisitions.",
      },
      {
        title: "Plans stratégiques à 3-5 ans",
        description:
          "Feuille de route chiffrée, jalons trimestriels et indicateurs de suivi pour le conseil d'administration.",
      },
      {
        title: "Accompagnement des comités de direction",
        description:
          "Facilitation des sessions stratégiques et alignement des dirigeants autour de priorités communes.",
      },
    ],
    relatedSolutions: ["optimisation-organisationnelle", "financial-modeling-project", "restructuration-entreprise"],
    metaTitle: "Business Strategy | Finotech Advisory",
    metaDescription:
      "Diagnostic stratégique, stratégie de croissance et plans à 3-5 ans chiffrés. L'expertise Business Strategy de Finotech Advisory pour dirigeants et conseils d'administration.",
  },
  {
    slug: "corporate-finance",
    name: "Corporate Finance",
    shortName: "Corporate Finance",
    summary:
      "Structure de capital, valorisation, financement et transactions — pensés pour protéger et augmenter la valeur de l'entreprise.",
    heroStatement:
      "La finance corporative ne finance pas des projets. Elle finance des décisions.",
    description: [
      "Chaque décision de croissance, d'acquisition ou de restructuration a une empreinte financière précise — sur la trésorerie, la dette, la dilution et la valorisation. Notre pratique Corporate Finance quantifie cette empreinte avant que la décision ne soit prise, pas après.",
      "Nous accompagnons dirigeants, actionnaires et investisseurs dans la structuration de financements, la préparation de transactions et l'évaluation d'entreprise, avec la rigueur exigée par les prêteurs, les fonds et les conseils d'administration.",
      "Notre indépendance est structurelle : nous ne touchons aucune commission liée aux instruments financiers que nous recommandons.",
    ],
    capabilities: [
      {
        title: "Structuration de financement",
        description:
          "Dette, capital de croissance, financement d'acquisition — structuration et négociation des conditions.",
      },
      {
        title: "Valorisation d'entreprise",
        description:
          "Évaluations pour transaction, litige, planification successorale ou levée de fonds, selon les normes reconnues.",
      },
      {
        title: "Fusions, acquisitions et cessions",
        description:
          "Vérification diligente financière, modélisation de synergies et structuration de transaction.",
      },
      {
        title: "Optimisation de la structure de capital",
        description:
          "Analyse du coût du capital, du levier optimal et de la politique de distribution.",
      },
    ],
    relatedSolutions: ["business-valuation", "cfo-as-a-service", "financial-modeling-project"],
    metaTitle: "Corporate Finance | Finotech Advisory",
    metaDescription:
      "Structuration de financement, valorisation d'entreprise et accompagnement transactionnel. L'expertise Corporate Finance de Finotech Advisory.",
  },
  {
    slug: "training-and-research",
    name: "Training and Research",
    shortName: "Training and Research",
    summary:
      "Nous transférons nos méthodes à vos équipes et produisons la recherche appliquée qui alimente vos décisions.",
    heroStatement:
      "Un cabinet de conseil qui ne transfère pas ses méthodes crée une dépendance. Nous préférons créer une compétence.",
    description: [
      "La valeur d'un mandat de conseil ne devrait pas disparaître le jour où le mandat se termine. Notre pratique Training and Research forme les équipes financières, analytiques et de direction aux méthodes que nous utilisons, et produit la recherche sectorielle qui nourrit vos décisions à long terme.",
      "Nous concevons des programmes de formation sur mesure — modélisation financière, lecture d'états financiers pour non-financiers, gouvernance de la donnée — ainsi que des études de marché et des veilles stratégiques sectorielles.",
      "Nos formateurs sont les mêmes professionnels qui livrent nos mandats de conseil : la matière enseignée est celle qui a été testée sur le terrain.",
    ],
    capabilities: [
      {
        title: "Formation en finance et analyse",
        description:
          "Modélisation financière, analyse de rentabilité et lecture des états financiers pour comités de direction.",
      },
      {
        title: "Formation en gouvernance",
        description:
          "Programmes pour conseils d'administration : lecture des tableaux de bord, gestion des risques financiers.",
      },
      {
        title: "Recherche sectorielle et veille",
        description:
          "Études de marché, analyses concurrentielles et veille réglementaire adaptées à votre secteur.",
      },
      {
        title: "Transfert de méthodologie",
        description:
          "Documentation et accompagnement pour que vos équipes reproduisent nos méthodes en autonomie.",
      },
    ],
    relatedSolutions: ["data-analytics-research", "optimisation-organisationnelle"],
    metaTitle: "Training and Research | Finotech Advisory",
    metaDescription:
      "Formation en finance, gouvernance et analyse, recherche sectorielle et transfert de méthodologie. L'expertise Training and Research de Finotech Advisory.",
  },
];

export function getExpertiseBySlug(slug: string) {
  return EXPERTISES.find((e) => e.slug === slug);
}
