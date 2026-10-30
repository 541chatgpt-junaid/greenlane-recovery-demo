import { MessageCircle, Phone } from "lucide-react";
import { business } from "@/lib/content";

export default function MobileCallBar() {
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-ink/95 p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur-md min-[860px]:hidden"
    >
      <a
        href={business.phoneHref}
        className="flex items-center justify-center gap-2 rounded-xl bg-accent py-3.5 font-bold text-dark active:bg-accent-2"
      >
        <Phone className="size-5" aria-hidden />
        Call now
      </a>
      <a
        href={business.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-xl bg-whatsapp py-3.5 font-bold text-dark active:bg-whatsapp-2"
      >
        <MessageCircle className="size-5" aria-hidden />
        WhatsApp
      </a>
    </nav>
  );
}
