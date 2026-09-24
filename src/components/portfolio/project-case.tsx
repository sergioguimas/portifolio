import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CircleDot,
  Code2,
  Layers3,
  Lightbulb,
  LockKeyhole,
  Route,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { NeuralBackground } from "@/components/portfolio/neural-background";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";
import type { Project } from "@/data/projects";

type ProjectCaseProps = {
  project: Project;
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-zinc-600 dark:text-zinc-300">
          {description}
        </p>
      )}
    </div>
  );
}

export function ProjectCase({ project }: ProjectCaseProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f8fb] text-zinc-900 transition-colors dark:bg-[#050816] dark:text-zinc-100">
      <NeuralBackground />

      <header className="relative z-20 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-zinc-200/70 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#07101f]/75 sm:px-5">
          <Link
            href="/#topo"
            className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-900 dark:text-zinc-100"
          >
            Sergio.dev
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/#projetos"
              className="hidden items-center gap-2 rounded-full border border-zinc-300/90 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:border-zinc-950 hover:bg-zinc-950 hover:text-white dark:border-white/15 dark:text-zinc-100 dark:hover:bg-white dark:hover:text-zinc-950 sm:inline-flex"
            >
              <ArrowLeft size={15} /> Projetos
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section className="relative z-10 px-6 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
                {project.category}
              </span>
              <span className="rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-xs text-zinc-600 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                {project.status}
              </span>
              {project.isPrivate && (
                <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-xs text-zinc-600 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                  <LockKeyhole size={13} /> Case privado
                </span>
              )}
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[0.95] tracking-[-0.045em] text-zinc-950 dark:text-white sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-300 sm:text-xl">
              {project.shortDescription}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/#projetos"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] dark:bg-white dark:text-zinc-950"
              >
                <ArrowLeft size={16} /> Voltar aos projetos
              </Link>
              <Link
                href={`/api/projects/${project.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-950 hover:bg-zinc-950 hover:text-white dark:border-white/15 dark:text-white dark:hover:bg-white dark:hover:text-zinc-950"
              >
                Ver dados do case <ArrowUpRight size={15} />
              </Link>
              {project.links?.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-800 transition hover:border-cyan-400/60 dark:text-cyan-200"
                >
                  {link.label} <ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-zinc-200 bg-white/70 p-7 shadow-[0_24px_70px_rgba(0,0,0,0.10)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300">
                <Code2 size={19} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                  Stack do projeto
                </p>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                  Tecnologias usadas neste contexto
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-200 bg-white/75 px-3 py-1.5 text-xs text-zinc-700 dark:border-white/10 dark:bg-black/20 dark:text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
            {project.isPrivate && (
              <p className="mt-6 flex items-start gap-2 border-t border-zinc-200 pt-5 text-xs leading-6 text-zinc-500 dark:border-white/10 dark:text-zinc-400">
                <ShieldCheck className="mt-0.5 shrink-0" size={15} />
                Repositório privado e informações sensíveis omitidas. O case descreve o
                contexto técnico sem expor dados de operação.
              </p>
            )}
          </aside>
        </div>
      </section>

      <div className="relative z-10 px-6 lg:px-8">
        <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:via-white/15" />
      </div>

      <section className="relative z-10 px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-zinc-200 bg-white/65 p-7 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-9">
            <Layers3 className="text-cyan-700 dark:text-cyan-300" size={24} />
            <h2 className="mt-5 text-2xl font-semibold text-zinc-950 dark:text-white">
              Visão geral
            </h2>
            <p className="mt-4 leading-8 text-zinc-600 dark:text-zinc-300">
              {project.overview}
            </p>
          </article>
          <article className="rounded-[2rem] border border-zinc-200 bg-white/65 p-7 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-9">
            <CircleDot className="text-cyan-700 dark:text-cyan-300" size={24} />
            <h2 className="mt-5 text-2xl font-semibold text-zinc-950 dark:text-white">
              O problema
            </h2>
            <p className="mt-4 leading-8 text-zinc-600 dark:text-zinc-300">
              {project.problem}
            </p>
          </article>
        </div>
      </section>

      <section className="relative z-10 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Minha atuação"
            title="Responsabilidades dentro do projeto"
            description="As frentes em que participei diretamente, da definição do fluxo à implementação técnica."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {project.role.map((item, index) => (
              <article
                key={item}
                className="rounded-[1.5rem] border border-zinc-200 bg-white/65 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Funcionalidades"
            title="O que o produto entrega"
            description="Recursos principais que materializam o fluxo e as regras deste case."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.features.map((feature) => (
              <article
                key={feature}
                className="flex gap-3 rounded-[1.5rem] border border-zinc-200 bg-white/65 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-700 dark:text-cyan-300">
                  <Check size={15} />
                </span>
                <p className="text-sm font-medium leading-6 text-zinc-800 dark:text-zinc-200">
                  {feature}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <SectionHeading
              eyebrow="Desafios técnicos"
              title="Onde o projeto exigiu mais cuidado"
            />
            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 dark:text-zinc-300">
              Decisões técnicas ligadas ao contexto, às exceções e à confiabilidade do fluxo.
            </p>
          </div>
          <div className="space-y-4">
            {project.challenges.map((challenge, index) => (
              <article
                key={challenge}
                className="flex gap-4 rounded-[1.5rem] border border-zinc-200 bg-white/65 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300">
                  <Wrench size={17} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                    Desafio {index + 1}
                  </p>
                  <p className="mt-2 leading-7 text-zinc-700 dark:text-zinc-300">
                    {challenge}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.10),rgba(99,102,241,0.07),rgba(255,255,255,0.65))] p-8 backdrop-blur-xl dark:bg-[linear-gradient(135deg,rgba(34,211,238,0.10),rgba(99,102,241,0.08),rgba(255,255,255,0.03))] sm:p-10 lg:p-12">
          <Lightbulb className="text-cyan-700 dark:text-cyan-300" size={26} />
          <p className="mt-6 text-sm uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Resultado e aprendizado
          </p>
          <p className="mt-5 max-w-5xl text-2xl font-semibold leading-10 tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
            {project.outcome}
          </p>
        </div>
      </section>

      {project.images?.length ? (
        <section className="relative z-10 px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Galeria"
              title="Imagens disponíveis do projeto"
              description={
                project.isPrivate
                  ? "Capturas selecionadas para apresentar a interface sem expor informações sensíveis."
                  : "Registros visuais das principais telas e fluxos."
              }
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {project.images.map((image, index) => (
                <figure
                  key={image}
                  className="overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white/65 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.10)] dark:border-white/10 dark:bg-white/5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.35rem] bg-zinc-950">
                    <Image
                      src={image}
                      alt={`Tela ${index + 1} do projeto ${project.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {project.nextSteps?.length ? (
        <section className="relative z-10 px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Próximos passos" title="Caminhos previstos para a evolução" />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {project.nextSteps.map((step) => (
                <article
                  key={step}
                  className="flex items-start gap-4 rounded-[1.5rem] border border-zinc-200 bg-white/65 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                >
                  <Route className="mt-0.5 shrink-0 text-cyan-700 dark:text-cyan-300" size={20} />
                  <p className="leading-7 text-zinc-700 dark:text-zinc-300">{step}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="relative z-10 px-6 pb-28 pt-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2rem] border border-zinc-200 bg-white/70 p-8 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-10 lg:flex-row lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-300">
              <Sparkles size={18} />
              <span className="text-xs uppercase tracking-[0.22em]">Mais cases</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Veja como outros problemas foram transformados em produto.
            </h2>
          </div>
          <Link
            href="/#projetos"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] dark:bg-white dark:text-zinc-950"
          >
            Explorar projetos <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
