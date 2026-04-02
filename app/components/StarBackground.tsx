"use client";

import { useEffect, useRef } from "react";

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let stars: any[] = [];
    let meteors: any[] = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
      });
    }

    function createMeteor() {
      meteors.push({
        x: Math.random() * canvas.width,
        y: -50,
        speed: 6 + Math.random() * 4,
        length: 100 + Math.random() * 100,
      });
    }

    function draw() {
      ctx.fillStyle = "#000E24";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "white";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.strokeStyle = "rgba(59,130,246,0.8)";
      ctx.lineWidth = 2;

      meteors.forEach((m, i) => {
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.length, m.y - m.length);
        ctx.stroke();

        m.x -= m.speed;
        m.y += m.speed;

        if (m.y > canvas.height) meteors.splice(i, 1);
      });

      if (Math.random() < 0.02) createMeteor();

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
}