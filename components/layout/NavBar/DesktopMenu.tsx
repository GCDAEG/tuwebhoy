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
      <ul className="hidden lg:flex gap-3 items-center h-full relative text-foreground ">
        {sections.map((sec) => (
          <li key={sec.id} className="relative h-full flex items-center">
            <Button
              variant={"ghost"}
              className="flex justify-start gap-2 items-center"
              type="button"
            >
              {sec.icon && (
                <AppIcon name={sec.icon} className="size-5 text-accent" />
              )}
              <Link
                href={`${sec.href ? sec.href : `/#${sec.id}`}`}
                className="text-sm md:text-md font-medium relative hover:text-primary cursor-pointer"
              >
                {<p>{sec.label}</p>}
              </Link>
            </Button>

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
      </ul>
    </motion.div>
  );
};

export default DesktopMenu;
