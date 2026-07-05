"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Building2,
  Calculator,
  FileCheck2,
  HeartPulse,
  LockKeyhole,
  ShoppingBag,
  Store,
  TerminalSquare,
} from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ProjectPreview } from "@/components/portfolio/project-preview";
import {
  featuredProjects,
  getProjectHref,
  otherProjects,
  type Project,
  type ProjectIconKey,
} from "@/data/projects";

const projectIcons: Record<ProjectIconKey, LucideIcon> = {
  health: HeartPulse,
  commerce: ShoppingBag,
  form: FileCheck2,
  ai: Bot,
  accounting: Calculator,
  studio: Building2,
  catalog: Store,
  automation: TerminalSquare,
};

function ProjectCover({ project, delay }: { project: Project; delay: number }) {
  if (project.images?.length) {
    return <ProjectPreview images={project.images} alt={project.title} delay={delay} />;
  }

  const Icon = projectIcons[project.icon];

  return (
    <div className="relative flex h-56 items-end overflow-hidden rounded-[1.5rem] border border-zinc-200/80 bg-[linear-gradient(145deg,#07111f,#0b1830_55%,#111827)] p-6 dark:border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.24),transparent_36%)]" />
      <div className="absolute inset-0 bg-[size:28px_28px] opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]" />
      <Icon className="absolute right-6 top-6 text-cyan-300/80" size={54} strokeWidth={1.25} />
      <div className="relative z-10">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">
          {project.category}
        </p>
        <p className="mt-3 max-w-sm text-2xl font-semibold text-white">{project.title}</p>
      </div>
    </div>
  );
}

function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = projectIcons[project.icon];

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <Link
        href={getProjectHref(project)}
        className="group relative block h-full overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/70 p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5 dark:hover:shadow-[0_24px_70px_rgba(0,0,0,0.30)]"
      >
        <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_65%)]" />
        </div>

        <div className="relative z-10 flex h-full flex-col">
          <ProjectCover project={project} delay={index * 400} />

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300">
              <Icon size={22} />
            </div>

            <span className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
              {project.status}
            </span>
          </div>

          <p className="mt-6 text-xs font-medium uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
            {project.category}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            {project.cardTitle}
          </h3>
          <p className="mt-4 flex-1 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            {project.shortDescription}
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
            Ler case
            <ArrowUpRight size={16} />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

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
            Projetos em destaque
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
            Cases construídos a partir de necessidades reais.
          </h2>
          <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            Cada projeto reúne contexto, decisões, regras e desafios técnicos. O valor está
            menos na lista de tecnologias e mais em como elas foram combinadas para resolver
            o problema.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
              Outros trabalhos
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Projetos acadêmicos, iniciativa de produto e automação operacional.
            </h3>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            Contextos diferentes que mostram colaboração, adaptação de stack e resolução
            pragmática de problemas.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {otherProjects.map((project, index) => {
            const Icon = projectIcons[project.icon];

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Link
                  href={getProjectHref(project)}
                  className="group flex h-full flex-col rounded-[1.75rem] border border-zinc-200 bg-white/65 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300">
                      <Icon size={21} />
                    </div>
                    {project.isPrivate && (
                      <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                        <LockKeyhole size={13} /> Case privado
                      </span>
                    )}
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
                    {project.category}
                  </p>
                  <h4 className="mt-3 text-xl font-semibold text-zinc-950 dark:text-white">
                    {project.title}
                  </h4>
                  <p className="mt-3 flex-1 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                    {project.shortDescription}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-700 transition group-hover:translate-x-1 dark:text-cyan-300">
                    Ler case <ArrowUpRight size={15} />
                  </span>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
