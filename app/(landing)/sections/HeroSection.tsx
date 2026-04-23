"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeroCTAButton } from "../../../components/ui/CTAButton";
import { Section } from "@/components/layout/Section";
import HeroGeometric2 from "@/components/ui/HeroGeometric2";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <Section
      height="screen"
      id="hero"
      className="relative overflow-hidden bg-background"
    >
      {/* Luz de fondo sutil corporativa */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl h-full flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* COLUMNA TEXTO: Ahora a la izquierda para mejor lectura corporativa */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 flex flex-col gap-6 lg:gap-8 z-10 text-center lg:text-left items-center lg:items-start text-balance"
        >
          {/* Pequeño Badge de confianza */}
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest animate-reveal">
            <CheckCircle2 className="size-3" />
            Especialistas en Catálogos Digitales
          </div> */}

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-foreground leading-[1.1] tracking-tight">
            Impulsá tu negocio con una <br />
            <span className="text-primary italic">web moderna.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
            En{" "}
            <span className="text-foreground font-bold italic underline decoration-primary/30">
              TUWEBHOY
            </span>{" "}
            diseñamos y desarrollamos tu sitio para que sea profesional, claro y
            confiable desde el primer día.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
            <HeroCTAButton
              text="Empezar proyecto"
              href="https://wa.me/543446648013"
              className="w-full sm:w-auto h-14 px-8 rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all text-lg font-bold"
            />
            <button
              onClick={() =>
                document
                  .getElementById("servicios")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors p-4"
            >
              Ver servicios
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Social Proof pequeño */}
          {/* <div className="flex items-center gap-4 pt-4 border-t border-border w-full justify-center lg:justify-start">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="size-8 rounded-full border-2 border-background bg-zinc-200"
                />
              ))}
            </div>
            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
              +50 Negocios ya confían en nosotros
            </p>
          </div> */}
        </motion.div>

        {/* COLUMNA VISUAL: El elemento geométrico a la derecha */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full hidden lg:flex justify-center items-center relative   "
        >
          <div className="relative w-full h-full">
            <HeroGeometric2 />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default HeroSection;
