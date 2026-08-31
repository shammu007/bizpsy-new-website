import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface EyebrowProps {
  children: React.ReactNode;
  theme?: "dark" | "light" | "purple" | "lime";
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
    purple: "text-[#6D28D9] bg-[#F5F3FF] border-[#DDD6FE]",
    lime: "text-[#6D28D9] bg-[#F5F3FF] border-[#DDD6FE]",
  };

  const dotStyles = {
    dark: "bg-ink",
    light: "bg-[#A78BFA]",
    purple: "bg-[#6D28D9]",
    lime: "bg-[#6D28D9]",
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
