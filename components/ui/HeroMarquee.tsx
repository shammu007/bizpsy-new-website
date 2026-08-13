"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HERO_DATA } from "@/lib/data";
import {
  DashboardCard,
  TransactionCard,
  BarChartCard,
  GrowthCard,
} from "@/components/ui/MockupCards";

interface FanCardWrapperProps {
  children: React.ReactNode;
  index: number;
  totalCards: number;
  shouldReduceMotion: boolean;
}

function FanCardWrapper({
  children,
  index,
  totalCards,
  shouldReduceMotion,
}: FanCardWrapperProps) {
  // Compute normalized position t in range [-1, 1] across the set
  const t = totalCards > 1 ? (index / (totalCards - 1)) * 2 - 1 : 0;

  // Progressive Monotonic Fan/Arc Formulas:
  // 1. Monotonic linear rotation ramp from -7deg to +7deg
  const rotateZ = t * 7;

  // 2. Parabolic vertical arc (center elevated at ~-8px, edges dropped at ~+28px)
  const baseTranslateY = t * t * 36 - 8;

  // 3. Depth scaling: center cards at 1.0, edge cards at 0.92
  const scale = 1 - t * t * 0.08;

  // 4. Staggered zIndex: center cards on top
  const zIndex = Math.round(30 - Math.abs(t) * 15);

  // Per-card float duration & delay
  const floatDuration = 4.0 + (index % 3) * 0.8;
  const floatDelay = index * 0.5;

  return (
    <div
      style={{ zIndex }}
      className="shrink-0 -mx-4 sm:-mx-6 transition-transform duration-300 transform-gpu will-change-transform group/card hover:z-50"
    >
      {/* Rigid 3D Arc Transform Layer */}
      <div
        className="transform-gpu will-change-transform transition-transform duration-300 group-hover/card:scale-105 group-hover/card:rotate-0"
        style={{
          transform: `translateY(${baseTranslateY}px) rotateZ(${rotateZ}deg) scale(${scale})`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Independent Vertical Float Oscillation (±7px) */}
        <motion.div
          animate={shouldReduceMotion ? false : { y: [-7, 7, -7] }}
          transition={{
            duration: floatDuration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: floatDelay,
          }}
          className="shadow-[0_24px_48px_rgba(0,0,0,0.14)] rounded-card transform-gpu will-change-transform"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

export function HeroMarquee() {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion() ?? false;

  const cardList = [
    <DashboardCard
      key="card-1"
      title={HERO_DATA.uiCards[0].title}
      value={HERO_DATA.uiCards[0].value}
      change={HERO_DATA.uiCards[0].change}
      tag={HERO_DATA.uiCards[0].tag}
    />,
    <TransactionCard
      key="card-2"
      title={HERO_DATA.uiCards[1].title}
      value={HERO_DATA.uiCards[1].value}
      status={HERO_DATA.uiCards[1].tag}
    />,
    <BarChartCard
      key="card-3"
      title={HERO_DATA.uiCards[2].title}
      value={HERO_DATA.uiCards[2].value}
    />,
    <GrowthCard
      key="card-4"
      title={HERO_DATA.uiCards[3].title}
      value={HERO_DATA.uiCards[3].value}
    />,
  ];

  const totalCards = cardList.length;

  return (
    <div
      className="relative w-full overflow-hidden select-none py-10 marquee-mask"
      style={{ perspective: "1400px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Rigid Moving Flex Track: translateX 0% -> -50% */}
      <motion.div
        className="flex shrink-0 items-center transform-gpu will-change-transform px-4"
        initial={{ x: "0%" }}
        animate={
          shouldReduceMotion || isHovered
            ? { x: "0%" }
            : { x: ["0%", "-50%"] }
        }
        transition={{
          duration: 35,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {/* Set 1: Progressive Fan Arc */}
        <div className="flex shrink-0 items-center pr-8">
          {cardList.map((card, idx) => (
            <FanCardWrapper
              key={`set1-${idx}`}
              index={idx}
              totalCards={totalCards}
              shouldReduceMotion={shouldReduceMotion}
            >
              {card}
            </FanCardWrapper>
          ))}
        </div>

        {/* Set 2: Identical Duplicated Fan Arc for Seamless Loop */}
        <div className="flex shrink-0 items-center pr-8">
          {cardList.map((card, idx) => (
            <FanCardWrapper
              key={`set2-${idx}`}
              index={idx}
              totalCards={totalCards}
              shouldReduceMotion={shouldReduceMotion}
            >
              {card}
            </FanCardWrapper>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
