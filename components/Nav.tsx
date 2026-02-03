"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./sections/Header/Logo";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";
import { HomeIcon } from "lucide-react";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { GrSteps } from "react-icons/gr";
import { BsQuestion } from "react-icons/bs";
import Image from "next/image";

const sections = [
  { id: "hero", label: "Inicio", icon: <HomeIcon /> },
  {
    id: "features",
    label: "Características",
    icon: <MdOutlineFeaturedPlayList />,
  },
  { id: "steps", label: "Pasos", icon: <GrSteps /> },
  { id: "faq", label: "Preguntas", icon: <BsQuestion /> },
];

const NAVBAR_HEIGHT = 56;

// 👉 scroll suave teniendo en cuenta el navbar
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;

  window.scrollTo({ top: y, behavior: "smooth" });
};

export function SectionNavbar() {
  const [activeSection, setActiveSection] = useState("hero");

  // 👉 detectar sección visible (más estable)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.4, 0.6],
      },
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isScrolled = activeSection !== "hero";

  return (
    <motion.div
      animate={{
        backgroundColor: isScrolled ? "rgba(2,6,23,0.85)" : "rgba(2,6,23,0)",
        boxShadow: isScrolled ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
      }}
      className="sticky top-0 z-60"
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
                className="flex gap-3 items-center"
              >
                <div className="size-10">
                  <Logo text={false} />
                </div>
                <div className="flex flex-col -space-y-1 text-foreground">
                  <p className="font-bold text-sm">TUWEBHOY</p>
                  <p className="text-[9px] opacity-70">UNA WEB QUE FUNCIONA</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 items-center relative text-foreground">
          {sections.map((sec) => (
            <li key={sec.id} className="relative">
              <button
                onClick={() => scrollToSection(sec.id)}
                className="text-sm font-medium"
              >
                {sec.label}
              </button>

              {activeSection === sec.id && (
                <motion.span
                  layoutId="nav-indicator"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger
            className="
      md:hidden
      inline-flex items-center justify-center
      rounded-md p-2
      text-foreground
      transition-colors
      hover:bg-muted
      focus:outline-none focus:ring-2 focus:ring-ring
    "
          >
            <FaBars className="h-5 w-5" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="
      z-70 md:hidden
      bg-card text-foreground
      flex flex-col
      pt-10
    "
          >
            {/* Navegación */}
            <ul className="flex flex-col gap-2 mt-6 px-6">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <SheetClose asChild>
                    <button
                      onClick={() => scrollToSection(sec.id)}
                      className={cn(
                        `
                  w-full flex items-center gap-3
                  rounded-md px-3 py-2
                  text-base
                  transition-colors
                  hover:bg-muted
                `,
                        activeSection === sec.id &&
                          "bg-muted text-accent font-semibold",
                      )}
                    >
                      <span className="text-lg">{sec.icon}</span>
                      <span>{sec.label}</span>
                    </button>
                  </SheetClose>
                </li>
              ))}
            </ul>

            {/* Logo */}
            <div className="mt-auto flex justify-center pb-8">
              <div className="relative aspect-square w-32 opacity-80">
                <Image
                  src="/g312.png"
                  alt="TUWEBHOY"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </motion.div>
    </motion.div>
  );
}
