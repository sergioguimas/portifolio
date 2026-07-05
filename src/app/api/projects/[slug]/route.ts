import { NextRequest, NextResponse } from "next/server";
import { getProjectBySlug, getProjectHref } from "@/data/projects";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return NextResponse.json(
      { error: "Projeto não encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { ...project, href: getProjectHref(project) },
    {
    status: 200,
    headers: {
      "Cache-Control": "no-store",
    },
    },
  );
}
