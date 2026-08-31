import React from "react";

interface BrandLogoProps {
  theme?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({ theme = "light", className = "", size = "md" }: BrandLogoProps) {
  const isDark = theme === "dark";

  // Sizing definitions
  const heights = {
    sm: "h-7 sm:h-8",
    md: "h-9 sm:h-10",
    lg: "h-11 sm:h-12",
  };

  const textSizes = {
    sm: "text-[20px]",
    md: "text-[24px] sm:text-[26px]",
    lg: "text-[28px] sm:text-[32px]",
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Ribbon 'b' Vector Icon */}
      <svg
        className={`${heights[size]} w-auto aspect-[0.7/1]`}
        viewBox="0 0 70 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="stemGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>
          <linearGradient id="loopGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#5B21B6" />
          </linearGradient>
          <linearGradient id="wrapGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#C084FC" />
            <stop offset="100%" stopColor="#7E22CE" />
          </linearGradient>
        </defs>

        {/* Vertical Stem */}
        <rect x="6" y="4" width="22" height="70" rx="11" fill="url(#stemGrad)" />

        {/* Circular Outer Loop */}
        <circle cx="44" cy="56" r="24" stroke="url(#loopGrad)" strokeWidth="18" fill="none" />

        {/* Ribbon Fold Overlap */}
        <path
          d="M 6 64 C 6 78 20 86 36 84 C 54 82 66 68 64 52"
          stroke="url(#wrapGrad)"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Brand Name Typography */}
      <span
        className={`font-sans font-extrabold tracking-[-0.04em] ${
          isDark ? "text-white" : "text-[#0A0D14]"
        } ${textSizes[size]}`}
      >
        bizpsy
      </span>
    </div>
  );
}
