import React from "react";
import { Star } from "lucide-react";
import { clsx } from "clsx";

export interface RatingStarsProps {
  score?: string;
  text?: string;
  count?: number;
  className?: string;
}

export function RatingStars({
  score = "4.9",
  text = "Rated 4.9/5 by 120+ Growth Teams",
  count = 5,
  className,
}: RatingStarsProps) {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-3 rounded-full bg-black/10 backdrop-blur-md px-4 py-2 text-black border border-black/15 shadow-card select-none text-[13px]",
        className
      )}
    >
      <div className="flex items-center gap-1 text-accent">
        {Array.from({ length: count }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-accent stroke-accent"
          />
        ))}
      </div>
      <span className="font-sans font-medium text-black">{text}</span>
    </div>
  );
}
