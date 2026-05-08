import Link from "next/link";
import { ArrowUpRight, Linkedin, Mail, MapPin } from "lucide-react";

import { profile } from "@/data/profile";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Conseil", href: "/#consulting" },
  { label: "Projets", href: "/#projets" },
  { label: "Parcours", href: "/parcours" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#0d1117] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-white/8 bg-white/[0.04] px-5 py-3 font-display text-[1.5rem] tracking-tight text-white transition hover:border-[#c7a56a]/30 hover:bg-white/[0.07]"
          >
            {profile.shortName}
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">{profile.headline}</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">{profile.summary}</p>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
            Navigation
          </h3>
          <div className="mt-5 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-[#f4ddae]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
            Contact
          </h3>
          <div className="mt-5 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-[#f4ddae]"
            >
              <Mail className="h-4 w-4 text-[#c7a56a]" />
              {profile.email}
            </a>
            <p className="flex items-center gap-3 text-sm text-slate-500">
              <MapPin className="h-4 w-4 text-[#c7a56a]" />
              {profile.location}
            </p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-sm text-slate-400 transition hover:text-[#f4ddae]"
            >
              <Linkedin className="h-4 w-4 text-[#c7a56a]" />
              LinkedIn
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/6 px-6 py-5 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Arnold Mubuanga Yate · Tous droits réservés
          </p>
          <p className="text-xs text-slate-600">
            Conseil · Pilotage · Produits digitaux
          </p>
        </div>
      </div>
    </footer>
  );
}
