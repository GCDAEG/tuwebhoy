// components/domain-guide/DomainStepsSection.tsx
import React from "react";
import {
  CheckCircle2,
  Globe,
  ShoppingCart,
  DollarSign,
  Server,
  ListOrdered,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { titleH2 } from "@/app/layout";

const steps = [
  {
    number: 1,
    title: "Elegí y verificá disponibilidad",
    description:
      "Buscá tu nombre deseado en el sitio del proveedor. Revisá varias extensiones (.com, .io, .app, .ar, etc.) y anotá las que estén libres.",
    icon: <Globe className="h-6 w-6" />,
    tip: "Probá el mismo nombre en varias extensiones antes de decidir.",
  },
  {
    number: 2,
    title: "Agregá al carrito y completá datos",
    description:
      "Añadí el dominio al carrito e ingresá tus datos reales. Activá WHOIS privacy si no viene incluida.",
    icon: <ShoppingCart className="h-6 w-6" />,
    tip: "Usá un email que controles a largo plazo.",
  },
  {
    number: 3,
    title: "Seleccioná período y pago",
    description:
      "Elegí el período (mínimo recomendado: 2 años). Revisá el total antes de pagar para evitar cargos ocultos.",
    icon: <DollarSign className="h-6 w-6" />,
    tip: "La renovación automática evita perder el dominio.",
  },
  {
    number: 4,
    title: "Configurá DNS y apuntá tu web",
    description:
      "Configurá los nameservers o registros DNS para que apunten a tu hosting o plataforma.",
    icon: <Server className="h-6 w-6" />,
    tip: "La propagación puede tardar hasta 48 hs.",
  },
  {
    number: 5,
    title: "Verificá todo y guardá comprobantes",
    description:
      "Confirmá que el dominio esté activo, guardá el recibo y configurá alertas de renovación.",
    icon: <CheckCircle2 className="h-6 w-6" />,
    tip: "Guardá capturas en tu gestor de contraseñas.",
  },
];

export default function DomainStepsSection() {
  return (
    <Section id="steps" size="content" className="py-24 bg-background">
      <div className="container flex flex-col gap-20">
        {/* Header */}
        <div className="text-center flex flex-col gap-6">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-800">
              <ListOrdered className="h-5 w-5" />
              <span className="text-sm font-medium">Paso a paso</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Cómo registrar tu dominio sin errores
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Seguí estos 5 pasos simples y evitá problemas comunes al comprar tu
            dominio.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-2 gap-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="
                relative rounded-xl border border-border
                bg-linear-to-br from-white to-indigo-50/70
                shadow-sm hover:shadow-md transition-shadow
                overflow-hidden
              "
            >
              {/* Header del paso */}
              <div className="flex items-center gap-4 px-5 py-4 border-b bg-indigo-100/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-600 text-white font-bold">
                  {step.number}
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-indigo-700">{step.icon}</div>
                  <h3 className={`text-lg md:text-xl ${titleH2}`}>
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col gap-4">
                <p className="text-gray-700 leading-relaxed text-balance">
                  {step.description}
                </p>

                {/* Tip */}
                <div className="rounded-lg bg-indigo-50 border border-indigo-100 p-3 text-sm">
                  <span className="font-semibold text-indigo-800">
                    Consejo:
                  </span>{" "}
                  <span className="text-indigo-700">{step.tip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
