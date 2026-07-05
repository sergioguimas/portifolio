"use client";

import { motion } from "framer-motion";
import {
  Blocks,
  Cable,
  ChartNoAxesCombined,
  PanelsTopLeft,
  Workflow,
} from "lucide-react";

const solutions = [
  {
    title: "Sistemas internos",
    description:
      "Aplicações para organizar operações que ainda dependem de planilhas, controles manuais ou comunicação dispersa.",
    icon: Blocks,
  },
  {
    title: "SaaS e produtos digitais",
    description:
      "Produtos com autenticação, múltiplas organizações, permissões, dashboards e configurações por cliente.",
    icon: PanelsTopLeft,
  },
  {
    title: "Automações e integrações",
    description:
      "Workflows, scripts e APIs que conectam ferramentas e retiram etapas repetitivas da rotina operacional.",
    icon: Workflow,
  },
  {
    title: "Regras de negócio",
    description:
      "Lógicas comerciais e operacionais como descontos, pontuação, status, filtros, relatórios e permissões.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Experiências integradas",
    description:
      "Interfaces claras para públicos técnicos e não técnicos, conectadas ao banco, backend e serviços externos.",
    icon: Cable,
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            O que eu resolvo
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
            Tecnologia conectada à rotina, aos dados e às regras do negócio.
          </h2>
          <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            Meu trabalho começa entendendo o processo. A partir daí, transformo o que está
            disperso, repetitivo ou difícil de acompanhar em uma ferramenta que faça sentido
            para quem realmente vai usá-la.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.article
                key={solution.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="group rounded-[1.75rem] border border-zinc-200 bg-white/65 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)] dark:border-white/10 dark:bg-white/5 dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.24)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-zinc-950 dark:text-white">
                  {solution.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                  {solution.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
