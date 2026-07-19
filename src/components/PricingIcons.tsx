import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function CheckArrow({ className }: { className?: string }) {
  return <Check className={className} strokeWidth={3} aria-hidden />;
}

export type { LucideIcon };
