"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "dark" | "translucent" | "text" | "outline";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  showArrow = false,
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center font-mono uppercase tracking-[0.12em] transition-all duration-300 rounded-pill select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-4 py-2 text-[12px] h-9 gap-1.5",
    md: "px-6 py-3 text-[14px] h-11 gap-2",
    lg: "px-8 py-4 text-[14px] h-14 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-accent text-ink font-medium hover:bg-[#c9f55c] hover:scale-[1.02] shadow-card hover:shadow-float",
    dark: "bg-ink text-white font-medium hover:bg-[#252525] hover:scale-[1.02] shadow-card",
    translucent:
      "bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 hover:scale-[1.02]",
    outline:
      "bg-transparent text-ink border border-ink/20 hover:border-ink hover:bg-surface hover:scale-[1.02]",
    text: "bg-transparent text-ink hover:text-accent p-0 underline-offset-4 hover:underline",
  };

  const combinedClasses = twMerge(
    clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span className="inline-flex items-center justify-center rounded-full bg-current/15 p-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
