import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useMotionValue, animate, type Variants } from "framer-motion";
import { cn } from "../utils/cn";

/* ---------------------------------- Ease ---------------------------------- */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ------------------------------ Reveal (scroll) ---------------------------- */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------ Stagger group ------------------------------ */
const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 34, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE },
  },
};

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={staggerChild}>
      {children}
    </motion.div>
  );
}

/* --------------------------------- Eyebrow --------------------------------- */
export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.22em]",
        dark ? "text-gold-300" : "text-brand-600"
      )}
    >
      <span className={cn("h-px w-8", dark ? "bg-gold-400/70" : "bg-gold-500/70")} />
      {children}
      <span className={cn("h-px w-8", dark ? "bg-gold-400/70" : "bg-gold-500/70")} />
    </span>
  );
}

/* ----------------------------- Section heading ----------------------------- */
export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  dark?: boolean;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <Reveal>
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-5 font-display text-4xl leading-[1.08] font-medium tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]",
            dark ? "text-white" : "text-ink-900"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              dark ? "text-white/70" : "text-ink-900/65",
              align === "center" && "mx-auto max-w-2xl"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* --------------------------------- Counter --------------------------------- */
export function Counter({
  to,
  decimals = 0,
  suffix = "",
  className,
}: {
  to: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 2.4, ease: [0.16, 1, 0.3, 1] });
    const unsub = mv.on("change", (v) =>
      setDisplay(
        v.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      )
    );
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to, decimals, mv]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

/* ----------------------------------- Logo ---------------------------------- */
/* Uses the exact client-provided logo file without any alteration */
import logoSrc from "../assets/ummath-logo.png";

export function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      {/* The image itself is not altered - exact client logo as provided */}
      <img
        src={logoSrc}
        alt="Ummath Travels & Tours"
        width={180}
        height={64}
        className={cn(
          "h-[52px] w-auto object-contain",
          dark ? "rounded-[12px] bg-white px-3 py-1.5 shadow-[0_2px_14px_rgba(0,0,0,0.18)]" : ""
        )}
        loading="eager"
        decoding="async"
        style={{ imageRendering: "auto" }}
      />
    </span>
  );
}
