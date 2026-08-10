export type Bulletin = {
  slug: string;
  title: string;
  period: string;
  category: "Bulletin trimestriel" | "Note spéciale";
  date: string;
  readTime: string;
  author: string;
  summary: string;
  keyMetrics: { label: string; value: string; trend: string }[];
  sections: { heading: string; paragraphs: string[] }[];
  tags: string[];
};

export const BULLETIN_CATEGORIES = ["Tous", "Bulletin trimestriel", "Note spéciale"];

export const BULLETINS: Bulletin[] = [
  {
    slug: "bulletin-t2-2026-private-equity-quebec",
    title: "T2 2026 — Ralentissement des transactions, résilience des valorisations",
    period: "T2 2026",
    category: "Bulletin trimestriel",
    date: "2026-07-15",
    readTime: "8 min",
    author: "Équipe Finotech Analytics",
    summary:
      "Le deuxième trimestre 2026 confirme un ralentissement du volume transactionnel en private equity au Québec, compensé par une stabilité inattendue des multiples de valorisation dans le mid-market.",
    keyMetrics: [
      { label: "Transactions complétées (QC)", value: "38", trend: "-12 % t/t" },
      { label: "Valeur totale déployée", value: "1,4 G$ CA", trend: "-6 % t/t" },
      { label: "Multiple moyen EV/EBITDA (mid-market)", value: "7,9x", trend: "+0,2x t/t" },
      { label: "Capital levé par les fonds québécois", value: "310 M$ CA", trend: "+18 % t/t" },
    ],
    sections: [
      {
        heading: "Activité transactionnelle",
        paragraphs: [
          "Le nombre de transactions de private equity complétées au Québec a reculé à 38 au T2 2026, contre 43 au trimestre précédent — un quatrième trimestre consécutif de ralentissement séquentiel après le sommet observé au T2 2025.",
          "Le coût du financement d'acquisition demeure le principal frein cité par les acquéreurs financiers interrogés : malgré une pause du resserrement monétaire, le coût de la dette senior reste supérieur de 180 points de base à sa moyenne 2019-2021, ce qui continue de comprimer les rendements attendus sur les transactions à fort levier.",
          "Le segment des transactions entre 10 M$ et 50 M$ de valeur d'entreprise reste le plus actif, représentant 61 % du volume total — les fonds continuent de privilégier les cibles de taille modeste, moins exposées à la concurrence des acheteurs stratégiques internationaux.",
        ],
      },
      {
        heading: "Valorisations",
        paragraphs: [
          "Contrairement aux attentes formées en début d'année, les multiples moyens EV/EBITDA du mid-market se sont légèrement appréciés, passant de 7,7x à 7,9x. Cette résilience s'explique principalement par la qualité supérieure des actifs mis en marché — les vendeurs les plus fragiles ayant déjà été écartés du pipeline transactionnel lors des trimestres précédents.",
          "L'écart de valorisation entre les secteurs technologiques et industriels continue de se resserrer : les multiples technologiques ont cédé 0,4x depuis le T2 2025, tandis que les multiples manufacturiers ont progressé de 0,3x sur la même période, portés par la relocalisation de chaînes d'approvisionnement nord-américaines.",
        ],
      },
      {
        heading: "Levées de fonds",
        paragraphs: [
          "Les gestionnaires de fonds basés au Québec ont levé 310 M$ CA au cours du trimestre, en hausse de 18 % par rapport au T1 2026. Cette progression est concentrée chez un nombre restreint de gestionnaires établis — les commanditaires (LPs) continuent de consolider leurs engagements auprès de relations existantes plutôt que d'initier de nouvelles relations avec des équipes émergentes.",
          "Le délai moyen de clôture des fonds (de l'ouverture à la clôture finale) s'est allongé à 14 mois, contre 10 mois en moyenne pour les millésimes 2021-2022 — un signe additionnel de la prudence accrue des investisseurs institutionnels.",
        ],
      },
      {
        heading: "Sorties",
        paragraphs: [
          "Les sorties par vente à un acquéreur stratégique demeurent le mode de sortie dominant (58 % des sorties du trimestre), devant les transactions secondaires entre fonds (31 %) et les premiers appels publics à l'épargne, quasi inexistants sur la période.",
          "La durée moyenne de détention des actifs cédés ce trimestre atteint 6,2 ans, en hausse constante depuis 2022 — les gestionnaires prolongent la période de détention pour laisser le temps aux initiatives de création de valeur opérationnelle de porter fruit avant la mise en marché.",
        ],
      },
      {
        heading: "Perspectives T3 2026",
        paragraphs: [
          "Nous anticipons une stabilisation du volume transactionnel au T3, sans reprise marquée. Les gestionnaires disposant de capital non déployé (dry powder) demeurent sous pression de le mobiliser avant la fin de leur période d'investissement, ce qui devrait soutenir un flux minimal de transactions même en contexte de valorisations disputées.",
        ],
      },
    ],
    tags: ["private equity", "Québec", "valorisation", "transactions", "T2 2026"],
  },
  {
    slug: "bulletin-t1-2026-private-equity-quebec",
    title: "T1 2026 — Reprise prudente après un quatrième trimestre attentiste",
    period: "T1 2026",
    category: "Bulletin trimestriel",
    date: "2026-04-10",
    readTime: "7 min",
    author: "Équipe Finotech Analytics",
    summary:
      "Après un ralentissement marqué en fin d'année 2025, le marché québécois du capital-investissement amorce le premier trimestre 2026 sur une note de reprise prudente, portée par le mid-market industriel.",
    keyMetrics: [
      { label: "Transactions complétées (QC)", value: "43", trend: "+15 % t/t" },
      { label: "Valeur totale déployée", value: "1,9 G$ CA", trend: "+22 % t/t" },
      { label: "Multiple moyen EV/EBITDA (mid-market)", value: "7,7x", trend: "-0,1x t/t" },
      { label: "Capital levé par les fonds québécois", value: "260 M$ CA", trend: "-9 % t/t" },
    ],
    sections: [
      {
        heading: "Activité transactionnelle",
        paragraphs: [
          "Le volume de transactions a rebondi à 43 opérations complétées, après un creux de 37 au T4 2025 — le trimestre le plus faible depuis 2020. Cette reprise reste concentrée dans le secteur manufacturier et les services aux entreprises, deux secteurs perçus comme relativement résilients à un contexte macroéconomique encore incertain.",
          "Les transactions de transmission d'entreprise familiale (succession) représentent désormais 34 % du volume total au Québec, une proportion en croissance constante depuis trois ans, reflet démographique du vieillissement des propriétaires-dirigeants de la province.",
        ],
      },
      {
        heading: "Valorisations",
        paragraphs: [
          "Les multiples moyens ont légèrement reculé à 7,7x EV/EBITDA, une baisse marginale de 0,1x qui traduit surtout un effet de composition : la proportion plus élevée de transactions de succession, généralement valorisées à des multiples inférieurs aux transactions de croissance pure, tire la moyenne vers le bas sans signaler de détérioration généralisée des conditions de marché.",
        ],
      },
      {
        heading: "Levées de fonds",
        paragraphs: [
          "Le capital levé par les gestionnaires québécois a reculé de 9 % à 260 M$ CA, le rythme de collecte demeurant inégal d'un trimestre à l'autre. Les investisseurs institutionnels continuent de démontrer une préférence marquée pour les gestionnaires ayant un historique de performance démontré sur au moins deux millésimes complets.",
        ],
      },
      {
        heading: "Sorties",
        paragraphs: [
          "Le nombre de sorties est demeuré stable par rapport au trimestre précédent. Les transactions secondaires entre fonds de capital-investissement ont toutefois gagné en importance relative, plusieurs gestionnaires arrivant en fin de cycle de détention et cherchant à retourner du capital à leurs commanditaires dans un contexte de marché primaire encore hésitant.",
        ],
      },
      {
        heading: "Perspectives T2 2026",
        paragraphs: [
          "Nous anticipions au moment de la publication un maintien du rythme de transactions observé en fin de trimestre, sous réserve d'une stabilité continue des taux de financement — une prévision que les résultats du T2 2026 sont venus partiellement infirmer, comme le détaille notre bulletin suivant.",
        ],
      },
    ],
    tags: ["private equity", "Québec", "transmission d'entreprise", "T1 2026"],
  },
  {
    slug: "note-speciale-taux-interet-multiples-valorisation",
    title: "Note spéciale — Comment la trajectoire des taux d'intérêt redessine les multiples de valorisation",
    period: "Note thématique",
    category: "Note spéciale",
    date: "2026-02-18",
    readTime: "6 min",
    author: "Équipe Finotech Analytics",
    summary:
      "Une analyse approfondie de la relation entre coût de la dette d'acquisition et multiples de valorisation observés dans les transactions de private equity au Québec depuis 2019.",
    keyMetrics: [
      { label: "Coût moyen de la dette senior d'acquisition", value: "8,1 %", trend: "+180 pb vs 2019-21" },
      { label: "Levier moyen (dette/EBITDA)", value: "3,8x", trend: "-1,1x vs 2021" },
      { label: "Part d'equity moyenne dans les transactions LBO", value: "48 %", trend: "+9 pts vs 2021" },
    ],
    sections: [
      {
        heading: "Un changement structurel, pas seulement conjoncturel",
        paragraphs: [
          "Le resserrement monétaire amorcé en 2022 a durablement modifié la structure de financement des transactions de capital-investissement. Le coût moyen de la dette senior d'acquisition observé dans les transactions québécoises que nous suivons s'établit à 8,1 %, contre une moyenne de 6,3 % sur la période 2019-2021.",
          "Ce changement n'est pas qu'un phénomène de taux : il s'accompagne d'un resserrement des critères de crédit des prêteurs, qui exigent désormais des niveaux de levier significativement plus bas pour un profil de risque équivalent.",
        ],
      },
      {
        heading: "L'ajustement par le levier plutôt que par le prix",
        paragraphs: [
          "Face à un coût de la dette plus élevé, les acquéreurs financiers ont majoritairement choisi d'ajuster la structure de capital plutôt que le prix payé : le levier moyen des transactions LBO est passé de 4,9x EBITDA en 2021 à 3,8x aujourd'hui, tandis que la part de capitaux propres dans le financement des transactions est passée de 39 % à 48 %.",
          "Cette stratégie a permis de maintenir des multiples de valorisation relativement stables malgré la hausse du coût du capital — au prix d'un rendement attendu sur fonds propres mécaniquement inférieur pour les gestionnaires, absorbé jusqu'ici sans ajustement à la baisse généralisé des prix payés.",
        ],
      },
      {
        heading: "Une divergence sectorielle à surveiller",
        paragraphs: [
          "Cette résilience des multiples n'est pas uniforme. Les secteurs à forte intensité capitalistique (manufacturier, transport) ont vu leurs multiples se comprimer davantage que les secteurs de services à faible intensité d'actifs, ces derniers nécessitant structurellement moins de levier pour atteindre un rendement cible donné.",
        ],
      },
      {
        heading: "Implication pour les vendeurs et les acquéreurs",
        paragraphs: [
          "Pour un vendeur, le message est clair : la structure de l'acquéreur — et non seulement sa réputation ou son intention stratégique — doit désormais faire partie de l'évaluation d'une offre, la capacité de financement variant significativement d'un groupe d'acquéreurs à l'autre dans l'environnement actuel.",
          "Pour un acquéreur, la discipline sur la structure de capital dès la phase de diligence est devenue un déterminant de performance au moins aussi important que le prix d'entrée lui-même.",
        ],
      },
    ],
    tags: ["taux d'intérêt", "financement", "LBO", "valorisation", "note spéciale"],
  },
  {
    slug: "bulletin-t4-2025-private-equity-quebec",
    title: "T4 2025 — Fin d'année attentiste, commanditaires plus sélectifs",
    period: "T4 2025",
    category: "Bulletin trimestriel",
    date: "2026-01-14",
    readTime: "7 min",
    author: "Équipe Finotech Analytics",
    summary:
      "Le quatrième trimestre 2025 clôture l'année sur une note attentiste : volume transactionnel au plus bas depuis 2020 et commanditaires institutionnels de plus en plus sélectifs dans leurs engagements.",
    keyMetrics: [
      { label: "Transactions complétées (QC)", value: "37", trend: "-19 % t/t" },
      { label: "Valeur totale déployée", value: "1,55 G$ CA", trend: "-24 % t/t" },
      { label: "Multiple moyen EV/EBITDA (mid-market)", value: "7,8x", trend: "-0,3x t/t" },
      { label: "Capital levé par les fonds québécois", value: "285 M$ CA", trend: "-15 % t/t" },
    ],
    sections: [
      {
        heading: "Activité transactionnelle",
        paragraphs: [
          "Le T4 2025 enregistre le volume trimestriel le plus faible depuis le T2 2020, avec 37 transactions complétées au Québec. Le ralentissement traditionnel de fin d'année s'est conjugué à une prudence accrue des acquéreurs financiers face à l'incertitude entourant l'évolution des taux directeurs pour 2026.",
        ],
      },
      {
        heading: "Valorisations",
        paragraphs: [
          "Les multiples moyens ont reculé pour un troisième trimestre consécutif, à 7,8x EV/EBITDA. L'écart entre les attentes de prix des vendeurs et les offres des acquéreurs financiers s'est élargi, entraînant un allongement du délai moyen entre la mise en marché d'une entreprise et la signature d'une entente définitive, désormais estimé à 7,4 mois contre 5,8 mois un an plus tôt.",
        ],
      },
      {
        heading: "Levées de fonds",
        paragraphs: [
          "Le capital levé a reculé de 15 % au cours du trimestre. Plusieurs commanditaires institutionnels interrogés dans le cadre de nos entretiens de marché indiquent avoir volontairement ralenti le rythme de leurs nouveaux engagements en fin d'année, invoquant un exercice de réallocation de portefeuille plutôt qu'une perte de confiance envers la classe d'actifs.",
        ],
      },
      {
        heading: "Sorties",
        paragraphs: [
          "Le nombre de sorties a également reculé, plusieurs gestionnaires ayant choisi de reporter la mise en marché d'actifs matures plutôt que d'accepter une valorisation jugée sous-optimale dans un contexte d'acheteurs peu nombreux en fin d'année.",
        ],
      },
      {
        heading: "Perspectives T1 2026",
        paragraphs: [
          "Malgré ce ralentissement, le niveau de capital non déployé (dry powder) accumulé par les fonds québécois demeure élevé, ce qui laisse présager une reprise progressive de l'activité dès que la visibilité sur les taux d'intérêt s'améliorera — une hypothèse partiellement confirmée par les résultats du T1 2026.",
        ],
      },
    ],
    tags: ["private equity", "Québec", "levée de fonds", "T4 2025"],
  },
  {
    slug: "bulletin-t3-2025-private-equity-quebec",
    title: "T3 2025 — Accélération estivale portée par le secteur manufacturier",
    period: "T3 2025",
    category: "Bulletin trimestriel",
    date: "2025-10-08",
    readTime: "7 min",
    author: "Équipe Finotech Analytics",
    summary:
      "Le troisième trimestre 2025 enregistre la plus forte activité transactionnelle de l'année, portée par une vague de transactions dans le secteur manufacturier québécois.",
    keyMetrics: [
      { label: "Transactions complétées (QC)", value: "46", trend: "+21 % t/t" },
      { label: "Valeur totale déployée", value: "2,05 G$ CA", trend: "+31 % t/t" },
      { label: "Multiple moyen EV/EBITDA (mid-market)", value: "8,1x", trend: "+0,2x t/t" },
      { label: "Capital levé par les fonds québécois", value: "335 M$ CA", trend: "+12 % t/t" },
    ],
    sections: [
      {
        heading: "Activité transactionnelle",
        paragraphs: [
          "Avec 46 transactions complétées, le T3 2025 constitue le trimestre le plus actif de l'année. Le secteur manufacturier a porté cette accélération, représentant à lui seul 40 % du volume, dans un contexte de relocalisation de capacités de production nord-américaines qui continue d'attirer l'intérêt des acquéreurs financiers.",
        ],
      },
      {
        heading: "Valorisations",
        paragraphs: [
          "Les multiples moyens ont légèrement progressé à 8,1x EV/EBITDA, portés par une concurrence accrue entre acquéreurs financiers et stratégiques sur les cibles manufacturières les plus recherchées, notamment celles disposant de capacités automatisées ou de certifications export établies.",
        ],
      },
      {
        heading: "Levées de fonds",
        paragraphs: [
          "Le capital levé a progressé de 12 % au cours du trimestre, porté par la clôture finale de deux fonds généralistes de taille moyenne, dont les commanditaires principaux demeurent majoritairement des investisseurs institutionnels québécois.",
        ],
      },
      {
        heading: "Sorties",
        paragraphs: [
          "Les sorties à des acquéreurs stratégiques internationaux ont représenté une part inhabituellement élevée des sorties du trimestre (43 %), plusieurs groupes européens et américains ayant complété des acquisitions de consolidation dans le secteur manufacturier québécois.",
        ],
      },
      {
        heading: "Perspectives T4 2025",
        paragraphs: [
          "Nous anticipions un ralentissement saisonnier habituel en fin d'année, sans prévoir l'ampleur du repli finalement observé au T4 2025, largement attribuable à l'incertitude entourant la trajectoire des taux directeurs qui s'est intensifiée en toute fin d'année.",
        ],
      },
    ],
    tags: ["private equity", "Québec", "manufacturier", "T3 2025"],
  },
];

export function getBulletinBySlug(slug: string) {
  return BULLETINS.find((b) => b.slug === slug);
}

export function getSortedBulletins() {
  return [...BULLETINS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
