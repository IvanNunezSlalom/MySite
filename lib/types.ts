export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  clientLogo?: string;
  subtitle: string;
  category: ProjectCategory[];
  featured: boolean;
  year: string;
  heroImage: string;
  thumbnailImage: string;

  overview: string;

  why: string;
  what: string;
  wow: string;
  solutions: string;

  deliverables: string[];

  tags: string[];
  color?: string; // Accent color for this project
}

export type ProjectCategory =
  | 'UX Research & Strategy'
  | 'Platform Design'
  | 'AI & Agents'
  | 'Service Design'
  | 'CX Strategy'
  | 'Government';

export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
}
