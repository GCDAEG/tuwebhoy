// components/domain-guide/DomainProvider.tsx
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ExternalLink, ShieldCheck, Star } from "lucide-react";
import { Section } from "@/components/layout/Section";

const providers = [
  {
    name: "Namecheap",
    rating: 4.8,
    bestFor: "Precios bajos y renovación justa",
    pros: [
      "Dominios muy baratos el primer año",
      "Renovación sin abusos",
      "Whois privacy gratis",
      "Soporte 24/7",
    ],
    cons: ["Interfaz algo antigua", "Upsells frecuentes"],
    link: "https://www.namecheap.com/",
    badge: "Mejor precio inicial",
  },
  {
    name: "GoDaddy",
    rating: 4.2,
    bestFor: "Usuarios que buscan todo en un solo lugar",
    pros: [
      "Muchos TLDs disponibles",
      "Hosting + dominio integrado",
      "Soporte telefónico 24/7",
      "Promociones agresivas",
    ],
    cons: [
      "Renovaciones caras",
      "Upsells muy invasivos",
      "Whois privacy de pago",
    ],
    link: "https://www.godaddy.com/",
    badge: "Más TLDs",
  },
  {
    name: "Google Domains (ahora Squarespace)",
    rating: 4.6,
    bestFor: "Simplicidad y confianza",
    pros: [
      "Interfaz limpia y moderna",
      "Whois privacy gratis",
      "Integración con Google Workspace",
      "Sin upsells molestos",
    ],
    cons: ["Menos TLDs exóticos", "Migración reciente a Squarespace"],
    link: "https://domains.squarespace.com/",
    badge: "Más simple",
  },
  {
    name: "Cloudflare Registrar",
    rating: 4.9,
    bestFor: "Usuarios técnicos / precio real sin trucos",
    pros: [
      "Precio de costo real (sin markup)",
      "Seguridad excelente",
      "Whois privacy gratis",
      "Muy rápido",
    ],
    cons: ["Solo TLDs populares", "No para principiantes absolutos"],
    link: "https://www.cloudflare.com/products/registrar/",
    badge: "Mejor transparencia",
  },
];

export default function DomainProvider() {
  return (
    <Section size="content" className="py-20  bg-background" id="providers">
      <div className="container flex flex-col gap-12">
        {/* Título de sección */}
        <div className="md:text-center">
          <div className="flex w-full justify-center items-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-indigo-700 mb-6">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-sm font-medium">
                Proveedores confiables 2026
              </span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Los mejores registradores de dominios en 2025
          </h2>

          <p className="text-md md:text-xl text-gray-600 leading-relaxed">
            Comparativa actualizada con precios reales, pros, contras y
            recomendaciones según tu necesidad.
          </p>
        </div>

        {/* Grid de proveedores */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 lg:gap-8">
          {providers.map((provider) => (
            <div
              key={provider.name}
              className="flex flex-col overflow-hidden rounded-md px-5 py-7 relative border-border shadow-sm bg-linear-to-bl from-card/65 to-indigo-50/80"
            >
              <Badge
                variant="secondary"
                className="absolute top-2 right-2 bg-indigo-100 text-indigo-800"
              >
                {provider.badge}
              </Badge>
              <div className="flex flex-col gap-2 relative">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">
                    {provider.name}
                  </h3>
                </div>

                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(provider.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-1">
                    {provider.rating}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-700 mb-3">
                  Mejor para: {provider.bestFor}
                </p>
              </div>

              <div className="flex flex-col flex-1">
                <div className="space-y-4 flex-1">
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-1">
                      Pros
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {provider.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-1">
                      Contras
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {provider.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-500">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-6 gap-2" asChild>
                  <a
                    href={provider.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visitar sitio
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Nota final */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            Precios y condiciones verificados en febrero 2025. Pueden variar
            según promociones y TLD.
          </p>
        </div>
      </div>
    </Section>
  );
}
