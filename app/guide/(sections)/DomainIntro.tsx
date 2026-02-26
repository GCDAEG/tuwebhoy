// components/domain-guide/DomainIntro.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import { Section } from "@/components/layout/Section";
import TypewriterDomains from "@/components/ui/TypeWriterDomains";
import { title } from "@/app/layout";

export default function DomainIntro() {
  return (
    <Section
      height="screen"
      className="relative overflow-hidden bg-linear-to-br flex  py-20"
      id="intro"
    >
      <div className="container flex justify-center md:items-center h-full border">
        <div className=" text-center flex flex-col justify-center items-center">
          <div className="inline-flex  items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 mb-6">
            <Globe className="h-5 w-5" />
            <span className="text-sm font-medium">Guía completa 2025</span>
          </div>

          <div className="w-full flex flex-col">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 ${title}`}
            >
              Todo lo que necesitas saber para registrar tu dominio perfecto
            </h1>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Desde elegir el nombre ideal hasta evitar errores costosos y
              encontrar el mejor proveedor. Una guía actualizada, clara y sin
              relleno.
            </p>
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 text-lg">
              Ver proveedores recomendados
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Leer la guía completa
            </Button>
          </div> */}

          <div className="text-sm text-muted/50 text-center">
            Actualizado • Febrero 2025 • +30 proveedores analizados
          </div>
        </div>
      </div>
    </Section>
  );
}
