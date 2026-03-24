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
} from "lucide-react";

const timelineItems = [
  {
    label: "Formação",
    title: "Análise e Desenvolvimento de Sistemas · IFNMG",
    description:
      "Graduação superior em Análise e Desenvolvimento de Sistemas, com conclusão prevista para 2026, no IFNMG - Campus Teófilo Otoni. Base em engenharia de software, algoritmos e arquitetura de sistemas, sempre com aplicação prática em projetos reais.",
    icon: GraduationCap,
  },
  {
    label: "Experiência prática",
    title: "Soluções funcionais para necessidades reais",
    description:
      "Atuação voltada à criação de ferramentas de gestão financeira, integração de APIs, automação de workflows e desenvolvimento de agentes de Inteligência Artificial, com foco em resolver problemas concretos de negócio.",
    icon: Rocket,
  },
  {
    label: "Hoje",
    title: "Produto, automação e engenharia aplicada",
    description:
      "Perfil proativo, orientado a transformar demandas operacionais em aplicações modernas, funcionais e escaláveis, conectando frontend, backend, banco de dados, IA e processos automatizados.",
    icon: BriefcaseBusiness,
  },
];

const pillars = [
  {
    title: "Full Stack moderno",
    description:
      "Desenvolvimento com Tailwind, TypeScript e Next.js, criando experiências web modernas, aplicações full stack e soluções com potencial para desktop e PWA.",
    icon: Workflow,
  },
  {
    title: "Automação com n8n",
    description:
      "Construção de workflows com webhooks, integrações e agentes de IA para reduzir tarefas manuais e aumentar eficiência operacional.",
    icon: Bot,
  },
  {
    title: "Banco e infraestrutura de dados",
    description:
      "Modelagem e gestão com SQL, PostgreSQL e Supabase, estruturando aplicações com base consistente e preparada para evolução.",
    icon: Database,
  },
  {
    title: "Comunicação e adaptabilidade",
    description:
      "Boa leitura, escrita e conversação em inglês, facilitando estudo contínuo, documentação técnica e uso de ferramentas globais.",
    icon: Languages,
  },
];

const highlights = [
  "TypeScript",
  "Next.js",
  "Tailwind",
  "n8n",
  "OpenAI",
  "Gemini",
  "Supabase",
  "PostgreSQL",
  "APIs",
  "RAG",
];

const extraItems = [
  "Informática Básica (Windows, Office, Manutenção)",
  "Design Gráfico (Photoshop, CorelDraw, Web Design)",
  "Latinoware 2024 · Congresso, Software Livre e Hackathon",
  "Campus Party Goiás 2025 · Inovação, Tecnologia, IA e Gestão",
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
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
              Sobre mim
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
              Soluções práticas, automação e tecnologia aplicada a problemas reais.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
              Sou Sérgio Junio de Almeida Guimarães, desenvolvedor com foco em
              soluções práticas e automação. Tenho experiência na criação de
              ferramentas de gestão financeira, integração de APIs e desenvolvimento
              de agentes de Inteligência Artificial, sempre buscando transformar
              necessidades de negócio em aplicações funcionais com tecnologias modernas.
            </p>

            <div className="mt-3 rounded-[1.75rem] border border-zinc-200 bg-white/65 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                Formação complementar
              </p>
              <div className="mt-8 rounded-[1.75rem] border border-zinc-200/80 bg-white/70 p-5 dark:border-white/10 dark:bg-black/20">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                Formação Complementar
              </p>

              <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-y-8 text-sm ">
                  <li className="flex items-center p-2 ">
                      <div className="flex-shrink-0">
                          <span className="flex p-3 rounded-lg bg-brand/10 text-brand">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor-cog-icon lucide-monitor-cog"><path d="M12 17v4"/><path d="m14.305 7.53.923-.382"/><path d="m15.228 4.852-.923-.383"/><path d="m16.852 3.228-.383-.924"/><path d="m16.852 8.772-.383.923"/><path d="m19.148 3.228.383-.924"/><path d="m19.53 9.696-.382-.924"/><path d="m20.772 4.852.924-.383"/><path d="m20.772 7.148.924.383"/><path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><path d="M8 21h8"/><circle cx="18" cy="6" r="3"/></svg>
                          </span>
                      </div>
                      <div className="flex flex-col items-right gap-3">
                          <span className="text-white font-medium">
                              Informática Básica
                          </span>
                          <div className="flex flex-wrap gap-2">
                              <span className="text-xs px-2 py-1 bg-zinc-800 rounded">Windows</span>
                              <span className="text-xs px-2 py-1 bg-zinc-800 rounded">Office</span>
                              <span className="text-xs px-2 py-1 bg-zinc-800 rounded">Manutenção</span>
                          </div>
                      </div>
                  </li>

                  <li className="flex items-center p-2">
                      <div className="flex-shrink-0">
                          <span className="flex p-3 rounded-lg bg-brand/10 text-brand">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette-icon lucide-palette"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg>
                          </span>
                      </div>
                      <div className="flex flex-col items-right gap-3">
                          <span className="text-white font-medium">
                              Design Gráfico
                          </span>
                          <div className="flex flex-wrap gap-2">
                              <span className="text-xs px-2 py-1 bg-zinc-800 rounded">Photoshop</span>
                              <span className="text-xs px-2 py-1 bg-zinc-800 rounded">CorelDraw</span>
                              <span className="text-xs px-2 py-1 bg-zinc-800 rounded">Web Design</span>
                          </div>
                      </div>
                  </li>

                  <li className="flex items-center p-2">
                      <div className="flex-shrink-0">
                          <span className="flex p-3 rounded-lg bg-brand/10 text-brand">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                          </span>
                      </div>
                      <div className="flex flex-col items-right gap-3">
                          <span className="text-white font-medium">
                              Latinoware 2024
                          </span>
                          <div className="flex flex-wrap gap-2">
                              <span className="text-xs px-2 py-1 bg-zinc-800 rounded">Congresso</span>
                              <span className="text-xs px-2 py-1 bg-zinc-800 rounded">Software Livre</span>
                              <span className="text-xs px-2 py-1 bg-zinc-800 rounded">Hackaton</span>
                          </div>
                      </div>
                  </li>

                  <li className="flex items-center p-2">
                      <div className="flex-shrink-0">
                          <span className="flex p-3 rounded-lg bg-brand/10 text-brand">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-radar-icon lucide-radar"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/></svg>
                          </span>
                      </div>
                      <div className="flex flex-col items-right gap-3">
                          <span className="text-white font-medium">
                              Campus Party Goiás 2025
                          </span>
                          <div className="flex flex-wrap gap-2">
                              <span className="text-xs px-2 py-1 bg-zinc-800 rounded">Inovação</span>
                              <span className="text-xs px-2 py-1 bg-zinc-800 rounded">Tecnologia</span>
                              <span className="text-xs px-2 py-1 bg-zinc-800 rounded">IA e Gestão</span>
                          </div>
                      </div>
                  </li>
                </ul>
            </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-200 bg-white/65 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_60px_rgba(0,0,0,0.24)] sm:p-8">
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
                      <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            
          </div>
        </motion.div>

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