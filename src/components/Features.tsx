import type { ComponentType } from "react";
import {
  FileCheck2,
  Hotel,
  Plane,
  BookOpenCheck,
  ShieldCheck,
  ArrowRight,
  UtensilsCrossed,
  Bus,
} from "lucide-react";
import { FEATURES } from "../lib/data";
import { SectionHeading, Stagger, StaggerItem } from "./ui";

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  FileCheck2,
  Hotel,
  Plane,
  BookOpenCheck,
  Headset: Bus,
  ShieldCheck,
  UtensilsCrossed,
  Bus,
};

export default function Features() {
  return (
    <section id="why" aria-labelledby="why-title" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="pattern-star absolute inset-0 opacity-40" aria-hidden />
      <div className="absolute -left-52 top-24 h-[420px] w-[420px] rounded-full bg-brand-200/50 blur-[120px]" aria-hidden />
      <div className="absolute -right-52 bottom-10 h-[420px] w-[420px] rounded-full bg-gold-200/50 blur-[120px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="3.3 Packages Overview"
          title={
            <>
              Standard, Premium &{" "}
              <em className="text-teal-gradient font-display italic">Customized</em> — visa, stay, transport, guidance
            </>
          }
          description="Each package clearly outlines visa processing, comfortable accommodation, reliable transport, and expert guided support. Sri Lankan meals availability is highlighted where applicable — so you know exactly what you are paying for in LKR."
        />

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon] ?? ShieldCheck;
            return (
              <StaggerItem key={f.title}>
                <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-ink-900/8 bg-white/80 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold-400/50 hover:shadow-[0_30px_60px_-24px_rgba(6,42,47,0.28)]">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-gold-300/40 to-brand-300/30 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-ink-800 to-brand-600 text-white shadow-[0_12px_24px_-10px_rgba(14,116,125,0.6)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="font-display text-sm font-semibold text-ink-900/20 transition-colors duration-500 group-hover:text-gold-500/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">
                      {f.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-900/62">{f.description}</p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Stagger className="mt-12 flex justify-center">
          <StaggerItem>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-extrabold text-white transition-all hover:bg-brand-700"
            >
              Request inquiry — Free callback
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden />
            </a>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
