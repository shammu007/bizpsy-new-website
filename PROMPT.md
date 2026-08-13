# PROMPT.md — Kickoff instructions for the coding agent

You are building a marketing website. **`design.md` in this repo is the source of truth** for structure, layout, design tokens, components, and animations. Read it fully before writing code and follow it precisely. This file tells you *how to work*.

## Tech stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (put all tokens from `design.md` §2 into `tailwind.config.ts`)
- Framer Motion for all animation
- `next/font` for self-hosted fonts: **Plus Jakarta Sans** (400, 500) + **Geist Mono** (400)
- Testimonials slider: `embla-carousel-react`. Marquees: hand-rolled with Framer Motion (or `react-fast-marquee`).

## Non-negotiable rules
1. **All copy and image references live in `lib/data.ts` as placeholder content.** Components must be content-free — they receive data via props or import from `data.ts`. Do NOT hardcode text/images into JSX. (I will swap in real branded content later by editing only `data.ts`.)
2. Use the reference **section counts exactly**: 3 services, 3 pricing tiers, 4 testimonials, 4 blog cards, 2 hero CTAs. Do not add or remove sections or change these counts.
3. Use the exact **design tokens** from `design.md` §2 (colors, type scale, tracking, radii, shadows, spacing). Headings are Plus Jakarta Sans weight **500** with tight negative tracking; eyebrows/buttons are Geist Mono uppercase.
4. **Do NOT** build the "Temlis" or "Made in Framer" promo overlays — they are not part of the design.
5. Keep everything responsive per `design.md` §6. Navbar is hamburger-driven at all widths.
6. Use placeholder images (solid color blocks, `/public/images/*` stubs, or a placeholder service) so nothing 404s. Note each spot in `data.ts` where a real asset goes.

## Animations (priority order — build the primitives first)
1. `RevealHeading` — word-by-word scroll reveal, each word wrapped in a span, color tweens gray→`#131313` driven by scroll progress. **This is the signature effect — build and verify it first.**
2. `CountUp` — number tween 0→target, fires once on in-view.
3. `Marquee` — infinite linear translateX (hero UI cards + logo strip), edge fade masks.
4. Testimonial carousel (auto-advance + prev/next arrows).
5. Orbiting avatars + tilted rotating word-cards in the Expertise mockups.
6. On-entry fade/slide-up (translateY 24px + opacity), staggered.
7. Navbar auto-hide (translateY 0 ↔ -100% on scroll direction).
8. Button hover (bg tint + scale 1.02 + trailing ↗ arrow nudge).

## Build order — STOP for my review where noted
1. Scaffold the project: Next.js + Tailwind + fonts + tokens (`globals.css`, `tailwind.config.ts`). Set up `lib/data.ts` with placeholder content for every section.
2. Build the `ui/` primitives: `Button`, `Eyebrow`, `IconChip`, `RevealHeading`, `CountUp`, `Marquee`, `Card`, `CheckItem`, `AvatarStack`, `RatingStars`, `CarouselArrows`.
3. Build `Navbar` + `Hero` + one content section (`Services`).
   → **⏸ STOP HERE. Run the dev server and tell me it's ready so I can review the look, type, spacing, and the word-reveal motion before you continue.** Do not build the remaining sections yet.
4. After my go-ahead: build the rest in order — LogoStrip → About → Expertise → Pricing → Testimonials → Blog → CtaBanner → Footer.
5. Build the mockup components (`DashboardCard`, `TransactionCard`, `BarChartCard`, `GrowthCard`, `OrbitAvatars`) — stub them simply first, enrich after.
6. Full responsive pass (desktop → tablet → mobile).

## Definition of done (for the shell)
- All 11 sections render top-to-bottom matching `design.md` structure, with placeholder content from `data.ts`.
- Signature animations working: word-reveal headings, count-ups, both marquees, testimonial carousel, navbar auto-hide, button hovers.
- No console errors, no 404s, responsive at ~1200 / ~810 / ~390 px.
- All swappable text/images centralized in `lib/data.ts`.

Start with step 1. Confirm your understanding of these rules in one short paragraph, then begin.
