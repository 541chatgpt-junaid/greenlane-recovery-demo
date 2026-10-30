import { tickerItems } from "@/lib/content";

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {tickerItems.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-6">{item}</span>
          <span className="text-dark/50" aria-hidden>
            •
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Ticker() {
  return (
    <div className="overflow-hidden bg-accent py-3.5 text-dark" aria-label="Areas covered">
      <div className="font-heading flex w-max animate-marquee text-xl font-bold tracking-wider uppercase motion-reduce:animate-none">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
