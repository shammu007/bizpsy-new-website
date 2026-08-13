"use client";

import {
  memo,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type UseMediaQueryOptions = {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
};
const IS_SERVER = typeof window === "undefined";

export function useMediaQuery(
  query: string,
  { defaultValue = false, initializeWithValue = true }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (q: string) =>
    IS_SERVER ? defaultValue : window.matchMedia(q).matches;
  const [matches, setMatches] = useState<boolean>(() =>
    initializeWithValue ? getMatches(query) : defaultValue
  );
  const handleChange = () => setMatches(getMatches(query));
  useIsomorphicLayoutEffect(() => {
    const mm = window.matchMedia(query);
    handleChange();
    mm.addEventListener("change", handleChange);
    return () => mm.removeEventListener("change", handleChange);
  }, [query]);
  return matches;
}

const Carousel = memo(function Carousel({
  cards,
  autoRotate,
  speed,
  rotation,
}: {
  cards: ReactNode[];
  autoRotate: boolean;
  speed: number;
  rotation: MotionValue<number>;
}) {
  const isSm = useMediaQuery("(max-width: 640px)");
  const cylinderWidth = isSm ? 1000 : 1600;
  const faceCount = Math.max(cards.length, 1);
  const faceWidth = cylinderWidth / faceCount;
  const radius = cylinderWidth / (2 * Math.PI);
  const transform = useTransform(rotation, (v) => `rotate3d(0, 1, 0, ${v}deg)`);
  const reduce = useReducedMotion();

  const [paused, setPaused] = useState(false);
  const dragging = useRef(false);
  const lastX = useRef(0);

  // Idle drift — smooth, constant-velocity auto-rotate.
  useAnimationFrame((_, delta) => {
    if (!autoRotate || paused || dragging.current || reduce) return;
    rotation.set(rotation.get() + (delta / 1000) * speed);
  });

  // Manual drag rotates the cylinder without physically translating it.
  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    lastX.current = e.clientX;
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    rotation.set(rotation.get() + dx * 0.15);
  };
  const endDrag = () => {
    dragging.current = false;
  };

  return (
    <div
      className="flex h-full items-center justify-center select-none"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
        style={{
          transform,
          width: cylinderWidth,
          transformStyle: "preserve-3d",
          touchAction: "pan-y",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="absolute flex h-full origin-center items-center justify-center p-2"
            style={{
              width: `${faceWidth}px`,
              transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
            }}
          >
            <div className="pointer-events-none w-full select-none">{card}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
});

type ThreeDCardCarouselProps = {
  /** Each face is a React node — pass your own card components. */
  cards: ReactNode[];
  /** Continuous idle drift. Default true. */
  autoRotate?: boolean;
  /** Degrees per second for the idle drift (~7 ≈ 50s per loop). */
  speed?: number;
  className?: string;
};

export function ThreeDCardCarousel({
  cards,
  autoRotate = true,
  speed = 7,
  className,
}: ThreeDCardCarouselProps) {
  const rotation = useMotionValue(0);
  return (
    <div className={className}>
      <div className="relative h-[420px] w-full overflow-hidden md:h-[500px]">
        <Carousel
          cards={cards}
          autoRotate={autoRotate}
          speed={speed}
          rotation={rotation}
        />
      </div>
    </div>
  );
}
