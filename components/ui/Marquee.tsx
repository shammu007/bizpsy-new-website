"use client";

import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // duration in seconds for 1 full loop
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  mask?: boolean;
}

export function Marquee({
  children,
  speed = 25,
  direction = "left",
  pauseOnHover = true,
  className,
  mask = true,
}: MarqueeProps) {
  const initialX = direction === "left" ? "0%" : "-50%";
  const animateX = direction === "left" ? "-50%" : "0%";

  return (
    <div
      className={twMerge(
        clsx(
          "relative overflow-hidden w-full flex select-none",
          mask && "marquee-mask",
          className
        )
      )}
    >
      <motion.div
        className="flex shrink-0 items-center gap-6 py-2"
        initial={{ x: initialX }}
        animate={{ x: animateX }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
      >
        <div className="flex shrink-0 items-center gap-6">{children}</div>
        <div className="flex shrink-0 items-center gap-6">{children}</div>
        <div className="flex shrink-0 items-center gap-6">{children}</div>
      </motion.div>
    </div>
  );
}
