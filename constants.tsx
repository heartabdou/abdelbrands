
import { Project, Testimonial, BlogPost } from './types';

/**
 * HELPER: Cloudinary Optimizer
 * This function automatically adds optimization parameters to your Cloudinary links.
 * It ensures images are the right format (WebP/AVIF) and quality for fast loading.
 */
export const optimizeImage = (url: string, width?: number) => {
  if (!url || typeof url !== 'string' || !url.includes('cloudinary.com')) return url;
  
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
    title: 'Why Professional Design Is an Investment, Not a Cost',
    date: 'March 12, 2024',
    readTime: '5 min read',
    excerpt: 'How UI/UX, web, and packaging design directly impact sales, trust, and growth.',
    content: `
      <h2>Why Professional Design Is an Investment, Not a Cost</h2>
      <p><strong>How UI/UX, web, and packaging design directly impact sales, trust, and growth.</strong></p>
      
      <h3>Introduction</h3>
      <p>Many businesses treat design as an expense — something cosmetic added at the end. In reality, professional design is a business investment that directly affects customer trust, conversion rates, and long-term brand value. Whether it’s a website, mobile app, or product packaging, design influences how people decide to buy.</p>

      <h3>How Design Shapes First Impressions</h3>
      <p>Users form an opinion about a brand in less than 5 seconds. A poorly designed website or packaging instantly signals low quality, even if the product itself is great.</p>
      <p>Professional design communicates:</p>
      <ul>
        <li><strong>Credibility</strong></li>
        <li><strong>Trust</strong></li>
        <li><strong>Attention to detail</strong></li>
      </ul>
      <p>This is often the difference between a user staying… or leaving.</p>

      <h3>UI/UX Design Drives Conversions</h3>
      <p>Good UI/UX design isn’t about trends — it’s about guiding users toward action.</p>
      <p>Well-designed interfaces:</p>
      <ul>
        <li>Reduce confusion</li>
        <li>Improve navigation</li>
        <li>Increase form submissions and purchases</li>
      </ul>
      <p>When users understand what to do next, conversion rates naturally increase.</p>

      <h3>Packaging Design Influences Buying Decisions</h3>
      <p>In physical and eCommerce environments, packaging acts as a silent salesperson.</p>
      <p>Strong packaging design:</p>
      <ul>
        <li>Differentiates your product on crowded shelves</li>
        <li>Creates perceived value</li>
        <li>Builds emotional connection with customers</li>
      </ul>
      <p>Premium design often allows brands to charge more without resistance.</p>

      <h3>Design Reduces Long-Term Costs</h3>
      <p>Investing in design early prevents:</p>
      <ul>
        <li>Costly redesigns</li>
        <li>Confusing user flows</li>
        <li>Poor customer retention</li>
      </ul>
      <p>A well-designed product scales better, performs better, and saves money over time.</p>

      <h3>Conclusion</h3>
      <p>Design is not decoration — it’s strategy. Businesses that invest in professional UI/UX, web, and packaging design gain trust faster, convert better, and grow stronger brands. The real cost isn’t hiring a designer — it’s not hiring one.</p>
    `
  },
  {
    id: 'b2',
    title: 'How Good UI/UX Design Turns Visitors Into Customers',
    date: 'Feb 28, 2024',
    readTime: '5 min read',
    excerpt: 'Why user experience is the key to higher conversions and business growth.',
    content: `
      <h2>How Good UI/UX Design Turns Visitors Into Customers</h2>
      <p><strong>Why user experience is the key to higher conversions and business growth.</strong></p>

      <h3>Introduction</h3>
      <p>Getting traffic to your website or app is only half the battle. If users don’t understand your product, trust your brand, or enjoy the experience, they won’t convert. This is where UI/UX design plays a critical role.</p>

      <h3>What UI/UX Design Really Means for Businesses</h3>
      <p>UI (User Interface) is how your product looks. UX (User Experience) is how it works.</p>
      <p>For businesses, this means:</p>
      <ul>
        <li>Clear messaging</li>
        <li>Intuitive navigation</li>
        <li>Smooth user journeys</li>
      </ul>
      <p>Good UI/UX removes friction between interest and action.</p>

      <h3>Why Users Leave Badly Designed Websites</h3>
      <p>Most users don’t complain — they simply leave.</p>
      <p>Common UX problems include:</p>
      <ul>
        <li>Confusing layouts</li>
        <li>Slow or cluttered pages</li>
        <li>Unclear calls to action</li>
      </ul>
      <p>Each issue increases bounce rate and lowers trust.</p>

      <h3>Design Builds Trust Before Sales Conversations</h3>
      <p>Before a client contacts you, they judge your business silently.</p>
      <p>Professional design communicates:</p>
      <ul>
        <li>Reliability</li>
        <li>Competence</li>
        <li>Brand maturity</li>
      </ul>
      <p>This trust makes users more willing to:</p>
      <ul>
        <li>Submit forms</li>
        <li>Book calls</li>
        <li>Complete purchases</li>
      </ul>

      <h3>Mobile-First UX Is No Longer Optional</h3>
      <p>Most users now interact with brands on mobile first.</p>
      <p>Mobile-optimized UI/UX:</p>
      <ul>
        <li>Improves accessibility</li>
        <li>Increases engagement</li>
        <li>Prevents lost sales</li>
      </ul>
      <p>Designing for mobile is designing for reality.</p>

      <h3>Measuring the Business Impact of UX</h3>
      <p>Good UX design leads to:</p>
      <ul>
        <li>Higher conversion rates</li>
        <li>Longer session times</li>
        <li>Better customer retention</li>
      </ul>
      <p>Design decisions backed by user behavior deliver measurable ROI.</p>

      <h3>Conclusion</h3>
      <p>UI/UX design isn’t about aesthetics — it’s about results. When your product is easy to use, clear, and enjoyable, customers stay longer, trust faster, and convert more often.</p>
    `
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
