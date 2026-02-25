// components/domain-guide/DomainProvider.tsx
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ExternalLink, ShieldCheck, Star } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { title } from "@/app/layout";

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
    bestFor: "Todo en un solo lugar",
    pros: [
      "Muchos TLDs disponibles",
      "Dominio + hosting integrado",
      "Soporte telefónico 24/7",
    ],
    cons: ["Renovaciones caras", "Upsells invasivos", "Whois de pago"],
    link: "https://www.godaddy.com/",
    badge: "Más TLDs",
  },
  {
    name: "Squarespace Domains",
    rating: 4.6,
    bestFor: "Simplicidad y confianza",
    pros: ["Interfaz moderna", "Whois privacy gratis", "Sin upsells molestos"],
    cons: ["Menos TLDs", "Migración reciente"],
    link: "https://domains.squarespace.com/",
    badge: "Más simple",
  },
  {
    name: "Cloudflare Registrar",
    rating: 4.9,
    bestFor: "Precio real y máxima seguridad",
    pros: [
      "Precio de costo real",
      "Whois privacy gratis",
      "Seguridad excelente",
    ],
    cons: ["No ideal para principiantes", "TLDs limitados"],
    link: "https://www.cloudflare.com/products/registrar/",
    badge: "Mejor transparencia",
  },
];

export default function DomainProvider() {
  return (
    <Section size="content" id="providers" className="py-24">
      <div className="container flex flex-col gap-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-indigo-700 mb-6">
            <ShieldCheck className="h-5 w-5" />
            <span className="text-sm font-medium">Proveedores confiables</span>
          </div>

          <h2
            className={`${title} text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6`}
          >
            Mejores registradores de dominios en 2025
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Comparativa honesta con pros, contras y recomendaciones reales según
            el tipo de proyecto.
          </p>
        </div>

        {/* Providers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {providers.map((provider) => (
            <article
              key={provider.name}
              className="relative flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <Badge variant="secondary" className="absolute top-4 right-4">
                {provider.badge}
              </Badge>

              {/* Header */}
              <div className="flex flex-col gap-2 mb-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {provider.name}
                </h3>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(provider.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                  <span>{provider.rating}</span>
                </div>

                <p className="text-sm font-medium text-foreground/80">
                  Mejor para:{" "}
                  <span className="font-normal text-muted-foreground">
                    {provider.bestFor}
                  </span>
                </p>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-5">
                <div>
                  <p className="text-sm font-semibold mb-2">Pros</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {provider.pros.map((pro) => (
                      <li key={pro} className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2">Contras</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {provider.cons.map((con) => (
                      <li key={con} className="flex gap-2">
                        <span className="text-muted-foreground/50">•</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <Button variant="outline" className="mt-6 gap-2" asChild>
                <a
                  href={provider.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver proveedor
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-muted-foreground">
          Información verificada en febrero 2025. Los precios pueden variar
          según promociones y extensión del dominio.
        </p>
      </div>
    </Section>
  );
}
