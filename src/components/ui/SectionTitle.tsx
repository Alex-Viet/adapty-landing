import type { PropsWithChildren } from "react";

type SectionTitleProps = PropsWithChildren<{
  eyebrow?: string;
  title: string;
  description?: string;
}>;

export function SectionTitle({
  eyebrow,
  title,
  description,
  children,
}: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <div className="text-xs font-semibold tracking-[0.24em] text-white/60">
          {eyebrow}
        </div>
      ) : null}
      <div className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-4xl">
        {title}
      </div>
      {description ? (
        <div className="mt-4 text-base leading-relaxed text-white/70">
          {description}
        </div>
      ) : null}
      {children}
    </div>
  );
}


