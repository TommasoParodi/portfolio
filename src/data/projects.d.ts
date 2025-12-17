export interface Project {
  name: string;
  description: string;
  github: string;
  deploy: string | null;
  languages: string[];
}

export interface ProjectsData {
  projects: Project[];
}

