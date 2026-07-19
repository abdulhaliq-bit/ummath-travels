import { Star } from "lucide-react";
import { ACCREDITATIONS } from "../lib/data";

export default function TrustBar() {
  const items = [...ACCREDITATIONS, ...ACCREDITATIONS, ...ACCREDITATIONS, ...ACCREDITATIONS];

  return (
    <section id="trust" aria-label="Accreditations" className="relative overflow-hidden border-b border-ink-900/8 bg-cream py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent" aria-hidden />
      <div className="animate-marquee flex w-max items-center gap-10 pr-10">
        {items.map((label, i) => (
          <span key={`${label}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
            <span className="text-[13px] font-extrabold uppercase tracking-[0.22em] text-ink-900/45">
              {label}
            </span>
            <Star className="h-3 w-3 fill-gold-500/60 text-gold-500/60" aria-hidden />
          </span>
        ))}
      </div>
    </section>
  );
}
