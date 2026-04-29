"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeroCTAButton } from "../../../components/ui/CTAButton";
import HeroGeometric2 from "@/components/ui/HeroGeometric2";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-[radial-gradient(110%_110%_at_50%_0%,#011e4f_0%,#00030c_100%)] p-4 sm:p-6 md:p-8 lg:p-12"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none mix-blend-screen" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-sky-500/15 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-12 lg:flex-row lg:gap-16 lg:p-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex w-full flex-1 flex-col items-center gap-8 text-center lg:items-start lg:text-left"
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
              <span className="text-primary italic">Impulsá</span> tu negocio
            </h1>

            <p className="mx-auto lg:mx-0 max-w-2xl text-balance text-base sm:text-lg md:text-xl font-medium leading-relaxed text-white/80">
              En{" "}
              <span className="font-bold italic text-white underline decoration-primary/50 underline-offset-4">
                TUWEBHOY
              </span>{" "}
              diseñamos y desarrollamos tu sitio para que sea profesional, claro
              y confiable desde el primer día. Soluciones de conversión para tu
              presencia digital.
            </p>
          </div>

          <div className="flex w-full flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <HeroCTAButton
              text="Empezar proyecto"
              href="https://wa.me/543446648013"
              className="flex w-full sm:w-auto h-14 items-center justify-center rounded-xl bg-primary px-8 text-base md:text-lg font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-primary/50"
            />
            <button
              onClick={() =>
                document
                  .getElementById("servicios")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex w-full sm:w-auto h-14 items-center justify-center gap-2.5 rounded-xl border border-white/20 px-8 text-base md:text-lg font-bold text-white/90 transition-all hover:border-white/40 hover:bg-white/10"
            >
              Ver servicios
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden w-full flex-1 items-center justify-center lg:flex lg:justify-end"
        >
          <div className="relative flex w-full max-w-lg xl:max-w-xl items-center justify-center">
            <HeroGeometric2 />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
