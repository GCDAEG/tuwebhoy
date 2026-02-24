// components/domain-guide/CommonMistakes.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertTriangle,
  XCircle,
  Lightbulb,
  ArrowRight,
  DollarSign,
  AlertCircle,
} from "lucide-react";
import { Button } from "@base-ui/react";
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
      "Muchos caen en promociones de $1–$3 el primer año, pero la renovación sube a $20–$40. No miran el precio real a largo plazo.",
    whyBad: "Terminás pagando más en total o perdés el dominio por olvido.",
    betterAlternative: "Compará siempre precio inicial + renovación anual.",
  },
  {
    title: "No activar la privacidad WHOIS",
    description:
      "Sin protección, tu nombre, teléfono y email quedan públicos en la base WHOIS. Spammers y estafadores lo usan para acosarte.",
    whyBad: "Recibís spam, intentos de phishing o incluso amenazas.",
    betterAlternative:
      "Elegí proveedores que incluyan WHOIS privacy gratis (Namecheap, Cloudflare, Squarespace).",
  },
  {
    title: "Registrar solo .com y dejar que se lo lleven otros",
    description:
      "Si el .com está tomado, mucha gente se rinde y no registra .io, .co, .app o .online, que pueden ser excelentes alternativas.",
    whyBad:
      "Perdés la oportunidad de tener una marca fuerte en otros TLDs modernos.",
    betterAlternative: "Registrá varias extensiones si tu marca es importante.",
  },
  {
    title: "No poner renovación automática (o ponerla y olvidarse)",
    description:
      "Si no activás renovación automática, podés perder el dominio. Si la activás y no controlás la tarjeta, te cobran sin darte cuenta.",
    whyBad: "Pérdida del dominio o cargos sorpresa.",
    betterAlternative:
      "Activá renovación automática + poné recordatorios en calendario.",
  },
];

export default function CommonMistakes() {
  return (
    <Section
      size="content"
      className="py-20 bg-background"
      id="common-mistakes"
    >
      <div className="container flex flex-col gap-20 items-center">
        {/* Título */}

        <div className="md:text-center flex flex-col gap-5 w-full items-center">
          <div className="flex w-fit justify-center items-center gap-2 rounded-full  px-4 py-2 bg-amber-50 text-amber-700 mb-6">
            <AlertCircle className="h-5 w-5" />
            <span className="text-sm font-medium">Errores a evitar</span>
          </div>

          <h2
            className={`${title} text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6`}
          >
            Los errores más caros que cometen al comprar un dominio
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Aprendé de los errores de otros para no perder dinero, tiempo ni tu
            marca.
          </p>
        </div>
        {/* Lista de errores */}
        <div className="space-y-8 md:space-y-12">
          {mistakes.map((mistake, index) => (
            <div
              key={mistake.title}
              className="border-l-4 border-amber-400 shadow-sm"
            >
              <div className="p-6 ">
                <div className="flex flex-col items-start gap-4">
                  <div className="shrink-0 flex items-center gap-5">
                    <div
                      className="
                      w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center 
                      text-amber-700 font-bold text-xl
                    "
                    >
                      {index + 1}
                    </div>
                    <h3
                      className={`${titleH2} text-xl md:text-2xl font-semibold text-foreground`}
                    >
                      {mistake.title}
                    </h3>
                  </div>

                  <div>
                    <p className="text-gray-700 mb-4">{mistake.description}</p>

                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <XCircle className="h-5 w-5 text-red-600" />
                          <span className="font-medium text-red-800">
                            Por qué es un problema
                          </span>
                        </div>
                        <p className="text-red-700 text-sm">{mistake.whyBad}</p>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="h-5 w-5 text-green-600" />
                          <span className="font-medium text-green-800">
                            Qué hacer en su lugar
                          </span>
                        </div>
                        <p className="text-green-700 text-sm">
                          {mistake.betterAlternative}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
      </div>
    </Section>
  );
}
