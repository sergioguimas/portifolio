import { NextRequest, NextResponse } from "next/server";

const projects = {
  "eliza-saas": {
    slug: "eliza-saas",
    name: "Eliza SaaS",
    category: "SaaS",
    description:
      "Sistema completo para gestão de atendimentos, clientes e operações internas com foco em escalabilidade.",
    stack: ["Next.js", "Supabase", "TypeScript"],
    highlights: [
      "Arquitetura multi-tenant",
      "Dashboard completa",
      "Sistema de autenticação",
    ],
    features: [
      "Gestão de clientes",
      "Painéis por perfil",
      "Estrutura preparada para crescimento",
    ],
    status: "in-development",
  },

  "n8n-workflows": {
    slug: "n8n-workflows",
    name: "n8n Workflows",
    category: "Automação",
    description:
      "Criação de fluxos automatizados para integração entre sistemas e redução de tarefas manuais.",
    stack: ["n8n", "Webhooks", "APIs"],
    highlights: [
      "Integração entre sistemas",
      "Automação de processos",
      "Fluxos personalizados",
    ],
    features: [
      "Triggers automatizados",
      "Conexão entre serviços",
      "Redução de retrabalho",
    ],
    status: "active",
  },

  "automacoes-empresariais": {
    slug: "automacoes-empresariais",
    name: "Automações Empresariais",
    category: "Business Automation",
    description:
      "Soluções sob medida para automatizar rotinas empresariais e aumentar eficiência operacional.",
    stack: ["Node.js", "APIs", "Webhooks"],
    highlights: [
      "Redução de trabalho manual",
      "Integração com sistemas internos",
      "Escalabilidade",
    ],
    features: [
      "Automação de processos internos",
      "Integrações customizadas",
      "Padronização operacional",
    ],
    status: "active",
  },

  "solucoes-comerciais": {
    slug: "solucoes-comerciais",
    name: "Soluções Comerciais",
    category: "Business",
    description:
      "Desenvolvimento de sistemas e ferramentas voltadas para operações comerciais e vendas.",
    stack: ["Next.js", "Node.js", "APIs"],
    highlights: [
      "Sistemas personalizados",
      "Foco em conversão",
      "Experiência do usuário",
    ],
    features: [
      "Ferramentas para operação comercial",
      "Fluxos sob medida",
      "Interface orientada a resultado",
    ],
    status: "active",
  },
};

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return NextResponse.json(
      { error: "Project not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(project, {
    status: 200,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}