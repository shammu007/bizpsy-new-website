"use client";

import React from "react";
import { motion } from "framer-motion";
import { HERO_DATA } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { RatingStars } from "@/components/ui/RatingStars";
import { CircularGallery, GalleryItem } from "@/components/ui/circular-gallery";

const heroGalleryItems: GalleryItem[] = [
  { image: "/hero-cards/velocity.svg", text: "" },
  { image: "/hero-cards/risk.svg", text: "" },
  { image: "/hero-cards/agents.svg", text: "" },
  { image: "/hero-cards/roi.svg", text: "" },
];

export function Hero() {
  return (
    <section id="hero" className="pt-20 pb-10 sm:pt-24 sm:pb-12 px-4 max-w-[1240px] mx-auto">
      {/* Sky Blue Inset Panel */}
      <div className="relative rounded-panel overflow-hidden bg-gradient-to-b from-[#BFE2FF] via-[#70b5f5] to-[#3E9BEA] text-white p-6 sm:p-10 lg:p-12 shadow-float flex flex-col items-center text-center">
        {/* Decorative cloud radial highlights */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />

        {/* Rating Social Proof Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 z-10"
        >
          <RatingStars
            score={HERO_DATA.ratingScore}
            text={HERO_DATA.ratingText}
            count={HERO_DATA.ratingStars}
          />
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-[900px] text-[36px] sm:text-[52px] lg:text-[64px] font-medium leading-[1.1] tracking-[-0.05em] text-white z-10 mb-5"
        >
          <span>{HERO_DATA.titleLine1}</span>
          <span className="block text-white/80 font-normal mt-1 sm:mt-2">
            {HERO_DATA.titleLine2}
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[580px] text-white/90 text-base sm:text-lg font-sans font-normal leading-relaxed tracking-[-0.02em] z-10 mb-6"
        >
          {HERO_DATA.subhead}
        </motion.p>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 z-20 mb-0 w-full sm:w-auto"
        >
          <Button
            href={HERO_DATA.ctaPrimary.href}
            variant="primary"
            size="lg"
            showArrow
            className="w-full sm:w-auto"
          >
            {HERO_DATA.ctaPrimary.label}
          </Button>
          <Button
            href={HERO_DATA.ctaSecondary.href}
            variant="translucent"
            size="lg"
            className="w-full sm:w-auto"
          >
            {HERO_DATA.ctaSecondary.label}
          </Button>
        </motion.div>

        {/* WebGL Curved Card Gallery - Positioned directly below CTAs with zero gap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full z-10 -mt-10 sm:-mt-14 lg:-mt-16"
        >
          <div className="relative mx-auto h-[480px] sm:h-[540px] md:h-[600px] w-full max-w-6xl marquee-mask">
            <CircularGallery
              items={heroGalleryItems}
              bend={3}
              borderRadius={0.06}
              scrollEase={0.05}
              autoSpeed={0.012}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
