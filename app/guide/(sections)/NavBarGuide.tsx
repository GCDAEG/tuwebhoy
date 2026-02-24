"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { CTAButton } from "@/components/ui/CTAButton";
import { BsWhatsapp } from "react-icons/bs";
import { BiChat } from "react-icons/bi";
import Logo from "@/components/ui/Logo";

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

const NAVBAR_HEIGHT = 64; // altura aproximada del navbar sin banner
const SCROLL_THRESHOLD = 120; // píxeles para activar modo scrolled

export function NavBarGuide() {
  const [activeSection, setActiveSection] = useState("intro");
  const [isScrolled, setIsScrolled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Scroll suave restando altura del navbar
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navbarHeight = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--navbar-height",
      ) || "0",
    );

    const y =
      el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Actualizar altura dinámica del navbar
  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const height = ref.current.offsetHeight;
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${height}px`,
        );
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    if (ref.current) resizeObserver.observe(ref.current);

    window.addEventListener("scroll", updateHeight);
    window.addEventListener("resize", updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", updateHeight);
      window.removeEventListener("resize", updateHeight);
    };
  }, [isScrolled]);

  // Detectar sección activa
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: [0.5] },
    );

    guideSections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Detectar scroll
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
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        {/* Logo / Marca */}
        <div className="flex flex-1">
          <AnimatePresence mode="wait">
            {isScrolled && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="flex gap-3 items-center"
              >
                <div className="size-10">
                  <Logo text={false} className="fill-primary" />
                </div>
                <div className="flex flex-col -space-y-1 text-foreground">
                  <p className="font-bold text-sm">TUWEBHOY</p>
                  <p className="text-[9px] opacity-70">UNA WEB QUE FUNCIONA</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Menú desktop */}
        <ul className="hidden lg:flex gap-5 lg:gap-8 items-center text-foreground font-medium">
          {guideSections.map((sec) => (
            <li key={sec.id} className="relative">
              <button
                onClick={() => scrollToSection(sec.id)}
                className={cn(
                  "transition-colors hover:text-accent text-sm ",
                  activeSection === sec.id ? "text-accent font-semibold" : "",
                )}
              >
                {sec.label}
              </button>

              {activeSection === sec.id && (
                <motion.span
                  layoutId="domain-nav-indicator"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Menú mobile */}
        <Sheet>
          <SheetTrigger className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <FaBars className="h-6 w-6 text-foreground" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-sidebar border-l border-border"
          >
            <div className="flex flex-col h-full">
              {/* Header en mobile */}
              <div className="py-6 px-6 border-b">
                <div key="logo" className="flex gap-3 items-center">
                  <div className="size-10">
                    <Logo text={false} className="fill-primary" />
                  </div>
                  <div className="flex flex-col -space-y-1 text-sidebar-foreground">
                    <p className="font-bold text-sm">TUWEBHOY</p>
                    <p className="text-[9px] opacity-70">
                      UNA WEB QUE FUNCIONA
                    </p>
                  </div>
                </div>
              </div>

              {/* Navegación */}
              <ul className="flex flex-col gap-2 mt-6 px-6">
                {guideSections.map((sec) => (
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
      </div>
    </motion.div>
  );
}
