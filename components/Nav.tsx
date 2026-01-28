"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Header/Logo";
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
    <div className="sticky top-0 z-60">
      <motion.div
        animate={{
          backgroundColor: isScrolled ? "rgba(2,6,23,0.85)" : "rgba(2,6,23,0)",
          boxShadow: isScrolled ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="w-full px-5 h-14 flex justify-between items-center backdrop-blur"
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
          <SheetTrigger className="md:hidden text-foreground">
            <FaBars />
          </SheetTrigger>

          <SheetContent className="bg-card text-sidebar-foreground z-70 md:hidden">
            <ul className="flex flex-col gap-4 mt-6 items-start pl-20">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <SheetClose asChild>
                    <button
                      onClick={() => scrollToSection(sec.id)}
                      className={cn(
                        "w-full py-2 flex gap-2 items-center transition-colors",
                        activeSection === sec.id && "text-accent font-semibold",
                      )}
                    >
                      {sec.icon}
                      <p>{sec.label}</p>
                    </button>
                  </SheetClose>
                </li>
              ))}
            </ul>

            <div className="absolute bottom-12 left-0 flex justify-center w-full">
              <div className="relative aspect-square w-32 md:w-52 lg:w-lg max-w-xl h-fit overflow-hidden">
                <Image
                  src="/g312.png"
                  alt="tuwebhoylogo"
                  fill
                  objectFit="contain" // ← Prop directa (funciona en Next.js 13+)
                  // className="object-cover" // si preferís Tailwind
                />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </motion.div>
    </div>
  );
}
