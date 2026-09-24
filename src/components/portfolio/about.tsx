"use client";

import { motion } from "framer-motion";
import {
  Braces,
  BriefcaseBusiness,
  Database,
  GraduationCap,
  Layers3,
  Radar,
  Route,
  SearchCheck,
  ServerCog,
  Workflow,
} from "lucide-react";

const timelineItems = [
  {
    label: "Formação",
    title: "Análise e Desenvolvimento de Sistemas · IFNMG",
    description:
      "Formação em andamento, combinada com projetos práticos que aproximam fundamentos técnicos de necessidades reais de produto e operação.",
    icon: GraduationCap,
  },
  {
    label: "Atuação",
    title: "Do suporte técnico ao desenvolvimento",
    description:
      "Comecei no suporte de uma empresa de software e passei a propor e construir as ferramentas que faltavam. Hoje respondo ponta a ponta por um sistema em produção — contexto que ajuda a ver onde software realmente gera valor.",
    icon: BriefcaseBusiness,
  },
  {
    label: "Experiência prática",
    title: "Sistemas, integrações e automações",
    description:
      "Projetos com SaaS multi-tenant, auditoria trabalhista, regras comerciais, formulários complexos, WhatsApp, APIs, scripts e agentes de IA.",
    icon: Layers3,
  },
  {
    label: "Forma de trabalhar",
    title: "Entender antes de automatizar",
    description:
      "Mapeio o problema, os dados e as exceções antes de escolher a stack. O objetivo é construir uma solução útil e sustentável, não apenas adicionar tecnologia.",
    icon: SearchCheck,
  },
];

const pillars = [
  {
    title: "Contexto antes do código",
    description:
      "Entender quem usa, como o processo funciona e onde estão os riscos antes de desenhar a solução.",
    icon: Radar,
  },
  {
    title: "Implementação ponta a ponta",
    description:
      "Conectar interface, backend, banco de dados e serviços externos dentro do mesmo fluxo de produto.",
    icon: Route,
  },
  {
    title: "Regras de negócio explícitas",
    description:
      "Tratar permissões, datas, status e cálculos como parte central do sistema, com consistência e rastreabilidade.",
    icon: Database,
  },
  {
    title: "Evolução contínua",
    description:
      "Construir, observar o uso, corrigir arestas e transformar aprendizado operacional em melhoria de produto.",
    icon: Workflow,
  },
];

const practiceAreas = [
  {
    category: "SaaS e multi-tenant",
    items: ["organizações", "permissões", "RLS"],
    icon: ServerCog,
  },
  {
    category: "Dados e APIs",
    items: ["PostgreSQL", "REST", "webhooks"],
    icon: Database,
  },
  {
    category: "Automação",
    items: ["n8n", "Playwright", "scripts"],
    icon: Workflow,
  },
  {
    category: "Backend",
    items: ["Go", "Node.js", "filas"],
    icon: Braces,
  },
];

export function About() {
  return (
    <section id="sobre" className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="flex flex-col">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
              Sobre mim
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
              Desenvolvimento próximo do problema — e de quem vive o processo.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
              Sou Sérgio Guimarães, estudante de Análise e Desenvolvimento de Sistemas no
              IFNMG e desenvolvedor focado em transformar necessidades operacionais em
              sistemas web, automações e produtos digitais funcionais.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-zinc-600 dark:text-zinc-300">
              Tenho trabalhado com aplicações multi-tenant, dashboards, integrações via API,
              automações com WhatsApp, formulários públicos e scripts internos. Meu foco é
              unir interface, dados e regra de negócio sem perder de vista o uso cotidiano.
            </p>

            <div className="mt-7 grow rounded-[1.75rem] border border-zinc-200 bg-white/65 p-7 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <p className="mb-7 text-xs font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                Experiência aplicada
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                {practiceAreas.map((area) => {
                  const Icon = area.icon;

                  return (
                    <div key={area.category} className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300">
                        <Icon size={19} />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">
                          {area.category}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                          {area.items.join(" · ")}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-200 bg-white/65 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-8">
            <div className="space-y-6">
              {timelineItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex gap-4 rounded-2xl border border-zinc-200/80 bg-white/70 p-5 dark:border-white/10 dark:bg-black/20"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                        {item.label}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                        {item.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-[1.75rem] border border-zinc-200 bg-white/65 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)] dark:border-white/10 dark:bg-white/5 dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.24)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
