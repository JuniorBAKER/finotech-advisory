import { permanentRedirect } from "next/navigation";
import { BULLETINS } from "@/lib/data/analytics-bulletins";

// Ancienne route (avant la scission Private Equity / Equity Research).
// Conservée uniquement pour rediriger les anciens liens vers la nouvelle
// arborescence, sans contenu dupliqué.
export function generateStaticParams() {
  return BULLETINS.map((b) => ({ slug: b.slug }));
}

export default function LegacyBulletinRedirect({ params }: { params: { slug: string } }) {
  permanentRedirect(`/finotech-analytics/private-equity/${params.slug}`);
}
