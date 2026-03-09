"use client"



export type NavSection = {
  id: string;
  label: string;
  type:string;
  href?:string;
  icon?: "HomeIcon" | "Globe" | "Building2" | "ShoppingCart" | "HelpCircle" | "AlertTriangle" | "ListOrdered" | "Star" | "BsQuestion" | "BiSolidHome" | "PiStepsFill" | "MdWorkspacesFilled" |"RiGuideFill"
};

export const sections:NavSection[] = [
  { id: "hero", label: "Inicio", icon: "BiSolidHome", type:"scroll" },
  { id: "features", label: "Características", icon: "Star", type:"scroll" },
  { id: "steps", label: "Pasos", icon: "PiStepsFill", type:"scroll" },
  { id: "projects", label: "Proyectos", icon: "MdWorkspacesFilled", type:"scroll" },
  { id: "faq", label: "Preguntas", icon: "BsQuestion", type:"scroll" },
  { id: "domain-guide", href:"/guide" ,label: "Guía de dominios", icon: "RiGuideFill", type:"page" },
];

export const guideSections = [
  { id: "intro", label: "Introducción", icon: "HomeIcon" },
  { id: "what-is", label: "¿Qué es un dominio?", icon: "Globe" },
  { id: "providers", label: "Proveedores", icon: "Building2" },
  { id: "where-to-buy", label: "Dónde comprar", icon: "ShoppingCart" },
  { id: "how-to-choose", label: "Cómo elegir", icon: "HelpCircle" },
  { id: "common-mistakes", label: "Errores comunes", icon: "AlertTriangle" },
  { id: "steps", label: "Pasos para registrar", icon: "ListOrdered" },
];