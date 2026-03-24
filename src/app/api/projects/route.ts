import { NextResponse } from "next/server";

export async function GET() {
  const projects = [
    {
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
      status: "in-development",
    },
    {
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
      status: "active",
    },
    {
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
      status: "active",
    },
    {
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
      status: "active",
    },
  ];

  return NextResponse.json(
    {
      total: projects.length,
      updated_at: new Date().toISOString(),
      data: projects,
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}