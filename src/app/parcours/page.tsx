import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, Download, MapPin, Sparkles } from "lucide-react";

import BrandOrbit from "@/components/BrandOrbit";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  dassaultMission,
  education,
  experiences,
  interests,
  languages,
  lilleMission,
  profile,
  skillGroups,
} from "@/data/profile";


export const metadata: Metadata = {
  title: "Parcours & CV",
  description:
    "Parcours d'Arnold Mubuanga Yate — conseil, pilotage de projet IT, expérience Ville de Lille et références grands comptes.",
};

export default function ParcoursPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: profile.name,
            hasOccupation: {
              "@type": "Occupation",
              name: lilleMission.role,
              occupationLocation: {
                "@type": "Place",
                name: profile.location,
              },
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="hero-aurora relative overflow-hidden bg-[#0d1117] px-6 pb-20 pt-40 text-white sm:px-8">
        <div className="grid-fade absolute inset-0 opacity-20" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />

        <div className="relative mx-auto max-w-6xl">
          <p className="reveal-up inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#f4ddae] backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Parcours
          </p>
          <h1 className="hero-title reveal-up delay-1 mt-8 max-w-3xl font-display text-6xl leading-[0.92] sm:text-7xl">
            Un parcours qui relie conseil, pilotage et exigence d&apos;exécution.
          </h1>
          <p className="reveal-up delay-2 mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.resumeIntro}
          </p>

          <div className="reveal-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.28s" }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/80 backdrop-blur">
              <MapPin className="h-4 w-4 text-[#f4ddae]" />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/80 backdrop-blur">
              <CheckCircle2 className="h-4 w-4 text-[#f4ddae]" />
              {profile.availability}
            </span>
          </div>

          <div className="reveal-up mt-8 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: "0.38s" }}>
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent("Demande de CV PDF")}`}
              className="cta-gold inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              Télécharger mon CV (PDF)
              <Download className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Parler d&apos;un projet
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-8 sm:px-8">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-white p-8 shadow-lg shadow-slate-950/5 ring-1 ring-[#e5d8c6] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Mission actuelle
              </p>
              <h2 className="mt-5 font-display text-5xl leading-none text-slate-950 sm:text-6xl">
                {lilleMission.company}
              </h2>
              <p className="mt-4 text-sm uppercase tracking-[0.22em] text-slate-500">
                {lilleMission.period} · {lilleMission.role}
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                {lilleMission.summary}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {lilleMission.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[1.7rem] bg-[var(--background)] p-5 ring-1 ring-[#e7dac7]"
                >
                  <p className="text-sm leading-7 text-slate-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {lilleMission.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#dac4a2] bg-[#fffaf4] px-4 py-2 text-sm font-medium text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mission phare Dassault */}
      <section id="dassault" className="px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Expérience phare
              </p>
              <h2 className="mt-5 font-display text-5xl sm:text-6xl">{dassaultMission.company}</h2>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
                <span>{dassaultMission.period}</span>
                <span>·</span>
                <span>{dassaultMission.team}</span>
                <span>·</span>
                <span>{dassaultMission.role}</span>
              </div>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200">
                {dassaultMission.description}
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  { label: "Contexte", value: "Plateforme transverse" },
                  { label: "Marque", value: "NETVIBES" },
                  { label: "Périmètre", value: "Search produit" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                    <p className="mt-3 text-sm font-medium text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
                3DEXPERIENCE constellation
              </p>
              <BrandOrbit />
              <div className="mt-6 grid grid-cols-2 gap-3 lg:hidden">
                {dassaultMission.brands.map((brand) => (
                  <div
                    key={brand}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-center text-sm font-medium text-white"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Le contexte</p>
              <div className="mt-5 rounded-2xl bg-white/5 p-5 text-sm leading-7 text-slate-200">
                Netvibes s&apos;inscrit dans un écosystème où plusieurs marques, équipes et usages doivent
                se rejoindre dans une expérience cohérente. La recherche transverse y joue un rôle central
                pour fluidifier l&apos;accès à l&apos;information, la compréhension des données et les parcours métier.
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-accent">Ma mission</p>
              <div className="mt-5 rounded-2xl bg-white/5 p-5 text-sm leading-7 text-slate-200">
                Au sein de l&apos;équipe 3DSearch, je contribue à des interfaces et comportements de recherche
                pensés pour des environnements complexes: lisibilité, continuité d&apos;usage, qualité perçue et
                intégration propre dans la plateforme.
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 text-slate-900">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Réalisations clés</p>
              <div className="mt-5 space-y-4">
                {dassaultMission.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                    {highlight}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Stack & environnement
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {dassaultMission.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Expériences"
              title="Une trajectoire construite entre secteur public, grands groupes et delivery produit."
              description="Secteur public, grands comptes, startups — des contextes variés qui façonnent un profil polyvalent et rigoureux."
            />
          </ScrollReveal>

          <div className="relative mt-14 space-y-6">
            <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-slate-200 md:block" />
            {experiences.map((experience) => (
              <details
                key={experience.company + experience.period}
                className="group relative rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-950/5 ring-1 ring-slate-200 md:ml-12"
              >
                <summary className="cursor-pointer list-none">
                  <div className="absolute -left-9 top-8 hidden h-4 w-4 rounded-full border-4 border-[var(--background)] bg-accent md:block" />
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                        {experience.period}
                      </p>
                      <h3 className="mt-3 font-display text-4xl text-slate-950">
                        {experience.company}
                      </h3>
                      <p className="mt-2 text-base font-medium text-slate-700">{experience.role}</p>
                    </div>
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                      Détails
                      <ChevronDown className="h-4 w-4 transition duration-200 group-open:rotate-180" />
                    </div>
                  </div>
                  <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600">
                    {experience.summary}
                  </p>
                </summary>

                <div className="mt-6 grid gap-6 border-t border-slate-100 pt-6 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="space-y-3">
                    {experience.details.map((detail) => (
                      <p key={detail} className="text-sm leading-7 text-slate-600">
                        — {detail}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {experience.stack.map((item) => (
                      <span
                        key={item}
                        className="h-fit rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Compétences"
              title="Un socle structuré pour piloter, concevoir et livrer."
              description="Du cadrage stratégique au déploiement — des compétences mobilisables à chaque étape d'un projet ambitieux."
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group, index) => (
              <ScrollReveal key={group.name} delay={index * 0.08}>
                <div className="h-full rounded-[2rem] bg-[var(--background)] p-7 shadow-lg shadow-slate-950/5 ring-1 ring-slate-200">
                  <h3 className="font-display text-3xl text-slate-950">{group.name}</h3>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Formation + Langues + Intérêts */}
      <section className="px-6 py-24 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-950/5 ring-1 ring-slate-200 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Formation
            </p>
            <div className="mt-6 space-y-5">
              {education.map((entry) => (
                <div
                  key={entry.school}
                  className="rounded-[1.5rem] bg-[var(--background)] p-5 ring-1 ring-slate-200"
                >
                  <h3 className="text-lg font-semibold text-slate-950">{entry.school}</h3>
                  <p className="mt-2 text-sm text-slate-600">{entry.degree}</p>
                  <p className="mt-3 text-sm font-medium text-slate-500">{entry.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-950/5 ring-1 ring-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                Langues
              </p>
              <div className="mt-5 space-y-3">
                {languages.map((language) => (
                  <div key={language.name} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">{language.name}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
                      {language.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                Intérêts
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d1117] px-6 py-24 text-white sm:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-white/5 px-8 py-14 text-center backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f4ddae]">
            Prochaine étape
          </p>
          <h2 className="mt-6 font-display text-5xl">Une mission en tête ? Parlons-en.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">
            Le parcours est là. Il ne reste qu&apos;à le relier à votre besoin.
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
