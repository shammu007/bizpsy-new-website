"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface CountUpProps {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function CountUp({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.5,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Custom snappy ease-out
      onUpdate: (value) => {
        setDisplayValue(value.toFixed(decimals));
      },
    });

    return () => controls.stop();
  }, [isInView, target, decimals, duration]);

  return (
    <span ref={ref} className={twMerge(clsx("font-medium tracking-tight", className))}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
