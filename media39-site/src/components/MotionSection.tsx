"use client";

import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type MotionSectionProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export default function MotionSection({
  children,
  className = "",
  delay = 0,
}: MotionSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 28, scale: 0.98, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.61, 0.35, 1] }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.section>
  );
}
