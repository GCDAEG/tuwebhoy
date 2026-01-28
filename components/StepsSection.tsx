import React from "react";
import { StaggerContainer } from "./motion/StraggerContainer";
import { FadeIn } from "./motion/FadeIn";
import { StepCard } from "./ui/StepCard";
import { SimpleCTAButton } from "./CTAButton";

// interface StepsSectionProps {

// }

const StepsSection = ({}) => {
  return (
    <section
      id="steps"
      className="min-h-[calc(100vh-2rem)] flex flex-col items-center justify-center px-6 pt-20 scroll-mt-14"
    >
      <StaggerContainer className="max-w-5xl mx-auto text-center space-y-12 text-foreground">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Tu web en pocos pasos.
          </h2>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-3">
          <FadeIn delay={0.2} className="w-full">
            <StepCard
              number={1}
              title="Consulta inicial"
              text="Hablamos de tu negocio y necesidades. Te envío propuesta en 24h."
            />
          </FadeIn>

          <FadeIn delay={0.3}>
            <StepCard
              title="Definimos tu web"
              number={2}
              text="Acordamos contenido, estilo y tiempos."
            />
          </FadeIn>

          <FadeIn delay={0.4}>
            <StepCard
              title="Tu web lista"
              number={3}
              text="Sitio entregado, funcionando y listo para usar."
            />
          </FadeIn>
        </div>

        {/* CTA secundario para reforzar conversión */}
        <FadeIn delay={0.6}>
          <div>
            <SimpleCTAButton />
          </div>
        </FadeIn>
      </StaggerContainer>
      <div className="w-screen fill-background">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fillOpacity="1"
            d="M0,256L120,234.7C240,213,480,171,720,144C960,117,1200,107,1320,101.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default StepsSection;
