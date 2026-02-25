"use client";

import { usePathname, useRouter } from "next/navigation";

const NAVBAR_HEIGHT = 56;

export function useSmartNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  const goToSection = (id: string) => {
    if (pathname === "/") {
      // estamos en home → scroll directo
      const el = document.getElementById(id);
      if (!el) return;

      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        NAVBAR_HEIGHT;

      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      // estamos en otra página → navegar a home con section
      router.push(`/?section=${id}`);
    }
  };

  return { goToSection };
}