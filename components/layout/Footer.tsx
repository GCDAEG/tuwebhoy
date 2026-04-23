"use client";
import React from "react";
import Link from "next/link";
import { BsInstagram, BsTwitterX, BsFacebook } from "react-icons/bs";
import { Heart, ArrowRight, Globe, Mail, MessageSquare } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import Logo from "../ui/Logo";
import { sections } from "@/lib/section";

export function FooterSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -80; // Ajuste para el navbar
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-secondary/30 pt-20 pb-10 border-t border-border">
      <Section height="content" lazy={false}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            {/* COLUMNA 1: BRANDING (Ocupa 4 cols) */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <Logo className="w-32 h-auto" />
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs font-medium">
                Especialistas en transformar negocios locales con presencia
                digital profesional. Simple, claro y efectivo.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: BsInstagram, href: "#", label: "Instagram" },
                  { icon: BsFacebook, href: "#", label: "Facebook" },
                  { icon: BsTwitterX, href: "#", label: "X" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    className="size-10 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all shadow-sm"
                    aria-label={social.label}
                  >
                    <social.icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* COLUMNA 2: NAVEGACIÓN (Ocupa 2 cols) */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">
                Secciones
              </h4>
              <nav className="flex flex-col gap-3">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    {sec.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* COLUMNA 3: LEGAL (Ocupa 2 cols) */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">
                Legal
              </h4>
              <nav className="flex flex-col gap-3">
                {["privacy", "terms", "cookies"].map((item) => (
                  <Link
                    key={item}
                    href={`/legal/${item.toLowerCase()}`}
                    className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            {/* COLUMNA 4: CONTACTO RÁPIDO (Ocupa 4 cols) */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">
                Contacto
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:hola@tuwebhoy.com"
                  className="flex items-center gap-3 text-sm font-bold text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="size-8 rounded-lg bg-background border border-border flex items-center justify-center group-hover:border-primary">
                    <Mail className="size-4" />
                  </div>
                  tuwebhoy@proton.me
                </a>
                <a
                  href="https://wa.me/543446648013"
                  className="flex items-center gap-3 text-sm font-bold text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="size-8 rounded-lg bg-background border border-border flex items-center justify-center group-hover:border-primary">
                    <MessageSquare className="size-4" />
                  </div>
                  +54 9 3446 648013
                </a>
                <div className="pt-2">
                  <p className="text-[10px] font-bold text-muted-foreground flex items-center gap-2">
                    <Globe size={12} strokeWidth={3} /> Gualeguaychú, Entre
                    Ríos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-border/50" />

          {/* BARRA INFERIOR DE COPYRIGHT */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:items-start items-center">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                © {new Date().getFullYear()}{" "}
                <span className="text-foreground">TUWEBHOY</span> — Hecho con{" "}
                <Heart className="size-3 fill-red-500 text-red-500 animate-pulse" />{" "}
                en Entre Ríos
              </p>
            </div>

            <div className="flex items-center gap-6">
              <p className="text-[10px] font-black text-foreground italic uppercase tracking-tighter">
                Webs simples. Claras. Que funcionan.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
}
