import "./globals.css";
import { Merriweather, Montserrat, Inter, Roboto } from "next/font/google";

import type { Metadata } from "next";

import ClientLayout from "./ClientLayout";
export const metadata: Metadata = {
  title: {
    default: "Tu Web Hoy",
    template: "%s | Tu Web Hoy",
  },

  description:
    "Creamos páginas web simples y modernas para emprendedores. Ideales para mostrar tu negocio y empezar a vender.",

  openGraph: {
    title: "Tu web lista en días 🚀",
    description:
      "Páginas web modernas, claras y accesibles. Ideal para emprendedores y negocios chicos.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tu Web Hoy - Páginas web listas en días",
      },
    ],
    type: "website",
    locale: "es_AR",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tu web lista en días",
    description:
      "Webs modernas y accesibles para emprendedores. Lista para compartir y vender.",
    images: ["/og-image.jpg"],
  },
};
export const roboto = Roboto({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});
export const merriweather = Merriweather({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
// app/layout.tsx o similar

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const title = merriweather.className;
export const titleH2 = montserrat.className;
export const base = roboto.className;
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
          min-h-screen antialiased text-foreground
          overflow-x-hidden 
         relative
        
         bg-linear-to-tl from-primary/10 via-background to-primary/5
        "
      >
        {/* Opcional: capa extra para overlay si quieres más control */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
