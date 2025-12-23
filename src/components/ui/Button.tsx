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
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  const sizes: Record<ButtonSize, string> = {
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-sm",
  };

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-white text-black hover:bg-white/90 active:bg-white/85 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_12px_30px_-18px_rgba(255,255,255,0.35)]",
    secondary:
      "bg-white/10 text-white hover:bg-white/14 active:bg-white/10 border border-white/12",
    ghost: "bg-transparent text-white/80 hover:text-white",
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


