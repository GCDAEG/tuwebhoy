// components/portfolio/ProjectShowcase.tsx
"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BsGithub } from "react-icons/bs";

import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { TagCarousel } from "@/components/ui/TagCarousel";
import { base, title, titleH2 } from "@/app/layout";
import { Separator } from "@/components/ui/separator";

type Project = {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  tags?: string[];
};

interface ProjectShowcaseProps {
  projects?: Project[];
  subtitle?: string;
}

const fallbackProjects: Project[] = [
  {
    title: "Landing Fitness Gym",
    description:
      "Landing moderna enfocada en conversión, clases de prueba y experiencia mobile.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEWtbfETAUbrP_SOzz5xEwLIVTyTi1QHjKDQ&s",
    liveUrl: "https://demo-fitness.example.com",
    repoUrl: "https://github.com/demo-user/fitness-landing-example",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "Estudio Jurídico Corporativo",
    description:
      "Diseño profesional para estudio de abogados con foco en confianza y contacto directo.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEWtbfETAUbrP_SOzz5xEwLIVTyTi1QHjKDQ&s",
    liveUrl: "https://demo-abogados.example.com",
    repoUrl: "https://github.com/demo-user/abogados-landing-example",
    tags: [
      "Next.js",
      "shadcn/ui",
      "Responsive",
      "Responsiv2e",
      "Respon3sive",
      "Respon4ive",
      "Respo5nsive",
      "Respon6sive",
      "Respo7nsive",
      "Resp8onsive",
    ],
  },
];

export default function ProjectShowcase({
  projects,
  subtitle = "Algunos ejemplos de landing pages y proyectos reales",
}: ProjectShowcaseProps) {
  const data = projects ?? fallbackProjects;

  return (
    <Section id="projects" height="content" className="py-20 bg-background">
      <div className="container flex flex-col gap-14">
        {/* Header */}
        <div className="text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold tracking-tight ${title}`}
          >
            Proyectos realizados
          </h2>
        </div>

        {/* Grid */}
        <div className="flex flex-col gap-10">
          <div>
            <p
              className={`mt-4 text-xl md:text-2xl text-foreground/70 ${base}`}
            >
              {subtitle}
            </p>
            <Separator className="" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((project, index) => (
              <article
                key={project.title}
                className="
                group
                rounded-2xl
                border
                bg-card
                overflow-hidden
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
              >
                {/* Image */}
                <div className="relative aspect-16/10 overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={index === 0}
                    className="
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-[1.04]
                  "
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Overlay actions */}
                  <div
                    className="
                    absolute inset-0
                    flex items-end justify-end gap-2 p-4
                    bg-linear-to-t from-black/70 via-black/30 to-transparent
                    opacity-100 lg:opacity-0
                    lg:group-hover:opacity-100
                    transition-opacity
                  "
                  >
                    {project.liveUrl && (
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ver demo <ArrowUpRight className="ml-1 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.repoUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsGithub className="mr-1 h-4 w-4" /> Código
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-3">
                  <h3
                    className={`text-xl md:text-2xl font-semibold ${titleH2}`}
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm md:text-base text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  {project.tags && (
                    <TagCarousel tags={project.tags.slice(0, 4)} size="sm" />
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
