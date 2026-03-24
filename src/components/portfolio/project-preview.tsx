"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ProjectPreviewProps = {
  images: string[];
  alt: string;
  delay?: number;
};

export function ProjectPreview({ images, alt, delay }: ProjectPreviewProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2800 + (delay ?? 0));

    return () => clearInterval(interval);
  }, [images, paused, delay]);

  return (
    <div 
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)} 
    className="relative h-56 overflow-hidden rounded-[1.5rem] border border-zinc-200/80 bg-zinc-950 dark:border-white/10">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[current]}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1.02 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={alt}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_45%)]" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-cyan-300"
                : "w-3 bg-white/35"
            }`}
          />
        ))}
      </div>
    </div>
  );
}