import React from "react";
import { StaggerContainer } from "./motion/StraggerContainer";
import { FadeIn } from "./motion/FadeIn";
import { title } from "@/app/page";

// interface FeatureSectionProps {}

const FeatureSection = ({}) => {
  return (
    <section
      id="features"
      className="min-h-[calc(100vh-2rem)]  flex items-center justify-center bg-background flex-col scroll-mt-14"
    >
      <StaggerContainer className="max-w-5xl px-5 mx-auto text-center space-y-12 text-foreground">
        <FadeIn>
          <h2 className={`text-4xl md:text-5xl font-bold ${title} `}>
            ¿Por qué elegirnos?
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Cards de ejemplo - reemplaza con tu contenido */}
          <FadeIn delay={0.2}>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className={`text-3xl font-semibold mb-4 ${title}`}>
                Entrega en días
              </h3>
              <p className={`text-muted-foreground`}>
                No esperes meses. Tu sitio listo en tiempo récord.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-3xl font-semibold mb-4">Precio justo</h3>
              <p className="text-muted-foreground">
                Calidad profesional sin romper tu bolsillo.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-3xl font-semibold mb-4">Soporte continuo</h3>
              <p className="text-muted-foreground">
                Cambios y ajustes después de la entrega incluidos.
              </p>
            </div>
          </FadeIn>
        </div>
      </StaggerContainer>
    </section>
  );
};

export default FeatureSection;
