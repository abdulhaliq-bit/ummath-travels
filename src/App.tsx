import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { CONTACT } from "./lib/data";
import { Phone, Mail } from "lucide-react";

function StickyContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-950/95 px-3 py-3 backdrop-blur-xl supports-[backdrop-filter]:bg-ink-950/80 sm:px-5 lg:hidden">
      <div className="flex items-center gap-2">
        <a
          href={`tel:${CONTACT.phoneLkRaw}`}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-3 py-3 text-[13px] font-extrabold text-ink-950"
        >
          <Phone className="h-4 w-4" aria-hidden /> {CONTACT.phoneLk}
        </a>
        <a
          href={`https://wa.me/${CONTACT.whatsappLk}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-white px-3 py-3 text-[13px] font-extrabold text-ink-900"
        >
          WhatsApp LK
        </a>
        <a
          href={`mailto:${CONTACT.email}`}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
          aria-label={`Email ${CONTACT.email}`}
        >
          <Mail className="h-4 w-4" aria-hidden />
        </a>
      </div>
      <p className="mt-2 text-center text-[10px] font-bold tracking-wide text-white/50">{CONTACT.address} · Sri Lankan meals available</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold-500 focus:px-5 focus:py-2.5 focus:text-sm focus:font-extrabold focus:text-ink-950"
      >
        Skip to content
      </a>

      <Navbar />
      <main id="main" className="pb-24 lg:pb-0">
        <Hero />
        <TrustBar />
        <Features />
        <Showcase />
        <Benefits />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <StickyContactBar />
    </>
  );
}
