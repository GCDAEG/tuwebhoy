// components/domain-guide/WhereToBuy.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  DollarSign,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { title, titleH2 } from "@/app/layout";

const steps = [
  {
    number: 1,
    title: "Buscá tu dominio ideal",
    description:
      "En el sitio del proveedor, escribí el nombre que querés en la barra de búsqueda. Revisá si está disponible en los TLD que te interesan (.com, .io, .app, .ar, etc.).",
    tip: "Usá variaciones: .online, .co, .tech si el .com está tomado.",
  },
  {
    number: 2,
    title: "Revisá el precio real",
    description:
      "Muchos proveedores ofrecen descuentos agresivos el primer año, pero la renovación puede ser 2x o 3x más cara.",
    tip: "Mirá siempre el precio de renovación antes de comprar.",
  },
  {
    number: 3,
    title: "Agregá privacidad WHOIS",
    description:
      "Sin privacidad, tu nombre, teléfono y email quedan públicos en la base WHOIS. La mayoría de buenos proveedores la incluyen gratis.",
    tip: "Evitá proveedores que cobren extra por esto en 2025.",
  },
  {
    number: 4,
    title: "Completá el pago y confirmá",
    description:
      "Usá tarjeta, PayPal o transferencia. Revisá que el dominio aparezca en tu cuenta y que la renovación automática esté activada (o desactivala si preferís control manual).",
    tip: "Guardá el email de confirmación y los datos de acceso.",
  },
];

const priceComparison = [
  {
    provider: "Namecheap",
    firstYear: "$8–12",
    renewal: "$13–16",
    privacy: "Gratis",
  },
  {
    provider: "GoDaddy",
    firstYear: "$1–5 (promo)",
    renewal: "$18–25",
    privacy: "$10/año",
  },
  {
    provider: "Cloudflare",
    firstYear: "Costo real (~$9–15)",
    renewal: "Costo real",
    privacy: "Gratis",
  },
  {
    provider: "Squarespace",
    firstYear: "$12–20",
    renewal: "$20–25",
    privacy: "Gratis",
  },
];

export default function WhereToBuy() {
  return (
    <Section
      height="content"
      className={`py-20 md:py-32 bg-background `}
      id="where-to-buy"
    >
      <div className="container flex flex-col gap-16">
        {/* Título */}
        <div className="md:text-center">
          <div className="flex w-full justify-center items-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-indigo-700 mb-6">
              <DollarSign className="h-5 w-5" />
              <span className="text-sm font-medium">Proceso de compra</span>
            </div>
          </div>

          <h2
            className={`${titleH2} text-3xl md:text-5xl text-center font-bold tracking-tight text-gray-900 mb-6`}
          >
            Dónde y cómo comprar tu dominio paso a paso
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Una vez que sabés qué es un dominio y qué proveedor elegir, estos
            son los pasos reales para no cometer errores caros.
          </p>
        </div>

        {/* Pasos numerados */}
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
                <div className="flex h-full flex-1 justify-start items-center">
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
                <div className="inline-flex items-center gap-2 text-sm text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full">
                  <AlertCircle className="h-4 w-4" />
                  <span>TIP: {step.tip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparativa rápida de precios */}
        {/* <Card className="border border-gray-200 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Comparativa rápida de precios (dominios .com 2025)
            </CardTitle>
            <CardDescription>
              Precios aproximados en USD. Promociones primer año vs renovación
              real.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-4">Proveedor</th>
                    <th className="px-6 py-4">Primer año</th>
                    <th className="px-6 py-4">Renovación</th>
                    <th className="px-6 py-4">Privacidad WHOIS</th>
                  </tr>
                </thead>
                <tbody>
                  {priceComparison.map((row) => (
                    <tr
                      key={row.provider}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {row.provider}
                      </td>
                      <td className="px-6 py-4">{row.firstYear}</td>
                      <td className="px-6 py-4">{row.renewal}</td>
                      <td className="px-6 py-4">
                        {row.privacy === "Gratis" ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : (
                          row.privacy
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Ver proveedores recomendados
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </Section>
  );
}
