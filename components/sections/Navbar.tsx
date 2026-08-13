"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 100 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-120%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className="pointer-events-auto flex items-center justify-between w-full max-w-[1120px] h-14 px-4 rounded-pill frosted-glass border border-ink/10 shadow-card">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-ink font-sans font-medium text-[18px] tracking-[-0.04em] group"
          >
            <div className="h-8 w-8 rounded-full bg-ink text-accent flex items-center justify-center transition-transform group-hover:scale-105">
              <Sparkles className="h-4 w-4 fill-accent stroke-accent" />
            </div>
            <span>BizPsy</span>
          </a>

          {/* Desktop Nav Items (Driven by data.ts) */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.slice(0, 5).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[12px] uppercase tracking-[0.12em] text-ink/70 hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              showArrow
              className="hidden sm:inline-flex"
            >
              CONTACT US
            </Button>

            {/* Hamburger Trigger (Always active at all widths per spec §6) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="h-9 w-9 rounded-full bg-ink text-white flex items-center justify-center hover:bg-ink/80 transition-colors"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-xl flex flex-col justify-between p-8 sm:p-12 text-white"
          >
            <div className="flex justify-between items-center max-w-[1120px] mx-auto w-full pt-4">
              <a
                href="#hero"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-white font-sans font-medium text-[20px]"
              >
                <div className="h-9 w-9 rounded-full bg-accent text-ink flex items-center justify-center">
                  <Sparkles className="h-5 w-5 fill-ink stroke-ink" />
                </div>
                <span>BizPsy</span>
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="h-10 w-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="max-w-[1120px] mx-auto w-full my-auto flex flex-col gap-4 sm:gap-6">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  className="group flex items-center justify-between text-[28px] sm:text-[42px] font-medium tracking-[-0.04em] text-white/80 hover:text-accent transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-sm tracking-widest text-white/40 group-hover:text-accent">
                    0{idx + 1}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Drawer Footer */}
            <div className="max-w-[1120px] mx-auto w-full border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="font-mono text-xs text-white/50 uppercase tracking-widest">
                AI STRATEGY & CONSULTING MATRIX
              </p>
              <Button
                href="#contact"
                variant="primary"
                size="md"
                showArrow
                onClick={() => setIsOpen(false)}
              >
                GET STARTED NOW
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
