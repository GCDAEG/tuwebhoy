// components/domain-guide/CommonMistakes.tsx
import React from "react";
import { AlertCircle, XCircle, Lightbulb } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { title, titleH2 } from "@/app/layout";

const mistakes = [
  {
    title: "Elegir un nombre demasiado largo o complicado",
    description:
      "Nombres con guiones, números o palabras muy largas son difíciles de recordar, escribir y dictar. Ejemplo: mi-empresa-online-2025.com",
    whyBad:
      "La gente se equivoca al tipear y termina en la web de la competencia.",
    betterAlternative: "Buscá algo corto, claro y fácil de pronunciar.",
  },
  {
    title: "Ignorar la renovación y pagar solo el primer año barato",
    description:
      "Muchos caen en promociones de $1–$3 el primer año, pero la renovación sube fuerte después.",
    whyBad: "Terminás pagando más o incluso perdiendo el dominio.",
    betterAlternative: "Compará siempre precio inicial + renovación.",
  },
  {
    title: "No activar la privacidad WHOIS",
    description:
      "Sin protección, tus datos personales quedan públicos y accesibles.",
    whyBad: "Spam, phishing y contactos no deseados.",
    betterAlternative: "Elegí proveedores con privacidad WHOIS incluida.",
  },
  {
    title: "Registrar solo una extensión",
    description:
      "Si alguien registra otra extensión de tu marca, puede confundirte o copiarte.",
    whyBad: "Pérdida de identidad o tráfico.",
    betterAlternative: "Registrá extensiones clave si la marca es importante.",
  },
  {
    title: "No controlar la renovación automática",
    description:
      "Activarla sin revisar o no activarla puede generar problemas.",
    whyBad: "Cargos sorpresa o pérdida del dominio.",
    betterAlternative:
      "Usá renovación automática + recordatorio en calendario.",
  },
];

export default function CommonMistakes() {
  return (
    <Section height="content" id="common-mistakes" className="py-20">
      <div className="container mx-auto flex flex-col gap-20">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100/70 text-amber-800 px-4 py-1.5 text-sm font-medium">
            <AlertCircle className="h-4 w-4" />
            Errores a evitar
          </div>

          <h2
            className={`${titleH2} text-3xl md:text-5xl font-bold tracking-tight`}
          >
            Errores comunes al comprar un dominio
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Aprendé de los errores más comunes para no perder dinero, tiempo ni
            tu marca.
          </p>
        </div>

        {/* Lista */}
        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
          {mistakes.map((mistake, index) => (
            <article
              key={mistake.title}
              className="relative pl-8 border-l border-amber-300/60"
            >
              {/* Número */}
              <div
                className="
                  absolute -left-4 top-0
                  w-8 h-8 rounded-full
                  bg-amber-100 text-amber-700
                  flex items-center justify-center
                  font-semibold
                "
              >
                {index + 1}
              </div>

              <div className="flex flex-col gap-4">
                <h3 className={`${titleH2} text-xl md:text-2xl font-semibold`}>
                  {mistake.title}
                </h3>

                <p className="text-foreground/90 leading-relaxed">
                  {mistake.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="rounded-lg bg-red-50 px-4 py-3">
                    <div className="flex items-center gap-2 mb-1 text-red-700 font-medium">
                      <XCircle className="h-4 w-4" />
                      Por qué es un problema
                    </div>
                    <p className="text-sm text-red-700/90">{mistake.whyBad}</p>
                  </div>

                  <div className="rounded-lg bg-green-50 px-4 py-3">
                    <div className="flex items-center gap-2 mb-1 text-green-700 font-medium">
                      <Lightbulb className="h-4 w-4" />
                      Qué hacer en su lugar
                    </div>
                    <p className="text-sm text-green-700/90">
                      {mistake.betterAlternative}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
