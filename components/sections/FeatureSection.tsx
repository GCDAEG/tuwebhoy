import React from "react";
import { StaggerContainer } from "../motion/StraggerContainer";
import { FadeIn } from "../motion/FadeIn";
import { title } from "@/app/page";
import { Separator } from "../ui/separator";

// interface FeatureSectionProps {}
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
const FeatureSection = ({}) => {
  return (
    <section
      id="features"
      className="
    relative w-full
    min-h-[calc(100vh-3.5rem)]
    scroll-mt-14
    flex items-center
    py-16
  "
    >
      <StaggerContainer
        className="
      mx-auto w-full max-w-7xl
      px-4 md:px-6 lg:px-8
      flex flex-col items-center
      gap-16 md:gap-20
      text-foreground
    "
      >
        <FadeIn>
          <h2
            className={`
          text-4xl md:text-5xl
          font-bold
          tracking-tight
          text-center
          ${title}
        `}
          >
            ¿Por qué elegirnos?
          </h2>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FadeIn key={feature.id} delay={0.2}>
              <div
                className="
            h-full rounded-2xl
            p-6
            transition-shadow
            hover:shadow-md
          "
              >
                <h3
                  className={`
              mb-3 text-2xl
              font-semibold
              tracking-tight
              ${title}
            `}
                >
                  {feature.title}
                </h3>
                <Separator />
                <p className="leading-relaxed text-muted-foreground">
                  {feature.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
};

export default FeatureSection;
