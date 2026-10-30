import { Brush, CarFront, Disc3, Hammer, Sparkles, SprayCan, type LucideIcon } from "lucide-react";
import { services, type ServiceIcon } from "@/lib/content";
import Section, { SectionHeading } from "./Section";

const icons: Record<ServiceIcon, LucideIcon> = {
  scratch: Brush,
  dent: Hammer,
  bumper: CarFront,
  alloy: Disc3,
  chips: Sparkles,
  paint: SprayCan,
};

export default function Services() {
  return (
    <Section id="services" tone="light" labelledBy="services-title">
      <SectionHeading
        id="services-title"
        tone="light"
        eyebrow="What we fix"
        title="Smart repairs, done at your door"
        lead="SMART repairs fix only the damaged area, so you pay a fraction of bodyshop prices and keep your car's original finish."
      />
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = icons[s.icon];
          return (
            <li
              key={s.title}
              className="lift rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-accent/50 hover:shadow-xl hover:shadow-slate-300/50"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-accent/12 text-accent-2">
                <Icon className="size-6" aria-hidden />
              </span>
              <h3 className="heading mt-5 text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{s.text}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
