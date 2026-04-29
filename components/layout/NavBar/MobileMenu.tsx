"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, Heart, ArrowRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { NavSection } from "@/lib/section";
import { AppIcon } from "@/lib/AppIcon";
import { Button } from "@/components/ui/button";
import { useLenis } from "lenis/react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  sections: NavSection[];
  activeSection: string | null;
  isScrolled: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  activeSection,
  sections,
  isScrolled,
}) => {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const router = useRouter();

  return (
    <div className="flex lg:hidden items-center justify-between w-full h-full px-4">
      {/* LOGO */}
      <button onClick={() => router.push("/")} className="outline-none">
        <Logo className="w-28 h-auto" />
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            // Si el fondo del hero es oscuro, el icono será blanco al estar arriba
            className={cn(
              "transition-colors",
              isScrolled ? "text-foreground" : "text-white hover:bg-white/10",
            )}
          >
            <Menu className="size-6" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[300px] sm:w-[350px] p-0 flex flex-col bg-background border-l border-border"
        >
          <SheetHeader className="p-6 border-b border-border/50 text-left">
            <SheetTitle>
              <Logo className="w-24 h-auto" />
            </SheetTitle>
          </SheetHeader>

          {/* NAVEGACIÓN */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <ul className="flex flex-col gap-1">
              {sections.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <li key={sec.id}>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        lenis?.scrollTo(`#${sec.id}`, {
                          offset: -80,
                          duration: 1.2,
                        });
                        setOpen(false);
                      }}
                      className={cn(
                        "flex items-center gap-4 w-full px-4 py-4 rounded-xl text-sm font-bold transition-all active:scale-[0.98]",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                      )}
                    >
                      {sec.icon && (
                        <AppIcon
                          name={sec.icon}
                          className={cn(
                            "size-5",
                            isActive ? "text-primary" : "text-muted-foreground",
                          )}
                        />
                      )}
                      <span className="flex-1 text-left">{sec.label}</span>
                      {isActive && (
                        <div className="size-1.5 rounded-full bg-primary" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* BOTÓN CTA DENTRO DEL MENÚ */}
            <div className="mt-8 px-2">
              <Button
                onClick={() =>
                  window.open("https://wa.me/543446648013", "_blank")
                }
                className="w-full h-12 bg-primary text-white font-black uppercase tracking-widest text-[10px] rounded-xl shadow-lg shadow-primary/20"
              >
                Cotizar Proyecto <ArrowRight className="size-4 ml-2" />
              </Button>
            </div>
          </nav>

          {/* FOOTER DEL MENÚ */}
          <div className="p-6 border-t border-border/50 bg-secondary/30">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5 mb-1">
              © {new Date().getFullYear()} TUWEBHOY
            </p>
            <p className="text-[10px] font-medium text-muted-foreground flex items-center gap-1">
              Hecho con <Heart className="size-3 fill-red-500 text-red-500" />{" "}
              en Entre Ríos
            </p>
            <p className="text-[11px] font-black text-foreground mt-3 italic tracking-tight">
              Webs simples. Claras. Que funcionan.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
