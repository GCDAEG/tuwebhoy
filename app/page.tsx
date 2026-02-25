// app/page.tsx (o tu página principal)
"use client";

import { useEffect, useRef } from "react";

import { FloatingCTA } from "@/components/ui/FloatingCTA";

import FAQS from "@/app/(landing)/sections/FAQs";
import HeroSection from "@/app/(landing)/sections/HeroSection";
import FeatureSection from "@/app/(landing)/sections/FeatureSection";
import StepsSection from "@/app/(landing)/sections/StepsSection";
import { base } from "./layout";
import ProjectShowcase from "./(landing)/sections/ProjectShowcase";
import { useSearchParams } from "next/navigation";
const NAVBAR_HEIGHT = 56;
export default function HomePage() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  useEffect(() => {
    // 🔹 Siempre arrancar arriba cuando se entra a la home

    if (!section) return;

    // 🔹 Esperamos un frame para asegurarnos que el DOM esté listo
    requestAnimationFrame(() => {
      const el = document.getElementById(section);
      if (!el) return;

      const y =
        el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;

      window.scrollTo({ top: y, behavior: "smooth" });
    });
  }, [section]);
  return (
    <main className={`min-h-screen w-full  ${base} overflow-x-hidden`}>
      {/* Hero / Header full viewport */}

      <HeroSection />

      <FeatureSection />
      {/* STEPS */}
      <StepsSection />
      {/* PROJECTS */}
      <ProjectShowcase />
      {/* FAQS */}
      <FAQS />
      {/* Floating elements (globales) */}
      <FloatingCTA targetRef={ctaRef} />
      {/* <FloatingWhatsAppButton /> ← si lo tienes global */}
    </main>
  );
}
