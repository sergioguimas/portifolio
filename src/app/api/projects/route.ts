import { NextResponse } from "next/server";
import { projects, toProjectApiItem } from "@/data/projects";

export async function GET() {
  const data = {
    updated_at: new Date().toISOString(),
    projects: projects.map(toProjectApiItem),
  };

  return NextResponse.json(data, {
    status: 200,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
