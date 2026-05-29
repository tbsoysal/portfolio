export interface LinkLinks {
  github: string;
  site?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProjectItem {
  imagesource: string;
  title: string;
  description: string;
  techstack: string[];
  links: LinkLinks;
  QA: FAQItem[];
}

// Since your input was an array of these objects:
export type ProjectList = ProjectItem[];