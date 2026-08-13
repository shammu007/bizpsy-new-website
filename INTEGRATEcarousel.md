# Integrate the 3D card carousel (brand-adapted, finished code)

You are adding a 3D auto-rotating card carousel to the Hero of this Next.js + TypeScript + Tailwind + framer-motion project (shadcn-style structure). The code is already written and correct — your job is to place it, install deps, and wire it into the Hero. Do NOT rewrite the component logic.

## 1. Preconditions (verify, don't recreate)
- Components live in `@/components/ui`. If shadcn isn't initialized, run `npx shadcn@latest init` and confirm the `@/*` path alias in `tsconfig.json`. This matters because the carousel is imported as `@/components/ui/3d-carousel`; without the alias + folder, that import fails.
- Install deps: `npm i framer-motion lucide-react` (framer-motion may already be present).
- Tailwind must expose these tokens (from design.md): colors `ink #131313`, `accent #D6FD70`, `surface #F2F2F2`, `muted #7B7B7B`, and `fontFamily.sans` = Plus Jakarta Sans, `fontFamily.mono` = Geist Mono. If any are missing, add them to `tailwind.config.ts` before proceeding.

## 2. Add the files exactly as provided
- `components/ui/3d-carousel.tsx`  → paste `3d-carousel.tsx`
- `lib/hero-cards.tsx`             → paste `hero-cards.tsx`

## 3. Use it in the Hero
Import and drop it into the lower half of the Hero, layered over the sky background behind/around the headline and CTAs:

```tsx
import { ThreeDCardCarousel } from "@/components/ui/3d-carousel"
import { heroCards } from "@/lib/hero-cards"

// inside the Hero JSX, below the headline + CTAs:
<ThreeDCardCarousel
  cards={heroCards}
  autoRotate
  speed={7}                 // ~50s per loop; lower = slower/calmer
  className="mx-auto mt-10 w-full max-w-5xl"
/>
```

## 4. Behavior (already built in — just confirm it works)
- Slow continuous auto-drift (constant velocity, GPU transforms).
- Drag / swipe to spin; auto-drift pauses on hover and while dragging, resumes after.
- Respects `prefers-reduced-motion` (freezes the drift).
- Responsive: narrower cylinder + shorter height under 640px; `touch-action: pan-y` so vertical page scroll still works on mobile.
- No stock images, no Radix colors, no lightbox.

## 5. To rebrand later
All card copy/values/colors live in `lib/hero-cards.tsx` (VelocityCard / AgentsCard / RoiCard / RiskCard). Edit there only — the carousel itself is content-agnostic. Add or remove cards by editing the `heroCards` array; the cylinder re-spaces itself automatically.

## Done when
The Hero shows 3–4 branded dashboard cards rotating slowly on a curved 3D ring over the sky, draggable, pausing on hover, with no console errors and no horizontal overflow on mobile.
