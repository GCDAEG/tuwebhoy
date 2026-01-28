// components/StepCard.tsx
import { ReactNode } from "react";

interface StepCardProps {
  number: number | string;
  title: string;
  text: string | ReactNode;
  className?: string;
}

export function StepCard({
  number,
  title,
  text,
  className = "",
}: StepCardProps) {
  return (
    <div
      className={`
        relative flex flex-col items-center text-center 
        p-6 md:p-8 rounded-2xl bg-card border border-border/50
        shadow-sm hover:shadow-md transition-all duration-300
        md:h-full
        md:w-full
        lg:w-full
        max-w-xs mx-auto
        ${className}
      `}
    >
      {/* Número en círculo */}
      <div
        className="
        absolute -top-5 left-1/2 -translate-x-1/2
        w-12 h-12 rounded-full bg-primary text-primary-foreground
        flex items-center justify-center text-xl font-bold
        border-4 border-card shadow-md
      "
      >
        {number}
      </div>

      {/* Contenido */}
      <div className="mt-8 space-y-3">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
