// components/cta/CTAButton.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  text?: string;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  href?: string;
  icon?: React.ReactNode;
  targetBlank?: boolean;
}

export function CTAButton({
  text = "Contactar por WhatsApp",
  size = "md",
  variant = "primary",
  className,
  href = "https://wa.me/549...", // tu número real
  icon = <BsWhatsapp className="text-xl md:text-2xl" />,
  targetBlank = true,
}: CTAButtonProps) {
  const sizeStyles = {
    xs: "px-4 py-2 text-sm gap-1.5 rounded-md",
    sm: "px-6 py-2.5 text-base gap-2 rounded-lg",
    md: "px-8 py-3.5 text-lg gap-2.5 rounded-xl",
    lg: "px-10 py-4 text-xl gap-3 rounded-2xl",
  }[size];

  const variantStyles = {
    primary: `
      bg-primary text-primary-foreground
      shadow-md
      hover:bg-primary/90 hover:shadow-lg
    `,
    secondary: `
      bg-secondary text-secondary-foreground
      border border-border
      hover:bg-secondary/90
    `,
    outline: `
      bg-transparent text-foreground
      border-2 border-primary
      hover:bg-primary/10
    `,
  }[variant];

  return (
    <motion.a
      href={href}
      target={targetBlank ? "_blank" : undefined}
      rel={targetBlank ? "noopener noreferrer" : undefined}
      aria-label={text}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        `
        inline-flex items-center justify-center
        font-semibold
        transition-all
        focus:outline-none
        focus-visible:ring-2 focus-visible:ring-primary
        focus-visible:ring-offset-2
        `,
        sizeStyles,
        variantStyles,
        className,
      )}
    >
      {icon}
      <span className="whitespace-nowrap">{text}</span>
    </motion.a>
  );
}

/* ========================================================= */
/* Hero CTA */
/* ========================================================= */

interface HeroCTAButtonProps extends Omit<CTAButtonProps, "size" | "variant"> {
  size?: "md" | "lg";
}

export function HeroCTAButton({
  size = "lg",
  className,
  ...props
}: HeroCTAButtonProps) {
  return (
    <CTAButton
      size={size}
      variant="primary"
      className={cn("shadow-lg", className)}
      {...props}
    />
  );
}
