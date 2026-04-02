"use client";

import { motion } from "framer-motion";

export default function RevealText({ text }: { text: string }) {
  return (
    <div className="overflow-hidden">
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-16"
      >
        {text}
      </motion.h2>
    </div>
  );
}