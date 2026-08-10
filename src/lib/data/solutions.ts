export type Solution = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  summary: string;
  heroStat: { value: string; label: string };
  benefits: { title: string; description: string }[];
  methodology: { step: string; title: string; description: string }[];
  deliverables: string[];
  results: { metric: string; description: string }[];
  faq: { question: string; answer: string }[];
  cta: { title: string; description: string };
  metaTitle: string;
  metaDescription: string;
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "cfo-as-a-service",
    name: "CFO as a Service",
    category: "corporate-finance",
    tagline: "Une direction financière stratégique, sans la structure d'un CFO à temps plein.",
    summary:
      "Un CFO fractionnaire senior qui pilote votre performance financière, sécurise vos décisions d'investissement et vous prépare aux discussions avec vos prêteurs et investisseurs.",
    heroStat: { value: "2 à 3 jours", label: "par mois, en moyenne, pour un impact continu" },
    benefits: [
      {
        title: "Expertise senior sans le coût fixe",
        description:
          "Accès à un profil de direction financière expérimenté, à une fraction du coût d'un CFO permanent.",
      },
      {
        title: "Crédibilité face aux tiers financiers",
        description:
          "États financiers, prévisions et présentations construits selon les standards attendus par les banquiers et investisseurs.",
      },
      {
        title: "Décisions plus rapides",
        description:
          "Un tableau de bord financier mensuel qui élimine les délais d'attente entre la question et la réponse.",
      },
      {
        title: "Continuité assurée",
        description:
          "Un processus documenté qui survit aux transitions d'équipe et réduit la dépendance à une seule personne.",
      },
    ],
    methodology: [
      {
        step: "01",
        title: "Diagnostic financier initial",
        description: "Revue des états financiers, des processus et des outils existants ; identification des angles morts.",
      },
      {
        step: "02",
        title: "Mise en place du cadre de pilotage",
        description: "Tableau de bord financier, budget de trésorerie et calendrier de gouvernance mensuel.",
      },
      {
        step: "03",
        title: "Pilotage récurrent",
        description: "Suivi mensuel de la performance, participation aux comités de direction et préparation des conseils d'administration.",
      },
      {
        step: "04",
        title: "Soutien aux décisions structurantes",
        description: "Financement, investissement, tarification : modélisation et recommandation avant chaque décision majeure.",
      },
    ],
    deliverables: [
      "Tableau de bord financier mensuel (marge, trésorerie, BFR, rentabilité par ligne d'affaires)",
      "Budget annuel et prévisions de trésorerie glissantes sur 13 semaines",
      "Présentations pour conseil d'administration, banquiers et investisseurs",
      "Politique de gestion du risque financier",
      "Accompagnement lors des négociations de financement",
    ],
    results: [
      { metric: "-35 %", description: "de délai moyen dans la production des états financiers mensuels" },
      { metric: "+18 %", description: "d'amélioration moyenne du fonds de roulement en 12 mois" },
      { metric: "100 %", description: "des clients ayant obtenu ou renégocié leur financement avec de meilleures conditions" },
    ],
    faq: [
      {
        question: "Quelle est la différence avec un comptable ou un contrôleur ?",
        answer:
          "Le comptable enregistre le passé ; le contrôleur fiabilise les chiffres. Le CFO as a Service utilise ces chiffres pour orienter les décisions futures — financement, tarification, investissement, structure de coûts.",
      },
      {
        question: "Combien de temps par mois représente ce mandat ?",
        answer:
          "En moyenne 2 à 3 jours par mois, ajustables selon les périodes (budget annuel, levée de fonds, clôture). Le mandat est dimensionné selon vos enjeux, pas selon un forfait standard.",
      },
      {
        question: "Le CFO travaille-t-il avec notre équipe comptable existante ?",
        answer:
          "Oui. Le CFO as a Service s'appuie sur votre équipe comptable ou votre firme externe pour la tenue de livres, et ajoute la couche de pilotage stratégique qui manque généralement.",
      },
      {
        question: "Peut-on faire évoluer le mandat vers un CFO à temps plein ?",
        answer:
          "Oui, et nous le recommandons souvent nous-mêmes lorsque la croissance le justifie. Nous accompagnons alors le recrutement et la transition.",
      },
    ],
    cta: {
      title: "Votre entreprise a-t-elle besoin d'une direction financière stratégique ?",
      description: "Discutons de vos enjeux de trésorerie, de financement ou de pilotage lors d'un premier échange sans engagement.",
    },
    metaTitle: "CFO as a Service | Finotech Advisory",
    metaDescription:
      "Direction financière fractionnaire senior : tableau de bord mensuel, prévisions de trésorerie, accompagnement financement. Découvrez le CFO as a Service de Finotech Advisory.",
  },
  {
    slug: "financial-performance-system",
    name: "Financial Performance System",
    category: "business-intelligence-data-analysis",
    tagline: "Un système de pilotage de la performance financière, pas un rapport de plus.",
    summary:
      "Nous concevons et implantons le système d'indicateurs financiers qui relie chaque décision opérationnelle à son impact sur la marge, la trésorerie et la rentabilité.",
    heroStat: { value: "6 à 10 semaines", label: "pour un système opérationnel et adopté" },
    benefits: [
      {
        title: "Une seule version de la vérité",
        description: "Fin des écarts entre les chiffres des ventes, de la finance et des opérations.",
      },
      {
        title: "Détection précoce des dérives",
        description: "Alertes automatiques sur les écarts de marge, de coûts ou de délais de recouvrement.",
      },
      {
        title: "Reddition de comptes accélérée",
        description: "Rapports de conseil d'administration produits en heures plutôt qu'en semaines.",
      },
      {
        title: "Autonomie de l'équipe",
        description: "Un système documenté que vos équipes financières peuvent maintenir et faire évoluer.",
      },
    ],
    methodology: [
      { step: "01", title: "Cadrage des indicateurs", description: "Identification des décisions à supporter et des indicateurs qui y répondent réellement." },
      { step: "02", title: "Modélisation des données", description: "Structuration des sources financières et opérationnelles dans un modèle cohérent." },
      { step: "03", title: "Construction du système", description: "Développement des tableaux de bord et des règles d'alerte automatisées." },
      { step: "04", title: "Déploiement et formation", description: "Mise en production, formation des utilisateurs et documentation de gouvernance." },
      { step: "05", title: "Optimisation continue", description: "Ajustement du système sur la base de l'usage réel après 60 et 90 jours." },
    ],
    deliverables: [
      "Cartographie des indicateurs de performance financière",
      "Modèle de données financières unifié",
      "Tableaux de bord exécutifs et opérationnels",
      "Système d'alertes sur écarts significatifs",
      "Guide de gouvernance et manuel d'utilisation",
    ],
    results: [
      { metric: "-60 %", description: "de temps consacré à la production de rapports mensuels" },
      { metric: "3x", description: "plus rapide pour détecter une dérive de marge significative" },
      { metric: "+22 %", description: "d'amélioration moyenne de la précision des prévisions financières" },
    ],
    faq: [
      { question: "Ce système remplace-t-il notre ERP ou notre comptabilité ?", answer: "Non. Il s'appuie sur vos systèmes existants (ERP, comptabilité, CRM) pour en extraire une couche de pilotage décisionnelle, sans les remplacer." },
      { question: "Quels outils utilisez-vous ?", answer: "Nous sélectionnons l'outil selon votre contexte — Power BI, Looker ou des solutions plus légères pour les plus petites structures — plutôt que d'imposer une technologie unique." },
      { question: "Qui maintient le système après la livraison ?", answer: "Votre équipe, formée et outillée d'une documentation complète. Nous restons disponibles pour un soutien ponctuel si nécessaire." },
    ],
    cta: {
      title: "Vos rapports financiers prennent-ils trop de temps à produire et trop peu à être utilisés ?",
      description: "Voyons ensemble comment un système de pilotage bien conçu change la donne.",
    },
    metaTitle: "Financial Performance System | Finotech Advisory",
    metaDescription:
      "Conception et implantation d'un système d'indicateurs financiers unifié : tableaux de bord, alertes, gouvernance. Une solution Finotech Advisory.",
  },
  {
    slug: "business-intelligence-process",
    name: "Business Intelligence Process",
    category: "business-intelligence-data-analysis",
    tagline: "Le processus, pas seulement les outils, qui transforme la donnée en avantage concurrentiel.",
    summary:
      "Nous structurons le processus organisationnel de collecte, validation et diffusion de l'information — la condition souvent négligée pour qu'un projet de BI produise réellement de la valeur.",
    heroStat: { value: "85 %", label: "des projets BI échouent par manque de processus, non d'outils" },
    benefits: [
      { title: "Adoption réelle par les équipes", description: "Un processus conçu autour des décisions du quotidien, pas autour de la technologie." },
      { title: "Qualité de donnée durable", description: "Des règles de validation et une responsabilisation claire à chaque étape du cycle de la donnée." },
      { title: "Vitesse décisionnelle", description: "Un cycle de diffusion de l'information aligné sur le rythme de vos décisions d'affaires." },
      { title: "Indépendance technologique", description: "Un processus qui reste valide même si vous changez d'outil de visualisation." },
    ],
    methodology: [
      { step: "01", title: "Cartographie des décisions", description: "Identification des décisions récurrentes et de l'information nécessaire pour les prendre." },
      { step: "02", title: "Audit du cycle de la donnée", description: "Analyse des sources, de la fréquence et de la fiabilité des données actuelles." },
      { step: "03", title: "Conception du processus BI", description: "Définition des rôles, des règles de qualité et du calendrier de diffusion." },
      { step: "04", title: "Implantation et transfert", description: "Déploiement du processus avec les équipes concernées et transfert de la gouvernance." },
    ],
    deliverables: [
      "Cartographie des décisions et des besoins d'information",
      "Charte de gouvernance de la donnée",
      "Processus documenté de collecte, validation et diffusion",
      "Matrice de responsabilités (RACI) pour la donnée",
      "Plan de transition et de formation des équipes",
    ],
    results: [
      { metric: "+40 %", description: "de fiabilité perçue des rapports par les équipes de direction" },
      { metric: "-50 %", description: "de temps consacré à la réconciliation manuelle des chiffres" },
      { metric: "90 jours", description: "délai moyen pour un processus BI pleinement opérationnel" },
    ],
    faq: [
      { question: "Faut-il changer nos outils actuels ?", answer: "Rarement. Le problème est presque toujours le processus autour de l'outil, pas l'outil lui-même." },
      { question: "Ce mandat inclut-il la construction des tableaux de bord ?", answer: "Le mandat se concentre sur le processus ; la construction technique des tableaux de bord relève de notre solution Financial Performance System, souvent combinée." },
    ],
    cta: {
      title: "Vos rapports circulent, mais les décisions restent lentes ?",
      description: "Le problème est probablement le processus. Parlons-en.",
    },
    metaTitle: "Business Intelligence Process | Finotech Advisory",
    metaDescription:
      "Structurer le processus de collecte, validation et diffusion de l'information pour une prise de décision plus rapide et plus fiable.",
  },
  {
    slug: "financial-modeling-project",
    name: "Financial Modeling Project",
    category: "corporate-finance",
    tagline: "Des modèles financiers qui résistent à l'examen d'un comité d'investissement.",
    summary:
      "Construction de modèles financiers robustes pour la planification stratégique, la levée de fonds, l'évaluation de projets ou la prise de décision d'investissement.",
    heroStat: { value: "100 %", label: "des hypothèses documentées et sourcées" },
    benefits: [
      { title: "Crédibilité face aux investisseurs", description: "Des modèles construits selon les standards attendus par les fonds et institutions financières." },
      { title: "Scénarios robustes", description: "Analyses de sensibilité et scénarios pessimiste, réaliste et optimiste, systématiquement." },
      { title: "Décisions d'investissement éclairées", description: "Un modèle qui répond clairement à la question : ce projet crée-t-il de la valeur ?" },
      { title: "Modèle réutilisable", description: "Une structure claire que vos équipes peuvent mettre à jour de façon autonome." },
    ],
    methodology: [
      { step: "01", title: "Cadrage et hypothèses", description: "Définition de l'objectif du modèle et collecte des hypothèses opérationnelles et de marché." },
      { step: "02", title: "Construction du modèle", description: "Modélisation des revenus, coûts, investissements et flux de trésorerie." },
      { step: "03", title: "Tests de sensibilité", description: "Analyse des scénarios et des variables critiques à l'aide de tests de robustesse." },
      { step: "04", title: "Validation et présentation", description: "Revue avec la direction et présentation aux parties prenantes concernées." },
    ],
    deliverables: [
      "Modèle financier intégré (compte de résultat, bilan, flux de trésorerie)",
      "Analyse de sensibilité multi-variables",
      "Scénarios pessimiste, réaliste, optimiste",
      "Note d'hypothèses documentée et sourcée",
      "Présentation synthétique pour parties prenantes",
    ],
    results: [
      { metric: "3", description: "scénarios systématiquement livrés pour chaque décision d'investissement" },
      { metric: "-45 %", description: "de temps de révision par les comités d'investissement grâce à la clarté des hypothèses" },
    ],
    faq: [
      { question: "Pour quels types de décisions ce mandat est-il pertinent ?", answer: "Levée de fonds, lancement de produit, expansion géographique, décision de faire ou d'acheter, évaluation de projet d'investissement." },
      { question: "Le modèle est-il livré dans Excel ?", answer: "Oui, dans un format Excel structuré, documenté et audité — le standard le plus largement accepté par les investisseurs et institutions financières." },
    ],
    cta: {
      title: "Une décision d'investissement importante à valider ?",
      description: "Un modèle financier rigoureux réduit le risque de la décision avant qu'elle ne soit prise.",
    },
    metaTitle: "Financial Modeling Project | Finotech Advisory",
    metaDescription:
      "Modèles financiers intégrés, scénarios et analyses de sensibilité pour vos décisions d'investissement et vos levées de fonds.",
  },
  {
    slug: "data-analytics-research",
    name: "Data Analytics & Research",
    category: "training-and-research",
    tagline: "La recherche appliquée et l'analyse de données au service de vos décisions stratégiques.",
    summary:
      "Études de marché, analyses concurrentielles et modèles analytiques sur mesure pour répondre à une question stratégique précise.",
    heroStat: { value: "4 à 8 semaines", label: "par étude, selon la portée" },
    benefits: [
      { title: "Décisions fondées sur les faits", description: "Une recherche rigoureuse plutôt qu'une intuition, pour les décisions à enjeu élevé." },
      { title: "Connaissance concurrentielle actionnable", description: "Une lecture claire du positionnement des concurrents et des opportunités de marché." },
      { title: "Analyses reproductibles", description: "Une méthodologie documentée que vos équipes peuvent réutiliser pour les prochaines questions." },
      { title: "Objectivité externe", description: "Un regard indépendant, sans les biais internes qui affectent souvent l'analyse stratégique." },
    ],
    methodology: [
      { step: "01", title: "Définition de la question de recherche", description: "Clarification précise de la décision que l'étude doit éclairer." },
      { step: "02", title: "Collecte de données", description: "Sources primaires et secondaires, entrevues d'experts et données de marché." },
      { step: "03", title: "Analyse et modélisation", description: "Traitement statistique, analyse comparative et synthèse des résultats." },
      { step: "04", title: "Recommandations", description: "Présentation des conclusions et des implications concrètes pour la décision visée." },
    ],
    deliverables: [
      "Rapport de recherche structuré et sourcé",
      "Analyse concurrentielle détaillée",
      "Modèle analytique ou statistique sur mesure",
      "Présentation exécutive des conclusions",
      "Recommandations priorisées",
    ],
    results: [
      { metric: "50+", description: "études sectorielles menées à travers 38 secteurs et sous-secteurs" },
      { metric: "100 %", description: "des études livrées avec sources primaires et secondaires vérifiées" },
    ],
    faq: [
      { question: "Quels types de questions pouvez-vous traiter ?", answer: "Taille et croissance d'un marché, positionnement concurrentiel, faisabilité d'une expansion, comportement d'achat, impact d'un changement réglementaire." },
      { question: "Travaillez-vous avec des données propriétaires du client ?", answer: "Oui, nous combinons souvent vos données internes avec des sources externes pour une analyse plus complète." },
    ],
    cta: {
      title: "Une question stratégique sans réponse claire ?",
      description: "Notre équipe de recherche peut y répondre avec rigueur, en quelques semaines.",
    },
    metaTitle: "Data Analytics & Research | Finotech Advisory",
    metaDescription:
      "Études de marché, analyses concurrentielles et recherche appliquée pour éclairer vos décisions stratégiques les plus importantes.",
  },
  {
    slug: "restructuration-entreprise",
    name: "Restructuration d'entreprise",
    category: "business-strategy",
    tagline: "Stabiliser, réorganiser et relancer — avec un plan, pas dans l'urgence.",
    summary:
      "Accompagnement des entreprises en difficulté financière ou opérationnelle : diagnostic, plan de redressement, négociation avec les parties prenantes et suivi de l'exécution.",
    heroStat: { value: "13 semaines", label: "pour stabiliser la trésorerie dans un mandat type" },
    benefits: [
      { title: "Diagnostic sans complaisance", description: "Une lecture honnête de la situation financière et opérationnelle réelle de l'entreprise." },
      { title: "Plan de redressement chiffré", description: "Des mesures priorisées selon leur impact sur la trésorerie et leur délai de mise en œuvre." },
      { title: "Crédibilité auprès des créanciers", description: "Un plan structuré qui facilite les négociations avec prêteurs, fournisseurs et actionnaires." },
      { title: "Accompagnement dans l'exécution", description: "Un suivi rapproché pour transformer le plan en résultats mesurables." },
    ],
    methodology: [
      { step: "01", title: "Diagnostic de la situation", description: "Analyse de la trésorerie, de la rentabilité par activité et des causes racines des difficultés." },
      { step: "02", title: "Plan de stabilisation", description: "Mesures immédiates de préservation de la trésorerie et priorisation des paiements." },
      { step: "03", title: "Plan de redressement", description: "Restructuration opérationnelle, renégociation des ententes et plan de financement." },
      { step: "04", title: "Mise en œuvre et suivi", description: "Accompagnement de l'exécution avec suivi hebdomadaire des indicateurs critiques." },
    ],
    deliverables: [
      "Diagnostic complet de la situation financière et opérationnelle",
      "Plan de stabilisation de la trésorerie à 13 semaines",
      "Plan de redressement à moyen terme",
      "Support à la négociation avec créanciers et parties prenantes",
      "Tableau de suivi hebdomadaire de l'exécution",
    ],
    results: [
      { metric: "80 %", description: "des mandats ayant évité une procédure d'insolvabilité formelle" },
      { metric: "13 sem.", description: "délai moyen de stabilisation de la trésorerie" },
    ],
    faq: [
      { question: "À quel moment devrait-on consulter pour une restructuration ?", answer: "Le plus tôt possible. Plus le diagnostic intervient tôt, plus les options de redressement restent nombreuses et moins coûteuses." },
      { question: "Travaillez-vous avec nos créanciers directement ?", answer: "Nous préparons et appuyons les discussions avec vos créanciers ; les décisions finales et la représentation légale demeurent de votre ressort et de celui de vos conseillers juridiques." },
    ],
    cta: {
      title: "La trésorerie de votre entreprise est-elle sous pression ?",
      description: "Un diagnostic rapide permet souvent d'élargir les options encore disponibles.",
    },
    metaTitle: "Restructuration d'entreprise | Finotech Advisory",
    metaDescription:
      "Diagnostic, plan de redressement et accompagnement de l'exécution pour les entreprises en difficulté financière ou opérationnelle.",
  },
  {
    slug: "business-valuation",
    name: "Business Valuation",
    category: "corporate-finance",
    tagline: "Une valorisation défendable devant un acheteur, un tribunal ou un conseil d'administration.",
    summary:
      "Évaluation d'entreprise selon les normes reconnues, pour transaction, litige, planification successorale, financement ou reddition de comptes aux actionnaires.",
    heroStat: { value: "3", label: "méthodes croisées pour chaque évaluation" },
    benefits: [
      { title: "Crédibilité méthodologique", description: "Approches multiples et croisées — revenus, marché, actifs — selon les normes professionnelles reconnues." },
      { title: "Indépendance", description: "Une évaluation objective, sans intérêt dans l'issue de la transaction évaluée." },
      { title: "Clarté pour la négociation", description: "Une fourchette de valeur justifiée, utile autant à l'acheteur qu'au vendeur." },
      { title: "Solidité en cas de contestation", description: "Une documentation rigoureuse, prête à résister à l'examen d'un tribunal ou d'une autorité fiscale." },
    ],
    methodology: [
      { step: "01", title: "Collecte et normalisation", description: "Analyse des états financiers historiques et normalisation des résultats." },
      { step: "02", title: "Application des méthodes", description: "Approche par les revenus (flux actualisés), par le marché (comparables) et par les actifs." },
      { step: "03", title: "Réconciliation et fourchette de valeur", description: "Pondération des méthodes et détermination d'une fourchette de valeur justifiée." },
      { step: "04", title: "Rapport et présentation", description: "Rapport d'évaluation documenté et présentation aux parties concernées." },
    ],
    deliverables: [
      "Rapport d'évaluation d'entreprise complet",
      "Analyse et normalisation des états financiers",
      "Modèle de flux de trésorerie actualisés",
      "Analyse de comparables de marché",
      "Fourchette de valeur justifiée et documentée",
    ],
    results: [
      { metric: "200+", description: "évaluations réalisées pour transaction, litige et planification successorale" },
      { metric: "0", description: "évaluation invalidée en contestation formelle à ce jour" },
    ],
    faq: [
      { question: "Dans quels contextes une évaluation est-elle nécessaire ?", answer: "Vente ou achat d'entreprise, litige entre actionnaires, planification successorale, financement, conversion ou restructuration corporative, reddition de comptes fiscale." },
      { question: "Quelle est la différence entre une évaluation formelle et une estimation ?", answer: "L'évaluation formelle suit une méthodologie documentée et défendable ; l'estimation offre un ordre de grandeur rapide, utile en amont d'une décision préliminaire." },
    ],
    cta: {
      title: "Besoin d'une évaluation d'entreprise rigoureuse et défendable ?",
      description: "Discutons du contexte de votre évaluation et du niveau de rigueur requis.",
    },
    metaTitle: "Business Valuation | Finotech Advisory",
    metaDescription:
      "Évaluation d'entreprise selon les normes reconnues : flux actualisés, comparables de marché, approche par les actifs. Une solution Finotech Advisory.",
  },
  {
    slug: "optimisation-organisationnelle",
    name: "Optimisation Organisationnelle",
    category: "business-strategy",
    tagline: "Aligner la structure organisationnelle sur la stratégie — pas l'inverse.",
    summary:
      "Revue de la structure organisationnelle, des processus et de l'allocation des ressources pour éliminer les frictions qui ralentissent l'exécution stratégique.",
    heroStat: { value: "-25 %", label: "de délai moyen d'exécution des décisions après optimisation" },
    benefits: [
      { title: "Clarté des rôles et responsabilités", description: "Une structure organisationnelle qui élimine les zones grises et les doublons." },
      { title: "Exécution plus rapide", description: "Des processus de décision raccourcis et des circuits d'approbation simplifiés." },
      { title: "Allocation optimisée des ressources", description: "Des effectifs et budgets alignés sur les priorités stratégiques réelles, pas sur l'historique." },
      { title: "Culture de performance", description: "Des indicateurs de responsabilisation clairs à chaque niveau de l'organisation." },
    ],
    methodology: [
      { step: "01", title: "Diagnostic organisationnel", description: "Analyse de la structure actuelle, des processus clés et des frictions rapportées par les équipes." },
      { step: "02", title: "Conception de la structure cible", description: "Réorganisation des rôles, des équipes et des circuits de décision alignés sur la stratégie." },
      { step: "03", title: "Plan de transition", description: "Séquencement du changement, gestion des impacts humains et communication interne." },
      { step: "04", title: "Accompagnement du changement", description: "Suivi de l'adoption et ajustements durant les 90 premiers jours." },
    ],
    deliverables: [
      "Diagnostic organisationnel complet",
      "Nouvelle structure organisationnelle documentée",
      "Cartographie des processus de décision clés",
      "Plan de transition et de communication",
      "Indicateurs de suivi de l'adoption du changement",
    ],
    results: [
      { metric: "-25 %", description: "de délai moyen d'exécution des décisions stratégiques" },
      { metric: "+30 %", description: "d'amélioration perçue de la clarté des rôles par les équipes" },
    ],
    faq: [
      { question: "Ce mandat implique-t-il nécessairement des réductions de personnel ?", answer: "Non. L'optimisation organisationnelle vise d'abord la clarté et l'efficacité de la structure ; les impacts sur les effectifs, lorsqu'ils existent, découlent du diagnostic et non l'inverse." },
      { question: "Comment gérez-vous la résistance au changement ?", answer: "Par une communication transparente, une séquence de mise en œuvre progressive et l'implication des gestionnaires clés dès la phase de conception." },
    ],
    cta: {
      title: "Votre structure organisationnelle freine-t-elle votre stratégie ?",
      description: "Un diagnostic organisationnel révèle souvent des gains rapides et peu coûteux.",
    },
    metaTitle: "Optimisation Organisationnelle | Finotech Advisory",
    metaDescription:
      "Diagnostic organisationnel, redesign de structure et accompagnement du changement pour aligner votre organisation sur votre stratégie.",
  },
];

export function getSolutionBySlug(slug: string) {
  return SOLUTIONS.find((s) => s.slug === slug);
}

export function getSolutionsByCategory(category: string) {
  return SOLUTIONS.filter((s) => s.category === category);
}
