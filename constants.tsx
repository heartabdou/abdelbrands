
import { Project, Testimonial, BlogPost } from './types';

/**
 * HELPER: Cloudinary Optimizer
 */
export const optimizeImage = (url: string, width?: number) => {
  if (!url || typeof url !== 'string' || !url.includes('cloudinary.com')) return url;
  const optimizationParams = width ? `f_auto,q_auto,w_${width}` : 'f_auto,q_auto';
  return url.replace('/upload/', `/upload/${optimizationParams}/`);
};

export const DESIGNER_NAME = "Abdel";
export const BRAND_NAME = "abdeldesigns";
export const DESIGNER_TAGLINE = "Designing Digital Products & Packaging That Sell";
export const DESIGNER_SUBHEADING = "UI/UX, web & app design, and packaging systems built to attract users and convert customers.";
export const DESIGNER_BIO = "A UI/UX, web, and packaging designer with a background in graphic design. I help startups, eCommerce brands, and digital products create clean, functional designs that convert users into customers. My work focuses on user experience, branding, packaging design, and modern web/app interfaces, blending strategy with visual clarity.";

export const DESIGNER_IMAGE = "https://res.cloudinary.com/dshgtdxb0/image/upload/v1770045455/2026-01-05_06.07_p2n8ac.jpg"; 

export const DESIGNER_EMAIL = "hello@abdeldesigns.com";
export const BEHANCE_URL = "https://www.behance.net/abdelkdesign";
export const LINKEDIN_URL = "https://www.linkedin.com/in/lkabche-abdallah/";

/**
 * ==========================================
 * PORTFOLIO PROJECTS
 * Sorted by user request: Bionic, Microsoft, Starport, Racing first.
 * ==========================================
 */
export const PROJECTS: Project[] = [
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
    id: 'microsoft',
    title: 'Microsoft',
    category: 'UI/UX',
    description: 'Collage-style ad layouts for Microsoft Edge native ads.',
    imageUrl: 'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661927/Microsoft_image_xvjmls.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661927/Microsoft_project_details_1_ytkbec.jpg',
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661928/Microsoft_project_details_2_q1hfq7.jpg'
    ],
    year: '2023',
    client: 'Microsoft',
    role: 'UI/UX Design',
    goals: ['Maximize impact', 'Maintain brand', 'Increase engagement'],
    challenge: 'Standing out in competitive ad placements.',
    solution: 'Modular ad components optimized for attention.',
    fullStory: 'Designed for instant visual communication within the Edge ecosystem.'
  },
  {
    id: 'starport',
    title: 'Starport',
    category: 'UI/UX',
    description: 'Landing pages and web app interfaces for a real estate financing platform.',
    imageUrl: 'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661929/Starport_image_twgscw.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661929/Starport_details_1_wkwhvq.jpg',
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661929/Starport_project_details_2_oocnnu.jpg'
    ],
    year: '2025',
    client: 'Starport',
    role: 'UI/UX Design',
    goals: ['Improve clarity', 'Increase conversions', 'Build trust'],
    challenge: 'Explaining complex financial processes simply.',
    solution: 'Clean UI system with conversion-focused UX.',
    fullStory: 'Balanced advanced tech with human-centered design for a fintech audience.'
  },
  {
    id: 'racing',
    title: 'Racing',
    category: 'Branding',
    description: 'Redesign a high-impact sales presentation to attract sponsors and advertising partners for a professional football club.',
    imageUrl: 'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661925/club_el_ferrol_image_qxr3l6.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661923/club_el_ferrol_project_details_1_cu40z2.jpg',
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661923/club_el_ferrol_project_details_2_phwwj3.jpg'
    ],
    year: '2025',
    client: 'Racing de Ferrol',
    role: 'Presentation Design',
    goals: ['Present sponsorship value clearly', 'Communicate modernity and dynamism', 'Appeal to senior decision-makers'],
    challenge: 'Balancing business credibility with the emotional energy of football.',
    solution: 'Dynamic presentation system with strong hierarchy and modern visuals.',
    fullStory: 'Focused on clarity, energy, and sponsorship value for a top-tier football club.'
  },
  {
    id: 'volcano-coffee',
    title: 'Volcano COFFEE',
    category: 'Packaging',
    description: 'Premium coffee packaging design emphasizing quality and shelf impact.',
    imageUrl: 'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661944/Volcano_image_yrt6m5.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661944/Volcano_project_details_1_rielg6.jpg',
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661946/Volcano_project_details_2_istydo.jpg'
    ],
    year: '2024',
    client: 'Volcano King Coffee',
    role: 'Packaging Design',
    goals: ['Quality', 'Shelf impact', 'Premium appeal'],
    challenge: 'Communicating quality without clutter.',
    solution: 'Bold, refined packaging system.',
    fullStory: 'Focused on authenticity and confidence to stand out in the premium coffee market.'
  },
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
    goals: ['Improve online product discovery', 'Support franchise inquiries', 'Optimize conversion paths'],
    challenge: 'Designing for both customers and franchise partners in one platform.',
    solution: 'Built a scalable ecommerce UX with structured navigation, product clarity, and conversion-focused layouts.',
    fullStory: 'The project required balancing ecommerce usability with brand authority for a large franchising network.'
  },
  {
    id: 'basegreens',
    title: 'Basegreens',
    category: 'Packaging',
    description: 'Packaging for frozen health food product focused on convenience and visibility.',
    imageUrl: 'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661923/Basegreens_image_s0tkyy.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661923/Basegreens_project_details_1_fhr057.jpg',
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661924/Basegreens_project_details_2_djaeqw.jpg'
    ],
    year: '2024',
    client: 'Basegreens',
    role: 'Packaging Design',
    goals: ['Convenience', 'Nutrition', 'Shelf visibility'],
    challenge: 'Balancing health and simplicity.',
    solution: 'Clean, modern packaging design.',
    fullStory: 'Emphasized everyday usability for the health-conscious consumer.'
  },
  {
    id: 'creamer',
    title: 'Creamer',
    category: 'Packaging',
    description: 'Pouch and box design for condensed milk serving wholesale and retail.',
    imageUrl: 'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661947/Creamer_image_lf7v5g.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661925/Creamer_project_details_1_mkc2qq.jpg',
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661925/Creamer_project_details_2_jgc2av.jpg'
    ],
    year: '2024',
    client: 'Confidential Brand',
    role: 'Packaging Design',
    goals: ['Natural quality', 'Multi-channel', 'Clarity'],
    challenge: 'Serving wholesale and retail with a single look.',
    solution: 'Flexible packaging system.',
    fullStory: 'Ensured consistency across different formats for a seamless brand experience.'
  },
  {
    id: 'kyalin',
    title: 'Kyalin',
    category: 'Packaging',
    description: 'Unified packaging for protein products migrating two brands into one.',
    imageUrl: 'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661928/Kyalin_image_xj2hux.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661927/Kyalin_project_details_1_mxiomy.jpg'
    ],
    year: '2024',
    client: 'Kyalin',
    role: 'Packaging Design',
    goals: ['Brand merge', 'Trust', 'Clarity'],
    challenge: 'Migrating two distinct brands into one cohesive identity.',
    solution: 'Refined unified design system.',
    fullStory: 'Built for long-term scalability and brand recognition in the health supplement sector.'
  },
  {
    id: 'music-app',
    title: 'Music App',
    category: 'UI/UX',
    description: 'Mobile entertainment app for music lovers with multi-generation appeal.',
    imageUrl: 'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661928/Music_image_lphbsp.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661928/music_project_details_1_mcpiyo.jpg',
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661928/music_project_details_2_ijoyaz.jpg'
    ],
    year: '2023',
    client: 'Independent Client',
    role: 'Mobile UI/UX Design',
    goals: ['Multi-generation appeal', 'Exploration', 'Engagement'],
    challenge: 'Designing for diverse age groups.',
    solution: 'Flexible UI system with immersive visuals.',
    fullStory: 'Focused on rhythm and interaction flow to create a seamless listening experience.'
  },
  {
    id: 'velluto-verde',
    title: 'Velluto Verde',
    category: 'UI/UX',
    description: 'Luxury website for a streetwear and NFT startup merging fashion with digital culture.',
    imageUrl: 'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661938/vellutoverde_image_su0lsc.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661938/vellutoverde_project_details_1_bhvbhr.jpg',
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661944/vellutoverde_project_details_2_te6byl.jpg'
    ],
    year: '2023',
    client: 'Velluto Verde',
    role: 'UI/UX Design',
    goals: ['Exclusivity', 'Fashion & Web3', 'Community'],
    challenge: 'Merging luxury with digital culture.',
    solution: 'Bold editorial-style interface.',
    fullStory: 'Inspired by vintage casino aesthetics to create a unique sense of exclusivity.'
  },
  {
    id: 'rover-gin',
    title: 'Rover Gin',
    category: 'Packaging',
    description: 'Colorful gin label inspired by island culture for social settings.',
    imageUrl: 'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661929/Rover_image_wmusi4.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661929/Rover_project_details_1_bo0wmx.jpg'
    ],
    year: '2023',
    client: 'Mauritius Gin',
    role: 'Label Design',
    goals: ['Stand out', 'Youth appeal', 'Cocktail use'],
    challenge: 'Balancing fun with premium feel.',
    solution: 'Vibrant, expressive label design.',
    fullStory: 'Designed to capture the spirit of island culture and energy.'
  },
  {
    id: 'iherb',
    title: 'iHerb',
    category: 'UI/UX',
    description: 'Email templates for health and wellness products optimized for conversion.',
    imageUrl: 'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661926/iherb_image_pkppzn.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661926/iherb_project_details_1_edzsxa.jpg',
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661927/iherb_project_details_2_dpoyft.jpg'
    ],
    year: '2021',
    client: 'iHerb Brands',
    role: 'Email Design',
    goals: ['CTR', 'Brand consistency', 'Readability'],
    challenge: 'Multiple product categories in one design.',
    solution: 'Modular email system.',
    fullStory: 'Optimized for conversion across massive global audiences.'
  },
  {
    id: 'bbm',
    title: 'BBM',
    category: 'Branding',
    description: 'Brochure for premium moving services focused on reliability and care.',
    imageUrl: 'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661923/BBM_image_jmpgkg.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661923/BBM_project_details_2_anbify.jpg',
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661925/BBM_project_details_1_rszz0e.jpg'
    ],
    year: '2024',
    client: 'Burly Boyz Moving',
    role: 'Graphic Design',
    goals: ['Trust', 'Professionalism', 'Sales support'],
    challenge: 'Differentiating premium service in a commodity market.',
    solution: 'Clean, confident brochure design.',
    fullStory: 'Focused on reliability and care to justify premium positioning.'
  },
  {
    id: 'ifs-cafe',
    title: 'IFS Cafe',
    category: 'Web Design',
    description: 'Membership-based community website for therapists balancing warmth with professionalism.',
    imageUrl: 'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661925/IFS_image_kquqiv.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661925/IFS_project_details_1_id1pv3.jpg',
      'https://res.cloudinary.com/dshgtdxb0/image/upload/v1770661926/IFS_project_details_2_j5tllz.jpg'
    ],
    year: '2024',
    client: 'IFS Community Cafe',
    role: 'Web Design',
    goals: ['Trust', 'Engagement', 'Growth'],
    challenge: 'Balancing warmth with professional credibility.',
    solution: 'Calming, human-centered web experience.',
    fullStory: 'Designed for emotional safety and clarity within a professional therapist network.'
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
    goals: ['Clear product communication', 'Strong shelf visibility', 'User-friendly information hierarchy'],
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
    goals: ['Improve user navigation', 'Increase lead conversion', 'Simplify complex information'],
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
    goals: ['Increase lead inquiries', 'Build trust instantly', 'Mobile-first optimization'],
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
    goals: ['Clear information hierarchy', 'Strong brand visibility', 'Regulatory-friendly layout'],
    challenge: 'Balancing regulatory requirements with visual appeal.',
    solution: 'Delivered a clean, structured label design that communicates trust and effectiveness.',
    fullStory: 'Precision and clarity guided every design decision to ensure instant readability.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Why Professional Design Is an Investment, Not a Cost',
    date: 'March 12, 2024',
    readTime: '5 min read',
    excerpt: 'How UI/UX, web, and packaging design directly impact sales, trust, and growth.',
    content: `
      <h2>Why Professional Design Is an Investment, Not a Cost</h2>
      <p><strong>How UI/UX, web, and packaging design directly impact sales, trust, and growth.</strong></p>
      <h3>Introduction</h3>
      <p>Many businesses treat design as an expense — something cosmetic added at the end. In reality, professional design is a business investment that directly affects customer trust, conversion rates, and long-term brand value.</p>
      <h3>Conclusion</h3>
      <p>Design is not decoration — it’s strategy. Businesses that invest in professional UI/UX, web, and packaging design gain trust faster, convert better, and grow stronger brands.</p>
    `
  }
];

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
  }
];
