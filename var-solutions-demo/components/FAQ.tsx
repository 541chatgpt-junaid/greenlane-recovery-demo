import { faqs } from "@/lib/content";
import Section, { SectionHeading } from "./Section";

export default function FAQ() {
  return (
    <Section tone="dark" labelledBy="faq-title">
      <SectionHeading id="faq-title" tone="dark" eyebrow="FAQ" title="Common questions" center />
      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-line bg-panel open:border-accent/40">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-lg font-semibold sm:px-6 [&::-webkit-details-marker]:hidden">
              {f.q}
              <span
                aria-hidden
                className="font-heading grid size-8 shrink-0 place-items-center rounded-lg bg-accent/15 text-2xl leading-none font-bold text-accent"
              >
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">−</span>
              </span>
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-muted sm:px-6">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
