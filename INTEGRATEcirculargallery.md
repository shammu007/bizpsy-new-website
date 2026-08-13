# Integrate the curved WebGL card gallery (brand-adapted, for the Hero)

You are integrating an OGL/WebGL curved gallery (`CircularGallery`) into the Hero of this Next.js + TypeScript + Tailwind + framer-motion project (shadcn structure). It renders image planes along a shallow arc that loops seamlessly. Because the planes always face the camera, it does NOT mirror text or zigzag — which is exactly why we're using it. Follow the adaptations below; do not ship the demo as-is.

## Why this component (and its one cost)
- Good: curved, continuous, front-facing loop → no reversed/mirrored cards, no zigzag.
- Cost: OGL renders IMAGE TEXTURES, not React/HTML. So each "card" must be a static image. Live count-ups / hover states inside a card are not possible here — the cards become pictures on the curve. Accept this for the hero backdrop.

## 1. Preconditions (verify, don't recreate)
- shadcn structure: the component imports `cn` from `@/lib/utils`. If that file doesn't exist, run `npx shadcn@latest init` (it creates `lib/utils.ts` with `cn`) or add `cn` manually. Components live in `@/components/ui`; confirm the `@/*` alias in `tsconfig.json`.
- Install dep: `npm i ogl`.
- Tailwind tokens from design.md must exist: `ink #131313`, `accent #D6FD70`, `surface #F2F2F2`, `muted #7B7B7B`, `font-sans` = Plus Jakarta Sans, `font-mono` = Geist Mono.

## 2. Add the component
- `components/ui/circular-gallery.tsx` ← paste the provided `circular-gallery-2.tsx`. Fix the import filename references (`@/components/ui/circular-gallery`).

## 3. Brand the content — make the cards images (not Picsum)
- Create 4 brand dashboard-card images at ~2x resolution (e.g. 700×520 PNG) in `/public/hero-cards/`, NO grayscale, matching design.md tokens:
  - `velocity.png` — dark #131313 card, "Decision Matrix Velocity / 94.8%" + lime progress bar + "+12.4%".
  - `risk.png` — lime #D6FD70 card, "Risk Reduction Index / -84% Anomaly / VERIFIED".
  - `agents.png` — white card, "Active AI Agents / 142 Active / Anomaly Index 0.02%".
  - `roi.png` — dark #131313 card, "Quarterly Yield Acceleration / 3.8x ROI" + lime bars.
  - (If a HeroCards HTML version already exists, render those components to PNG with a one-off `html-to-image` / Playwright screenshot script; otherwise build them as static SVG→PNG. Keep Plus Jakarta Sans + Geist Mono.)
- Pass them as items and set `text: ""` so the Picsum-style caption under each plane is gone:
  ```tsx
  const heroItems = [
    { image: "/hero-cards/velocity.png", text: "" },
    { image: "/hero-cards/risk.png",     text: "" },
    { image: "/hero-cards/agents.png",   text: "" },
    { image: "/hero-cards/roi.png",      text: "" },
  ]
  ```

## 4. Make it loop continuously + STOP the scroll hijack (critical)
The component as written binds GLOBAL `window` `wheel`/`mousewheel`/`mousemove` listeners and only moves on wheel/drag — on a full landing page this hijacks page scrolling and captures the mouse everywhere, and it never auto-loops. Change it:
- Remove the `wheel` and `mousewheel` window listeners (and their handlers) so normal page scroll works.
- Add AUTO-PLAY: in the `update()` loop, continuously advance the scroll each frame, e.g. `this.scroll.target += this.autoSpeed` (add an `autoSpeed` option, default a small value ~0.03). The code already duplicates items (`[...items, ...items]`) for a seamless loop, so this drifts forever with no jump.
- Keep drag-to-nudge (pointer/touch on the CONTAINER, not window where avoidable). Pause auto-play on hover; resume on leave. Respect `prefers-reduced-motion` (freeze auto-play).
- Remove the `onCheck` snap-to-nearest behavior (it's for a stop-on-item gallery; we want continuous drift) — or gate it so it doesn't fight auto-play.

## 5. Match the reference look
- `bend`: shallow arc — start `bend={2}` (reference is a gentle curve, not a deep bowl). Tune 1.5–3.
- `borderRadius={0.06}` for rounded cards.
- Transparent canvas (already `alpha:true`, clearColor 0) so the hero sky shows through — do not add a background.
- Mount in the LOWER half of the Hero, behind/around the headline + CTAs, over the sky.

```tsx
import { CircularGallery } from "@/components/ui/circular-gallery"

<div className="relative mx-auto mt-8 h-[440px] w-full max-w-6xl md:h-[500px]">
  <CircularGallery items={heroItems} bend={2} borderRadius={0.06} scrollEase={0.05} />
</div>
```

## 6. Responsive
- Container defines the size; give it a shorter height under 640px. `dpr` is already capped at 2. Ensure the canvas never causes horizontal overflow and that vertical page scroll still works (see §4).

## Done when
3–4 branded dashboard cards curve along a shallow arc and loop continuously on their own — front-facing, with NO mirrored/reversed cards and NO zigzag — draggable to nudge, over the sky. Page scroll works normally (no wheel hijack), no console errors, no horizontal overflow on mobile.
