import { Activity, BarChart3, ShieldCheck, TrendingUp } from "lucide-react"
import type { ReactNode } from "react"

// Brand-adapted hero dashboard cards (swap copy/values for your studio in one place).
// Relies on Tailwind tokens from design.md: ink #131313, accent #D6FD70,
// surface #F2F2F2, muted #7B7B7B, plus font-sans (Plus Jakarta Sans) / font-mono (Geist Mono).

const cardBase =
  "flex h-[260px] w-[300px] flex-col justify-between rounded-2xl p-6 shadow-[0_24px_48px_rgba(0,0,0,0.14)]"
const eyebrow = "font-mono text-[11px] uppercase tracking-[0.12em]"

function VelocityCard() {
  return (
    <div className={`${cardBase} bg-ink text-white`}>
      <div className="flex items-center justify-between">
        <span className={`${eyebrow} text-white/50`}>Optimized</span>
        <span className={`${eyebrow} flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-accent`}>
          <TrendingUp className="h-3 w-3" /> +12.4%
        </span>
      </div>
      <div>
        <p className="text-sm text-white/60">Decision Matrix Velocity</p>
        <p className="font-sans text-5xl font-medium tracking-tight">94.8%</p>
      </div>
      <div className="h-2 w-full rounded-full bg-white/10">
        <div className="h-full w-[85%] rounded-full bg-accent" />
      </div>
    </div>
  )
}

function AgentsCard() {
  return (
    <div className={`${cardBase} bg-white text-ink`}>
      <div className="flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface">
          <Activity className="h-4 w-4 text-ink" />
        </span>
        <span className={`${eyebrow} rounded-md bg-ink px-2 py-1 text-accent`}>Real-time</span>
      </div>
      <div className="text-center">
        <p className="text-sm text-muted">Active AI Agents</p>
        <p className="font-sans text-4xl font-medium tracking-tight">142 Active</p>
      </div>
      <div className="flex items-center justify-between border-t border-black/5 pt-4 text-sm">
        <span className="text-muted">Anomaly Index</span>
        <span className="font-mono text-emerald-600">0.02% (Optimal)</span>
      </div>
    </div>
  )
}

function RoiCard() {
  return (
    <div className={`${cardBase} bg-ink text-white`}>
      <div className="flex items-center justify-between">
        <span className={`${eyebrow} text-white/50`}>Executive Summary</span>
        <BarChart3 className="h-4 w-4 text-white/60" />
      </div>
      <div>
        <p className="text-sm text-white/60">Quarterly Yield Acceleration</p>
        <p className="font-sans text-5xl font-medium tracking-tight text-accent">3.8x ROI</p>
      </div>
      <div className="flex h-14 items-end gap-2">
        {[30, 44, 58, 50, 64].map((h, i) => (
          <div key={i} className="flex-1 rounded-md bg-accent/80" style={{ height: h }} />
        ))}
      </div>
    </div>
  )
}

function RiskCard() {
  return (
    <div className={`${cardBase} bg-accent text-ink`}>
      <div className="flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink">
          <ShieldCheck className="h-4 w-4 text-accent" />
        </span>
        <span className={`${eyebrow} rounded-md bg-ink/10 px-2 py-1`}>Verified</span>
      </div>
      <div>
        <p className="text-sm text-ink/60">Risk Reduction Index</p>
        <p className="font-sans text-5xl font-medium tracking-tight">-84% Anomaly</p>
      </div>
      <p className={`${eyebrow} text-ink/70`}>Threat Mitigation Complete</p>
    </div>
  )
}

export const heroCards: ReactNode[] = [
  <VelocityCard key="velocity" />,
  <AgentsCard key="agents" />,
  <RoiCard key="roi" />,
  <RiskCard key="risk" />,
]
