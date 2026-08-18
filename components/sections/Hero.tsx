"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
    <section id="hero" className="pt-20 pb-10 sm:pt-24 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-[1240px] xl:max-w-[1440px] 2xl:max-w-[1620px] 3xl:max-w-[1760px] mx-auto w-full">
      {/* Sky Blue Inset Panel with Photorealistic Sky Background */}
      <div className="relative rounded-panel overflow-hidden bg-[#2495F3] text-white p-6 sm:p-10 lg:p-12 xl:p-14 shadow-float flex flex-col items-center text-center">
        {/* Photorealistic Sky and Cloud Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero-sky-bg.jpg"
            alt="Sky and cloud background"
            fill
            className="object-cover object-bottom opacity-95"
            priority
          />
        </div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-[900px] xl:max-w-[1040px] 2xl:max-w-[1140px] text-[36px] sm:text-[52px] lg:text-[64px] xl:text-[72px] font-medium leading-[1.1] tracking-[-0.05em] text-white z-10 mb-5 pt-4 sm:pt-6"
        >
          <span>{HERO_DATA.titleLine1}</span>
          <span className="block text-white/90 font-normal mt-1 sm:mt-2">
            {HERO_DATA.titleLine2}
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[580px] xl:max-w-[660px] text-white/95 text-base sm:text-lg xl:text-xl font-sans font-normal leading-relaxed tracking-[-0.02em] z-10 mb-6 drop-shadow-sm"
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

        {/* WebGL Curved Card Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full z-10 -mt-10 sm:-mt-14 lg:-mt-16"
        >
          <div className="relative mx-auto h-[440px] sm:h-[500px] md:h-[560px] lg:h-[600px] xl:h-[640px] w-full max-w-full marquee-mask">
            <CircularGallery
              items={heroGalleryItems}
              bend={3}
              borderRadius={0.06}
              scrollEase={0.05}
              autoSpeed={0.012}
            />
          </div>
        </motion.div>

        {/* Rating Social Proof Badge - Positioned BELOW the cards matching reference screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="z-20 mt-1 sm:mt-2"
        >
          <RatingStars
            score={HERO_DATA.ratingScore}
            text={HERO_DATA.ratingText}
            count={HERO_DATA.ratingStars}
          />
        </motion.div>
      </div>
    </section>
  );
}
