"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const images = [
  { src: "/desktopDesign.png", alt: "Diseño desktop" },
  { src: "/movildesign.png", alt: "Diseño móvil" },
];

export default function FloatImagesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-avance cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center ">
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0 rounded-2xl  h-full w-full"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
              priority={currentIndex === 0} // carga prioritaria la primera
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicadores (dots) abajo - opcional pero muy útil */}
      {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              currentIndex === index
                ? "bg-primary scale-125"
                : "bg-muted-foreground/50",
            )}
          />
        ))}
      </div> */}
    </div>
  );
}
