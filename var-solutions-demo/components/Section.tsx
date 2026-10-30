import type { ReactNode } from "react";

type Props = {
  id?: string;
  tone: "dark" | "light";
  children: ReactNode;
  className?: string;
  labelledBy?: string;
};

export default function Section({ id, tone, children, className = "", labelledBy }: Props) {
  const toneClass = tone === "light" ? "bg-light text-dark" : "bg-ink text-text";
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${toneClass} py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  tone,
  center = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  tone: "dark" | "light";
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${tone === "light" ? "text-accent-2" : ""}`}>{eyebrow}</p>
      <h2 id={id} className="heading mt-2 text-4xl font-bold sm:text-5xl">
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 text-lg leading-relaxed ${tone === "light" ? "text-slate-600" : "text-muted"}`}>
          {lead}
        </p>
      )}
    </div>
  );
}
