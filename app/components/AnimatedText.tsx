"use client";

import { motion } from "framer-motion";

export default function AnimatedText({ text }: { text: string }) {
  const letters = text.split("");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-5xl md:text-7xl font-bold leading-tight"
    >
      {letters.map((letter, index) => {
        if (letter === "\n") {
          return <br key={index} />;
        }

        return (
          <motion.span key={index} variants={child}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}