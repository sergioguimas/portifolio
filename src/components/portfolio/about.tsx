"use client";

import { motion } from "framer-motion";
import {
  Bot,
  BriefcaseBusiness,
  Database,
  GraduationCap,
  Languages,
  Rocket,
  Workflow,
  MonitorCog,
  Palette,
  Globe,
  Radar,
} from "lucide-react";

const timelineItems = [
  {
    label: "Formação",
    title: "Análise e Desenvolvimento de Sistemas · IFNMG",
    description:
      "Foco em algoritmos e estrutura de dados, com conclusão prevista para 2026. Base técnica sólida aplicada diretamente na resolução de problemas de mercado.",
    icon: GraduationCap,
  },
  {
    label: "Experiência prática",
    title: "Arquitetura de Integrações e Agentes de IA",
    description:
      "Desenvolvimento de ecossistemas automatizados, conectando APIs complexas e criando agentes inteligentes para otimização de processos operacionais e financeiros.",
    icon: Rocket,
  },
  {
    label: "Foco Atual",
    title: "Engenharia de Produto & SaaS",
    description:
      "Liderando o ciclo completo de produtos digitais: do design da interface à arquitetura de banco de dados, com foco em escalabilidade e experiência do usuário.",
    icon: BriefcaseBusiness,
  },
];

const pillars = [
  {
    title: "Full Stack Moderno",
    description:
      "Domínio de TypeScript, Next.js e Tailwind CSS para criar interfaces de alta fidelidade e aplicações robustas.",
    icon: Workflow,
  },
  {
    title: "Especialista em n8n",
    description:
      "Automação de workflows complexos e integração nativa com IA para eliminar gargalos manuais.",
    icon: Bot,
  },
  {
    title: "Infraestrutura de Dados",
    description:
      "Modelagem eficiente com PostgreSQL e Supabase, garantindo integridade e performance para aplicações multi-tenant.",
    icon: Database,
  },
  {
    title: "Global Mindset",
    description:
      "Comunicação técnica em inglês para documentação, colaboração em projetos globais e aprendizado contínuo.",
    icon: Languages,
  },
];

const educationExtra = [
  {
    category: "Sistemas & Infra",
    items: ["Windows", "Office", "Manutenção"],
    icon: MonitorCog,
  },
  {
    category: "Design & UX",
    items: ["Photoshop", "Web Design", "CorelDraw"],
    icon: Palette,
  },
  {
    category: "Eventos & Tech",
    items: ["Latinoware 24", "Campus Party 25"],
    icon: Globe,
  },
  {
    category: "Inovação",
    items: ["IA Generativa", "Gestão Proativa"],
    icon: Radar,
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
          {/* LADO ESQUERDO: TEXTO E CONHECIMENTOS COMPLEMENTARES */}
          <div className="flex flex-col">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
              Sobre mim
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
              De ideias abstratas a sistemas de alta performance.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
              Sou Sérgio Guimarães, desenvolvedor focado em converter necessidades de negócio em ferramentas funcionais. Unindo IA, automação de workflows e sistemas escaláveis, ajudo empresas a automatizar o complexo e focar no que importa.
            </p>

            <div className="mt-5 rounded-[1.75rem] border border-zinc-200 bg-white/65 p-7 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 flex-grow">
              <p className="mb-8 text-xs uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400 font-medium">
                Conhecimentos Complementares
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                {educationExtra.map((extra) => (
                  <div key={extra.category} className="flex items-center gap-4">
                    {/* Ícone com o estilo ciano da timeline */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300 transition-colors group-hover:border-cyan-400/40">
                      <extra.icon size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-zinc-950 dark:text-white">{extra.category}</h4>
                      <div className="mt-1.5 flex flex-wrap gap-x-1.5 gap-y-1">
                        {extra.items.map((i) => (
                          <span key={i} className="text-sm text-zinc-600 dark:text-zinc-300">
                            {i}<span className="text-zinc-400 dark:text-zinc-500 last:hidden">,</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LADO DIREITO: TIMELINE */}
          <div className="rounded-[2rem] border border-zinc-200 bg-white/65 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-8">
            <div className="space-y-6">
              {timelineItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
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
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* PILLARS GRID */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}