"use client";

import { motion } from "framer-motion";
import {
  Blocks,
  Bot,
  BrainCircuit,
  CodeXml,
  Database,
  Palette,
  PanelsTopLeft,
  Minus,
  ServerCog,
  Hexagon,
  SquareTerminal,
  SquareX,
  Square,
  TabletSmartphone,
  Waypoints,
  Webhook,
  Wrench,
  Workflow,
  X,
  CloudCog,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SkillNode = {
  name: string;
  icon: LucideIcon;
  x: string;
  y: string;
  delay: number;
};

const floatingSkills: SkillNode[] = [
  { name: "Next.js", icon: Hexagon, x: "10%", y: "15%", delay: 0.0 },
  { name: "TypeScript", icon: CodeXml, x: "25%", y: "2%", delay: 0.15 },
  { name: "Webhooks", icon: Webhook, x: "45%", y: "1%", delay: 0.12 },
  { name: "Tailwind", icon: Palette , x: "68%", y: "8%", delay: 0.3 },
  { name: "APIs", icon: Waypoints, x: "82%", y: "22%", delay: 0.1 },
  { name: "Python", icon: SquareTerminal, x: "85%", y: "50%", delay: 0.1 },
  { name: "n8n", icon: Workflow, x: "78%", y: "72%", delay: 0.4 },
  { name: "Supabase", icon: CloudCog, x: "60%", y: "84%", delay: 0.25 },
  { name: "Postgres", icon: Database, x: "25%", y: "82%", delay: 0.5 },
  { name: "PWA", icon: TabletSmartphone, x: "45%", y: "84%", delay: 0.5 },
  { name: "OpenAI", icon: BrainCircuit, x: "10%", y: "68%", delay: 0.2 },
  { name: "Gemini", icon: Bot, x: "5%", y: "37%", delay: 0.35 },
];

const expertiseCards = [
  {
    title: "Frontend e experiência",
    description:
      "Interfaces modernas com Next.js, TypeScript e Tailwind, com foco em clareza visual, performance e produto.",
    icon: PanelsTopLeft,
  },
  {
    title: "Backend e integrações",
    description:
      "Construção de APIs, webhooks e fluxos entre serviços para conectar operação, dados e experiência.",
    icon: ServerCog,
  },
  {
    title: "Automação e IA aplicada",
    description:
      "Workflows com n8n, agentes de IA, integrações com LLMs e soluções voltadas para ganho operacional real.",
    icon: Bot,
  },
  {
    title: "Ferramentas de negócio",
    description:
      "Soluções pensadas para transformar necessidade de negócio em aplicações funcionais, escaláveis e úteis.",
    icon: Wrench,
  },
];

function FloatingSkill({ skill }: { skill: SkillNode }) {
  const Icon = skill.icon;

  return (
    <motion.div
      className="absolute"
      style={{ left: skill.x, top: skill.y }}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: skill.delay }}
      animate={{ y: [0, -8, 0] }}
    >
      <motion.div
        transition={{
          duration: 4.2 + skill.delay * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="group relative cursor-default rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 shadow-[0_14px_34px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.04] hover:border-cyan-400/40 hover:shadow-[0_18px_40px_rgba(34,211,238,0.16)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_14px_34px_rgba(0,0,0,0.28)] dark:hover:border-cyan-300/40 dark:hover:shadow-[0_18px_40px_rgba(34,211,238,0.12)]"
      >
        <div className="absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_65%)]" />
        </div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-700 transition duration-300 group-hover:scale-110 group-hover:bg-cyan-400/15 dark:text-cyan-300">
            <Icon size={18} />
          </div>

          <span className="text-sm font-medium text-zinc-800 transition duration-300 group-hover:text-zinc-950 dark:text-zinc-100 dark:group-hover:text-white">
            {skill.name}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function DesktopCore() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="absolute left-1/2 top-1/2 z-10 w-full max-w-[300px] -translate-x-1/2 -translate-y-1/2"
    >
      <div className="relative">
        <div className="absolute inset-x-10 top-3 h-24 rounded-full bg-cyan-400/12 blur-3xl dark:bg-cyan-300/10" />

        <div className="relative mx-auto w-full">
          <div className="rounded-[1.75rem] border border-zinc-200 bg-white/80 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#07101f]/80 dark:shadow-[0_24px_70px_rgba(0,0,0,0.32)]">
            <div className="overflow-hidden rounded-[1.2rem] border border-zinc-200/80 bg-zinc-950 dark:border-white/10">
              <div className="flex justify-end gap-2 border-b border-white/10 px-4 py-3">
                <Minus className="h-2.5 w-2.5 rounded-full" />
                <Square className="h-2.5 w-2.5 rounded-full" />
                <X className="h-2.5 w-2.5 rounded-full" />
              </div>

              <div className="relative h-[180px] overflow-hidden bg-[linear-gradient(135deg,#07111f_0%,#0b1628_45%,#0c1220_100%)] px-5 py-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.16),transparent_40%)]" />
                <div className="absolute inset-0 bg-[size:22px_22px] opacity-[0.02] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]" />

                <div className="relative z-10">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300/90">
                    Workspace
                  </p>

                  <h3 className="mt-4 text-left text-xl font-semibold text-white">
                    Construindo com
                    <span className="block text-cyan-300">frontend, backend e automação</span>
                  </h3>

                  <div className="mt-5 space-y-2 text-left font-mono text-xs text-zinc-300">
                    <p>{">"} next build</p>
                    <p>{">"} api integrations</p>
                    <p>{">"} workflows running</p>
                    <p>{">"} ai agents connected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto h-6 w-20 rounded-b-2xl border-x border-b border-zinc-300 bg-zinc-200/80 dark:border-white/10 dark:bg-white/10" />
          <div className="mx-auto h-3 w-36 rounded-full bg-zinc-300/80 blur-[1px] dark:bg-white/10" />
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
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
            As ferramentas que uso para transformar ideia em produto funcional.
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            Meu foco está em combinar interface, lógica de negócio, banco de dados,
            workflows e IA para construir soluções modernas, úteis e aplicáveis ao dia a dia.
          </p>
        </motion.div>

        <div className="relative mt-16 overflow-hidden rounded-[2.25rem] border border-zinc-200 bg-white/60 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_80px_rgba(0,0,0,0.25)] sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_48%)] dark:bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_48%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[size:34px_34px] opacity-[0.02] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] text-zinc-700 dark:text-white" />

          <div className="relative h-[560px] w-full">
            <DesktopCore />

            {floatingSkills.map((skill) => (
              <FloatingSkill key={skill.name} skill={skill} />
            ))}

            <svg
              className="pointer-events-none absolute inset-0 h-full w-full opacity-35 dark:opacity-50"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <line x1="20" y1="20" x2="44" y2="46" className="stroke-cyan-500/20" strokeWidth="0.15" />
              <line x1="30" y1="10" x2="44" y2="46" className="stroke-cyan-500/20" strokeWidth="0.15" />
              <line x1="50" y1="6" x2="50" y2="42" className="stroke-cyan-500/20" strokeWidth="0.15" />
              <line x1="72" y1="14" x2="56" y2="46" className="stroke-cyan-500/20" strokeWidth="0.15" />
              <line x1="84" y1="28" x2="56" y2="46" className="stroke-cyan-500/20" strokeWidth="0.15" />
              <line x1="78" y1="72" x2="56" y2="58" className="stroke-cyan-500/20" strokeWidth="0.15" />
              <line x1="65" y1="84" x2="56" y2="58" className="stroke-cyan-500/20" strokeWidth="0.15" />
              <line x1="50" y1="84" x2="56" y2="58" className="stroke-cyan-500/20" strokeWidth="0.15" />
              <line x1="36" y1="82" x2="44" y2="58" className="stroke-cyan-500/20" strokeWidth="0.15" />
              <line x1="14" y1="68" x2="44" y2="58" className="stroke-cyan-500/20" strokeWidth="0.15" />
              <line x1="8" y1="42" x2="44" y2="46" className="stroke-cyan-500/20" strokeWidth="0.15" />
              <line x1="85" y1="55" x2="44" y2="46" className="stroke-cyan-500/20" strokeWidth="0.15" />
            </svg>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {expertiseCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-[1.75rem] border border-zinc-200 bg-white/65 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)] dark:border-white/10 dark:bg-white/5 dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.24)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300">
                  <Icon size={20} />
                </div>

                <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}