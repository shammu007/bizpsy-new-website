"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Star,
  Loader2,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    services: ["GTM Audit"],
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    "GTM Audit",
    "Positioning & Messaging",
    "Demand & Pipeline Engine",
    "AI & Context Engineering",
    "ICP & Buyer Research",
    "Workflow Automation",
  ];

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== service) };
      } else {
        return { ...prev, services: [...prev.services, service] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to Next.js contact API route (delivering to info@bizpsy.in and mshammu.007@gmail.com)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        // Fallback to mailto link
        const mailtoUrl = `mailto:info@bizpsy.in,mshammu.007@gmail.com?subject=${encodeURIComponent(
          `GTM Strategy Inquiry from ${formData.fullName}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nServices: ${formData.services.join(
            ", "
          )}\n\nMessage:\n${formData.message}`
        )}`;
        window.open(mailtoUrl, "_blank");
        setSubmitted(true);
      }
    } catch {
      // Fallback
      const mailtoUrl = `mailto:info@bizpsy.in,mshammu.007@gmail.com?subject=${encodeURIComponent(
        `GTM Strategy Inquiry from ${formData.fullName}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nServices: ${formData.services.join(
          ", "
        )}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoUrl, "_blank");
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-ink relative">
      <Navbar />

      <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-[1380px] mx-auto w-full">
        {/* Outer Panel matching site architecture */}
        <div className="bg-white rounded-[32px] p-6 sm:p-10 lg:p-14 border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
          
          {/* Header Block */}
          <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Eyebrow theme="purple" className="mb-4">
                GET IN TOUCH
              </Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[38px] sm:text-[50px] lg:text-[56px] font-normal leading-[1.08] font-serif text-[#111827] tracking-tight mb-5"
            >
              Let&apos;s build your predictable GTM engine.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#4B5563] text-base sm:text-[17px] font-sans font-normal leading-relaxed"
            >
              Whether you need a full GTM audit, positioning that converts, or automated pipeline engineering, we&apos;re ready to help your SaaS scale.
            </motion.p>
          </div>

          {/* Two-Column Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Direct Info & Strategy Session Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              {/* Direct Strategy Call Card */}
              <div className="bg-gradient-to-br from-[#FAF5FF] via-[#F8F7FF] to-[#EDE9FE] rounded-[24px] p-6 sm:p-8 border-2 border-[#DDD6FE] shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#6D28D9] text-white flex items-center justify-center shadow-xs">
                    <Calendar className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-gray-950 font-sans">
                      Book a Strategy Call
                    </h3>
                    <p className="text-[12px] text-[#6D28D9] font-medium font-sans">
                      30-Min Discovery & GTM Diagnostic
                    </p>
                  </div>
                </div>

                <p className="text-[#4B5563] text-sm font-sans leading-relaxed mb-6">
                  Talk directly with our GTM strategy team. We will review your current positioning, pipeline bottlenecks, and identify high-leverage growth opportunities.
                </p>

                <div className="space-y-2.5 mb-6 text-sm text-gray-700 font-sans">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6D28D9] stroke-[2.5]" />
                    <span>Free preliminary positioning review</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6D28D9] stroke-[2.5]" />
                    <span>Direct access to senior GTM strategists</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6D28D9] stroke-[2.5]" />
                    <span>Clear 90-day actionable roadmap</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-purple-200/60 flex items-center justify-between text-[12px] text-gray-600 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#6D28D9]" /> Response in &lt; 24h
                  </span>
                  <span className="font-bold text-[#6D28D9]">100% Confidential</span>
                </div>
              </div>

              {/* Direct Channels Box (Updated with info@bizpsy.in and +91 9080390824) */}
              <div className="bg-[#FAFAFD] rounded-[24px] p-6 border border-gray-200/80 space-y-4">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-semibold">
                      Email Us
                    </div>
                    <a
                      href="mailto:info@bizpsy.in"
                      className="text-[15px] font-bold text-gray-900 hover:text-[#6D28D9] transition-colors font-sans"
                    >
                      info@bizpsy.in
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-semibold">
                      Call / WhatsApp
                    </div>
                    <a
                      href="tel:+919080390824"
                      className="text-[15px] font-bold text-gray-900 hover:text-[#6D28D9] transition-colors font-sans"
                    >
                      +91 9080390824
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-semibold">
                      Location & Availability
                    </div>
                    <div className="text-[14px] font-medium text-gray-800 font-sans">
                      Coimbatore • Remote Worldwide
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Proof Quote */}
              <div className="bg-white rounded-2xl p-5 border border-purple-100 shadow-xs flex items-center gap-4">
                <div className="flex -space-x-2 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt="Founder avatar"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    alt="Founder avatar"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                    alt="Founder avatar"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-0.5 text-[#6D28D9] mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#6D28D9] stroke-[#6D28D9]" />
                    ))}
                  </div>
                  <div className="text-[11px] text-gray-600 font-sans">
                    Trusted by 150+ B2B SaaS founders and executives.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Interactive Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-7 bg-[#FAFAFD] rounded-[28px] p-6 sm:p-9 border-2 border-[#DDD6FE] shadow-sm"
            >
              {submitted ? (
                <div className="py-16 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center mb-6 shadow-sm">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h3 className="text-[28px] font-bold text-gray-950 mb-3 font-sans">
                    Inquiry Sent Successfully!
                  </h3>
                  <p className="text-gray-600 text-base max-w-md mx-auto mb-4 font-sans leading-relaxed">
                    Thank you for reaching out. We have sent your inquiry to our strategy team at{" "}
                    <strong className="text-[#6D28D9]">info@bizpsy.in</strong> and{" "}
                    <strong className="text-[#6D28D9]">mshammu.007@gmail.com</strong>.
                  </p>
                  <p className="text-gray-500 text-xs font-sans mb-8">
                    We will review your SaaS details and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        company: "",
                        services: ["GTM Audit"],
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#6D28D9] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#5B21B6] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-[22px] font-bold text-gray-950 mb-1 font-sans">
                      Send an Inquiry
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm font-sans">
                      Fill out the details below and our team will get in touch directly.
                    </p>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 outline-none text-sm text-gray-900 font-sans transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 outline-none text-sm text-gray-900 font-sans transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Company Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 90803 90824"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 outline-none text-sm text-gray-900 font-sans transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Acme SaaS Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 outline-none text-sm text-gray-900 font-sans transition-all"
                      />
                    </div>
                  </div>

                  {/* Areas of Interest Multi-select Pills */}
                  <div>
                    <label className="block text-[12px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-2.5">
                      What are you looking to solve?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((service) => {
                        const isSelected = formData.services.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`px-3.5 py-2 rounded-lg text-[12px] font-mono uppercase font-bold tracking-wider transition-all select-none ${
                              isSelected
                                ? "bg-[#6D28D9] text-white shadow-xs border border-[#6D28D9]"
                                : "bg-white text-gray-700 border border-gray-200 hover:border-purple-300 hover:bg-[#FAF9FF]"
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-[12px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Tell us about your current growth or positioning challenge
                    </label>
                    <textarea
                      rows={4}
                      placeholder="e.g. We have strong product-market fit with technical users, but struggling to position our value to non-technical buyers..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 outline-none text-sm text-gray-900 font-sans transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#170C36] text-white text-[13px] font-mono font-bold uppercase tracking-[0.08em] hover:bg-[#2A175B] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>SENDING INQUIRY...</span>
                      </>
                    ) : (
                      <>
                        <span>SUBMIT INQUIRY & BOOK CALL</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
