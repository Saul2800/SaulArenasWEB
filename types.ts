export interface PortfolioItem {
  id: number;
  title: string;
  subtitle: string; // Used for "Match %" or "Year"
  description: string;
  tags: string[];
  image: string;
  category: 'experience' | 'project' | 'skill' | 'education' | 'language';
  details?: {
    role?: string;
    duration?: string;
    techStack?: string[];
    link?: string;
  };
}

export type SectionData = {
  title: string;
  items: PortfolioItem[];
};