"use client";

import React, { useEffect, useRef } from "react";

export default function HalftoneBrasao() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const img = new window.Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const grid = 60; // Slightly higher resolution for the coat of arms
      const off = document.createElement("canvas");
      off.width = grid;
      off.height = grid;
      const octx = off.getContext("2d");
      if (!octx) return;
      octx.imageSmoothingEnabled = true;

      const scale = Math.min(grid / img.width, grid / img.height);
      const w = img.width * scale,
        h = img.height * scale;
      octx.fillStyle = "#0f172a"; // Match terminal background to better interpret transparent PNGs
      octx.fillRect(0, 0, grid, grid);
      octx.drawImage(img, (grid - w) / 2, (grid - h) / 2, w, h);

      const data = octx.getImageData(0, 0, grid, grid).data;

      const size = canvas.width;
      const cell = size / grid;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, size, size);

      for (let y = 0; y < grid; y++) {
        for (let x = 0; x < grid; x++) {
          const i = (y * grid + x) * 4;
          const r = data[i],
            g = data[i + 1],
            b = data[i + 2];
          // For terminal art, lighter pixels should draw larger dots if we assume a dark background.
          // But the previous halftone drew dots based on "ink" (darkness).
          // If the brasao is meant to be drawn as white dots on dark bg, we use luminosity.
          const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          const ink = lum; // Since background is dark, lighter parts get bigger dots
          
          if (ink > 0.1) {
            const radius = (cell / 2) * Math.min(1, ink * 1.15);
            ctx.beginPath();
            ctx.fillStyle = "rgba(215,222,230," + Math.min(1, 0.4 + ink * 0.6) + ")";
            ctx.arc(
              x * cell + cell / 2,
              y * cell + cell / 2,
              radius,
              0,
              Math.PI * 2
            );
            ctx.fill();
          }
        }
      }
    };
    img.src = "/brasao_de_minas_gerais.png";
  }, []);

  return <canvas ref={canvasRef} width="50" height="50" className="block max-sm:w-[120px] max-sm:h-[120px]"></canvas>;
}
