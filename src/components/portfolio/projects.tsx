"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Building2, HeartPulse, TerminalSquare } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ProjectPreview } from "@/components/portfolio/project-preview";

type Project = {
  category: string;
  title: string;
  description: string;
  highlights: string[];
  href: string;
  icon: LucideIcon;
  images: string[];
};

const projects: Project[] = [
  {
    category: "SaaS / HealthTech",
    title: "Eliza",
    description:
      "SaaS multi-tenant para clínicas médicas com controle de agenda, prontuário, gestão de pacientes e redução no tempo de agendamento através de automação via WhatsApp",
    highlights: ["Multi-tenant", "RLS (Row Level Security)", "Escalabilidade"],
    href: "/projetos/eliza-saas",
    icon: HeartPulse,
    images: [
      "/images/projects/Eliza(1).webp",
      "/images/projects/Eliza(2).webp",
      "/images/projects/Eliza(3).webp",
      "/images/projects/Eliza(4).webp",
    ],
  },
  {
    category: "Automação de Processos",
    title: "Workflows & Integrações",
    description:
      "Fluxos construídos com n8n para automatizar contratos, lembretes, confirmações de agendamento e avisos diários de tarefas pendentes.",
    highlights: ["n8n", "Webhooks", "Rotinas operacionais"],
    href: "/projetos/n8n-workflows",
    icon: Bot,
    images: [
      "/images/projects/workflow (1).webp",
      "/images/projects/workflow (2).webp",
      "/images/projects/workflow (3).webp",
    ],
  },
  {
    category: "Scripts e Produtividade",
    title: "Automações Internas",
    description:
      "Scripts em Python e PowerShell criados para reduzir tarefas repetitivas, diminuir risco operacional e agilizar o dia a dia da empresa.",
    highlights: ["Python", "PowerShell", "Eficiência interna"],
    href: "/projetos/automacoes-empresariais",
    icon: TerminalSquare,
    images: [
      "/images/projects/automacao (1).webp",
      "/images/projects/automacao (2).webp",
      "/images/projects/automacao (3).webp",
    ],
  },
  {
    category: "Sistemas sob Medida",
    title: "Soluções Empresariais",
    description:
      "Desenvolvimento de sistemas web próprios para empresas e comércios, incluindo fidelidade, disponibilidade, portal contábil e landing pages.",
    highlights: ["Fidelidade", "Disponibilidade", "Soluções comerciais"],
    href: "/projetos/solucoes-comerciais",
    icon: Building2,
    images: [
      "/images/projects/solucao (1).webp",
      "/images/projects/solucao (2).webp",
      "/images/projects/solucao (3).webp",
      "/images/projects/solucao (4).webp",
    ],
  },
];

export function Projects() {
  return (
    <section id="projetos" className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Projetos
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
            Soluções construídas a partir de necessidades reais.
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            De SaaS e automações a sistemas sob medida, estes projetos mostram como
            transformo operação, processo e necessidade de negócio em aplicações funcionais.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Link
                  href={project.href}
                  className="group relative block h-full overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/70 p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5 dark:hover:shadow-[0_24px_70px_rgba(0,0,0,0.30)]"
                >
                  <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_65%)]" />
                  </div>

                  <div className="relative z-10 flex h-full flex-col">
                    <ProjectPreview images={project.images} alt={project.title} delay={index * 400}/>
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300">
                        <Icon size={22} />
                      </div>

                      <span className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-zinc-200/80 px-3 py-1.5 text-xs text-zinc-700 dark:border-white/10 dark:text-zinc-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-700 transition group-hover:translate-x-1 dark:text-cyan-300">
                      Ver projeto
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}