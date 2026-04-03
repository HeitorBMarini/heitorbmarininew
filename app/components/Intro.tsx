"use client";

import { motion } from "framer-motion";
import StarBackground from "./StarBackground";

export default function Intro() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-white text-center px-6 overflow-hidden">
      
      {/* 🌌 ESTRELAS */}
      <div className="absolute inset-0 z-0">
        <StarBackground />
      </div>

      {/* 🔥 overlay pra suavizar */}
      <div className="absolute inset-0 bg-[#000E24]/70 z-10" />

      {/* ✨ CONTEÚDO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Portfólio
        </h1>

        <p className="text-gray-300 text-lg md:text-xl">
          Desenvolvendo experiências digitais modernas, com foco em performance,
          design e inovação.
        </p>
      </motion.div>
    </section>
  );
}