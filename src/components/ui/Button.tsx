import type { PropsWithChildren, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

type ButtonProps = PropsWithChildren<{
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  rightIcon?: ReactNode;
}>;

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  rightIcon,
  children,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(103,32,255,0.35)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--a-bg)]";

  const sizes: Record<ButtonSize, string> = {
    md: "h-12 px-5 text-[14px]",
    lg: "h-12 px-6 text-[14px]",
  };

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[var(--a-primary)] text-white shadow-[0_10px_26px_-18px_rgba(103,32,255,0.55)] hover:bg-[var(--a-primary-hover)] active:bg-[var(--a-primary-hover)]",
    secondary:
      "bg-transparent text-[var(--a-primary)] hover:text-[var(--a-primary-hover)] active:text-[var(--a-primary-hover)]",
    ghost: "bg-transparent text-[var(--a-text)]/70 hover:text-[var(--a-text)]",
  };

  const content = (
    <>
      <span>{children}</span>
      {rightIcon ?? (variant === "primary" ? <ArrowRight size={16} /> : null)}
    </>
  );

  const className = `${base} ${sizes[size]} ${variants[variant]}`;

  if (href) {
    return (
      <a className={className} href={href}>
        {content}
      </a>
    );
  }

  return (
    <button className={className} type="button" onClick={onClick}>
      {content}
    </button>
  );
}


