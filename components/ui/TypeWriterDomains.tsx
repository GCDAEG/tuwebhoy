"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const examples = [
  "ejemplo.com",
  "tu-negocio.io",
  "marca-personal.app",
  "proyecto2025.online",
  "nombre-corto.ar",
  "startup.tech",
];

export default function TypewriterDomains() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);

  const currentText = examples[loopNum % examples.length];

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      if (!isDeleting && displayText.length < currentText.length) {
        // Escribiendo
        setDisplayText(currentText.substring(0, displayText.length + 1));
        setTypingSpeed(80); // velocidad normal al escribir
      } else if (isDeleting && displayText.length > 0) {
        // Borrando
        setDisplayText(currentText.substring(0, displayText.length - 1));
        setTypingSpeed(40); // más rápido al borrar
      } else if (!isDeleting && displayText.length === currentText.length) {
        // Pausa antes de borrar
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800); // tiempo que se queda la palabra completa
        return;
      } else if (isDeleting && displayText.length === 0) {
        // Cambia a la siguiente palabra
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, currentText, typingSpeed]);

  return (
    <div className="inline-flex items-center gap-2 text-xl md:text-2xl lg:text-3xl font-mono font-medium text-indigo-600">
      <motion.span
        animate={{ opacity: 1 }}
        className="text-indigo-600 font-bold"
      >
        {displayText}
      </motion.span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="inline-block w-1 h-8 bg-indigo-600"
      />
    </div>
  );
}
