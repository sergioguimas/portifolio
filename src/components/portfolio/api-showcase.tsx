"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Braces,
  Copy,
  Sparkles,
  Check,
  RefreshCw,
  AlertCircle,
  LayoutDashboard,
  Code2,
  Server,
  Bot,
  Wrench,
} from "lucide-react";

type StackLevel = "advanced" | "intermediate" | "basic";

type StackItem = {
  name: string;
  level: StackLevel;
};

type StacksResponse = {
  name: string;
  role: string;
  location?: string;
  updated_at: string;
  focus?: string[];
  stacks: {
    frontend?: StackItem[];
    backend?: StackItem[];
    automation?: StackItem[];
    infra?: StackItem[];
  };
};

type ProjectItem = {
  slug: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  href: string;
};

type ProjectsResponse = {
  updated_at: string;
  projects: ProjectItem[];
};

type ApiResponse = StacksResponse | ProjectsResponse | null;

type EndpointItem = {
  label: string;
  path: string;
  description: string;
};

type ViewMode = "json" | "ui";

const endpoints: EndpointItem[] = [
  {
    label: "GET /api/stacks",
    path: "/api/stacks",
    description: "Tecnologias, especialidades e áreas em que atuo no desenvolvimento.",
  },
  {
    label: "GET /api/projects",
    path: "/api/projects",
    description: "Projetos que representam minha forma de construir produto, automação e sistema real.",
  },
];

export function ApiShowcase() {
  const [selected, setSelected] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>("ui");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [response, setResponse] = useState<ApiResponse>(null);

  const active = useMemo(() => endpoints[selected], [selected]);

  async function loadEndpoint(path: string) {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(path, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error(`Falha ao carregar ${path}: ${res.status}`);
      }

      const data = (await res.json()) as ApiResponse;
      setResponse(data);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Não foi possível carregar o endpoint.";
      setError(message);
      setResponse(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEndpoint(active.path);
  }, [active.path]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(active.path);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  }

  function formatResponse(data: ApiResponse) {
    if (!data) return "";
    return JSON.stringify(data, null, 2);
  }

  return (
    <section id="api" className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            API
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
            Dados reais, duas formas de visualizar.
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            Aqui a mesma API pode ser vista como resposta JSON ou como interface
            adaptativa. Isso mostra não só a estrutura dos dados, mas também como
            eles podem alimentar experiências visuais reais.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[320px_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-zinc-200 bg-white/70 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
          >
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <Sparkles size={16} />
              Endpoints disponíveis
            </div>

            <div className="space-y-3">
              {endpoints.map((item, index) => {
                const isActive = selected === index;

                return (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => setSelected(index)}
                    className={[
                      "w-full rounded-2xl border p-4 text-left transition-all duration-300",
                      isActive
                        ? "border-cyan-400/30 bg-cyan-400/10 shadow-[0_10px_30px_rgba(34,211,238,0.08)]"
                        : "border-zinc-200 bg-white/70 hover:border-cyan-400/20 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05]",
                    ].join(" ")}
                  >
                    <div className="text-sm font-semibold text-zinc-950 dark:text-white">
                      {item.label}
                    </div>

                    <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      {item.description}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-[#0b1120] shadow-[0_24px_70px_rgba(0,0,0,0.16)] dark:border-white/10"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                </div>

                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <Braces size={16} />
                  {active.path}
                </div>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                  200 OK
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="flex rounded-full border border-white/10 bg-white/[0.03] p-1">
                  <button
                    type="button"
                    onClick={() => setViewMode("json")}
                    className={[
                      "rounded-full px-3 py-1.5 text-xs font-medium transition",
                      viewMode === "json"
                        ? "bg-white text-zinc-950"
                        : "text-zinc-300 hover:bg-white/5",
                    ].join(" ")}
                  >
                    JSON
                  </button>

                  <button
                    type="button"
                    onClick={() => setViewMode("ui")}
                    className={[
                      "rounded-full px-3 py-1.5 text-xs font-medium transition",
                      viewMode === "ui"
                        ? "bg-white text-zinc-950"
                        : "text-zinc-300 hover:bg-white/5",
                    ].join(" ")}
                  >
                    Interface
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => loadEndpoint(active.path)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:bg-white/5"
                >
                  <RefreshCw size={14} />
                  Recarregar
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:bg-white/5"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? "Copiado" : "Copiar rota"}
                </button>
              </div>
            </div>

            <div className="min-h-[460px]">
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div
                    key={`loading-${active.path}`}
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="flex min-h-[460px] items-center justify-center px-6"
                  >
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                      <RefreshCw size={16} className="animate-spin" />
                      Carregando resposta real do endpoint...
                    </div>
                  </motion.div>
                ) : error ? (
                  <motion.div
                    key={`error-${active.path}`}
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="flex min-h-[460px] items-center justify-center px-6"
                  >
                    <div className="max-w-md rounded-2xl border border-red-400/20 bg-red-400/10 p-5 text-left">
                      <div className="flex items-center gap-2 text-sm font-medium text-red-200">
                        <AlertCircle size={16} />
                        Erro ao consultar endpoint
                      </div>
                      <p className="mt-3 text-sm leading-7 text-red-100/90">{error}</p>
                    </div>
                  </motion.div>
                ) : viewMode === "json" ? (
                  <motion.pre
                    key={`json-${active.path}`}
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-x-auto p-5 text-sm leading-7 text-zinc-200"
                  >
                    <code>{formatResponse(response)}</code>
                  </motion.pre>
                ) : (
                  <motion.div
                    key={`ui-${active.path}`}
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="p-5"
                  >
                    <ApiVisualRenderer data={response} endpointPath={active.path} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ApiVisualRenderer({
  data,
  endpointPath,
}: {
  data: ApiResponse;
  endpointPath: string;
}) {
  if (!data) return null;

  if (endpointPath === "/api/stacks" && "stacks" in data) {
    return <StacksDashboard data={data as StacksResponse} />;
  }

  if (endpointPath === "/api/projects" && "projects" in data) {
    return <ProjectsDashboard data={data as ProjectsResponse} />;
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-zinc-300">
      Sem visualização disponível para este endpoint.
    </div>
  );
}

function StacksDashboard({ data }: { data: StacksResponse }) {
  const categories = [
    {
      key: "frontend",
      label: "Frontend",
      icon: Code2,
      items: data.stacks.frontend ?? [],
    },
    {
      key: "backend",
      label: "Backend",
      icon: Server,
      items: data.stacks.backend ?? [],
    },
    {
      key: "automation",
      label: "Automação",
      icon: Bot,
      items: data.stacks.automation ?? [],
    },
    {
      key: "infra",
      label: "Infra",
      icon: Wrench,
      items: data.stacks.infra ?? [],
    },
  ].filter((group) => group.items.length > 0);

  const allItems = categories.flatMap((group) => group.items);
  const advancedCount = allItems.filter((item) => item.level === "advanced").length;
  const intermediateCount = allItems.filter(
    (item) => item.level === "intermediate"
  ).length;

  return (
    <div className="space-y-5 text-zinc-100">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          label="Especialidades"
          value={String(allItems.length)}
          helper="Tecnologias mapeadas"
        />
        <StatCard
          label="Nível avançado"
          value={String(advancedCount)}
          helper="Stacks com domínio forte"
        />
        <StatCard
          label="Nível intermediário"
          value={String(intermediateCount)}
          helper="Aprofundamento contínuo"
        />
      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">
              Perfil técnico
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              {data.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-300">{data.role}</p>
            {data.location ? (
              <p className="mt-1 text-sm text-zinc-400">{data.location}</p>
            ) : null}
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-right">
            <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              Atualizado em
            </p>
            <p className="mt-1 text-sm text-zinc-200">
              {new Date(data.updated_at).toLocaleString("pt-BR")}
            </p>
          </div>
        </div>

        {data.focus?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {data.focus.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-200"
              >
                {item}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="grid gap-4 xl:grid-cols-2"
      >
        {categories.map((group) => {
          const Icon = group.icon;

          return (
            <motion.div
              key={group.key}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Icon size={18} />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white">{group.label}</h4>
                  <p className="text-sm text-zinc-400">
                    {group.items.length} tecnologias
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                  >
                    <span className="text-sm text-zinc-200">{item.name}</span>
                    <LevelBadge level={item.level} />
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

function ProjectsDashboard({ data }: { data: ProjectsResponse }) {
  return (
    <div className="space-y-5 text-zinc-100">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          label="Projetos"
          value={String(data.projects.length)}
          helper="Entradas disponíveis"
        />
        <StatCard
          label="Categorias"
          value={String(new Set(data.projects.map((item) => item.category)).size)}
          helper="Áreas de atuação"
        />
        <StatCard
          label="Atualizado em"
          value={new Date(data.updated_at).toLocaleDateString("pt-BR")}
          helper="Última geração da resposta"
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="grid gap-4 xl:grid-cols-2"
      >
        {data.projects.map((project) => (
          <motion.a
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            key={project.slug}
            href={project.href}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/20 hover:bg-white/[0.05]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">
                  {project.category}
                </p>
                <h4 className="mt-2 text-xl font-semibold text-white">
                  {project.title}
                </h4>
              </div>

              <div className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-zinc-300">
                {project.slug}
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-zinc-300">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

function StatCard({
  label,
  value,
  helper,
}: {
  label: string;
  value: string;
  helper: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{label}</p>
      <p className="mt-3 text-3xl font-bold text-white">{value}</p>
      <p className="mt-2 text-sm text-zinc-400">{helper}</p>
    </div>
  );
}

function LevelBadge({ level }: { level: StackLevel }) {
  const styles: Record<StackLevel, string> = {
    advanced:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    intermediate:
      "border-amber-400/20 bg-amber-400/10 text-amber-300",
    basic:
      "border-zinc-400/20 bg-zinc-400/10 text-zinc-300",
  };

  const labels: Record<StackLevel, string> = {
    advanced: "Avançado",
    intermediate: "Intermediário",
    basic: "Básico",
  };

  return (
    <span
      className={[
        "rounded-full border px-3 py-1 text-xs font-medium",
        styles[level],
      ].join(" ")}
    >
      {labels[level]}
    </span>
  );
}