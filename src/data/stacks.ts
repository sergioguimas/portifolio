export type StackItem = {
  name: string;
  context: string;
};

export type StackGroup = {
  key: "frontend" | "backend" | "automation" | "infra" | "ai";
  label: string;
  description: string;
  items: StackItem[];
};

export const profile = {
  name: "Sérgio Guimarães",
  role: "Desenvolvedor Full Stack em formação",
  statement:
    "Desenvolvimento web, automação e produtos digitais para resolver problemas reais de negócio.",
  focus: [
    "Sistemas web e SaaS",
    "Regras de negócio",
    "Automações de processos",
    "Integrações entre serviços",
  ],
};

export const stackGroups: StackGroup[] = [
  {
    key: "frontend",
    label: "Frontend",
    description: "Interfaces, fluxos e experiências responsivas.",
    items: [
      { name: "Next.js", context: "Aplicações web e SaaS" },
      { name: "React", context: "Interfaces e fluxos interativos" },
      { name: "TypeScript", context: "Código tipado no frontend e backend" },
      { name: "Tailwind CSS", context: "Design responsivo e consistente" },
    ],
  },
  {
    key: "backend",
    label: "Backend e dados",
    description: "APIs, persistência e regras de negócio.",
    items: [
      { name: "Supabase", context: "Autenticação, banco e RLS" },
      { name: "PostgreSQL", context: "Modelagem, regras em PL/pgSQL e RLS" },
      { name: "Go", context: "APIs, workers e serviços leves" },
      { name: "Node.js", context: "Serviços e integrações" },
      { name: "SQLite", context: "Persistência simples de operar" },
    ],
  },
  {
    key: "automation",
    label: "Automação",
    description: "Rotinas, integrações e redução de trabalho manual.",
    items: [
      { name: "n8n", context: "Workflows e orquestração" },
      { name: "Playwright", context: "Automação de sistemas sem API" },
      { name: "Python", context: "Scripts e tratamento de dados" },
      { name: "PowerShell", context: "Rotinas operacionais e backup" },
    ],
  },
  {
    key: "infra",
    label: "Infraestrutura",
    description: "Ambientes para publicar e operar aplicações.",
    items: [
      { name: "Docker", context: "Empacotamento de serviços" },
      { name: "VPS Linux", context: "Hospedagem e operação" },
      { name: "Traefik / Nginx", context: "Proxy e roteamento" },
      { name: "Git / GitHub", context: "Versionamento e colaboração" },
    ],
  },
  {
    key: "ai",
    label: "IA e agentes",
    description: "IA aplicada a produtos e automações.",
    items: [
      { name: "Gemini", context: "Geração, embeddings, visão e áudio" },
      { name: "RAG / pgvector", context: "Busca vetorial por agente" },
      { name: "Bases de conhecimento", context: "Contexto reutilizável" },
      { name: "Memória de conversas", context: "Experiências persistentes" },
    ],
  },
];

export const featuredTechnologies = [
  "Next.js",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "Go",
  "n8n",
  "Playwright",
  "Python",
  "PowerShell",
  "Docker",
  "Gemini",
  "APIs REST",
] as const;

export const stacksByKey = Object.fromEntries(
  stackGroups.map((group) => [group.key, group.items]),
) as Record<StackGroup["key"], StackItem[]>;
