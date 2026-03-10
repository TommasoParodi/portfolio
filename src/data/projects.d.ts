export interface Project {
  name: string;
  description: string;
  github: string | null;
  deploy: string | null;
  languages: string[];
}

export interface ProjectsData {
  projects: Project[];
}



