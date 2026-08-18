"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface RevealTokenObject {
  text: string;
  prefixElement?: React.ReactNode;
  suffixElement?: React.ReactNode;
}

export type RevealToken = string | RevealTokenObject;

export interface RevealHeadingProps {
  text?: string;
  tokens?: RevealToken[];
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  theme?: "light" | "dark";
  size?: "h1" | "h2" | "h3" | "body";
  className?: string;
}

interface WordProps {
  token: RevealToken;
  index: number;
  totalWords: number;
  progress: MotionValue<number>;
  theme: "light" | "dark";
}

function WordToken({ token, index, totalWords, progress, theme }: WordProps) {
  const start = index / totalWords;
  const end = Math.min(1, (index + 1) / totalWords);

  // Light theme: gray -> #131313. Dark theme: muted white -> #FFFFFF
  const startColor = theme === "light" ? "#94A3B8" : "rgba(255, 255, 255, 0.35)";
  const endColor = theme === "light" ? "#131313" : "#FFFFFF";

  const color = useTransform(progress, [start, end], [startColor, endColor]);
  const opacity = useTransform(progress, [start, end], [0.35, 1]);

  if (typeof token === "string") {
    return (
      <motion.span
        style={{ color, opacity }}
        className="inline-block transition-colors duration-150 mr-[0.25em] last:mr-0"
      >
        {token}
      </motion.span>
    );
  }

  return (
    <motion.span
      style={{ opacity }}
      className="inline-flex items-baseline gap-1.5 mr-[0.25em] last:mr-0"
    >
      {token.prefixElement && (
        <span className="inline-flex items-center align-baseline">
          {token.prefixElement}
        </span>
      )}
      <motion.span style={{ color }} className="inline-block">
        {token.text}
      </motion.span>
      {token.suffixElement && (
        <span className="inline-flex items-center align-baseline">
          {token.suffixElement}
        </span>
      )}
    </motion.span>
  );
}

export function RevealHeading({
  text,
  tokens: customTokens,
  as: Component = "h2",
  theme = "light",
  size = "h2",
  className,
}: RevealHeadingProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "start 35%"],
  });

  const tokensList: RevealToken[] = customTokens
    ? customTokens
    : text
    ? text.split(" ")
    : [];

  const sizeClasses = {
    h1: "text-[38px] sm:text-[48px] lg:text-[60px] leading-[1.12] tracking-[-0.06em] font-medium",
    h2: "text-[30px] sm:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.06em] font-medium",
    h3: "text-[20px] sm:text-[22px] lg:text-[24px] leading-[1.3] tracking-[-0.04em] font-medium",
    body: "text-[16px] sm:text-[18px] leading-[1.5] tracking-[-0.02em] font-normal",
  };

  return (
    <Component
      ref={containerRef}
      className={twMerge(
        clsx(
          sizeClasses[size],
          theme === "light" ? "text-ink" : "text-white",
          "relative flex flex-wrap items-baseline",
          className
        )
      )}
    >
      {tokensList.map((token, index) => (
        <WordToken
          key={typeof token === "string" ? `${token}-${index}` : `token-${index}`}
          token={token}
          index={index}
          totalWords={tokensList.length}
          progress={scrollYProgress}
          theme={theme}
        />
      ))}
    </Component>
  );
}
