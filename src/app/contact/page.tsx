import type { Metadata } from "next";
import { ArrowUpRight, CalendarRange, Linkedin, Mail, MapPin, MessageSquare } from "lucide-react";

import ContactForm from "@/components/ContactForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter Arnold Mubuanga Yate pour une mission, un échange produit ou une collaboration technique.",
};

export default function ContactPage() {
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
            <MessageSquare className="h-4 w-4" />
            Contact
          </p>
          <h1 className="hero-title reveal-up delay-1 mt-8 max-w-3xl font-display text-6xl leading-[0.92] sm:text-7xl">
            Une mission,
            <br />
            <span className="text-[#f4ddae]">parlons-en.</span>
          </h1>
          <p className="reveal-up delay-2 mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Je privilégie les échanges clairs et contextualisés. Donnez-moi quelques éléments sur
            votre projet ou votre enjeu, et je reviens vers vous rapidement.
          </p>

          <div className="reveal-up mt-8 grid gap-3 sm:grid-cols-3" style={{ animationDelay: "0.32s" }}>
            {[
              { icon: MapPin, label: "Localisation", value: profile.location },
              { icon: Mail, label: "Email", value: profile.email },
              { icon: CalendarRange, label: "Disponibilité", value: profile.availability },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-4 backdrop-blur"
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
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="space-y-4">
              <div className="rounded-[2.2rem] bg-[#0d1117] p-8 text-white shadow-2xl shadow-black/10">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f4ddae]">
                  Coordonnées
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-[#c7a56a]/40 hover:bg-white/10"
                  >
                    <Mail className="mt-0.5 h-5 w-5 text-[#f4ddae]" />
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Email</p>
                      <p className="mt-2 text-sm font-medium text-white">{profile.email}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <MapPin className="mt-0.5 h-5 w-5 text-[#f4ddae]" />
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Localisation</p>
                      <p className="mt-2 text-sm font-medium text-white">{profile.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <CalendarRange className="mt-0.5 h-5 w-5 text-[#f4ddae]" />
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Disponibilité</p>
                      <p className="mt-2 text-sm font-medium text-white">{profile.availability}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#e4d5be] bg-white p-7 shadow-lg shadow-slate-950/5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9f7a3f]">
                  Liens pro
                </p>
                <div className="mt-5 space-y-3">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-[1.25rem] bg-[var(--background)] px-4 py-3 text-sm font-medium text-slate-800 transition hover:text-[#9f7a3f]"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent("Demande de CV PDF")}`}
                    className="flex items-center justify-between rounded-[1.25rem] bg-[var(--background)] px-4 py-3 text-sm font-medium text-slate-800 transition hover:text-[#9f7a3f]"
                  >
                    <span>Demander le CV (PDF)</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </aside>

            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
