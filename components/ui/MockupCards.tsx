"use client";

import React from "react";
import { TrendingUp, ArrowUpRight, ShieldCheck, Zap, BarChart3, Activity } from "lucide-react";

export function DashboardCard({
  title = "Decision Matrix Velocity",
  value = "94.8%",
  change = "+12.4%",
  tag = "OPTIMIZED",
}) {
  return (
    <div className="w-[300px] shrink-0 rounded-card bg-ink text-white p-5 shadow-float border border-white/10 flex flex-col justify-between gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-white/60">
            {tag}
          </span>
        </div>
        <span className="inline-flex items-center gap-1 font-mono text-[11px] text-accent bg-accent/10 px-2 py-0.5 rounded-full">
          <TrendingUp className="h-3 w-3" />
          {change}
        </span>
      </div>

      <div>
        <p className="text-white/60 text-xs font-sans mb-1">{title}</p>
        <p className="text-3xl font-medium tracking-tight text-white">{value}</p>
      </div>

      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-accent rounded-full w-[84%]" />
      </div>
    </div>
  );
}

export function TransactionCard({
  title = "Active AI Telemetry",
  value = "142 Vectors",
  status = "LIVE PIPELINE",
}) {
  return (
    <div className="w-[300px] shrink-0 rounded-card bg-white text-ink p-5 shadow-float border border-ink/10 flex flex-col justify-between gap-4">
      <div className="flex items-center justify-between">
        <div className="h-8 w-8 rounded-lg bg-surface flex items-center justify-center text-ink">
          <Activity className="h-4 w-4 stroke-[2]" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest bg-ink text-accent px-2 py-1 rounded">
          {status}
        </span>
      </div>

      <div>
        <p className="text-ink/60 text-xs font-sans">{title}</p>
        <p className="text-2xl font-medium tracking-tight text-ink mt-0.5">{value}</p>
      </div>

      <div className="flex items-center justify-between text-xs text-ink/70 pt-2 border-t border-ink/5">
        <span>Anomaly Index</span>
        <span className="font-mono text-emerald-600 font-medium">0.02% (Optimal)</span>
      </div>
    </div>
  );
}

export function BarChartCard({
  title = "Quarterly Yield Acceleration",
  value = "3.8x ROI",
}) {
  return (
    <div className="w-[300px] shrink-0 rounded-card bg-[#181818] text-white p-5 shadow-float border border-white/10 flex flex-col justify-between gap-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
          EXECUTIVE SUMMARY
        </span>
        <BarChart3 className="h-4 w-4 text-accent" />
      </div>

      <div>
        <p className="text-white/60 text-xs font-sans mb-1">{title}</p>
        <p className="text-3xl font-medium tracking-tight text-accent">{value}</p>
      </div>

      <div className="flex items-end gap-2 h-10 pt-2">
        <div className="flex-1 bg-accent/20 rounded-t h-[40%]" />
        <div className="flex-1 bg-accent/40 rounded-t h-[60%]" />
        <div className="flex-1 bg-accent/60 rounded-t h-[80%]" />
        <div className="flex-1 bg-accent rounded-t h-[100%]" />
      </div>
    </div>
  );
}

export function GrowthCard({
  title = "Risk Reduction Index",
  value = "-84%",
}) {
  return (
    <div className="w-[300px] shrink-0 rounded-card bg-[#6D28D9] text-white p-5 shadow-float border border-purple-400/20 flex flex-col justify-between gap-4">
      <div className="flex items-center justify-between">
        <div className="h-7 w-7 rounded-full bg-white text-[#6D28D9] flex items-center justify-center">
          <ShieldCheck className="h-4 w-4" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest bg-white/20 text-white px-2 py-0.5 rounded font-medium">
          VERIFIED
        </span>
      </div>

      <div>
        <p className="text-white/70 text-xs font-sans mb-1">{title}</p>
        <p className="text-3xl font-medium tracking-tight text-white">{value}</p>
      </div>

      <p className="text-[11px] font-mono text-white/70 uppercase tracking-wider">
        Threat Mitigation Complete
      </p>
    </div>
  );
}
