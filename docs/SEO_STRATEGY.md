# Finotech Advisory — Stratégie SEO

## 1. Fondations techniques déjà en place

- **Métadonnées par page** : chaque page définit `title`, `description` et `alternates.canonical` via l'API `generateMetadata` / `export const metadata` de Next.js (voir chaque fichier `page.tsx`).
- **Open Graph & Twitter Cards** : configurés globalement dans `src/app/layout.tsx` et surchargés par page pour les contenus dynamiques (solutions, expertises, études de cas, insights).
- **Schema.org (JSON-LD)** : `ProfessionalService` (organisation), `BreadcrumbList` (fil d'Ariane sur chaque page), `Service` (pages expertises et solutions), `FAQPage` (FAQ et FAQ de chaque solution), `Article` (chaque Insight). Voir `src/components/seo/JsonLd.tsx`.
- **Sitemap dynamique** : `src/app/sitemap.ts` génère automatiquement toutes les routes statiques et dynamiques (expertises, solutions, études de cas, insights).
- **Robots.txt** : `src/app/robots.ts` autorise l'indexation complète sauf `/api/`.
- **URLs optimisées** : structure en français, sans paramètres, alignée sur les mots-clés (`/solutions/cfo-as-a-service`, `/expertises/corporate-finance`, etc.).
- **Hiérarchie de titres** : un seul H1 par page (titre principal), H2 pour les sections, H3 pour les sous-sections — respectée dans tous les templates.
- **Performance** : polices auto-hébergées (`@fontsource`), images AVIF/WebP, `optimizePackageImports` pour réduire le JS envoyé au client — visant un score Lighthouse Performance et SEO > 95.

## 2. Recherche de mots-clés (axes prioritaires)

| Intention de recherche | Mots-clés cibles | Page cible |
|---|---|---|
| Marque / navigation | finotech advisory, cabinet conseil finotech | Accueil |
| Service — CFO fractionnaire | cfo as a service québec, directeur financier fractionnaire montréal, cfo à temps partagé | /solutions/cfo-as-a-service |
| Service — Valorisation | évaluation d'entreprise québec, valorisation entreprise montréal, business valuation canada | /solutions/business-valuation |
| Service — Restructuration | restructuration d'entreprise québec, plan de redressement financier, éviter faillite PME | /solutions/restructuration-entreprise |
| Expertise — BI | business intelligence finance, tableau de bord financier PME, analyse de données financières | /expertises/business-intelligence-data-analysis |
| Expertise — Stratégie | conseil en stratégie d'entreprise montréal, cabinet de stratégie québec | /expertises/business-strategy |
| Expertise — Finance corporative | corporate finance conseil, structuration financement PME | /expertises/corporate-finance |
| Sectoriel | conseil financier startup québec, conseil pme croissance, conseil fonds d'investissement | /secteurs |
| Contenu / longue traîne | pourquoi ma stratégie échoue, comment structurer le capital de mon entreprise, signes restructuration nécessaire | /insights/* |
| Carrières | emploi consultant finance montréal, carrière corporate finance québec | /carrieres |

## 3. Maillage interne

- Chaque page **Expertise** renvoie vers ses **Solutions** associées (relation many-to-many définie dans `src/lib/data/expertises.ts` via `relatedSolutions`).
- Chaque page **Solution** renvoie vers 3 solutions complémentaires et intègre un CTA contextuel.
- Chaque **Étude de cas** est taguée par secteur et par solution, créant un maillage naturel vers `/secteurs` et `/solutions/[slug]`.
- Chaque article **Insight** suggère 3 articles de la même catégorie en pied de page.
- Le pied de page (footer) reprend l'intégralité des expertises et solutions sur chaque page du site — maximisant le maillage interne pour l'indexation.

## 4. Priorités des 90 premiers jours

1. Soumettre le sitemap à Google Search Console et Bing Webmaster Tools dès le lancement du domaine.
2. Publier un Insight par mois minimum (contenu déjà rédigé pour 8 articles de lancement — voir `/insights`).
3. Obtenir au moins 3 backlinks de référencement local qualifiés (chambre de commerce, associations professionnelles CPA/CFA Québec, annuaires d'affaires B2B).
4. Suivre le positionnement sur les mots-clés prioritaires du tableau ci-dessus via un outil de suivi (Google Search Console suffit en phase initiale).
5. Mettre à jour les meta descriptions des pages sous-performantes après 60 jours de données.

## 5. Score Lighthouse — points de vigilance pour rester au-dessus de 95

- Ne pas ajouter de polices ou scripts tiers chargés depuis un CDN externe sans `preconnect`.
- Compresser toute image ajoutée au dossier `/public` (déjà fait pour le logo, les favicons et l'image Open Graph).
- Conserver le rendu statique (SSG) pour toutes les pages de contenu — éviter de convertir des pages en rendu dynamique sans nécessité.
- Auditer avec `npm run build` + Lighthouse CI avant chaque mise en production majeure.
