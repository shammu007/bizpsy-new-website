# design.md — Aeline-style AI/Consulting Marketing Site

A build brief for an AI coding agent. Recreate the **structure, layout, design system, interactions and motion** of the Aeline reference with **your own branding/content**. This file is the source of truth — you do not need the original site.

> Two things that are NOT part of the design and must NOT be built: the floating "Temlis / Made in Framer" promo overlays on the reference. Ignore them.

---

## 0. Tech Stack (assumed)

- **Next.js 14 (App Router) + TypeScript**
- **Tailwind CSS** (design tokens live in `tailwind.config.ts`)
- **Framer Motion** for scroll reveals, count-ups, marquees, orbit loops
- **next/font** for self-hosted Google fonts (Plus Jakarta Sans, Geist Mono)
- Optional: `react-fast-marquee` (or hand-rolled marquee), `embla-carousel-react` for the testimonials slider

If you prefer Vite + React, keep every component below and drop the `app/` router files for a single `src/main.tsx` + `App.tsx`.

---

## 1. Design Direction (the feel)

High-contrast minimal SaaS: **white canvas, near-black text, one electric lime accent.** Oversized display headings with tight negative tracking (Plus Jakarta Sans), and a mono "engineering" voice (Geist Mono, uppercase, wide tracking) for eyebrows and buttons. Visual interest comes from **stylized fake app-UI cards** that float, tilt, marquee and animate. The signature motion is a **word-by-word scroll reveal** where headings fill from gray → near-black as they enter view. Sections alternate airy white editorial blocks with a few inset rounded panels (sky hero, photo CTA, dark footer).

---

## 2. Design Tokens

### Colors
```
--bg            #FFFFFF   /* page canvas, cards */
--bg-secondary  #F2F2F2   /* service/expertise card surfaces */
--ink           #131313   /* headings, body, dark sections/buttons, footer */
--ink-muted     #7B7B7B   /* secondary/body copy */
--accent        #D6FD70   /* CTA fill, icon chips, on-dark highlight, checks */
--on-accent     #131313   /* text on lime */
--on-dark       #FFFFFF
--card-border   rgba(19,19,19,0.06)
/* photographic only: hero sky-blue gradient (#BFE2FF→#3E9BEA + clouds); CTA nature photo w/ blue overlay */
/* inside mockups: chart blue ~#3FA9F5 */
```

### Typography
- Display/body: **Plus Jakarta Sans** (400 + 500). Labels/buttons: **Geist Mono** (400).
- Tracking: **-0.06em** on display sizes, **-0.02em** on body, **+0.12em UPPERCASE** on mono labels.
- Headings weight **500** (never 700).

| Role | Size / LH | Weight | Tracking | Color |
|---|---|---|---|---|
| H1 hero | 60 / 72 | 500 | -3.6px | white on sky |
| H2 section | 48 / 56 | 500 | -2.88px | #131313 |
| H3 card | 24 / 32 | 500 | -0.96px | #131313 |
| Price | 40 / 52 | 500 | -2.4px | #131313 |
| Body/subhead | 16 / 24 | 400 | -0.32px | #131313 or #7B7B7B |
| Quote | 20 / 28 | 500 | -0.8px | white |
| Eyebrow / button | 14 (12 on small btns) | 400 | 1.68px UPPERCASE | dark, or lime on dark |

### Spacing / Radius / Shadow
```
container max-width  1200px      gutters ~36px
section padding-y    ~120px      grid gap ~24px
radius: pill 48px | card 12px | large panel 16–24px | icon chip 12–14px
shadow (cards)   0 3px 6px rgba(0,0,0,.06)
shadow (mockups) 0 20px 40px rgba(0,0,0,.12)   (soft, large)
```

### Tailwind theme (drop into `tailwind.config.ts` → theme.extend)
```ts
colors: { ink:'#131313', muted:'#7B7B7B', surface:'#F2F2F2', accent:'#D6FD70' },
fontFamily: { sans:['var(--font-jakarta)'], mono:['var(--font-geist-mono)'] },
borderRadius: { pill:'48px', card:'12px', panel:'24px' },
maxWidth: { container:'1200px' },
boxShadow: { card:'0 3px 6px rgba(0,0,0,.06)', float:'0 20px 40px rgba(0,0,0,.12)' },
```

---

## 3. Page Structure (top → bottom)

1. **Navbar** — fixed floating frosted pill; logo left, "CONTACT US" lime pill + hamburger right; **auto-hides on scroll-down, returns on scroll-up**. Hamburger menu: Home, About us, Services, Blog, Contact.
2. **Hero** — rounded sky/cloud panel; centered H1 (line 2 in softer white), subhead, GET STARTED (lime) + VIEW DEMO (dark translucent); **horizontal marquee of floating UI-mockup cards**; "Rated 4.9/5…" + 5 stars.
3. **Logo strip** — infinite marquee of monochrome partner logos.
4. **About** — eyebrow + word-reveal H2 (with inline lime icon chips) + asymmetric **stat cluster** with **count-up** metrics (%, k+, +) and an avatar testimonial snippet.
5. **Services** — eyebrow + word-reveal H2 + subhead + lime CTA; **3 cards in one surface container split by dividers** (icon chip → H3 → muted body). Titles: AI Strategy, Business Consulting, Data & Insights.
6. **Expertise** — eyebrow + word-reveal H2 + subhead; **2×2 grid of large `#F2F2F2` feature cards**, each = animated **dark UI mockup** on top + H3 + body. (Automation & optimization; Data analytics & insights; Digital transformation; Experience intelligence — incl. **orbiting avatars** + **tilted rotating word-cards** + count-ups.)
7. **Pricing** — eyebrow + word-reveal H2 + subhead + lime CTA; **3 plan cards side-by-side (collapse to 1 col on narrow)**. Starter / Growth (featured, dark filled checks) / Enterprise. Each: icon chip + mono plan name, description, big price + /month, check-list, full-width dark GET STARTED.
8. **Testimonials** — eyebrow + H2 + subhead + prev/next circular arrows; **horizontal carousel of tall portrait cards** (partner logo corner, quote-mark glyph, white quote + Name, Company). Auto-advance + manual.
9. **Blog** — eyebrow + H2 + subhead + "VIEW ALL"; **2×2 grid of image cards** with dark bottom scrim + white title. Hover → image zoom.
10. **CTA banner** — inset rounded **nature photo panel** w/ blue overlay; "Trusted over 5,000+" + avatar stack; word-reveal white H2; body; lime GET STARTED.
11. **Footer** — dark `#131313` rounded block; logo + tagline + newsletter input w/ lime SUBMIT pill (left); two link columns (Home/About/Services · Pricing/Blog/Contact); copyright.

---

## 4. Component ↔ File map (reusable)

- **Button** (`variant: primary | dark | translucent | text`, optional trailing circular ↗ arrow node). Pill radius 48px, mono uppercase label.
- **Eyebrow** — "▪ LABEL" small square + mono uppercase; dark on light / lime on dark.
- **IconChip** — ~44px lime rounded square, dark glyph.
- **RevealHeading** — wraps each word in a span; drives `color` gray→ink from element scroll progress (`useScroll` + `useTransform`, or GSAP ScrollTrigger). **Build this first — it's the signature.**
- **CountUp** — tween 0→target on in-view (fires once).
- **Marquee** — infinite translateX loop (hero cards + logo strip), linear, ~20–40s, edge fade masks.
- **Card / FeatureCard / PriceCard / TestimonialCard / BlogCard** — see tokens.
- **OrbitAvatars**, **BarChartCard**, **TransactionCard**, **GrowthCard** — the fake mockups.
- **AvatarStack**, **RatingStars**, **CheckItem** (dark circle + ✓), **CarouselArrows**, **NewsletterInput**.

Every section opens with: centered `Eyebrow` → `RevealHeading` (H2) → ~560px centered subhead → (some) centered lime CTA.

---

## 5. Animation checklist (Framer Motion)

1. **Word-by-word heading reveal** — every H2 + hero line 2 (gray→#131313, scroll-linked, L→R). *Highest priority.*
2. **Count-up numbers** — About stats + Expertise mockups; on in-view, ~1–1.5s ease-out.
3. **Hero UI-card marquee** + **logo marquee** — infinite linear translateX.
4. **Testimonial carousel** — auto-advance + prev/next.
5. **Orbit avatars** + **tilted word-card rotation/shuffle** — slow continuous loops in Expertise.
6. **On-entry fade/slide-up** — headings/cards translateY(24px)+opacity, staggered, ~500–700ms ease-out.
7. **Navbar auto-hide** — translateY(0 ↔ -100%) on scroll-direction change, ~300ms.
8. **Button hover** — bg tint + scale ~1.02 + arrow node nudge ↗.
9. **Blog card hover** — image zoom within rounded mask + scrim darken.

---

## 6. Responsive

- **≥1200px:** 1200px container; pricing 3-up; Expertise/Blog 2×2; Services 3-col.
- **~810px:** grids → 2-col then begin stacking; type scales down (H1 ~44–48, H2 ~36–40).
- **≤430px:** everything 1-col, full-width cards; H1 ~34–40; CTAs full-width; navbar pill full-width-inset, full-screen hamburger menu; marquees keep looping with fewer items.
- Navbar is hamburger-driven at **all** widths.

---

## 7. Assets to create (placeholders first, swap later)

Logo mark + wordmark (dark + light) · sky/cloud hero bg · fake UI mockup cards (dashboard, transaction list, bar chart, calendar/messages, performance, avatar orbit, timeline, growth) · mono partner logos · portrait photos (testimonials) · article thumbnails · nature/field CTA photo · circular avatars · SVG icon set (chips, checks, ↗ arrows, stars, quote marks, hamburger). No video / canvas / 3D — depth is tilt + soft shadow on flat cards.

---

## 8. Build order

1. Scaffold Next.js + Tailwind + fonts + tokens (`globals.css`, `tailwind.config.ts`).
2. Primitives: `Button`, `Eyebrow`, `IconChip`, `RevealHeading`, `CountUp`, `Marquee`.
3. `Navbar` + `Footer` (layout shell).
4. Sections in order: Hero → LogoStrip → About → Services → Expertise → Pricing → Testimonials → Blog → CtaBanner.
5. Mockup components + carousel + orbit loops.
6. Responsive pass, then swap placeholder assets/content in `lib/data.ts`.
