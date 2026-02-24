// components/domain-guide/DomainStepsSection.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ArrowRight,
  Copy,
  ExternalLink,
  Globe,
  ShoppingCart,
  DollarSign,
  Server,
  ListOrdered,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { base, titleH2 } from "@/app/layout";

const steps = [
  {
    number: 1,
    title: "Elegí y verificá disponibilidad",
    description:
      "Buscá tu nombre deseado en el sitio del proveedor. Revisá varias extensiones (.com, .io, .app, .ar, etc.) y anotá las que estén libres.",
    icon: <Globe className="h-7 w-7 text-indigo-600" />,
    tip: "Usá herramientas como Namecheap o Cloudflare para ver disponibilidad instantánea.",
  },
  {
    number: 2,
    title: "Agregá al carrito y completá datos",
    description:
      "Añadí el dominio al carrito. Ingresá tus datos de contacto (nombre, email, dirección). Activá WHOIS privacy si no está incluida por defecto.",
    icon: <ShoppingCart className="h-7 w-7 text-indigo-600" />,
    tip: "Revisá dos veces el email: ahí llegarán los datos de acceso y confirmación.",
  },
  {
    number: 3,
    title: "Seleccioná período y pago",
    description:
      "Elegí 1–10 años (recomendado: 2 años mínimo para evitar olvidos). Pagá con tarjeta, PayPal o transferencia. Confirmá que no haya cargos ocultos.",
    icon: <DollarSign className="h-7 w-7 text-indigo-600" />,
    tip: "Activá renovación automática si confiás en el proveedor y querés cero riesgo de pérdida.",
  },
  {
    number: 4,
    title: "Configurá DNS y apuntá tu web",
    description:
      "Una vez comprado, cambiá los nameservers o registros DNS para que apunte a tu hosting (SiteGround, Vercel, Netlify, etc.).",
    icon: <Server className="h-7 w-7 text-indigo-600" />,
    tip: "La propagación DNS puede tardar 1–48 horas. Mientras, usá el parking page del proveedor.",
  },
  {
    number: 5,
    title: "Verificá todo y guardá comprobantes",
    description:
      "Ingresá a tu cuenta, confirmá que el dominio está activo, guardá el recibo y configurá alertas de renovación. ¡Listo!",
    icon: <CheckCircle2 className="h-7 w-7 text-indigo-600" />,
    tip: "Hacé captura de pantalla de la confirmación y guardala en tu gestor de contraseñas.",
  },
];

export default function DomainStepsSection() {
  return (
    <Section id="steps" size="content" className="py-20">
      <div className="container flex flex-col gap-20">
        {/* Título */}
        <div className="md:text-center flex flex-col gap-5">
          <div className="w-full flex justify-center items-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-indigo-700 mb-6">
              <ListOrdered className="h-5 w-5" />
              <span className="text-sm font-medium">Paso a paso</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Cómo registrar tu dominio en 5 pasos simples
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Una vez elegido el nombre y el proveedor, el proceso es rápido y
            directo. Seguilos para no cometer errores.
          </p>
        </div>

        {/* Pasos */}
        {/* <div className="space-y-10 md:space-y-16">
          {steps.map((step, index) => (
            <Card
              key={step.number}
              className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="shrink-0">
                    <div
                      className="
                      w-14 h-14 md:w-16 md:h-16 
                      rounded-full bg-indigo-100 flex items-center justify-center 
                      text-indigo-700 font-bold text-2xl md:text-3xl
                    "
                    >
                      {step.number}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      {step.icon}
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <div className="inline-flex items-center gap-2 text-sm bg-indigo-50 text-indigo-800 px-3 py-1.5 rounded-full">
                      <span className="font-medium">Consejo rápido:</span>
                      <span>{step.tip}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}
        <div className="grid lg:grid-cols-2  gap-16 justify-center">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-col gap-2 max-w-xl bg-linear-to-bl from-card/65 to-indigo-50/80 shadow-sm border-border  rounded-md relative overflow-hidden"
            >
              <div
                className="
                            w-full min-h-12
                              items-center justify-starat 
                            text-indigo-700 font-bold text-xl md:text-2xl flex
                            sticky top-0 left-0
                            border-b
                            gap-5
                          "
              >
                <div className="h-full items-center justify-center flex p-3 bg-indigo-100/20">
                  <p>{step.number}</p>
                </div>
                <div className="flex gap-5 h-full flex-1 justify-start items-center">
                  <h3
                    className={`text-lg md:text-xl text-foreground ${titleH2}`}
                  >
                    {step.title}
                  </h3>
                </div>
              </div>
              {/* <div className="shrink-0 h-full flex items-center">
                          <div
                            className="
                            w-12 h-12 md:w-16 md:h-16 
                            rounded-full bg-indigo-100 items-center justify-center 
                            text-indigo-700 font-bold text-xl md:text-2xl hidden md:flex
                          "
                          >
                            {step.number}
                          </div>
                        </div> */}
              <div className="flex-1 flex flex-col p-2 px-3">
                <div className="flex-1 ">
                  <p className="text-gray-700 leading-relaxed mb-3 text-balance">
                    {step.description}
                  </p>
                </div>
                <div className="flex flex-col text-sm text-indigo-700 bg-indigo-50 rounded-md p-2">
                  <span className={`${titleH2} font-semibold`}>Consejo</span>
                  <span>{step.tip}</span>
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
