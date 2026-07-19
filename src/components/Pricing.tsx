import { CheckArrow } from "./PricingIcons";
import { CONTACT, TIERS } from "../lib/data";
import { SectionHeading, Stagger, StaggerItem } from "./ui";
import { cn } from "../utils/cn";
import { Crown, UtensilsCrossed, Phone, Mail, MapPin } from "lucide-react";

function formatLKR(n: number) {
  return new Intl.NumberFormat("en-LK", { maximumFractionDigits: 0 }).format(n);
}

export default function Pricing() {
  return (
    <section
      id="packages"
      aria-labelledby="packages-title"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="absolute -right-48 top-32 h-[440px] w-[440px] rounded-full bg-gold-100/80 blur-[120px]" aria-hidden />
      <div className="absolute -left-48 bottom-24 h-[440px] w-[440px] rounded-full bg-brand-100/70 blur-[120px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Packages — 3.3 Packages Section"
          title={
            <>
              Standard, Premium &{" "}
              <em className="text-teal-gradient font-display italic">Customized</em> — all in LKR
            </>
          }
          description="Every package clearly outlines visa processing, comfortable accommodation, reliable transport & expert guided support. Sri Lankan meals availability is highlighted where applicable. The price you see in LKR is the price you pay — no hidden dollar conversions."
        />

        {/* Sri Lankan meals highlight banner */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-gold-300/60 bg-gold-100/70 px-5 py-4 text-center shadow-[0_10px_30px_-20px_rgba(201,162,39,0.5)]">
          <span className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-gold-300">
            <UtensilsCrossed className="h-3.5 w-3.5" aria-hidden /> Sri Lankan Meals
          </span>
          <p className="text-[13px] font-bold text-ink-900/75">
            Fresh SL rice & curry daily in Makkah & Madinah — included in Premium & Custom, optional add-on in Standard.
          </p>
        </div>

        <Stagger className="mt-10 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-5">
          {TIERS.map((tier) => (
            <StaggerItem key={tier.name} className="h-full">
              <article
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-[2rem] transition-all duration-500",
                  tier.popular
                    ? "border-2 border-gold-400 bg-ink-950 shadow-[0_40px_80px_-28px_rgba(6,42,47,0.55)] lg:-translate-y-4 lg:scale-[1.02]"
                    : "border border-ink-900/10 bg-cream hover:-translate-y-2 hover:border-gold-400/60 hover:shadow-[0_32px_64px_-28px_rgba(6,42,47,0.35)]"
                )}
              >
                {tier.popular && (
                  <>
                    <div className="pattern-star-dark absolute inset-0" aria-hidden />
                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-500/25 blur-3xl" aria-hidden />
                    <div className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-ink-950">
                      <Crown className="h-3.5 w-3.5" aria-hidden />
                      {tier.arabic} · {tier.badge}
                    </div>
                  </>
                )}

                <div className="relative flex flex-1 flex-col p-7 sm:p-8">
                  {!tier.popular && (
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-gold-600">
                        {tier.arabic}
                      </span>
                      <span className="rounded-full bg-gold-500/15 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wide text-gold-700">
                        {tier.badge}
                      </span>
                    </div>
                  )}
                  <h3
                    className={cn(
                      "mt-3 font-display text-2xl font-semibold",
                      tier.popular ? "text-white" : "text-ink-900"
                    )}
                  >
                    {tier.name}
                  </h3>
                  <p className={cn("mt-1 text-xs font-semibold", tier.popular ? "text-gold-300" : "text-brand-700")}>
                    {tier.note}
                  </p>

                  <div className="mt-6">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={cn(
                          "text-sm font-bold",
                          tier.popular ? "text-white/60" : "text-ink-900/50"
                        )}
                      >
                        from
                      </span>
                      <span
                        className={cn(
                          "font-display text-4xl font-semibold tracking-tight sm:text-[2.6rem]",
                          tier.popular ? "text-gold-gradient" : "text-ink-900"
                        )}
                      >
                        LKR {formatLKR(tier.priceLkr)}
                      </span>
                    </div>
                    <span className={cn("mt-1 block text-xs font-semibold", tier.popular ? "text-white/55" : "text-ink-900/50")}>
                      {tier.unit} · all-inclusive LKR · no hidden fees
                    </span>
                  </div>
                  <p className={cn("mt-3 text-[13px] leading-relaxed", tier.popular ? "text-white/65" : "text-ink-900/60")}>
                    {tier.description}
                  </p>

                  <ul className="mt-7 flex-1 space-y-3">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className={cn(
                          "flex items-start gap-2.5 text-[13px] font-semibold",
                          tier.popular ? "text-white/85" : "text-ink-900/75"
                        )}
                      >
                        <CheckArrow
                          className={cn(
                            "mt-0.5 h-4 w-4 shrink-0",
                            tier.popular ? "text-gold-400" : "text-brand-600"
                          ) as never}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={cn(
                      "mt-8 inline-flex items-center justify-center rounded-full py-3.5 text-sm font-extrabold transition-all duration-300 active:scale-95",
                      tier.popular
                        ? "bg-gradient-to-r from-gold-500 to-gold-400 text-ink-950 shadow-[0_16px_36px_-12px_rgba(201,162,39,0.8)] hover:scale-[1.03] animate-pulse-ring"
                        : "border-2 border-ink-900/12 text-ink-900 hover:border-brand-600 hover:bg-brand-600 hover:text-white"
                    )}
                  >
                    {tier.cta}
                  </a>
                  <p className={cn("mt-3 text-center text-[11px] font-semibold", tier.popular ? "text-white/45" : "text-ink-900/50")}>
                    Incl. visa, accommodation, transport & guided support
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="mt-12">
          <StaggerItem>
            <div className="rounded-[1.75rem] border border-ink-900/8 bg-cream p-6 sm:p-7">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink-900">Need a fully customized family package? — 20 years in market</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-900/60">
                    Tell us your hotel preference (4★ to Kaaba-view 5★), meal preference (Sri Lankan rice & curry daily guaranteed), room sharing, and departure month. We will issue a single all-inclusive LKR invoice from Puttalam — transparent pricing.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={`tel:${CONTACT.phoneLkRaw}`} className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-ink-800">
                    <Phone className="h-4 w-4" aria-hidden /> {CONTACT.phoneLk}
                  </a>
                  <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 bg-white px-5 py-3 text-sm font-extrabold text-ink-900">
                    <Mail className="h-4 w-4" aria-hidden /> {CONTACT.email}
                  </a>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-4 text-xs font-bold text-ink-900/55">
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-brand-600" /> {CONTACT.address}</span>
                <span className="inline-flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-gold-600" /> {CONTACT.email}</span>
              </div>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
