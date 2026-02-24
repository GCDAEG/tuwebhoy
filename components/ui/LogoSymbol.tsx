// components/ui/LogoSymbol.tsx
import { cn } from "@/lib/utils";
import React from "react";

interface LogoSymbolProps {
  size?: number | string; // tamaño en px o como string (ej: "2rem")
  className?: string;
  color?: string; // color directo (override)
  [key: string]: any; // para cualquier otra prop de SVG
}

export default function LogoSymbol({
  size = 24,
  className = "",
  color,
  ...props
}: LogoSymbolProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor" // se adapta al color del padre
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("inline-block", className)}
      style={color ? { color } : undefined}
      {...props}
    >
      {/* Ventana de navegador minimalista */}
      <rect x="15" y="20" width="70" height="60" rx="6" />

      {/* Barra superior (header del navegador) */}
      <rect
        x="15"
        y="20"
        width="70"
        height="10"
        fill="currentColor"
        opacity="0.2"
      />

      {/* Flecha "hoy" (sensación de rapidez/inmediatez) */}
      <path d="M38 45 L50 57 L62 45" />
      <path d="M50 57 L50 80" />
    </svg>
  );
}
