"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Layers,
  Compass,
  Search,
  GitBranch,
  TrendingUp,
  Star,
} from "lucide-react";

export function Hero() {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
  ];

  const leftStepCards = [
    {
      icon: Layers,
      title: "ICP Clarity",
      desc: "Define the segments that fit and convert.",
    },
    {
      icon: Compass,
      title: "Positioning",
      desc: "A clear message that stands out and converts.",
    },
    {
      icon: Search,
      title: "Buyer Research",
      desc: "Deep insights into jobs, pains, and triggers.",
    },
    {
      icon: GitBranch,
      title: "Pipeline Strategy",
      desc: "From awareness to opportunity—mapped.",
    },
  ];

  const funnelData = [
    { stage: "Awareness", count: "12,450", width: "100%", bg: "bg-[#E9D5FF]" },
    { stage: "Engaged", count: "3,210", width: "80%", bg: "bg-[#D8B4FE]" },
    { stage: "Qualified", count: "980", width: "60%", bg: "bg-[#C084FC]" },
    { stage: "Opportunity", count: "210", width: "42%", bg: "bg-[#A855F7]" },
    { stage: "Won", count: "52", width: "24%", bg: "bg-[#7E22CE]" },
  ];

  // Headline lines slide-up animation variants
  const headlineParentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.15,
      },
    },
  };

  const lineSlideUpVariants = {
    hidden: { y: "115%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="hero" className="pt-20 sm:pt-28 pb-10 sm:pb-12 px-3 sm:px-6 lg:px-8 max-w-[1380px] mx-auto w-full">
      {/* Outer subtle frame matching the reference */}
      <div className="bg-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-10 lg:p-12 border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
        {/* Main Two-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Text, Value Prop, CTAs, Social Proof */}
          <div className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-4">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-[#6D28D9] font-mono text-[10.5px] sm:text-[12px] uppercase tracking-[0.14em] font-bold mb-3 sm:mb-5"
            >
              THE GTM STUDIO FOR EARLY-STAGE SAAS
            </motion.div>

            {/* Main Headline - Matches About Us font-sans (Plus Jakarta Sans) with smooth slide-up animation */}
            <motion.h1
              variants={headlineParentVariants}
              initial="hidden"
              animate="visible"
              className="text-[32px] xs:text-[38px] sm:text-[50px] lg:text-[54px] xl:text-[62px] font-sans font-medium leading-[1.08] tracking-[-0.04em] text-[#111827] mb-4 sm:mb-6"
            >
              {/* Line 1: From “we built it” */}
              <div className="overflow-hidden pb-1">
                <motion.span variants={lineSlideUpVariants} className="block">
                  From “we built it”
                </motion.span>
              </div>

              {/* Line 2: to people are */}
              <div className="overflow-hidden pb-1">
                <motion.span variants={lineSlideUpVariants} className="text-[#6D28D9] block">
                  to people are
                </motion.span>
              </div>

              {/* Line 3: buying it. */}
              <div className="overflow-hidden pb-1">
                <motion.span variants={lineSlideUpVariants} className="text-[#6D28D9] block">
                  buying it.
                </motion.span>
              </div>
            </motion.h1>

            {/* Subhead with slide-up */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-[#4B5563] text-sm sm:text-base lg:text-[17px] leading-[1.6] max-w-[460px] font-sans font-normal mb-6 sm:mb-8"
            >
              Bizpsy turns unclear positioning and ad-hoc marketing into a predictable customer acquisition system for early-stage B2B SaaS.
            </motion.p>

            {/* CTA Buttons with slide-up */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-3.5 mb-8 sm:mb-10"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-[#170C36] text-white text-[12px] font-mono tracking-[0.08em] uppercase font-semibold hover:bg-[#2A175B] transition-all shadow-md group text-center"
              >
                <span>GET THE GTM AUDIT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#gtm-process"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3.5 rounded-xl bg-white border border-gray-300/80 text-[#1F2937] text-[12px] font-mono tracking-[0.08em] uppercase font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all shadow-xs text-center"
              >
                SEE OUR PROCESS
              </a>
            </motion.div>

            {/* Social Proof Avatars & Rating with slide-up */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex items-center gap-3 sm:gap-3.5 pt-1 sm:pt-2"
            >
              <div className="flex -space-x-2 shrink-0">
                {avatars.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt="Founder avatar"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-[#6D28D9] mb-0.5 sm:mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#6D28D9] stroke-[#6D28D9]" />
                  ))}
                </div>
                <p className="text-[11px] sm:text-[12px] text-gray-500 leading-tight font-sans">
                  Trusted by founders and GTM teams at 150+ early-stage SaaS companies.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Composite with Portrait & Responsive Floating UI Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 relative w-full"
          >
            {/* DESKTOP VIEW (lg and above): Floating layered composition */}
            <div className="hidden lg:flex relative rounded-[36px] bg-gradient-to-br from-[#F5F3FF] via-[#F8F7FF] to-[#EDE9FE]/70 p-6 lg:p-8 min-h-[590px] items-center justify-end overflow-hidden border border-purple-100/80 shadow-[0_12px_36px_rgba(109,40,217,0.05)]">
              
              {/* Background Portrait of Founder Woman */}
              <div className="absolute right-0 bottom-0 top-0 w-[72%] pointer-events-none z-0">
                <Image
                  src="/images/hero-portrait.jpg"
                  alt="Founder with SaaS strategy"
                  fill
                  className="object-cover object-[center_top] mix-blend-multiply opacity-95"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5F3FF] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F8F7FF] via-transparent to-transparent opacity-70" />
              </div>

              {/* Card 1: Left Vertical Steps Flow */}
              <div className="relative z-20 flex flex-col gap-2.5 w-full max-w-[235px] my-auto mr-auto pl-2">
                <div className="absolute left-[26px] top-6 bottom-6 w-0.5 border-l-2 border-dashed border-[#DDD6FE] -z-10" />

                {leftStepCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                      className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-[0_8px_20px_rgba(0,0,0,0.05)] border border-purple-100/80 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center gap-2.5 mb-1">
                        <div className="w-6 h-6 rounded-lg bg-[#F5F3FF] text-[#6D28D9] flex items-center justify-center shrink-0">
                          <Icon className="w-3.5 h-3.5 stroke-[2.2]" />
                        </div>
                        <span className="text-[13px] font-bold text-gray-900 tracking-tight font-sans">
                          {card.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-500 pl-8 leading-snug font-sans">
                        {card.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Card 2: Top Right Floating Metric Card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="absolute top-6 right-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-[0_12px_28px_rgba(0,0,0,0.08)] border border-purple-100/80 w-[185px]"
              >
                <div className="text-[11px] text-gray-400 font-medium mb-1 font-sans">
                  Pipeline Generated
                </div>
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="text-[22px] font-extrabold text-gray-900 tracking-tight font-sans">
                    $2.4M
                  </span>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full flex items-center font-sans">
                    +38%
                  </span>
                </div>
                <div className="text-[9px] text-gray-400 mb-2 font-sans">vs last 90 days</div>
                <div className="h-9 w-full">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 35" fill="none">
                    <defs>
                      <linearGradient id="purpleSpark" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 28 Q 20 22, 35 24 T 65 14 T 85 16 T 100 6 L 100 35 L 0 35 Z"
                      fill="url(#purpleSpark)"
                    />
                    <path
                      d="M0 28 Q 20 22, 35 24 T 65 14 T 85 16 T 100 6"
                      stroke="#7C3AED"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Card 3: Middle-Right Floating GTM Conversion Funnel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="absolute bottom-20 right-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-[0_14px_32px_rgba(0,0,0,0.09)] border border-purple-100/80 w-[245px]"
              >
                <div className="text-[12px] font-bold text-gray-900 mb-3 tracking-tight font-sans">
                  GTM Conversion Funnel
                </div>
                <div className="space-y-1.5 font-sans">
                  {funnelData.map((item) => (
                    <div key={item.stage} className="flex items-center justify-between gap-2 text-[11px]">
                      <div className="w-[58%] flex justify-center">
                        <div
                          className={`h-4 rounded-sm ${item.bg} transition-all`}
                          style={{ width: item.width }}
                        />
                      </div>
                      <div className="w-[42%] flex items-center justify-between text-gray-500 font-medium">
                        <span className="text-gray-600">{item.stage}</span>
                        <span className="font-semibold text-gray-900 text-[10px]">{item.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Card 4: Bottom Floating Metric Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="absolute bottom-4 right-10 z-30 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-[0_12px_28px_rgba(0,0,0,0.08)] border border-purple-100/80 flex items-center justify-between gap-4 max-w-[340px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#F5F3FF] text-[#6D28D9] flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-gray-900 leading-tight font-sans">
                      Predictable growth.
                    </div>
                    <div className="text-[10px] text-gray-400 leading-tight font-sans">
                      Built on clarity, not guesswork.
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0 pl-2">
                  <div className="text-[12px] font-bold text-emerald-600 leading-tight font-sans">
                    + 24%
                  </div>
                  <div className="text-[9px] text-gray-400 leading-tight font-sans">
                    in 90 days
                  </div>
                </div>
              </motion.div>

            </div>

            {/* MOBILE & TABLET RESPONSIVE VIEW (< lg): Unobstructed Portrait + Structured Below Cards Flow */}
            <div className="flex lg:hidden flex-col gap-4">
              {/* Portrait Hero Card (Fully visible founder image with subtle top/bottom floating metric pills) */}
              <div className="relative rounded-[24px] sm:rounded-[32px] bg-gradient-to-br from-[#F5F3FF] via-[#F8F7FF] to-[#EDE9FE]/70 h-[360px] xs:h-[400px] sm:h-[460px] w-full overflow-hidden border border-purple-100/80 shadow-md">
                
                {/* Full Unobstructed Portrait Photo */}
                <Image
                  src="/images/hero-portrait.jpg"
                  alt="Founder with SaaS strategy"
                  fill
                  className="object-cover object-[center_top] mix-blend-multiply opacity-95"
                  priority
                />
                
                {/* Gradient washes for integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#F8F7FF]/90 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent" />

                {/* Top-Right Floating Metric Badge */}
                <div className="absolute top-3.5 right-3.5 z-10 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-md border border-purple-100/80 max-w-[150px]">
                  <div className="text-[10px] text-gray-400 font-medium font-sans">
                    Pipeline Generated
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[17px] font-extrabold text-gray-900 font-sans">
                      $2.4M
                    </span>
                    <span className="text-[9.5px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded-full">
                      +38%
                    </span>
                  </div>
                </div>

                {/* Bottom Floating Value Pill Badge */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-purple-100/90 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#F5F3FF] text-[#6D28D9] flex items-center justify-center shrink-0">
                      <TrendingUp className="w-4 h-4 stroke-[2.2]" />
                    </div>
                    <div>
                      <div className="text-[11.5px] font-bold text-gray-900 font-sans leading-tight">
                        Predictable growth.
                      </div>
                      <div className="text-[9.5px] text-gray-500 font-sans">
                        Built on clarity, not guesswork.
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-[11.5px] font-bold text-emerald-600 font-sans leading-tight">
                      + 24%
                    </div>
                    <div className="text-[8.5px] text-gray-400 font-sans">
                      in 90 days
                    </div>
                  </div>
                </div>
              </div>

              {/* 4-Step Sequence Flow Grid (Neatly placed below the image on mobile) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {leftStepCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className="bg-[#FAFAFD] rounded-xl p-3 border border-purple-100/80 shadow-xs flex items-center gap-3"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#F5F3FF] text-[#6D28D9] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      <div>
                        <div className="text-[12px] font-bold text-gray-900 font-sans">
                          {card.title}
                        </div>
                        <div className="text-[10px] text-gray-500 font-sans leading-snug">
                          {card.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* GTM Funnel Card (Clean mobile view) */}
              <div className="bg-[#FAFAFD] rounded-2xl p-4 border border-purple-100/80 shadow-xs">
                <div className="text-[11.5px] font-bold text-gray-900 mb-2.5 tracking-tight font-sans">
                  GTM Conversion Funnel
                </div>
                <div className="space-y-1.5 font-sans">
                  {funnelData.map((item) => (
                    <div key={item.stage} className="flex items-center justify-between gap-2 text-[10px]">
                      <div className="w-[55%] flex justify-center">
                        <div
                          className={`h-3.5 rounded-sm ${item.bg} transition-all`}
                          style={{ width: item.width }}
                        />
                      </div>
                      <div className="w-[45%] flex items-center justify-between text-gray-500 font-medium">
                        <span className="text-gray-600">{item.stage}</span>
                        <span className="font-semibold text-gray-900">{item.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
