
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
 */
export const DESIGNER_IMAGE = "https://res.cloudinary.com/dshgtdxb0/image/upload/v1770045455/2026-01-05_06.07_p2n8ac.jpg"; 

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
    id: 'solomons',
    title: 'Solomons',
    category: 'Web Design',
    description: 'Ecommerce website design for a flooring franchising business.',
    imageUrl: 'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770045614/Flooring_Franchising_Ecommerce_Website_Design_1_ig8spu.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770045615/Flooring_Franchising_Ecommerce_Website_Design-1_1_gsmdzg.jpg',
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770045615/Flooring_Franchising_Ecommerce_Website_Design-2_1_xysmyb.jpg'
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
  },
  {
    id: 'bionic',
    title: 'Bionic',
    category: ['Packaging', 'Branding'],
    description: 'Design premium, durable packaging and marketing materials for innovative dog toys.',
    imageUrl: 'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770058729/bionic_oacllq.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770058727/bionic3_rnie4s.jpg',
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770058728/bionic2_nksycj.jpg'
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
    imageUrl: 'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770058751/Dimples_bcm1pl.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770058751/Dimples3_vtl8bd.jpg',
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770058750/Dimples2_gjqeqe.jpg'
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
    imageUrl: 'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770058765/Draftrs_UIUX_q1r5ra.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770058766/Draftrs_illustartions_x3nrtw.jpg'
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
    title: 'Nagle Firm',
    category: 'Web Design',
    description: 'High-conversion personal injury landing page for legal services.',
    imageUrl: 'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770058782/nagle_firm_hpamjb.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770058782/nagle_firm_landing_page_s2c7zi.jpg',
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770058780/nagle_firm_landing_page_2_w1fp1m.jpg'
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
    title: 'Protection Plus',
    category: 'Packaging',
    description: 'Product label design emphasizing clarity, compliance, and shelf presence.',
    imageUrl: 'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770058779/Protection_plus_pf3mwd.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770058785/Protection_plus_2_kax4je.jpg',
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770058783/Protection_plus_3_sebaou.jpg'
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
    author: "Keith Mullin",
    role: "Product Developer",
    company: "Make Ideas"
  },
  {
    id: 't3',
    title: "Unparalleled Creativity",
    quote: "Abdel brings a level of strategic thinking to packaging that is rare. He doesn't just make it look good; he makes it sell.",
    author: "Sarah Jenkins",
    role: "Marketing Director",
    company: "Bionic Toys"
  },
  {
    id: 't4',
    title: "Clean and Professional",
    quote: "The ecommerce solution Abdel provided for our flooring business transformed our online presence and significantly boosted our leads.",
    author: "David Solomon",
    role: "Managing Director",
    company: "Solomons Flooring"
  }
];
