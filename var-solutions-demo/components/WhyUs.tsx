import { reasons } from "@/lib/content";
import Section, { SectionHeading } from "./Section";

export default function WhyUs() {
  return (
    <Section tone="dark" labelledBy="why-title">
      <SectionHeading
        id="why-title"
        tone="dark"
        eyebrow="Why VAR Solutions"
        title="Bodyshop finish, without the bodyshop"
      />
      <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
        {reasons.map((r, i) => (
          <li
            key={r.title}
            className="lift rounded-2xl border border-line bg-panel p-4 hover:border-accent/50 sm:p-6"
          >
            <span className="font-heading block text-4xl leading-none sm:text-5xl font-extrabold text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="heading mt-3 text-xl font-bold sm:mt-4 sm:text-2xl">{r.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{r.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
