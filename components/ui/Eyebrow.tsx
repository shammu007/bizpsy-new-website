import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface EyebrowProps {
  children: React.ReactNode;
  theme?: "dark" | "light" | "lime";
  className?: string;
}

export function Eyebrow({
  children,
  theme = "dark",
  className,
}: EyebrowProps) {
  const themeStyles = {
    dark: "text-ink bg-surface border-card-border",
    light: "text-white bg-white/10 border-white/20",
    lime: "text-ink bg-accent border-accent",
  };

  const dotStyles = {
    dark: "bg-ink",
    light: "bg-accent",
    lime: "bg-ink",
  };

  return (
    <div
      className={twMerge(
        clsx(
          "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 border font-mono text-[12px] font-medium uppercase tracking-[0.12em] select-none",
          themeStyles[theme],
          className
        )
      )}
    >
      <span className={clsx("h-1.5 w-1.5 rounded-[2px]", dotStyles[theme])} />
      <span>{children}</span>
    </div>
  );
}
