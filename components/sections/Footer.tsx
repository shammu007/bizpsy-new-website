"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { FOOTER_DATA } from "@/lib/data";

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="pt-10 pb-16 px-4 max-w-[1240px] mx-auto select-none">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-[28px] sm:rounded-[36px] bg-[#131313] text-white p-8 sm:p-12 lg:p-14 shadow-float border border-white/10 flex flex-col justify-between"
      >
        {/* Top Header & Navigation Links Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16 mb-12 lg:mb-16">
          {/* Brand Logo & Tagline */}
          <div className="max-w-[420px]">
            <a
              href="#hero"
              className="flex items-center gap-2.5 text-white font-sans font-medium text-2xl tracking-tight group"
            >
              <div className="h-9 w-9 rounded-full bg-white text-ink flex items-center justify-center transition-transform group-hover:scale-105">
                <Sparkles className="h-5 w-5 fill-ink stroke-ink" />
              </div>
              <span>{FOOTER_DATA.logoText}</span>
            </a>
            <p className="text-white/70 text-sm sm:text-base font-sans font-normal leading-relaxed mt-4">
              {FOOTER_DATA.tagline}
            </p>
          </div>

          {/* Right Navigation Columns */}
          <div className="flex items-start gap-16 sm:gap-28 text-sm sm:text-base font-sans font-normal">
            <ul className="space-y-3.5">
              {FOOTER_DATA.col1Links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="space-y-3.5">
              {FOOTER_DATA.col2Links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription Block */}
        <div className="mb-10 sm:mb-12">
          <h3 className="text-base sm:text-lg font-medium text-white mb-3 font-sans">
            {FOOTER_DATA.newsletterTitle}
          </h3>

          <form onSubmit={handleSubmit} className="relative flex items-center max-w-[420px] w-full">
            <div className="relative flex items-center bg-white/10 rounded-full p-1.5 border border-white/15 w-full focus-within:border-white/40 transition-colors">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={FOOTER_DATA.newsletterPlaceholder}
                className="bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/40 outline-none w-full font-sans"
              />
              <button
                type="submit"
                className="bg-[#D6FD70] hover:bg-[#cbfb55] text-ink font-mono text-xs font-semibold uppercase tracking-wider px-4 py-2 sm:px-5 sm:py-2.5 rounded-full flex items-center gap-2 transition-all shrink-0 active:scale-95"
              >
                <span>{submitted ? "THANK YOU" : FOOTER_DATA.submitLabel}</span>
                <span className="h-6 w-6 rounded-full bg-ink text-white flex items-center justify-center shrink-0">
                  <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40 font-sans">
          <p>{FOOTER_DATA.copyright}</p>
        </div>
      </motion.div>
    </footer>
  );
}
