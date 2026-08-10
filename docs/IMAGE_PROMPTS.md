# Finotech Advisory — Prompts d'imagerie IA et sourcing photo

Le site actuel n'utilise volontairement aucune photo de banque d'images générique (visages souriants en costume, poignées de main) — le style Stripe/Linear/Palantir privilégie l'abstraction géométrique et la donnée elle-même comme matière visuelle. Les prompts ci-dessous permettent de générer des visuels d'appoint (pages Insights, Carrières, réseaux sociaux) qui respectent cette direction.

## Direction artistique commune

Palette stricte : bleu nuit (#031A28), blanc/papier (#FBFBFA), gris anthracite (#4C4D4D), rouge Finotech (#E23226) en accent minoritaire seulement. Style : minimaliste, géométrique, beaucoup d'espace négatif, éclairage doux, aucune typographie superflue dans l'image, aucun visage generique de banque d'images. Rendu photographique haut de gamme ou 3D abstrait épuré — jamais cartoon, jamais saturé.

## Prompts Midjourney (v6)

1. **Hero / page d'accueil (alternative)**
   `abstract navy blue architectural interior, minimalist financial data visualization floating as thin red light lines, soft cinematic lighting, ultra clean, high-end corporate aesthetic, shallow depth of field, --ar 16:9 --style raw --v 6`

2. **Page À propos**
   `empty modern boardroom at dusk, navy blue tones, single warm scarlet-red light accent, glass table reflecting city lights of Sherbrooke, no people, architectural photography, editorial style --ar 3:2 --style raw --v 6`

3. **Page Méthodologie**
   `minimalist 3D render of five translucent glass steps ascending, navy blue and red gradient lighting, floating geometric data nodes connecting each step, studio background, clean corporate 3D art --ar 16:9 --v 6`

4. **Page Secteurs**
   `abstract isometric grid of geometric building blocks representing different industries, navy blue and anthracite palette with red accent highlights, flat minimal 3D, soft studio lighting --ar 16:9 --v 6`

5. **Page Carrières**
   `bright modern office space, navy blue accent wall, warm natural light, empty desk with laptop showing abstract financial charts, Sherbrooke and the Saint-François river visible through window, editorial architectural photography, no people --ar 3:2 --style raw --v 6`

6. **Insights / Business Intelligence**
   `abstract flowing data streams transforming into a single clean red line graph, dark navy background, minimal futuristic data visualization, high contrast, elegant --ar 16:9 --v 6`

7. **Insights / Corporate Finance**
   `close-up macro photograph of interlocking geometric red and navy blue architectural forms, representing financial structure, soft shadows, premium editorial still life --ar 4:3 --v 6`

8. **Réseaux sociaux / bannière LinkedIn**
   `wide minimalist banner, navy blue gradient background, thin red geometric maple leaf motif abstracted into circuit lines, generous negative space for text overlay, corporate premium aesthetic --ar 4:1 --v 6`

## Prompts Flux (variante équivalente)

Flux répond bien aux prompts plus descriptifs et moins « incantatoires » que Midjourney. Reprendre les descriptions ci-dessus en supprimant les paramètres `--ar/--v` et en les formulant en phrases complètes, par exemple :

`A minimalist, high-end editorial photograph of an empty modern boardroom at dusk. The color palette is dominated by deep navy blue tones with a single warm scarlet-red light accent reflecting off a glass table. The town of Sherbrooke is visible through floor-to-ceiling windows. No people are present. Cinematic, architectural, ultra-clean corporate aesthetic, shot on a full-frame camera with a shallow depth of field.`

## Prompts DALL-E 3

DALL-E répond bien à des instructions directes et contextualisées :

`Create a minimalist corporate image for a strategic finance consulting firm. Use a deep navy blue and warm red color palette on a clean white background. Show an abstract geometric representation of a financial dashboard — thin red line charts and navy geometric bars — with no text, no logos, and no people. The style should feel premium, precise, and editorial, similar to the visual identity of Stripe or Bloomberg.`

## Recommandations de sourcing photo (si photographie réelle privilégiée)

Si l'équipe préfère des photographies réelles plutôt que des visuels générés :

- Prévoir une séance photo corporative avec l'équipe de direction dans des environnements réels (bureaux de Finotech, Sherbrooke), lumière naturelle, tenues sobres — à utiliser sur la page À propos et Carrières.
- Éviter toute banque d'images grand public (Shutterstock générique) montrant des poignées de main ou des sourires forcés : ce registre visuel est associé aux cabinets génériques, pas aux cabinets de référence (McKinsey, BCG n'utilisent presque jamais ce type d'image).
- Privilégier des plans larges d'architecture, de lumière et de matière (verre, acier, papier) plutôt que des portraits posés, sauf pour les pages biographiques individuelles si celles-ci sont ajoutées ultérieurement.
