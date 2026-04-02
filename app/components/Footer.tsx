"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full mt-20 px-6 pb-10">
      
      {/* linha superior */}
      <div className="h-[1px] w-full bg-white/10 mb-8" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* texto */}
        <span className="text-sm text-gray-400">
          © {new Date().getFullYear()} Heitor Borba Marini
        </span>

        {/* icones */}
        <div className="flex items-center gap-6">

          {/* GitHub */}
          <motion.a
            href="https://github.com/seuuser"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={22} />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/seuuser"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <FaLinkedin size={22} />
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/SEUNUMERO"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="text-gray-400 hover:text-green-400 transition"
          >
            <FaWhatsapp size={22} />
          </motion.a>

        </div>
      </div>
    </footer>
  );
}