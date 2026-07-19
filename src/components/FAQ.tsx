import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircleQuestion } from "lucide-react";
import { FAQS, CONTACT } from "../lib/data";
import { SectionHeading, Reveal, EASE } from "./ui";
import { cn } from "../utils/cn";

function FAQItem({
  question,
  answer,
  open,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border transition-all duration-500",
        open
          ? "border-gold-400/60 bg-white shadow-[0_24px_50px_-24px_rgba(6,42,47,0.25)]"
          : "border-ink-900/8 bg-white/70 hover:border-brand-400/50"
      )}
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span
            className={cn(
              "text-[15px] font-extrabold transition-colors duration-300 sm:text-base",
              open ? "text-brand-700" : "text-ink-900"
            )}
          >
            {question}
          </span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
              open ? "bg-gradient-to-br from-gold-400 to-gold-600 text-ink-950" : "bg-ink-900/6 text-ink-900"
            )}
          >
            <Plus className="h-4 w-4" aria-hidden />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-ink-900/65">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="pattern-star absolute inset-0 opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Questions, Answered — In LKR"
              title={
                <>
                  Everything you’re{" "}
                  <em className="text-teal-gradient font-display italic">wondering about</em>
                </>
              }
              description={`Can't find your answer? Call us in Puttalam on ${CONTACT.phoneLk} or ${CONTACT.phoneSa}. 20 years serving pilgrims. Replies in Sinhala, Tamil, English & Arabic — within minutes.`}
            />
            <Reveal delay={0.2}>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-ink-900/10 bg-white px-5 py-4 transition-all duration-300 hover:border-gold-400/60 hover:shadow-[0_18px_40px_-20px_rgba(6,42,47,0.3)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-ink-700 text-white">
                  <MessageCircleQuestion className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-extrabold text-ink-900">Ask us anything — Free callback — 20 yrs</span>
                  <span className="block text-xs font-semibold text-ink-900/55">
                    {CONTACT.phoneLk} · {CONTACT.phoneSa} · {CONTACT.email}
                  </span>
                </span>
              </a>
            </Reveal>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((f, i) => (
              <Reveal key={f.question} delay={i * 0.06} y={22}>
                <FAQItem
                  question={f.question}
                  answer={f.answer}
                  index={i}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
