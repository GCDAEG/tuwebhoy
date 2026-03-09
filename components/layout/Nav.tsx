"use client";

import { useEffect, useRef, useState } from "react";
import MobileMenu from "./NavBar/MobileMenu";
import DesktopMenu from "./NavBar/DesktopMenu";
import { sections } from "@/lib/section";
import { useWindowScroll } from "react-use";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";
import { usePathname } from "next/navigation";

export function SectionNavbar() {
  const ref = useRef<HTMLElement>(null);
  const { y } = useWindowScroll();
  const [isScrolled, setisScrolled] = useState<boolean>(false);
  const pathname = usePathname();
  const isGuide = pathname === "/guide";
  /* ---------------------------------------------
     Sección activa (limpio)
  --------------------------------------------- */
  const activeSection = useScrollSpy(sections.map((s) => s.id));

  useEffect(() => {
    setisScrolled(y >= 70);
  }, [y]);
  return (
    <nav ref={ref} className="sticky top-0 z-50 bg-sidebar shadow-sm h-14">
      <DesktopMenu
        sections={sections}
        activeSection={activeSection}
        isScrolled={isScrolled}
        isGuide={isGuide}
        pathname={pathname}
      />

      <MobileMenu
        sections={sections}
        activeSection={activeSection}
        isScrolled={isScrolled}
        isGuide={isGuide}
        pathname={pathname}
      />
    </nav>
  );
}
