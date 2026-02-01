
export type ProjectCategory = 'Packaging' | 'UI/UX' | 'Web Design' | 'Branding';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  imageUrl: string;
  year: string;
  client: string;
  fullStory: string;
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
