import React from "react";
import { StaggerContainer } from "../../../components/motion/StraggerContainer";
import { FadeIn } from "../../../components/motion/FadeIn";
import { StepCard } from "../../../components/ui/StepCard";
import { CTAButton } from "../../../components/ui/CTAButton";
import { Section } from "@/components/layout/Section";
import { title } from "@/app/layout";

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
    <Section height="screen" id="steps" className="bg-background flex">
      <div
        className="
      w-full 
      flex flex-col items-center justify-center
      gap-16
      text-foreground
      h-full
      
    "
      >
        <h2
          className={`text-4xl md:text-5xl
          font-bold
          tracking-tight
          text-center md:text-center ${title}`}
        >
          Tu web en pocos pasos
        </h2>

        <div className="grid w-full gap-8 lg:grid-cols-3 auto-rows-fr justify-center">
          {steps.map((step) => (
            <StepCard
              key={step.id}
              number={step.id}
              title={step.title}
              description={step.text}
              // className="max-w-3xl" // opcional: para controlar ancho
              className="md:max-w-md lg:max-w-xl"
            />
          ))}
        </div>

        <CTAButton
          text="Contactar ahora"
          size="md"
          variant="primary"
          className="rounded-md text-xl"
        />
      </div>
    </Section>
  );
};

export default StepsSection;
