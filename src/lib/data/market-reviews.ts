export type MarketReview = {
  slug: string;
  date: string;
  title: string;
  highlights: string;
  file: string;
  fileSize: string;
};

// Revue hebdomadaire des marchés mondiaux — publiée chaque jeudi.
// Les fichiers PDF correspondants vivent dans /public/downloads/equity-research/.
export const MARKET_REVIEWS: MarketReview[] = [
  {
    slug: "revue-marches-2026-10-25",
    date: "2026-10-25",
    title: "Saison des résultats T3 2026 — 25 octobre 2026",
    highlights: "BPA +29 % · Meta : BPA en baisse de 42 % · Tesla : résultat d'exploitation −56 % · FOMC : maintien à 83 % · Brent à 107 $ · Élections de mi-mandat le 3 novembre",
    file: "/downloads/equity-research/revue-marches-2026-10-25.pdf",
    fileSize: "0,3 Mo",
  },
  {
    slug: "revue-marches-2026-09-03",
    date: "2026-09-03",
    title: "Revue des marchés mondiaux — 3 septembre 2026",
    highlights: "Emplois (NFP) d'août attendus ce matin · Réescalade en Iran · Brent à 95 $ · Waller accommodant · FOMC le 16 septembre",
    file: "/downloads/equity-research/revue-marches-2026-09-03.pdf",
    fileSize: "0,2 Mo",
  },
  {
    slug: "revue-marches-2026-08-27",
    date: "2026-08-27",
    title: "Revue des marchés mondiaux — 27 août 2026",
    highlights: "NVIDIA 96,2 G$ de revenus (+106 %) · Ton restrictif de Warsh à Jackson Hole · PCE 3,7 % · NVDA +9 % · FOMC le 16 septembre",
    file: "/downloads/equity-research/revue-marches-2026-08-27.pdf",
    fileSize: "0,3 Mo",
  },
  {
    slug: "revue-marches-2026-08-20",
    date: "2026-08-20",
    title: "Revue des marchés mondiaux — 20 août 2026",
    highlights: "Taux 30 ans 5,33 % (2007) · Brent 91 $ · Walmart −9 % · Semi-conducteurs −5 % · Jackson Hole J-8",
    file: "/downloads/equity-research/revue-marches-2026-08-20.pdf",
    fileSize: "0,2 Mo",
  },
  {
    slug: "revue-marches-2026-08-13",
    date: "2026-08-13",
    title: "Revue des marchés mondiaux — 13 août 2026",
    highlights: "S&P à 7 800 · Russell 2000 record · IPC 3,4 % · IPP stable · Or à 4 545 $ · Expiration du protocole Iran",
    file: "/downloads/equity-research/revue-marches-2026-08-13.pdf",
    fileSize: "0,3 Mo",
  },
  {
    slug: "revue-marches-2026-08-06",
    date: "2026-08-06",
    title: "Revue des marchés mondiaux — 6 août 2026",
    highlights: "Dow Jones 54 000 · Record du S&P 500 · Amazon +13 % · SPCX +92 % de revenus · Apple −7 %",
    file: "/downloads/equity-research/revue-marches-2026-08-06.pdf",
    fileSize: "0,2 Mo",
  },
  {
    slug: "revue-marches-2026-07-30",
    date: "2026-07-30",
    title: "Revue des marchés mondiaux — 30 juillet 2026",
    highlights: "FOMC 9–3 · Pause en Iran · Microsoft +4 % · Meta déçoit · Saison des résultats T2 : 25 % des BPA publiés",
    file: "/downloads/equity-research/revue-marches-2026-07-30.pdf",
    fileSize: "0,3 Mo",
  },
  {
    slug: "revue-marches-2026-07-23",
    date: "2026-07-23",
    title: "Revue des marchés mondiaux — 23 juillet 2026",
    highlights: "Iran : 12 frappes · Brent au-dessus de 100 $ · Alphabet −7 % · Tesla −14 % · Les dépenses en IA sous le feu des critiques",
    file: "/downloads/equity-research/revue-marches-2026-07-23.pdf",
    fileSize: "0,3 Mo",
  },
  {
    slug: "revue-marches-2026-07-16",
    date: "2026-07-16",
    title: "Revue des marchés mondiaux — 16 juillet 2026",
    highlights: "IPC 3,5 % — pic d'inflation dépassé · RBC +25 % · Record pour TSMC · SPCX sous son prix d'introduction",
    file: "/downloads/equity-research/revue-marches-2026-07-16.pdf",
    fileSize: "0,3 Mo",
  },
  {
    slug: "revue-marches-2026-07-09",
    date: "2026-07-09",
    title: "Revue des marchés mondiaux — 9 juillet 2026",
    highlights: "Trêve rompue en Iran · SPCX entre au Nasdaq-100 · SK Hynix +13 % · Samsung déçoit",
    file: "/downloads/equity-research/revue-marches-2026-07-09.pdf",
    fileSize: "0,2 Mo",
  },
  {
    slug: "revue-marches-2026-07-02",
    date: "2026-07-02",
    title: "Revue des marchés mondiaux — 2 juillet 2026",
    highlights: "Meilleur T2 depuis 2020 · Emplois (NFP) à 57 000 · SK Hynix fait son entrée au Nasdaq · Banque du Canada à 2,25 %",
    file: "/downloads/equity-research/revue-marches-2026-07-02.pdf",
    fileSize: "0,2 Mo",
  },
  {
    slug: "revue-marches-2026-06-25",
    date: "2026-06-25",
    title: "Revue des marchés mondiaux — 25 juin 2026",
    highlights: "Micron explose · Choc de l'IA sur les prix · Pétrole à 70 $ · PCE à 4,1 %",
    file: "/downloads/equity-research/revue-marches-2026-06-25.pdf",
    fileSize: "0,2 Mo",
  },
  {
    slug: "revue-marches-2026-06-18",
    date: "2026-06-18",
    title: "Revue des marchés mondiaux — 18 juin 2026",
    highlights: "Paix États-Unis–Iran · Décision de la Fed · Marchés africains",
    file: "/downloads/equity-research/revue-marches-2026-06-18.pdf",
    fileSize: "0,2 Mo",
  },
  {
    slug: "revue-marches-2026-06-11",
    date: "2026-06-11",
    title: "Revue des marchés mondiaux — 11 juin 2026",
    highlights: "Analyse hebdomadaire — semaine du 9 juin 2026",
    file: "/downloads/equity-research/revue-marches-2026-06-11.pdf",
    fileSize: "0,2 Mo",
  },
];

export function getSortedMarketReviews() {
  return [...MARKET_REVIEWS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
