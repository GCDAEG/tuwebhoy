"use client";
import React from "react";
import { motion } from "framer-motion";
import { CTAButton } from "../../../components/ui/CTAButton";
import { Section } from "@/components/layout/Section";
import { MessageSquare, PenTool, Globe, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "01",
    title: "Consulta inicial",
    text: "Hablamos de tu negocio y lo que necesitás. Te envío una propuesta clara en menos de 24 horas.",
    icon: MessageSquare,
  },
  {
    id: "02",
    title: "Definimos tu web",
    text: "Acordamos contenido, estilo y estructura usando un diseño probado y efectivo.",
    icon: PenTool,
  },
  {
    id: "03",
    title: "Tu web lista",
    text: "Desarrollo, ajustes finales y entrega de tu sitio listo para usar y compartir.",
    icon: Globe,
  },
];

const StepsSection = () => {
  return (
    <Section id="steps" className="bg-background">
      <div className="container mx-auto max-w-7xl flex flex-col items-center">
        {/* HEADER */}
        <div className="text-center max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            Proceso Ágil
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-foreground italic uppercase tracking-tighter">
            Tu web en pocos{" "}
            <span className="text-primary font-black">pasos.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground font-medium">
            Sin procesos eternos ni reuniones innecesarias. Vamos directo al
            punto para que tu web empiece a trabajar por vos.
          </p>
        </div>

        {/* STEPS GRID CON CONEXIÓN */}
        <div className="grid w-full gap-8 lg:grid-cols-3 relative">
          {/* Línea conectora decorativa en Desktop */}
          <div className="hidden lg:block absolute top-1/4 left-[10%] right-[10%] h-[2px] bg-border z-0" />

          {steps.map((step, index) => (
            <div
              key={step.id}
              className="group relative flex flex-col items-center text-center z-10"
            >
              {/* Círculo con Número/Icono */}
              <div className="relative flex items-center justify-center mb-8">
                <div className="size-20 rounded-3xl bg-background border-2 border-border group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] flex items-center justify-center transition-all duration-500 bg-white">
                  <step.icon className="size-8 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                </div>
                {/* Badge con número */}
                <span className="absolute -top-2 -right-2 size-8 bg-primary text-white text-xs font-black flex items-center justify-center rounded-lg shadow-lg">
                  {step.id}
                </span>
              </div>

              {/* Contenido */}
              <div className="px-4">
                <h3 className="text-2xl font-black text-foreground uppercase italic tracking-tight mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-medium text-sm md:text-base">
                  {step.text}
                </p>
              </div>

              {/* Flecha indicadora en móvil (se oculta en el último) */}
              {index !== steps.length - 1 && (
                <div className="lg:hidden mt-8 text-primary animate-bounce">
                  <ArrowRight className="rotate-90 size-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="mt-20">
          <CTAButton
            text="Contactar ahora"
            href="https://wa.me/543446648013"
            className="h-16 px-10 rounded-xl text-lg font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95"
          />
        </div>
      </div>
    </Section>
  );
};

export default StepsSection;
