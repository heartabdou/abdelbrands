
import { Project, Testimonial } from './types';

export const DESIGNER_NAME = "Nova Sinclair";
export const DESIGNER_TAGLINE = "Packaging, UI/UX, & Web Designer";
export const DESIGNER_BIO = "I craft purposeful digital experiences and tactile physical identities. Based in London, working globally to bridge the gap between form and function through minimalist precision.";

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Aura Skincare',
    category: 'Packaging',
    description: 'Eco-conscious minimal glass packaging for premium organic skincare.',
    imageUrl: 'https://github.com/heartabdou/abdelbrands/blob/386d9c991f425c4c263f3641213a20fceaf228d0/images/Dimples.jpg?raw=true&auto=format&fit=crop',
    year: '2023',
    client: 'Aura London',
    fullStory: 'The challenge was to create a luxury feel using 100% recycled materials. We used matte-etched glass and debossed stone-paper labels to provide a tactile experience that reflects the purity of the ingredients.'
  },
  {
    id: '2',
    title: 'Nexa Fintech',
    category: 'UI/UX',
    description: 'A mobile-first banking experience designed for the next generation of investors.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    year: '2024',
    client: 'Nexa Global',
    fullStory: 'Nexa required a complex data visualization system that felt intuitive. I developed a design system focused on accessibility and rapid transaction flows.'
  },
  {
    id: '3',
    title: 'Monolith Studio',
    category: 'Web Design',
    description: 'Immersive portfolio site for a boutique architectural firm.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
    year: '2023',
    client: 'Monolith Architects',
    fullStory: 'For Monolith, the website had to feel like an architectural space. We used whitespace as a structural element and implemented smooth, scroll-based transitions.'
  },
  {
    id: '4',
    title: 'Origin Coffee Co.',
    category: 'Packaging',
    description: 'Experimental sustainable coffee pouches using mycelium-based materials.',
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2000&auto=format&fit=crop',
    year: '2022',
    client: 'Origin Co.',
    fullStory: 'Pushing the boundaries of compostable packaging, Origin Coffee required a moisture-barrier pouch that wouldn\'t harm the earth.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Nova has a rare ability to translate complex brand values into physical form. The Aura packaging didn't just look better; it felt like our mission embodied.",
    author: "Elena Rossi",
    role: "Creative Director",
    company: "Aura London"
  },
  {
    id: 't2',
    quote: "Precision is the word that comes to mind. The Nexa design system Nova built saved our engineering team months of back-and-forth.",
    author: "Marcus Chen",
    role: "Head of Product",
    company: "Nexa Global"
  },
  {
    id: 't3',
    quote: "Working with Nova is a masterclass in minimalist design. Every pixel and every material choice has a documented purpose.",
    author: "Sarah Jenkins",
    role: "Founder",
    company: "Monolith Architects"
  }
];
