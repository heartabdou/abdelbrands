
export type ProjectCategory = 'Packaging' | 'UI/UX' | 'Web Design' | 'Branding';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  imageUrl: string;
  galleryImages: string[];
  year: string;
  client: string;
  role?: string;
  goals?: string[];
  challenge?: string;
  solution?: string;
  fullStory: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
