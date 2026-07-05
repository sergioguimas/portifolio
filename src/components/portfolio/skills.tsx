"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  BrainCircuit,
  Braces,
  CloudCog,
  Container,
  Database,
  Minus,
  Network,
  PanelsTopLeft,
  ServerCog,
  Square,
  SquareTerminal,
  Waypoints,
  Workflow,
  Wrench,
  X,
} from "lucide-react";
import { featuredTechnologies, stackGroups } from "@/data/stacks";

type Technology = (typeof featuredTechnologies)[number];

const technologyIcons: Record<Technology, LucideIcon> = {
  "Next.js": PanelsTopLeft,
  TypeScript: Braces,
  Supabase: CloudCog,
  PostgreSQL: Database,
  n8n: Workflow,
  Playwright: Waypoints,
  Python: SquareTerminal,
  PowerShell: SquareTerminal,
  Docker: Container,
  Gemini: Bot,
  OpenAI: BrainCircuit,
  "APIs REST": Network,
};

const positions = [
  { x: "8%", y: "18%" },
  { x: "28%", y: "5%" },
  { x: "50%", y: "2%" },
  { x: "72%", y: "8%" },
  { x: "83%", y: "28%" },
  { x: "82%", y: "58%" },
  { x: "70%", y: "78%" },
  { x: "48%", y: "83%" },
  { x: "25%", y: "80%" },
  { x: "7%", y: "64%" },
  { x: "3%", y: "38%" },
  { x: "58%", y: "70%" },
];

const groupIcons: Record<(typeof stackGroups)[number]["key"], LucideIcon> = {
  frontend: PanelsTopLeft,
  backend: ServerCog,
  automation: Workflow,
  infra: Container,
  ai: Bot,
};

function DesktopCore() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="absolute left-1/2 top-1/2 z-10 w-full max-w-[300px] -translate-x-1/2 -translate-y-1/2"
    >
      <div className="relative rounded-[1.75rem] border border-zinc-200 bg-white/80 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#07101f]/80 dark:shadow-[0_24px_70px_rgba(0,0,0,0.32)]">
        <div className="overflow-hidden rounded-[1.2rem] border border-zinc-200/80 bg-zinc-950 dark:border-white/10">
          <div className="flex justify-end gap-2 border-b border-white/10 px-4 py-3 text-zinc-500">
            <Minus size={11} />
            <Square size={10} />
            <X size={11} />
          </div>
          <div className="relative h-[190px] overflow-hidden bg-[linear-gradient(135deg,#07111f_0%,#0b1628_45%,#0c1220_100%)] px-5 py-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.16),transparent_40%)]" />
            <div className="relative z-10">
              <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300/90">
                Projeto real
              </p>
              <h3 className="mt-4 text-left text-xl font-semibold text-white">
                Interface, dados e
                <span className="block text-cyan-300">automação conectados</span>
              </h3>
              <div className="mt-5 space-y-2 text-left font-mono text-xs text-zinc-300">
                <p>{">"} entender o processo</p>
                <p>{">"} modelar as regras</p>
                <p>{">"} integrar os serviços</p>
                <p>{">"} evoluir com o uso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Stack e prática
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
            Ferramentas escolhidas pelo problema que precisam resolver.
          </h2>
          <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            Trabalho principalmente com o ecossistema TypeScript, Supabase e PostgreSQL,
            combinado a APIs, automação e infraestrutura suficiente para colocar cada fluxo
            em funcionamento.
          </p>
        </motion.div>

        <div className="relative mt-16 overflow-hidden rounded-[2.25rem] border border-zinc-200 bg-white/60 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_80px_rgba(0,0,0,0.25)] sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_48%)] dark:bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_48%)]" />

          <div className="relative grid gap-3 sm:grid-cols-2 md:hidden">
            {featuredTechnologies.map((technology) => {
              const Icon = technologyIcons[technology];

              return (
                <div
                  key={technology}
                  className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 dark:border-white/10 dark:bg-white/5"
                >
                  <Icon size={18} className="text-cyan-700 dark:text-cyan-300" />
                  <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
                    {technology}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="relative hidden h-[560px] md:block">
            <DesktopCore />
            {featuredTechnologies.map((technology, index) => {
              const Icon = technologyIcons[technology];
              const position = positions[index];

              return (
                <motion.div
                  key={technology}
                  className="absolute"
                  style={{ left: position.x, top: position.y }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 shadow-[0_14px_34px_rgba(0,0,0,0.08)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/40 dark:border-white/10 dark:bg-white/5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300">
                      <Icon size={18} />
                    </div>
                    <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
                      {technology}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {stackGroups.map((group, index) => {
            const Icon = groupIcons[group.key];

            return (
              <motion.article
                key={group.key}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-[1.75rem] border border-zinc-200 bg-white/65 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30 dark:border-white/10 dark:bg-white/5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                  {group.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {group.description}
                </p>
                <div className="mt-5 space-y-2 grid grid-cols-2 gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  {group.items.map((item) => (
                    <li key={item.name} className="text-sm text-zinc-700 dark:text-zinc-300">
                      {item.name}
                    </li>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <Wrench size={16} />
          A stack muda quando o contexto pede; a clareza do problema vem primeiro.
        </div>
      </div>
    </section>
  );
}
