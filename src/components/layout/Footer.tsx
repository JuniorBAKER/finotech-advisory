import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, FOOTER_LINKS } from "@/lib/constants";
import { Newsletter } from "@/components/sections/Newsletter";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-anthracite-300">
      <div className="container py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo-icon.png" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
              <span className="font-display text-lg font-semibold text-white">Finotech Advisory</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-anthracite-400">{COMPANY.tagline}</p>
            <div className="mt-6 flex flex-col gap-2.5 text-sm text-anthracite-400">
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4 shrink-0" /> {COMPANY.email}
              </a>
              <a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 shrink-0" /> {COMPANY.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" /> {COMPANY.addressLine}
              </span>
            </div>
            <a
              href={COMPANY.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Finotech Advisory"
              className="mt-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-scarlet-400 hover:text-scarlet-400"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Expertises</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER_LINKS.expertises.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Solutions</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER_LINKS.solutions.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Entreprise</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER_LINKS.entreprise.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Infolettre</p>
            <p className="mt-4 text-sm text-anthracite-400">Nos analyses, une fois par mois.</p>
            <div className="mt-4">
              <Newsletter />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-anthracite-500 md:flex-row">
          <p>© {new Date().getFullYear()} {COMPANY.legalName}. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {FOOTER_LINKS.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
