"use client";
import React from "react";
import { NavSection } from "@/lib/section";
import Logo from "@/components/ui/Logo";
import { AppIcon } from "@/lib/AppIcon";
import { useLenis } from "lenis/react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface DesktopMenuProps {
  sections: NavSection[];
  activeSection: string | null;
  isScrolled: boolean;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  activeSection,
  sections,
  isScrolled,
}) => {
  const lenis = useLenis();
  const router = useRouter();
  const pathname = usePathname();

  const handleClickLink = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    sec: NavSection,
  ) => {
    e.preventDefault();

    if (sec.type === "page" && sec.href) {
      router.push(sec.href);
      return;
    }

    if (sec.type === "home") {
      router.push("/");
      return;
    }

    if (sec.type === "scroll") {
      if (pathname !== "/") {
        router.push(`/#${sec.id}`);
      } else {
        lenis?.scrollTo(`#${sec.id}`, {
          offset: -80,
          duration: 1.2,
        });
      }
    }
  };

  const isItemActive = (sec: NavSection) => {
    if (sec.type === "page") return pathname === sec.href;
    if (sec.type === "home") return pathname === "/";
    return activeSection === sec.id;
  };

  return (
    <nav className="hidden lg:flex items-center justify-between w-full max-w-7xl mx-auto px-6 h-full">
      {/* LOGO */}
      <div className="flex items-center h-full">
        <button
          onClick={() => router.push("/")}
          className="hover:opacity-80 transition-opacity cursor-pointer p-0 flex items-center"
        >
          {/* Si tu Hero es muy oscuro, podrías renderizar una versión blanca del logo cuando !isScrolled */}
          <Logo className="w-32 h-full" />
        </button>
      </div>

      {/* NAVEGACIÓN CENTRAL */}
      <div
        className={cn(
          "p-1 rounded-2xl transition-all duration-300",
          isScrolled
            ? "bg-secondary/50 border border-border/60"
            : "bg-white/5 backdrop-blur-sm border border-white/10", // Aspecto cristalino cuando está sobre el Hero
        )}
      >
        <ul className="flex items-center gap-1">
          {sections.map((sec) => {
            const active = isItemActive(sec);

            return (
              <li key={sec.id}>
                <button
                  onClick={(e) => handleClickLink(e, sec)}
                  className={cn(
                    "relative px-5 py-2 text-sm font-bold rounded-xl flex items-center gap-2 transition-colors cursor-pointer outline-none",
                    active
                      ? isScrolled
                        ? "bg-background text-primary shadow-sm border border-border/50"
                        : "bg-white/10 text-white shadow-sm border border-white/20"
                      : isScrolled
                        ? "text-muted-foreground hover:text-foreground hover:bg-background/40"
                        : "text-white/70 hover:text-white hover:bg-white/10",
                  )}
                >
                  {sec.icon && (
                    <AppIcon
                      name={sec.icon}
                      className={cn(
                        "size-4 transition-colors",
                        active
                          ? isScrolled
                            ? "text-primary"
                            : "text-white"
                          : isScrolled
                            ? "text-muted-foreground"
                            : "text-white/70",
                      )}
                    />
                  )}
                  <span>{sec.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* CTA */}
      <div className="flex items-center">
        <button
          onClick={() => window.open("https://wa.me/543446648013", "_blank")}
          className={cn(
            "px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-[0.15em] transition-all shadow-md cursor-pointer",
            isScrolled
              ? "bg-primary text-white hover:brightness-110 active:scale-95"
              : "bg-white text-primary hover:bg-white/90 active:scale-95", // Contraste inverso cuando está en el hero
          )}
        >
          Cotizar Proyecto
        </button>
      </div>
    </nav>
  );
};

export default DesktopMenu;
