"use client";
import React from "react";
import { Section } from "@/components/layout/Section";
import {
  Zap,
  Layout,
  Palette,
  CircleDollarSign,
  Smartphone,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    id: "1",
    title: "Web lista en días",
    text: "Landing pages profesionales listas en tiempo récord, sin vueltas ni procesos eternos.",
    icon: Zap,
  },
  {
    id: "2",
    title: "Diseño moderno",
    text: "Diseños actuales basados en buenas prácticas. Nada genérico ni recargado.",
    icon: Layout,
  },
  {
    id: "3",
    title: "Identidad visual",
    text: "Si no tenés logo, te ayudamos a crear uno simple y funcional para arrancar.",
    icon: Palette,
  },
  {
    id: "4",
    title: "Precio accesible",
    text: "Webs pensadas para emprendedores, con costos claros y sin sorpresas.",
    icon: CircleDollarSign,
  },
  {
    id: "5",
    title: "100% Mobile First",
    text: "Tu web se verá perfecta en celulares, que es donde están tus clientes.",
    icon: Smartphone,
  },
  {
    id: "6",
    title: "Lista para vender",
    text: "Optimizada para compartir en WhatsApp, redes sociales o campañas pagas.",
    icon: Rocket,
  },
];

const FeatureSection = () => {
  return (
    <Section id="features" className="bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* ENCABEZADO */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            Beneficios Directos
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-foreground leading-[1.1] tracking-tighter italic uppercase">
            ¿Por qué elegir <br />
            <span className="text-primary">TUWEBHOY?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground font-medium max-w-xl">
            Nos enfocamos en la claridad y la velocidad. Tu negocio necesita
            estar online ayer, y nosotros lo hacemos realidad.
          </p>
        </div>

        {/* GRID DE FEATURES */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative p-8 rounded-3xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Icono con fondo dinámico */}
              <div className="size-12 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="size-6" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                {feature.text}
              </p>

              {/* Check decorativo que aparece al hover */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle2 className="size-5 text-primary/40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FeatureSection;
