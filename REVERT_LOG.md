# BizPsy Project — Revert & Version Log

This document lists all snapshot checkpoints and exact commands to safely revert your code whenever a mistake is made.

---

## 📌 Checkpoint History

### `v0.3-about-highlight-footer-complete` (Current Active State)
- **Included Features**:
  - 4K Ultra-Sharp Hero Card Assets (`velocity.svg`, `risk.svg`, `agents.svg`, `roi.svg`) + WebGL Anisotropic Texture Filtering (`EXT_texture_filter_anisotropic`).
  - Photorealistic Sky & Cloud Hero Background (`/images/hero-sky-bg.jpg`) with rating badge positioned below 3D cards.
  - Interactive **About Us** Section (`About.tsx`) with Bento Grid layout, custom inline icon chips (`Clock`, `Lightbulb`), and `RevealHeading` scroll-driven word reveal effect.
  - Photographic **Highlight Banner** (`HighlightBanner.tsx`) with meadow landscape (`/images/banner-landscape.jpg`) placed below Services.
  - Dark Rounded **Footer** Section (`Footer.tsx`) with quick links, brand tagline, pill newsletter form, and copyright.
  - Verified clean production build (`npx next build --webpack`) with 0 errors.

### `v0.2-webgl-circular-gallery`
- **Tag**: `v0.2-webgl-circular-gallery`
- **Commit**: WebGL Curved Card Gallery Integration & Hero Alignment
- **Included Features**:
  - WebGL OGL continuous curved card gallery ([`circular-gallery.tsx`](file:///Users/mohammedameenuddin/BizPsy/components/ui/circular-gallery.tsx)).
  - 4 high-res vector card textures in [`/public/hero-cards/`](file:///Users/mohammedameenuddin/BizPsy/public/hero-cards/) (`velocity.svg`, `risk.svg`, `agents.svg`, `roi.svg`).
  - Zero window scroll hijacking (natural page scroll intact).
  - Shallow smile arc (`bend={3}`), distinct gap spacing (`2.25`), and enlarged card dimensions (`2.85 x 2.0`).
  - Elevated Y position (`mesh.position.y = 0.75`) sitting directly below GET STARTED / VIEW DEMO buttons with zero gap.
  - Verified clean production build (`npx next build --webpack`) with 0 errors.

### `v0.1-hero-checkpoint` (Baseline Hero Shell)
- **Tag**: `v0.1-hero-checkpoint`
- **Commit**: Initial working project shell
- **Included Features**:
  - Next.js 14 App Router + Tailwind CSS tokens + Plus Jakarta Sans & Geist Mono fonts.
  - Centralized content-free data structure in [`lib/data.ts`](file:///Users/mohammedameenuddin/BizPsy/lib/data.ts).
  - Floating frosted glass [`Navbar`](file:///Users/mohammedameenuddin/BizPsy/components/sections/Navbar.tsx) with scroll auto-hide & full-screen menu drawer.
  - Rounded sky panel [`Hero`](file:///Users/mohammedameenuddin/BizPsy/components/sections/Hero.tsx).
  - Continuous progressive fan/arc [`HeroMarquee`](file:///Users/mohammedameenuddin/BizPsy/components/ui/HeroMarquee.tsx) primitive.
  - Unified surface [`Services`](file:///Users/mohammedameenuddin/BizPsy/components/sections/Services.tsx) section with dividers.
  - Signature word-by-word scroll reveal [`RevealHeading`](file:///Users/mohammedameenuddin/BizPsy/components/ui/RevealHeading.tsx).

---

## ⏪ How to Revert Mistakes

### Option 1: Undo Uncommitted Changes (Discard recent edits)
If you made edits that broke something and haven't committed yet:
```bash
# Discard all changes in all files and return to the last good checkpoint
git reset --hard HEAD
```

### Option 2: Revert Single Specific File
If only one file has an error (e.g. `lib/data.ts` or `app/page.tsx`):
```bash
# Restore a specific file back to the last working checkpoint
git checkout HEAD -- lib/data.ts
```

### Option 3: Return to any Tagged Checkpoint
If you want to jump straight back to a specific tagged checkpoint:
```bash
# Return to current WebGL circular gallery checkpoint
git reset --hard v0.2-webgl-circular-gallery

# Return to baseline Hero marquee checkpoint
git reset --hard v0.1-hero-checkpoint
```

### Option 4: Temporarily Stash Edits (Experiment Safely)
If you want to try something risky without losing your current code:
```bash
# Save your uncommitted work to a temporary shelf
git stash

# Pop your stashed work back whenever you are ready
git stash pop
```

---

## 🛠 Project File Map & References
- **All Content/Copy**: [`lib/data.ts`](file:///Users/mohammedameenuddin/BizPsy/lib/data.ts)
- **WebGL Gallery Logic**: [`components/ui/circular-gallery.tsx`](file:///Users/mohammedameenuddin/BizPsy/components/ui/circular-gallery.tsx)
- **Hero Section**: [`components/sections/Hero.tsx`](file:///Users/mohammedameenuddin/BizPsy/components/sections/Hero.tsx)
- **Main Layout**: [`app/layout.tsx`](file:///Users/mohammedameenuddin/BizPsy/app/layout.tsx)
- **Design Specs**: [`design.md`](file:///Users/mohammedameenuddin/BizPsy/design.md)
