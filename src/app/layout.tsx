import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/500-italic.css";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { COMPANY, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY.legalName} — ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.shortName} Advisory`,
  },
  description: COMPANY.description,
  keywords: [
    "cabinet de conseil financier",
    "conseil stratégique Québec",
    "business intelligence",
    "corporate finance",
    "CFO as a service",
    "évaluation d'entreprise",
    "stratégie d'entreprise Sherbrooke",
    "bulletin private equity Québec",
    "capital-investissement Québec",
    "equity research Québec",
    "notes sur titres Québec",
  ],
  authors: [{ name: COMPANY.legalName }],
  creator: COMPANY.legalName,
  publisher: COMPANY.legalName,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: SITE_URL,
    siteName: COMPANY.legalName,
    title: `${COMPANY.legalName} — ${COMPANY.tagline}`,
    description: COMPANY.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: COMPANY.legalName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.legalName} — ${COMPANY.tagline}`,
    description: COMPANY.description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider>
          <OrganizationJsonLd />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
          >
            Aller au contenu principal
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
