import { Star } from "lucide-react";
import { reviews } from "@/lib/content";
import Section, { SectionHeading } from "./Section";

export default function Reviews() {
  return (
    <Section id="reviews" tone="dark" labelledBy="reviews-title">
      <SectionHeading id="reviews-title" tone="dark" eyebrow="Reviews" title="What customers say" />
      <ul className="mt-12 grid gap-5 md:grid-cols-3">
        {reviews.map((r, i) => (
          <li key={i} className="lift flex flex-col rounded-2xl border border-line bg-panel p-6 hover:border-accent/50">
            <div className="flex gap-1 text-warn" role="img" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, s) => (
                <Star key={s} className="size-5 fill-current" aria-hidden />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-lg leading-relaxed">“{r.quote}”</blockquote>
            <p className="mt-5 text-sm font-semibold text-muted">
              {r.name}, {r.town}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-center text-sm text-muted">
        Demo layout: these spaces will show VAR Solutions&apos; real customer reviews.
      </p>
    </Section>
  );
}
