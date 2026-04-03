"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Code3D from "./Code3d";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      

      {/* conteúdo */}
      <div className="relative z-20 flex items-center px-6 md:px-20 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-6xl mx-auto">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <AnimatedText text={"Heitor\nBorba Marini"} />

            <p className="mt-4 text-gray-300 max-w-lg mx-auto md:mx-0">
              Desenvolvedor Full Stack. desenvolvendo soluções, inovações e
              sempre evoluindo no mundo da tecnologia.
            </p>
          </motion.div>

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-80 md:w-80 md:h-[420px]">

              {/* 🔥 ARCO ANIMADO */}
              <div className="absolute inset-0 rounded-2xl border border-blue-500/20 animate-pulse" />

              <div className="absolute -inset-2 rounded-2xl border border-blue-500/40 animate-[spin_6s_linear_infinite]" />

              {/* FOTO */}
              <Image
                src="/imgs/foto.jpeg"
                alt="Heitor"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                priority
                className="object-cover rounded-2xl relative z-10"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}