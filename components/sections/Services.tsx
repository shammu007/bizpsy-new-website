"use client";

import React, { useState } from "react";
import { SERVICES_DATA } from "@/lib/data";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-[1380px] mx-auto w-full">
      {/* Header Block */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <Eyebrow theme="purple" className="mb-4">
          {SERVICES_DATA.eyebrow}
        </Eyebrow>

        <RevealHeading
          text={SERVICES_DATA.heading}
          as="h2"
          size="h2"
          theme="light"
          className="max-w-[840px] justify-center text-center mb-4"
        />

        <p className="max-w-[580px] text-muted text-base sm:text-lg font-sans font-normal leading-relaxed tracking-[-0.02em] mb-8">
          {SERVICES_DATA.subhead}
        </p>

        <Button href="/contact" variant="purple" size="md" showArrow>
          {SERVICES_DATA.ctaLabel}
        </Button>
      </div>

      {/* 3-Card Grid Container - Light & Cohesive Background matching website */}
      <div
        onMouseLeave={() => setHoveredIndex(null)}
        className="bg-white rounded-[32px] p-6 sm:p-10 border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {SERVICES_DATA.items.map((service, index) => {
            // Layer 1 is highlighted by default, or whichever card is hovered by the user
            const isHighlighted = hoveredIndex !== null ? hoveredIndex === index : index === 0;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-[24px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 select-none cursor-default border-2 ${
                  isHighlighted
                    ? "bg-gradient-to-br from-[#FAF5FF] via-[#F8F7FF] to-[#EDE9FE] text-[#111827] border-[#7C3AED] shadow-[0_14px_36px_rgba(124,58,237,0.14)] ring-4 ring-[#7C3AED]/15 scale-[1.01]"
                    : "bg-[#FAFAFD] text-[#111827] border-[#DDD6FE] hover:border-[#7C3AED] hover:bg-white shadow-xs hover:shadow-md"
                }`}
              >
                {/* Top Section: Eyebrow, Title & Subtitle */}
                <div>
                  {/* Eyebrow / Layer Tag */}
                  <div
                    className={`font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-bold mb-4 transition-colors ${
                      isHighlighted ? "text-[#6D28D9]" : "text-[#7C3AED]"
                    }`}
                  >
                    {service.layer}
                  </div>

                  {/* Big Bold Title */}
                  <h3 className="text-[26px] sm:text-[28px] font-bold tracking-tight leading-tight text-[#111827] mb-2 font-sans">
                    {service.title}
                  </h3>

                  {/* Subtitle / Description */}
                  <p className="text-sm sm:text-[15px] font-sans font-normal leading-relaxed text-[#4B5563] mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Section: Capsule Pill Tags Grid */}
                {service.tags && service.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center px-3.5 py-2 rounded-lg font-mono text-[11px] sm:text-[11.5px] font-bold tracking-wider uppercase transition-all duration-200 select-none ${
                          isHighlighted
                            ? "bg-white/95 text-[#5B21B6] border border-[#DDD6FE] shadow-xs hover:bg-[#6D28D9] hover:text-white hover:border-[#6D28D9]"
                            : "bg-white text-gray-700 border border-[#DDD6FE]/80 hover:border-[#7C3AED] hover:bg-[#F5F3FF] hover:text-[#6D28D9]"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
