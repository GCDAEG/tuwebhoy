import React from "react";
import { StaggerContainer } from "../../../components/motion/StraggerContainer";
import { Separator } from "../../../components/ui/separator";
import { Section } from "@/components/layout/Section";
import { title, titleH2 } from "@/app/layout";

const features: { id: string; title: string; text: string }[] = [
  {
    id: "1",
    title: "Tu web lista en días",
    text: "Landing pages profesionales listas en pocos días, sin vueltas ni procesos eternos.",
  },
  {
    id: "2",
    title: "Diseño moderno y claro",
    text: "Diseños actuales basados en buenas prácticas. Nada genérico, nada recargado.",
  },
  {
    id: "3",
    title: "No necesitás logo",
    text: "Si todavía no tenés logo o identidad visual, te ayudamos a crear uno simple y funcional.",
  },
  {
    id: "4",
    title: "Precio accesible",
    text: "Webs pensadas para emprendedores y negocios chicos, con costos claros desde el inicio.",
  },
  {
    id: "5",
    title: "Optimizada para celulares",
    text: "Tu web se ve perfecta en móvil, tablet y desktop desde el primer día.",
  },
  {
    id: "6",
    title: "Lista para mostrar y vender",
    text: "Tu sitio queda listo para compartir por WhatsApp, redes sociales o publicidad.",
  },
];

const FeatureSection = () => {
  return (
    <Section
      size="screen"
      id="features"
      animate={false}
      className="bg-background flex items-center"
    >
      <StaggerContainer
        className="
          w-full py-16
          flex flex-col items-center
          gap-16 md:gap-20
          text-foreground
        "
      >
        <h2
          className={`
            text-4xl md:text-5xl
            font-bold tracking-tight
            text-center
            ${title}
          `}
        >
          ¿Por qué elegirnos?
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="
        relative
        flex flex-col gap-3
        pl-6
      "
            >
              {/* Detalle visual */}
              <div className="absolute left-0 top-0 h-10 w-1 rounded-full bg-primary/60" />

              <div className="h-10 border flex items-center">
                <h3
                  className={`
          text-2xl font-semibold
          
          tracking-tight
          ${titleH2}
        `}
                >
                  {feature.title}
                </h3>
              </div>

              <Separator className="max-w-24" />

              <p className="leading-relaxed text-muted-foreground">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </StaggerContainer>
    </Section>
  );
};

export default FeatureSection;
