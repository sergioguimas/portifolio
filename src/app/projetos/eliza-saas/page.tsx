import type { Metadata } from "next";
import { ProjectCase } from "@/components/portfolio/project-case";
import { getProjectBySlug } from "@/data/projects";

const project = getProjectBySlug("eliza-saas");

export const metadata: Metadata = {
  title: "Eliza | Case de projeto",
  description:
    "SaaS multi-tenant para clínicas com agenda, pacientes, PWA e automações via WhatsApp.",
  openGraph: {
    title: "Eliza | Case de projeto",
    description:
      "SaaS multi-tenant para clínicas com agenda, pacientes, PWA e automações via WhatsApp.",
    type: "article",
    locale: "pt_BR",
  },
};

export default function ElizaSaaSPage() {
  if (!project) return null;

  return <ProjectCase project={project} />;
}
