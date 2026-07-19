import { Phone, Mail, MapPin, ShieldCheck, Award, Globe2 } from "lucide-react";
import type { ComponentType } from "react";
import { FOOTER_COLS, CONTACT } from "../lib/data";
import { Logo } from "./ui";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M4 4l16 16" />
      <path d="M20 4L4 20" />
    </svg>
  );
}
const SOCIALS: { icon: ComponentType<{ className?: string }>; label: string; href: string }[] = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: YoutubeIcon, label: "YouTube", href: "#" },
  { icon: XIcon, label: "X (Twitter)", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white/70">
      <div className="pattern-star-dark absolute inset-0" aria-hidden />
      <div className="hairline absolute inset-x-0 top-0" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          {/* Brand column */}
          <div>
            <a href="#top" aria-label="Back to top — Ummath Travels & Tours">
              <Logo dark />
            </a>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
              From Puttalam to the Haramain — licensed Hajj & Umrah operator with all-inclusive LKR pricing, Sri Lankan meals, comfortable accommodation & expert guided support.
            </p>
            <div className="mt-7 space-y-3 text-sm font-semibold">
              <a href={`tel:${CONTACT.phoneLkRaw}`} className="flex items-center gap-3 transition-colors hover:text-gold-300">
                <Phone className="h-4 w-4 text-gold-400" aria-hidden /> {CONTACT.phoneLk} — Sri Lanka
              </a>
              <a href={`tel:${CONTACT.phoneSaRaw}`} className="flex items-center gap-3 transition-colors hover:text-gold-300">
                <Phone className="h-4 w-4 text-gold-400" aria-hidden /> {CONTACT.phoneSa} — Saudi Support
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 transition-colors hover:text-gold-300">
                <Mail className="h-4 w-4 text-gold-400" aria-hidden /> {CONTACT.email}
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                {CONTACT.address} · 20 years in service
              </p>
            </div>
            <div className="mt-7 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={`Ummath Travels on ${s.label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-gold-400 hover:to-gold-600 hover:text-ink-950"
                >
                  <s.icon className="h-4.5 w-4.5" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {FOOTER_COLS.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h3 className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-gold-300">
                  {col.heading}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#contact"
                        className="text-[13.5px] font-semibold text-white/60 transition-all duration-300 hover:pl-1.5 hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Accreditation strip */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-2xl border border-white/8 bg-white/4 px-6 py-5">
          {[
            { icon: ShieldCheck, label: `Licensed Operator · ${CONTACT.addressShort} · 20 yrs` },
            { icon: Award, label: "Ministry of Hajj & Umrah Lic. SL-3547 · 20 Years In Market" },
            { icon: Globe2, label: "Sri Lankan Meals · LKR Pricing · 20 yrs trusted" },
          ].map((b) => (
            <span key={b.label} className="flex items-center gap-2.5 text-xs font-extrabold tracking-wide text-white/60">
              <b.icon className="h-4.5 w-4.5 text-gold-400" aria-hidden />
              {b.label}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-7 text-xs font-semibold text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Ummath Travels & Tours. {CONTACT.address} · LKR pricing. All rights reserved.</p>
          <p className="font-display italic text-gold-300/70">
            “And proclaim Pilgrimage among men” — Qur’an 22:27
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Terms</a>
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            <a href="#" className="transition-colors hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
