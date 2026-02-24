"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  size: "screen" | "content";
  lazy?: boolean;
  animate?: boolean;
  threshold?: number;
};

export function Section({
  id,
  className,
  children,
  size,
  lazy = true,
  animate = false,
  threshold = 0.1,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: threshold,
  });

  const shouldRender = lazy ? isInView : true;

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        `
        px-5 md:px-6 lg:px-28
        relative w-full flex
        ${
          size === "screen"
            ? "min-h-[calc(100vh-var(--navbar-height))] scroll-mt-(--navbar-height)"
            : "h-fit"
        }
        `,
        animate && isInView && "animate-fade-in",
        className,
      )}
    >
      {shouldRender ? children : null}
    </section>
  );
}
