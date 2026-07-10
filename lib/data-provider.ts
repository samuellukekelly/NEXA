import { demoProjects } from "@/lib/demo-data/projects";
import { getSupabaseServerClient, hasSupabaseServerEnv } from "@/lib/supabase/server";

export function isDemoMode() {
  return process.env.NEXT_PUBLIC_DEMO_MODE === "true" || !hasSupabaseServerEnv();
}

export async function getProjects() {
  if (isDemoMode()) return demoProjects;

  const supabase = getSupabaseServerClient();
  if (!supabase) return demoProjects;

  const { data, error } = await supabase.from("projects").select("*");
  if (error || !data?.length) return demoProjects;

  return demoProjects;
}

export async function getProject(id: string) {
  const projects = await getProjects();
  return projects.find((project) => project.id === id) ?? projects[0];
}
