"use client";

import React from "react";
import { SERVICES_DATA } from "@/lib/data";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { IconChip } from "@/components/ui/IconChip";
import { Button } from "@/components/ui/Button";

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 px-4 max-w-[1240px] mx-auto">
      {/* Header Block */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <Eyebrow theme="dark" className="mb-4">
          {SERVICES_DATA.eyebrow}
        </Eyebrow>

        <RevealHeading
          text={SERVICES_DATA.heading}
          as="h2"
          size="h2"
          theme="light"
          className="max-w-[800px] justify-center text-center mb-4"
        />

        <p className="max-w-[560px] text-muted text-base sm:text-lg font-sans font-normal leading-relaxed tracking-[-0.02em] mb-8">
          {SERVICES_DATA.subhead}
        </p>

        <Button href="#pricing" variant="primary" size="md" showArrow>
          {SERVICES_DATA.ctaLabel}
        </Button>
      </div>

      {/* Unified Surface Container with Dividers (3 Services) */}
      <div className="rounded-panel bg-surface p-6 sm:p-10 border border-ink/5 shadow-card">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ink/10">
          {SERVICES_DATA.items.map((service, index) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-6 sm:p-8 first:pt-0 md:first:pt-6 last:pb-0 md:last:pb-6 group transition-all duration-300 hover:bg-white/50 rounded-card"
            >
              <div>
                <IconChip
                  iconName={service.iconName}
                  theme="accent"
                  size="md"
                  className="mb-6"
                />

                <span className="font-mono text-xs text-muted uppercase tracking-widest block mb-2">
                  0{index + 1} // SERVICE
                </span>

                <h3 className="text-2xl font-medium tracking-[-0.04em] text-ink mb-3 group-hover:text-ink">
                  {service.title}
                </h3>

                <p className="text-muted text-sm sm:text-base font-normal leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-ink/5 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-ink/70 group-hover:text-ink">
                <span>LEARN MORE</span>
                <span className="text-accent bg-ink rounded-full h-6 w-6 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
