"use client";

import { Camera, MessageCircle } from "lucide-react";
import type { FormEvent } from "react";
import { business, quoteRepairs, quoteTowns } from "@/lib/content";
import Section, { SectionHeading } from "./Section";

const field =
  "mt-1.5 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-dark placeholder:text-slate-400 transition focus:border-accent-2 focus:ring-3 focus:ring-accent/30 focus:outline-none";
const label = "block text-sm font-semibold text-dark";

export default function QuoteForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim() || "-";
    const message = [
      "Hi VAR Solutions, I would like a quote.",
      `Name: ${get("name")}`,
      `Town: ${get("town")}`,
      `Repair: ${get("repair")}`,
      `Car: ${get("car")}`,
      `Details: ${get("details")}`,
      "I'll send photos next.",
    ].join("\n");
    const url = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <Section id="quote" tone="light" labelledBy="quote-title">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionHeading
            id="quote-title"
            tone="light"
            eyebrow="Free quote"
            title="Get a price in minutes"
            lead="Tell us about the damage and we'll get back to you with a fixed price. Quickest way: WhatsApp us a photo."
          />
          <div className="mt-7 flex gap-3.5 rounded-2xl border border-accent/30 bg-accent/10 p-5">
            <Camera className="mt-0.5 size-6 shrink-0 text-accent-2" aria-hidden />
            <p className="leading-relaxed text-slate-700">
              <strong className="text-dark">Tip:</strong> take one photo close up and one from a few steps
              back so we can see the size and position of the damage.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-300/40 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="q-name" className={label}>
                Your name <span className="text-red-600" aria-hidden>*</span>
              </label>
              <input id="q-name" name="name" type="text" required autoComplete="name" className={field} />
            </div>
            <div>
              <label htmlFor="q-town" className={label}>
                Town
              </label>
              <select id="q-town" name="town" className={field} defaultValue={quoteTowns[0]}>
                {quoteTowns.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="q-repair" className={label}>
                What needs fixing?
              </label>
              <select id="q-repair" name="repair" className={field} defaultValue={quoteRepairs[0]}>
                {quoteRepairs.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="q-car" className={label}>
                Car make &amp; model
              </label>
              <input id="q-car" name="car" type="text" placeholder="e.g. Ford Focus" className={field} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="q-details" className={label}>
                Anything else?
              </label>
              <textarea id="q-details" name="details" rows={4} className={field} />
            </div>
          </div>
          <button
            type="submit"
            className="lift mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 py-4 text-base font-bold text-dark shadow-sm hover:bg-whatsapp-2 hover:shadow-lg"
          >
            <MessageCircle className="size-5" aria-hidden />
            Send on WhatsApp
          </button>
        </form>
      </div>
    </Section>
  );
}
