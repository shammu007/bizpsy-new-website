import React from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_DATA } from "@/lib/data";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[960px] mx-auto w-full scroll-mt-24">
      <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
        <Eyebrow theme="purple" className="mb-4">
          {FAQ_DATA.eyebrow}
        </Eyebrow>
        <h2 className="text-[28px] sm:text-[40px] font-sans font-medium leading-[1.1] tracking-[-0.03em] text-[#111827] max-w-[720px]">
          {FAQ_DATA.heading}
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {FAQ_DATA.items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-[#DDD6FE] bg-[#FAFAFD] open:bg-white open:border-[#7C3AED] open:shadow-[0_10px_30px_rgba(124,58,237,0.08)] transition-colors"
          >
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 sm:px-6 py-4 sm:py-5 [&::-webkit-details-marker]:hidden">
              <h3 className="text-base sm:text-lg font-semibold tracking-tight text-[#111827] font-sans">
                {item.question}
              </h3>
              <ChevronDown className="w-5 h-5 shrink-0 text-[#6D28D9] transition-transform group-open:rotate-180" />
            </summary>
            <p className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1 text-sm sm:text-[15px] leading-relaxed text-[#4B5563] font-sans">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
