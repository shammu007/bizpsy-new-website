"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Search,
  Users,
  Crosshair,
  Rocket,
  TrendingUp,
  ArrowRight,
  ArrowDown,
  Sparkles,
} from "lucide-react";

export function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState("strategic");

  const tabs = [
    { id: "strategic", label: "Strategic Innovation" },
    { id: "icp", label: "ICP Research" },
    { id: "positioning", label: "Tailored Positioning" },
    { id: "demand", label: "Demand Engine" },
  ];

  const processSteps = [
    {
      step: 1,
      icon: Search,
      title: "Discovery",
      desc: "We learn your business, market, and buyers inside out.",
    },
    {
      step: 2,
      icon: Users,
      title: "Research",
      desc: "We uncover insights that shape winning strategy.",
    },
    {
      step: 3,
      icon: Crosshair,
      title: "Positioning",
      desc: "We craft a clear message that stands out.",
    },
    {
      step: 4,
      icon: Rocket,
      title: "Launch",
      desc: "We activate campaigns and enable your GTM engine.",
    },
    {
      step: 5,
      icon: TrendingUp,
      title: "Growth",
      desc: "We optimize, iterate, and compound results.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1380px] mx-auto w-full">
      {/* Outer Panel */}
      <div className="bg-white rounded-[32px] p-6 sm:p-10 lg:p-12 border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
        
        {/* Section 1 Header Row: Title & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
          <h2 className="text-[36px] sm:text-[46px] lg:text-[50px] font-normal leading-[1.08] font-serif text-[#111827] tracking-tight">
            Why choose us?
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-[15px] leading-relaxed max-w-[460px] font-sans font-normal">
            We combine Psychological strategy, research, and execution to build GTM engines that generate pipeline and compound growth.
          </p>
        </div>

        {/* Pill Navigation Tabs */}
        <div className="bg-[#F8F7FC] p-1.5 rounded-full border border-gray-200/60 flex items-center gap-1.5 overflow-x-auto mb-8 sm:mb-10 w-full no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 sm:px-6 py-2.5 rounded-full text-[12px] sm:text-[13px] font-sans font-semibold transition-colors duration-200 shrink-0 select-none ${
                  isActive
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/60"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-[#6D28D9] rounded-full shadow-sm"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tabbed Interactive Feature Card Container with Smooth Transition */}
        <div className="bg-[#FAFAFD] rounded-[24px] p-6 sm:p-8 lg:p-10 border border-gray-200/70 mb-16 sm:mb-20 min-h-[480px] flex items-center">
          <AnimatePresence mode="wait">
            
            {/* =========================================================================
                TAB 1: STRATEGIC INNOVATION (Existing GTM Command Center)
               ========================================================================= */}
            {activeTab === "strategic" && (
              <motion.div
                key="strategic"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full"
              >
                {/* Left Content Column */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <h3 className="text-[22px] sm:text-[26px] font-bold text-[#111827] mb-3 tracking-tight font-sans">
                    A strategic, research-led approach to GTM.
                  </h3>
                  <p className="text-[#4B5563] text-sm sm:text-[14.5px] leading-relaxed mb-6 font-sans">
                    We don&apos;t guess. We combine data, buyer insights, and category intelligence to craft a GTM strategy that resonates and converts.
                  </p>

                  <div className="space-y-3">
                    {[
                      "Data-backed decisions",
                      "Clear positioning and messaging",
                      "Repeatable, scalable demand systems",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="text-sm font-semibold text-gray-800 font-sans">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Dashboard Visualization: GTM Command Center */}
                <div className="lg:col-span-7">
                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-200/80">
                    <div className="text-[12px] font-bold text-gray-800 mb-4 font-sans tracking-tight">
                      GTM Command Center
                    </div>

                    {/* 3 Metric Stat Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                      <div className="bg-[#FAFAFD] rounded-xl p-3.5 border border-gray-100">
                        <div className="text-[10.5px] text-gray-400 font-medium mb-1 font-sans">
                          ICP Fit Score
                        </div>
                        <div className="text-[22px] font-extrabold text-gray-900 leading-tight">
                          89%
                        </div>
                        <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                          High-fit segment
                        </div>
                      </div>

                      <div className="bg-[#FAFAFD] rounded-xl p-3.5 border border-gray-100">
                        <div className="text-[10.5px] text-gray-400 font-medium mb-1 font-sans">
                          Pipeline Generated
                        </div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-[22px] font-extrabold text-gray-900 leading-tight">
                            $2.4M
                          </span>
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded-full">
                            +38%
                          </span>
                        </div>
                        <div className="text-[9.5px] text-gray-400 mt-0.5">
                          vs last 90 days
                        </div>
                      </div>

                      <div className="bg-[#FAFAFD] rounded-xl p-3.5 border border-gray-100">
                        <div className="text-[10.5px] text-gray-400 font-medium mb-1 font-sans">
                          Meetings Booked
                        </div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-[22px] font-extrabold text-gray-900 leading-tight">
                            142
                          </span>
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded-full">
                            +26%
                          </span>
                        </div>
                        <div className="text-[9.5px] text-gray-400 mt-0.5">
                          vs last 90 days
                        </div>
                      </div>
                    </div>

                    {/* Funnel Wave Overview Graphic */}
                    <div className="bg-[#FAFAFD] rounded-xl p-4 border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold text-gray-700 font-sans">
                          Funnel Overview ✨
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="w-full sm:w-[75%] h-20">
                          <svg className="w-full h-full" viewBox="0 0 300 80" fill="none" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="waveGrad1" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#7C3AED" />
                                <stop offset="100%" stopColor="#8B5CF6" />
                              </linearGradient>
                              <linearGradient id="waveGrad2" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#8B5CF6" />
                                <stop offset="100%" stopColor="#A78BFA" />
                              </linearGradient>
                              <linearGradient id="waveGrad3" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#A78BFA" />
                                <stop offset="100%" stopColor="#C4B5FD" />
                              </linearGradient>
                              <linearGradient id="waveGrad4" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#DDD6FE" />
                                <stop offset="100%" stopColor="#EDE9FE" />
                              </linearGradient>
                            </defs>
                            <path d="M0,80 Q75,30 150,50 T300,20 L300,80 L0,80 Z" fill="url(#waveGrad4)" opacity="0.6" />
                            <path d="M0,80 Q75,45 150,60 T300,35 L300,80 L0,80 Z" fill="url(#waveGrad3)" opacity="0.75" />
                            <path d="M0,80 Q75,60 150,70 T300,50 L300,80 L0,80 Z" fill="url(#waveGrad2)" opacity="0.9" />
                            <path d="M0,80 Q75,70 150,75 T300,65 L300,80 L0,80 Z" fill="url(#waveGrad1)" />
                          </svg>
                        </div>

                        <div className="w-full sm:w-[25%] flex flex-wrap sm:flex-col gap-1.5 text-[9.5px] text-gray-500 font-sans pl-1">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#EDE9FE]" /> Awareness
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#C4B5FD]" /> Engaged
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#A78BFA]" /> Qualified
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" /> Opportunity
                          </div>
                          <div className="flex items-center gap-1.5 font-semibold text-gray-800">
                            <span className="w-2 h-2 rounded-full bg-[#6D28D9]" /> Won
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}

            {/* =========================================================================
                TAB 2: ICP RESEARCH (ICP Intelligence & Clean Quadrant Matrix)
               ========================================================================= */}
            {activeTab === "icp" && (
              <motion.div
                key="icp"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full"
              >
                {/* Left Content Column */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <h3 className="text-[22px] sm:text-[26px] font-bold text-[#111827] mb-3 tracking-tight font-sans">
                    Know exactly who is worth targeting.
                  </h3>
                  <p className="text-[#4B5563] text-sm sm:text-[14.5px] leading-relaxed mb-6 font-sans">
                    We go beyond basic firmographics. We uncover the companies, buyers, pains, triggers, and behaviours most likely to drive revenue.
                  </p>

                  <div className="space-y-3">
                    {[
                      "High-fit ICP segments and personas",
                      "Buyer pains, triggers, and priorities",
                      "Clear account and market prioritisation",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="text-sm font-semibold text-gray-800 font-sans">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Dashboard Visualization: ICP Intelligence */}
                <div className="lg:col-span-7">
                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-200/80">
                    <div className="text-[12px] font-bold text-gray-800 mb-4 font-sans tracking-tight">
                      ICP Intelligence
                    </div>

                    {/* 3 Metric Stat Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                      <div className="bg-[#FAFAFD] rounded-xl p-3.5 border border-gray-100">
                        <div className="text-[10.5px] text-gray-400 font-medium mb-1 font-sans">
                          ICP Fit Score
                        </div>
                        <div className="text-[22px] font-extrabold text-gray-900 leading-tight">
                          91%
                        </div>
                        <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                          High-fit segment
                        </div>
                      </div>

                      <div className="bg-[#FAFAFD] rounded-xl p-3.5 border border-gray-100">
                        <div className="text-[10.5px] text-gray-400 font-medium mb-1 font-sans">
                          Segments Validated
                        </div>
                        <div className="text-[22px] font-extrabold text-gray-900 leading-tight">
                          6
                        </div>
                        <div className="text-[9.5px] text-gray-400 mt-0.5 font-sans">
                          Priority markets identified
                        </div>
                      </div>

                      <div className="bg-[#FAFAFD] rounded-xl p-3.5 border border-gray-100">
                        <div className="text-[10.5px] text-gray-400 font-medium mb-1 font-sans">
                          Priority Accounts
                        </div>
                        <div className="text-[22px] font-extrabold text-gray-900 leading-tight">
                          1,240
                        </div>
                        <div className="text-[9.5px] text-gray-400 mt-0.5 font-sans">
                          Ready for activation
                        </div>
                      </div>
                    </div>

                    {/* Clean Scatter / Quadrant Matrix Visualization */}
                    <div className="bg-[#FAFAFD] rounded-xl p-4 border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold text-gray-700 font-sans">
                          ICP Fit Matrix
                        </span>
                        <span className="text-[10px] font-medium text-gray-400 font-sans">
                          Segment Prioritization
                        </span>
                      </div>

                      {/* Quadrant Canvas with Ample Height & Clean Node Spacing */}
                      <div className="relative w-full h-48 sm:h-52 bg-white rounded-xl border border-gray-200/80 p-3 overflow-hidden">
                        {/* Grid Axes (Center lines) */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px border-r border-dashed border-gray-200" />
                        <div className="absolute top-1/2 left-0 right-0 h-px border-b border-dashed border-gray-200" />

                        {/* Upper-Right Priority ICP Highlight Zone */}
                        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-[#FAF5FF] to-[#F5F3FF] border-b border-l border-purple-200/70 rounded-tr-xl flex items-start justify-end p-2 pointer-events-none">
                          <span className="inline-flex items-center gap-1 font-mono text-[9px] sm:text-[9.5px] font-bold text-[#6D28D9] bg-white px-2 py-0.5 rounded-full shadow-2xs border border-purple-200">
                            <Sparkles className="w-2.5 h-2.5 fill-[#6D28D9]" />
                            Priority ICP
                          </span>
                        </div>

                        {/* Plotted Segments (Spaced out with zero collision) */}
                        
                        {/* 1. Enterprise SaaS (High ICP Fit, High Revenue Potential - Upper Right) */}
                        <div className="absolute top-9 right-4 sm:right-6 flex items-center gap-1.5 z-10">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#6D28D9] ring-4 ring-[#6D28D9]/20 shrink-0" />
                          <span className="font-sans text-[10.5px] sm:text-[11px] font-bold text-gray-950 bg-white px-2 py-1 rounded-md shadow-xs border border-purple-200/80">
                            Enterprise SaaS
                          </span>
                        </div>

                        {/* 2. Fintech (High ICP Fit, Medium-High Revenue Potential - Top Mid) */}
                        <div className="absolute top-6 left-[53%] sm:left-[55%] flex items-center gap-1.5 z-10">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] shrink-0" />
                          <span className="font-sans text-[10px] sm:text-[10.5px] font-semibold text-gray-800 bg-white px-2 py-0.5 rounded-md shadow-2xs border border-purple-100">
                            Fintech
                          </span>
                        </div>

                        {/* 3. Mid-market SaaS (Medium-High ICP Fit, High Revenue Potential - Mid-Right) */}
                        <div className="absolute top-[58%] right-6 sm:right-8 flex items-center gap-1.5 z-10">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] shrink-0" />
                          <span className="font-sans text-[10px] sm:text-[10.5px] font-semibold text-gray-800 bg-white px-2 py-0.5 rounded-md shadow-2xs border border-purple-100">
                            Mid-market SaaS
                          </span>
                        </div>

                        {/* 4. Agencies (Medium ICP Fit, Medium Revenue Potential - Center Left) */}
                        <div className="absolute top-[42%] left-[18%] sm:left-[22%] flex items-center gap-1.5 z-10">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#A78BFA] shrink-0" />
                          <span className="font-sans text-[9.5px] sm:text-[10px] font-medium text-gray-700 bg-white px-2 py-0.5 rounded-md shadow-2xs border border-gray-200/80">
                            Agencies
                          </span>
                        </div>

                        {/* 5. E-commerce (Medium-Low ICP Fit, Medium Revenue Potential - Lower Left) */}
                        <div className="absolute bottom-5 left-4 sm:left-6 flex items-center gap-1.5 z-10">
                          <span className="w-2 h-2 rounded-full bg-[#C4B5FD] shrink-0" />
                          <span className="font-sans text-[9px] sm:text-[9.5px] text-gray-500 bg-white px-2 py-0.5 rounded-md border border-gray-200/80">
                            E-commerce
                          </span>
                        </div>

                        {/* Subtle Axis Labels */}
                        <div className="absolute bottom-1.5 right-2 text-[8.5px] font-mono uppercase text-gray-400 font-semibold tracking-wider">
                          Revenue Potential →
                        </div>
                        <div className="absolute top-1.5 left-2 text-[8.5px] font-mono uppercase text-gray-400 font-semibold tracking-wider">
                          ICP Fit ↑
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}

            {/* =========================================================================
                TAB 3: TAILORED POSITIONING (Positioning Lab & Message Resonance Bar Chart)
               ========================================================================= */}
            {activeTab === "positioning" && (
              <motion.div
                key="positioning"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full"
              >
                {/* Left Content Column */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <h3 className="text-[22px] sm:text-[26px] font-bold text-[#111827] mb-3 tracking-tight font-sans">
                    Make your value impossible to misunderstand.
                  </h3>
                  <p className="text-[#4B5563] text-sm sm:text-[14.5px] leading-relaxed mb-6 font-sans">
                    We turn buyer research into positioning and messaging that speaks directly to what your market cares about — and why they should choose you.
                  </p>

                  <div className="space-y-3">
                    {[
                      "Sharp category and competitive positioning",
                      "Persona-specific messaging and value propositions",
                      "Clear differentiation across every touchpoint",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="text-sm font-semibold text-gray-800 font-sans">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Dashboard Visualization: Positioning Lab */}
                <div className="lg:col-span-7">
                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-200/80">
                    <div className="text-[12px] font-bold text-gray-800 mb-4 font-sans tracking-tight">
                      Positioning Lab
                    </div>

                    {/* 3 Metric Stat Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                      <div className="bg-[#FAFAFD] rounded-xl p-3.5 border border-gray-100">
                        <div className="text-[10.5px] text-gray-400 font-medium mb-1 font-sans">
                          Message Resonance
                        </div>
                        <div className="text-[22px] font-extrabold text-gray-900 leading-tight">
                          91%
                        </div>
                        <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                          Top-performing message
                        </div>
                      </div>

                      <div className="bg-[#FAFAFD] rounded-xl p-3.5 border border-gray-100">
                        <div className="text-[10.5px] text-gray-400 font-medium mb-1 font-sans">
                          Value Props Tested
                        </div>
                        <div className="text-[22px] font-extrabold text-gray-900 leading-tight">
                          12
                        </div>
                        <div className="text-[9.5px] text-gray-400 mt-0.5 font-sans">
                          Across key segments
                        </div>
                      </div>

                      <div className="bg-[#FAFAFD] rounded-xl p-3.5 border border-gray-100">
                        <div className="text-[10.5px] text-gray-400 font-medium mb-1 font-sans">
                          Buyer Personas
                        </div>
                        <div className="text-[22px] font-extrabold text-gray-900 leading-tight">
                          4
                        </div>
                        <div className="text-[9.5px] text-gray-400 mt-0.5 font-sans">
                          Messaging validated
                        </div>
                      </div>
                    </div>

                    {/* Horizontal Bar Chart: Message Resonance */}
                    <div className="bg-[#FAFAFD] rounded-xl p-4 border border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-bold text-gray-700 font-sans">
                          Message Resonance
                        </span>
                        <span className="text-[10px] font-medium text-gray-400 font-sans">
                          What buyers respond to most
                        </span>
                      </div>

                      <div className="space-y-2.5 font-sans">
                        {/* Row 1: Revenue Growth (Strongest) */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="font-bold text-gray-900">Revenue Growth</span>
                            <span className="font-extrabold text-[#6D28D9]">91%</span>
                          </div>
                          <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "91%" }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] rounded-full shadow-2xs"
                            />
                          </div>
                        </div>

                        {/* Row 2: Reduce GTM Cost */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="font-semibold text-gray-700">Reduce GTM Cost</span>
                            <span className="font-bold text-gray-800">82%</span>
                          </div>
                          <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "82%" }}
                              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                              className="h-full bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] rounded-full"
                            />
                          </div>
                        </div>

                        {/* Row 3: Faster Pipeline */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="font-medium text-gray-600">Faster Pipeline</span>
                            <span className="font-semibold text-gray-700">76%</span>
                          </div>
                          <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "76%" }}
                              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                              className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] rounded-full"
                            />
                          </div>
                        </div>

                        {/* Row 4: AI Automation */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="font-medium text-gray-600">AI Automation</span>
                            <span className="font-semibold text-gray-700">64%</span>
                          </div>
                          <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "64%" }}
                              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                              className="h-full bg-gradient-to-r from-[#A78BFA] to-[#C4B5FD] rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}

            {/* =========================================================================
                TAB 4: DEMAND ENGINE (Demand Engine & Qualified Pipeline Growth Line Chart)
               ========================================================================= */}
            {activeTab === "demand" && (
              <motion.div
                key="demand"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full"
              >
                {/* Left Content Column */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <h3 className="text-[22px] sm:text-[26px] font-bold text-[#111827] mb-3 tracking-tight font-sans">
                    Turn strategy into a repeatable pipeline engine.
                  </h3>
                  <p className="text-[#4B5563] text-sm sm:text-[14.5px] leading-relaxed mb-6 font-sans">
                    We activate your positioning across the right channels, build scalable demand systems, and continuously optimise what drives qualified pipeline.
                  </p>

                  <div className="space-y-3">
                    {[
                      "Multi-channel demand generation",
                      "Repeatable outbound and inbound systems",
                      "Continuous testing and optimisation",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="text-sm font-semibold text-gray-800 font-sans">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Dashboard Visualization: Demand Engine */}
                <div className="lg:col-span-7">
                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-200/80">
                    <div className="text-[12px] font-bold text-gray-800 mb-4 font-sans tracking-tight">
                      Demand Engine
                    </div>

                    {/* 3 Metric Stat Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                      <div className="bg-[#FAFAFD] rounded-xl p-3.5 border border-gray-100">
                        <div className="text-[10.5px] text-gray-400 font-medium mb-1 font-sans">
                          Pipeline Generated
                        </div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-[22px] font-extrabold text-gray-900 leading-tight">
                            $1.3M
                          </span>
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded-full">
                            +42%
                          </span>
                        </div>
                        <div className="text-[9.5px] text-gray-400 mt-0.5 font-sans">
                          vs last 90 days
                        </div>
                      </div>

                      <div className="bg-[#FAFAFD] rounded-xl p-3.5 border border-gray-100">
                        <div className="text-[10.5px] text-gray-400 font-medium mb-1 font-sans">
                          Meetings Booked
                        </div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-[22px] font-extrabold text-gray-900 leading-tight">
                            184
                          </span>
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded-full">
                            +31%
                          </span>
                        </div>
                        <div className="text-[9.5px] text-gray-400 mt-0.5 font-sans">
                          vs last 90 days
                        </div>
                      </div>

                      <div className="bg-[#FAFAFD] rounded-xl p-3.5 border border-gray-100">
                        <div className="text-[10.5px] text-gray-400 font-medium mb-1 font-sans">
                          SQL Conversion
                        </div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-[22px] font-extrabold text-gray-900 leading-tight">
                            28%
                          </span>
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded-full">
                            +8%
                          </span>
                        </div>
                        <div className="text-[9.5px] text-gray-400 mt-0.5 font-sans">
                          vs last 90 days
                        </div>
                      </div>
                    </div>

                    {/* Smooth Area Chart: Qualified Pipeline Growth */}
                    <div className="bg-[#FAFAFD] rounded-xl p-4 border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold text-gray-700 font-sans">
                          Qualified Pipeline
                        </span>
                        <span className="text-[10px] font-medium text-gray-400 font-sans">
                          Pipeline generated over time
                        </span>
                      </div>

                      {/* SVG Line / Area Graph */}
                      <div className="h-24 w-full relative">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 300 70" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="pipelineAreaGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>

                          {/* Subtle horizontal grid lines */}
                          <line x1="0" y1="20" x2="300" y2="20" stroke="#E5E7EB" strokeDasharray="3 3" strokeWidth="0.8" />
                          <line x1="0" y1="45" x2="300" y2="45" stroke="#E5E7EB" strokeDasharray="3 3" strokeWidth="0.8" />

                          {/* Area fill */}
                          <path
                            d="M 0,58 Q 50,52 60,50 T 120,40 T 180,28 T 240,16 T 300,5 L 300,70 L 0,70 Z"
                            fill="url(#pipelineAreaGrad)"
                          />

                          {/* Smooth Purple Line */}
                          <path
                            d="M 0,58 Q 50,52 60,50 T 120,40 T 180,28 T 240,16 T 300,5"
                            fill="none"
                            stroke="#6D28D9"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />

                          {/* Endpoint Pulse Circle */}
                          <circle cx="300" cy="5" r="4" fill="#6D28D9" />
                          <circle cx="300" cy="5" r="7" fill="#6D28D9" opacity="0.25" />
                        </svg>
                      </div>

                      {/* Month X-Axis Labels */}
                      <div className="flex items-center justify-between text-[9px] font-mono text-gray-400 pt-1 border-t border-gray-100">
                        <span>Jan ($220K)</span>
                        <span>Feb ($340K)</span>
                        <span>Mar ($510K)</span>
                        <span>Apr ($730K)</span>
                        <span>May ($980K)</span>
                        <span className="font-bold text-[#6D28D9]">Jun ($1.3M)</span>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Section 2: OUR GTM PROCESS Flow Chart (Bigger, Bolder, Flow Chart with Arrows) */}
        <div id="gtm-process" className="pt-6 sm:pt-10 text-center scroll-mt-24">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F3FF] border border-[#DDD6FE] text-[#6D28D9] font-mono text-[12px] uppercase tracking-[0.14em] font-extrabold mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 fill-[#6D28D9]" />
            OUR GTM PROCESS
          </div>

          {/* Bold Heading */}
          <h3 className="text-[34px] sm:text-[44px] lg:text-[48px] font-serif font-normal text-[#111827] mb-12 sm:mb-16 tracking-tight">
            A proven path from insight to impact.
          </h3>

          {/* Flow Chart Container with Interconnecting Directional Arrows */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 w-full relative">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === processSteps.length - 1;

              return (
                <React.Fragment key={step.step}>
                  {/* Step Card (Larger, Bolder, with Permanent Purple Border) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: step.step * 0.1 }}
                    className="flex-1 w-full lg:w-auto bg-white rounded-[26px] p-6 sm:p-7 border-2 border-[#DDD6FE] shadow-sm hover:border-[#7C3AED] hover:shadow-xl hover:scale-[1.03] transition-all duration-300 flex flex-col items-center text-center group min-h-[250px] sm:min-h-[270px] justify-between"
                  >
                    {/* Top Stepper Pill Badge: Step Number + Icon */}
                    <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F5F3FF] border border-[#DDD6FE] mb-5 group-hover:border-[#7C3AED] transition-colors shadow-xs">
                      <span className="w-6 h-6 rounded-full bg-[#6D28D9] text-white font-mono font-black text-[11px] flex items-center justify-center shadow-xs">
                        0{step.step}
                      </span>
                      <Icon className="w-4 h-4 text-[#6D28D9] stroke-[2.4]" />
                    </div>

                    {/* Step Title (Bolder & Larger) */}
                    <div className="text-[19px] sm:text-[21px] font-extrabold text-[#111827] mb-2.5 font-sans tracking-tight">
                      {step.title}
                    </div>

                    {/* Step Description */}
                    <p className="text-[13px] sm:text-[13.5px] text-[#4B5563] font-sans leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Subtle bottom stage indicator dot */}
                    <div className="w-2 h-2 rounded-full bg-[#DDD6FE] group-hover:bg-[#6D28D9] transition-colors mt-4" />
                  </motion.div>

                  {/* Flow Chart Arrow in between each card */}
                  {!isLast && (
                    <>
                      {/* Desktop Horizontal Arrow Connector */}
                      <div className="hidden lg:flex items-center justify-center shrink-0 px-2 z-20">
                        <div className="w-9 h-9 rounded-full bg-[#F5F3FF] border-2 border-[#DDD6FE] shadow-sm flex items-center justify-center text-[#6D28D9] hover:bg-[#6D28D9] hover:text-white hover:border-[#6D28D9] transition-all group">
                          <ArrowRight className="w-4 h-4 stroke-[3] transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </div>

                      {/* Mobile / Tablet Vertical Down Arrow Connector */}
                      <div className="flex lg:hidden items-center justify-center py-1 z-20">
                        <div className="w-8 h-8 rounded-full bg-[#F5F3FF] border-2 border-[#DDD6FE] shadow-sm flex items-center justify-center text-[#6D28D9]">
                          <ArrowDown className="w-4 h-4 stroke-[3]" />
                        </div>
                      </div>
                    </>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Bottom CTA Button */}
          <div className="mt-14 sm:mt-16 flex justify-center">
            <a
              href="#services"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#170C36] text-white text-[13px] font-mono tracking-[0.08em] uppercase font-bold hover:bg-[#2A175B] transition-all shadow-lg hover:shadow-xl hover:scale-105 group"
            >
              <span>SEE OUR PROCESS IN DETAIL</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
