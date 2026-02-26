import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RiGuideFill } from "react-icons/ri";
import { NavSection } from "@/lib/section";
import Logo from "@/components/ui/Logo";
import { AppIcon } from "@/lib/AppIcon";
interface DesktopMenuProps {
  sections: NavSection[];
  scrollToSection: (id: string) => void;
  activeSection: string;
  isScrolled: boolean;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  activeSection,
  sections,
  isScrolled,
}) => {
  return (
    <motion.div
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 h-14 justify-between items-center backdrop-blur hidden lg:flex"
    >
      {/* Logo */}
      <div>
        <div
          key="logo"
          className="w-full flex-col h-full text-primary-foreground rounded-full flex justify-center items-center font-bold bg-black"
        >
          <Logo className="w-32" />
        </div>
      </div>

      {/* Desktop menu */}
      <ul className="hidden lg:flex gap-2 items-center h-full relative text-foreground ">
        {sections.map((sec) => (
          <li key={sec.id} className="relative h-full flex items-center">
            <Button
              variant={"ghost"}
              className={`flex justify-center  items-center transition-all duration-700 p-0`}
              type="button"
            >
              <Link
                href={`${sec.href ? sec.href : `/#${sec.id}`}`}
                className="flex gap-3 items-center text-sm md:text-md font-medium relative hover:text-primary cursor-pointer px-2"
              >
                {sec.icon && (
                  <AppIcon name={sec.icon} className="size-5 text-accent" />
                )}

                {<p>{sec.label}</p>}
              </Link>
            </Button>

            {activeSection === sec.id && (
              <motion.span
                layoutId="nav-indicator"
                className="absolute w-full bottom-0 left-0 h-0.5 bg-primary rounded-full"
                transition={{
                  type: "tween", // ← en vez de spring
                  duration: 0.18, // muy corto para que no se note el retraso
                  ease: [0.4, 0, 0.2, 1], // easeOut fuerte
                }}
              />
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default DesktopMenu;
