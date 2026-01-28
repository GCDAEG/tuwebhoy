"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StaggerContainer } from "./motion/StraggerContainer";
import { FadeIn } from "./motion/FadeIn";
import { base, title } from "@/app/page";

const FAQS = ({}) => {
  return (
    <section
      id="faq"
      className={`flex flex-col items-center justify-center px-6 py-20 bg-background w-screen text-foreground min-h-[calc(100vh-2rem)] scroll-mt-14`}
    >
      <StaggerContainer
        className={`max-w-5xl min-h-5xl w-full flex items-center flex-col justify-center text-center space-y-12 ${base}`}
      >
        <FadeIn>
          <h3
            className={`text-3xl md:text-4xl font-extrabold font-poppins  ${title}`}
          >
            ¿Tenes dudas?
          </h3>
        </FadeIn>
        {/* Cards de ejemplo - reemplaza con tu contenido */}
        <FadeIn delay={0.2}>
          <div className="w-screen max-w-[350] md:max-w-[700]">
            <Accordion type="single" collapsible className="w-full text-start ">
              <AccordionItem value="item-1 ">
                <AccordionTrigger className={`md:text-xl pl-2 ${title}`}>
                  ¿Cómo compro el dominio de mi web?
                </AccordionTrigger>
                <AccordionContent className=" md:text-lg pl-2">
                  El dominio es el nombre de tu página (por ejemplo:
                  tunegocio.com). Podés comprarlo fácilmente siguiendo nuestra
                  guía paso a paso. 👉 Ver guía para comprar dominio y hosting
                  (link a tu guía) Si necesitás ayuda, te acompañamos durante el
                  proceso.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className={`md:text-xl pl-2 ${title}`}>
                  ¿Cuánto tarda en estar lista mi web?
                </AccordionTrigger>
                <AccordionContent className="pl-2 md:text-lg">
                  En la mayoría de los casos, tu web está lista entre 2 y 5
                  días. El tiempo depende del contenido y de los ajustes que
                  quieras hacer, pero siempre priorizamos una entrega rápida.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className={`md:text-xl pl-2 ${title}`}>
                  ¿Qué incluye el servicio?
                </AccordionTrigger>
                <AccordionContent className="pl-2 md:text-lg">
                  El servicio incluye: Diseño web claro y profesional Armado
                  completo de la página Adaptación a celulares y tablets Botón
                  de contacto por WhatsApp Publicación online y funcionamiento
                  correcto Te entregamos una web lista para usar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className={`md:text-xl pl-2 ${title}`}>
                  ¿Qué necesito para empezar?
                </AccordionTrigger>
                <AccordionContent className="pl-2 md:text-lg">
                  Muy poco: Nombre de tu negocio Un número de WhatsApp de
                  contacto Una idea general de lo que querés mostrar Si no tenés
                  textos, imágenes o logo, te ayudamos a resolverlo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className={`md:text-xl pl-2 ${title}`}>
                  ¿Puedo pedir cambios?
                </AccordionTrigger>
                <AccordionContent className="pl-2 md:text-lg">
                  Sí. Podés pedir ajustes de textos, colores o secciones antes
                  de la entrega final, para que la web quede como esperás.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className={`md:text-xl pl-2 ${title}`}>
                  ¿Tengo que pagar mantenimiento mensual?
                </AccordionTrigger>
                <AccordionContent className="pl-2 md:text-lg">
                  No. El desarrollo es un pago único. El dominio y el hosting se
                  pagan de forma anual y quedan a tu nombre, sin costos ocultos
                  ni suscripciones obligatorias.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </FadeIn>
      </StaggerContainer>
    </section>
  );
};

export default FAQS;
