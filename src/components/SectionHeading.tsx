type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl text-slate-950 sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}
