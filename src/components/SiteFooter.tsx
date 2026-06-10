import Link from "next/link";
import { ArrowUpRight, Linkedin, Mail, MapPin } from "lucide-react";

import { profile } from "@/data/profile";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Parcours", href: "/parcours" },
  { label: "Projets", href: "/projets" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="mx-auto max-w-[1420px] rounded-[2.4rem] border border-black/6 bg-white px-6 py-10 shadow-[0_24px_80px_rgba(15,23,42,0.05)] sm:px-8 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-[#f3f2ee] px-4 py-2 font-display text-lg font-semibold uppercase tracking-[0.14em] text-slate-950 ring-1 ring-black/5"
            >
              {profile.shortName}
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">{profile.headline}</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">{profile.summary}</p>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
              Navigation
            </h3>
            <div className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-500 transition hover:text-slate-950"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
              Contact
            </h3>
            <div className="mt-5 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm text-slate-500 transition hover:text-slate-950"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
              <p className="flex items-center gap-3 text-sm text-slate-500">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-sm text-slate-500 transition hover:text-slate-950"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-black/6 pt-5">
          <div className="flex flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Arnold Mubuanga Yate · Tous droits réservés</p>
            <p>Ingénieur développement · Chef de projet informatique · Entrepreneur digital</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
