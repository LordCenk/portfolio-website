import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "outline";
};

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors",
        variant === "primary" &&
          "bg-brand-blue text-white hover:bg-blue-600",
        variant === "outline" &&
          "border border-border text-foreground hover:border-brand-purple hover:text-brand-purple",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
