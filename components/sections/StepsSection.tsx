import React from "react";
import { StaggerContainer } from "../motion/StraggerContainer";
import { FadeIn } from "../motion/FadeIn";
import { StepCard } from "../ui/StepCard";
import { SimpleCTAButton } from "../ui/CTAButton";
import { title } from "@/app/page";

// interface StepsSectionProps {

// }
const steps: { id: string; title: string; text: string }[] = [
  {
    id: "1",
    title: "Consulta inicial",
    text: "Hablamos de tu negocio y lo que necesitás. Te envío una propuesta clara en menos de 24 horas.",
  },
  {
    id: "2",
    title: "Definimos tu web",
    text: "Acordamos contenido, estilo y estructura usando un diseño probado y efectivo.",
  },
  {
    id: "3",
    title: "Tu web lista",
    text: "Desarrollo, ajustes finales y entrega de tu sitio listo para usar y compartir.",
  },
];

const StepsSection = ({}) => {
  return (
    <section
      id="steps"
      className="
    relative w-full
    min-h-[calc(100vh-3.5rem)]
    scroll-mt-14
  "
    >
      <StaggerContainer
        className="
      mx-auto w-full max-w-7xl
      px-4 md:px-6 lg:px-8
      min-h-[calc(100vh-3.5rem)]
      flex flex-col items-center justify-center
      gap-16 md:gap-20
      text-foreground
    "
      >
        <FadeIn>
          <h2
            className={`${title} text-4xl md:text-5xl font-bold tracking-tight text-center`}
          >
            Tu web en pocos pasos
          </h2>
        </FadeIn>

        <div className="grid w-full gap-8 lg:grid-cols-3 auto-rows-fr">
          {steps.map((step) => (
            <FadeIn key={step.id} delay={0.2}>
              <StepCard number={step.id} title={step.title} text={step.text} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <SimpleCTAButton />
        </FadeIn>
      </StaggerContainer>
    </section>
  );
};

export default StepsSection;
