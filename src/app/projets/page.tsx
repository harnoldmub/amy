import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Sparkles } from "lucide-react";

import ProjectsGrid from "@/components/ProjectsGrid";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Réalisations d'Arnold Mubuanga Yate — sites vitrines, plateformes, applications web et projets institutionnels.",
};

export default function ProjetsPage() {
  return (
    <main className="min-h-screen bg-[#f2f1ed] text-slate-950">
      <SiteHeader />

      <section className="px-3 pb-3 pt-28 sm:px-5 sm:pt-32">
        <div className="mx-auto max-w-[1420px] rounded-[2.4rem] border border-black/8 bg-[linear-gradient(180deg,#ffffff_0%,#f6f5f1_100%)] shadow-[0_30px_120px_rgba(15,23,42,0.06)] sm:rounded-[3rem]">
          <div className="px-4 pb-12 pt-12 sm:px-7 sm:pb-16 sm:pt-16">
            <section className="px-3 pb-10 text-center sm:px-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#f1f0ec] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500 ring-1 ring-black/5">
                <Layers className="h-3.5 w-3.5" />
                Réalisations
              </p>
              <h1 className="mx-auto mt-7 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-7xl">
                Projets réels.
                <br />
                Résultats concrets.
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-slate-500 sm:text-xl">
                Sites vitrines, plateformes communautaires, applications web et projets
                institutionnels — chaque réalisation répond à un besoin précis.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Discuter de votre projet
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/parcours"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 ring-1 ring-black/8 transition hover:bg-slate-50"
                >
                  Voir le parcours
                  <Sparkles className="h-4 w-4" />
                </Link>
              </div>
            </section>

            <section className="px-3 sm:px-6">
              <ProjectsGrid />
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
