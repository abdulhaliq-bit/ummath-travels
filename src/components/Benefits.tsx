import { CheckCircle2, Quote, ArrowRight } from "lucide-react";
import { IMAGES, BENEFITS, CONTACT } from "../lib/data";
import { Eyebrow, Reveal, Stagger, StaggerItem } from "./ui";

export default function Benefits() {
  return (
    <section aria-labelledby="care-title" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-brand-100/70 blur-[110px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Media side */}
          <div className="relative order-2 lg:order-1">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2.4rem] bg-gradient-to-br from-brand-200/60 via-transparent to-gold-200/70 blur-md" aria-hidden />
                <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(6,42,47,0.4)]">
                  <img
                    src={IMAGES.madinahDome}
                    alt="The Green Dome of Al-Masjid an-Nabawi in Madinah under a clear sky"
                    loading="lazy"
                    className="aspect-[4/4.6] w-full object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/65 via-transparent to-transparent" aria-hidden />

                  {/* Floating quote card */}
                  <figure className="glass absolute inset-x-5 bottom-5 rounded-3xl p-5 sm:inset-x-7 sm:bottom-7">
                    <Quote className="h-5 w-5 text-gold-600" aria-hidden />
                    <blockquote className="mt-2 font-display text-base font-medium leading-snug text-ink-900 sm:text-lg">
                      “Sri Lankan rice was ready every day in Makkah. They treated my parents like their own — I watched my father cry at the Rawdah while a coordinator simply held his bag.”
                    </blockquote>
                    <figcaption className="mt-3 text-xs font-bold uppercase tracking-wider text-ink-900/55">
                      Mohamed Rizwan · Puttalam, Premium Umrah 2025
                    </figcaption>
                  </figure>
                </div>

                {/* Badge chip */}
                <div className="animate-float-slow absolute -right-4 -top-6 glass rounded-2xl px-5 py-3.5 shadow-lg sm:-right-8">
                  <p className="font-display text-2xl font-semibold text-teal-gradient">20 yrs</p>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-900/55">
                    trusted in market
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Copy side */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <Eyebrow>3.3 Care Beyond Compare</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="care-title"
                className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink-900 text-balance sm:text-5xl"
              >
                Visa, stay, transport & guidance —
                <br />
                <em className="text-teal-gradient font-display italic">handled in LKR, from Puttalam.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-900/65 sm:text-lg">
                Standard, Premium and Customized packages all include visa processing, comfortable accommodation, reliable transport and expert guided support. Where applicable, Sri Lankan meals are included daily — clearly marked.
              </p>
            </Reveal>

            <Stagger className="mt-10 space-y-5">
              {BENEFITS.map((b) => (
                <StaggerItem key={b.title}>
                  <div className="group flex items-start gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-gold-300/60 hover:bg-gold-100/40">
                    <CheckCircle2
                      className="mt-0.5 h-6 w-6 shrink-0 text-gold-600 transition-transform duration-300 group-hover:scale-110"
                      aria-hidden
                    />
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink-900">{b.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-900/60">{b.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.2}>
              <a
                href="#contact"
                className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-ink-900 px-7 py-4 text-sm font-extrabold text-white shadow-[0_18px_40px_-14px_rgba(6,42,47,0.5)] transition-all duration-300 hover:bg-brand-700 hover:shadow-[0_18px_40px_-12px_rgba(14,116,125,0.55)]"
              >
                Visit us at {CONTACT.addressShort} or call {CONTACT.phoneLk}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
