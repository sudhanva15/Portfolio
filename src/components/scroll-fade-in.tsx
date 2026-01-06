/**
 * ScrollFadeIn - reusable component for scroll-triggered fade-in animations
 * Uses Framer Motion with viewport detection and motion-safe preferences
 */

"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import React from "react";

interface ScrollFadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
}

export default function ScrollFadeIn({
  children,
  delay = 0,
  duration = 0.5,
  y = 16,
  ...props
}: ScrollFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
