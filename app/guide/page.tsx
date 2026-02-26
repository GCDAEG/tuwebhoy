import React from "react";
import DomainIntro from "./(sections)/DomainIntro";
import WhatIsDomain from "./(sections)/WhatIsDomain";
import DomainProvider from "./(sections)/DomainProvider";
import WhereToBuy from "./(sections)/WhereToBuy";
import CommonMistakes from "./(sections)/CommonMistakes";
import DomainStepsSection from "./(sections)/DomainStepsSection";
import { Separator } from "@/components/ui/separator";

interface pageProps {}
const domainSteps: {
  id: string;
  title: string;
  text: string;
}[] = [
  {
    id: "1",
    title: "Elegí el nombre de tu dominio",
    text: "Pensá un nombre simple y fácil de recordar. Lo ideal es que sea el nombre de tu negocio o algo relacionado a lo que ofrecés (por ejemplo: tunegocio.com).",
  },
  {
    id: "2",
    title: "Verificá si está disponible",
    text: "Buscá el dominio en un proveedor de dominios para ver si está libre. Si no está disponible, podés probar variantes similares.",
  },
  {
    id: "3",
    title: "Registralo a tu nombre",
    text: "Una vez disponible, comprás el dominio y lo registrás con tus datos. El dominio queda a tu nombre y se renueva una vez por año.",
  },
  {
    id: "4",
    title: "Conectalo con tu web",
    text: "Configuramos el dominio para que apunte a tu página web. Si lo necesitás, te acompañamos en todo el proceso.",
  },
];

const page: React.FC<pageProps> = ({}) => {
  return (
    <main
      id="domain-guide"
      className="domain-guide-theme flex min-h-screen flex-col relative p-0 md:p-0 xl:p-0  items-center"
    >
      <DomainIntro />
      <Separator className=" bg-muted-foreground/30 max-w-xs md:max-w-lg" />
      <div className="w-full bg-background">
        <WhatIsDomain />
        <Separator className=" bg-muted-foreground/30 max-w-xs md:max-w-lg" />
        <DomainProvider />
        <Separator className=" bg-muted-foreground/30 max-w-xs md:max-w-lg" />
        <WhereToBuy />
        <Separator className=" bg-muted-foreground/30 max-w-xs md:max-w-lg" />
        <CommonMistakes />
        <Separator className=" bg-muted-foreground/30 max-w-xs md:max-w-lg" />
        <DomainStepsSection />
        <Separator className=" bg-muted-foreground/30 max-w-xs md:max-w-lg" />
      </div>
    </main>
  );
};

export default page;
