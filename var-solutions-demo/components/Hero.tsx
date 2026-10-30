import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { business, heroSteps, heroTrust, images } from "@/lib/content";
import { CallButton, WhatsAppButton } from "./Buttons";

function Photo({ src, alt, label, tone }: { src: string; alt: string; label: string; tone: "red" | "green" }) {
  return (
    <figure className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-ink-2">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 50vw"
        className="object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <figcaption
        className={`absolute bottom-2 left-2 rounded-md px-2 py-0.5 text-[0.7rem] font-extrabold tracking-wider text-white ${
          tone === "red" ? "bg-red-600" : "bg-accent-2"
        }`}
      >
        {label}
      </figcaption>
    </figure>
  );
}

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 -z-10 size-[38rem] rounded-full bg-[radial-gradient(circle,rgba(24,196,107,0.28),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -left-48 -z-10 size-[32rem] rounded-full bg-[radial-gradient(circle,rgba(255,204,51,0.12),transparent_65%)]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-3.5 py-1.5 text-sm font-medium text-text">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
            </span>
            Mobile service across South Wales
          </p>
          <h1
            id="hero-title"
            className="heading mt-6 text-[3.1rem] font-extrabold sm:text-6xl lg:text-7xl"
          >
            Scratches &amp; dents <span className="text-accent">gone.</span>
            <br />
            We come to you.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Bumper scuffs, dents, scratches and kerbed alloys repaired at your home or workplace. No
            garage visit, no lost day. Send a photo, get a price.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton href={business.phoneHref}>Call {business.phoneDisplay}</CallButton>
            <WhatsAppButton href={business.whatsappHeroHref}>WhatsApp a photo</WhatsAppButton>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-text">
            {heroTrust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="size-5 text-accent" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-line bg-panel/90 p-5 shadow-2xl shadow-black/40 sm:p-6">
          <h2 className="heading text-3xl font-bold">How easy is it?</h2>
          <p className="mt-1.5 text-sm text-muted">From damaged to like-new, usually in a few hours.</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Photo src={images.before.src} alt={images.before.alt} label="BEFORE" tone="red" />
            <Photo src={images.after.src} alt={images.after.alt} label="AFTER" tone="green" />
          </div>
          <ol className="mt-6 space-y-3.5">
            {heroSteps.map((step, i) => (
              <li key={step} className="flex items-center gap-3.5">
                <span className="font-heading grid size-9 shrink-0 place-items-center rounded-lg bg-accent text-lg font-extrabold text-dark">
                  {i + 1}
                </span>
                <span className="font-medium">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
