import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavSection } from "@/lib/section";
import Logo from "@/components/ui/Logo";
import { AppIcon } from "@/lib/AppIcon";
import { useLenis } from "lenis/react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
interface DesktopMenuProps {
  sections: NavSection[];
  activeSection: string | null;
  isScrolled: boolean;
  isGuide: boolean;
  pathname: string;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  activeSection,
  sections,
  isGuide,
  pathname,
}) => {
  const lenis = useLenis();
  const router = useRouter();

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
      if (isGuide || pathname !== "/") {
        router.push(`/#${sec.id}`);
      } else {
        lenis?.scrollTo(`#${sec.id}`, {
          offset: -56,
          duration: 1.2,
        });
      }
    }
  };
  return (
    <motion.div
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 h-full justify-between items-center backdrop-blur hidden lg:flex"
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
          <li
            key={sec.id}
            className={`relative h-full flex items-center border-primary ${activeSection === sec.id && "text-primary border-b"}`}
          >
            <Button
              variant={"ghost"}
              className={`flex justify-center p-0 items-center transition-all duration-700`}
              type="button"
            >
              <button
                onClick={(e) => handleClickLink(e, sec)}
                className={cn(
                  "flex gap-3 items-center text-sm md:text-md font-medium relative hover:text-primary cursor-pointer px-2",
                )}
              >
                {sec.icon && (
                  <AppIcon name={sec.icon} className="size-5 text-accent" />
                )}

                {<p>{sec.label}</p>}
              </button>
            </Button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default DesktopMenu;
