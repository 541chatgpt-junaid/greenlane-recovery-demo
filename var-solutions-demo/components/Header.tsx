import { Phone } from "lucide-react";
import { business } from "@/lib/content";
import Wordmark from "./Wordmark";

const links = [
  { href: "#services", label: "Services" },
  { href: "#areas", label: "Areas" },
  { href: "#reviews", label: "Reviews" },
  { href: "#quote", label: "Free Quote" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/80 backdrop-blur-md supports-[backdrop-filter]:bg-ink/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-18 sm:px-6">
        <Wordmark />
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-semibold text-muted">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-text">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={business.phoneHref}
          className="lift inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-bold text-dark hover:bg-accent-2 hover:text-white"
          aria-label={`Call ${business.phoneDisplay}`}
        >
          <Phone className="size-4" aria-hidden />
          <span className="sm:hidden">Call</span>
          <span className="hidden sm:inline">{business.phoneDisplay}</span>
        </a>
      </div>
    </header>
  );
}
