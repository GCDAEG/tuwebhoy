import React from "react";
import { title, title as titleFont } from "@/app/page";
import Image from "next/image";
import { ArrowBigRight } from "lucide-react";
import { HeroCTAButton } from "../../ui/CTAButton";
import Logo from "./Logo";
// interface HeroSectionProps {}

const HeroSection = ({}) => {
  return (
    <section
      className={`w-full
          overflow-hidden
          relative
          min-h-[calc(100vh-2rem)] 
          scroll-mt-14
          flex items-center justify-center
          ${titleFont}`}
      id="hero"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 grid grid-cols-1 xl:grid-cols-2 items-center justify-center text-center text-foreground">
        <div className="flex items-center justify-center">
          {/* <div className="relative aspect-square w-xs md:w-sm lg:w-lg max-w-xl h-fit overflow-hidden">
          <Image
            src="/g312.png"
            alt="tuwebhoylogo"
            fill
            objectFit="contain" // ← Prop directa (funciona en Next.js 13+)
            // className="object-cover" // si preferís Tailwind
          />
        </div> */}
          <div className="relative aspect-square w-xs md:w-sm lg:w-md max-w-xl h-fit overflow-hidden">
            <Logo color="#ffffff" />
          </div>
        </div>
        <div className="flex row-span-1 md:col-span-1 flex-col space-y-5 md:justify-center">
          <h1
            className={`text-5xl md:text-6xl xl:text-7xl text-start ${title} font-bold text-foreground leading-tight`}
          >
            Impulsá tu negocio con una web moderna
          </h1>
          <p className="text-start md:text-xl text-muted-foreground leading-relaxed">
            Diseñamos y desarrollamos tu sitio web para que tu negocio se vea
            profesional, claro y confiable desde el primer día.
          </p>
          <div className="w-full flex space-x-2 md:justify-start ">
            <HeroCTAButton></HeroCTAButton>
            <a className="flex space-x-5 rounded-bl-md w-fit px-5 py-2 font-bold text-xs items-center ">
              <p className="underline text-nowrap"> Aprender más</p>
              <ArrowBigRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
