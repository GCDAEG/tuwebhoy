"use client";

import { useRef, useMemo } from "react";
import MobileMenu from "./NavBar/MobileMenu";
import DesktopMenu from "./NavBar/DesktopMenu";
import { sections } from "@/lib/section";
import { useWindowScroll } from "react-use";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";
import { usePathname } from "next/navigation";

export function SectionNavbar() {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const { y } = useWindowScroll();

  // Obtenemos los IDs para el scroll spy solo de las secciones que son tipo 'scroll'
  const sectionIds = useMemo(
    () => sections.filter((s) => s.type === "scroll").map((s) => s.id),
    [],
  );

  const activeSection = useScrollSpy(sectionIds);

  return (
    <header
      ref={ref}
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b h-20 bg-background`}
    >
      <DesktopMenu sections={sections} activeSection={activeSection} />

      <MobileMenu sections={sections} activeSection={activeSection} />
    </header>
  );
}
