import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CheckCircle2, Send, Lock, Sparkles, Mail, MapPin, MessageCircle } from "lucide-react";
import { SectionHeading, Reveal, EASE } from "./ui";
import { CONTACT } from "../lib/data";

const inputCls =
  "w-full rounded-xl border border-white/15 bg-white/8 px-4 py-3.5 text-sm font-semibold text-white placeholder:text-white/40 backdrop-blur-sm transition-colors focus:border-gold-400/70 focus:bg-white/12 focus:outline-none";

export default function CTA() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" aria-labelledby="consult-title" className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 sm:py-32">
      {/* Section label per spec 3.4 */}
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-brand-600">3.4 Contact Information</p>
        <div className="hairline mx-auto mt-3 max-w-xs" aria-hidden />
      </div>

      <div className="relative mx-auto mt-10 max-w-7xl overflow-hidden rounded-[2.5rem] bg-ink-950 shadow-[0_60px_120px_-40px_rgba(6,42,47,0.6)]">
        {/* Ambience */}
        <div className="pattern-star-dark absolute inset-0" aria-hidden />
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-brand-600/25 blur-[130px]" aria-hidden />
        <div className="absolute -bottom-40 -right-24 h-[460px] w-[460px] rounded-full bg-gold-500/22 blur-[130px]" aria-hidden />
        <div className="hairline absolute inset-x-0 top-0" aria-hidden />

        <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
          {/* Copy */}
          <div className="flex flex-col justify-center">
            <SectionHeading
              align="left"
              dark
              eyebrow="Direct Communication"
              title={
                <>
                  Talk to us today —{" "}
                  <em className="text-gold-gradient font-display italic">we reply in 2 hours</em>
                </>
              }
              description="For direct communication, call, WhatsApp or email us. Visit our office in Madurankuliya, Puttalam for LKR cash payments and document drop. Submit the inquiry form for a free callback — in Sinhala, Tamil, English or Arabic."
            />

            <Reveal delay={0.18}>
              <div className="mt-8 space-y-3">
                <a href={`tel:${CONTACT.phoneLkRaw}`} className="glass-dark group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 hover:bg-white/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-ink-950">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-white/55">Sri Lanka — Call / WhatsApp — 20 yrs in market</span>
                    <span className="block text-base font-extrabold text-white">{CONTACT.phoneLk}</span>
                  </span>
                  <MessageCircle className="ml-auto h-4 w-4 text-gold-300 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                </a>
                <a href={`tel:${CONTACT.phoneSaRaw}`} className="glass-dark group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 hover:bg-white/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 text-white">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-white/55">Saudi Support — Makkah & Madinah</span>
                    <span className="block text-base font-extrabold text-white">{CONTACT.phoneSa}</span>
                  </span>
                </a>
                <a href={`mailto:${CONTACT.email}`} className="glass-dark flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 hover:bg-white/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-gold-300">
                    <Mail className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-white/55">Email for inquiries</span>
                    <span className="block text-[13.5px] font-extrabold text-white break-all">{CONTACT.email}</span>
                  </span>
                </a>
                <div className="glass-dark flex items-start gap-4 rounded-2xl px-5 py-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-gold-300">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-white/55">Physical address</span>
                    <span className="block max-w-[26ch] text-sm font-bold leading-relaxed text-white">{CONTACT.address}</span>
                    <a href="https://maps.google.com/?q=Madurankuliya+Puttalam" target="_blank" rel="noreferrer" className="mt-2 inline-flex text-xs font-bold text-gold-300 underline underline-offset-4 hover:text-gold-200">Open in Google Maps →</a>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <p className="mt-8 flex items-center gap-2 text-xs font-semibold text-white/50">
                <Lock className="h-3.5 w-3.5 text-gold-400" aria-hidden />
                Your inquiry is private. Replies in 2 hours, 9am–9pm SL time. No spam.
              </p>
            </Reveal>
          </div>

          {/* Form — 3.4 Contact Information */}
          <Reveal delay={0.15}>
            <div className="glass-dark relative rounded-3xl p-7 sm:p-9">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="flex min-h-[520px] flex-col items-center justify-center text-center"
                    role="status"
                    aria-live="polite"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 14 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-ink-950"
                    >
                      <CheckCircle2 className="h-10 w-10" aria-hidden />
                    </motion.span>
                    <h3 className="mt-6 font-display text-3xl font-semibold text-white">
                      Shukran! We got your inquiry.
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
                      Our team at {CONTACT.addressShort} (20 years) will call you at the number you provided from{" "}
                      <span className="font-bold text-gold-300">{CONTACT.phoneLk}</span> within 2 hours, in shaa Allah.
                      <span className="block mt-2 text-xs text-white/50">{CONTACT.phoneLk} · {CONTACT.phoneSa} · {CONTACT.email}</span>
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-7 text-xs font-bold text-white/60 underline decoration-gold-400/60 underline-offset-4 transition-colors hover:text-gold-300"
                    >
                      Submit another inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.5 }}
                    aria-label="Contact form — request a callback"
                  >
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="h-4 w-4 text-gold-400" aria-hidden />
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-gold-300">
                        3.4 Inquiry Form — Free Callback
                      </p>
                    </div>
                    <h3 id="consult-title" className="mt-3 font-display text-2xl font-semibold text-white sm:text-[1.7rem]">
                      Request a callback — in LKR
                    </h3>
                    <p className="mt-2 text-xs font-semibold text-white/60">Standard, Premium & Customized options. Sri Lankan meals highlighted. All LKR pricing.</p>

                    <div className="mt-7 space-y-4">
                      <div>
                        <label htmlFor="cta-name" className="sr-only">Full name</label>
                        <input id="cta-name" name="name" type="text" required autoComplete="name" placeholder="Your full name (as in passport)" className={inputCls} />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="cta-phone" className="sr-only">Phone / WhatsApp</label>
                          <input id="cta-phone" name="phone" type="tel" required autoComplete="tel" placeholder="+94 77..." className={inputCls} />
                        </div>
                        <div>
                          <label htmlFor="cta-email" className="sr-only">Email</label>
                          <input id="cta-email" name="email" type="email" autoComplete="email" placeholder="Email (optional)" className={inputCls} />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="cta-journey" className="sr-only">Package</label>
                          <select id="cta-journey" name="journey" required defaultValue="" className={`${inputCls} appearance-none [&>option]:text-ink-900`}>
                            <option value="" disabled>Package Type</option>
                            <option>Standard Umrah — LKR 695,000</option>
                            <option>Premium Umrah — LKR 895,000 (SL meals incl.)</option>
                            <option>Customized Private — from LKR 1,450,000</option>
                            <option>Hajj 1447H — quota secured (Custom quote)</option>
                            <option>Ziyarat & Heritage — Custom</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="cta-month" className="sr-only">Preferred month</label>
                          <select id="cta-month" name="month" required defaultValue="" className={`${inputCls} appearance-none [&>option]:text-ink-900`}>
                            <option value="" disabled>Month</option>
                            <option>Ramadan 1447</option>
                            <option>Shawwal 1447</option>
                            <option>School holidays (Aug/Dec)</option>
                            <option>Flexible / Need guidance</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="cta-notes" className="sr-only">Message</label>
                        <textarea id="cta-notes" name="notes" rows={3} placeholder="Questions? E.g., Sri Lankan meals, elderly care, quad vs triple sharing, LKR transparent pricing..." className={`${inputCls} resize-none`} />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="group relative mt-6 flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 py-4 text-sm font-extrabold text-ink-950 shadow-[0_18px_40px_-12px_rgba(201,162,39,0.75)] transition-transform duration-300 hover:scale-[1.02] active:scale-95"
                    >
                      <span className="relative z-10">Send Inquiry — Get LKR Quote</span>
                      <Send className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden />
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/55 to-transparent transition-transform duration-700 group-hover:translate-x-full" aria-hidden />
                    </button>
                    <p className="mt-4 text-center text-[11px] font-semibold text-white/45">
                      Full all-inclusive LKR invoice from our Puttalam office — 20 years trusted. No hidden USD.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
