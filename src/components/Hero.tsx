import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Star, ShieldCheck, MapPin, BadgeCheck, ChevronDown, Users } from "lucide-react";
import { IMAGES, STATS, CONTACT } from "../lib/data";
import { Counter, EASE } from "./ui";

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.55 } },
};

const child: Variants = {
  hidden: { opacity: 0, y: 44, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.05, ease: EASE } },
};

const AVATARS = [
  { initials: "MR", bg: "from-brand-500 to-ink-700" },
  { initials: "FS", bg: "from-gold-400 to-gold-600" },
  { initials: "AK", bg: "from-ink-600 to-ink-900" },
  { initials: "FF", bg: "from-brand-400 to-brand-700" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);

  return (
    <section ref={ref} id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-ink-950">
      {/* Backdrop */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 -z-20">
        <img
          src={IMAGES.heroKaaba}
          alt="Aerial view of pilgrims circling the Holy Kaaba at Masjid al-Haram"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/92 via-ink-950/55 to-ink-950/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/70" />

      {/* Ambient orbs */}
      <div className="absolute -left-40 top-1/3 -z-10 h-[480px] w-[480px] rounded-full bg-brand-500/20 blur-[130px]" aria-hidden />
      <div className="absolute -right-32 top-16 -z-10 h-[420px] w-[420px] rounded-full bg-gold-500/16 blur-[120px]" aria-hidden />

      <motion.div
        variants={parent}
        initial="hidden"
        animate="show"
        className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-80 pt-40 sm:px-8 sm:pb-64 lg:pb-48 lg:pt-48"
      >
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ------------------------------ Copy ------------------------------ */}
          <div>
            <motion.div variants={child}>
              <span className="glass-dark inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
                </span>
                Puttalam, Sri Lanka · Licensed Hajj & Umrah · All LKR Pricing
              </span>
            </motion.div>

            <motion.h1
              variants={child}
              className="mt-7 font-display text-[2.85rem] font-medium leading-[1.02] tracking-tight text-white text-balance sm:text-6xl lg:text-[4.6rem] xl:text-[5.1rem]"
            >
              Answer the call.
              <br />
              We perfect{" "}
              <em className="text-gold-gradient animate-shimmer font-semibold italic">
                every step.
              </em>
            </motion.h1>

            <motion.p
              variants={child}
              className="mt-7 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg"
            >
              Standard, Premium & Customized packages from Puttalam — 20 years in the market: visa processing, comfortable accommodation, reliable transport & expert guided support. Sri Lankan meals available daily. All quotes in LKR — no hidden fees.
              <span className="block mt-2 text-sm text-white/60">📍 {CONTACT.address} · {CONTACT.phoneLk} · {CONTACT.phoneSa}</span>
            </motion.p>



            {/* Trust strip */}
            <motion.div variants={child} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="flex items-center">
                {AVATARS.map((a, i) => (
                  <span
                    key={a.initials}
                    className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br text-[10px] font-extrabold text-white ring-2 ring-ink-950 ${a.bg} ${i > 0 ? "-ml-2.5" : ""}`}
                    aria-hidden
                  >
                    {a.initials}
                  </span>
                ))}
                <span className="-ml-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[9px] font-extrabold text-ink-900 ring-2 ring-ink-950">
                  18k+
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1" aria-label="Rated 4.9 out of 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" aria-hidden />
                  ))}
                  <span className="ml-1.5 text-sm font-bold text-white">4.9</span>
                </div>
                <p className="mt-0.5 text-xs text-white/60">Sri Lankan pilgrims · verified reviews</p>
              </div>
              <div className="hidden items-center gap-2 text-xs font-semibold text-white/70 sm:flex">
                <ShieldCheck className="h-4 w-4 text-gold-400" aria-hidden />
                LKR All-Inclusive · No Hidden Fees
              </div>
            </motion.div>
          </div>

          {/* --------------------------- Floating cards --------------------------- */}
          <motion.div style={{ y: cardsY }} className="relative hidden h-[460px] lg:block" aria-hidden>
            {/* Orbit ring */}
            <div className="animate-spin-slower absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-400/20">
              <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-gold-400 shadow-[0_0_16px_4px_rgba(217,184,82,0.6)]" />
            </div>

            {/* Card: Visa approved */}
            <motion.div
              variants={child}
              className="animate-float absolute left-2 top-6 w-64"
            >
              <div className="glass rounded-3xl p-5 shadow-[0_30px_70px_-25px_rgba(4,24,27,0.55)]">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-ink-700 text-white">
                    <BadgeCheck className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-brand-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-brand-700">
                    Approved
                  </span>
                </div>
                <p className="mt-3.5 text-sm font-extrabold text-ink-900">Umrah Visa — Family of 4 · LK</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink-900/8">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.7, duration: 1.4, ease: EASE }}
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 to-gold-400"
                  />
                </div>
                <p className="mt-2 text-[11px] font-semibold text-ink-900/55">Processed in 2 days · Puttalam Office</p>
              </div>
            </motion.div>

            {/* Card: hotel proximity */}
            <motion.div
              variants={child}
              className="animate-float-delay absolute bottom-24 left-16 w-60"
            >
              <div className="glass rounded-3xl p-5 shadow-[0_30px_70px_-25px_rgba(4,24,27,0.55)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 text-ink-950">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[2rem] font-display font-semibold leading-none text-ink-900">LKR <span className="text-xl">695k</span></p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-ink-900/55">Standard from</p>
                  </div>
                </div>
                <p className="mt-3 text-xs font-semibold leading-relaxed text-ink-900/65">
                  All-inclusive LKR: visa, 4★ stay, transport, guided support. Sri Lankan meals optional.
                </p>
              </div>
            </motion.div>

            {/* Card: group care */}
            <motion.div
              variants={child}
              className="animate-float-slow absolute right-0 top-36 w-56"
            >
              <div className="glass-dark rounded-3xl p-5 shadow-[0_30px_70px_-25px_rgba(4,24,27,0.6)]">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-400/20 text-gold-300">
                    <Users className="h-4.5 w-4.5" />
                  </span>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/85">Live from Puttalam</p>
                </div>
                <p className="mt-3 text-sm font-semibold leading-snug text-white">
                  “Group Al-Noor — Sri Lankan meals ready in Makkah.”
                </p>
                <p className="mt-2 text-[11px] text-white/55">{CONTACT.phoneLk} · 12 min ago</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ---------------------------- Stats ribbon ---------------------------- */}
      <motion.div
        style={{ opacity: fade }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.1, ease: EASE }}
        className="absolute inset-x-0 bottom-0 z-10 px-5 pb-7 sm:px-8"
      >
        <div className="glass-dark mx-auto grid max-w-6xl grid-cols-2 gap-y-6 rounded-3xl px-6 py-7 sm:grid-cols-4 sm:px-10">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center gap-1 text-center ${i > 0 ? "sm:border-l sm:border-white/12" : ""}`}
            >
              <Counter
                to={s.value}
                suffix={s.suffix}
                decimals={s.decimals ?? 0}
                className="font-display text-3xl font-semibold text-gold-gradient sm:text-4xl"
              />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-center">
          <a
            href="#trust"
            aria-label="Scroll to learn more"
            className="flex flex-col items-center gap-1.5 text-white/50 transition-colors hover:text-gold-300"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
            <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
