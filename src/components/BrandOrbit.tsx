import type { CSSProperties } from "react";

const brands = [
  { name: "CATIA", angle: 0, radius: 175 },
  { name: "SOLIDWORKS", angle: 50, radius: 175 },
  { name: "SIMULIA", angle: 105, radius: 175 },
  { name: "DELMIA", angle: 160, radius: 175 },
  { name: "ENOVIA", angle: 220, radius: 175 },
  { name: "BIOVIA", angle: 275, radius: 175 },
  { name: "MEDIDATA", angle: 325, radius: 175 },
] as const;

export default function BrandOrbit() {
  return (
    <div className="relative mx-auto hidden h-[28rem] w-full max-w-[28rem] lg:block">
      <div className="absolute inset-10 rounded-full border border-white/10" />
      <div className="absolute inset-20 rounded-full border border-white/10" />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(235,0,41,0.18),transparent_45%)]" />

      <div className="orbit-shell absolute inset-0">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="orbit-node"
            style={
              {
                "--orbit-angle": `${brand.angle}deg`,
                "--orbit-radius": `${brand.radius}px`,
              } as CSSProperties
            }
          >
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
              {brand.name}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 shadow-[0_0_100px_rgba(235,0,41,0.15)] backdrop-blur">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-accent">
            Mission clé
          </p>
          <h3 className="mt-3 font-display text-4xl text-white">3DSearch</h3>
          <p className="mt-2 text-xs uppercase tracking-[0.22em] text-slate-300">NETVIBES</p>
        </div>
      </div>
    </div>
  );
}
