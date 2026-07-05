import { NextResponse } from "next/server";
import { profile, stackGroups } from "@/data/stacks";

export async function GET() {
  const data = {
    ...profile,
    updated_at: new Date().toISOString(),
    stacks: Object.fromEntries(
      stackGroups.map((group) => [group.key, group.items]),
    ),
  };

  return NextResponse.json(data, {
    status: 200,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
