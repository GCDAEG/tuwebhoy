"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Section } from "@/components/layout/Section";
import { base, title, titleH2 } from "@/app/layout";
import { StaggerContainer } from "@/components/motion/StraggerContainer";
import { FadeIn } from "@/components/motion/FadeIn";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const faqs = [
  {
    id: "item-1",
    question: "¿Cómo compro el dominio de mi web?",
    answer: (
      <>
        El dominio es el nombre de tu página (por ejemplo: tunegocio.com). Podés
        comprarlo fácilmente siguiendo nuestra guía paso a paso.{" "}
        <Link
          href="/guide"
          className="text-primary font-medium hover:underline"
        >
          Ver guía para comprar dominio y hosting
        </Link>
        . Si necesitás ayuda, te acompañamos durante todo el proceso.
      </>
    ),
  },
  {
    id: "item-2",
    question: "¿Cuánto tarda en estar lista mi web?",
    answer:
      "En la mayoría de los casos, tu web está lista entre 2 y 5 días. El tiempo depende del contenido y de los ajustes que quieras hacer, pero siempre priorizamos una entrega rápida.",
  },
  {
    id: "item-3",
    question: "¿Qué incluye el servicio?",
    answer:
      "Incluye diseño web claro y profesional, armado completo del sitio, adaptación a celulares y tablets, botón de contacto por WhatsApp y publicación online. Te entregamos una web lista para usar.",
  },
  {
    id: "item-5",
    question: "¿Qué necesito para empezar?",
    answer:
      "Muy poco: el nombre de tu negocio, un número de WhatsApp de contacto y una idea general de lo que querés mostrar. Si no tenés textos, imágenes o logo, te ayudamos a resolverlo.",
  },
  {
    id: "item-6",
    question: "¿Puedo pedir cambios?",
    answer:
      "Sí. Podés pedir ajustes de textos, colores o secciones antes de la entrega final, para que la web quede como esperás.",
  },
  {
    id: "item-7",
    question: "¿Tengo que pagar mantenimiento mensual?",
    answer:
      "No. El desarrollo es un pago único. El dominio y el hosting se pagan de forma anual y quedan a tu nombre, sin costos ocultos ni suscripciones obligatorias.",
  },
];

const FAQS = () => {
  return (
    <Section size="screen" id="faq" className="overflow-hidden bg-background">
      <div
        className={`
          w-full flex flex-col justify-center items-center
          gap-14 py-16
          ${base}
        `}
      >
        <h3
          className={`
              text-3xl md:text-4xl
              font-extrabold
              text-foreground
              ${title}
            `}
        >
          ¿Tenés dudas?
        </h3>

        <div
          className="
              w-full max-w-3xl
              bg-card
              border border-border
              rounded-xl
              shadow-md
              overflow-hidden
            "
        >
          <Accordion type="single" collapsible className="w-full text-start">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b border-border last:border-b-0"
              >
                <AccordionTrigger
                  className={`
                      px-5 py-4
                      md:text-lg
                      font-medium
                      text-foreground
                      hover:no-underline
                      ${titleH2}
                    `}
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent
                  className="
                      px-5 pb-4
                      text-base md:text-lg
                      text-muted-foreground
                      leading-relaxed
                    "
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
};

export default FAQS;
