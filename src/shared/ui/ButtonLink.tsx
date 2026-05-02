import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "ghost" | "accent";
  showArrow?: boolean;
};

export function ButtonLink({ children, variant = "primary", showArrow = false, className = "", ...props }: ButtonLinkProps) {
  return (
    <a className={`btn btn-${variant} ${className}`.trim()} {...props}>
      {children}
      {showArrow ? <ArrowRight aria-hidden="true" size={14} strokeWidth={1.8} /> : null}
    </a>
  );
}
