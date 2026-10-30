import { business } from "@/lib/content";

export default function Wordmark() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label={`${business.name} home`}>
      <span className="font-heading bg-linear-to-b from-white via-[#dfe4ea] to-[#8c97a4] bg-clip-text pr-1 text-[2.1rem] leading-none font-extrabold italic tracking-tight text-transparent">
        {business.wordmark}
      </span>
      <span className="flex flex-col text-[0.62rem] leading-tight font-semibold tracking-[0.14em] text-muted uppercase">
        <span>Solutions Ltd</span>
        <span>{business.tagline}</span>
      </span>
    </a>
  );
}
