"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import RevealText from "./RevealText";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  deploy: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "refchek",
    description: "Projeto focado em uma solução de VAR para jogos de futebol",
    tech: ["TypeScript"],
    github: "https://github.com/HeitorBMarini/refchek",
    deploy: "https://www.refcheck.com.br",
    image: "/imgs/ref.png",
  },
  {
    name: "weather-app",
    description: "App de clima com API e deploy na Vercel.",
    tech: ["TypeScript", "API"],
    github: "https://github.com/HeitorBMarini/weather-app",
    deploy: "https://weather-app-git-dev-heitorbmarinis-projects.vercel.app",
    image: "/imgs/weather-app.png",
  },
  {
    name: "lepseg",
    description: "Site da Lepseg, uma empresa que se Dedica a Proteger vidas Através de treinamentos de segurançade alta qualidade.",
    tech: ["Security"],
    github: "https://github.com/HeitorBMarini/lepseg",
    deploy: "https://www.lepseg.com.br",
    image: "/imgs/lepseg.png",
  },
  {
    name: "busca-cep",
    description: "Busca de CEP com API externa.",
    tech: ["API", "Next.js"],
    github: "https://github.com/HeitorBMarini/busca-cep",
    deploy: "https://busca-cep-steel.vercel.app",
    image: "/imgs/cep.png",
  },
  {
    name: "pokemon-app",
    description: "App consumindo API Pokémon.",
    tech: ["Next.js", "API"],
    github: "https://github.com/HeitorBMarini/pokemon-app?tab=readme-ov-file",
    deploy: "#",
    image: "/imgs/pokemon.png",
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6">
      <RevealText text="Projetos em Destaque" />

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
        {" "}
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="group relative w-full max-w-[320px] rounded-2xl 
  border border-white/10 
  bg-white/3 
  backdrop-blur-xl 
  transition 
  hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]"
          >
            <div className="h-40 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-5 flex flex-col justify-between h-50">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-blue-400">
                    {project.name}
                  </h3>

                  <div className="flex gap-3 items-center">
                    {/* GitHub */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-white transition"
                    >
                      <FaGithub size={18} />
                    </a>

                    {project.deploy !== "#" && (
                      <a
                        href={project.deploy}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition"
                      >
                        <HiOutlineArrowUpRight size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/3"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* GLOW */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
