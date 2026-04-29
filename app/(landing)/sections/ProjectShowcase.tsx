"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Monitor, Smartphone } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  tags?: string[];
  category?: string;
};

const fallbackProjects: Project[] = [
  {
    title: "Estudio Jurídico Corporativo",
    category: "Legal & Professional",
    description:
      "Diseño institucional con foco en autoridad y conversión directa vía WhatsApp.",
    image: "https://landing-abogados-eosin.vercel.app/preview.jpeg",
    liveUrl: "https://landing-abogados-eosin.vercel.app",
    tags: ["Next.js", "Tailwind", "SEO"],
  },
  {
    title: "Gimnasio High Performance",
    category: "Fitness & Health",
    description:
      "Landing moderna con sistema de planes y captura de leads para clases de prueba.",
    image: "https://gymdemotwh.vercel.app/preview.jpeg",
    liveUrl: "https://gymexample-delta.vercel.app/",
    tags: ["Framer Motion", "Conversion"],
  },
  {
    title: "Hospedaje & Cabañas",
    category: "Tourism",
    description:
      "Interfaz inmersiva enfocada en visuales de alta calidad y reservas rápidas.",
    image: "https://hospedajedemo2.vercel.app/preview1.jpeg",
    liveUrl: "https://hospedajedemo2.vercel.app/",
    tags: ["Mobile First", "UI/UX"],
  },
];

export default function ProjectShowcase({
  projects,
}: {
  projects?: Project[];
}) {
  const data = projects ?? fallbackProjects;

  return (
    <Section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Portfolio Seleccionado
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-foreground leading-[1.1] tracking-tighter uppercase italic">
              Páginas <br />
              <span className="text-primary">de ejemplo.</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-medium max-w-xs md:text-right text-sm">
            Landing pages diseñadas para convertir visitantes en clientes reales
            desde el primer día.
          </p>
        </div>

        {/* GRID DE PROYECTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {data.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >
              {/* CONTENEDOR IMAGEN */}
              <div className="relative aspect-[16/11] rounded-[2rem] overflow-hidden border border-border bg-secondary shadow-sm md:group-hover:shadow-2xl md:group-hover:shadow-primary/10 md:group-hover:-translate-y-2 transition-all duration-500">
                {/* Dots del Browser */}
                <div className="absolute top-4 left-5 flex gap-1.5 z-20">
                  <div className="size-2 rounded-full bg-border/40 group-hover:bg-red-500/40 transition-colors" />
                  <div className="size-2 rounded-full bg-border/40 group-hover:bg-amber-500/40 transition-colors" />
                  <div className="size-2 rounded-full bg-border/40 group-hover:bg-emerald-500/40 transition-colors" />
                </div>

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-1000 md:group-hover:scale-105"
                />

                {/* Overlay de acción - ADAPTADO PARA MOBILE */}
                <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                  <Button
                    variant="secondary"
                    className="rounded-full font-black uppercase text-[10px] tracking-widest px-6 h-12 bg-white text-primary hover:bg-white/90 shadow-xl hidden md:flex"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener">
                      Ver Demo Online <ExternalLink className="ml-2 size-3" />
                    </a>
                  </Button>
                </div>

                {/* Botón flotante exclusivo para Mobile/Tablet */}
                <div className="absolute bottom-4 right-4 md:hidden z-30">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-2 bg-white text-primary px-4 py-2.5 rounded-xl font-black uppercase text-[9px] tracking-widest shadow-2xl active:scale-95"
                  >
                    Ver Demo <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>

              {/* CONTENIDO TEXTO */}
              <div className="mt-8 flex flex-col gap-3 px-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                    {project.category || "Landing Page"}
                  </span>
                  <div className="flex gap-2 text-muted-foreground/40">
                    <Monitor size={14} />
                    <Smartphone size={14} />
                  </div>
                </div>

                <h3 className="text-2xl font-black text-foreground italic uppercase tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed font-medium line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {/* {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 bg-secondary text-muted-foreground rounded-lg border border-border/50"
                    >
                      {tag}
                    </span>
                  ))} */}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-20 pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest text-center md:text-left">
            ¿Querés ver más ejemplos de un rubro específico?
          </p>
          <Button
            variant="outline"
            onClick={() => window.open("https://wa.me/543446648013", "_blank")}
            className="rounded-xl border-2 font-black uppercase text-[10px] tracking-[0.2em] px-8 h-12 w-full md:w-auto"
          >
            Consultar por WhatsApp
          </Button>
        </div>
      </div>
    </Section>
  );
}
