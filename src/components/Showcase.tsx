import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, MoonStar } from "lucide-react";
import { IMAGES, JOURNEYS } from "../lib/data";
import { SectionHeading, Reveal, EASE } from "./ui";
import { cn } from "../utils/cn";

export default function Showcase() {
  const [active, setActive] = useState(JOURNEYS[0].id);
  const journey = JOURNEYS.find((j) => j.id === active)!;

  return (
    <section
      id="journeys"
      aria-labelledby="journeys-title"
      className="relative overflow-hidden bg-ink-950 py-24 sm:py-32"
    >
      <div className="pattern-star-dark absolute inset-0" aria-hidden />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" aria-hidden />
      <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-600/14 blur-[140px]" aria-hidden />
      <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-gold-500/10 blur-[130px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            dark
            eyebrow="3.3 Journeys — Standard, Premium, Customized"
            title={
              <>
                Visa, hotel, transport & scholar
                <br />
                <em className="text-gold-gradient font-display italic">+ Sri Lankan meals, in LKR</em>
              </>
            }
          />
          {/* Segmented tabs */}
          <Reveal delay={0.15}>
            <div
              role="tablist"
              aria-label="Journey types"
              className="glass-dark flex rounded-full p-1.5"
            >
              {JOURNEYS.map((j) => {
                const selected = j.id === active;
                return (
                  <button
                    key={j.id}
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(j.id)}
                    className={cn(
                      "relative rounded-full px-5 py-2.5 text-[13px] font-bold tracking-wide transition-colors duration-300",
                      selected ? "text-ink-950" : "text-white/65 hover:text-white"
                    )}
                  >
                    {selected && (
                      <motion.span
                        layoutId="journey-tab"
                        transition={{ duration: 0.55, ease: EASE }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-400 to-gold-300 shadow-[0_8px_24px_-8px_rgba(217,184,82,0.7)]"
                      />
                    )}
                    <span className="relative z-10">{j.label}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Panel */}
        <div className="mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={journey.id}
              initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
              transition={{ duration: 0.65, ease: EASE }}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              {/* Image */}
              <div className="group relative">
                <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-gold-400/25 via-transparent to-brand-500/25 opacity-70 blur-lg transition-opacity duration-700 group-hover:opacity-100" aria-hidden />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/12">
                  <img
                    src={IMAGES[journey.image as keyof typeof IMAGES]}
                    alt={journey.alt}
                    loading="lazy"
                    className="aspect-[4/3.2] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" aria-hidden />
                  <span className="glass-dark absolute left-5 top-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-gold-200">
                    <MoonStar className="h-3.5 w-3.5" aria-hidden />
                    {journey.tag}
                  </span>
                </div>
              </div>

              {/* Copy */}
              <div>
                <h3 className="font-display text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-[2.9rem]">
                  {journey.title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/68 sm:text-lg">
                  {journey.description}
                  <span className="block mt-2 text-sm text-gold-300/80">Includes visa processing, comfortable accommodation, reliable transport & expert guided support — all billed in LKR.</span>
                </p>
                <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
                  {journey.bullets.map((b, i) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + i * 0.09, duration: 0.55, ease: EASE }}
                      className="flex items-start gap-3 text-sm font-semibold text-white/85"
                    >
                      <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-gold-400/18 text-gold-300">
                        <Check className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      {b}
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-wrap items-center gap-5">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-7 py-3.5 text-sm font-extrabold text-ink-950 shadow-[0_16px_40px_-12px_rgba(201,162,39,0.7)] transition-transform duration-300 hover:scale-[1.04] active:scale-95"
                  >
                    Enquire about {journey.label}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                  </a>
                  <a
                    href="#contact"
                    className="text-sm font-bold text-white/75 underline decoration-gold-400/60 decoration-2 underline-offset-6 transition-colors hover:text-gold-300"
                  >
                    Request callback
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
