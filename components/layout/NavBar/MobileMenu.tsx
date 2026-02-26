"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";
import Logo from "@/components/ui/Logo";
import { NavSection } from "@/lib/section";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { RiGuideFill } from "react-icons/ri";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AppIcon } from "@/lib/AppIcon";
import { Button } from "@/components/ui/button";
interface MobileMenuProps {
  sections: NavSection[];
  scrollToSection: (id: string) => void;
  activeSection: string;
  isScrolled: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  activeSection,
  sections,
  scrollToSection,
  isScrolled,
}) => {
  const [open, setOpen] = useState(false);

  const handlerOpen = (e: boolean) => {
    setOpen(e);
  };
  return (
    <motion.div
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`mx-auto max-w-7xl px-4 md:px-6 lg:px-8 h-14 flex justify-between items-center backdrop-blur lg:hidden`}
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
      <Sheet open={open} onOpenChange={handlerOpen}>
        <SheetTrigger
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => handlerOpen(!open)}
        >
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
                    <Button
                      variant={"ghost"}
                      className="flex w-full justify-start gap-5 items-center"
                      type="button"
                      onClick={() => handlerOpen(!open)}
                    >
                      {sec.icon && (
                        <AppIcon name={sec.icon} className="size-5" />
                      )}
                      <Link
                        href={`${sec.href ? sec.href : `/#${sec.id}`}`}
                        className="text-sm md:text-md font-medium relative hover:text-primary cursor-pointer"
                      >
                        {<p>{sec.label}</p>}
                      </Link>
                    </Button>
                  </SheetClose>
                </li>
              ))}
              <li key={"domain-guide"}>
                <SheetClose asChild>
                  {/* <button
                    onClick={() => handlerOpen(!open)}
                    className="w-full flex items-center gap-3 rounded-lg px-4 py-3 text-sidebar-foreground transition-colors hover:bg-muted"
                  >
                    <Link
                      href="/guide"
                      className="flex gap-1.5 items-center text-foreground"
                    >
                      <p>Guía de Dominios</p>
                    </Link>
                  </button> */}
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
  );
};

export default MobileMenu;
