"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HIGHLIGHT_BANNER_DATA } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function HighlightBanner() {
  return (
    <section className="py-8 sm:py-12 px-4 max-w-[1240px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[460px] sm:min-h-[520px] p-8 sm:p-12 md:p-16 flex flex-col justify-center text-white shadow-float border border-white/20 group"
      >
        {/* Photographic Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={HIGHLIGHT_BANNER_DATA.backgroundImage}
            alt="Human insight and AI landscape"
            fill
            className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Left Dark Gradient Overlay for Maximum Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent z-0" />
        </div>

        {/* Content Container (Left Aligned) */}
        <div className="relative z-10 max-w-[620px]">
          {/* Top Social Proof Row */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-sans text-xs sm:text-sm text-white/90 font-medium">
              {HIGHLIGHT_BANNER_DATA.trustedText}
            </span>
            <div className="flex items-center -space-x-2">
              {HIGHLIGHT_BANNER_DATA.avatars.map((url, idx) => (
                <div
                  key={`avatar-banner-${idx}`}
                  className="relative h-7 w-7 sm:h-8 sm:w-8 rounded-full overflow-hidden border border-white/40 shadow-sm shrink-0"
                >
                  <Image
                    src={url}
                    alt={`User ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Main Headline Title */}
          <h2 className="text-[32px] sm:text-[44px] lg:text-[54px] font-medium leading-[1.12] tracking-[-0.05em] text-white mb-5">
            {HIGHLIGHT_BANNER_DATA.heading}
          </h2>

          {/* Subhead Paragraph */}
          <p className="text-white/85 text-sm sm:text-base font-sans font-normal leading-relaxed max-w-[500px] mb-8">
            {HIGHLIGHT_BANNER_DATA.subhead}
          </p>

          {/* CTA Button */}
          <Button
            href={HIGHLIGHT_BANNER_DATA.ctaHref}
            variant="primary"
            size="lg"
            showArrow
            className="shadow-lg"
          >
            {HIGHLIGHT_BANNER_DATA.ctaLabel}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
