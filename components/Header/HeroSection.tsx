import React from "react";
import { title, title as titleFont } from "@/app/page";
import Image from "next/image";
import { ArrowBigRight } from "lucide-react";
import { HeroCTAButton } from "../CTAButton";
import Logo from "./Logo";
// interface HeroSectionProps {}

const HeroSection = ({}) => {
  return (
    <section
      className={`max-h-screen w-full
          px-6 md:px-12 lg:px-20
          text-center text-foreground
          overflow-hidden
          relative
          min-h-[calc(100vh-2rem)] grid grid-row-2 xl:grid-rows-none xl:grid-cols-2
          scroll-mt-14
          ${titleFont}`}
      id="hero"
    >
      <div className=" flex-1 flex row-span-1 md:col-span-1 items-center justify-center">
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
          className={`text-5xl md:text-6xl xl:text-7xl text-start ${title} font-bold text-foreground`}
        >
          Impulsá tu negocio con una web moderna
        </h1>
        <p className="text-start md:text-xl text-muted-foreground">
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
    </section>
  );
};

export default HeroSection;
