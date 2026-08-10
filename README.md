# Finotech Advisory Inc. — Site web officiel

Site institutionnel de Finotech Advisory Inc., cabinet de conseil stratégique en finance, business intelligence et performance organisationnelle. Construit avec Next.js 14 (App Router), TypeScript, Tailwind CSS et Framer Motion.

## Stack technique

- **Framework** : Next.js 14 (App Router, Server Components)
- **Langage** : TypeScript strict
- **Style** : Tailwind CSS + design system sur mesure (voir `docs/BRAND_GUIDE.md`)
- **Animations** : Framer Motion
- **Thème** : Mode clair / sombre via `next-themes`
- **Validation de formulaires** : Zod
- **Polices** : Inter + Fraunces, auto-hébergées via `@fontsource` (aucune dépendance réseau au build ou à l'exécution)

## Démarrage local

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:3000`.

## Build de production

```bash
npm run build
npm run start
```

## Variables d'environnement

Copier `.env.example` vers `.env.local` et ajuster :

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL publique du site, utilisée pour le SEO, le sitemap et Open Graph |
| `RESEND_API_KEY` | Clé API du fournisseur d'e-mails transactionnels (Resend). Si absente, les envois sont simulés (journalisés en console) — utile en développement |
| `CONTACT_NOTIFICATION_EMAIL` | Adresse recevant les notifications internes des formulaires de contact et de rendez-vous |
| `NEXT_PUBLIC_BOOKING_URL` | URL de la page de prise de rendez-vous (par défaut `/rendez-vous`) |

## Structure du projet

```
src/
  app/                  # Routes (App Router) — une page par dossier
    solutions/[slug]/   # Gabarit unique pour les 8 solutions détaillées
    expertises/[slug]/  # Gabarit unique pour les 4 expertises
    etudes-de-cas/[slug]/
    insights/[slug]/
    finotech-analytics/
      private-equity/[slug]/   # Bulletins trimestriels de private equity
      equity-research/[slug]/  # Notes sectorielles et notes sur titres
    api/                # Routes API (formulaires)
  components/
    ui/                 # Design system (Button, Card, Badge, Section...)
    layout/              # Navbar, Footer, ThemeToggle, MobileMenu
    sections/            # Blocs de page réutilisables (Hero, FAQAccordion...)
    seo/                  # Composants JSON-LD (schema.org)
  lib/
    data/               # Contenu du site (expertises, solutions, secteurs, etc.)
    constants.ts        # Coordonnées, navigation, valeurs de l'entreprise
    validations.ts       # Schémas Zod des formulaires
    email-templates.ts   # Gabarits des e-mails transactionnels
docs/
  BRAND_GUIDE.md         # Charte graphique et design system
  SEO_STRATEGY.md        # Stratégie de mots-clés et maillage interne
  IMAGE_PROMPTS.md       # Prompts Midjourney / Flux / DALL-E
  LINKEDIN_LAUNCH_CONTENT.md
```

## Mise à jour du contenu

Tout le contenu textuel du site (hors pages légales) est centralisé dans `src/lib/data/*.ts` et `src/lib/constants.ts` — aucune modification de composant n'est nécessaire pour ajouter, par exemple, une étude de cas ou un article Insight : il suffit d'ajouter une entrée dans le tableau correspondant.

## Déploiement recommandé (Vercel)

1. Pousser ce projet sur un dépôt Git (GitHub, GitLab ou Bitbucket).
2. Créer un compte sur [vercel.com](https://vercel.com) et importer le dépôt.
3. Renseigner les variables d'environnement de production (voir tableau ci-dessus) dans les paramètres du projet Vercel.
4. Déployer — Vercel détecte automatiquement Next.js et applique la configuration optimale.

Le site peut également être déployé sur Netlify ou tout hébergeur supportant Node.js 18+.

## Connecter le nom de domaine finotechadvisory.ca (actuellement chez GoDaddy)

Deux approches possibles :

### Option A — Garder l'enregistrement du domaine chez GoDaddy, pointer le DNS vers Vercel (recommandé, plus simple)

1. Dans le tableau de bord Vercel du projet, aller dans **Settings → Domains** et ajouter `finotechadvisory.ca` et `www.finotechadvisory.ca`.
2. Vercel affiche les enregistrements DNS à créer (généralement un enregistrement `A` pointant vers `76.76.21.21` pour le domaine racine, et un enregistrement `CNAME` pointant vers `cname.vercel-dns.com` pour le sous-domaine `www`).
3. Se connecter au compte GoDaddy → **Mes produits → DNS** du domaine `finotechadvisory.ca`.
4. Ajouter/modifier les enregistrements `A` et `CNAME` selon les valeurs fournies par Vercel.
5. La propagation DNS prend généralement de quelques minutes à 48 heures. Vercel émet automatiquement un certificat SSL une fois la propagation confirmée.

Aucun transfert de registrar n'est requis avec cette option — GoDaddy reste l'registraire officiel, seul le DNS change de destination.

### Option B — Transférer le domaine complet vers un autre registraire

À envisager uniquement si vous souhaitez consolider la gestion du domaine ailleurs (ex. Cloudflare Registrar, pour des frais réduits et une gestion DNS avancée) :

1. Chez GoDaddy, déverrouiller le domaine (**Paramètres du domaine → Verrouillage** → désactiver) et générer un code d'autorisation (EPP).
2. Vérifier que le domaine a plus de 60 jours et moins de 60 jours avant expiration (règle ICANN).
3. Initier le transfert chez le nouveau registraire avec le code EPP.
4. Confirmer le transfert par le courriel de validation envoyé au titulaire du domaine.
5. Une fois le transfert complété (5 à 7 jours généralement), reconfigurer les enregistrements DNS comme à l'option A.

**Recommandation :** commencer par l'option A (changement de DNS seulement) — c'est la voie la plus rapide pour mettre le site en ligne sans risque d'interruption de service ni de perte du domaine pendant un transfert.

## Formulaires et e-mails transactionnels

Les formulaires de contact (`/contact`) et de prise de rendez-vous (`/rendez-vous`) valident les données côté client (Zod) puis les transmettent aux routes API `/api/contact` et `/api/rendez-vous`. Ces routes sont préconfigurées pour envoyer deux e-mails via [Resend](https://resend.com) : une confirmation au visiteur et une notification interne à `CONTACT_NOTIFICATION_EMAIL`. Sans clé `RESEND_API_KEY`, les envois sont simplement journalisés (aucune erreur, aucun blocage du formulaire) — pratique pour le développement et les démonstrations.

Pour activer les envois réels :
1. Créer un compte sur [resend.com](https://resend.com) et vérifier le domaine `finotechadvisory.ca`.
2. Renseigner `RESEND_API_KEY` dans les variables d'environnement de production.
3. Les gabarits d'e-mails HTML sont dans `src/lib/email-templates.ts` et peuvent être personnalisés librement.

## Accessibilité et performance

- Contraste conforme WCAG AA sur les deux thèmes.
- Navigation clavier complète, focus visible, lien d'évitement vers le contenu principal.
- Aucune dépendance réseau bloquante au chargement (polices auto-hébergées).
- Images et icônes optimisées ; imports de librairies optimisés (`optimizePackageImports`).

Objectif : score Lighthouse (Performance, Accessibilité, Bonnes pratiques, SEO) supérieur à 95 sur chaque page.
