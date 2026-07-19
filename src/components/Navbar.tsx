import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight, Sparkles } from "lucide-react";
import { NAV_LINKS, CONTACT } from "../lib/data";
import { Logo, EASE } from "./ui";
import { cn } from "../utils/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Announcement bar */}
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-50 overflow-hidden bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-ink-950 transition-all duration-500",
          scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        )}
      >
        <p className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-[11px] font-bold tracking-wide sm:text-xs">
          <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span className="truncate">
            🇱🇰 {CONTACT.addressShort} · Hajj 1447H quota confirmed · Packages in LKR · Sri Lankan meals available
          </span>
          <a href="#contact" className="hidden items-center gap-0.5 underline underline-offset-2 hover:opacity-80 sm:inline-flex">
            Contact for inquiry <ArrowUpRight className="h-3 w-3" aria-hidden />
          </a>
        </p>
      </div>

      {/* Main nav */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.35, ease: EASE }}
        className={cn(
          "fixed inset-x-0 z-50 transition-all duration-500",
          scrolled ? "top-3 px-3 sm:px-5" : "top-9 px-4 sm:px-6"
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 transition-all duration-500",
            scrolled
              ? "glass rounded-2xl px-4 py-2.5 shadow-[0_18px_50px_-20px_rgba(4,24,27,0.35)] sm:px-6"
              : "rounded-2xl px-2 py-3"
          )}
        >
          <a href="#top" aria-label="Ummath Travels & Tours — home">
            <Logo dark={!scrolled} />
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "group relative rounded-full px-4 py-2 text-[13.5px] font-semibold tracking-wide transition-colors",
                    scrolled ? "text-ink-800 hover:text-brand-600" : "text-white/85 hover:text-white"
                  )}
                >
                  {link.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-400 to-gold-600 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${CONTACT.phoneLkRaw}`}
              className={cn(
                "hidden items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-bold transition-all md:inline-flex",
                scrolled
                  ? "bg-ink-900/5 text-ink-900 hover:bg-ink-900/10"
                  : "glass-dark text-white hover:bg-white/10"
              )}
            >
              <Phone className="h-3.5 w-3.5" aria-hidden />
              {CONTACT.phoneLk}
            </a>
            <a
              href="#contact"
              className="group relative hidden overflow-hidden rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-5 py-2.5 text-[13px] font-extrabold text-ink-950 shadow-[0_10px_30px_-8px_rgba(201,162,39,0.7)] transition-transform duration-300 hover:scale-[1.04] active:scale-95 sm:inline-flex"
            >
              <span className="relative z-10">Get LKR Quote</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
                scrolled ? "bg-ink-900/5 text-ink-900" : "glass-dark text-white"
              )}
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink-950/97 backdrop-blur-xl pattern-star-dark lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <Logo dark />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center px-8">
              <ul className="space-y-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: EASE }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between border-b border-white/8 py-4 font-display text-3xl text-white/90 transition-colors hover:text-gold-300"
                    >
                      {link.label}
                      <ArrowUpRight className="h-6 w-6 text-gold-400 opacity-0 transition-all group-hover:opacity-100" aria-hidden />
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 space-y-3">
                <a href={`tel:${CONTACT.phoneLkRaw}`} className="flex items-center gap-2 text-sm font-bold text-gold-300">
                  <Phone className="h-4 w-4" /> {CONTACT.phoneLk} (LK)
                </a>
                <a href={`tel:${CONTACT.phoneSaRaw}`} className="flex items-center gap-2 text-sm font-bold text-white/70">
                  <Phone className="h-4 w-4" /> {CONTACT.phoneSa} (KSA)
                </a>
                <p className="text-xs font-semibold text-white/50">20 years · {CONTACT.email} · {CONTACT.addressShort}</p>
              </div>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-4 text-sm font-extrabold text-ink-950"
              >
                Get LKR Quote — Free Callback
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
