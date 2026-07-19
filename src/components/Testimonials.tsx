import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../lib/data";
import { SectionHeading } from "./ui";

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <figure className="glass relative w-[320px] shrink-0 rounded-3xl p-6 shadow-[0_20px_50px_-25px_rgba(6,42,47,0.25)] transition-shadow duration-500 hover:shadow-[0_30px_60px_-25px_rgba(6,42,47,0.4)] sm:w-[380px]">
      <Quote className="absolute right-6 top-6 h-8 w-8 text-gold-500/25" aria-hidden />
      <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" aria-hidden />
        ))}
      </div>
      <blockquote className="mt-4 text-[13.5px] leading-relaxed text-ink-900/75">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-900/8 pt-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-ink-700 to-brand-500 text-xs font-extrabold text-white">
          {t.initials}
        </span>
        <div>
          <p className="text-sm font-extrabold text-ink-900">{t.name}</p>
          <p className="text-[11px] font-semibold text-ink-900/50">{t.location}</p>
        </div>
        <span className="ml-auto rounded-full bg-brand-100 px-2.5 py-1 text-[9.5px] font-extrabold uppercase tracking-wide text-brand-700">
          {t.trip.split("—")[0]}
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const rowA = [...TESTIMONIALS.slice(0, 3), ...TESTIMONIALS.slice(0, 3), ...TESTIMONIALS.slice(0, 3), ...TESTIMONIALS.slice(0, 3)];
  const rowB = [...TESTIMONIALS.slice(3), ...TESTIMONIALS.slice(3), ...TESTIMONIALS.slice(3), ...TESTIMONIALS.slice(3)];

  return (
    <section
      id="stories"
      aria-labelledby="stories-title"
      className="relative overflow-hidden bg-cream py-24 sm:py-32"
    >
      <div className="hairline absolute inset-x-0 top-0" aria-hidden />
      <div className="pattern-star absolute inset-0 opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pilgrim Stories"
          title={
            <>
              18,400 journeys.{" "}
              <em className="text-teal-gradient font-display italic">18,400 hearts changed.</em>
            </>
          }
          description="Every review below is from a verified Ummath pilgrim. We read each one aloud at our weekly team meeting — they are why we exist."
        />
      </div>

      {/* Ambient marquee wall */}
      <div className="relative mt-16 space-y-5" aria-label="Testimonials from verified pilgrims">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent sm:w-32" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent sm:w-32" aria-hidden />

        <div className="flex overflow-hidden">
          <div className="animate-marquee flex gap-5 pr-5">
            {rowA.map((t, i) => (
              <TestimonialCard key={`a-${i}`} t={t} />
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex gap-5 pr-5 [animation-direction:reverse]">
            {rowB.map((t, i) => (
              <TestimonialCard key={`b-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
