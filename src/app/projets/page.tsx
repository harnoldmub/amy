import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Sparkles } from "lucide-react";

import ProjectsGrid from "@/components/ProjectsGrid";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "11 projets livrés — sites vitrines, plateformes, applications web et projets institutionnels réalisés par Arnold Mubuanga Yate.",
};

export default function ProjetsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteHeader />

      <section className="hero-aurora relative overflow-hidden bg-[#0d1117] px-6 pb-20 pt-40 text-white sm:px-8">
        <div className="grid-fade absolute inset-0 opacity-20" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />

        <div className="relative mx-auto max-w-6xl">
          <p className="reveal-up inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#f4ddae] backdrop-blur">
            <Layers className="h-4 w-4" />
            Réalisations
          </p>
          <h1 className="hero-title reveal-up delay-1 mt-8 max-w-3xl font-display text-6xl leading-[0.92] sm:text-7xl lg:text-[5.2rem]">
            Projets réels.
            <br />
            <span className="text-[#f4ddae]">Résultats concrets.</span>
          </h1>
          <p className="reveal-up delay-2 mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Sites vitrines, plateformes communautaires, applications web, projets
            institutionnels — chaque réalisation répond à un besoin précis et une exigence
            de qualité.
          </p>

          <div className="reveal-up mt-8 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: "0.32s" }}>
            <Link
              href="/contact"
              className="cta-gold inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              Discuter de votre projet
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/parcours"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Voir le parcours
              <Sparkles className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <ProjectsGrid />
        </div>
      </section>

      <section className="bg-[#0d1117] px-6 py-24 text-white sm:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-white/5 px-8 py-14 text-center backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f4ddae]">
            Prochain sur la liste
          </p>
          <h2 className="mt-6 font-display text-5xl">Votre projet pourrait être ici.</h2>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-slate-300">
            Parlons de ce que vous voulez construire — et faisons-le ensemble.
          </p>
          <Link
            href="/contact"
            className="cta-gold mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            Me contacter
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
