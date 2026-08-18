"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, Lightbulb, BarChart2 } from "lucide-react";
import { ABOUT_DATA } from "@/lib/data";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealHeading, RevealToken } from "@/components/ui/RevealHeading";

const aboutHeadingTokens: RevealToken[] = [
  "A",
  "global",
  "consulting",
  "partner",
  "dedicated",
  "to",
  "building",
  {
    text: "smarter",
    prefixElement: (
      <span className="h-7 w-7 sm:h-9 sm:w-9 rounded-full bg-[#208DF9] text-white flex items-center justify-center shadow-sm -translate-y-0.5 mr-1">
        <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.5]" />
      </span>
    ),
  },
  "and",
  {
    text: "more",
    prefixElement: (
      <span className="h-7 w-7 sm:h-9 sm:w-9 rounded-full bg-[#D6FD70] text-ink flex items-center justify-center shadow-sm -translate-y-0.5 mr-1">
        <Lightbulb className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-ink stroke-ink" />
      </span>
    ),
  },
  "adaptive",
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 max-w-[1240px] mx-auto text-ink font-sans">
      {/* Header Block matching Services header layout & typography scale */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Eyebrow theme="dark" className="mb-4">
            {ABOUT_DATA.eyebrow}
          </Eyebrow>
        </motion.div>

        {/* RevealHeading with exact same scroll reveal effect as Services section */}
        <RevealHeading
          tokens={aboutHeadingTokens}
          as="h2"
          size="h2"
          theme="light"
          className="max-w-[840px] justify-center text-center mx-auto"
        />
      </div>

      {/* Bento Grid Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        {/* Card 1: Left Image Card with White Overlay (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-5 relative rounded-panel overflow-hidden min-h-[420px] sm:min-h-[460px] p-6 flex flex-col justify-between shadow-card border border-ink/5 group"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={ABOUT_DATA.card1.image}
              alt="Consultant portrait"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Gradient Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
          </div>

          {/* Top Header inside Card 1 */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="font-sans font-extrabold text-2xl tracking-tighter text-white drop-shadow-sm">
              {ABOUT_DATA.card1.logo}
            </span>
            <div className="h-9 w-9 rounded-xl bg-white/95 text-ink flex items-center justify-center shadow-md backdrop-blur-md">
              <BarChart2 className="h-4 w-4 stroke-[2.5]" />
            </div>
          </div>

          {/* Bottom Floating White Overlay Card */}
          <div className="relative z-10 bg-white rounded-card p-5 sm:p-6 shadow-float border border-ink/5 mt-auto">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[ -0.04em] text-ink mb-1.5">
              {ABOUT_DATA.card1.stat}
            </p>
            <p className="text-muted text-sm sm:text-base font-normal leading-relaxed">
              {ABOUT_DATA.card1.description}
            </p>
          </div>
        </motion.div>

        {/* Card 2: Middle Light Gray Card with Avatars & Testimonial (4 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-4 rounded-panel bg-surface text-ink p-6 sm:p-8 flex flex-col justify-between min-h-[420px] sm:min-h-[460px] border border-ink/5 shadow-card"
        >
          {/* Top Stat */}
          <div>
            <span className="font-mono text-xs text-muted uppercase tracking-widest block mb-2">
              {ABOUT_DATA.card2.label}
            </span>
            <p className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.04em] text-ink">
              {ABOUT_DATA.card2.stat}
            </p>
          </div>

          {/* Bottom Avatars & Quote */}
          <div>
            {/* Overlapping Avatars Row */}
            <div className="flex items-center -space-x-2.5 mb-5">
              {ABOUT_DATA.card2.avatars.map((url, idx) => (
                <div
                  key={`avatar-${idx}`}
                  className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-full overflow-hidden border-2 border-surface shadow-sm shrink-0"
                >
                  <Image
                    src={url}
                    alt={`Team member ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Quote matching Services body typography text-muted text-sm sm:text-base */}
            <p className="text-muted text-sm sm:text-base font-normal leading-relaxed">
              {ABOUT_DATA.card2.quote}
            </p>
          </div>
        </motion.div>

        {/* Column 3: Right Stack (Card 3 Lime & Card 4 Dark) (3 Cols) */}
        <div className="md:col-span-3 flex flex-col gap-5 sm:gap-6">
          {/* Card 3: Lime Accent Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 rounded-panel bg-[#D6FD70] text-ink p-6 sm:p-7 flex flex-col justify-between min-h-[250px] sm:min-h-[270px] border border-ink/10 shadow-card"
          >
            <div>
              <span className="font-mono text-xs text-ink/70 uppercase tracking-widest block mb-1">
                {ABOUT_DATA.card3.label}
              </span>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.04em] text-ink">
                {ABOUT_DATA.card3.stat}
              </p>
            </div>

            <p className="text-ink/80 text-sm sm:text-base font-normal leading-relaxed mt-3">
              {ABOUT_DATA.card3.subtext}
            </p>
          </motion.div>

          {/* Card 4: Dark Accent Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="rounded-card bg-[#131313] text-white p-5 sm:p-6 flex items-center justify-between h-[120px] sm:h-[135px] border border-white/10 shadow-card"
          >
            <span className="font-mono text-xs text-white/60 uppercase tracking-widest">
              {ABOUT_DATA.card4.label}
            </span>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.04em] text-white">
              {ABOUT_DATA.card4.stat}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
