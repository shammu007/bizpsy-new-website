# BizPsy Project — Revert & Version Log

This document lists all snapshot checkpoints and exact commands to safely revert your code whenever a mistake is made.

---

## 📌 Checkpoint History

### `v0.1-hero-checkpoint` (Current Working State)
- **Tag**: `v0.1-hero-checkpoint`
- **Commit**: Initial working project shell
- **Included Features**:
  - Next.js 14 App Router + Tailwind CSS tokens + Plus Jakarta Sans & Geist Mono fonts.
  - Centralized content-free data structure in [`lib/data.ts`](file:///Users/mohammedameenuddin/BizPsy/lib/data.ts).
  - Floating frosted glass [`Navbar`](file:///Users/mohammedameenuddin/BizPsy/components/sections/Navbar.tsx) with scroll auto-hide & full-screen menu drawer.
  - Rounded sky panel [`Hero`](file:///Users/mohammedameenuddin/BizPsy/components/sections/Hero.tsx).
  - Auto-rotating interactive 3D cylinder [`ThreeDCardCarousel`](file:///Users/mohammedameenuddin/BizPsy/components/ui/3d-carousel.tsx) with branded dashboard cards in [`lib/hero-cards.tsx`](file:///Users/mohammedameenuddin/BizPsy/lib/hero-cards.tsx).
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

### Option 3: Return to the `v0.1-hero-checkpoint` Tag
If you made multiple commits and want to jump straight back to this exact baseline checkpoint:
```bash
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
- **Hero 3D Cards**: [`lib/hero-cards.tsx`](file:///Users/mohammedameenuddin/BizPsy/lib/hero-cards.tsx)
- **3D Carousel Logic**: [`components/ui/3d-carousel.tsx`](file:///Users/mohammedameenuddin/BizPsy/components/ui/3d-carousel.tsx)
- **Main Layout**: [`app/layout.tsx`](file:///Users/mohammedameenuddin/BizPsy/app/layout.tsx)
- **Design Specs**: [`design.md`](file:///Users/mohammedameenuddin/BizPsy/design.md)
