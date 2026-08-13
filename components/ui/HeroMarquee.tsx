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

const CARD_STYLES = [
  {
    id: "card-1",
    rotateZ: -3.5,
    rotateY: 6,
    scale: 0.98,
    zIndex: 10,
    floatDuration: 4.2,
    floatDelay: 0,
  },
  {
    id: "card-2",
    rotateZ: 3.5,
    rotateY: -6,
    scale: 1.02,
    zIndex: 20,
    floatDuration: 4.8,
    floatDelay: 0.7,
  },
  {
    id: "card-3",
    rotateZ: -2.5,
    rotateY: 8,
    scale: 0.95,
    zIndex: 10,
    floatDuration: 3.8,
    floatDelay: 1.4,
  },
  {
    id: "card-4",
    rotateZ: 4.0,
    rotateY: -5,
    scale: 1.0,
    zIndex: 20,
    floatDuration: 5.0,
    floatDelay: 2.1,
  },
];

function CardWrapper({
  children,
  styleIndex,
  shouldReduceMotion,
}: {
  children: React.ReactNode;
  styleIndex: number;
  shouldReduceMotion: boolean;
}) {
  const config = CARD_STYLES[styleIndex % CARD_STYLES.length];

  return (
    <div
      style={{
        zIndex: config.zIndex,
      }}
      className="shrink-0 -mx-2 sm:-mx-4 transition-transform duration-500 hover:scale-105 hover:z-30 hover:rotate-0 transform-gpu will-change-transform"
    >
      {/* 3D Tilt Layer */}
      <div
        className="transition-transform duration-500 transform-gpu"
        style={{
          transform: `rotateZ(${config.rotateZ}deg) rotateY(${config.rotateY}deg) scale(${config.scale})`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Independent Floating Vertical Bob */}
        <motion.div
          animate={shouldReduceMotion ? false : { y: [-8, 8, -8] }}
          transition={{
            duration: config.floatDuration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: config.floatDelay,
          }}
          className="shadow-[0_20px_40px_rgba(0,0,0,0.18)] rounded-card transform-gpu will-change-transform"
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

  return (
    <div
      className="relative w-full overflow-hidden select-none py-6 marquee-mask"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Track moving translateX 0% to -50% */}
      <motion.div
        className="flex shrink-0 items-center transform-gpu will-change-transform"
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
        {/* Set 1 */}
        <div className="flex shrink-0 items-center pr-6">
          {cardList.map((card, idx) => (
            <CardWrapper
              key={`set1-${idx}`}
              styleIndex={idx}
              shouldReduceMotion={shouldReduceMotion}
            >
              {card}
            </CardWrapper>
          ))}
        </div>

        {/* Set 2 (Identical Duplicate for Seamless -50% Loop) */}
        <div className="flex shrink-0 items-center pr-6">
          {cardList.map((card, idx) => (
            <CardWrapper
              key={`set2-${idx}`}
              styleIndex={idx}
              shouldReduceMotion={shouldReduceMotion}
            >
              {card}
            </CardWrapper>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
