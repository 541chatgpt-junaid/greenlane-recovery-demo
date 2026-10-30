import { MapPin } from "lucide-react";
import { areaMapPoints, areas, business } from "@/lib/content";
import { CallButton } from "./Buttons";
import Section, { SectionHeading } from "./Section";

export default function Areas() {
  return (
    <Section id="areas" tone="light" labelledBy="areas-title">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionHeading
            id="areas-title"
            tone="light"
            eyebrow="Areas we cover"
            title="Across South Wales"
            lead="Our mobile van covers South Wales, from the cities to the valleys. Not sure if we reach you? Just ask."
          />
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {areas.map((a) => (
              <li
                key={a}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold shadow-sm"
              >
                <MapPin className="size-4 text-accent-2" aria-hidden />
                {a}
              </li>
            ))}
          </ul>
          <CallButton href={business.phoneHref} className="mt-8">
            Check your area
          </CallButton>
        </div>

        <div
          role="img"
          aria-label={`Map of South Wales showing coverage in ${areas.join(", ")}`}
          className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_60%_40%,#145c37,#0b2d1d_60%,#071a11)] text-white shadow-xl"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:32px_32px]"
          />
          <div className="absolute top-5 left-5 sm:top-6 sm:left-6">
            <p className="heading text-3xl font-bold sm:text-4xl">South Wales</p>
            <p className="mt-1 text-sm text-white/75">Mobile repairs across the region</p>
          </div>
          {areaMapPoints.map((p) => (
            <div
              key={p.name}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
              style={{ left: `${p.left}%`, top: `${p.top}%` }}
            >
              <span className="relative flex size-3.5">
                <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-3.5 rounded-full bg-accent shadow-[0_0_14px_4px_rgba(24,196,107,0.7)]" />
              </span>
              <span className="mt-1.5 text-xs font-semibold whitespace-nowrap text-white sm:text-sm">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
