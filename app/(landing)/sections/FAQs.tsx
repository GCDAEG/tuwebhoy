"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/layout/Section";
import { HelpCircle, ArrowRightCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const faqs = [
  {
    id: "item-1",
    question: "¿Cómo compro el dominio de mi web?",
    answer: (
      <>
        El dominio es el nombre de tu página (ej: tunegocio.com). Podés
        comprarlo fácilmente siguiendo nuestra guía paso a paso.{" "}
        <Link
          href="/guide"
          className="text-primary font-bold hover:underline inline-flex items-center gap-1"
        >
          Ver guía <ArrowRightCircle className="size-3" />
        </Link>
        . Si necesitás ayuda, te acompañamos sin costo en el proceso.
      </>
    ),
  },
  {
    id: "item-2",
    question: "¿Cuánto tarda en estar lista mi web?",
    answer:
      "Normalmente entre 2 y 5 días hábiles. Depende de qué tan rápido nos envíes la info, pero nuestra prioridad es que estés online lo antes posible.",
  },
  {
    id: "item-3",
    question: "¿Qué incluye exactamente el servicio?",
    answer:
      "Diseño profesional, estructura optimizada para ventas, adaptación total a celulares, botón directo a tu WhatsApp y la publicación final en internet.",
  },
  {
    id: "item-5",
    question: "¿Qué necesito enviarte para empezar?",
    answer:
      "Solo el nombre de tu negocio y tu número de contacto. Si no tenés logo o fotos, no te preocupes: nosotros te ayudamos a resolver la estética inicial.",
  },
  {
    id: "item-7",
    question: "¿Tengo que pagar mantenimiento mensual?",
    answer:
      "No. El desarrollo se paga una sola vez. Solo deberás renovar tu dominio y hosting anualmente (que quedan a tu nombre), sin comisiones para nosotros.",
  },
];

const FAQS = () => {
  return (
    <Section id="faq" className="bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* COLUMNA IZQUIERDA: Títulos */}
          <div className="lg:w-1/3 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <HelpCircle className="size-3" /> FAQ
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-foreground leading-[1.1] tracking-tighter italic uppercase">
              Dudas <br />
              <span className="text-primary">Frecuentes.</span>
            </h2>
            <p className="mt-6 text-muted-foreground font-medium">
              Todo lo que necesitás saber antes de empezar tu transformación
              digital con nosotros.
            </p>

            <div className="mt-10 p-6 rounded-3xl bg-secondary/50 border border-border hidden lg:block">
              <Sparkles className="size-6 text-primary mb-4" />
              <p className="text-sm font-bold text-foreground italic uppercase mb-2">
                ¿Otra pregunta?
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Si tenés una duda específica, escribinos por WhatsApp y te
                respondemos en minutos.
              </p>
            </div>
          </div>

          {/* COLUMNA DERECHA: Acordeones */}
          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-border bg-card/30 rounded-2xl px-6 overflow-hidden transition-all duration-300 data-[state=open]:border-primary/40 data-[state=open]:bg-card data-[state=open]:shadow-xl data-[state=open]:shadow-primary/5"
                >
                  <AccordionTrigger className="py-6 text-left hover:no-underline hover:text-primary transition-colors text-base md:text-lg font-bold tracking-tight uppercase italic italic">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-6 font-medium">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FAQS;
