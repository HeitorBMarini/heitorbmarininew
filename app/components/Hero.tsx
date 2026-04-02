"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Code3D from "./Code3d";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <Code3D />
      </div>


      <div className="relative z-20 h-full flex items-center px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedText text={"Heitor\nBorba Marini"} />{" "}
            <p className="mt-4 text-gray-300 max-w-lg">
              Desenvolvedor Full Stack. desenvolvendo soluções, inovações e
              acima de tudo, sempre aprendendo e evoluindo no mundo da
              tecnologia. Apaixonado por criar experiências digitais incríveis e
              impactar positivamente a vida das pessoas através da tecnologia.
            </p>
           
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-80 md:w-80 md:h-105">
              <Image
                src="/imgs/foto.jpeg"
                alt="Heigor"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                priority
                className="object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
