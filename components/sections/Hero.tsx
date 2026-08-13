"use client";

import React from "react";
import { motion } from "framer-motion";
import { HERO_DATA } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { RatingStars } from "@/components/ui/RatingStars";
import { ThreeDCardCarousel } from "@/components/ui/3d-carousel";
import { heroCards } from "@/lib/hero-cards";

export function Hero() {
  return (
    <section id="hero" className="pt-24 pb-12 sm:pt-28 sm:pb-16 px-4 max-w-[1240px] mx-auto">
      {/* Sky Blue Inset Panel */}
      <div className="relative rounded-panel overflow-hidden bg-gradient-to-b from-[#BFE2FF] via-[#70b5f5] to-[#3E9BEA] text-white p-6 sm:p-12 lg:p-16 shadow-float flex flex-col items-center text-center">
        {/* Decorative cloud radial highlights */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />

        {/* Rating Social Proof Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 z-10"
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
          className="max-w-[900px] text-[36px] sm:text-[52px] lg:text-[64px] font-medium leading-[1.1] tracking-[-0.05em] text-white z-10 mb-6"
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
          className="max-w-[580px] text-white/90 text-base sm:text-lg font-sans font-normal leading-relaxed tracking-[-0.02em] z-10 mb-8"
        >
          {HERO_DATA.subhead}
        </motion.p>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 z-10 mb-8 w-full sm:w-auto"
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

        {/* 3D Auto-Rotating Card Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full z-10"
        >
          <ThreeDCardCarousel
            cards={heroCards}
            autoRotate
            speed={7}
            className="mx-auto mt-4 w-full max-w-5xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
