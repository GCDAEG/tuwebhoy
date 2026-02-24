import React from "react";
import { title, title as titleFont } from "@/app/layout";
import { HeroCTAButton } from "../../../components/ui/CTAButton";
import { Section } from "@/components/layout/Section";
import HeroGeometric2 from "@/components/ui/HeroGeometric2";

// interface HeroSectionProps {}

const HeroSection = ({}) => {
  return (
    <Section
      size="screen"
      className={` justify-center 
          ${titleFont}`}
      id="hero"
    >
      <div className="flex flex-col items-center justify-end it gap-5 xl:flex-row py-5 md:p-0">
        <div className="flex-1 flex justify-center items-center w-full h-full">
          {/* <Option1CirclesPulse /> */}

          <HeroGeometric2 />
        </div>
        <div className="flex flex-1 flex-col gap-5 md:gap-6 xl:gap-5 md:justify-center">
          <h1
            className={`text-5xl md:text-6xl xl:text-7xl 2xl:text-7xl ${title} font-bold text-foreground leading-tight`}
          >
            Impulsá tu negocio con una web moderna
          </h1>
          <p className="text-start md:text-xl text-muted-foreground leading-relaxed ">
            Diseñamos y desarrollamos tu sitio web para que tu negocio se vea
            profesional, claro y confiable desde el primer día.
          </p>
          <div className="w-full flex  pt-5">
            <HeroCTAButton
              text="Empezar por WhatsApp"
              href="https://wa.me/549..."
              className="rounded-tl-md rounded-br-md text-sm md:text-lg"
            />
            {/* <a className="flex space-x-5 rounded-bl-md w-fit px-5 py-2 font-bold text-xs items-center ">
              <p className="underline text-nowrap"> Aprender más</p>
              <ArrowBigRight />
            </a> */}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
