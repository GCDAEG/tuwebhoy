"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "./NavBar/MobileMenu";
import DesktopMenu from "./NavBar/DesktopMenu";
import { sections } from "@/lib/section";

const NAVBAR_HEIGHT = 56;
const SCROLL_THRESHOLD = 100; // píxeles de scroll para activar el modo "scrolled"

export function SectionNavbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Scroll suave restando altura del navbar
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Actualizar altura del navbar en resize
  useEffect(() => {
    const updateNavbarHeight = () => {
      if (ref.current) {
        const height = ref.current.offsetHeight;
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${height}px`,
        );
        console.log("Altura actualizada:", height); // ← para debuggear
      }
    };

    // Ejecutar inmediatamente al montar
    updateNavbarHeight();

    // Observar cambios en el tamaño del navbar (cuando banner entra/sale)
    const resizeObserver = new ResizeObserver(updateNavbarHeight);
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    // También escuchar scroll (por si hay algún cambio sutil)
    window.addEventListener("scroll", updateNavbarHeight);

    // Y resize de ventana (ya lo tenías)
    window.addEventListener("resize", updateNavbarHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", updateNavbarHeight);
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);

  // Detectar sección activa con IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: [0.4] },
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Detectar scroll > threshold (con throttle suave)
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Verificar al montar (por si ya está scrolleado)
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.div
      ref={ref}
      animate={{
        // Fondo base: siempre el color de --sidebar (que cambia según light/dark)
        backgroundColor: isScrolled ? "var(--sidebar)" : "",

        // Opacidad: baja cuando NO está scrolleado (banner visible), completa cuando sí
        opacity: isScrolled ? 1 : 0.92, // 0.92 = 92% opaco (ajustá este valor)

        // Sombra solo cuando scrolleó
        boxShadow: isScrolled ? "0 4px 12px rgba(0,0,0,0.08)" : "none",

        // Opcional: blur para que se vea "pegado" al fondo en scrolled
        backdropFilter: isScrolled ? "blur(10px)" : "blur(4px)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`sticky top-0 z-50 `}
    >
      <DesktopMenu
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        sections={sections}
        isScrolled={isScrolled}
      />
      {/* Mobile menu */}
      <MobileMenu
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        sections={sections}
        isScrolled={isScrolled}
      />
    </motion.div>
  );
}
