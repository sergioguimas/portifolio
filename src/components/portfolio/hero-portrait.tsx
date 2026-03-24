"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export function HeroPortrait() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, { stiffness: 180, damping: 18 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 180, damping: 18 });

  const transform = useMotionTemplate`perspective(1400px) rotateX(${smoothRotateX}deg) rotateY(${smoothRotateY}deg)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const ry = (px - 0.5) * 12;
    const rx = (0.5 - py) * 10;

    rotateX.set(rx);
    rotateY.set(ry);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative z-10 mx-auto w-full max-w-[460px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        style={{ transform }}
        className="relative h-[560px] w-full"
      >
        <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-300/8" />
        <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[90px] dark:bg-cyan-300/8" />

        <motion.div
          className="absolute left-1/2 bottom-6 h-[500px] w-[95%] -translate-x-1/2 rounded-full border border-cyan-300/12 bg-white/4 shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl"
          style={{
            transform: "translateZ(-70px)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="absolute inset-6 rounded-full border border-white/8 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(99,102,241,0.06),rgba(255,255,255,0.02))]" />
        </motion.div>

        <motion.div
          className="absolute inset-x-0 bottom-0 mx-auto h-[680px] w-[110%]"
          style={{
            transform: "translateZ(55px)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative h-full w-full overflow-visible">
            <div className="absolute inset-x-0 bottom-0 top-0 overflow-hidden rounded-full">
              <Image
                src="/images/hero.webp"
                alt="Sergio Guimarães"
                fill
                priority
                className="object-cover object-center grayscale contrast-110 brightness-[0.92]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_28%,rgba(34,211,238,0.22),transparent_30%)] mix-blend-screen" />
            </div>

            <div className="absolute inset-x-2 bottom-2 h-16 rounded-full bg-black/30 blur-2xl dark:bg-black/50" />
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-x-0 bottom-6 rounded-2xl border border-white/10 bg-black/28 px-5 py-4 backdrop-blur-xl w-[110%]"
          style={{ transform: "translateZ(70px)" }}
        >
          <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-400">
            Desenvolvedor Full Stack
          </p>

          <p className="mt-2 text-base font-semibold leading-6 text-white">
            Arquitetura e Desenvolvimento com foco em agilidade e produção.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}