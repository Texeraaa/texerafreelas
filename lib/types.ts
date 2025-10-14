import { StaticImageData } from 'next/image';

// Navigation types
export interface NavigationItem {
  name: string;
  href: string;
}

// Personal information types
export interface PersonalInfo {
  name: string;
  title: {
    technical: string;
    simple: string;
  };
  description: {
    technical: string;
    simple: string;
  };
  experience: string;
  cvPath: string;
}

// Tech stack types
export interface TechStack {
  frontend: string[];
  backend: string[];
  cloud: string[];
}

// Social links types
export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

// Project types
export interface Project {
  title: string;
  description: string;
  descriptionSimple?: string;
  image: StaticImageData;
  technologies: string[];
  technologiesSimple?: string[];
  liveUrl: string;
  githubUrl?: string;
  category?: string;
}

// Service types
export interface Service {
  icon: string;
  title: string;
  titleSimple?: string;
  description: string;
  descriptionSimple?: string;
  features: string[];
  featuresSimple?: string[];
}

// Component props types
export interface HeaderProps {
  variant?: 'technical' | 'simple';
}

export interface SectionProps {
  id?: string;
  className?: string;
}

// Page version type
export type PageVersion = 'technical' | 'simple';

// Common component types
export interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
}
