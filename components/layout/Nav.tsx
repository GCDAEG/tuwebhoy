"use client";

import { useRef, useMemo } from "react";
import MobileMenu from "./NavBar/MobileMenu";
import DesktopMenu from "./NavBar/DesktopMenu";
import { sections } from "@/lib/section";
import { useWindowScroll } from "react-use";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function SectionNavbar() {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const { y } = useWindowScroll();

  // Detectamos si el usuario hizo scroll (más de 50px)
  const isScrolled = y > 50;

  const sectionIds = useMemo(
    () => sections.filter((s) => s.type === "scroll").map((s) => s.id),
    [],
  );

  const activeSection = useScrollSpy(sectionIds);

  return (
    <header
      ref={ref}
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "h-20 bg-background border-b border-border shadow-sm"
          : "h-24 bg-transparent border-transparent",
      )}
    >
      <DesktopMenu
        sections={sections}
        activeSection={activeSection}
        isScrolled={isScrolled}
      />

      <MobileMenu
        sections={sections}
        activeSection={activeSection}
        isScrolled={isScrolled}
      />
    </header>
  );
}
