"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../ui/Logo";
import { ThemeToggle } from "../theme-toggle";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";
import {
  HomeIcon,
  Globe,
  Building2,
  ShoppingCart,
  HelpCircle,
  AlertTriangle,
  ListOrdered,
  Heart,
  Star,
} from "lucide-react";
import { BsQuestion } from "react-icons/bs";

import { BiSolidHome } from "react-icons/bi";

import { PiStepsFill } from "react-icons/pi";
import Link from "next/link";
import { Button } from "../ui/button";
import { RiGuideFill } from "react-icons/ri";
import { MdWorkspacesFilled } from "react-icons/md";

const sections = [
  { id: "hero", label: "Inicio", icon: <BiSolidHome className="size-5" /> },
  {
    id: "features",
    label: "Características",
    icon: <Star className="size-5 fill-current" />,
  },
  {
    id: "steps",
    label: "Pasos",
    icon: <PiStepsFill className="size-5 " />,
  },

  {
    id: "projects",
    label: "Proyectos",
    icon: <MdWorkspacesFilled className="size-5 fill-current" />,
  },
  {
    id: "faq",
    label: "Preguntas",
    icon: <BsQuestion className="size-5 fill-current" />,
  },
];
const guideSections = [
  {
    id: "intro",
    label: "Introducción",
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    id: "what-is",
    label: "¿Qué es un dominio?",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    id: "providers",
    label: "Proveedores",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    id: "where-to-buy",
    label: "Dónde comprar",
    icon: <ShoppingCart className="h-5 w-5" />,
  },
  {
    id: "how-to-choose",
    label: "Cómo elegir",
    icon: <HelpCircle className="h-5 w-5" />,
  },
  {
    id: "common-mistakes",
    label: "Errores comunes",
    icon: <AlertTriangle className="h-5 w-5" />,
  },
  {
    id: "steps",
    label: "Pasos para registrar",
    icon: <ListOrdered className="h-5 w-5" />,
  },
];
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
      <motion.div
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 h-14 flex justify-between items-center backdrop-blur"
      >
        {/* Logo */}
        <div>
          <AnimatePresence mode="wait">
            {isScrolled && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="w-full flex-col h-full text-primary-foreground rounded-full flex justify-center items-center font-bold bg-black"
              >
                <Logo className="w-32" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex gap-6 items-center h-full relative text-foreground">
          {sections.map((sec) => (
            <li key={sec.id} className="relative h-full">
              <button
                onClick={() =>
                  sec.id !== "domain-guide" ? scrollToSection(sec.id) : ""
                }
                className={`text-sm md:text-md font-medium h-full relative hover:text-primary cursor-pointer ${activeSection === sec.id ? "text-accent" : ""}`}
              >
                <p>{sec.label}</p>
              </button>

              {activeSection === sec.id && (
                <motion.span
                  layoutId="nav-indicator"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                />
              )}
            </li>
          ))}
          <Button asChild variant="outline" className="text-sm md:text-md ">
            <Link href="/guide" className="flex gap-1.5 items-center">
              <RiGuideFill />
              <p>Guía de Dominios</p>
            </Link>
          </Button>
        </ul>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <FaBars className="h-6 w-6 text-foreground" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-sidebar border-l border-border lg:hidden"
          >
            <div className="flex flex-col h-full ">
              {/* Header en mobile */}
              <div className="py-6 px-6 border-b w-full">
                <div key="logo" className="flex gap-3 items-center">
                  <Logo className="w-24" />
                </div>
              </div>

              {/* Navegación */}
              <ul className="flex flex-col gap-2 mt-6 px-6 w-full">
                {sections.map((sec) => (
                  <li key={sec.id}>
                    <SheetClose asChild>
                      <button
                        onClick={() => scrollToSection(sec.id)}
                        className={cn(
                          "w-full flex items-center gap-3 rounded-lg px-4 py-3 text-sidebar-foreground transition-colors hover:bg-muted",
                          activeSection === sec.id &&
                            "bg-accent/50 text-sidebar-foreground font-semibold",
                        )}
                      >
                        {sec.icon}
                        <span>{sec.label}</span>
                      </button>
                    </SheetClose>
                  </li>
                ))}
                <li key={"domain-guide"}>
                  <SheetClose asChild>
                    <button className="w-full flex items-center gap-3 rounded-lg px-4 py-3 text-sidebar-foreground transition-colors hover:bg-muted">
                      <Link
                        href="/guide"
                        className="flex gap-1.5 items-center text-foreground"
                      >
                        <RiGuideFill className="size-5" />
                        <p>Guía de Dominios</p>
                      </Link>
                    </button>
                  </SheetClose>
                </li>
              </ul>

              {/* Footer opcional */}
              <div className="mt-auto px-6 py-8 border-t text-sm text-gray-500">
                <p>
                  © {new Date().getFullYear()} TUWEBHOY — Hecho con{" "}
                  <Heart className="inline h-4 w-4 fill-red-500 text-red-500" />{" "}
                  en Entre Ríos
                </p>
                <p className="text-xs">Webs simples. Claras. Que funcionan.</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </motion.div>
    </motion.div>
  );
}
