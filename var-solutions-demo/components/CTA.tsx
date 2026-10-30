import { business } from "@/lib/content";
import { CallButton } from "./Buttons";

export default function CTA() {
  return (
    <section aria-labelledby="cta-title" className="bg-linear-to-br from-accent to-[#0b7a43] text-dark">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <h2 id="cta-title" className="heading text-4xl font-extrabold sm:text-6xl">
          Damaged car? Sorted today.
        </h2>
        <p className="mt-4 text-lg font-medium text-dark/85">
          Call or WhatsApp VAR Solutions for a free, no-obligation quote.
        </p>
        <CallButton href={business.phoneHref} variant="dark" className="mt-8 px-7 text-lg">
          {business.phoneDisplay}
        </CallButton>
      </div>
    </section>
  );
}
