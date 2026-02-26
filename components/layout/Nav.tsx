"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "./NavBar/MobileMenu";
import DesktopMenu from "./NavBar/DesktopMenu";
import { sections } from "@/lib/section";
import { usePathname } from "next/navigation";

const NAVBAR_HEIGHT = 56;
const SCROLL_THRESHOLD = 100;

export function SectionNavbar() {
  const [activeSection, setActiveSection] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  // const observerRef = useRef<IntersectionObserver | null>(null);

  /* ---------------------------------------------
     Scroll suave
  --------------------------------------------- */
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  /* ---------------------------------------------
     Resolver sección activa según ruta
  --------------------------------------------- */
  const resolvedActiveSection = (() => {
    if (pathname.startsWith("/guide")) return "domain-guide";
    if (pathname === "/terminos") return "terminos";
    return activeSection;
  })();

  /* ---------------------------------------------
     Altura dinámica del navbar
  --------------------------------------------- */
  useEffect(() => {
    let rafId: number;

    const update = () => {
      if (ref.current) {
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${ref.current.offsetHeight}px`,
        );
      }
    };

    const debouncedUpdate = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    const ro = new ResizeObserver(debouncedUpdate);
    if (ref.current) ro.observe(ref.current);

    window.addEventListener("resize", debouncedUpdate);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", debouncedUpdate);
      cancelAnimationFrame(rafId);
    };
  }, []);

  /* ---------------------------------------------
     IntersectionObserver (CLAVE DEL FIX)
  --------------------------------------------- */
  useEffect(() => {
    // if (!pathname.startsWith("/") || pathname.startsWith("/guias")) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length === 0) return;

        const mostVisible = visibleEntries.reduce((prev, curr) =>
          curr.intersectionRatio > prev.intersectionRatio ? curr : prev,
        );

        const newId = mostVisible.target.id;

        // Debounce: solo actualizamos si pasa 80-120ms sin cambios
        // if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
          setActiveSection(newId);
        }, 80); // ← prueba entre 60-150ms, 80 suele ser dulce spot
      },
      {
        threshold: [0.4, 0.45, 0.5, 0.6],
        rootMargin: `-${NAVBAR_HEIGHT + 20}px 0px -20% 0px`,
      },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [pathname]);

  /* ---------------------------------------------
     Scroll > threshold
  --------------------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // useEffect(() => {
  //   const resetActiveSection = () => {
  //     setActiveSection("hero");
  //   };
  //   const activeGuide = () => {
  //     setActiveSection("domain-guide");
  //   };
  //   if (pathname.startsWith("/") && !pathname.startsWith("/guias")) {
  //     resetActiveSection();
  //   }
  //   if (pathname.startsWith("/guide")) {
  //     activeGuide();
  //   }
  // }, [pathname]);
  return (
    <div ref={ref} className="sticky top-0 z-50 bg-sidebar shadow-sm">
      <DesktopMenu
        activeSection={resolvedActiveSection}
        scrollToSection={scrollToSection}
        sections={sections}
        isScrolled={isScrolled}
      />

      <MobileMenu
        activeSection={resolvedActiveSection}
        scrollToSection={scrollToSection}
        sections={sections}
        isScrolled={isScrolled}
      />
    </div>
  );
}
