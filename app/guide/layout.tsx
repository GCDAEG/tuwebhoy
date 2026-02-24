import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import Banner from "@/components/ui/banner";
import { GuideBackground } from "@/components/ui/GuideBackground";
import { NavBarGuide } from "./(sections)/NavBarGuide";

const metadata: Metadata = {
  title: {
    default: "Tu Web Hoy - Páginas web rápidas y accesibles",
    template: "%s | Tu Web Hoy",
  },
  description:
    "Páginas web simples, modernas y económicas para negocios. Entrega rápida, precio accesible.",
  keywords: [
    "páginas web",
    "sitios web rápidos",
    "landing pages",
    "desarrollo web Argentina",
  ],
  openGraph: {
    title: "Tu Web Hoy",
    description: "Tu sitio web profesional listo en días",
    url: "https://tudominio.com",
    siteName: "Tu Web Hoy",
    images: ["/og-image.jpg"], // agrega tu imagen OG
  },
};

// app/layout.tsx (versión recomendada)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={``} suppressHydrationWarning>
      <body
        className="
          min-h-screen antialiased text-foreground bg-fixed
          overflow-x-hidden bg-gradient-main
          domain-guide-theme
        "
      >
        {/* Opcional: capa extra para overlay si quieres más control */}

        {/* <Banner /> */}
        {children}
      </body>
    </html>
  );
}
