import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Crown,
  Globe,
  Layers,
  MapPin,
  MoveRight,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import ProjectsShowcase from "@/components/ProjectsShowcase";
import ReferenceMarquee from "@/components/ReferenceMarquee";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { profile, projects, services } from "@/data/profile";

const serviceIcons = { Globe, Layers, Users, Zap };
const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export default function Home() {
  return (
    <main className="page-background min-h-screen">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: profile.name,
            description: profile.summary,
            areaServed: "France",
            email: profile.email,
            sameAs: [profile.linkedin],
          }),
        }}
      />

      <section className="hero-aurora relative overflow-hidden px-6 pb-16 pt-40 text-white sm:px-8 sm:pb-24">
        <div className="grid-fade absolute inset-0 opacity-30" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
        <div className="hero-orb hero-orb-c" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="hero-badge reveal-up inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#f4ddae] backdrop-blur">
              <Crown className="h-4 w-4" />
              Conseil premium · pilotage · digital
            </p>

            <h1 className="hero-title mt-8 max-w-5xl font-display text-6xl leading-[0.9] sm:text-7xl lg:text-[5.8rem]">
              <span className="hero-line reveal-up delay-1 block">Le digital</span>
              <span className="hero-line reveal-up delay-2 block">qui rassure,</span>
              <span className="hero-line reveal-up delay-3 block">vend et convertit.</span>
            </h1>

            <p className="reveal-up delay-4 mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Conseil, cadrage et exécution haut de gamme pour institutions, entreprises et
              projets à forte visibilité.
            </p>

            <div className="reveal-up mt-8 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: "0.52s" }}>
              <Link
                href="/contact"
                className="gold-shimmer inline-flex items-center justify-center gap-2 rounded-full bg-[#f4ddae] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#f1d396]"
              >
                Réserver un échange
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#projets"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Voir les projets
                <MoveRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Position", value: "Lille · Paris", icon: MapPin },
                { label: "Format", value: "Conseil & delivery", icon: Sparkles },
                { label: "Focus", value: "Image · pilotage · résultat", icon: Crown },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="hero-stat reveal-up rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-4 backdrop-blur"
                    style={{ animationDelay: `${0.62 + index * 0.12}s` }}
                  >
                    <div className="flex items-center gap-2 text-[#f4ddae]">
                      <Icon className="h-4 w-4" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                        {item.label}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-medium text-white/84">{item.value}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/74">
              {[
                "Conseil & cadrage",
                "Pilotage de projet IT",
                "Sites et plateformes premium",
                "Intervention institutions & entreprises",
              ].map((item, index) => (
                <span
                  key={item}
                  className="hero-chip rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
                  style={{ animationDelay: `${0.7 + index * 0.12}s` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-showcase reveal-up delay-3">
            <div className="hero-showcase-card hero-showcase-main rounded-[2.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f4ddae]">
                Signature
              </p>
              <h2 className="mt-5 font-display text-4xl text-white">
                Une présence qui inspire la confiance avant la discussion.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">{profile.summary}</p>

              <div className="mt-8 space-y-4">
                {[
                  "Direction claire pour les projets où l'image et la crédibilité sont centrales.",
                  "Pilotage serein des sujets sensibles, publics ou fortement exposés.",
                  "Finition premium jusque dans la perception finale du produit.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#f4ddae]" />
                    <p className="text-sm leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="hero-mini-card rounded-[1.7rem] border border-white/10 bg-[#111720]/88 p-5 text-white backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f4ddae]">
                  Mission actuelle
                </p>
                <p className="mt-3 font-display text-3xl">Ville de Lille</p>
                <p className="mt-2 text-sm text-white/68">Chef de projet informatique</p>
              </div>
              <div className="hero-mini-card rounded-[1.7rem] border border-white/10 bg-[#111720]/88 p-5 text-white backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f4ddae]">
                  Référence forte
                </p>
                <p className="mt-3 font-display text-3xl">Dassault Systèmes</p>
                <p className="mt-2 text-sm text-white/68">3DSearch · 3DEXPERIENCE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d1117] px-6 py-12 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-col gap-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#c7a56a]">
              Références
            </p>
            <p className="mx-auto max-w-3xl text-base leading-8 text-slate-300">
              Secteur public, grands groupes, produits complexes et projets à forte visibilité
            </p>
          </div>
          <ReferenceMarquee />
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-5 text-center text-sm leading-7 text-slate-300 shadow-[0_16px_50px_rgba(0,0,0,0.18)]">
            Des environnements où la lisibilité, la fiabilité et la qualité d&apos;exécution sont non négociables.
          </div>
        </div>
      </section>

      <section id="consulting" className="bg-[var(--background)] px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Conseil"
              title="Une offre pensée pour les décideurs qui veulent avancer sans improviser."
              description="Quatre axes complémentaires — du premier échange stratégique jusqu'à la livraison d'un produit soigné."
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];

              return (
                <ScrollReveal key={service.title} delay={index * 0.1}>
                  <article className="h-full rounded-[2rem] bg-white p-7 shadow-lg shadow-slate-950/5 ring-1 ring-[#d9c9af] transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5ead7] text-[#9f7a3f]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 font-display text-3xl text-slate-950">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projets" className="bg-white px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Projets"
              title="Des réalisations qui montrent le niveau d'exigence, pas seulement la capacité à livrer."
              description="Sites vitrines, plateformes et applications — chaque réalisation conçue pour durer et convaincre."
            />

            <Link
              href="/projets"
              className="inline-flex items-center gap-2 rounded-full border border-[#d7c0a2] bg-[#fffaf4] px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-[#c7a56a] hover:text-[#9f7a3f]"
            >
              Voir tous les projets
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ProjectsShowcase projects={featuredProjects} compact />
        </div>
      </section>

      <section className="bg-[var(--background)] px-6 py-24 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal>
            <div className="rounded-[2.2rem] bg-[#0d1117] p-8 text-white shadow-2xl shadow-black/10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f4ddae]">
                Pourquoi moi
              </p>
              <h2 className="mt-5 font-display text-5xl">
                Une alliance rare entre conseil, projet et capacité à produire.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Je peux intervenir là où beaucoup séparent encore le cadrage, la coordination et
                l&apos;exécution. Cette continuité réduit les frictions, sécurise les choix et améliore la
                qualité perçue du résultat.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Pour les dirigeants",
                text: "Un interlocuteur capable de transformer une ambition encore floue en trajectoire claire, crédible et pilotable.",
              },
              {
                title: "Pour les équipes",
                text: "Un partenaire qui comprend les contraintes de delivery, la réalité technique et les arbitrages nécessaires au bon moment.",
              },
              {
                title: "Pour les marques",
                text: "Une attention particulière portée à la perception, à la finition et à la cohérence de l'expérience finale.",
              },
              {
                title: "Pour les projets sensibles",
                text: "Une approche calme, structurée et exigeante dans les environnements publics, complexes ou fortement exposés.",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <div className="h-full rounded-[2rem] bg-white p-7 shadow-lg shadow-slate-950/5 ring-1 ring-[#e4d7c5]">
                  <div className="flex items-center gap-3">
                    <BriefcaseBusiness className="h-5 w-5 text-[#9f7a3f]" />
                    <h3 className="font-display text-3xl text-slate-950">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d1117] px-6 py-24 text-white sm:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-white/5 px-8 py-14 text-center backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f4ddae]">
            Conversion
          </p>
          <h2 className="mt-6 font-display text-5xl">
            Si le projet doit être bien cadré, bien présenté et bien livré, parlons-en.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Je peux intervenir en amont pour structurer, pendant l&apos;exécution pour piloter, ou en
            réalisation pour donner au projet la qualité qu&apos;il mérite.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f4ddae] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#f1d396]"
            >
              Me contacter
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/parcours"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Voir le parcours
              <Sparkles className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
