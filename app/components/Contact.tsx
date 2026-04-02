"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Globe3D from "./Globe";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Mensagem enviada 🚀");
  };

  return (
    <div className="py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="h-100"
        >
          <Globe3D />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-10 rounded-2xl 
          bg-white/5 
          backdrop-blur-xl 
          border border-white/10 
          shadow-[0_0_40px_rgba(0,0,0,0.3)]"
        >
          <h2 className="text-4xl font-bold mb-2">
            Contato
          </h2>

          <p className="text-gray-400 mb-8">
            Me mande uma mensagem 🚀
          </p>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              type="email"
              placeholder="Seu email"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              type="tel"
              placeholder="Telefone (opcional)"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <textarea
              placeholder="Sua mensagem..."
              rows={4}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-4 rounded-xl 
              bg-linear-to-r from-blue-500 to-cyan-500
              hover:from-blue-600 hover:to-cyan-600
              transition-all duration-300 ease-in-out
              font-semibold
              shadow-lg shadow-blue-500/20
              hover:shadow-blue-500/40"
            >
              Enviar mensagem
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}