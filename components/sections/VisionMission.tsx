"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

export function VisionMission() {
  return (
    <section id="vision-mission" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1380px] mx-auto w-full">
      {/* Outer Panel aligned with Hero, Services, and Why Choose Us */}
      <div className="bg-white rounded-[32px] p-6 sm:p-10 lg:p-12 border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Vision & Mission Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-6"
          >
            {/* Heading matching site's serif typography */}
            <h2 className="text-[40px] sm:text-[50px] lg:text-[58px] font-normal leading-[1.06] tracking-[-0.03em] font-serif text-[#111827] mb-6">
              Our vision<br />& mission
            </h2>

            {/* Lead statement */}
            <p className="text-[#111827] text-base sm:text-[17px] font-sans font-semibold leading-relaxed mb-4">
              We believe early-stage SaaS can win faster when the path to market is clear.
            </p>

            {/* Mission explanation */}
            <p className="text-[#4B5563] text-sm sm:text-[15px] font-sans font-normal leading-relaxed">
              Our mission is to make go-to-market clearer, simpler, and more predictable—so founders can focus on building what matters most.
            </p>
          </motion.div>

          {/* Right Column: Visual Portrait with Floating Brand Purple Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] border border-gray-100 shadow-md">
              <Image
                src="/images/vision-mission.jpg"
                alt="Bizpsy team working on go-to-market strategy"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Subtle ambient light gradient at base */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Floating Value Pill Badge with Brand Purple */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="absolute bottom-5 sm:bottom-7 left-5 sm:left-7 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-xl border border-purple-100/90 flex items-center gap-3.5 max-w-[90%] sm:max-w-md"
              >
                <div className="w-9 h-9 rounded-full bg-[#EDE9FE] text-[#6D28D9] border border-[#DDD6FE] flex items-center justify-center shrink-0 shadow-xs">
                  <Target className="w-4 h-4 stroke-[2.4]" />
                </div>
                <div>
                  <div className="text-[12px] sm:text-[13px] font-bold text-gray-950 leading-tight font-sans">
                    Clarity → Demand → Growth
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#6D28D9] font-medium leading-tight font-sans mt-0.5">
                    That&apos;s the Bizpsy way.
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
