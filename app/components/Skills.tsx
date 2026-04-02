"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiPhp,
  SiNodedotjs,
  SiAngular,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "PHP", icon: SiPhp },
  { name: "Angular", icon: SiAngular },
  { name: "MySQL", icon: SiMysql },
];

export default function Skills() {
  return (
    <div className="py-24 px-6">
      <h2 className="text-4xl text-center font-bold mb-16">
        Tecnologias & Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}

              // 🔥 ENTRADA (uma vez)
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: index * 0.1 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                },
              }}

              whileHover={{ scale: 1.1 }}
              className="relative w-55 h-40 rounded-2xl 
              border border-white/10 
              bg-white/3 
              backdrop-blur-md 
              flex flex-col items-center justify-center 
              gap-3 cursor-pointer 
              transition 
              hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            >
              <Icon className="text-4xl text-white group-hover:text-cyan-400 transition" />

              <span className="text-sm text-gray-300 text-center">
                {skill.name}
              </span>

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-purple-500/0 group-hover:bg-blue-500/10 blur-xl transition" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}