// components/domain-guide/WhatIsDomain.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Globe, Link2, Server, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/Section";
import { Separator } from "@/components/ui/separator";
import TypewriterDomains from "@/components/ui/TypeWriterDomains";
import { title, titleH2 } from "@/app/layout";

const domainFacts = [
  {
    title: "Dirección única",
    description:
      "Es como la dirección de tu casa en internet: sin ella, nadie sabe dónde encontrarte.",
    icon: Globe,
  },
  {
    title: "Parte visible del DNS",
    description:
      "Detrás funciona un sistema automático (DNS) que se encarga de llevar al visitante al lugar correcto.",
    icon: Link2,
  },
  {
    title: "Tipos principales",
    description:
      ".com, .net, .org (los más comunes) y extensiones como .ar, .es, .io, .app.",
    icon: Server,
  },
  {
    title: "Propiedad y renovación",
    description: "Si no lo renovás a tiempo, otra persona puede comprarlo.",
    icon: ShieldCheck,
  },
] as const;

export default function WhatIsDomain() {
  return (
    <Section
      height="content"
      className="py-20 bg-background rounded-md border-border"
      id="what-is"
    >
      <div className="container">
        {/* Título de sección */}
        <div className="">
          <div className="flex justify-center w-full">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-indigo-700 mb-6">
              <Globe className="h-5 w-5" />
              <span className="text-sm font-medium">Conceptos básicos</span>
            </div>
          </div>

          <div className="flex flex-col gap-10 w-full items-start ">
            <h2
              className={`${titleH2} text-3xl md:text-5xl w-full text-center font-bold tracking-tight text-foreground/90 mb-6`}
            >
              ¿Qué es un dominio exactamente?
            </h2>
            <div className="flex justify-center w-full h-12 items-center">
              <TypewriterDomains />
            </div>
            <p className="text-lg text-start md:text-xl text-foreground/80 leading-relaxed">
              Un dominio no es solo un nombre bonito: es la forma en que las
              personas encuentran tu negocio en internet.
            </p>
          </div>
        </div>

        {/* Contenido principal */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {domainFacts.map((fact) => (
            <Card
              key={fact.title}
              className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow "
            >
              <CardContent className="p-6 text-center">
                <div className="flex w-full justify-center">
                  <div className="p-2 rounded-full bg-indigo-50 flex items-center justify-center">
                    <fact.icon className="size-10 text-indigo-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {fact.title}
                </h3>
                <p className="text-gray-600">{fact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div> */}
        <Separator className="my-5" />
        <div className="grid gap-10 md:grid-cols-2 py-12">
          {domainFacts.map((fact) => (
            <div key={fact.title}>
              <div
                className="
                    h-full rounded-2xl
                    flex
                    flex-col
                    p-5
                    gap-2
                    transition-shadow
                    hover:shadow-md
                  "
              >
                <div className="w-full flex items-center gap-5">
                  <fact.icon className="size-7 text-indigo-600" />
                  <h3
                    className={`
                      text-2xl
                      text-foreground
                      tracking-tight
                      ${titleH2}
                      font-bold
                    `}
                  >
                    {fact.title}
                  </h3>
                </div>
                <Separator />
                <p className="leading-relaxed text-foreground/80">
                  {fact.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
