import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as Icons from "lucide-react";

export interface IconChipProps {
  iconName: string;
  theme?: "accent" | "dark" | "surface";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function IconChip({
  iconName,
  theme = "accent",
  size = "md",
  className,
}: IconChipProps) {
  // Fallback to Sparkles if icon is not found
  const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[iconName] || Icons.Sparkles;

  const sizeClasses = {
    sm: "h-9 w-9 rounded-[10px] p-2 text-sm",
    md: "h-11 w-11 rounded-[12px] p-2.5 text-base",
    lg: "h-14 w-14 rounded-[14px] p-3.5 text-xl",
  };

  const themeClasses = {
    accent: "bg-accent text-ink shadow-card",
    dark: "bg-ink text-accent shadow-card",
    surface: "bg-surface text-ink border border-ink/10",
  };

  return (
    <div
      className={twMerge(
        clsx(
          "inline-flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105",
          sizeClasses[size],
          themeClasses[theme],
          className
        )
      )}
    >
      <IconComponent className="h-full w-full stroke-[2]" />
    </div>
  );
}
