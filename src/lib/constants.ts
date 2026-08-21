export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.finotechadvisory.ca";

export const COMPANY = {
  name: "Finotech Advisory Inc.",
  shortName: "Finotech",
  legalName: "Finotech Advisory Inc.",
  tagline: "Décider mieux, créer plus de valeur.",
  mission:
    "Transformer les données financières en décisions stratégiques qui créent une valeur durable.",
  vision:
    "Devenir le cabinet de référence en finance stratégique, performance organisationnelle et intelligence décisionnelle.",
  description:
    "Finotech Advisory Inc. est un cabinet de conseil stratégique spécialisé en business intelligence, stratégie d'entreprise, finance corporative, formation et recherche appliquée. Nous accompagnons dirigeants, conseils d'administration et investisseurs dans leurs décisions les plus critiques.",
  founded: "2021",
  email: "contact@finotechadvisory.ca",
  phone: "+1 819 580-3648",
  addressLine: "41 Rue King Ouest, Sherbrooke, QC J1H 1P1",
  city: "Sherbrooke",
  region: "Québec",
  country: "Canada",
  linkedin: "https://www.linkedin.com/company/finotech-advisory",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "/rendez-vous",
};

export const VALUES = [
  {
    name: "Excellence",
    description:
      "Chaque livrable est soumis au même standard : celui qu'un conseil d'administration doit pouvoir approuver sans réserve.",
  },
  {
    name: "Intégrité",
    description:
      "Nos recommandations reposent sur les faits, jamais sur ce que le client souhaite entendre.",
  },
  {
    name: "Innovation",
    description:
      "Nous combinons méthodes financières éprouvées et technologies analytiques pour raccourcir le chemin entre la donnée et la décision.",
  },
  {
    name: "Rigueur",
    description:
      "Chaque hypothèse est testée, chaque chiffre est traçable, chaque recommandation est défendable.",
  },
  {
    name: "Création de valeur",
    description:
      "Un mandat qui n'améliore pas une décision, une marge ou une valorisation n'est pas un mandat que nous acceptons.",
  },
  {
    name: "Orientation résultats",
    description:
      "Nous mesurons notre performance à la vôtre : impact financier, délai de mise en œuvre, adoption réelle.",
  },
];

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export const NAV: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  {
    label: "Expertises",
    href: "/expertises",
    children: [
      {
        label: "Business Intelligence & Data Analysis",
        href: "/expertises/business-intelligence-data-analysis",
        description: "Transformer la donnée dispersée en tableaux de bord décisionnels.",
      },
      {
        label: "Business Strategy",
        href: "/expertises/business-strategy",
        description: "Choix stratégiques, croissance et positionnement concurrentiel.",
      },
      {
        label: "Corporate Finance",
        href: "/expertises/corporate-finance",
        description: "Structure financière, valorisation, financement et transactions.",
      },
      {
        label: "Training and Research",
        href: "/expertises/training-and-research",
        description: "Monter en compétence les équipes et les instances de gouvernance.",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "CFO as a Service", href: "/solutions/cfo-as-a-service" },
      { label: "Financial Performance System", href: "/solutions/financial-performance-system" },
      { label: "Business Intelligence Process", href: "/solutions/business-intelligence-process" },
      { label: "Financial Modeling Project", href: "/solutions/financial-modeling-project" },
      { label: "Data Analytics & Research", href: "/solutions/data-analytics-research" },
      { label: "Restructuration d'entreprise", href: "/solutions/restructuration-entreprise" },
      { label: "Business Valuation", href: "/solutions/business-valuation" },
      { label: "Optimisation Organisationnelle", href: "/solutions/optimisation-organisationnelle" },
    ],
  },
  { label: "Secteurs", href: "/secteurs" },
  { label: "Méthodologie", href: "/methodologie" },
  { label: "Études de cas", href: "/etudes-de-cas" },
  { label: "Insights", href: "/insights" },
  {
    label: "Finotech Analytics",
    href: "/finotech-analytics",
    description: "Bulletins Private Equity et notes Equity Research de Finotech Advisory.",
    children: [
      {
        label: "Private Equity",
        href: "/finotech-analytics/private-equity",
        description: "Le bulletin trimestriel du capital-investissement au Québec.",
      },
      {
        label: "Equity Research",
        href: "/finotech-analytics/equity-research",
        description: "Notes sectorielles et notes sur titres d'émetteurs cotés québécois.",
      },
    ],
  },
  { label: "Carrières", href: "/carrieres" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  expertises: [
    { label: "Business Intelligence & Data Analysis", href: "/expertises/business-intelligence-data-analysis" },
    { label: "Business Strategy", href: "/expertises/business-strategy" },
    { label: "Corporate Finance", href: "/expertises/corporate-finance" },
    { label: "Training and Research", href: "/expertises/training-and-research" },
  ],
  solutions: [
    { label: "CFO as a Service", href: "/solutions/cfo-as-a-service" },
    { label: "Financial Performance System", href: "/solutions/financial-performance-system" },
    { label: "Business Intelligence Process", href: "/solutions/business-intelligence-process" },
    { label: "Financial Modeling Project", href: "/solutions/financial-modeling-project" },
    { label: "Data Analytics & Research", href: "/solutions/data-analytics-research" },
    { label: "Restructuration d'entreprise", href: "/solutions/restructuration-entreprise" },
    { label: "Business Valuation", href: "/solutions/business-valuation" },
    { label: "Optimisation Organisationnelle", href: "/solutions/optimisation-organisationnelle" },
  ],
  entreprise: [
    { label: "À propos", href: "/a-propos" },
    { label: "Méthodologie", href: "/methodologie" },
    { label: "Études de cas", href: "/etudes-de-cas" },
    { label: "Secteurs", href: "/secteurs" },
    { label: "Insights", href: "/insights" },
    { label: "Finotech Analytics", href: "/finotech-analytics" },
    { label: "Carrières", href: "/carrieres" },
  ],
  legal: [
    { label: "Politique de confidentialité", href: "/confidentialite" },
    { label: "Politique de cookies", href: "/cookies" },
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Conditions d'utilisation", href: "/conditions-utilisation" },
  ],
};

export const STATS = [
  { value: "120+", label: "mandats stratégiques livrés" },
  { value: "38", label: "secteurs et sous-secteurs accompagnés" },
  { value: "94 %", label: "de mandats reconduits ou référés" },
  { value: "1,8 G$", label: "de décisions financières éclairées" },
];
