"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { profile } from "@/data/profile";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Conseil", href: "/#consulting" },
  { label: "Projets", href: "/#projets" },
  { label: "Parcours", href: "/parcours" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const shellClass = scrolled
    ? "border-[#c7a56a]/22 bg-[#0d1117]/84 shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-2xl"
    : "border-white/8 bg-[#0d1117]/38 backdrop-blur-2xl";

  const linkClass = (href: string) => {
    const isActive =
      href === "/" ? pathname === "/" : href.startsWith("/#") ? pathname === "/" : pathname === href;

    return isActive
      ? "text-[#f7e7bf] after:scale-x-100"
      : scrolled
        ? "text-white/70 hover:text-white"
        : "text-white/78 hover:text-white";
  };

  return (
    <header className="header-enter fixed inset-x-0 top-0 z-50 px-4 pt-5 sm:px-6">
      <div
        className={`header-shell mx-auto flex max-w-6xl items-center justify-between rounded-[1.9rem] border px-4 py-3 transition-all duration-500 sm:px-5 ${shellClass}`}
      >
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-white/8 bg-white/[0.04] px-5 py-3 font-display text-[1.7rem] tracking-tight text-white transition hover:border-[#c7a56a]/30 hover:bg-white/[0.07]"
        >
          {profile.shortName}
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/8 bg-black/22 p-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link-luxe relative rounded-full px-4 py-2.5 text-sm font-medium transition-colors after:absolute after:bottom-[0.55rem] after:left-4 after:right-4 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:after:scale-x-100 ${linkClass(item.href)}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className={`inline-flex items-center rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
              scrolled
                ? "border-[#e6c98d]/35 bg-[linear-gradient(135deg,#f8efd6_0%,#dbc089_100%)] text-[#0d1117] shadow-[0_14px_40px_rgba(199,165,106,0.22)] hover:translate-y-[-1px]"
                : "border-[#d8bf8e]/26 bg-[linear-gradient(135deg,rgba(244,221,174,0.16)_0%,rgba(255,255,255,0.08)_100%)] text-[#f7ead0] hover:border-[#c7a56a]/44 hover:bg-[linear-gradient(135deg,rgba(244,221,174,0.22)_0%,rgba(255,255,255,0.1)_100%)]"
            }`}
          >
            {profile.availability}
          </Link>
        </div>

        <button
          type="button"
          className={`inline-flex h-12 w-12 items-center justify-center rounded-full border transition md:hidden ${
            scrolled
              ? "border-[#c7a56a]/28 bg-white/90 text-slate-950"
              : "border-white/10 bg-white/[0.06] text-white"
          }`}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="mx-auto mt-3 max-w-6xl rounded-[2rem] border border-[#c7a56a]/16 bg-[#0d1117]/94 p-8 shadow-[0_28px_80px_rgba(0,0,0,0.44)] backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-4xl text-white transition-colors hover:text-[#f4ddae]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-[#e1c688]/25 bg-[linear-gradient(135deg,#f8efd6_0%,#dbc089_100%)] px-5 py-3 text-sm font-semibold text-[#0d1117]"
          >
            {profile.availability}
          </Link>
        </div>
      ) : null}
    </header>
  );
}
