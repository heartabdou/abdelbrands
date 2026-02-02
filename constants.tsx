
import { Project, Testimonial, BlogPost } from './types';

/**
 * HELPER: Cloudinary Optimizer
 * This function automatically adds optimization parameters to your Cloudinary links.
 * It ensures images are the right format (WebP/AVIF) and quality for fast loading.
 */
export const optimizeImage = (url: string, width?: number) => {
  if (!url.includes('cloudinary.com')) return url;
  
  // Inserts 'f_auto,q_auto' and optional width into the Cloudinary URL path
  const optimizationParams = width ? `f_auto,q_auto,w_${width}` : 'f_auto,q_auto';
  return url.replace('/upload/', `/upload/${optimizationParams}/`);
};

/**
 * ==========================================
 * 1. PERSONAL IDENTITY & BRANDING
 * ==========================================
 */
export const DESIGNER_NAME = "Abdel";
export const BRAND_NAME = "abdeldesigns";
export const DESIGNER_TAGLINE = "Designing Digital Products & Packaging That Sell";
export const DESIGNER_SUBHEADING = "UI/UX, web & app design, and packaging systems built to attract users and convert customers.";
export const DESIGNER_BIO = "A UI/UX, web, and packaging designer with a background in graphic design. I help startups, eCommerce brands, and digital products create clean, functional designs that convert users into customers. My work focuses on user experience, branding, packaging design, and modern web/app interfaces, blending strategy with visual clarity.";

/**
 * YOUR PROFILE IMAGE
 * Replace this with your Cloudinary URL.
 */
export const DESIGNER_IMAGE = "https://collection.cloudinary.com/dshgtdxb0/801ea4d9e909907fb188d3b036c78476&auto=format&fit=crop"; 

/**
 * CONTACT & SOCIAL
 */
export const DESIGNER_EMAIL = "hello@abdeldesigns.com";
export const BEHANCE_URL = "https://www.behance.net/abdelkdesign";
export const LINKEDIN_URL = "https://www.linkedin.com/in/lkabche-abdallah/";

/**
 * ==========================================
 * 2. PORTFOLIO PROJECTS
 * ==========================================
 */
export const PROJECTS: Project[] = [
  {
    id: 'bionic',
    title: 'Bionic',
    category: 'Packaging',
    description: 'Design premium, durable packaging and marketing materials for innovative dog toys.',
    // PASTE YOUR CLOUDINARY LINK HERE
    imageUrl: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop'
    ],
    year: '2023',
    client: 'Make Ideas – Keith Mullin',
    role: 'Packaging Designer',
    goals: [
      'Elevate product shelf appeal',
      'Communicate durability and innovation',
      'Support marketing across digital and print'
    ],
    challenge: 'Creating packaging that feels tough and playful while maintaining a clean, premium retail presence.',
    solution: 'Developed bold packaging visuals supported by brochures and product imagery, balancing durability cues with modern branding.',
    fullStory: 'Working closely with product developer Keith Mullin, the focus was on clarity, durability perception, and strong visual impact across all customer touchpoints.'
  },
  {
    id: 'dimples',
    title: 'Dimples',
    category: 'Packaging',
    description: 'Full packaging design for an ultra booster pad product focused on comfort and usability.',
    imageUrl: 'https://images.unsplash.com/photo-1610424564502-0e5445479606?q=80&w=2000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1584305650174-8898960f2d47?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599305090598-fe179d501c27?q=80&w=1000&auto=format&fit=crop'
    ],
    year: '2023',
    client: 'Dimples',
    role: 'Packaging Designer',
    goals: [
      'Clear product communication',
      'Strong shelf visibility',
      'User-friendly information hierarchy'
    ],
    challenge: 'Explaining product benefits clearly while keeping the packaging visually clean and approachable.',
    solution: 'Designed the complete packaging system with clear typography, soft visuals, and structured information flow.',
    fullStory: 'The project required balancing softness and performance visually, ensuring instant understanding at first glance.'
  },
  {
    id: 'insurance',
    title: 'Insurance',
    category: 'UI/UX',
    description: 'Design a user-friendly insurance website focused on clarity and trust.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
    ],
    year: '2021',
    client: 'Confidential Client',
    role: 'UI/UX Designer',
    goals: [
      'Improve user navigation',
      'Increase lead conversion',
      'Simplify complex information'
    ],
    challenge: 'Presenting complex insurance data without overwhelming the user.',
    solution: 'Created a clean UI/UX system with intuitive flows, clear CTAs, and accessible layouts.',
    fullStory: 'UX decisions were driven by user trust and readability, reducing friction across the journey.'
  }
];

/**
 * ==========================================
 * 3. JOURNAL / BLOG POSTS
 * ==========================================
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Tactile Digital: Why Packaging Needs UI Principles',
    date: 'March 12, 2024',
    readTime: '4 min read',
    excerpt: 'Exploring how the physical unboxing experience mirrors the digital onboarding process.',
    content: 'In the digital world, onboarding is the process of helping a user find their feet. In the physical world, this is the unboxing. Both require a clear hierarchy of information and a frictionless journey from the first touch to the core value.'
  },
  {
    id: 'b2',
    title: 'Minimalism is Not Empty Space',
    date: 'Feb 28, 2024',
    readTime: '6 min read',
    excerpt: 'Design is about removing the unnecessary until only the essential remains.',
    content: 'True minimalism isn\'t about having nothing; it\'s about having exactly what is needed and nothing more. It is a tool for focus, allowing the user to navigate a brand\'s message without the static of decorative clutter.'
  }
];

/**
 * ==========================================
 * 4. TESTIMONIALS
 * ==========================================
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    title: "Spectacular Design Work",
    quote: "Working with Abdel was an amazing experience. The design was spectacular, creative, and perfectly represented our brand.",
    author: "Burly Boyz Moving",
    role: "Strategic Logistics",
    company: ""
  },
  {
    id: 't2',
    title: "Highly Recommended",
    quote: "Abdel understood the project scope, filled missing gaps, and delivered with a strong artistic eye and great responsiveness.",
    author: "Strategic Partner",
    role: "Agency Relations",
    company: ""
  }
];
