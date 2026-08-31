"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone, Mail } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Don't hide navbar if mobile menu is open
    if (!mobileMenuOpen && latest > 100 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

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
        <div className="pointer-events-auto flex items-center justify-between w-full max-w-[1120px] h-16 px-4 sm:px-6 rounded-pill frosted-glass border border-ink/10 shadow-card">
          {/* Logo */}
          <a
            href="/#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 group shrink-0"
          >
            <img
              src="/images/bizpsy-logo-dark.png"
              alt="BizPsy Logo"
              className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[12px] uppercase tracking-[0.12em] text-ink/70 hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button & Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2.5">
            {/* Desktop CTA Button */}
            <div className="hidden sm:flex items-center">
              <Button
                href="/contact"
                variant="purple"
                size="sm"
                showArrow
              >
                GET STARTED
              </Button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 active:bg-black/15 flex items-center justify-center text-gray-900 transition-colors pointer-events-auto"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[2.4]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[2.4]" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer / Dropdown Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-22 inset-x-4 z-40 md:hidden max-w-[500px] mx-auto bg-white/95 backdrop-blur-2xl rounded-[28px] p-6 border border-purple-100 shadow-[0_16px_50px_rgba(0,0,0,0.15)] overflow-hidden"
          >
            {/* Mobile Nav Links List */}
            <nav className="flex flex-col space-y-1 mb-6">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center justify-between px-4 py-3.5 rounded-2xl text-[14px] font-mono font-bold uppercase tracking-[0.08em] text-gray-800 hover:text-[#6D28D9] hover:bg-[#F5F3FF] transition-all group"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#6D28D9] group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </nav>

            {/* Mobile CTA Button */}
            <div className="pt-2 pb-4 border-t border-gray-100">
              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#6D28D9] text-white text-[13px] font-mono font-bold uppercase tracking-[0.08em] hover:bg-[#5B21B6] transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>GET STARTED</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Quick Contact Footer in Mobile Drawer */}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2 text-xs font-sans text-gray-500">
              <a
                href="tel:+919080390824"
                className="flex items-center gap-2 hover:text-[#6D28D9] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#6D28D9]" />
                <span>+91 9080390824</span>
              </a>
              <a
                href="mailto:info@bizpsy.in"
                className="flex items-center gap-2 hover:text-[#6D28D9] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#6D28D9]" />
                <span>info@bizpsy.in</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
