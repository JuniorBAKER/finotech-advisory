export type ResearchNote = {
  slug: string;
  title: string;
  noteType: "Note sectorielle" | "Note sur titre";
  sector: string;
  ticker?: string;
  rating?: "Achat" | "Conserver" | "Vendre";
  priceTarget?: string;
  currentPrice?: string;
  upside?: string;
  date: string;
  readTime: string;
  analyst: string;
  summary: string;
  keyMetrics: { label: string; value: string; trend: string }[];
  sections: { heading: string; paragraphs: string[] }[];
  tags: string[];
};

export const RESEARCH_CATEGORIES = ["Toutes", "Note sectorielle", "Note sur titre"];

// Avertissement affiché sur chaque note — les sociétés et données ci-dessous
// sont des illustrations fictives à des fins de démonstration éditoriale et
// ne constituent ni une recommandation de placement ni une analyse de titres
// réellement cotés.
export const RESEARCH_DISCLAIMER =
  "Cette note est publiée à titre informatif et pédagogique seulement. Les émetteurs, cours et cibles mentionnés sont fictifs et servent à illustrer le format éditorial d'Equity Research. Aucun élément de cette page ne constitue un conseil en placement, une recommandation d'achat ou de vente, ni une sollicitation. Consultez un conseiller en valeurs mobilières inscrit avant toute décision d'investissement.";

export const RESEARCH_NOTES: ResearchNote[] = [
  {
    slug: "secteur-technologique-quebecois-t2-2026",
    title: "Secteur technologique québécois : la consolidation s'accélère",
    noteType: "Note sectorielle",
    sector: "Technologie",
    date: "2026-07-22",
    readTime: "9 min",
    analyst: "Équipe Equity Research, Finotech Analytics",
    summary:
      "Le secteur technologique coté québécois entre dans une phase de consolidation : croissance organique en ralentissement, multiples compressés, et un nombre croissant d'émetteurs de petite capitalisation devenus des cibles logiques pour le private equity ou des pairs mieux capitalisés.",
    keyMetrics: [
      { label: "Multiple EV/Revenus médian", value: "3,4x", trend: "-0,6x" },
      { label: "Croissance organique médiane", value: "11 %", trend: "-4 pts" },
      { label: "Émetteurs sous 200 M$ CA", value: "62 %", trend: "+5 pts" },
      { label: "Transactions M&A annoncées (S1)", value: "7", trend: "+2" },
    ],
    sections: [
      {
        heading: "Un repricing généralisé, pas une crise de fond",
        paragraphs: [
          "L'illustration composite que nous suivons pour les émetteurs technologiques québécois cotés montre une compression du multiple EV/Revenus médian de 4,0x à 3,4x au cours des douze derniers mois. Cette baisse reflète surtout un ajustement des attentes de croissance plutôt qu'une détérioration des modèles d'affaires sous-jacents : la majorité des émetteurs suivis demeurent rentables ou proches du seuil de rentabilité.",
          "Le marché continue de récompenser la rétention nette de revenus au-delà de 110 % et pénalise sévèrement les émetteurs qui en dépendent fortement d'un petit nombre de clients concentrés — un profil encore fréquent chez les capitalisations sous 200 M$ CA.",
        ],
      },
      {
        heading: "Les petites capitalisations, cibles naturelles de consolidation",
        paragraphs: [
          "Avec 62 % des émetteurs technologiques québécois cotés sous 200 M$ CA de capitalisation boursière, le bassin de cibles logiques pour une consolidation par des pairs mieux capitalisés ou des fonds de private equity continue de s'élargir. Sept transactions de fusion-acquisition impliquant un émetteur technologique québécois ont été annoncées au premier semestre, contre cinq sur la même période l'an dernier.",
          "Les acquéreurs privilégient des cibles avec un carnet de commandes récurrent supérieur à 70 % des revenus et une structure de coûts déjà optimisée, réduisant le risque d'exécution post-acquisition.",
        ],
      },
      {
        heading: "Ce que nous surveillons au prochain trimestre",
        paragraphs: [
          "Trois signaux orienteront notre lecture du secteur au troisième trimestre : la trajectoire des dépenses en infrastructure infonuagique des grands donneurs d'ordres, l'évolution du coût du capital pour les émetteurs encore non rentables, et le rythme des annonces de rachat d'actions chez les émetteurs matures generant des flux de trésorerie disponibles positifs.",
        ],
      },
    ],
    tags: ["technologie", "secteur", "consolidation", "valorisation"],
  },
  {
    slug: "groupe-nordika-ndk-initiation",
    title: "Groupe Nordika inc. (TSX : NDK) — Initiation de couverture",
    noteType: "Note sur titre",
    sector: "Technologie — Infrastructure infonuagique",
    ticker: "TSX : NDK",
    rating: "Achat",
    priceTarget: "34,00 $ CA",
    currentPrice: "27,80 $ CA",
    upside: "+22 %",
    date: "2026-07-15",
    readTime: "11 min",
    analyst: "Équipe Equity Research, Finotech Analytics",
    summary:
      "Nous initions la couverture de Groupe Nordika inc. (émetteur illustratif) avec une recommandation Achat et une cible de cours de 34,00 $ CA, soit un potentiel d'appréciation de 22 % sur douze mois, appuyée par une accélération de la marge d'EBITDA ajusté et une position de trésorerie nette solide.",
    keyMetrics: [
      { label: "Cible de cours (12 mois)", value: "34,00 $", trend: "+22 %" },
      { label: "Marge EBITDA ajusté (T2)", value: "24,3 %", trend: "+310 pb" },
      { label: "Rétention nette de revenus", value: "116 %", trend: "+2 pts" },
      { label: "Trésorerie nette / capitalisation", value: "9 %", trend: "+1 pt" },
    ],
    sections: [
      {
        heading: "Thèse d'investissement",
        paragraphs: [
          "Groupe Nordika inc. (TSX : NDK, société illustrative) opère une plateforme de gestion d'infrastructure infonuagique destinée aux moyennes entreprises canadiennes. Le titre se négocie actuellement à 8,1x l'EBITDA ajusté prévisionnel des douze prochains mois, un escompte d'environ 15 % par rapport à ses pairs nord-américains de taille comparable, malgré une croissance organique et une marge supérieures à la médiane du groupe de comparaison.",
          "Notre cible de 34,00 $ CA applique un multiple de 9,5x à notre estimation d'EBITDA ajusté des douze prochains mois — toujours en retrait des pairs — et reflète la fermeture partielle, et non totale, de cet écart de valorisation à mesure que la marge continue de s'améliorer.",
        ],
      },
      {
        heading: "Catalyseurs à surveiller",
        paragraphs: [
          "Trois catalyseurs pourraient accélérer la révision à la hausse du multiple : la confirmation d'une marge d'EBITDA ajusté supérieure à 25 % au T3, l'annonce d'un premier programme de rachat d'actions maintenant que la société est en position de trésorerie nette positive, et la signature de contrats pluriannuels avec au moins deux nouveaux clients de plus de 500 employés.",
        ],
      },
      {
        heading: "Principaux risques",
        paragraphs: [
          "La concentration client demeure le principal risque : les dix plus grands clients représentent environ 34 % des revenus. Une prolongation des cycles de vente en contexte de resserrement des budgets technologiques des PME clientes constitue le second risque le plus significatif à notre thèse.",
        ],
      },
    ],
    tags: ["technologie", "infonuagique", "note sur titre", "initiation"],
  },
  {
    slug: "secteur-manufacturier-quebecois-perspectives-2026",
    title: "Secteur manufacturier québécois : perspectives pour le second semestre",
    noteType: "Note sectorielle",
    sector: "Manufacturier",
    date: "2026-06-18",
    readTime: "8 min",
    analyst: "Équipe Equity Research, Finotech Analytics",
    summary:
      "Le secteur manufacturier québécois coté affiche une résilience opérationnelle notable malgré la pression sur les coûts d'intrants : les marges se stabilisent grâce à des programmes d'automatisation entamés depuis 2023-2024, tandis que le carnet de commandes reste soutenu par la demande en infrastructures.",
    keyMetrics: [
      { label: "Marge d'exploitation médiane", value: "13,1 %", trend: "+0,4 pt" },
      { label: "Carnet de commandes (mois)", value: "7,2", trend: "+0,5" },
      { label: "Multiple EV/EBITDA médian", value: "6,8x", trend: "+0,2x" },
      { label: "Intensité capitalistique (capex/ventes)", value: "5,4 %", trend: "+0,9 pt" },
    ],
    sections: [
      {
        heading: "L'automatisation commence à porter fruit",
        paragraphs: [
          "Après deux années d'investissements soutenus en automatisation et en robotisation des lignes de production, les émetteurs manufacturiers québécois cotés que nous suivons affichent une marge d'exploitation médiane en légère hausse malgré une inflation des coûts d'intrants encore présente. L'intensité capitalistique demeure élevée à 5,4 % des ventes, signe que le cycle d'investissement n'est pas terminé.",
          "Les entreprises ayant complété la première phase de leurs projets d'automatisation dégagent désormais un avantage de marge de 150 à 250 points de base par rapport à celles encore en phase de déploiement, un écart que nous nous attendons à voir se creuser.",
        ],
      },
      {
        heading: "Une demande soutenue par les infrastructures publiques",
        paragraphs: [
          "Le carnet de commandes médian du secteur atteint désormais 7,2 mois de production, en hausse par rapport à 6,7 mois il y a un an, porté notamment par les projets d'infrastructures publiques et de construction non résidentielle. Cette visibilité accrue soutient une légère expansion du multiple EV/EBITDA médian du secteur, de 6,6x à 6,8x.",
        ],
      },
      {
        heading: "Points de vigilance",
        paragraphs: [
          "La disponibilité de main-d'œuvre qualifiée demeure la principale contrainte opérationnelle rapportée par les émetteurs suivis, davantage que l'accès au financement ou la demande elle-même. Une normalisation plus lente que prévu des coûts de matières premières constitue le second risque à surveiller pour le second semestre.",
        ],
      },
    ],
    tags: ["manufacturier", "secteur", "automatisation", "marges"],
  },
  {
    slug: "technologies-aurera-aur-mise-a-jour",
    title: "Technologies Aurera inc. (TSXV : AUR) — Mise à jour trimestrielle",
    noteType: "Note sur titre",
    sector: "Technologie — Logiciels d'entreprise",
    ticker: "TSXV : AUR",
    rating: "Conserver",
    priceTarget: "5,50 $ CA",
    currentPrice: "5,15 $ CA",
    upside: "+7 %",
    date: "2026-05-28",
    readTime: "7 min",
    analyst: "Équipe Equity Research, Finotech Analytics",
    summary:
      "Nous maintenons notre recommandation Conserver sur Technologies Aurera inc. (émetteur illustratif) après des résultats trimestriels en ligne avec nos attentes : la croissance des revenus ralentit comme prévu, et la valorisation actuelle reflète déjà adéquatement le profil risque-rendement à ce stade du cycle de croissance de la société.",
    keyMetrics: [
      { label: "Cible de cours (12 mois)", value: "5,50 $", trend: "+7 %" },
      { label: "Croissance des revenus (a/a)", value: "9 %", trend: "-6 pts" },
      { label: "Marge EBITDA ajusté", value: "6 %", trend: "+2 pts" },
      { label: "Ratio d'endettement net/EBITDA", value: "1,9x", trend: "-0,3x" },
    ],
    sections: [
      {
        heading: "Résultats en ligne, sans catalyseur immédiat",
        paragraphs: [
          "Technologies Aurera inc. (TSXV : AUR, société illustrative) a rapporté une croissance des revenus de 9 % sur douze mois, conforme à nos attentes mais en net ralentissement par rapport aux 15 % rapportés il y a un an. La marge d'EBITDA ajusté continue de s'améliorer graduellement, un développement positif, mais insuffisant à lui seul pour justifier une révision à la hausse de notre cible.",
          "Le titre se négocie actuellement à un multiple proche de sa cible implicite ; nous ne voyons pas d'asymétrie suffisante entre le potentiel de hausse et le risque d'exécution pour recommander une pondération accrue à ce stade.",
        ],
      },
      {
        heading: "Ce qui ferait évoluer notre recommandation",
        paragraphs: [
          "Une réaccélération de la croissance des revenus au-delà de 13 % sur deux trimestres consécutifs, combinée à une réduction additionnelle du ratio d'endettement net sous 1,5x, nous amènerait à réévaluer notre recommandation à la hausse. À l'inverse, une nouvelle compression de marge ou une perte de client majeur nous amènerait à revoir notre cible à la baisse.",
        ],
      },
    ],
    tags: ["technologie", "logiciels", "note sur titre", "mise à jour"],
  },
];

export function getResearchNoteBySlug(slug: string) {
  return RESEARCH_NOTES.find((n) => n.slug === slug);
}

export function getSortedResearchNotes() {
  return [...RESEARCH_NOTES].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
