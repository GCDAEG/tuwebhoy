"use client";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Heart } from "lucide-react";
import Logo from "../ui/Logo";
import { HomeIcon } from "lucide-react";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { GrSteps } from "react-icons/gr";
import { BsQuestion } from "react-icons/bs";
import { Section } from "./Section";
const sections = [
  { id: "hero", label: "Inicio", icon: <HomeIcon /> },
  {
    id: "features",
    label: "Características",
    icon: <MdOutlineFeaturedPlayList />,
  },
  { id: "steps", label: "Pasos", icon: <GrSteps /> },
  { id: "faq", label: "Preguntas", icon: <BsQuestion /> },
];
export function FooterSection() {
  // Scroll suave restando altura del navbar
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navbarHeight = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--navbar-height",
      ) || "0",
    );

    const y =
      el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <footer className="relative w-full py-5 bg-secondary">
      <Section className="flex flex-col gap-5" height="content" lazy={false}>
        <div className=" flex flex-col w-full gap-5">
          {/* Brand */}

          <div className="w-full grid grid-cols-3 md:grid-cols-4 md:gap-12">
            {/* Navegación */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-foreground">
                Secciones
              </h3>
              <nav className="flex flex-col items-start gap-1.5 text-sm text-muted-foreground">
                {sections.map((sec) => (
                  <button
                    onClick={() => scrollToSection(sec.id)}
                    key={sec.id}
                    className="hover:text-foreground transition-colors"
                  >
                    {sec.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-foreground">Legal</h3>
              <nav className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                <Link
                  href="/legal/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  Privacidad
                </Link>
                <Link
                  href="/legal/terms"
                  className="hover:text-foreground transition-colors"
                >
                  Términos
                </Link>
                <Link
                  href="/legal/cookies"
                  className="hover:text-foreground transition-colors"
                >
                  Cookies
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-3 row-span-1">
              <h3 className="text-sm font-semibold text-foreground">
                Seguinos
              </h3>
              <div className="flex gap-2 text-foreground">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://www.facebook.com/profile.php?id=61586225087581"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="h-5 w-5" />
                  </a>
                </Button>

                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter / X"
                  >
                    <BsTwitterX className="h-5 w-5" />
                  </a>
                </Button>

                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <BsInstagram className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center w-full col-span-3 md:col-span-1 mt-12 md:mt-0">
              <div className="w-36">
                <Logo />
              </div>
            </div>
          </div>

          {/* Social */}
        </div>

        <Separator className="my-5" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} TUWEBHOY — Hecho con{" "}
            <Heart className="inline h-4 w-4 fill-red-500 text-red-500" /> en
            Entre Ríos
          </p>
          <p className="text-xs">Webs simples. Claras. Que funcionan.</p>
        </div>
      </Section>
    </footer>
  );
}
