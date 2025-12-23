import type { PropsWithChildren } from "react";

type BadgeProps = PropsWithChildren<{
  tone?: "neutral" | "brand";
}>;

export function Badge({ tone = "neutral", children }: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide";
  const tones: Record<NonNullable<BadgeProps["tone"]>, string> = {
    neutral: "border-white/10 bg-white/5 text-white/80",
    brand:
      "border-fuchsia-300/20 bg-fuchsia-500/10 text-fuchsia-100 ring-1 ring-fuchsia-400/10",
  };

  return <div className={`${base} ${tones[tone]}`}>{children}</div>;
}


