import ProjectsShowcase from "@/components/ProjectsShowcase";
import { projects } from "@/data/profile";

export default function ProjectsGrid() {
  return <ProjectsShowcase projects={projects} showFilters />;
}
