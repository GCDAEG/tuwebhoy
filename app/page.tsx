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
export default function HomePage() {
  const ctaRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");

      // pequeño delay para asegurar render completo
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, []);
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
