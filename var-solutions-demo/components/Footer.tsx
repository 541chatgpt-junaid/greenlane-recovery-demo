import { agency, areas, business } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-sm text-muted">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="font-semibold text-text">{business.name}</p>
            <p className="mt-1">Mobile smart repairs across {business.region}</p>
          </div>
          <p>{areas.join(" · ")}</p>
          <a href={business.phoneHref} className="text-base font-bold text-text hover:text-accent">
            {business.phoneDisplay}
          </a>
        </div>
        <div className="mt-8 border-t border-line pt-6 text-center text-xs">
          Demo page by{" "}
          <a
            href={agency.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-accent underline underline-offset-2 hover:text-text"
          >
            {agency.name}
          </a>
        </div>
      </div>
    </footer>
  );
}
