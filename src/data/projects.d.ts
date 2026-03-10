export interface Project {
  name: string;
  slug: string;
  description: string;
  github: string | null;
  deploy: string | null;
  languages: string[];
  /** Paths relativi in public (es. "projects/cenette/1.png") */
  images?: string[];
}

export interface ProjectsData {
  projects: Project[];
}



