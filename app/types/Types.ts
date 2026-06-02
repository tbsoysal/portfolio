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

export interface Skill {
  icon: string;
  label: string;
}

export interface ContactLinkCardProps {
  title: string;
  handle: string;
  buttonLabel: string;
  href: string;
}

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  variant: ButtonVariant;
  width?: string | number;
  height?: string | number;
  fontSize?: string | number;
  onClick?: () => void;
  href?: string;
  className?: string;
}

// Since your input was an array of these objects:
export type ProjectList = ProjectItem[];
export type SkillCardProps = Skill[];
