import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    name: "Sergio Guimarães",
    role: "Full Stack Developer",
    location: "Teófilo Otoni - MG",
    updated_at: new Date().toISOString(),

    focus: [
      "Interfaces modernas",
      "APIs escaláveis",
      "Automações de processos",
      "Soluções orientadas a negócio",
    ],

    stacks: {
      frontend: [
        { name: "Next.js", level: "advanced" },
        { name: "React", level: "advanced" },
        { name: "TypeScript", level: "advanced" },
        { name: "TailwindCSS", level: "advanced" },
      ],

      backend: [
        { name: "Node.js", level: "advanced" },
        { name: "Fastify", level: "advanced" },
        { name: "Supabase", level: "advanced" },
        { name: "PostgreSQL", level: "intermediate" },
      ],

      automation: [
        { name: "n8n", level: "advanced" },
        { name: "Webhooks", level: "advanced" },
        { name: "API Integrations", level: "advanced" },
        { name: "Python", level: "advanced" },
        { name: "PowerShell", level: "intermediate" },
      ],

      infra: [
        { name: "Docker", level: "intermediate" },
        { name: "VPS (Linux)", level: "intermediate" },
        { name: "Nginx", level: "intermediate" },
      ],
    },
  };

  return NextResponse.json(data, {
    status: 200,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}