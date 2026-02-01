
import { Project, Testimonial, BlogPost } from './types';

export const DESIGNER_NAME = "Abdel";
export const BRAND_NAME = "abdelbrands";
export const DESIGNER_TAGLINE = "Designing Digital Products & Packaging That Sell";
export const DESIGNER_SUBHEADING = "UI/UX, web & app design, and packaging systems built to attract users and convert customers.";
export const DESIGNER_BIO = "A UI/UX, web, and packaging designer with a background in graphic design. I help startups, eCommerce brands, and digital products create clean, functional designs that convert users into customers. My work focuses on user experience, branding, packaging design, and modern web/app interfaces, blending strategy with visual clarity.";

export const DESIGNER_EMAIL = "hello@abdelbrands.com";
export const BEHANCE_URL = "https://www.behance.net/abdelkdesign";
export const LINKEDIN_URL = "https://www.linkedin.com/in/lkabche-abdallah/";

export const PROJECTS: Project[] = [
  {
    id: 'bionic',
    title: 'Bionic',
    category: 'Packaging',
    description: 'Design premium, durable packaging and marketing materials for innovative dog toys.',
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
  },
  {
    id: 'nagle',
    title: 'Nagle',
    category: 'Web Design',
    description: 'High-conversion personal injury landing page for legal services.',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1453948588355-65846ca66530?q=80&w=1000&auto=format&fit=crop'
    ],
    year: '2021',
    client: 'Nagle Firm',
    role: 'Landing Page Designer',
    goals: [
      'Increase lead inquiries',
      'Build trust instantly',
      'Mobile-first optimization'
    ],
    challenge: 'Standing out in a competitive legal market while maintaining professionalism.',
    solution: 'Designed a conversion-focused landing page using strong hierarchy, testimonials, and trust signals.',
    fullStory: 'Every section was crafted to guide users toward action while reinforcing credibility.'
  },
  {
    id: 'protection',
    title: 'Protection',
    category: 'Packaging',
    description: 'Product label design emphasizing clarity, compliance, and shelf presence.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop'
    ],
    year: '2023',
    client: 'Protection Plus',
    role: 'Label Designer',
    goals: [
      'Clear information hierarchy',
      'Strong brand visibility',
      'Regulatory-friendly layout'
    ],
    challenge: 'Balancing regulatory requirements with visual appeal.',
    solution: 'Delivered a clean, structured label design that communicates trust and effectiveness.',
    fullStory: 'Precision and clarity guided every design decision to ensure instant readability.'
  },
  {
    id: 'solomons',
    title: 'Solomons',
    category: 'Web Design',
    description: 'Ecommerce website design for a flooring franchising business.',
    imageUrl: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1000&auto=format&fit=crop'
    ],
    year: '2023',
    client: 'Solomons Flooring',
    role: 'UI/UX Designer',
    goals: [
      'Improve online product discovery',
      'Support franchise inquiries',
      'Optimize conversion paths'
    ],
    challenge: 'Designing for both customers and franchise partners in one platform.',
    solution: 'Built a scalable ecommerce UX with structured navigation, product clarity, and conversion-focused layouts.',
    fullStory: 'The project required balancing ecommerce usability with brand authority for a large franchising network.'
  }
];

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
  },
  {
    id: 'b3',
    title: 'Packaging Strategy for E-Commerce',
    date: 'Jan 15, 2024',
    readTime: '5 min read',
    excerpt: 'How to design for the \"Secondary Shelf\" – the customer\'s doorstep.',
    content: 'The retail shelf is no longer the primary battlefield for many brands. The customer\'s kitchen table or office desk is where the brand relationship is solidified. We must design for transit durability as much as visual impact.'
  },
  {
    id: 'b4',
    title: 'Visual Clarity in Complex Dashboards',
    date: 'Dec 02, 2023',
    readTime: '8 min read',
    excerpt: 'Simplifying data-heavy interfaces without losing functional depth.',
    content: 'Complexity is a requirement in many SaaS tools, but complication is a choice. By using proper spacing, color-coded urgency, and progressive disclosure, we can present deep data without overwhelming the operator.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Abdel has a rare ability to translate complex brand values into physical form. The branding didn't just look better; it felt like our mission embodied.",
    author: "Elena Rossi",
    role: "Creative Director",
    company: "Aura London"
  }
];
