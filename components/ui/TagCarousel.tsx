"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type TagCarouselProps = {
  tags: string[];
  size?: "sm" | "md";
};

export function TagCarousel({ tags, size = "md" }: TagCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    updateScrollState();
  }, [tags]);

  const scrollBy = (offset: number) => {
    scrollRef.current?.scrollBy({
      left: offset,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mt-4 flex items-center border">
      {/* Flecha izquierda */}
      {canScrollLeft && (
        <button
          onClick={() => scrollBy(-160)}
          className="
            absolute left-0 z-10 h-full
            flex items-center
            bg-linear-to-r from-background via-background to-transparent
            px-1
          "
          aria-label="Scroll izquierda"
        >
          <ChevronLeft className="h-4 w-4 text-muted-foreground" />
        </button>
      )}

      {/* Tags */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="
          flex gap-2
          overflow-hidden
          px-6
        "
      >
        {tags.map((tag) => (
          <span
            key={tag}
            className={cn(
              `
              shrink-0 whitespace-nowrap rounded-full
              border border-border
              bg-muted text-muted-foreground
              font-medium
            `,
              size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm",
            )}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Flecha derecha */}
      {canScrollRight && (
        <button
          onClick={() => scrollBy(160)}
          className="
            absolute right-0 z-10 h-full
            flex items-center
            bg-linear-to-l from-background via-background to-transparent
            px-1
          "
          aria-label="Scroll derecha"
        >
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </button>
      )}
    </div>
  );
}
