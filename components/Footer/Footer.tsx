import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Heart } from "lucide-react";
import Logo from "../Header/Logo";
import { title } from "@/app/page";
import { HeroCTAButton } from "../CTAButton";

export function FooterSection() {
  return (
    <footer className="relative w-full border-t border-border bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 grid-rows-3 gap-10 md:grid-rows-3">
          {/* Brand */}
          <div className="flex flex-col gap-4 row-span-1 items-center pt-20">
            <div className="absolute top-0 left-0 w-full flex justify-center">
              <div className="w-36">
                <Logo />
              </div>
            </div>
            {/* <p className="text-sm text-muted-foreground max-w-xs">
              Diseño web claro, rápido y profesional para negocios que quieren
              estar online hoy.
            </p> */}
            <h2 className={`text-foreground font-bold text-2xl ${title}`}>
              ¿Comenzamos?
            </h2>
            <HeroCTAButton></HeroCTAButton>
          </div>

          <div className="w-full grid grid-cols-2 md:gap-12 row-span-1">
            {/* Navegación */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-foreground">
                Secciones
              </h3>
              <nav className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                <Link
                  href="#hero"
                  className="hover:text-foreground transition-colors"
                >
                  Inicio
                </Link>
                <Link
                  href="#features"
                  className="hover:text-foreground transition-colors"
                >
                  Características
                </Link>
                <Link
                  href="#steps"
                  className="hover:text-foreground transition-colors"
                >
                  Pasos
                </Link>
                <Link
                  href="#faq"
                  className="hover:text-foreground transition-colors"
                >
                  Preguntas
                </Link>
              </nav>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-foreground">Legal</h3>
              <nav className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                <Link
                  href="/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  Privacidad
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-foreground transition-colors"
                >
                  Términos
                </Link>
                <Link
                  href="/cookies"
                  className="hover:text-foreground transition-colors"
                >
                  Cookies
                </Link>
              </nav>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3 row-span-1">
            <h3 className="text-sm font-semibold text-foreground">Seguinos</h3>
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
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} TUWEBHOY — Hecho con{" "}
            <Heart className="inline h-4 w-4 fill-red-500 text-red-500" /> en
            Entre Ríos
          </p>
          <p className="text-xs">Webs simples. Claras. Que funcionan.</p>
        </div>
      </div>
    </footer>
  );
}
