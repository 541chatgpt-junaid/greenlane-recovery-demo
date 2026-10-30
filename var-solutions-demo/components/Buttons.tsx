import { MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";

const base =
  "lift inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-base font-bold shadow-sm hover:shadow-lg";

export function CallButton({
  href,
  children,
  variant = "accent",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "accent" | "dark";
  className?: string;
}) {
  const color =
    variant === "dark"
      ? "bg-ink text-text hover:bg-ink-2"
      : "bg-accent text-dark hover:bg-accent-2 hover:text-white";
  return (
    <a href={href} className={`${base} ${color} ${className}`}>
      <Phone className="size-5" aria-hidden />
      {children}
    </a>
  );
}

export function WhatsAppButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} bg-whatsapp text-dark hover:bg-whatsapp-2 ${className}`}
    >
      <MessageCircle className="size-5" aria-hidden />
      {children}
    </a>
  );
}
