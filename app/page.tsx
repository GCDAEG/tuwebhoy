// app/page.tsx (o tu página principal)
"use client";

import { useRef } from "react";
import { FadeIn } from "@/components/motion/FadeIn"; // asumo que tienes Stagger si lo usas

import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { StaggerContainer } from "@/components/motion/StraggerContainer";
import { Poppins, Inter, Merriweather } from "next/font/google";
import { StepCard } from "@/components/ui/StepCard";

import { SimpleCTAButton } from "@/components/ui/CTAButton";
import FAQS from "@/components/sections/FAQs";
import HeroSection from "@/components/sections/Header/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import StepsSection from "@/components/sections/StepsSection";

export const poppins = Poppins({
  weight: "300",
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});
export const merriweather = Merriweather({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
export const title = merriweather.className;
export const base = poppins.className;
export default function HomePage() {
  const ctaRef = useRef<HTMLDivElement>(null);

  return (
    <main className={`flex flex-col min-h-screen ${poppins.className} `}>
      {/* Hero / Header full viewport */}
      <FadeIn delay={0.2}>
        <HeroSection
          title="Diseño web claro, rápido y efectivo"
          emblema="Páginas web simples para negocios  
Entrega rápida · Precio accesible · 
Web lista para funcionar"
        />
      </FadeIn>

      <FeatureSection />
      {/* STEPS */}
      <StepsSection />
      {/* FAQS */}
      <FAQS />
      {/* Floating elements (globales) */}
      <FloatingCTA targetRef={ctaRef} />
      {/* <FloatingWhatsAppButton /> ← si lo tienes global */}
    </main>
  );
}
