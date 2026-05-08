import Image from "next/image";
import { Crown } from "lucide-react";

import type { Project } from "@/data/profile";

type ProjectPosterArtworkProps = {
  project: Project;
  priority?: boolean;
};

export default function ProjectPosterArtwork({
  project,
  priority = false,
}: ProjectPosterArtworkProps) {
  return (
    <div className="poster-shell relative overflow-hidden rounded-[2rem] bg-[#120f0d] p-6 text-white shadow-[0_28px_80px_rgba(0,0,0,0.34)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,165,106,0.32),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_24%),linear-gradient(155deg,#0d1117_6%,#201814_45%,#41241b_100%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.85)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.85)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f4ddae]">
            <Crown className="h-3.5 w-3.5" />
            Web & Mobile
          </div>
          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-white/72">
            {project.category}
          </span>
        </div>

        <div className="mt-8">
          <p className="text-xs uppercase tracking-[0.28em] text-[#f4ddae]/88">Affiche projet</p>
          <h3 className="mt-3 font-display text-5xl leading-none text-white">{project.name}</h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/76">{project.description}</p>
        </div>

        <div className="relative mt-10 h-[23rem] sm:h-[28rem]">
          <div className="absolute left-0 top-6 w-[86%] rotate-[-2.8deg] overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#16130f] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.36)]">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f4ddae]" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/16" />
            </div>
            <div className="relative mt-3 aspect-[16/10] overflow-hidden rounded-[1.1rem] bg-black">
              <Image
                src={project.screenshot}
                alt={`${project.name} version web`}
                fill
                priority={priority}
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-[30%] overflow-hidden rounded-[2rem] border border-white/10 bg-[#16130f] p-2.5 shadow-[0_24px_50px_rgba(0,0,0,0.4)]">
            <div className="mx-auto mb-2 h-1.5 w-14 rounded-full bg-white/15" />
            <div className="relative aspect-[9/19] overflow-hidden rounded-[1.5rem] bg-black">
              <Image
                src={project.screenshotMobile}
                alt={`${project.name} version mobile`}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
