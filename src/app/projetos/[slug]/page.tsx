import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCase } from "@/components/portfolio/project-case";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects
    .filter((project) => project.slug !== "eliza-saas")
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projeto não encontrado" };
  }

  return {
    title: `${project.title} | Case de projeto`,
    description: project.shortDescription,
    keywords: [project.title, project.category, ...project.highlights, ...project.stack.slice(0, 5)],
    openGraph: {
      title: `${project.title} | Case de projeto`,
      description: project.shortDescription,
      type: "article",
      locale: "pt_BR",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectCase project={project} />;
}
