# Finotech Advisory — Guide de marque et design system

## 1. Positionnement de marque

**Nom :** Finotech Advisory Inc.
**Slogan :** Décider mieux, créer plus de valeur.
**Catégorie :** Cabinet de conseil stratégique — Business Intelligence & Data Analysis, Business Strategy, Corporate Finance, Training and Research.
**Ce que nous ne sommes pas :** un cabinet comptable, une firme d'audit, un généraliste.

**Ton de marque :** factuel, précis, sans superlatif inutile. Chaque phrase apporte une information ou une preuve — jamais un slogan vide. Le registre est celui d'un rapport McKinsey, pas d'une publicité.

## 2. Palette de couleurs

La palette est directement extraite du logo Finotech (feuille d'érable bleu nuit, histogramme gris/bleu/rouge) — aucune couleur n'a été ajoutée qui ne provienne pas de l'identité existante. Trois couleurs, comme le veut la lecture du logo : **bleu, blanc, rouge**.

| Rôle | Nom | Hex | Usage |
|---|---|---|---|
| Fond principal (clair) | Paper (blanc) | `#FBFBFA` | Arrière-plan des pages en mode clair |
| Bleu nuit — 900 | Navy 900 | `#031A28` | Fond navy des sections, header, footer |
| Bleu nuit — 700 | Navy 700 | `#093B58` | Couleur exacte du bleu du logo — boutons foncés, liens |
| Bleu nuit — 500 | Navy 500 | `#227EB4` | Accents secondaires, illustrations |
| Anthracite — 600 | Anthracite 600 | `#4C4D4D` | Texte secondaire, bordures |
| Anthracite — 200 | Anthracite 200 | `#D9D9D9` | Bordures claires |
| Rouge Finotech — 500 | Scarlet 500 | `#E23226` | Couleur exacte du rouge du logo — accent unique : CTA, kickers, chiffres clés, liens actifs, états d'erreur |
| Rouge Finotech — 300 | Scarlet 300 | `#EA9590` | Highlights doux, fonds de badge |

Règle d'usage : le rouge est l'accent unique de la marque — il ne doit jamais couvrir plus de 10 % d'une section. Il souligne (kickers, chiffres, liens actifs, boutons d'action), il ne remplit pas de grandes surfaces. Le bleu porte la structure (fonds foncés, texte), le blanc porte l'espace, le rouge porte l'attention.

## 3. Typographie

- **Titres (display) :** Fraunces (serif moderne, empattements élégants, variante italique pour les accents). Utilisée en 400/500/600 et italique.
- **Texte courant (sans) :** Inter — lisibilité maximale à toutes tailles, excellent support multilingue (français/anglais).
- **Échelle :** display-2xl (hero) → display-xl (titres de page) → display-lg (titres de section) → corps 16-18px, interligne 1.6-1.7.

Les deux polices sont auto-hébergées via `@fontsource` (aucune dépendance réseau à l'exécution — meilleur score Lighthouse et confidentialité).

## 4. Grille et espacement

- Conteneur max : 1360px, marge latérale 1.5rem.
- Rythme vertical des sections : 5rem (mobile) à 7rem (desktop) de padding haut/bas.
- Rayon de bordure : 1rem (cartes), 9999px (boutons, badges) — cohérent avec l'esthétique Stripe/Linear.
- Ombres : deux niveaux seulement (`soft` pour le repos, `elevated` pour le survol) — jamais plus de deux profondeurs simultanées à l'écran.

## 5. Composants clés

- **Boutons :** primary (navy/blanc), scarlet (CTA principal), outline, ghost. Toujours en pilule, jamais en rectangle à angles droits.
- **Cards :** fond blanc/navy-900, bordure fine anthracite/blanc à 10 %, translation verticale de 4px au survol + ombre élevée.
- **Badges :** pilule, majuscules, lettres espacées — utilisés pour catégoriser (expertise, secteur, catégorie d'article).
- **Kicker :** petit label en majuscules rouge, précédé d'un trait horizontal — signature visuelle de toutes les sections.
- **CTA Banner :** fond navy avec grille subtile en arrière-plan et halo rouge — utilisé en fin de chaque page pour convertir.

## 6. Logo

Le logo Finotech combine une feuille d'érable stylisée (identité canadienne) avec un circuit imprimé (technologie/data) et un histogramme à trois barres (gris, navy, rouge) — symbolisant données, stratégie et performance financière.

- Fichier plein : `/public/logo.png` (fond transparent, usage sur fond clair)
- Pictogramme seul : `/public/logo-icon.png` (favicon, réseaux sociaux, avatar)
- Zone de protection minimale : équivalente à la hauteur du pictogramme tout autour.
- Le logo ne doit jamais être recoloré, incliné, ou placé sur un fond de contraste insuffisant (respecter un ratio WCAG AA minimum de 4.5:1 pour le texte adjacent).

## 7. Animations et micro-interactions

- Easing signature : `cubic-bezier(0.16, 1, 0.3, 1)` (« ease-premium ») — accélération franche, décélération douce, sensation « haut de gamme » plutôt que ludique.
- Apparition au scroll : translation verticale de 24px + fondu, jamais de zoom ni de rotation.
- Survol de carte : translation de 4px + ombre, transition 300ms.
- Menus déroulants : fondu + translation de 8px, 180-220ms.
- Aucune animation ne doit dépasser 800ms ni bloquer l'interaction utilisateur (respect de `prefers-reduced-motion` recommandé en évolution future).

## 8. Accessibilité (WCAG AA)

- Contraste texte/fond vérifié sur les deux thèmes (clair et sombre).
- Lien d'évitement (« Aller au contenu principal ») sur chaque page.
- Focus visible systématique (anneau rouge à 2px).
- Hiérarchie de titres H1 → H2 → H3 respectée sur chaque page (un seul H1 par page).
- Formulaires : labels explicites, messages d'erreur associés, aucune information véhiculée par la couleur seule.
