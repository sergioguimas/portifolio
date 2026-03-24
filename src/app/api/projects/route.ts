import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    updated_at: new Date().toISOString(),
    projects: [
      {
        slug: "eliza-saas",
        title: "Eliza",
        category: "SaaS / HealthTech",
        description:
          "SaaS multi-tenant para clínicas médicas com agenda, prontuário, gestão de pacientes e integração com WhatsApp.",
        stack: ["Next.js", "Supabase", "TypeScript"],
        href: "/projetos/eliza-saas",
      },
      {
        slug: "n8n-workflows",
        title: "Workflows & Integrações",
        category: "Automação de Processos",
        description:
          "Fluxos com n8n para contratos, lembretes, confirmações de agendamento e rotinas operacionais.",
        stack: ["n8n", "Webhooks", "APIs"],
        href: "/projetos/n8n-workflows",
      },
      {
        slug: "automacoes-empresariais",
        title: "Automações Internas",
        category: "Scripts e Produtividade",
        description:
          "Scripts em Python e PowerShell para reduzir tarefas repetitivas e aumentar eficiência operacional.",
        stack: ["Python", "PowerShell"],
        href: "/projetos/automacoes-empresariais",
      },
      {
        slug: "solucoes-comerciais",
        title: "Soluções Empresariais",
        category: "Sistemas sob Medida",
        description:
          "Sistemas próprios para empresas e comércios, incluindo fidelidade, disponibilidade e landing pages.",
        stack: ["Next.js", "Node.js", "Supabase"],
        href: "/projetos/solucoes-comerciais",
      },
    ],
  };

  return NextResponse.json(data, {
    status: 200,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}