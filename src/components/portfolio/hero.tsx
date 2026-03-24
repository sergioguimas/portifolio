"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hook/use-mouse-position";
import { HeroPortrait } from "./hero-portrait";

export function Hero() {
  const { x, y } = useMousePosition();

  return (
    <section
      id="topo"
      className="relative flex min-h-[88vh] items-center overflow-hidden px-6 pt-16 lg:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px at ${x}px ${y}px, rgba(34,211,238,0.15), transparent 80%)`,
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none text-[140px] font-black tracking-[-0.08em] text-white/[0.03]">
        SG Dev
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300"
          >
            Full Stack · WEB · Automação
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.045em] text-zinc-950 dark:text-white sm:text-6xl lg:text-[5.2rem]"
          >
            Produtos digitais escaláveis e automação inteligente.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-2xl text-[1.05rem] leading-8 text-zinc-600 dark:text-zinc-300"
          >
            Desenvolvedor focado em arquitetar e implementar ecossistemas que unem TypeScript, Node.js e automações avançadas. Especialista em tirar projetos do papel e transformá-los em ferramentas prontas para o mercado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a
              href="#projetos"
              className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] dark:bg-white dark:text-zinc-950"
            >
              Conhecer Portfólio
            </a>

            <a
              href="#api"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-950 hover:bg-zinc-950 hover:text-white dark:border-white/15 dark:text-white dark:hover:bg-white dark:hover:text-zinc-950"
            >
              Ver API em ação
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-12 flex flex-wrap gap-6 text-sm text-zinc-500/90 dark:text-zinc-400"
          >
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Supabase</span>
            <span>n8n</span>
          </motion.div>
        </div>

        <HeroPortrait />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <div className="h-24 w-[70%] rounded-full bg-cyan-300/10 blur-3xl dark:bg-cyan-300/5" />
      </div>
    </section>
  );
}